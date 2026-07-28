/**
 * STATION 24 - HANGMAN PROTOCOL ENGINE v4.1
 * Multi-Language Scandinavian & English - Auto-Detect Native Integration
 */

// --- GLOBAL STATE ---
var gameActive = false, currentStreak = 0, seconds = 0, timer;
var cfgCam = false, cfgMic = false, kStrikes = 0;
var currentPlayer = "Gäst";

// --- AUDIO ASSETS ---
const sndKamek = new Audio('kamek.mp3');
const sndTuta = new Audio('tuta.mp3');
const sndYay = new Audio('yay.mp3');
const sndLoss = new Audio('f6_sad_trombone.mp3');

// --- INTEGRATED DICTIONARIES BY LANGUAGE ---
const multiLangData = {
    sv: {
        "LAN-MAT": ["ENERGIDRYCK", "BILLIGPIZZA", "BILYS", "GORBYS", "PIZZAKIT", "NUDLAR", "LÄSKBACK", "CHIPS", "SNABBMAT", "KAFFE"],
        "PC-KOMPONENTER": ["GRAFIKKORT", "MODERKORT", "PROCESSOR", "NÄTAGGREGAT", "CHASSI", "FLÄKTKONTROLL", "KYLPASTA", "MINNESKRETS", "HÅRDDISK", "LJUDKORT"],
        "GAMING-SLANG": ["NOOBS", "CLUTCH", "CAMPING", "HEADSHOT", "GRIEFING", "SMURFING", "KITING", "FRAGGING", "SPAWNPOINT", "SPEEDRUN"],
        "RETROSPEL": ["PACMAN", "TETRIS", "PONG", "DONKEYKONG", "ASTEROIDS", "SPACEINVADERS", "MEGAMAN", "FROGGER", "ZELDA", "METROID"],
        "NÄTVERK": ["ROUTER", "SWITCH", "IPADRESS", "PROTOKOLL", "BRANDVÄGG", "LATENS", "BANDBREDD", "ETHERNET", "PING", "GATEWAY"],
        "PROGRAMMERING": ["VARIABEL", "FUNKTION", "LOOPS", "REKURSION", "KOMPILATOR", "SYNTAX", "DEBUGGING", "ALGORITM", "MÅSVINGE", "BOOLEAN"],
        "MATRÄTTER": ["PANNKAKOR", "LASAGNE", "HAMBURGARE", "TACOS", "PIZZA", "SUSHI", "KÖTTBULLAR", "PASTA", "RAGGMUNK", "KEBAB"],
        "LÄNDER": ["SVERIGE", "DANMARK", "NORGE", "TYSKLAND", "FRANKRIKE", "ITALIEN", "SPANIEN", "FINLAND", "STORBRITANNIEN", "JAPAN", "AUSTRALIEN", "KANADA", "BRASILIEN", "EGYPTEN", "INDIEN"],
        "SVENSKA-STÄDER": ["JÖNKÖPING", "STOCKHOLM", "GÖTEBORG", "MALMÖ", "SÖDERTÄLJE", "SKÖVDE", "LINKÖPING", "NORRKÖPING", "UPPSALA", "VÄSTERÅS", "ÖREBRO", "UMEÅ", "LULEÅ", "VISBY", "BORÅS"],
        "I-HEMMET": ["SOFFA", "INNERTAK", "KYLSKÅP", "KAFFEKOKARE", "DISKBMASKIN", "STUVRÄNNA", "FÅTÖLJ", "KLÄDKAMMARE", "VÄRMEELEMENT", "TVÄTTMASKIN", "MATBORD", "KUDDE", "MOCKABRYGGA", "DAMMSUGARE", "STRÖMBRYTARE"],
        "KONTOR": ["SKRIVBORD", "KONTORSSTOL", "HÅLSLAGARE", "SKRIVARE", "TANGENTBORD", "DATAMUS", "DOKUMENTSKÅP", "BLÄCKPENNA", "BLOCK", "KAFFEMASKIN", " whiteboard", "KEDJESTYGN", "GEM", "SKÄRMMATTA", "DOCKNINGSSTATION"],
        "FORDON": ["HELIKOPTER", "UBÅT", "SPÅRVAGN", "TRAKTOR", "MOTORCYKEL", "LASTBIL", "MOPED", "SKOTER", "CYKEL", "AMBULANS"]
    },
    da: {
        "LAN-MAD": ["ENERGIDRIK", "BILLIGPIZZA", "BURGER", "NUDLER", "SODAVAND", "CHIPS", "FASTFOOD", "KAFFE", "SHAWARMA", "POMFRITTER"],
        "PC-KOMPONENTER": ["GRAFIKKORT", "BUNDKORT", "PROCESSOR", "STRØMFORSYNING", "KABINET", "KØLEPASTA", "RAMBLOK", "HARDDISK", "LYDKORT", "BLÆSER"],
        "GAMING-SLANG": ["NOOBS", "CLUTCH", "CAMPING", "HEADSHOT", "SMURFING", "FRAGGING", "SPAWNPOINT", "SPEEDRUN", "LAGGING", "BOOSTING"],
        "RETROSPIL": ["PACMAN", "TETRIS", "PONG", "DONKEYKONG", "ASTEROIDS", "MEGAMAN", "FROGGER", "ZELDA", "METROID", "SPACEINVADERS"],
        "NETVÆRK": ["ROUTER", "SWITCH", "IPADRESSE", "PROTOKOL", "BRANDVÆG", "LATENS", "BÅNDBREDDE", "ETHERNET", "PING", "GATEWAY"],
        "PROGRAMMERING": ["VARIABEL", "FUNKTION", "LØKKER", "REKURSION", "KOMPILATOR", "SYNTAX", "DEBUGGING", "ALGORITME", "BOOLEAN", "ARRAY"],
        "LANDE": ["DANMARK", "SVERIGE", "NORGE", "TYSKLAND", "FRANGRIGE", "ITALIEN", "SPANIEN", "FINLAND", "STORBRITANNIEN", "JAPAN", "AUSTRALIEN", "CANADA", "BRASILIEN", "EGYPTEN", "INDIEN"],
        "SVENSKE-BYER": ["JÖNKÖPING", "STOCKHOLM", "GÖTEBORG", "MALMÖ", "SÖDERTÄLJE", "SKÖVDE", "LINKÖPING", "NORRKÖPING", "UPPSALA", "VÄSTERÅS", "ÖREBRO", "UMEÅ", "LULEÅ", "VISBY", "BORÅS"],
        "I-HJEMMET": ["SOFA", "LOFT", "KØLESKAB", "KAFFEMASKINE", "OPVASKEMASKINE", "STUE", "LÆNESTOL", "GARDEROBE", "RADIATOR", "VASKEMASKINE", "SPISEBORD", "PUDE", "STØVSUGER", "AFBRYDER", "SPEJL"],
        "KONTOR": ["SKRIVEBORD", "KONTORSTOL", "HULMASKINE", "PRINTER", "TASTATUR", "DATAMUS", "DOKUMENTSKAB", "KUGLEPEN", "BLOK", "KAFFEMASKINE", "WHITEBOARD", "CLIP", "SKÆRMBESKYTTER", "DOCKINGSTATION", "PAPIRKURV"],
        "MADRETTER": ["PANDEKAGER", "LASAGNE", "HAMBURGER", "TACOS", "PIZZA", "SUSHI", "KØDBOLLER", "PASTA", "KEBAB", "SMØRREBRØD"],
        "KØRETØJER": ["HELIKOPTER", "UBÅD", "SPORVOGN", "TRAKTOR", "MOTORCYKEL", "LASTBIL", "MOPED", "CYKEL", "AMBULANCE", "TOGVOGN"]
    },
    no: {
        "LAN-MAT": ["ENERGIDRIKK", "BILLIGPIZZA", "GORBYS", "NUDLER", "BRUS", "CHIPS", "FASTFOOD", "KAFFE", "KEBAB", "VAFLER"],
        "PC-KOMPONENTER": ["GRAFIKKORT", "HEDERSKORT", "PROSESSOR", "STRØMFORSYNING", "KABINETT", "KJØLEPASTA", "RAMBRIKKE", "HARDDISK", "LYDKORT", "VIFTE"],
        "GAMING-SLANG": ["NOOBS", "CLUTCH", "CAMPING", "HEADSHOT", "SMURFING", "FRAGGING", "SPAWNPOINT", "SPEEDRUN", "LAGG", "CARRY"],
        "RETROSPILL": ["PACMAN", "TETRIS", "PONG", "DONKEYKONG", "ASTEROIDS", "MEGAMAN", "FROGGER", "ZELDA", "METROID", "SPACEINVADERS"],
        "NETTVERK": ["RUTER", "BRYTER", "IPADRESSE", "PROTOKOLL", "BRANNMUR", "LATENS", "BÅNDBREDDE", "ETHERNET", "PING", "PORTVEI"],
        "PROGRAMMERING": ["VARIABEL", "FUNKSJON", "LØKKER", "REKURSJON", "KOMPILATOR", "SYNTAKS", "FEILSØKING", "ALGORITME", "BOOLEAN", "STRÄNG"],
        "LAND": ["NORGE", "SVERIGE", "DANMARK", "TYSKLAND", "FRANKRIKE", "ITALIEN", "SPANIA", "FINLAND", "STORBRITANNIA", "JAPAN", "AUSTRALIA", "CANADA", "BRASIL", "EGYPT", "INDIA"],
        "SVENSKE-BYER": ["JÖNKÖPING", "STOCKHOLM", "GÖTEBORG", "MALMÖ", "SÖDERTÄLJE", "SKÖVDE", "LINKÖPING", "NORRKÖPING", "UPPSALA", "VÄSTERÅS", "ÖREBRO", "UMEÅ", "LULEÅ", "VISBY", "BORÅS"],
        "I-HJEMMET": ["SOFA", "TAK", "KJØLESKAP", "KAFFETRAKTER", "OPPVASKMASKIN", "STUE", "LENESTOL", "GARDEROBE", "RADIATOR", "VASKEMASKIN", "SPISEBORD", "PUTE", "STØVSUGER", "BRYTER", "SPEIL"],
        "KONTOR": ["SKRIVEBORD", "KONTORSTOL", "HULLMASKIN", "SKRIVER", "TASTATUR", "DATAMUS", "ARKIVSKAP", "PENN", "BLOKK", "KAFFEMASKIN", "WHITEBOARD", "BINDERS", "SKJERM", "DOKKINGSTASJON", "PAPIRKURV"],
        "MATRETTER": ["PANNEKAKER", "LASAGNE", "HAMBURGER", "TACOS", "PIZZA", "SUSHI", "KJØTTBOLLER", "PASTA", "KEBAB", "GRØT"],
        "KJØRETØY": ["HELIKOPTER", "UBÅT", "TRIKK", "TRAKTOR", "MOTORSYKKEL", "LASTEBIL", "MOPED", "SYKKEL", "AMBULANSE", "TOG"]
    }, fi: {
        "LAN-RUOKA": ["ENERGIAJUOMA", "HALVAPIZZA", "NUDELIT", "LIMU", "SIPSIT", "PIKARUOKA", "KAHVI", "KEBAB", "PURILAINEN", "MAKKARA"],
        "PC-KOMPONENTIT": ["NÄYTÖNOHJAIN", "EMOLEVY", "PROSESSORI", "VIRTALÄHDE", "KOTELO", "JÄÄHDYTYS", "MUISTIKAPULA", "KOVALEVY", "ÄÄNIKORTTI", "TUULETIN"],
        "PELISLANGI": ["NOOBIT", "CLUTCH", "CAMPPAUS", "HEADSHOT", "SMURFFAUS", "FRÄGI", "SPAWNI", "SPEEDRUN", "LAGI", "CARRY"],
        "RETROPELIT": ["PACMAN", "TETRIS", "PONG", "DONKEYKONG", "ASTEROIDS", "MEGAMAN", "FROGGER", "ZELDA", "METROID", "SPACEINVADERS"],
        "VERKKO": ["REITITIN", "KYTKIN", "IPOSOITE", "PROTOKOLLA", "PALOMUURI", "VIIVE", "KAISTANLEVEYS", "ETHERNET", "PINGI", "PORTTI"],
        "OHJELMOINTI": ["MUUTTUJA", "FUNKTIO", "SILMUKKA", "REKURSIO", "KÄÄNTÄJÄ", "SYNTAKSI", "DEBUGGAUS", "ALGORITMI", "TAULUKKO", "MERKKIJONO"],
        "RUOKALAJIT": ["OHUKAISET", "LASAGNE", "HAMPURILAINEN", "TACOT", "PIZZA", "SUSHI", "LIHAPULLAT", "PASTA", "PIHVI", "SALAATTI"],
        "AJONEUVOT": ["HELIKOPTERI", "SUKLARI", "RAITIOVAUNU", "TRAKTORI", "MOOTTORIPYÖRÄ", "REKKA", "MOPO", "POLKUPYÖRÄ", "AMBULANSSI", "JUNA"]
    },
    en: {
        "LAN-FOOD": ["ENERGYDRINK", "CHEAPPIZZA", "BURGERS", "NOODLES", "SODA", "CHIPS", "FASTFOOD", "COFFEE", "HOTDOG", "SNACKS"],
        "PC-COMPONENTS": ["GRAPHICSCARD", "MOTHERBOARD", "PROCESSOR", "POWERPOWER", "CASE", "COOLINGPASTE", "RAMMODULE", "HARDDRIVE", "SOUNDCARD", "FAN"],
        "GAMING-SLANG": ["NOOBS", "CLUTCH", "CAMPING", "HEADSHOT", "GRIEFING", "SMURFING", "FRAGGING", "SPAWNPOINT", "SPEEDRUN", "PWNED"],
        "RETRO-GAMES": ["PACMAN", "TETRIS", "PONG", "DONKEYKONG", "ASTEROIDS", "SPACEINVADERS", "MEGAMAN", "FROGGER", "ZELDA", "METROID"],
        "NETWORKING": ["ROUTER", "SWITCH", "IPADDRESS", "PROTOCOL", "FIREWALL", "LATENCY", "BANDWIDTH", "ETHERNET", "PING", "GATEWAY"],
        "PROGRAMMING": ["VARIABLE", "FUNCTION", "LOOPS", "RECURSION", "COMPILER", "SYNTAX", "DEBUGGING", "ALGORITHM", "BRACKET", "BOOLEAN"],
        "COUNTRIES": ["SWEDEN", "DENMARK", "NORWAY", "GERMANY", "FRANCE", "ITALY", "SPAIN", "FINLAND", "UNITEDKINGDOM", "JAPAN", "AUSTRALIA", "CANADA", "BRAZIL", "EGYPT", "INDIA"],
        "SWEDISH-CITIES": ["JÖNKÖPING", "STOCKHOLM", "GÖTEBORG", "MALMÖ", "SÖDERTÄLJE", "SKÖVDE", "LINKÖPING", "NORRKÖPING", "UPPSALA", "VÄSTERÅS", "ÖREBRO", "UMEÅ", "LULEÅ", "VISBY", "BORÅS"],
        "AT-HOME": ["SOFA", "CEILING", "REFRIGERATOR", "COFFEEMAKER", "DISHWASHER", "LIVINGROOM", "ARMCHAIR", "CLOSET", "RADIATOR", "WASHINGMACHINE", "DININGTABLE", "PILLOW", "VACUUMCLEANER", "SWITCH", "MIRROR"],
        "OFFICE": ["DESK", "OFFICECHAIR", "HOLEPUNCH", "PRINTER", "KEYBOARD", "MOUSE", "FILINGCABINET", "PEN", "NOTEBOOK", "COFFEEMACHINE", "WHITEBOARD", "PAPERCLIP", "MONITOR", "DOCKINGSTATION", "WASTEPAPERBASKET"],
        "DISHES": ["PANCAKES", "LASAGNA", "HAMBURGER", "TACOS", "PIZZA", "SUSHI", "MEATBALLS", "PASTA", "STEAK", "SALAD"],
        "VEHICLES": ["HELICOPTER", "SUBMARINE", "TRAM", "TRACTOR", "MOTORCYCLE", "TRUCK", "MOPED", "SCOOTER", "BICYCLE", "AMBULANCE"]
    }
};

const badWordsByLang = {
    sv: ["fan", "jävla", "skit", "helvete", "fuck", "shit", "idiot"],
    da: ["helvede", "lort", "bitch", "fuck", "shit", "idiot", "røvhul"],
    no: ["faen", "jævla", "skit", "helvete", "fuck", "shit", "idiot"],
fi: ["vittu", "saatana", "perkele", "paska", "helvetisti", "kusi", "vitun", "paskiainen"],
    en: ["fuck", "shit", "bitch", "asshole", "dick", "bastard", "cunt"]
};

const TRANSLATIONS = {
    sv: {
        title: "STATION 24: HÄNGA GUBBE", alias: "Alias (Lämna tomt för Gäst)...", guest: "Gäst",
        start: "STARTA PROTOKOLL", how: "❓ HUR SPELAR JAG?", media: "🎥 MEDIA SETUP",
        lb_title: "TOPPLISTA (STREAKS)", lb_empty: "Inga poäng än...",
        clock: "🕒 TID:", streak: "🔥 STREAK:", category: "ÄMNE:", cam_off: "KAMERA AV", mic_live: "MIC LIVE",
        modal_title: "SÄKERHETSKONTROLL", modal_desc: "Aktivera hårdvara för turneringen:", modal_confirm: "BEKRÄFTA INSTÄLLNINGAR",
        info_title: "PROTOKOLL-INSTRUKTIONER", info_profile: "📝 SENSORISK PROFIL:", info_profile_desc: "Minimal belastning. Fokus på text och logik.",
        info_rules_title: "🎮 SPELREGLER", info_rules_desc: "Din uppgift är att rädda besättningen genom att gissa rätt ord. Du har 6 försök på dig innan gubben hängs och din streak nollställs.",
        info_warn_title: "⚠️ SENSORY WARNING (SINNEN)", info_warn_desc: "Spelet innehåller höga ljud (tutor, tromboner och skratt) samt blinkande effekter. Om du är känslig för plötsliga ljud, sänk volymen innan du startar.",
        info_cheat_title: "🛡️ KAMEK ANTI-CHEAT",
        info_cheat_desc: "<li><strong>INGEN STYRPLATTA:</strong> Riktig datormus krävs.</li><li><strong>FLIK-VAKT:</strong> Flikbyte tolkas som fusk-googling.</li><li><strong>INGEN INSPEKTION:</strong> F12 och högerklick låser terminalen permanent.</li>",
        info_tournament_title: "🏆 TURNERING & STREAK", info_tournament_desc: "Varje löst ord ökar din streak. Din streak sparas i topplistan endast om du dör ärligt.",
        info_close: "JAG FÖRSTÅR", next_btn: "VIDARE ➔", playing: "SPELAR: ", playing_none: "SPELAR: INGET",
        win_msg: "CREW RESCUED!", lose_msg: "MISSION FAILED!",
        warn_valid: "ENDAST BOKSTÄVER A-Ö TILLÅTS!", warn_used: "BOKSTAVEN '#X' ÄR REDAN ANVÄND!",
        lock_devtools: "DEVTOOLS_INTRUSION", lock_devtools_msg: "Försöker du inspektera koden? Du är inte värdig!",
        lock_rightclick: "RIGHT_CLICK_PROHIBITED", lock_rightclick_msg: "Högerklick? Försöker du inspektera mina hemligheter? Rent spel krävs!",
        lock_esc: "PAUSE_ATTEMPT_DETECTED", lock_esc_msg: "Paus? En riktig operatör vilar aldrig! Det finns ingen pausknapp!",
        lock_paste: "UNAUTHORIZED_PASTE", lock_paste_msg: "Skriva själv är för svårt? Använd fingrarna, inte urklippet!",
        lock_macro: "MACRO_DETECTION", lock_macro_msg: "Mänskliga fingrar är inte så där snabba... Fuskare!",
        lock_afk: "OPERATOR_IDLE", lock_afk_msg: "Hallå? Somnade du? Jag har inte tid med lata operatörer!",
        lock_trackpad: "TRACKPAD_DETECTION", lock_trackpad_msg: "SLUTA SMEKA DIN LAPTOP! Kamek kräver en riktig mus.",
        lock_tab: "TAB_SWITCH", lock_tab_msg: "Du försökte googla svaret! Fuskare!",
        lock_power: "POWER_FAILURE", lock_power_msg: "Hämta laddaren! Din terminal dör, och mitt tålamod med den!",
        lock_ram: "MEMORY_OVERFLOW", lock_ram_msg: "Din RAM-kapacitet är ett skämt! Systemet svämmar över.",
        lock_storage: "STORAGE_EXHAUSTED", lock_storage_msg: "Rensa din disk! Ingen plats för poäng = inget spel!",
        lock_toxic: "TOXIC_OPERATOR", lock_toxic_msg: "Svordomar tillåts inte i terminalen.",
        lock_header: "LÅST AV KAMEK", cam_status_on: "📸 KAMERA: PÅ", cam_status_off: "📸 KAMERA: AF", mic_status_on: "🎤 MIKROFON: PÅ", mic_status_off: "🎤 MIKROFON: AF",
        sub_verification: "--- IDENTITY VERIFICATION REQUIRED ---"
    },
    da: {
        title: "STATION 24: HANGMAN", alias: "Alias...", guest: "Gæst",
        start: "START PROTOKOL", how: "❓ HVORDAN SPILLER JEG?", media: "🎥 MEDIE INDSTILLINGER",
        lb_title: "TOPLISTE (STREAKS)", lb_empty: "Ingen point endnu...",
        clock: "🕒 TID:", streak: "🔥 STREAK:", category: "EMNE:", cam_off: "KAMERA AF", mic_live: "MIC LIVE",
        modal_title: "SIKKERHEDSKONTROL", modal_desc: "Aktiver hardware til turneringen:", modal_confirm: "BEKRÆFT INDSTILLINGER",
        info_title: "PROTOKOL-INSTRUKTIONER", info_profile: "📝 SENSORISK PROFIL:", info_profile_desc: "Minimal belastning. Fokus på tekst og logik.",
        info_rules_title: "🎮 SPILREGLER", info_rules_desc: "Din opgave er at redde besætningen ved at gætte det rigtige ord. Du har 6 forsøg, før manden hænges, og din streak nulstilles.",
        info_warn_title: "⚠️ SENSORY WARNING (SANSER)", info_warn_desc: "Spillet indeholder høje lyde (horn, tromboner og latter) samt blinkende effekter. Skru ned for lydstyrken, før du starter.",
        info_cheat_title: "🛡️ KAMEK ANTI-CHEAT",
        info_cheat_desc: "<li><strong>INGEN STYREPLADE:</strong> Rigtig mus kræves.</li><li><strong>FANEVAGT:</strong> Faneskift tolkes som snyd/googling.</li><li><strong>INGEN INSPEKTION:</strong> F12 og højreklik låser terminalen permanent.</li>",
        info_tournament_title: "🏆 TURNERING & STREAK", info_tournament_desc: "Hvert løst ord øger din streak. Din streak gemmes kun på topliste, hvis du dør ærligt.",
        info_close: "JEG FORSTÅR", next_btn: "VIDERE ➔", playing: "SPILLER: ", playing_none: "SPILLER: INGEN",
        win_msg: "BESÆTNING REDDET!", lose_msg: "MISSION FAILED!",
        warn_valid: "KUN BOGSTAVER A-Ø TILLADT!", warn_used: "BOGSTAVET '#X' ER ALLEREDE BRUGT!",
        lock_devtools: "DEVTOOLS_INTRUSION", lock_devtools_msg: "Forsøger du at inspicere koden? Du er ikke værdig!",
        lock_rightclick: "RIGHT_CLICK_PROHIBITED", lock_rightclick_msg: "Højreklik? Forsøger du at snuse i mine hemmeligheder? Rent spil her!",
        lock_esc: "PAUSE_ATTEMPT_DETECTED", lock_esc_msg: "Pause? En rigtig operatør hviler aldrig! Der er ingen pauseknap!",
        lock_paste: "UNAUTHORIZED_PASTE", lock_paste_msg: "Skrive selv er for svært? Brug fingrene, ikke udklipsholderen!",
        lock_macro: "MACRO_DETECTION", lock_macro_msg: "Menneskelige fingre er ikke så hurtige... Snyder!",
        lock_afk: "OPERATOR_IDLE", lock_afk_msg: "Hallo? Sov du? Jeg har ikke tid til dovne operatører!",
        lock_trackpad: "TRACKPAD_DETECTION", lock_trackpad_msg: "STOP MED AT AE DIN BÆRBARE! Kamek kræver en rigtig mus.",
        lock_tab: "TAB_SWITCH", lock_tab_msg: "Du forsøgte at google svaret! Snyder!",
        lock_power: "POWER_FAILURE", lock_power_msg: "Hent opladeren! Din terminal dør, og min tålmodighed med den!",
        lock_ram: "MEMORY_OVERFLOW", lock_ram_msg: "Din RAM-kapacitet er en joke! Systemet flyder over.",
        lock_storage: "STORAGE_EXHAUSTED", lock_storage_msg: "Rens din disk! Ingen plads til point = intet spil!",
        lock_toxic: "TOXIC_OPERATOR", lock_toxic_msg: "Bandeord er ikke tilladt i terminalen.",
        lock_header: "LÅST AF KAMEK", cam_status_on: "📸 KAMERA: PÅ", cam_status_off: "📸 KAMERA: AF", mic_status_on: "🎤 MIKROFON: PÅ", mic_status_off: "🎤 MIKROFON: AF",
        sub_verification: "--- IDENTITETSBEKRÆFTELSE KRÆVES ---"
    },
    no: {
        title: "STATION 24: HENGEMANN", alias: "Alias...", guest: "Gjest",
        start: "START PROTOKOLL", how: "❓ HVORDAN SPILLER JEG?", media: "🎥 MEDIEINNSTILLINGER",
        lb_title: "TOPPLISTE (STREAKS)", lb_empty: "Ingen poeng ennå...",
        clock: "🕒 TID:", streak: "🔥 STREAK:", category: "TEMA:", cam_off: "KAMERA AV", mic_live: "MIC LIVE",
        modal_title: "SIKKERHETSKONTROLL", modal_desc: "Aktiver maskinvare for turneringen:", modal_confirm: "BEKREFT INNSTILLINGER",
        info_title: "PROTOKOLL-INSTRUKSJONER", info_profile: "📝 SENSORISK PROFIL:", info_profile_desc: "Minimal belastning. Fokus på tekst og logik.",
        info_rules_title: "🎮 SPELREGLER", info_rules_desc: "Din oppgave er å redde mannskapet ved å gjette riktig ord. Du har 6 forsøk før mannen henges og din streak nullstilles.",
        info_warn_title: "⚠️ SENSORY WARNING (SANSER)", info_warn_desc: "Spillet inneholder høye lyder (horn, tromboner og latter) samt blinkende effekter. Senk volumet før du starter.",
        info_cheat_title: "🛡️ KAMEK ANTI-CHEAT",
        info_cheat_desc: "<li><strong>INGEN STYREFLATE:</strong> Skikkelig datamus kreves.</li><li><strong>FANEVAKT:</strong> Fanebytte tolkes som juks/googling.</li><li><strong>INGEN INSPEKSJON:</strong> F12 og høyreklikk låser terminalen permanent.</li>",
        info_tournament_title: "🏆 TURNERING & STREAK", info_tournament_desc: "Hvert løst ord øker din streak. Din streak lagres bare på topplisten hvis du dør ærlig.",
        info_close: "JEG FORSTÅR", next_btn: "VIDERE ➔", playing: "SPILLER: ", playing_none: "SPILLER: INGEN",
        win_msg: "MANNSKAP REDDET!", lose_msg: "MISSION FAILED!",
        warn_valid: "BARE BOKSTAVER A-Ø TILLATT!", warn_used: "BOKSTAVEN '#X' ER ALLEREDE BRUKT!",
        lock_devtools: "DEVTOOLS_INTRUSION", lock_devtools_msg: "Prøver du å inspisere koden? Du er ikke verdig!",
        lock_rightclick: "RIGHT_CLICK_PROHIBITED", lock_rightclick_msg: "Høyreklikk? Prøver du å snoke i mine hemmeligheter? Rent spill her!",
        lock_esc: "PAUSE_ATTEMPT_DETECTED", lock_esc_msg: "Pause? En skikkelig operatør hviler aldri! Det finnes ingen pauseknapp!",
        lock_paste: "UNAUTHORIZED_PASTE", lock_paste_msg: "Skrive selv er for vanskelig? Bruk fingrene, ikke utklippstavlen!",
        lock_macro: "MACRO_DETECTION", lock_macro_msg: "Menneskelige fingre er ikke så raske... Juksepave!",
        lock_afk: "OPERATOR_IDLE", lock_afk_msg: "Hallo? Sovnet du? Jeg har ikke tid til late operatører!",
        lock_trackpad: "TRACKPAD_DETECTION", lock_trackpad_msg: "SLUTT Å SMEKE LAPTOPEN! Kamek krever en skikkelig mus.",
        lock_tab: "TAB_SWITCH", lock_tab_msg: "Du prøvde å google svaret! Juksepave!",
        lock_power: "POWER_FAILURE", lock_power_msg: "Hent laderen! Terminalen din dør, og tålmodigheten min med den!",
        lock_ram: "MEMORY_OVERFLOW", lock_ram_msg: "RAM-kapasiteten din er en vits! Systemet flommer over.",
        lock_storage: "STORAGE_EXHAUSTED", lock_storage_msg: "Rydd disken din! Ingen plass for poeng = ingen spill!",
        lock_toxic: "TOXIC_OPERATOR", lock_toxic_msg: "Banning er ikke tillatt i terminalen.",
        lock_header: "LÅST AV KAMEK", cam_status_on: "📸 KAMERA: PÅ", cam_status_off: "📸 KAMERA: AV", mic_status_on: "🎤 MIKROFON: PÅ", mic_status_off: "🎤 MIKROFON: AV",
        sub_verification: "--- IDENTITETSVERIFISERING KREVES ---"
    },
fi: {
        title: "STATION 24: HIRSIPUU", alias: "Nimimerkki...", guest: "Vieras",
        start: "KÄYNNISTÄ PROTOKOLLA", how: "❓ KUINKA PELATAAN?", media: "🎥 MEDIA-ASETUKSET",
        lb_title: "PISTETAULUKKO (STREAKS)", lb_empty: "Ei vielä pisteitä...",
        clock: "🕒 AIKA:", streak: "🔥 STREAK:", category: "AIHE:", cam_off: "KAMERA POIS", mic_live: "MIKKI PÄÄLLÄ",
        modal_title: "TURVALLISUUSTARKASTUS", modal_desc: "Aktivoi laitteisto turnausta varten:", modal_confirm: "VAHVISTA ASETUKSET",
        info_title: "PROTOKOLLAN OHJEET", info_profile: "📝 AISTIPROFIILI:", info_profile_desc: "Minimaalinen kuormitus. Keskity tekstiin ja logiikkaan.",
        info_rules_title: "🎮 PELISÄÄNNÖT", info_rules_desc: "Tehtäväsi on pelastaa miehistö arvaamalla oikea sana. Sinulla on 6 yritystä ennen kuin ukko hirtetään ja putkesi nollataan.",
        info_warn_title: "⚠️ AISTIVAROITUS (SENSORY WARNING)", info_warn_desc: "Peli sisältää kovia ääniä (torvia, pasuunoita ja naurua) sekä vilkkuvia efektejä. Laske äänenvoimakkuutta ennen aloittamista.",
        info_cheat_title: "🛡️ KAMEK ANTI-CHEAT",
        info_cheat_desc: "<li><strong>EI KOSKETUSLEVYÄ:</strong> Oikea hiiri vaaditaan.</li><li><strong>VÄLILEHTIVAHTI:</strong> Välilehden vaihtaminen tulkitaan guuglaamiseksi.</li><li><strong>EI KOODIN TARKASTUSTA:</strong> F12 ja hiiren oikea painike lukitsevat päätteen.</li>",
        info_tournament_title: "🏆 TURNAUS JA PUTKI", info_tournament_desc: "Jokainen ratkaistu sana kasvattaa putkeasi. Putkesi tallennetaan pistetaulukkoon vain, jos kuolet rehellisesti.",
        info_close: "YMMÄRRÄN", next_btn: "JATKA ➔", playing: "SOI: ", playing_none: "SOI: EI MITÄÄN",
        win_msg: "MIEHISTÖ PELASTETTU!", lose_msg: "TEHTÄVÄ EPÄONNISTUI!",
        warn_valid: "VAIN KIRJAIMET A-Ö OVAT SALLITTUJA!", warn_used: "KIRJAIN '#X' ON JO KÄYTETTY!",
        lock_devtools: "DEVTOOLS_INTRUSION", lock_devtools_msg: "Yritätkö tarkastella koodia? Et ole sen arvoinen!",
        lock_rightclick: "RIGHT_CLICK_PROHIBITED", lock_rightclick_msg: "Oikea klikkaus? Yritätkö urkkia salaisuuksiani? Pelaa rehellisesti!",
        lock_esc: "PAUSE_ATTEMPT_DETECTED", lock_esc_msg: "Tauko? Oikea operaattori ei lepää koskaan! Taukonäppäintä ei ole!",
        lock_paste: "UNAUTHORIZED_PASTE", lock_paste_msg: "Onko kirjoittaminen liian vaikeaa? Käytä sormiasi, älä leikepöytää!",
        lock_macro: "MACRO_DETECTION", lock_macro_msg: "Ihmissormet eivät ole noin nopeita... Huijari!",
        lock_afk: "OPERATOR_IDLE", lock_afk_msg: "Haloo? Nukahditko? Minulla ei ole aikaa laiskoille operaattoreille!",
        lock_trackpad: "TRACKPAD_DETECTION", lock_trackpad_msg: "LOPETA LÄPPÄRIN SILITTELY! Kamek vaatii oikean hiiren.",
        lock_tab: "TAB_SWITCH", lock_tab_msg: "Yritit guuglata vastauksen! Huijari!",
        lock_power: "POWER_FAILURE", lock_power_msg: "Hae laturi! Päätteesi kuolee, ja kärsivällisyyteni sen mukana!",
        lock_ram: "MEMORY_OVERFLOW", lock_ram_msg: "RAM-muistisi on vitsi! Järjestelmä tulvii yli.",
        lock_storage: "STORAGE_EXHAUSTED", lock_storage_msg: "Puhdista levysi! Ei tilaa pisteille = ei peliä!",
        lock_toxic: "TOXIC_OPERATOR", lock_toxic_msg: "Kiroilu ei ole sallittua päätteessä.",
        lock_header: "KAMEKIN LUKITSEMA", cam_status_on: "📸 KAMERA: PÄÄLLÄ", cam_status_off: "📸 KAMERA: POIS", mic_status_on: "🎤 MIKROFONI: PÄÄLLÄ", mic_status_off: "🎤 MIKROFONI: POIS",
        sub_verification: "--- TAHINNASTAVARMISTUS VAADITAAN ---"
    },
    en: {
        title: "STATION 24: HANGMAN", alias: "Alias...", guest: "Guest",
        start: "START PROTOCOL", how: "❓ HOW DO I PLAY?", media: "🎥 MEDIA SETUP",
        lb_title: "LEADERBOARD (STREAKS)", lb_empty: "No scores yet...",
        clock: "🕒 TIME:", streak: "🔥 STREAK:", category: "TOPIC:", cam_off: "CAMERA OFF", mic_live: "MIC LIVE",
        modal_title: "SECURITY PROBE", modal_desc: "Enable hardware for the tournament:", modal_confirm: "CONFIRM CONFIGURATION",
        info_title: "PROTOCOL INSTRUCTIONS", info_profile: "📝 SENSORY PROFILE:", info_profile_desc: "Minimal load. Focus on text and logic.",
        info_rules_title: "🎮 GAME RULES", info_rules_desc: "Your task is to save the crew by guessing the correct word. You have 6 attempts before the man is hanged and your streak is reset.",
        info_warn_title: "⚠️ SENSORY WARNING", info_warn_desc: "The game contains loud audio (horns, trombones, and laughter) and flashing lights. Lower your volume before starting if sensitive.",
        info_cheat_title: "🛡️ KAMEK ANTI-CHEAT",
        info_cheat_desc: "<li><strong>NO TRACKPAD:</strong> Real mouse required.</li><li><strong>TAB WATCH:</strong> Switching tabs is flag-marked as cheating.</li><li><strong>NO INSPECTION:</strong> F12 and right-click lock the terminal permanently.</li>",
        info_tournament_title: "🏆 TOURNAMENT & STREAK", info_tournament_desc: "Each solved word increments your streak. Your streak is only committed to the board if you die honestly.",
        info_close: "I UNDERSTAND", next_btn: "PROCEED ➔", playing: "PLAYING: ", playing_none: "PLAYING: NONE",
        win_msg: "CREW RESCUED!", lose_msg: "MISSION FAILED!",
        warn_valid: "ONLY LETTERS A-Z ALLOWED!", warn_used: "THE LETTER '#X' IS ALREADY USED!",
        lock_devtools: "DEVTOOLS_INTRUSION", lock_devtools_msg: "Trying to inspect code? You are not worthy!",
        lock_rightclick: "RIGHT_CLICK_PROHIBITED", lock_rightclick_msg: "Right click? Trying to pry into my secrets? Play clean here!",
        lock_esc: "PAUSE_ATTEMPT_DETECTED", lock_esc_msg: "Pause? A real operator never rests! There is no pause button!",
        lock_paste: "UNAUTHORIZED_PASTE", lock_paste_msg: "Typing is too hard for you? Use your fingers, not the clipboard!",
        lock_macro: "MACRO_DETECTION", lock_macro_msg: "Human fingers are not that fast... Cheater!",
        lock_afk: "OPERATOR_IDLE", lock_afk_msg: "Hello? Did you fall asleep? I have no time for lazy operators!",
        lock_trackpad: "TRACKPAD_DETECTION", lock_trackpad_msg: "STOP STROKING YOUR LAPTOP! Kamek demands a real mouse.",
        lock_tab: "TAB_SWITCH", lock_tab_msg: "You tried to google the answer! Cheater!",
        lock_power: "POWER_FAILURE", lock_power_msg: "Get your charger! Your terminal is dying, and my patience with it!",
        lock_ram: "MEMORY_OVERFLOW", lock_ram_msg: "Your RAM capacity is a joke! System overflow.",
        lock_storage: "STORAGE_EXHAUSTED", lock_storage_msg: "Clear your disk! No space for points = no game!",
        lock_toxic: "TOXIC_OPERATOR", lock_toxic_msg: "Profanity is not permitted in the terminal.",
        lock_header: "LOCKED BY KAMEK", cam_status_on: "📸 CAMERA: ON", cam_status_off: "📸 CAMERA: OFF", mic_status_on: "🎤 MICROPHONE: ON", mic_status_off: "🎤 MICROPHONE: OFF",
        sub_verification: "--- IDENTITY VERIFICATION REQUIRED ---"
    }
};

let currentLang = 'en'; // Standard fallback

function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key];
}

function updateUILanguage(lang) {
    currentLang = lang;
    
    document.getElementById('main-title').innerText = t('title');
    document.getElementById('startButton').innerText = t('start');
    document.getElementById('playerName').placeholder = t('alias');
    document.getElementById('sub-verification').innerText = t('sub_verification');
    document.getElementById('btn-how').innerText = t('how');
    document.getElementById('btn-media').innerText = t('media');
    document.getElementById('lbl-lb-title').innerText = t('lbl_title');
    
    document.getElementById('lbl-clock').innerText = t('clock');
    document.getElementById('lbl-streak').innerText = t('streak');
    document.getElementById('lbl-category').innerText = t('category');
    document.getElementById('lbl-cam-off').innerText = t('cam_off');
    document.getElementById('lbl-mic-live').innerText = t('mic_live');
    document.getElementById('next-btn').innerText = t('next_btn');
    
    document.getElementById('lbl-modal-title').innerText = t('modal_title');
    document.getElementById('lbl-modal-desc').innerText = t('modal_desc');
    document.getElementById('btn-modal-confirm').innerText = t('modal_confirm');
    document.getElementById('t-cam').innerText = cfgCam ? t('cam_status_on') : t('cam_status_off');
    document.getElementById('t-mic').innerText = cfgMic ? t('mic_status_on') : t('mic_status_off');

    document.getElementById('lbl-info-title').innerText = t('info_title');
    document.getElementById('lbl-info-profile').innerText = t('info_profile');
    document.getElementById('lbl-info-profile-desc').innerText = t('info_profile_desc');
    document.getElementById('lbl-info-rules-title').innerText = t('info_rules_title');
    document.getElementById('lbl-info-rules-desc').innerText = t('info_rules_desc');
    document.getElementById('lbl-info-warn-title').innerText = t('info_warn_title');
    document.getElementById('lbl-info-warn-desc').innerText = t('info_warn_desc');
    document.getElementById('lbl-info-cheat-title').innerText = t('info_cheat_title');
    document.getElementById('lbl-info-cheat-list').innerHTML = t('info_cheat_desc');
    document.getElementById('lbl-info-tournament-title').innerText = t('info_tournament_title');
    document.getElementById('lbl-info-tournament-desc').innerText = t('info_tournament_desc');
    document.getElementById('btn-info-close').innerText = t('info_close');

    updateLeaderboardUI();
    if (!gameActive && document.getElementById('game-container').style.display === 'flex') {
        renderAlphabet();
    }
}

// --- AUTOMATISK SPRÅKDETEKTERING ---
function detectLanguage() {
    // Läser av alla system-språk inställda i webbläsaren/enheten
    const sysLangs = navigator.languages || [navigator.language || navigator.userLanguage];
    
    for (let i = 0; i < sysLangs.length; i++) {
        let langCode = sysLangs[i].toLowerCase().split('-')[0]; // plockar ut t.ex. 'da' från 'da-DK'
        if (multiLangData[langCode]) {
            updateUILanguage(langCode);
            return;
        }
    }
    // Om inget matchar, kör engelska standard
    updateUILanguage('en');
}

const canvas = document.getElementById('hangmanCanvas');
const ctx = canvas.getContext('2d');
let selectedWord, guessedLetters, mistakes;

// --- SECURITY PROTOCOL (ANTI-CHEAT) ---
window.oncontextmenu = (e) => e.preventDefault(); 
window.onkeydown = (e) => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        kamekLockdown(t('lock_devtools'), t('lock_devtools_msg'));
    }
};

window.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
    if (gameActive) {
        kamekLockdown(t('lock_rightclick'), t('lock_rightclick_msg'));
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && gameActive) {
        kamekLockdown(t('lock_esc'), t('lock_esc_msg'));
    }
});

window.addEventListener('paste', (e) => {
    e.preventDefault();
    kamekLockdown(t('lock_paste'), t('lock_paste_msg'));
});

var lastClickTime = 0;
window.addEventListener('click', () => {
    var now = Date.now();
    if (now - lastClickTime < 50) {
        kamekLockdown(t('lock_macro'), t('lock_macro_msg'));
    }
    lastClickTime = now;
});

var afkTimer = setTimeout(afkLockdown, 120000);
function resetAfk() {
    clearTimeout(afkTimer);
    afkTimer = setTimeout(afkLockdown, 120000);
}
function afkLockdown() {
    if (gameActive) kamekLockdown(t('lock_afk'), t('lock_afk_msg'));
}
window.addEventListener('mousemove', resetAfk);
window.addEventListener('keydown', resetAfk);

window.addEventListener('wheel', e => {
    const isTrackpad = !Number.isInteger(e.deltaY) || (Math.abs(e.deltaY) > 0 && Math.abs(e.deltaY) < 20);
    if (isTrackpad && gameActive) {
        kamekLockdown(t('lock_trackpad'), t('lock_trackpad_msg'));
    }
}, { passive: false });

document.addEventListener('visibilitychange', () => { 
    if(document.hidden && gameActive) kamekLockdown(t('lock_tab'), t('lock_tab_msg')); 
});

// --- POPUPS CONTROL ---
function openPopup() { document.getElementById('modal').style.display = 'flex'; }
function closePopup() { document.getElementById('modal').style.display = 'none'; }
function openInfo() { document.getElementById('info-modal').style.display = 'flex'; }
function closeInfo() { document.getElementById('info-modal').style.display = 'none'; }

function toggleMedia(type) {
    if(type === 'cam') { 
        cfgCam = !cfgCam; 
        document.getElementById('t-cam').className = cfgCam ? "btn-toggle on" : "btn-toggle off";
        document.getElementById('t-cam').innerText = cfgCam ? t('cam_status_on') : t('cam_status_off');
    } else { 
        cfgMic = !cfgMic; 
        document.getElementById('t-mic').className = cfgMic ? "btn-toggle on" : "btn-toggle off";
        document.getElementById('t-mic').innerText = cfgMic ? t('mic_status_on') : t('mic_status_off');
    }
}

// --- GAME LOGIC ---
function startClock() {
    clearInterval(timer);
    seconds = 0;
    timer = setInterval(() => {
        if (!gameActive) return;
        seconds++;
        let m = Math.floor(seconds / 60).toString().padStart(2, '0');
        let s = (seconds % 60).toString().padStart(2, '0');
        const clockEl = document.getElementById('clock');
        if (clockEl) clockEl.innerText = m + ":" + s;
    }, 1000);
}

function beginGame() {
    let nameInput = document.getElementById('playerName').value.trim();
    currentPlayer = nameInput === "" ? t('guest') : nameInput;

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    document.getElementById('game-ui').style.display = 'flex';
    gameActive = true;
    
    initHardware();
    startClock();
    resetGame();
}

function resetGame() {
    checkStorage();
    const currentDictionary = multiLangData[currentLang];
    const cats = Object.keys(currentDictionary);
    const cat = cats[Math.floor(Math.random() * cats.length)];
    selectedWord = currentDictionary[cat][Math.floor(Math.random() * currentDictionary[cat].length)];
    
    guessedLetters = [];
    mistakes = 0;
    gameActive = true;
    
    document.getElementById('cat-name').innerText = cat;
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('message').innerText = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    renderAlphabet();
    renderWord();
}

function renderAlphabet() {
    const alpha = currentLang === 'en' ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
    const alphaContainer = document.getElementById('alphabet');
    alphaContainer.innerHTML = "";
    alpha.split("").forEach(l => {
        const btn = document.createElement('button');
        btn.className = "letter"; btn.innerText = l;
        btn.onclick = () => handleGuess(l, btn);
        alphaContainer.appendChild(btn);
    });
}

function handleGuess(l, btn) {
    if (!gameActive) return;

    if (guessedLetters.includes(l) || btn.disabled) {
        showKamekWarning(t('warn_used').replace('#X', l));
        return;
    }

    btn.disabled = true;
    if (selectedWord.includes(l)) {
        guessedLetters.push(l);
    } else {
        mistakes++;
        drawHangman();
    }
    renderWord();
}

function renderWord() {
    const isGameOver = mistakes >= 6;
    const wordArea = document.getElementById('word-display');
    
    const displayArray = selectedWord.split("").map(letter => {
        if (letter === "-") return `<span>-</span>`;
        if (guessedLetters.includes(letter)) {
            return `<span>${letter}</span>`;
        } else if (isGameOver) {
            return `<span class="missed-letter" style="color:red;">${letter}</span>`;
        } else {
            return `<span>_</span>`;
        }
    });

    wordArea.innerHTML = displayArray.join(" ");

    const pureText = wordArea.innerText.replace(/\s+/g, '');
    const pureTarget = selectedWord.replace(/-/g, '');

    if (pureText === pureTarget && !isGameOver) {
        currentStreak++; sndYay.play().catch(() => {});
        document.getElementById('streak').innerText = currentStreak;
        document.getElementById('message').innerText = t('win_msg');
        document.getElementById('message').style.color = "lime";
        finishRound(true);
    } else if (isGameOver) {
        saveStreak(currentPlayer, currentStreak); sndLoss.play().catch(() => {});
        currentStreak = 0;
        document.getElementById('streak').innerText = 0;
        document.getElementById('message').innerText = t('lose_msg');
        document.getElementById('message').style.color = "red";
        finishRound(false);
    }
}

function finishRound(win) {
    gameActive = false;
    document.querySelectorAll('.letter').forEach(btn => btn.disabled = true);
    if (win) {
        document.getElementById('next-btn').style.display = 'block';
    }
}



function saveStreak(name, score) {
    if (score <= 0) return;
    let lb = JSON.parse(localStorage.getItem('s24_hangman_lb')) || [];
    lb.push({ name: name, streak: score });
    lb.sort((a, b) => b.streak - a.streak);
    localStorage.setItem('s24_hangman_lb', JSON.stringify(lb.slice(0, 5)));
    updateLeaderboardUI();
}

function updateLeaderboardUI() {
    const lb = JSON.parse(localStorage.getItem('s24_hangman_lb')) || [];
    const content = document.getElementById('leaderboard-content');
    if (lb.length > 0) {
        content.innerHTML = lb.map((e, i) => `#${i+1} ${e.name}: ${e.streak}`).join("<br>");
    } else {
        content.innerText = t('lb_empty');
    }
}

function drawHangman() {
    ctx.strokeStyle = "#00ffcc"; ctx.lineWidth = 4;
    if (mistakes === 1) { ctx.beginPath(); ctx.moveTo(50, 330); ctx.lineTo(350, 330); ctx.stroke(); }
    if (mistakes === 2) { ctx.beginPath(); ctx.moveTo(100, 330); ctx.lineTo(100, 50); ctx.lineTo(250, 50); ctx.lineTo(250, 80); ctx.stroke(); }
    if (mistakes === 3) { ctx.beginPath(); ctx.arc(250, 110, 30, 0, Math.PI*2); ctx.stroke(); }
    if (mistakes === 4) { ctx.beginPath(); ctx.moveTo(250, 140); ctx.lineTo(250, 240); ctx.stroke(); }
    if (mistakes === 5) { ctx.beginPath(); ctx.moveTo(250, 160); ctx.lineTo(200, 210); ctx.moveTo(250, 160); ctx.lineTo(300, 210); ctx.stroke(); }
    if (mistakes === 6) { ctx.beginPath(); ctx.moveTo(250, 240); ctx.lineTo(200, 300); ctx.moveTo(250, 240); ctx.lineTo(300, 300); ctx.stroke(); }
}

// --- HARDWARE & MEDIA INTEGRATION ---
async function initHardware() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: cfgCam, audio: cfgMic });
        if(cfgCam) {
            const v = document.getElementById('k-video');
            v.srcObject = stream; v.style.display = 'block';
            document.getElementById('k-off').style.display = 'none';
            document.getElementById('k-rec').style.display = 'block';
        }
        if(cfgMic) {
            document.getElementById('k-mic-box').style.display = 'flex';
            const audioCtx = new AudioContext();
            const source = audioCtx.createMediaStreamSource(stream);
            const analyzer = audioCtx.createAnalyser();
            analyzer.fftSize = 32; source.connect(analyzer);
            const data = new Uint8Array(analyzer.frequencyBinCount);
            const bars = document.querySelectorAll('.kb');
            function updateMic() {
                analyzer.getByteFrequencyData(data);
                bars.forEach((b, i) => b.style.height = (data[i]/6) + "px");
                requestAnimationFrame(updateMic);
            }
            updateMic();
            startEar();
        }
    } catch(e) { console.warn("Hardware access denied."); }
}

function startEar() {
    const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!Speech) return;
    const rec = new Speech(); rec.continuous = true; 
    
    rec.lang = currentLang === 'sv' ? 'sv-SE' : currentLang === 'da' ? 'da-DK' : currentLang === 'no' ? 'no-NO' : currentLang === 'fi' ? 'fi-FI' : 'en-US';
    
    rec.onresult = (e) => {
        const txt = e.results[e.results.length-1][0].transcript.toLowerCase();
        const badWords = badWordsByLang[currentLang] || badWordsByLang['en'];
        if(badWords.some(w => txt.includes(w))) {
            kStrikes++;
            if(kStrikes < 3) alert("WARNING: (" + kStrikes + "/3)");
            else kamekLockdown(t('lock_toxic'), t('lock_toxic_msg'));
        }
    };
    rec.start();
}

function kamekLockdown(code, msg) {
    gameActive = false; clearInterval(timer); sndKamek.play().catch(() => {});
    document.body.innerHTML = `
        <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#1a0033;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;text-align:center;border:15px double #8200ff;box-sizing:border-box;z-index:99999;">
            <img src="kamek.jfif" style="width:150px;border:5px solid #ffcc00;border-radius:50%;" onerror="this.src='https://via.placeholder.com/150?text=KAMEK'">
            <h1 style="font-family:'Luckiest Guy';color:#ffcc00;font-size:60px;margin:20px;">${t('lock_header')}</h1>
            <p style="font-size:30px;font-style:italic;">"${msg}"</p>
            <p style="color:#8200ff;font-family:monospace;font-weight:bold;margin-top:40px;">ERROR: ${code}</p>
            <button onclick="location.reload()" style="margin-top:30px;padding:15px 40px;background:#ffcc00;font-family:'Luckiest Guy';font-size:24px;border-radius:10px;cursor:pointer;">REBOOT</button>
        </div>`;
}

function showKamekWarning(msg) {
    sndTuta.currentTime = 0; 
    sndTuta.play().catch(() => {});
    const msgEl = document.getElementById('message');
    const originalText = msgEl.innerText;
    const originalColor = msgEl.style.color;

    msgEl.innerText = "⚠️ " + msg;
    msgEl.style.color = "#ffcc00";

    setTimeout(() => {
        if (gameActive) {
            msgEl.innerText = originalText;
            msgEl.style.color = originalColor;
        }
    }, 2000);
}

if (navigator.getBattery) {
    navigator.getBattery().then(function(battery) {
        function checkBattery() {
            if (battery.level <= 0.15 && !battery.charging && gameActive) {
                kamekLockdown(t('lock_power'), t('lock_power_msg'));
            }
        }
        battery.addEventListener('levelchange', checkBattery);
        battery.addEventListener('chargingchange', checkBattery);
    });
}

function monitorMemory() {
    if (performance && performance.memory) {
        setInterval(() => {
            if (performance.memory.usedJSHeapSize > performance.memory.jsHeapSizeLimit * 0.9 && gameActive) {
                kamekLockdown(t('lock_ram'), t('lock_ram_msg'));
            }
        }, 5000);
    }
}
monitorMemory();

async function checkStorage() {
    if (navigator.storage && navigator.storage.estimate) {
        const estimate = await navigator.storage.estimate();
        if (estimate.usage > estimate.quota * 0.95 && gameActive) {
            kamekLockdown(t('lock_storage'), t('lock_storage_msg'));
        }
    }
}

window.addEventListener('keydown', (e) => {
    if (!gameActive) return;

    const key = e.key.toUpperCase();
    const isEnglish = currentLang === 'en';
    const validator = isEnglish ? /^[A-Z]$/ : /^[A-ZÅÄÖ]$/;

    if (!validator.test(key)) {
        if (e.key.length === 1) { 
            showKamekWarning(isEnglish ? "ONLY LETTERS A-Z ALLOWED!" : t('warn_valid'));
        }
        return;
    }

    const btns = Array.from(document.querySelectorAll('.letter'));
    const targetBtn = btns.find(b => b.innerText === key);

    if (guessedLetters.includes(key) || (targetBtn && targetBtn.disabled)) {
        showKamekWarning(t('warn_used').replace('#X', key));
        return;
    }

    if (targetBtn) {
        handleGuess(key, targetBtn);
    }
});

// Start telemetry triggers
detectLanguage();
