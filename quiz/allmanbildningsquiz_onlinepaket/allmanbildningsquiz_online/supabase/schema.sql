-- Kör detta i Supabase SQL Editor.
-- Frågetabellen är endast läsbar för serverfunktionens service role.
create extension if not exists pgcrypto;

create table if not exists public.quiz_questions (
  id integer primary key,
  category text not null,
  question text not null,
  options jsonb not null check (jsonb_typeof(options) = 'array' and jsonb_array_length(options) = 4),
  correct_index integer not null check (correct_index between 0 and 3),
  explanation text not null
);

create table if not exists public.quiz_sessions (
  id uuid primary key default gen_random_uuid(),
  player_name text not null check (char_length(player_name) between 1 and 24),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  score integer,
  elapsed_ms bigint,
  status text not null default 'active' check (status in ('active','finished','abandoned'))
);

create table if not exists public.quiz_answers (
  session_id uuid not null references public.quiz_sessions(id) on delete cascade,
  question_id integer not null references public.quiz_questions(id),
  selected_index integer not null check (selected_index between 0 and 3),
  is_correct boolean not null,
  answered_at timestamptz not null default now(),
  primary key (session_id, question_id)
);

create index if not exists quiz_sessions_leaderboard_idx
  on public.quiz_sessions (score desc, elapsed_ms asc)
  where status = 'finished';

alter table public.quiz_questions enable row level security;
alter table public.quiz_sessions enable row level security;
alter table public.quiz_answers enable row level security;

-- Ingen klientpolicy skapas. Anon/publishable-key får därför inte läsa eller skriva
-- tabellerna direkt. Edge Function använder service role på serversidan.

insert into public.quiz_questions (id,category,question,options,correct_index,explanation) values
(1,'Geografi','Vilket land har flest invånare enligt aktuella uppskattningar?', '["Indien","Kina","USA","Indonesien"]'::jsonb,0,'Indien gick om Kina i befolkningsstorlek under 2023.'),
(2,'Rymden','Vilken planet ligger närmast solen?','["Venus","Jorden","Merkurius","Mars"]'::jsonb,2,'Merkurius är den innersta planeten i solsystemet.'),
(3,'Historia','Vilket år föll Berlinmuren?','["1985","1989","1991","1995"]'::jsonb,1,'Berlinmuren öppnades den 9 november 1989.'),
(4,'Naturvetenskap','Vilken gas tar växter upp vid fotosyntesen?','["Syre","Kväve","Koldioxid","Helium"]'::jsonb,2,'Växter använder koldioxid, vatten och ljus i fotosyntesen.'),
(5,'Litteratur','Vem skrev böckerna om Pippi Långstrump?','["Tove Jansson","Astrid Lindgren","Selma Lagerlöf","Maria Gripe"]'::jsonb,1,'Astrid Lindgren skapade Pippi Långstrump.'),
(6,'Kroppen','Vilket organ pumpar runt blodet i kroppen?','["Lungan","Levern","Hjärtat","Njuren"]'::jsonb,2,'Hjärtat fungerar som kroppens pump.'),
(7,'Geografi','Vad heter huvudstaden i Kanada?','["Toronto","Vancouver","Montreal","Ottawa"]'::jsonb,3,'Ottawa är Kanadas huvudstad.'),
(8,'Djur','Vilket är det största nu levande djuret?','["Afrikansk elefant","Blåval","Giraff","Valhaj"]'::jsonb,1,'Blåvalen är det största kända nu levande djuret.'),
(9,'Matematik','Vad är 12 × 8?','["86","92","96","108"]'::jsonb,2,'12 multiplicerat med 8 är 96.'),
(10,'Musik','Vilket instrument har vanligtvis 88 tangenter?','["Gitarr","Piano","Flöjt","Trumpet"]'::jsonb,1,'Ett standardpiano har vanligtvis 88 tangenter.'),
(11,'Sverige','Vilket är Sveriges största landskap till ytan?','["Dalarna","Lappland","Skåne","Jämtland"]'::jsonb,1,'Lappland är Sveriges största landskap till ytan.'),
(12,'Teknik','Vad står förkortningen WWW för?','["World Wide Web","Web World Window","Wide World Wire","World Web Watch"]'::jsonb,0,'WWW står för World Wide Web.'),
(13,'Hav','Vilket är världens största hav?','["Atlanten","Indiska oceanen","Stilla havet","Norra ishavet"]'::jsonb,2,'Stilla havet är störst till yta och volym.'),
(14,'Konst','Vem målade Mona Lisa?','["Vincent van Gogh","Claude Monet","Pablo Picasso","Leonardo da Vinci"]'::jsonb,3,'Mona Lisa målades av Leonardo da Vinci.'),
(15,'Sport','Hur många spelare från ett lag är normalt på planen i fotboll?','["9","10","11","12"]'::jsonb,2,'Ett lag har normalt 11 spelare på planen, inklusive målvakten.'),
(16,'Kemi','Vilken kemisk beteckning har guld?','["Ag","Au","Fe","Gd"]'::jsonb,1,'Guld har beteckningen Au, från latinets aurum.'),
(17,'Världen','På vilken kontinent ligger Egypten huvudsakligen?','["Asien","Europa","Afrika","Sydamerika"]'::jsonb,2,'Större delen av Egypten ligger i Afrika.'),
(18,'Språk','Vilket språk har flest modersmålstalare?','["Engelska","Spanska","Hindi","Mandarin-kinesiska"]'::jsonb,3,'Mandarin-kinesiska brukar anges som språket med flest modersmålstalare.'),
(19,'Väder','Vad mäter en termometer?','["Lufttryck","Temperatur","Vindhastighet","Luftfuktighet"]'::jsonb,1,'En termometer mäter temperatur.'),
(20,'Historia','Vilken civilisation byggde Machu Picchu?','["Romarna","Maya","Inka","Forntida Egypten"]'::jsonb,2,'Machu Picchu byggdes av inka-civilisationen i nuvarande Peru.')
on conflict (id) do update set category=excluded.category, question=excluded.question, options=excluded.options, correct_index=excluded.correct_index, explanation=excluded.explanation;
