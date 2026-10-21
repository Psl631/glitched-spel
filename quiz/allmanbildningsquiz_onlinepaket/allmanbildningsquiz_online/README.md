# Allmänbildningsquiz – gemensam topplista med Supabase

Det här paketet innehåller en HTML-klient, SQL-schema och en Supabase Edge Function. Resultat lagras centralt och räknas på servern; klienten får aldrig facit vid start.

## Vad ingår?

- 20 blandade frågor, ingen tidsgräns.
- Spelaren väljer ett namn.
- Servern räknar poäng och sluttid.
- Gemensam topplista: flest rätt först, kortast tid som skiljeregel.
- En fråga kan besvaras endast en gång per session och i rätt ordning.
- Vinnaren granskas manuellt av arrangören.

## 1. Skapa Supabase-projekt

1. Öppna https://supabase.com/ och skapa ett projekt.
2. Spara databaslösenordet på ett säkert ställe. L9d@TL5ptGCF54D
3. Öppna SQL Editor i projektpanelen.
4. Klistra in hela innehållet från `supabase/schema.sql` och kör det.

## 2. Installera Supabase CLI

Installera Supabase CLI enligt den officiella guiden:
https://supabase.com/docs/guides/cli

Logga in och länka projektet från den här mappen:

```bash
supabase login
supabase link --project-ref DITT_PROJECT_REF
```

## 3. Publicera serverfunktionen

Från mappen där `supabase/` ligger, kör:

```bash
supabase functions deploy quiz-api
```

Funktionen använder Supabases servermiljö och dess `SUPABASE_URL` samt `SUPABASE_SERVICE_ROLE_KEY`. Dessa finns tillgängliga automatiskt i Supabase Edge Functions. Lägg ALDRIG service-role-nyckeln i HTML eller på Google Sites.

## 4. Koppla HTML-filen till projektet

1. I Supabase: Project Settings → API.
2. Kopiera Project URL och publishable key (i äldre projekt kan den heta anon/public key).
3. Öppna `index.html` i en textredigerare.
4. Hitta `SUPABASE_URL` och `SUPABASE_ANON_KEY` nära början av JavaScript.
5. Ersätt platshållarna med dina värden. Behåll citattecknen.
6. Spara filen.

Publishable/anon-nyckeln är avsedd för klientbruk; säkerheten måste därför komma från databasbehörigheter och serverfunktionens kontroller. Den hemliga service-role-nyckeln ska aldrig publiceras.

## 5. Publicera HTML och bädda in i Google Sites

Google Sites kan bädda in en extern publicerad webbadress, men inte fungera som server för en hel HTML-fil med egen backend. Publicera `index.html` på en statisk webbhost, till exempel GitHub Pages, Netlify eller Cloudflare Pages.

Exempel med GitHub Pages:
1. Skapa ett repository och lägg `index.html` i roten.
2. Aktivera Pages i repositoryts Settings → Pages.
3. Öppna den publicerade HTTPS-adressen och testa quizet.
4. I Google Sites: Infoga → Bädda in → URL, klistra in speladressen och infoga.
5. Publicera Google Sites-sidan.

Om inbäddningen blockeras av webbläsaren eller värdtjänstens inställningar, lägg en tydlig knapp/länk i Google Sites som öppnar spelet i en ny flik.

## 6. Hur servervalideringen fungerar

- Facit ligger i `quiz_questions` och skickas inte till webbläsaren när quizet startar.
- Servern skapar en session med starttid.
- Svar tas emot i ordning och endast ett svar per fråga accepteras.
- Poängen räknas i Edge Function, inte utifrån ett poängtal som klienten skickar.
- Sluttiden beräknas från serverns tidsstämplar.
- Topplistan hämtas från databasen och kan inte skrivas direkt från klienten.
- En enkel minimigräns på svarstid per fråga försvårar automatiserad gissning, men kan inte garantera att allt fusk förhindras.

## 7. Kontrollera vinnaren manuellt

Före prisutdelning:
1. Öppna Supabase Table Editor → `quiz_sessions`.
2. Granska bästa färdiga resultat och jämför poäng/sluttid.
3. Kontrollera misstänkta resultat (till exempel onormalt kort tid).
4. Kontakta vinnaren enligt reglerna och dokumentera vem som får priset.

Rekommenderade tävlingsregler: ange start- och sluttid för tävlingen, om flera försök är tillåtna, hur visningsnamn hanteras, vad som händer vid lika poäng/tid och hur arrangören verifierar vinnaren.

## Viktiga begränsningar

- Anonyma spelarnamn bevisar inte deltagarens identitet. Om priset är värdefullt kan du behöva verifiering innan utdelning.
- En offentlig tävling kan utsättas för bottar, flera konton eller manipulation av klienten. För högre säkerhet behövs till exempel CAPTCHA, hastighetsbegränsning, kontoinloggning eller manuell granskning.
- Den här demon tillåter flera spelomgångar med samma namn. Topplistan visar bästa 10 resultat.
- Testa med två olika webbläsare/enheter innan du öppnar tävlingen för allmänheten.
