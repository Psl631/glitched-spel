import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
  });

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  { auth: { persistSession: false, autoRefreshToken: false } },
);

const QUESTION_COUNT = 20;
// Enkel bot-/speed-run-spärr: minst 2 sekunder mellan registrerade svar.
// Det finns ingen maxgräns och spelaren kan ta hur lång tid som helst.
const MIN_SECONDS_BETWEEN_ANSWERS = 2;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Endast POST stöds." }, 405);

  try {
    const body = await req.json();
    const action = body?.action;

    if (action === "start") {
      const name = String(body.player_name ?? "").trim().replace(/\s+/g, " ").slice(0, 24);
      if (name.length < 1) return json({ error: "Skriv ett spelarnamn." }, 400);

      const { data: questions, error: qErr } = await supabase
        .from("quiz_questions")
        .select("id,category,question,options")
        .order("id", { ascending: true });
      if (qErr) throw qErr;
      if (!questions || questions.length !== QUESTION_COUNT) {
        return json({ error: "Quizet är inte korrekt konfigurerat: förväntades 20 frågor." }, 500);
      }

      const { data: session, error: sErr } = await supabase
        .from("quiz_sessions")
        .insert({ player_name: name, status: "active" })
        .select("id")
        .single();
      if (sErr) throw sErr;

      return json({ session_id: session.id, questions });
    }

    if (action === "answer") {
      const sessionId = String(body.session_id ?? "");
      const questionId = Number(body.question_id);
      const selectedIndex = Number(body.selected_index);
      if (!/^[0-9a-f-]{36}$/i.test(sessionId) ||
          !Number.isInteger(questionId) || questionId < 1 || questionId > QUESTION_COUNT ||
          !Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex > 3) {
        return json({ error: "Ogiltigt svar." }, 400);
      }

      const { data: session, error: sErr } = await supabase
        .from("quiz_sessions").select("id,status,started_at")
        .eq("id", sessionId).maybeSingle();
      if (sErr) throw sErr;
      if (!session || session.status !== "active") return json({ error: "Spelsessionen finns inte eller är redan avslutad." }, 409);

      const { data: prior, error: pErr } = await supabase
        .from("quiz_answers").select("question_id,answered_at")
        .eq("session_id", sessionId).order("question_id", { ascending: true });
      if (pErr) throw pErr;
      const expectedQuestionId = (prior?.length ?? 0) + 1;
      if (questionId !== expectedQuestionId) return json({ error: "Frågorna måste besvaras i ordning och bara en gång." }, 409);
      const previousTime = prior?.length
        ? new Date(prior[prior.length - 1].answered_at).getTime()
        : new Date(session.started_at).getTime();
      if (Date.now() - previousTime < MIN_SECONDS_BETWEEN_ANSWERS * 1000) {
        return json({ error: "Vänta en liten stund innan du svarar. Ingen maxgräns gäller." }, 429);
      }

      const { data: question, error: questionErr } = await supabase
        .from("quiz_questions").select("options,correct_index,explanation")
        .eq("id", questionId).single();
      if (questionErr) throw questionErr;

      const isCorrect = selectedIndex === question.correct_index;
      const { error: insertErr } = await supabase.from("quiz_answers").insert({
        session_id: sessionId,
        question_id: questionId,
        selected_index: selectedIndex,
        is_correct: isCorrect,
      });
      if (insertErr) {
        if (insertErr.code === "23505") return json({ error: "Du har redan svarat på den här frågan." }, 409);
        throw insertErr;
      }
      return json({
        is_correct: isCorrect,
        correct_answer: question.options[question.correct_index],
        explanation: question.explanation,
      });
    }

    if (action === "finish") {
      const sessionId = String(body.session_id ?? "");
      if (!/^[0-9a-f-]{36}$/i.test(sessionId)) return json({ error: "Ogiltig session." }, 400);
      const { data: session, error: sErr } = await supabase
        .from("quiz_sessions").select("id,status,started_at,finished_at,score,elapsed_ms")
        .eq("id", sessionId).maybeSingle();
      if (sErr) throw sErr;
      if (!session) return json({ error: "Spelsessionen hittades inte." }, 404);

      if (session.status === "finished") {
        return json({ score: session.score, elapsed_ms: session.elapsed_ms, already_finished: true });
      }
      if (session.status !== "active") return json({ error: "Den här sessionen kan inte avslutas." }, 409);

      const { data: answers, error: aErr } = await supabase
        .from("quiz_answers").select("question_id,is_correct")
        .eq("session_id", sessionId).order("question_id", { ascending: true });
      if (aErr) throw aErr;
      if (!answers || answers.length !== QUESTION_COUNT ||
          answers.some((a, i) => a.question_id !== i + 1)) {
        return json({ error: "Besvara alla 20 frågor innan du visar resultatet." }, 409);
      }

      const finishedAt = new Date();
      const startedAt = new Date(session.started_at);
      const elapsedMs = Math.max(0, finishedAt.getTime() - startedAt.getTime());
      const score = answers.reduce((sum, a) => sum + (a.is_correct ? 1 : 0), 0);
      const { error: updateErr } = await supabase.from("quiz_sessions").update({
        status: "finished",
        finished_at: finishedAt.toISOString(),
        score,
        elapsed_ms: elapsedMs,
      }).eq("id", sessionId).eq("status", "active");
      if (updateErr) throw updateErr;
      return json({ score, elapsed_ms: elapsedMs });
    }

    if (action === "leaderboard") {
      const { data, error } = await supabase
        .from("quiz_sessions")
        .select("player_name,score,elapsed_ms,finished_at")
        .eq("status", "finished")
        .not("score", "is", null)
        .order("score", { ascending: false })
        .order("elapsed_ms", { ascending: true })
        .order("finished_at", { ascending: true })
        .limit(10);
      if (error) throw error;
      return json({
        results: (data ?? []).map((row) => ({
          player_name: row.player_name,
          score: row.score,
          elapsed_ms: row.elapsed_ms,
        })),
      });
    }

    return json({ error: "Okänd åtgärd." }, 400);
  } catch (error) {
    console.error("quiz-api error:", error);
    return json({ error: "Ett serverfel inträffade. Försök igen senare." }, 500);
  }
});
