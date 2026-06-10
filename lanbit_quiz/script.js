/* ===========================================================
   STATION 24: OPERATÖR PSL631 PROTOCOL v41.0 - FULLSTÄNDIG
   =========================================================== */

// DEBUG-VERKTYG: Hittar vilket element som saknas
const originalGetId = document.getElementById;
document.getElementById = function(id) {
    const el = originalGetId.call(document, id);
    if (!el) console.warn(`VARNING: Elementet med ID "${id}" saknas i din HTML!`);
    return el;
};

// --- 1. FRÅGEDATABAS ---
const questions = [
   // --- LANBIT & NORDISKA LAN ---
    { q: "Vilket svenskt LAN innehar världsrekordet som världens största LAN-party?", a: ["DreamHack", "Birdie", "NärCon", "LANBIT"], r: "DreamHack", cat: "LAN-KULTUR" },
    { q: "Vad heter Norges största LAN som hålls i Vikingskipet varje påsk?", a: ["The Gathering", "Polar Party", "Gamer's Paradise", "Oslo LAN"], r: "The Gathering", cat: "LAN-KULTUR" },
    { q: "Vilket finskt event är både ett LAN och en av världens största demoscener?", a: ["Assembly", "Lantrek", "Vectorama", "Digiexpo"], r: "Assembly", cat: "LAN-KULTUR" },
    { q: "Vad står förkortningen 'LAN' för?", a: ["Local Area Network", "Large Area Node", "Long Active Night", "Light And Noise"], r: "Local Area Network", cat: "TECH" },
    // --- OFFICIELLA GLITCHED FESTIVALFRÅGOR (ELMIA 2026) ---
    { q: "Vilka datum arrangeras Glitched-festivalen på Elmia år 2026?", a: ["12–15 juni", "1–4 juli", "25–28 maj", "10–13 augusti"], r: "12–15 juni" },
    { q: "Vilka två legendariska DreamHack-grundare ligger bakom skapandet av Glitched?", a: ["Martin Öjes & Tomas Lyckedal", "Robert Ohlén & David Olsson", "Klas Bergling & Emil Christensen", "HeatoN & Potti"], r: "Martin Öjes & Tomas Lyckedal" },
    { q: "I vilken mässhall på Elmia hittar man Glitcheds massiva Esport City?", a: ["Hall C", "Hall A", "Hall B", "Hall D"], r: "Hall C" },
    { q: "Vad heter det nya tillskottet på festivalen 2026 som fokuserar helt på brädspel, Pokémon-kort och Magic?", a: ["Glitched Card Festival", "Tabletop Arena", "Meeples & Magic", "Boardgame Paradise"], r: "Glitched Card Festival" },
    { q: "I vilken mässhall på Elmia hittar man Glitched Card Festival?", a: ["Hall B", "Hall A", "Hall C", "Hall D"], r: "Hall B" },
    { q: "Vad är det officiella målet i Glitched-webbspelet Qwerty Defense?", a: ["Att hålla maskoten QWERTY vid liv", "Att bygga det snabbaste tangentbordet", "Att hacka Elmias servrar", "Att besegra Kamek på tid"], r: "Att hålla maskoten QWERTY vid liv" },
    { q: "Hur många deltagare siktar Glitched på att samla i sitt enorma LAN på Elmia?", a: ["Över 6000 deltagare", "Runt 2000 deltagare", "Exakt 10 000 deltagare", "Cirka 1500 deltagare"], r: "Över 6000 deltagare" },
    { q: "Vilken känd svensk e-sportprofil och grundare är festivalgeneral för Glitched?", a: ["Tomas Lyckedal", "Martin Öjes", "Emil 'HeatoN' Christensen", "Tommy 'Potti' Ingemarsson"], r: "Tomas Lyckedal" },
    { q: "Vad kallas det när du skriker i mikrofonen i festivalens officiella spel Qwerty Defense?", a: ["Man avfyrar en panik-bomb", "Man startar om spelet", "Man fryser alla fiender", "Man får extra liv"], r: "Man avfyrar en panik-bomb" },
    { q: "Vilken stad arrangeras Glitched-festivalen i?", a: ["Jönköping", "Göteborg", "Stockholm", "Malmö"], r: "Jönköping" },
    { q: "Vilken typ av nätverkskabel är bäst att ha med sig till Glitched LAN för stabil gigabit-hastighet?", a: ["Cat6 eller högre", "Cat3", "Telekabel", "S-Video"], r: "Cat6 eller högre" },
    { q: "Vad innebär festivalens koncept 'Esport City'?", a: ["En jättearena för e-sportturneringar och mässa", "Ett separat mobilspel", "Glitcheds egna Minecraft-server", "Ett e-sportgymnasium"], r: "En jättearena för e-sportturneringar och mässa" },
    { q: "Vilken huvudsponsor eller e-sportplattform driver turneringssystemen under Glitched?", a: ["Esportal", "Faceit", "Steam", "Esea"], r: "Esportal" },
    { q: "Vilken typ av turnering är oftast mest högljudd på LAN?", a: ["Smash / Mario Kart", "Schack", "Excel-speedrun", "Patiens"], r: "Smash / Mario Kart", cat: "LANBIT" },
    // --- Dina specifika önskemål ---
    { q: "Vilket av följande länder har INTE arabiska som officiellt språk?", a: ["Iran", "Syrien", "Egypten", "Algeriet"], r: "Iran", cat: "GEOGRAFI" },
    { q: "Vilket av följande EU-länder använder INTE euro som valuta?", a: ["Ungern", "Finland", "Slovakien", "Irland"], r: "Ungern", cat: "GEOGRAFI" },
    { q: "Vilket av dessa länder i Mellanöstern använder INTE arabiska som sitt primära officiella språk?", a: ["Turkiet", "Irak", "Libanon", "Jordanien"], r: "Turkiet", cat: "GEOGRAFI" },

    // --- Svåra Världsfrågor ---
    { q: "Vilket land är världens största till ytan utan att ha en enda permanent flod?", a: ["Saudiarabien", "Libyen", "Australien", "Mongoliet"], r: "Saudiarabien", cat: "GEOGRAFI" },
    { q: "Vilken är världens högst belägna huvudstad (m.ö.h.)?", a: ["La Paz", "Quito", "Thimphu", "Addis Abeba"], r: "La Paz", cat: "GEOGRAFI" },
    { q: "I vilket land ligger världens torraste plats, Atacamaöknen?", a: ["Chile", "Peru", "Namibia", "Kina"], r: "Chile", cat: "GEOGRAFI" },
    { q: "Vilket land har flest tidszoner (totalt 12 stycken inkl. utomeuropeiska territorier)?", a: ["Frankrike", "Ryssland", "USA", "Kina"], r: "Frankrike", cat: "GEOGRAFI" },
    { q: "Vilken ögrupp tillhör ön Socotra, känd för sina unika drakblodsträd?", a: ["Jemen", "Somalia", "Indien", "Oman"], r: "Jemen", cat: "GEOGRAFI" },
    { q: "Vilket land gränsar till flest länder (14 stycken)?", a: ["Kina", "Ryssland", "Brasilien", "Indien"], r: "Kina", cat: "GEOGRAFI" },
    { q: "Vilken är den enda staten i världen som ligger i alla fyra hemisfärer?", a: ["Kiribati", "Ecuador", "Indonesien", "Kenya"], r: "Kiribati", cat: "GEOGRAFI" },

    // --- Öar och Vatten ---
    { q: "Vad heter sundet som skiljer Tasmanien från det australiska fastlandet?", a: ["Bassundet", "Torressundet", "Cooksundet", "Magellans sund"], r: "Bassundet", cat: "GEOGRAFI" },
    { q: "Vilket land består av över 7 000 öar men har bara landgräns mot tre andra länder på en av dem?", a: ["Filippinerna", "Indonesien", "Japan", "Malaysia"], r: "Filippinerna", cat: "GEOGRAFI" },
    { q: "I vilken sjö ligger ön 'Manitoulin Island', världens största ö i en insjö?", a: ["Huronsjön", "Vänern", "Victoriasjön", "Bajkalsjön"], r: "Huronsjön", cat: "GEOGRAFI" },
    { q: "Vilket land kontrollerar Galápagosöarna?", a: ["Ecuador", "Colombia", "Costa Rica", "Panama"], r: "Ecuador", cat: "GEOGRAFI" },

    // --- Europa ---
    { q: "Vilken huvudstad flyter floden Spree genom?", a: ["Berlin", "Warszawa", "Prag", "Wien"], r: "Berlin", cat: "GEOGRAFI" },
    { q: "Vilket land är det enda i Europa som helt saknar mygg?", a: ["Island", "Norge", "Schweiz", "Grönland"], r: "Island", cat: "GEOGRAFI" },
    { q: "Vilket berg är det högsta i Alperna?", a: ["Mont Blanc", "Matterhorn", "Grossglockner", "Zugspitze"], r: "Mont Blanc", cat: "GEOGRAFI" },
    { q: "I vilket land hittar du regionen Transsylvanien?", a: ["Rumänien", "Bulgarien", "Ungern", "Moldavien"], r: "Rumänien", cat: "GEOGRAFI" },

    // --- Asien & Afrika ---
    { q: "Vilken är den största staden i Afrika räknat till folkmängd?", a: ["Lagos", "Kairo", "Kinshasa", "Johannesburg"], r: "Lagos", cat: "GEOGRAFI" },
    { q: "Vilket land hette tidigare Ceylon?", a: ["Sri Lanka", "Myanmar", "Thailand", "Taiwan"], r: "Sri Lanka", cat: "GEOGRAFI" },
    { q: "Vad heter huvudstaden i Kazakstan (nyligen återdöpt)?", a: ["Astana", "Almaty", "Tashkent", "Bishkek"], r: "Astana", cat: "GEOGRAFI" },
    { q: "Vilken afrikansk flod korsar ekvatorn två gånger?", a: ["Kongofloden", "Nilen", "Zambezi", "Nigerfloden"], r: "Kongofloden", cat: "GEOGRAFI" },
    { q: "Vilket land gränsar till både Röda havet och Persiska viken?", a: ["Saudiarabien", "Förenade Arabemiraten", "Jemen", "Irak"], r: "Saudiarabien", cat: "GEOGRAFI" },
// --- Teknik & Nördkultur (Perfekt för LAN) ---
    { q: "Vad står 'i' i iMac ursprungligen för?", a: ["Internet", "Intelligence", "Individual", "International"], r: "Internet", cat: "TEKNIK" },
    { q: "Vilken färg har 'spaden' (den man gräver med) i Minecraft?", a: ["Den matchar materialet", "Grå", "Brun", "Svart"], r: "Den matchar materialet", cat: "SPEL" },
    { q: "Vilken tangent på ett standard-tangentbord är oftast den mest slitna?", a: ["Mellanslag", "E", "A", "Enter"], r: "Mellanslag", cat: "HÅRDVARA" },
    { q: "Hur många bitar går det på en 'Nibble'?", a: ["4", "8", "2", "16"], r: "4", cat: "DATA" },
    { q: "Vilket år släpptes den första iPhone-modellen?", a: ["2007", "2005", "2008", "2009"], r: "2007", cat: "TEKNIK" },

    // --- Logik & Kuggisar ---
    { q: "Hur många månader har 28 dagar?", a: ["Alla 12", "Bara en", "Vart fjärde år", "Ingen"], r: "Alla 12", cat: "LOGIK" },
    { q: "Om du kör om personen som ligger på andra plats i ett lopp, vilken plats ligger du på då?", a: ["Andra plats", "Första plats", "Tredje plats", "Sista plats"], r: "Andra plats", cat: "LOGIK" },
    { q: "Vad väger mest: Ett ton tegelstenar eller ett ton fjädrar?", a: ["De väger lika mycket", "Tegelstenarna", "Fjädrarna", "Beror på luftfuktigheten"], r: "De väger lika mycket", cat: "KLASSIKER" },
    { q: "Hur många djur av varje art tog Moses med sig på arken?", a: ["Noll (Det var Noa)", "Två", "Sju", "Enligt Bibeln var det 14"], r: "Noll (Det var Noa)", cat: "KUGG" },
    
    // --- Geografi & Världen (Luriga) ---
    { q: "Vilket land gränsar Panama till i norr?", a: ["Costa Rica", "Colombia", "Nicaragua", "Inget (Det är Karibiska havet)"], r: "Inget (Det är Karibiska havet)", cat: "GEOGRAFI" },
    { q: "Vilken stad ligger längst norrut?", a: ["Stockholm", "Oslo", "Helsingfors", "S:t Petersburg"], r: "Helsingfors", cat: "GEOGRAFI" },
    { q: "I vilket land uppfanns lyckokakor (Fortune Cookies)?", a: ["USA", "Kina", "Japan", "Thailand"], r: "USA", cat: "MAT" },
    { q: "Vilket är det enda landet i världen vars namn börjar på bokstaven 'O' på svenska?", a: ["Oman", "Ossetien", "Ontario", "Oceanien"], r: "Oman", cat: "GEOGRAFI" },

    // --- Flaggor & Blandat ---
    { q: "Vilket land har den enda nationalflaggan som inte är fyrkantig?", a: ["Nepal", "Bhutan", "Schweiz", "Vatikanstaten"], r: "Nepal", cat: "GEOGRAFI" },
    { q: "Vilket land har en karta över sitt eget land på sin flagga?", a: ["Cypern", "Kosovo", "Australien", "Brasilien"], r: "Cypern", cat: "GEOGRAFI" },
    { q: "I vilket land ligger staden Timbuktu?", a: ["Mali", "Marocko", "Niger", "Tchad"], r: "Mali", cat: "GEOGRAFI" },
    { q: "Vilken stad kallas ofta 'The City of Seven Hills' (precis som Rom)?", a: ["Lissabon", "Madrid", "Aten", "Paris"], r: "Lissabon", cat: "GEOGRAFI" },
    { q: "Vilken är världens största ö (som inte är en kontinent)?", a: ["Grönland", "Nya Guinea", "Borneo", "Madagaskar"], r: "Grönland", cat: "GEOGRAFI" },
    { q: "Vilket land gränsar till både Frankrike och Spanien i Pyrenéerna?", a: ["Andorra", "Monaco", "Portugal", "Luxemburg"], r: "Andorra", cat: "GEOGRAFI" },
    { q: "Vilket hav är det saltaste i världen?", a: ["Döda havet", "Röda havet", "Medelhavet", "Kaspiska havet"], r: "Döda havet", cat: "GEOGRAFI" },
    // --- EUROVISION & MUSIK ---
    { q: "I vilken stad arrangeras Eurovision Song Contest 2026?", a: ["Wien", "Stockholm", "Berlin", "Oslo"], r: "Wien", cat: "MUSIK" },
    { q: "Vem representerar Sverige i Eurovision Song Contest 2026?", a: ["Felicia", "Dotter", "Liamoo", "Loreen"], r: "Felicia", cat: "MUSIK" },
    { q: "Vilken svensk grupp vann Eurovision 1974 med låten 'Waterloo'?", a: ["ABBA", "Herreys", "Roxette", "The Real Group"], r: "ABBA", cat: "MUSIK" },
    { q: "Vem vann för Sverige 2012 med den ikoniska låten 'Euphoria'?", a: ["Loreen", "Carola", "Charlotte Perrelli", "Måns Zelmerlöw"], r: "Loreen", cat: "MUSIK" },
    { q: "Vad kallas det inom filmvärlden när man ersätter originalspråket med ett annat, t.ex. svenskt tal på en engelsk film?", a: ["Dubbning", "Subbing", "Rendering", "Remixing"], r: "Dubbning", cat: "FILM" },
    
// --- 60 & 70-tal: Legenderna ---
    { q: "Vilket band släppte albumet 'The Dark Side of the Moon' 1973?", a: ["Pink Floyd", "Led Zeppelin", "The Who", "Genesis"], r: "Pink Floyd", cat: "RETRO" },
    { q: "Vem kallas ofta för 'The Queen of Soul'?", a: ["Aretha Franklin", "Diana Ross", "Tina Turner", "Etta James"], r: "Aretha Franklin", cat: "RETRO" },
    { q: "Vad hette Elvis Presleys hem i Memphis?", a: ["Graceland", "Neverland", "Paisley Park", "The Manor"], r: "Graceland", cat: "RETRO" },
    { q: "Vilket instrument spelade Jimi Hendrix?", a: ["Gitarr", "Bas", "Trummor", "Piano"], r: "Gitarr", cat: "RETRO" },
    { q: "Vilket legendariskt band kom från Liverpool?", a: ["The Beatles", "The Rolling Stones", "The Kinks", "The Animals"], r: "The Beatles", cat: "RETRO" },
    { q: "Vem sjöng 'Bohemian Rhapsody'?", a: ["Freddie Mercury", "David Bowie", "Mick Jagger", "Robert Plant"], r: "Freddie Mercury", cat: "ROCK" },
    { q: "Vilket år dog Bob Marley?", a: ["1981", "1979", "1985", "1983"], r: "1981", cat: "REGGAE" },
    { q: "Vad hette sångaren i The Doors?", a: ["Jim Morrison", "Iggy Pop", "Lou Reed", "Janis Joplin"], r: "Jim Morrison", cat: "ROCK" },

    // --- 80 & 90-tal: Från Synth till Grunge ---
    { q: "Vem släppte världens bäst säljande album 'Thriller'?", a: ["Michael Jackson", "Prince", "Madonna", "Lionel Richie"], r: "Michael Jackson", cat: "POP" },
    { q: "Från vilken stad kom Grunge-vågen med band som Nirvana och Pearl Jam?", a: ["Seattle", "Portland", "Chicago", "Detroit"], r: "Seattle", cat: "GRUNGE" },
    { q: "Vad hette debutalbumet från Guns N' Roses (1987)?", a: ["Appetite for Destruction", "Use Your Illusion", "G N' R Lies", "The Spaghetti Incident?"], r: "Appetite for Destruction", cat: "ROCK" },
    { q: "Vilken svensk DJ slog igenom internationellt med 'Levels'?", a: ["Avicii", "Swedish House Mafia", "Alesso", "Eric Prydz"], r: "Avicii", cat: "EDM" },
    { q: "Vem sjöng '...Baby One More Time' 1998?", a: ["Britney Spears", "Christina Aguilera", "Mandy Moore", "Jessica Simpson"], r: "Britney Spears", cat: "90-TAL" },
    { q: "Vad står förkortningen 'Daft Punk' för? (Lurvig kuggfråga)", a: ["Ingenting (Det var ett öknamn)", "Digital Audio", "Daft Pure Funk", "Dance and Fun"], r: "Ingenting (Det var ett öknamn)", cat: "ELEKTRONISKT" },
    { q: "Vilket band frontades av Liam och Noel Gallagher?", a: ["Oasis", "Blur", "Pulp", "The Verve"], r: "Oasis", cat: "BRITPOP" },
    { q: "Vem släppte låten 'Losing My Religion' 1991?", a: ["R.E.M.", "U2", "The Cure", "Depeche Mode"], r: "R.E.M.", cat: "90-TAL" },

    // --- Hiphop & R&B ---
    { q: "Vem anses vara 'The King of New York' efter sin död 1997?", a: ["The Notorious B.I.G.", "Tupac Shakur", "Nas", "Jay-Z"], r: "The Notorious B.I.G.", cat: "HIPHOP" },
    { q: "Vilken grupp släppte albumet 'Enter the Wu-Tang (36 Chambers)'?", a: ["Wu-Tang Clan", "N.W.A", "Public Enemy", "Outkast"], r: "Wu-Tang Clan", cat: "HIPHOP" },
    { q: "Vad heter Eminems alter ego?", a: ["Slim Shady", "Dr. Dre", "Snoop Dogg", "The Game"], r: "Slim Shady", cat: "HIPHOP" },
    { q: "Vilket år släppte Dr. Dre albumet '2001'?", a: ["1999", "2001", "2000", "2002"], r: "1999", cat: "HIPHOP" },
    { q: "Vem sjöng 'Umbrella' 2007?", a: ["Rihanna", "Beyoncé", "Ciara", "Alicia Keys"], r: "Rihanna", cat: "R&B" },
    { q: "Vilken rappare ligger bakom märket 'Yeezy'?", a: ["Kanye West", "Travis Scott", "Drake", "ASAP Rocky"], r: "Kanye West", cat: "MODERNT" },

    // --- 2010-tal till Idag: Topplistorna ---
    { q: "Vilken kvinnlig artist har vunnit flest Grammys genom tiderna?", a: ["Beyoncé", "Taylor Swift", "Adele", "Alison Krauss"], r: "Beyoncé", cat: "MODERNT" },
    { q: "Vad heter Taylor Swifts massiva världsturné som startade 2023?", a: ["The Eras Tour", "The Red Tour", "The Eraser Tour", "The Midnight Tour"], r: "The Eras Tour", cat: "MODERNT" },
    { q: "Vem sjöng världshiten 'Blinding Lights'?", a: ["The Weeknd", "Bruno Mars", "Justin Bieber", "Post Malone"], r: "The Weeknd", cat: "MODERNT" },
    { q: "Vilken artist slog igenom med låten 'Bad Guy'?", a: ["Billie Eilish", "Olivia Rodrigo", "Lorde", "Dua Lipa"], r: "Billie Eilish", cat: "MODERNT" },
    { q: "Vilket land kommer gruppen BTS ifrån?", a: ["Sydkorea", "Japan", "Kina", "Thailand"], r: "Sydkorea", cat: "K-POP" },
    { q: "Vem släppte albumet 'Harry's House' 2022?", a: ["Harry Styles", "Ed Sheeran", "Sam Smith", "Shawn Mendes"], r: "Harry Styles", cat: "MODERNT" },
    { q: "Vilken låt är den mest spelade på Spotify någonsin (per 2024)?", a: ["Blinding Lights", "Shape of You", "Someone You Loved", "Sunflower"], r: "Blinding Lights", cat: "STATISTIK" },

    // --- Blandat & Kuggisar ---
    { q: "Hur många strängar har en standard elbas?", a: ["4", "5", "6", "3"], r: "4", cat: "INSTRUMENT" },
    { q: "Vem var den första vinnaren av American Idol?", a: ["Kelly Clarkson", "Carrie Underwood", "Adam Lambert", "Jordin Sparks"], r: "Kelly Clarkson", cat: "TV" },
    { q: "Vad heter den fiktiva metal-gruppen i filmen med samma namn från 1984?", a: ["Spinal Tap", "Steel Panther", "Dethklok", "Metallica"], r: "Spinal Tap", cat: "FILM" },
    { q: "Vilket band har maskotar som kallas 'Eddie'?", a: ["Iron Maiden", "Megadeth", "Motorhead", "Anthrax"], r: "Iron Maiden", cat: "METAL" },
    { q: "Vem sjöng 'I Will Always Love You' i filmen Bodyguard?", a: ["Whitney Houston", "Dolly Parton", "Celine Dion", "Mariah Carey"], r: "Whitney Houston", cat: "FILM" },
    { q: "Vilken artist kallas för 'The Boss'?", a: ["Bruce Springsteen", "Rick Ross", "Bono", "Billy Joel"], r: "Bruce Springsteen", cat: "ROCK" },
    { q: "Vad heter sångaren i bandet Radiohead?", a: ["Thom Yorke", "Matt Bellamy", "Chris Martin", "Damon Albarn"], r: "Thom Yorke", cat: "INDIE" },
    { q: "Vilket band gjorde låten 'Mr. Brightside'?", a: ["The Killers", "Kings of Leon", "The Strokes", "Arctic Monkeys"], r: "The Killers", cat: "00-TAL" },
    { q: "Vad är det för färg på Prince legendariska regn?", a: ["Purple", "Blue", "Red", "Gold"], r: "Purple", cat: "80-TAL" },
    { q: "Vem är känd som 'The Material Girl'?", a: ["Madonna", "Cyndi Lauper", "Cher", "Debbie Harry"], r: "Madonna", cat: "80-TAL" },
    { q: "Vilket svenskt band släppte 'The Final Countdown'?", a: ["Europe", "ABBA", "Roxette", "The Hives"], r: "Europe", cat: "ROCK" },
    { q: "Vem rappar på låten 'God's Plan'?", a: ["Drake", "Kendrick Lamar", "J. Cole", "Future"], r: "Drake", cat: "HIPHOP" },
    { q: "Vilket instrument förknippas med Kenny G?", a: ["Saxofon", "Trumpet", "Klarinett", "Flöjt"], r: "Saxofon", cat: "JAZZ" },
    { q: "Vad heter sångerskan i Florence + The Machine?", a: ["Florence Welch", "Florence Nightingale", "Florence Pugh", "Florence Mills"], r: "Florence Welch", cat: "MODERNT" },
    { q: "Vilket band sjöng 'Don't Stop Believin'?", a: ["Journey", "Foreigner", "REO Speedwagon", "Boston"], r: "Journey", cat: "80-TAL" },
    { q: "Vem släppte 'Uptown Funk' tillsammans med Bruno Mars?", a: ["Mark Ronson", "Pharrell Williams", "Calvin Harris", "David Guetta"], r: "Mark Ronson", cat: "POP" },
    { q: "Vilken artist bär ofta en stor hjälm formad som en marshmallow?", a: ["Marshmello", "Deadmau5", "Daft Punk", "Alan Walker"], r: "Marshmello", cat: "EDM" },
    { q: "Vilket band släppte albumet 'Appetite for Destruction'?", a: ["Guns N' Roses", "Motley Crue", "Poison", "Skid Row"], r: "Guns N' Roses", cat: "ROCK" },
    { q: "Vem sjöng 'Rolling in the Deep'?", a: ["Adele", "Amy Winehouse", "Duffy", "Sia"], r: "Adele", cat: "POP" },
    { q: "Vad heter Gorillaz virtuella basist?", a: ["Murdoc Niccals", "2-D", "Noodle", "Russel Hobbs"], r: "Murdoc Niccals", cat: "KULTUR" },
    { q: "Vilken känd gitarr modell skapades av Leo Fender?", a: ["Stratocaster", "Les Paul", "SG", "Flying V"], r: "Stratocaster", cat: "HÅRDVARA" },
    { q: "Vad heter Green Days genombrottsalbum från 1994?", a: ["Dookie", "American Idiot", "Insomniac", "Nimrod"], r: "Dookie", cat: "PUNK" },
    { q: "Vem är känd för låten 'Piano Man'?", a: ["Billy Joel", "Elton John", "Phil Collins", "Paul McCartney"], r: "Billy Joel", cat: "KLASSIKER" },
    { q: "Vilket band sjöng 'Smells Like Teen Spirit'?", a: ["Nirvana", "Soundgarden", "Mudhoney", "Alice in Chains"], r: "Nirvana", cat: "GRUNGE" },
    { q: "Vad heter basisten i Red Hot Chili Peppers?", a: ["Flea", "Chad Smith", "Anthony Kiedis", "John Frusciante"], r: "Flea", cat: "ROCK" },
    { q: "Vem sjöng 'Wrecking Ball'?", a: ["Miley Cyrus", "Katy Perry", "Selena Gomez", "Demi Lovato"], r: "Miley Cyrus", cat: "POP" },
    { q: "Vad heter Linkin Parks första studioalbum?", a: ["Hybrid Theory", "Meteora", "Minutes to Midnight", "Reanimation"], r: "Hybrid Theory", cat: "NU-METAL" },
    { q: "Vem släppte låten 'Starboy'?", a: ["The Weeknd", "Drake", "Post Malone", "Travis Scott"], r: "The Weeknd", cat: "MODERNT" },
    { q: "Vilken brittisk artist sjunger 'Shape of You'?", a: ["Ed Sheeran", "George Ezra", "Lewis Capaldi", "Sam Fender"], r: "Ed Sheeran", cat: "POP" },
    { q: "Vad heter Foo Fighters frontman?", a: ["Dave Grohl", "Taylor Hawkins", "Nate Mendel", "Pat Smear"], r: "Dave Grohl", cat: "ROCK" },
    { q: "Vilket år dog Amy Winehouse?", a: ["2011", "2009", "2013", "2010"], r: "2011", cat: "IKONER" },

{ q: "Vilken artist släppte det hyllade albumet 'Välkommen till förorten' år 2013?", a: ["Kartellen", "Labyrint", "Stor", "Linda Pira"], r: "Kartellen", cat: "SVENSK HIPHOP" },
    { q: "Vad heter rapparen från Västerås som slog igenom med låten 'Katten i trakten'?", a: ["Einár", "Ant Wan", "Dree Low", "Z.E"], r: "Einár", cat: "SVENSK HIPHOP" },
    { q: "Vilken artist ligger bakom det framgångsrika skivbolaget 'Grind Gang Music'?", a: ["Z.E", "Dree Low", "1.Cuz", "Yasin"], r: "Z.E", cat: "SVENSK HIPHOP" },
    { q: "Från vilken Stockholmsförort kommer gruppen Labyrint?", a: ["Gottsunda (Uppsala)", "Rinkeby", "Flemingsberg", "Alby"], r: "Gottsunda (Uppsala)", cat: "SVENSK HIPHOP" },
    { q: "Vilken artist bär ofta en ikonisk mask (skidmask) och slog igenom med 'Försent'?", a: ["1.Cuz", "Yasin", "Haval", "Ricky Rich"], r: "1.Cuz", cat: "SVENSK HIPHOP" },
    { q: "Vem vann Grammis för 'Årets artist' 2024?", a: ["Ant Wan", "Sarettii", "Håkan Hellström", "Loreen"], r: "Ant Wan", cat: "SVENSK HIPHOP" },
    { q: "Vad heter debutalbumet från Yasin som släpptes 2020?", a: ["98.05", "Handen under bältet", "Allt eller inget", "Deluxe"], r: "98.05", cat: "SVENSK HIPHOP" },
    { q: "Vilken rappare från Västerås har gjort succé med albumet 'Leylas World'?", a: ["Ant Wan", "Ricky Rich", "Dani M", "Jireel"], r: "Ant Wan", cat: "SVENSK HIPHOP" },
    { q: "Vem släppte hitlåten 'Pippi' 2019?", a: ["Dree Low", "Einár", "Z.E", "Gammal"], r: "Dree Low", cat: "SVENSK HIPHOP" },
    { q: "Vilket kollektiv/bolag förknippas med artister som Yasin och Jaffar Byn?", a: ["Ghetto Superstars", "Grind Gang", "Top Class Music", "Stadsbild"], r: "Ghetto Superstars", cat: "SVENSK HIPHOP" },
    { q: "Vilken artist vann P3 Guld för 'Guldmicken' (årets liveartist) 2024?", a: ["Ant Wan", "Jireel", "Thomas Stenström", "Veronica Maggio"], r: "Ant Wan", cat: "SVENSK HIPHOP" },
    { q: "Vad heter låten av Jireel som blev en enorm hit 2016 och vann 'Årets låt' på P3 Guld?", a: ["Cataleya", "Snap", "Peligrosa", "Man of the Year"], r: "Cataleya", cat: "SVENSK HIPHOP" },
    { q: "Vilken svensk rappare har samarbetat med Ed Sheeran på låten '2Step'?", a: ["1.Cuz", "Jireel", "Einár", "Ant Wan"], r: "1.Cuz", cat: "SVENSK HIPHOP" },
    { q: "Från vilken ort kommer artisten Sarettii?", a: ["Hisings Backa", "Rinkeby", "Fisksätra", "Biskopsgården"], r: "Hisings Backa", cat: "SVENSK HIPHOP" },
    { q: "Vem släppte det populära albumet 'Flawless' 2019?", a: ["Dree Low", "Ant Wan", "Yasin", "Einár"], r: "Dree Low", cat: "SVENSK HIPHOP" },
    { q: "Vilken kvinnlig rappare slog igenom stort med låten 'Knäpper mina fingrar'?", a: ["Linda Pira", "Silvana Imam", "Imenella", "Laleh"], r: "Linda Pira", cat: "SVENSK HIPHOP" },
    { q: "Vad heter artisten som gjort låtar som 'Som jag' och 'Habibi'?", a: ["Ricky Rich", "Aram Mafia", "Dani M", "Bery"], r: "Ricky Rich", cat: "SVENSK HIPHOP" },
    { q: "Vilken artist från Rinkeby har haft stora hits som 'Work' och 'Bon Voyage'?", a: ["Yasin", "Dree Low", "1.Cuz", "Haval"], r: "Yasin", cat: "SVENSK HIPHOP" },
    { q: "Vem är känd för albumet 'Naturkraft'?", a: ["Silvana Imam", "Linda Pira", "Erik Lundin", "Cherrie"], r: "Silvana Imam", cat: "SVENSK HIPHOP" },
    { q: "Vad heter den kända producentduon som jobbat med nästan hela eliten i svensk hiphop?", a: ["Straynané & Tsino", "Aram Mafia", "Masse Salazar", "Vinter"], r: "Straynané & Tsino", cat: "PRODUCENTER" },
    { q: "Vilken artist släppte EP:n 'Suedi' som hyllades för sitt språk?", a: ["Erik Lundin", "Stor", "Sebbe Staxx", "Gee Dixon"], r: "Erik Lundin", cat: "SVENSK HIPHOP" },
    { q: "Från vilken del av Stockholm kommer kollektivet 'Byn Block Entertainment'?", a: ["Rinkeby", "Tensta", "Husby", "Sollentuna"], r: "Rinkeby", cat: "SVENSK HIPHOP" },
    { q: "Vem gjorde låten 'Matador' som toppade listorna 2023?", a: ["Sarettii", "Ant Wan", "C.Gambino", "23"], r: "Sarettii", cat: "SVENSK HIPHOP" },
    { q: "Vilken rappare bär ofta en helmask och vann 'Årets manliga artist' på Grammis 2024?", a: ["C.Gambino", "1.Cuz", "Fröken Snusk", "VC Barre"], r: "C.Gambino", cat: "SVENSK HIPHOP" },
    { q: "Vad heter låten där Einár och Greekazo samarbetar?", a: ["Fusk", "Katten i trakten", "Hela orten", "Tesla"], r: "Fusk", cat: "SVENSK HIPHOP" },
    { q: "Vem ligger bakom albumet 'Underbart är kort'?", a: ["Stor", "Petter", "Timbuktu", "Ison & Fille"], r: "Stor", cat: "SVENSK HIPHOP" },
    { q: "Vilken artist har gjort hitlåten 'Lilla Nisse'?", a: ["Einár", "Dree Low", "Z.E", "Yasin"], r: "Einár", cat: "SVENSK HIPHOP" },
    { q: "Vad heter producenten Masse (från The Salazar Brothers) efternamn?", a: ["Salazar", "Sallah", "Santi", "Santos"], r: "Salazar", cat: "PRODUCENTER" },
    { q: "Vilken artist från Gävle slog igenom med låten 'Hotell'?", a: ["Greekazo", "Thrife", "Denz", "Blizzy"], r: "Greekazo", cat: "SVENSK HIPHOP" },
    { q: "Vem släppte albumet 'The Sweetest Die'?", a: ["Yasin", "Ant Wan", "Haval", "Asme"], r: "Yasin", cat: "SVENSK HIPHOP" },

    // --- DATOR, TECH & SYSTEM ---
{ 
    q: "Vad kallas den enorma originalkontrollen till det första Xboxet (2001)?", 
    a: ["The Duke", "The Beast", "The Tank", "The Controller S"], 
    r: "The Duke", 
    cat: "HÅRDVARA" 
},
    { q: "Vad står förkortningen 'OS' för i datorsammanhang?", a: ["Operating System", "Optical Sensor", "Online Storage", "Output Sound"], r: "Operating System", cat: "TECH" },
    { q: "Vilken komponent ansvarar för att visa grafik på din skärm?", a: ["Grafikkort (GPU)", "Moderkort", "Nätaggregat", "Ljudkort"], r: "Grafikkort (GPU)", cat: "HÅRDVARA" },
    { q: "Vilken spelkonsol drabbades av det omfattande hårdvarufelet 'Red Ring of Death'?", a: ["Xbox 360", "Playstation 3", "Nintendo Wii", "Sega Dreamcast"], r: "Xbox 360", cat: "KONSOL" },
    { q: "Vilket av följande är en giltig IPv4-adress?", a: ["192.168.1.254", "256.0.0.1", "10.0.0.2.1", "172.16.256.1"], r: "192.168.1.254", cat: "NÄTVERK" },
    { q: "Vilket företag äger och tillverkar Xbox?", a: ["Microsoft", "Sony", "Nintendo", "Apple"], r: "Microsoft", cat: "TECH" },
    { q: "Vilket operativsystem har en pingvin som maskot?", a: ["Linux", "Windows", "MacOS", "Android"], r: "Linux", cat: "TECH" },
    { q: "Vad kallas datorns huvudprocessor med tre bokstäver?", a: ["CPU", "GPU", "RAM", "HDD"], r: "CPU", cat: "HÅRDVARA" },
    { q: "Vilken port användes för runda mus-kontakter förr?", a: ["PS/2", "USB", "VGA", "HDMI"], r: "PS/2", cat: "RETRO-TECH" },

    // --- MARIO GALAXY & FILM ---
    { q: "Vad heter den lilla stjärnvännen under Marios keps i Galaxy?", a: ["Luma", "Starry", "Twink", "Comet"], r: "Luma", cat: "NINTENDO" },
    { q: "Vem vaktar 'Comet Observatory' i Mario Galaxy?", a: ["Rosalina", "Daisy", "Pauline", "Peach"], r: "Rosalina", cat: "NINTENDO" },
    { q: "Vilken förvandling får Mario av en 'Bee Mushroom'?", a: ["Bi-Mario", "Flyg-Mario", "Sväv-Mario", "Honungs-Mario"], r: "Bi-Mario", cat: "NINTENDO" },
    { q: "Vem spelade Mario i otecknade filmen från 1993?", a: ["Bob Hoskins", "Danny DeVito", "Tom Hanks", "Mario Ahrens"], r: "Bob Hoskins", cat: "FILM" },
    { q: "Vem gjorde rösten till Bowser i filmen från 2023?", a: ["Jack Black", "Chris Pratt", "Seth Rogen", "Vin Diesel"], r: "Jack Black", cat: "FILM" },
    { q: "I 2023 års film, vad heter det rike som Donkey Kong bor i?", a: ["Jungle Kingdom", "Mushroom Kingdom", "Ice Kingdom", "Kong Land"], r: "Jungle Kingdom", cat: "FILM" },

    // --- RETRO & SPELKULTUR ---
    { q: "Vilken konsol släpptes först i Sverige?", a: ["NES (Nintendo)", "Sega Mega Drive", "Super Nintendo", "PlayStation 1"], r: "NES (Nintendo)", cat: "RETRO" },
    { q: "Vilken bärbar konsol från 1989 krävde 4 st AA-batterier?", a: ["Game Boy", "Game Gear", "Atari Lynx", "Nintendo DS"], r: "Game Boy", cat: "RETRO" },
    { q: "Vad står förkortningen 'SNES' för?", a: ["Super Nintendo Entertainment System", "Super Network System", "Standard Network System", "Sega Nintendo"], r: "Super Nintendo Entertainment System", cat: "RETRO" },
    { q: "Vilken färg hade Game Boy-originalskärmen (kallad ärtsoppa)?", a: ["Grön", "Blå", "Grå", "Gul"], r: "Grön", cat: "RETRO" },
    { q: "Vilket år lanserades NES (Nintendo Entertainment System) i Sverige?", a: ["1986", "1983", "1989", "1991"], r: "1986", cat: "RETRO" },
    { q: "Vilket arkadspel skapade en brist på 100-yen mynt i Japan när det kom?", a: ["Space Invaders", "Pong", "Street Fighter", "Donkey Kong"], r: "Space Invaders", cat: "ARKAD" },
    { q: "Vilken färg har spöket 'Blinky' i Pac-Man?", a: ["Röd", "Blå", "Rosa", "Orange"], r: "Röd", cat: "ARKAD" },
    { q: "I vilket spel kämpar karaktärer som Link, Pikachu och Mario mot varandra?", a: ["Super Smash Bros", "Mario Party", "Playstation All-Stars", "Tekken"], r: "Super Smash Bros", cat: "NINTENDO" },
    { q: "Vilket var det första kommersiellt framgångsrika arkadspelet?", a: ["Pong", "Tetris", "Snake", "Pac-Man"], r: "Pong", cat: "ARKAD" },

    // --- CRASH BANDICOOT & SPYRO ---
    { q: "Vad heter den mask som skyddar Crash Bandicoot?", a: ["Aku Aku", "Uka Uka", "Ooga Booga", "Lani-Loli"], r: "Aku Aku", cat: "PLAYSTATION" },
    { q: "Vilken frukt samlar Crash Bandicoot på?", a: ["Wumpa Fruit", "Äpplen", "Mango", "Persika"], r: "Wumpa Fruit", cat: "PLAYSTATION" },
    { q: "Vad heter Crash Bandicoots ärkefiende?", a: ["Dr. Neo Cortex", "Dr. Eggman", "Dr. N. Gin", "Tiny Tiger"], r: "Dr. Neo Cortex", cat: "PLAYSTATION" },
    { q: "Vilket djur är Spyro?", a: ["Drake", "Ödla", "Dinosaurie", "Fladdermus"], r: "Drake", cat: "PLAYSTATION" },
// --- SPORT (50 NYA FRÅGOR PÅ SVENSKA) ---

{ q: "Vilket land har vunnit flest VM‑titlar i fotboll?", a: ["Brasilien", "Tyskland", "Italien", "Argentina"], r: "Brasilien", cat: "SPORT" },
{ q: "Vilket år nådde Sverige VM‑finalen i fotboll?", a: ["1958", "1974", "1994", "1962"], r: "1958", cat: "SPORT" },
{ q: "Vilket land arrangerade fotbolls‑VM 2018?", a: ["Ryssland", "Brasilien", "Tyskland", "Qatar"], r: "Ryssland", cat: "SPORT" },
{ q: "Vem gjorde Sveriges berömda cykelsparksmål mot Schweiz i VM 1994?", a: ["Kenneth Andersson", "Martin Dahlin", "Tomas Brolin", "Henrik Larsson"], r: "Kenneth Andersson", cat: "SPORT" },
{ q: "Vilken spelare har gjort flest mål i VM‑historien?", a: ["Miroslav Klose", "Pelé", "Ronaldo", "Messi"], r: "Miroslav Klose", cat: "SPORT" },
{ q: "Vilket land vann damernas fotbolls‑VM 2023?", a: ["Spanien", "USA", "England", "Tyskland"], r: "Spanien", cat: "SPORT" },
{ q: "Vad är smeknamnet på Sveriges herrlandslag i fotboll?", a: ["Blågult", "De Gula", "Nordstjärnorna", "Vikingarna"], r: "Blågult", cat: "SPORT" },
{ q: "Vilken svensk spelare gjorde klackmålet mot Italien i EM 2004?", a: ["Zlatan Ibrahimović", "Henrik Larsson", "Fredrik Ljungberg", "Marcus Allbäck"], r: "Zlatan Ibrahimović", cat: "SPORT" },
{ q: "Vilket land arrangerade det första fotbolls‑VM någonsin?", a: ["Uruguay", "Brasilien", "Italien", "Frankrike"], r: "Uruguay", cat: "SPORT" },
{ q: "Vilket land vann det första fotbolls‑VM 1930?", a: ["Uruguay", "Argentina", "Brasilien", "Italien"], r: "Uruguay", cat: "SPORT" },

// HOCKEY
{ q: "Vilket land har vunnit flest VM‑guld i ishockey?", a: ["Kanada", "Ryssland", "Sverige", "Finland"], r: "Kanada", cat: "SPORT" },
{ q: "Vad kallas Sveriges herrlandslag i ishockey?", a: ["Tre Kronor", "Blågult", "Nordstjärnorna", "Vikingarna"], r: "Tre Kronor", cat: "SPORT" },
{ q: "Vilken svensk hockeyspelare är känd som 'Foppa'?", a: ["Peter Forsberg", "Mats Sundin", "Henrik Zetterberg", "Nicklas Lidström"], r: "Peter Forsberg", cat: "SPORT" },
{ q: "Vilket NHL‑lag har vunnit flest Stanley Cup‑titlar?", a: ["Montreal Canadiens", "Toronto Maple Leafs", "Detroit Red Wings", "Chicago Blackhawks"], r: "Montreal Canadiens", cat: "SPORT" },
{ q: "Vilket land vann OS‑guld i ishockey 2006?", a: ["Sverige", "Kanada", "Ryssland", "Finland"], r: "Sverige", cat: "SPORT" },

// OS
{ q: "Vilken stad arrangerade sommar‑OS 2012?", a: ["London", "Peking", "Rio", "Aten"], r: "London", cat: "SPORT" },
{ q: "Vilken idrottare har flest OS‑guld genom tiderna?", a: ["Michael Phelps", "Usain Bolt", "Larisa Latynina", "Mark Spitz"], r: "Michael Phelps", cat: "SPORT" },
{ q: "Vilken sport tävlade Usain Bolt i?", a: ["Friidrott", "Simning", "Cykling", "Rodd"], r: "Friidrott", cat: "SPORT" },
{ q: "Vilket land har vunnit flest OS‑medaljer totalt?", a: ["USA", "Ryssland", "Kina", "Tyskland"], r: "USA", cat: "SPORT" },
{ q: "I vilken gren kastar man en tung metallkula?", a: ["Kula", "Diskus", "Slägga", "Spjut"], r: "Kula", cat: "SPORT" },

// TENNIS
{ q: "Vilken tennisturnering spelas på gräs?", a: ["Wimbledon", "US Open", "French Open", "Australian Open"], r: "Wimbledon", cat: "SPORT" },
{ q: "Vilken svensk tennisspelare kallades 'Ice Man'?", a: ["Björn Borg", "Stefan Edberg", "Mats Wilander", "Robin Söderling"], r: "Björn Borg", cat: "SPORT" },
{ q: "Vilken kvinnlig spelare har flest Grand Slam‑titlar?", a: ["Serena Williams", "Steffi Graf", "Martina Navratilova", "Margaret Court"], r: "Margaret Court", cat: "SPORT" },
{ q: "Vad kallas ställningen 40–40 i tennis?", a: ["Deuce", "Tie", "Break", "Equal"], r: "Deuce", cat: "SPORT" },
{ q: "Vilket land arrangerar French Open?", a: ["Frankrike", "Spanien", "Italien", "Belgien"], r: "Frankrike", cat: "SPORT" },

// MOTORSPORT
{ q: "Vilken förare har flest VM‑titlar i Formel 1?", a: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Ayrton Senna"], r: "Lewis Hamilton", cat: "SPORT" },
{ q: "Vilket race kallas 'The Greatest Spectacle in Racing'?", a: ["Indianapolis 500", "Le Mans 24h", "Monaco GP", "Daytona 500"], r: "Indianapolis 500", cat: "SPORT" },
{ q: "Vilken svensk förare vann Indy 500 år 2022?", a: ["Marcus Ericsson", "Felix Rosenqvist", "Kenny Bräck", "Ronnie Peterson"], r: "Marcus Ericsson", cat: "SPORT" },
{ q: "Vilken motorcykelsport körs på grus där förarna glider i kurvorna?", a: ["Speedway", "Motocross", "Enduro", "Trial"], r: "Speedway", cat: "SPORT" },
{ q: "Vilket bilmärke har vunnit flest Le Mans 24h?", a: ["Porsche", "Audi", "Ferrari", "Toyota"], r: "Porsche", cat: "SPORT" },

// BASKET
{ q: "Vilket lag har vunnit flest NBA‑titlar?", a: ["Boston Celtics", "LA Lakers", "Chicago Bulls", "Golden State Warriors"], r: "Boston Celtics", cat: "SPORT" },
{ q: "Vem kallas 'His Airness'?", a: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Magic Johnson"], r: "Michael Jordan", cat: "SPORT" },
{ q: "Hur många spelare är på planen per lag i basket?", a: ["5", "6", "7", "4"], r: "5", cat: "SPORT" },
{ q: "Vilket land vann OS‑guld i basket 2008?", a: ["USA", "Spanien", "Argentina", "Serbien"], r: "USA", cat: "SPORT" },
{ q: "Vad kallas linjen där trepoängsskott skjuts ifrån?", a: ["Trepoängslinjen", "Strafflinjen", "Baslinjen", "Mittlinjen"], r: "Trepoängslinjen", cat: "SPORT" },

// HANDBOLL
{ q: "Vilket land har vunnit flest VM‑guld i herrhandboll?", a: ["Frankrike", "Sverige", "Danmark", "Tyskland"], r: "Frankrike", cat: "SPORT" },
{ q: "Vad kallades Sveriges handbollslandslag under 90‑talet?", a: ["Bengan Boys", "Tre Kronor", "Blågult", "Handbollsgänget"], r: "Bengan Boys", cat: "SPORT" },
{ q: "Hur många spelare är på planen per lag i handboll?", a: ["7", "6", "8", "5"], r: "7", cat: "SPORT" },
{ q: "Vilket land arrangerade handbolls‑VM 2023?", a: ["Sverige & Polen", "Frankrike", "Danmark", "Tyskland"], r: "Sverige & Polen", cat: "SPORT" },
{ q: "Vilken position ansvarar för att stoppa skott i handboll?", a: ["Målvakt", "Mittsexa", "Kantspelare", "Niometersspelare"], r: "Målvakt", cat: "SPORT" },

// FRIIDROTT & ALLMÄN SPORT
{ q: "Vem är känd som världens snabbaste man?", a: ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Carl Lewis"], r: "Usain Bolt", cat: "SPORT" },
{ q: "Hur lång är en maratonsträcka?", a: ["42,195 km", "40 km", "50 km", "38 km"], r: "42,195 km", cat: "SPORT" },
{ q: "Vilken sport använder termerna 'bogey' och 'birdie'?", a: ["Golf", "Tennis", "Cricket", "Baseball"], r: "Golf", cat: "SPORT" },
{ q: "Vilket land uppfann bordtennis?", a: ["England", "Kina", "Japan", "Sverige"], r: "England", cat: "SPORT" },
{ q: "Vilken sport tävlar man om Ryder Cup i?", a: ["Golf", "Rugby", "Cricket", "Tennis"], r: "Golf", cat: "SPORT" },

// E‑SPORT
{ q: "Vilket spel spelas i turneringen 'The International'?", a: ["Dota 2", "League of Legends", "CS:GO", "Valorant"], r: "Dota 2", cat: "ESPORT" },
{ q: "Vilket lag vann CS:GO‑majorn i Stockholm 2021?", a: ["NAVI", "G2", "Astralis", "FURIA"], r: "NAVI", cat: "ESPORT" },
{ q: "Vilken svensk spelare är känd som 'GeT_RiGhT'?", a: ["Christopher Alesund", "Olof Kajbjer", "Patrik Lindberg", "Freddy Johansson"], r: "Christopher Alesund", cat: "ESPORT" },
{ q: "Vilket spel har världsmästerskapet där man tävlar om 'The Summoner’s Cup'?", a: ["League of Legends", "Dota 2", "Overwatch", "Valorant"], r: "League of Legends", cat: "ESPORT" },
{ q: "Vilket e‑sportlag är känt som 'Ninjas in Pyjamas'?", a: ["Svenskt CS‑lag", "Koreanskt LoL‑lag", "Amerikanskt Valorant‑lag", "Brasilianskt CS‑lag"], r: "Svenskt CS‑lag", cat: "ESPORT" },

// --- 100 NYA SPORTFRÅGOR ---

{ q: "Vilket land vann herrarnas fotbolls-VM 2022?", a: ["Argentina", "Frankrike", "Brasilien", "Tyskland"], r: "Argentina", cat: "SPORT" },
{ q: "Vilket land vann damernas fotbolls-VM 2019?", a: ["USA", "Nederländerna", "Japan", "Tyskland"], r: "USA", cat: "SPORT" },
{ q: "Vilken svensk målvakt kallades 'Isaksson' i landslaget?", a: ["Andreas Isaksson", "Robin Olsen", "Thomas Ravelli", "Rami Shaaban"], r: "Andreas Isaksson", cat: "SPORT" },
{ q: "Vilket land vann EM i fotboll 2021?", a: ["Italien", "England", "Spanien", "Portugal"], r: "Italien", cat: "SPORT" },
{ q: "Vilket land har vunnit flest Copa América-titlar?", a: ["Uruguay", "Argentina", "Brasilien", "Chile"], r: "Uruguay", cat: "SPORT" },

{ q: "Vilket land vann handbolls-VM 2021 för herrar?", a: ["Danmark", "Sverige", "Spanien", "Frankrike"], r: "Danmark", cat: "SPORT" },
{ q: "Vilket land vann hockey-VM 2023?", a: ["Kanada", "Finland", "Sverige", "Tjeckien"], r: "Kanada", cat: "SPORT" },
{ q: "Vilket land vann basket-VM 2019?", a: ["Spanien", "USA", "Serbien", "Frankrike"], r: "Spanien", cat: "SPORT" },
{ q: "Vilket land vann volleyboll-VM 2022 för herrar?", a: ["Italien", "Polen", "Brasilien", "USA"], r: "Italien", cat: "SPORT" },
{ q: "Vilket land vann rugby-VM 2019?", a: ["Sydafrika", "England", "Nya Zeeland", "Australien"], r: "Sydafrika", cat: "SPORT" },

{ q: "Vilken svensk friidrottare kallas 'Mondo'?", a: ["Armand Duplantis", "Daniel Ståhl", "Andreas Almgren", "Michel Tornéus"], r: "Armand Duplantis", cat: "SPORT" },
{ q: "Vilken gren tävlar man i när man kastar ett spjut?", a: ["Spjutkastning", "Diskus", "Slägga", "Kula"], r: "Spjutkastning", cat: "SPORT" },
{ q: "Vilken friidrottsgren är 110 meter lång för herrar?", a: ["Häcklöpning", "Sprint", "Långdistans", "Stafett"], r: "Häcklöpning", cat: "SPORT" },
{ q: "Vilken gren tävlar man i när man hoppar över en ribba med stav?", a: ["Stavhopp", "Höjdhopp", "Tresteg", "Längdhopp"], r: "Stavhopp", cat: "SPORT" },
{ q: "Vilken svensk kastare vann OS-guld i diskus 2021?", a: ["Daniel Ståhl", "Simon Pettersson", "Niklas Arrhenius", "Axel Härstedt"], r: "Daniel Ståhl", cat: "SPORT" },

{ q: "Vilken tennisspelare har rekordet för flest Wimbledon-titlar?", a: ["Roger Federer", "Novak Djokovic", "Pete Sampras", "Björn Borg"], r: "Roger Federer", cat: "SPORT" },
{ q: "Vilket underlag spelas French Open på?", a: ["Grus", "Hardcourt", "Gräs", "Trä"], r: "Grus", cat: "SPORT" },
{ q: "Vilken svensk vann French Open 1982?", a: ["Mats Wilander", "Björn Borg", "Stefan Edberg", "Robin Söderling"], r: "Mats Wilander", cat: "SPORT" },
{ q: "Vilken tennisterm betyder 0 poäng?", a: ["Love", "Zero", "Blank", "Null"], r: "Love", cat: "SPORT" },
{ q: "Vilket land kommer Rafael Nadal från?", a: ["Spanien", "Portugal", "Argentina", "Frankrike"], r: "Spanien", cat: "SPORT" },

{ q: "Vilket lag vann Super Bowl 2023?", a: ["Kansas City Chiefs", "Philadelphia Eagles", "LA Rams", "New England Patriots"], r: "Kansas City Chiefs", cat: "SPORT" },
{ q: "Hur många poäng ger en touchdown i amerikansk fotboll?", a: ["6", "3", "7", "5"], r: "6", cat: "SPORT" },
{ q: "Vilket lag har vunnit flest Super Bowls?", a: ["Pittsburgh Steelers", "New England Patriots", "Dallas Cowboys", "San Francisco 49ers"], r: "Pittsburgh Steelers", cat: "SPORT" },
{ q: "Vad heter arenan där Green Bay Packers spelar?", a: ["Lambeau Field", "Soldier Field", "MetLife Stadium", "Arrowhead Stadium"], r: "Lambeau Field", cat: "SPORT" },
{ q: "Vilken sport spelas med en oval boll och tacklingar?", a: ["Rugby", "Amerikansk fotboll", "Aussie rules", "Gaelic football"], r: "Rugby", cat: "SPORT" },

{ q: "Vilket land vann Tour de France 2022?", a: ["Danmark", "Slovenien", "Frankrike", "Belgien"], r: "Danmark", cat: "SPORT" },
{ q: "Vilken cyklist kallas 'The Cannibal'?", a: ["Eddy Merckx", "Lance Armstrong", "Chris Froome", "Miguel Indurain"], r: "Eddy Merckx", cat: "SPORT" },
{ q: "Vilken cykeltävling är känd som 'La Vuelta'?", a: ["Spanien runt", "Italien runt", "Belgien runt", "Portugal runt"], r: "Spanien runt", cat: "SPORT" },
{ q: "Vilken cykeltävling är känd som 'Giro d’Italia'?", a: ["Italien runt", "Frankrike runt", "Spanien runt", "Schweiz runt"], r: "Italien runt", cat: "SPORT" },
{ q: "Vilken färg har ledartröjan i Tour de France?", a: ["Gul", "Grön", "Vit", "Röd"], r: "Gul", cat: "SPORT" },

{ q: "Vilket land vann VM i cricket 2019?", a: ["England", "Indien", "Australien", "Nya Zeeland"], r: "England", cat: "SPORT" },
{ q: "Vilket land är mest känt för sporten kabaddi?", a: ["Indien", "Pakistan", "Bangladesh", "Sri Lanka"], r: "Indien", cat: "SPORT" },
{ q: "Vilken sport spelas med en fjäderboll?", a: ["Badminton", "Squash", "Tennis", "Padel"], r: "Badminton", cat: "SPORT" },
{ q: "Vilken sport spelas i en velodrom?", a: ["Bancykling", "Simning", "Brottning", "Rodd"], r: "Bancykling", cat: "SPORT" },
{ q: "Vilken sport använder en 'putter'?", a: ["Golf", "Baseball", "Cricket", "Bowling"], r: "Golf", cat: "SPORT" },

{ q: "Vilket land vann baseboll-VM 2023?", a: ["Japan", "USA", "Dominikanska republiken", "Mexiko"], r: "Japan", cat: "SPORT" },
{ q: "Vilken sport spelas i MLB?", a: ["Baseboll", "Basket", "Ishockey", "Amerikansk fotboll"], r: "Baseboll", cat: "SPORT" },
{ q: "Vilket lag har vunnit flest World Series?", a: ["New York Yankees", "Boston Red Sox", "LA Dodgers", "Chicago Cubs"], r: "New York Yankees", cat: "SPORT" },
{ q: "Vad kallas ett poäng i baseboll när man springer runt alla baser?", a: ["Run", "Point", "Score", "Hit"], r: "Run", cat: "SPORT" },
{ q: "Vilken sport använder en handske kallad 'mitt'?", a: ["Baseboll", "Softboll", "Cricket", "Rugby"], r: "Baseboll", cat: "SPORT" },

{ q: "Vilket land vann VM i innebandy 2022 för herrar?", a: ["Sverige", "Finland", "Schweiz", "Tjeckien"], r: "Sverige", cat: "SPORT" },
{ q: "Hur många spelare är på planen per lag i innebandy?", a: ["6", "5", "7", "4"], r: "6", cat: "SPORT" },
{ q: "Vilket land är störst inom bandy?", a: ["Sverige", "Ryssland", "Finland", "Norge"], r: "Sverige", cat: "SPORT" },
{ q: "Vilken sport spelas på is med klubba och boll, inte puck?", a: ["Bandy", "Ishockey", "Ringette", "Curling"], r: "Bandy", cat: "SPORT" },
{ q: "Vilket land vann damernas innebandy-VM 2021?", a: ["Sverige", "Finland", "Schweiz", "Tjeckien"], r: "Sverige", cat: "SPORT" },

{ q: "Vilket land vann OS-guld i curling 2022 (herrar)?", a: ["Sverige", "Kanada", "Storbritannien", "Norge"], r: "Storbritannien", cat: "SPORT" },
{ q: "Vilket land vann OS-guld i curling 2022 (damer)?", a: ["Sverige", "Kanada", "Storbritannien", "Schweiz"], r: "Storbritannien", cat: "SPORT" },
{ q: "Vad kallas den spelare som släpper stenen i curling?", a: ["Skip", "Thrower", "Lead", "Shooter"], r: "Skip", cat: "SPORT" },
{ q: "Vad kallas redskapet man sopar isen med i curling?", a: ["Broom", "Stick", "Brush", "Sweep"], r: "Broom", cat: "SPORT" },
{ q: "Vilket land är mest känt för curlingtradition?", a: ["Kanada", "Sverige", "Skottland", "Norge"], r: "Kanada", cat: "SPORT" },

{ q: "Vilket land vann VM i vattenpolo 2022?", a: ["Spanien", "Ungern", "Serbien", "Kroatien"], r: "Spanien", cat: "SPORT" },
{ q: "Vilken sport simmar man och kastar boll i mål?", a: ["Vattenpolo", "Simfotboll", "Aqua-handboll", "Hydroball"], r: "Vattenpolo", cat: "SPORT" },
{ q: "Vilken simmare har flest OS-guld någonsin?", a: ["Michael Phelps", "Mark Spitz", "Ian Thorpe", "Ryan Lochte"], r: "Michael Phelps", cat: "SPORT" },
{ q: "Hur lång är en olympisk simbassäng?", a: ["50 meter", "25 meter", "100 meter", "75 meter"], r: "50 meter", cat: "SPORT" },
{ q: "Vilken simsätt är snabbast?", a: ["Frisim", "Fjäril", "Bröstsim", "Ryggsim"], r: "Frisim", cat: "SPORT" },

{ q: "Vilket land vann VM i handboll 2017 (damer)?", a: ["Frankrike", "Norge", "Nederländerna", "Ryssland"], r: "Frankrike", cat: "SPORT" },
{ q: "Vilket land vann VM i handboll 2019 (herrar)?", a: ["Danmark", "Norge", "Spanien", "Frankrike"], r: "Danmark", cat: "SPORT" },
{ q: "Vilket land vann EM i handboll 2022 (herrar)?", a: ["Sverige", "Spanien", "Danmark", "Frankrike"], r: "Sverige", cat: "SPORT" },
{ q: "Vilket land vann EM i handboll 2020 (damer)?", a: ["Norge", "Frankrike", "Danmark", "Sverige"], r: "Norge", cat: "SPORT" },
{ q: "Vilket land vann EM i handboll 2016 (herrar)?", a: ["Tyskland", "Spanien", "Frankrike", "Kroatien"], r: "Tyskland", cat: "SPORT" },

{ q: "Vilket land vann OS-guld i brottning 2021 (grekisk-romersk 67 kg)?", a: ["Iran", "Ryssland", "Japan", "Kuba"], r: "Iran", cat: "SPORT" },
{ q: "Vilken sport tävlar man i när man använder en florett?", a: ["Fäktning", "Brottning", "Judo", "Taekwondo"], r: "Fäktning", cat: "SPORT" },
{ q: "Vilken kampsport använder bälten i olika färger?", a: ["Karate", "Boxning", "Brottning", "Fäktning"], r: "Karate", cat: "SPORT" },
{ q: "Vilken sport tävlar man i när man slår på en sandsäck?", a: ["Boxning", "Kickboxning", "MMA", "Muay Thai"], r: "Boxning", cat: "SPORT" },
{ q: "Vilken sport tävlar man i när man använder en judogi?", a: ["Judo", "Karate", "Taekwondo", "Aikido"], r: "Judo", cat: "SPORT" },

{ q: "Vilket land vann OS-guld i triathlon 2021 (herrar)?", a: ["Norge", "Storbritannien", "Frankrike", "USA"], r: "Norge", cat: "SPORT" },
{ q: "Vilken sport kombinerar simning, cykling och löpning?", a: ["Triathlon", "Modern femkamp", "Duathlon", "Ironman"], r: "Triathlon", cat: "SPORT" },
{ q: "Vilken sport tävlar man i när man hoppar från trampolin?", a: ["Simhopp", "Gymnastik", "Trampolin", "Parkour"], r: "Trampolin", cat: "SPORT" },
{ q: "Vilken sport tävlar man i när man gör volter på matta?", a: ["Gymnastik", "Parkour", "Cheerleading", "Dans"], r: "Gymnastik", cat: "SPORT" },
{ q: "Vilken sport tävlar man i när man använder ringar, barr och bom?", a: ["Artistisk gymnastik", "Rytmisk gymnastik", "Akrobatik", "Dans"], r: "Artistisk gymnastik", cat: "SPORT" },

// --- CRASH BANDICOOT & SPYRO (Forts.) ---
    { q: "Vem skapade de ursprungliga Spyro-spelen till Playstation 1?", a: ["Insomniac Games", "Naughty Dog", "Rare", "Ubisoft"], r: "Insomniac Games", cat: "PLAYSTATION" },
    { q: "Vad heter Crash Bandicoots syster?", a: ["Coco", "Tawna", "Nina", "Candy"], r: "Coco", cat: "PLAYSTATION" },

    // --- GEOGRAFI ---
    { q: "Vilket land har flest öar i världen?", a: ["Sverige", "Filippinerna", "Indonesien", "Kanada"], r: "Sverige", cat: "GEOGRAFI" },
    { q: "Vilken är världens största ö (som inte är en kontinent)?", a: ["Grönland", "Madagaskar", "Nya Guinea", "Borneo"], r: "Grönland", cat: "GEOGRAFI" },
    { q: "I vilket land ligger Afrikas högsta berg, Kilimanjaro?", a: ["Tanzania", "Kenya", "Etiopien", "Uganda"], r: "Tanzania", cat: "GEOGRAFI" },
    { q: "Vilket land kallas för 'Land of the Thunder Dragon'?", a: ["Bhutan", "Nepal", "Tibet", "Mongoliet"], r: "Bhutan", cat: "GEOGRAFI" },
    { q: "Vilken huvudstad ligger nordligast i världen?", a: ["Reykjavik", "Oslo", "Helsingfors", "Nuuk"], r: "Reykjavik", cat: "GEOGRAFI" },

    // --- MATEMATIK & LOGIK ---
    { q: "Alice har med sig 44 energidrycker till LANBIT. Hon planerar att dricka 3 stycken per dygn. Hur många hela drycker har hon kvar när det fjärde dygnet börjar?", a: ["35", "32", "38", "41"], r: "35", cat: "LOGIK" },
    { q: "Vad är roten ur 144?", a: ["12", "14", "10", "16"], r: "12", cat: "MATEMATIK" },
    { q: "Hur många bitar går det på en byte?", a: ["8", "10", "16", "4"], r: "8", cat: "TECH" },

    // --- ALLMÄNT & BLANDAT ---
    { q: "Vad heter världens djupaste oceangrav?", a: ["Marianergraven", "Tonga-graven", "Java-graven", "Puerto Rico-graven"], r: "Marianergraven", cat: "GEOGRAFI" },
    { q: "Vilket grundämne har det kemiska tecknet 'Au'?", a: ["Guld", "Silver", "Aluminium", "Argon"], r: "Guld", cat: "VETENSKAP" },
    { q: "Vilken planet i vårt solsystem är känd som den 'Röda planeten'?", a: ["Mars", "Venus", "Jupiter", "Saturnus"], r: "Mars", cat: "ASTRONOMI" },
    { q: "Vem målade 'Mona Lisa'?", a: ["Leonardo da Vinci", "Michelangelo", "Pablo Picasso", "Vincent van Gogh"], r: "Leonardo da Vinci", cat: "KONST" },
    { q: "Vilket år sjönk fartyget Titanic?", a: ["1912", "1905", "1920", "1915"], r: "1912", cat: "HISTORIA" },
    { q: "Vilket land vann fotbolls-VM för herrar 2022?", a: ["Argentina", "Frankrike", "Brasilien", "Tyskland"], r: "Argentina", cat: "SPORT" },
    { q: "Vilket är världens största däggdjur?", a: ["Blåval", "Afrikansk elefant", "Giraff", "Kaskelot"], r: "Blåval", cat: "NATUR" },
    { q: "Vilken gas utgör största delen av jordens atmosfär?", a: ["Kväve", "Syre", "Koldioxid", "Argon"], r: "Kväve", cat: "VETENSKAP" },
    { q: "I vilket land ligger staden Marrakesh?", a: ["Marocko", "Egypten", "Tunisien", "Algeriet"], r: "Marocko", cat: "GEOGRAFI" },
    { q: "Vad heter huvudstaden i Japan?", a: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], r: "Tokyo", cat: "GEOGRAFI" },

{ q: "Vilken färg hade Game Boy-originalet (från 1989/90)?", a: ["Grå", "Svart", "Gul", "Lila"], r: "Grå", cat: "90-TAL" },
    { q: "Vad hette det digitala husdjuret man bar i fickan och var tvungen att mata?", a: ["Tamagotchi", "Furby", "Digimon", "Pikachu"], r: "Tamagotchi", cat: "90-TAL" },
    { q: "Vilket operativsystem lanserades 1995 med den berömda Start-menyn?", a: ["Windows 95", "Windows 3.1", "MS-DOS", "Mac OS 9"], r: "Windows 95", cat: "90-TAL" },
    { q: "Vilken svensk grupp slog igenom med 'All That She Wants' 1992?", a: ["Ace of Base", "Roxette", "Army of Lovers", "E-Type"], r: "Ace of Base", cat: "90-TAL" },
    { q: "Vad hette den lilla plastbrickan man 'spred' (kastade) mot varandra på skolgården?", a: ["Pogs", "Gogos", "Kulor", "Beyblades"], r: "Pogs", cat: "90-TAL" },
    { q: "Vilken konsol lanserade Sony 1994 som använde CD-skivor?", a: ["PlayStation", "Saturn", "Dreamcast", "N64"], r: "PlayStation", cat: "90-TAL" },
    { q: "Vad var det högsta numret på ett modem som 'skrek' när man kopplade upp sig?", a: ["56k", "28k", "14k", "128k"], r: "56k", cat: "90-TAL" },
    { q: "Vilken film från 1997 handlar om Jack och Rose på ett sjunkande skepp?", a: ["Titanic", "Armageddon", "Men in Black", "The Matrix"], r: "Titanic", cat: "90-TAL" },
    { q: "Vad hette den första webbläsaren som gjorde internet populärt för massorna?", a: ["Netscape Navigator", "Internet Explorer", "Chrome", "Opera"], r: "Netscape Navigator", cat: "90-TAL" },
    { q: "Vilket spel från 1996 introducerade hjältinnan Lara Croft?", a: ["Tomb Raider", "Resident Evil", "Quake", "Tekken"], r: "Tomb Raider", cat: "90-TAL" },
    { q: "Vad hette drycken som fanns i blå, röd och grön färg och var kolsyrad?", a: ["Hubba Bubba-läsk", "Jolt Cola", "Fanta Exotic", "Surge"], r: "Hubba Bubba-läsk", cat: "90-TAL" },
    { q: "Vilket program använde man för att chatta med vänner (innan MSN)?", a: ["ICQ", "IRC", "Skype", "WhatsApp"], r: "ICQ", cat: "90-TAL" },
    { q: "Vad hette fåret som var det första framgångsrika klonade däggdjuret?", a: ["Dolly", "Molly", "Bolly", "Polly"], r: "Dolly", cat: "90-TAL" },

    // --- 00-talet: Bredband, MP3 och Sociala Medier ---
    { q: "Vilket socialt nätverk dominerade i Sverige innan Facebook?", a: ["LunarStorm", "MySpace", "Playahead", "Friendster"], r: "LunarStorm", cat: "00-TAL" },
    { q: "Vilken MP3-spelare lanserade Apple 2001?", a: ["iPod", "Zune", "Walkman NW", "iRiver"], r: "iPod", cat: "00-TAL" },
    { q: "Vad hette programmet man använde för att fildela musik (lagligt eller olagligt)?", a: ["Napster", "Spotify", "iTunes", "Winamp"], r: "Napster", cat: "00-TAL" },
    { q: "Vilken spelkonsol från Microsoft introducerades 2001?", a: ["Xbox", "Xbox 360", "GameCube", "PS2"], r: "Xbox", cat: "00-TAL" },
    { q: "Vad hette den lilla Nokia-telefonen som nästan alla hade 2000 (känd för Snake)?", a: ["3310", "5110", "8210", "N95"], r: "3310", cat: "00-TAL" },
    { q: "Vilken svensk artist vann Eurovision 1999 och startade 00-talet med storm?", a: ["Charlotte Nilsson", "Carola", "Lena Philipsson", "The Ark"], r: "Charlotte Nilsson", cat: "00-TAL" },
    { q: "Vad hette det virtuella hotellet där man skapade avatarer och inredde rum?", a: ["Habbo Hotel", "The Sims", "Second Life", "Club Penguin"], r: "Habbo Hotel", cat: "00-TAL" },
    { q: "Vilket år lanserades YouTube?", a: ["2005", "2003", "2007", "2001"], r: "2005", cat: "00-TAL" },
    { q: "Vilken reality-serie introducerade oss för 'The Situation' och 'Snooki'?", a: ["Jersey Shore", "The Hills", "Paradise Hotel", "Big Brother"], r: "Jersey Shore", cat: "00-TAL" },
    { q: "Vad hette spelet där man använde en plastgitarr för att spela rockmusik?", a: ["Guitar Hero", "Rock Band", "SingStar", "Dance Dance Revolution"], r: "Guitar Hero", cat: "00-TAL" },
    { q: "Vilket företag lanserade sökmotorn som dödade AltaVista?", a: ["Google", "Yahoo", "Bing", "Ask Jeeves"], r: "Google", cat: "00-TAL" },
    { q: "Vad stod 'SMS' för?", a: ["Short Message Service", "Small Mail System", "Simple Message Sender", "Speed Mail Service"], r: "Short Message Service", cat: "00-TAL" },
    { q: "Vilken filmserie startade 2001 med 'De vises sten'?", a: ["Harry Potter", "Sagan om ringen", "Star Wars", "Twilight"], r: "Harry Potter", cat: "00-TAL" },
    { q: "Vad hette den svenska chattetjänsten för ungdomar som fanns mellan 2002-2010?", a: ["Playahead", "Skunk", "Kamrat", "Msn Messenger"], r: "Playahead", cat: "00-TAL" },
    { q: "Vilket program använde man för att spela musik på datorn, ofta med olika 'skins'?", a: ["Winamp", "VLC", "Windows Media Player", "RealPlayer"], r: "Winamp", cat: "00-TAL" },
    { q: "Vem vann den allra första säsongen av svenska Idol (2004)?", a: ["Daniel Lindström", "Darin", "Sebastian Karlsson", "Agnes"], r: "Daniel Lindström", cat: "00-TAL" },
    { q: "Vilket bärbart spelformat lanserade Sony 2004 (med små skivor)?", a: ["PSP", "Game Boy Advance", "Nintendo DS", "N-Gage"], r: "PSP", cat: "00-TAL" },
// --- Klassikerna ---
    { q: "Vilket brädspel har en maskot som heter Rich Uncle Pennybags?", a: ["Monopol", "Finans", "Cluedo", "Risk"], r: "Monopol", cat: "KLASSIKER" },
    { q: "I Cluedo, vem är offret som har blivit mördad?", a: ["Dr. Black", "Colonel Mustard", "Mr. Green", "Professor Plum"], r: "Dr. Black", cat: "KLASSIKER" },
    { q: "Vilken färg har de mest värdefulla gatorna i svenska Monopol (Norrmalmstorg & Hamngatan)?", a: ["Mörkblå", "Grön", "Röd", "Gul"], r: "Mörkblå", cat: "KLASSIKER" },
    { q: "Hur många pjäser har varje spelare vid start i Backgammon?", a: ["15", "12", "10", "16"], r: "15", cat: "KLASSIKER" },
    { q: "Vilket brädspel spelas på en spelplan som föreställer en karta över världen anno 1800-tal?", a: ["Risk", "Diplomacy", "Pandemic", "Axis & Allies"], r: "Risk", cat: "KLASSIKER" },
    { q: "Vilket spel använder ordet 'Yatzy' för fem tärningar av samma sort?", a: ["Yatzy", "Fia med knuff", "Backgammon", "Craps"], r: "Yatzy", cat: "KLASSIKER" },
    { q: "Hur många svarta rutor finns det på ett schackbräde?", a: ["32", "64", "28", "30"], r: "32", cat: "SCHACK" },
    { q: "Vad kallas det när en bonde når motståndarens sista rad i schack?", a: ["Promovering", "Rockad", "En passant", "Schackmatt"], r: "Promovering", cat: "SCHACK" },

    // --- Moderna Favoriter (Eurogames & Strategi) ---
    { q: "I Catan (Settlers), vilken resurs får man från skogsrutor?", a: ["Trä", "Lera", "Malm", "Ull"], r: "Trä", cat: "MODERNT" },
    { q: "Vilket spel går ut på att placera brickor för att bygga städer, vägar och kloster i Frankrike?", a: ["Carcassonne", "Ticket to Ride", "7 Wonders", "Citadels"], r: "Carcassonne", cat: "MODERNT" },
    { q: "I Ticket to Ride: Europe, vad är den längsta rutten värd i poäng?", a: ["21", "15", "25", "20"], r: "21", cat: "MODERNT" },
    { q: "Vilket spel handlar om att samarbeta för att stoppa fyra globala virusutbrott?", a: ["Pandemic", "Terraforming Mars", "Gloomhaven", "Root"], r: "Pandemic", cat: "MODERNT" },
    { q: "Vilket svenskt spel går ut på att göra planeten Mars beboelig?", a: ["Terraforming Mars", "Project Gaia", "Mars Open", "Svea Rike"], r: "Terraforming Mars", cat: "MODERNT" },
    { q: "Vad kallas de små träfigurerna som ofta används som spelpjäser (från tyskans 'people')?", a: ["Meeple", "Pawn", "Avatar", "Token"], r: "Meeple", cat: "MODERNT" },
    { q: "Vilket spel vann 'Spiel des Jahres' 1995 och startade brädspelsboomen?", a: ["Catan", "Carcassonne", "El Grande", "Tikal"], r: "Catan", cat: "HISTORIA" },
    { q: "I spelet '7 Wonders', hur många tidsåldrar (Ages) spelar man?", a: ["3", "4", "5", "7"], r: "3", cat: "STRATEGI" },
    { q: "Vilket spel använder fåglar som huvudtema och har ett fågelhus som tärningstorn?", a: ["Wingspan", "Everdell", "Root", "Cascadia"], r: "Wingspan", cat: "MODERNT" },

    // --- Partyspel & Frågesport ---
    { q: "Vilket spel går ut på att förklara ord utan att använda de mest uppenbara 'förbjudna' orden?", a: ["Taboo", "Med andra ord", "Pictionary", "Alias"], r: "Taboo", cat: "PARTY" },
    { q: "I Trivial Pursuit, vilken färg har kategorin 'Underhållning'?", a: ["Rosa", "Grön", "Gul", "Blå"], r: "Rosa", cat: "TP" },
    { q: "Vad heter spelet där man ska gissa vem man är genom en lapp i pannan?", a: ["Vem där?", "Med andra ord", "Lappa pannan", "Heads Up"], r: "Vem där?", cat: "PARTY" },
    { q: "Vilket spel går ut på att dra träblock ur ett torn tills det rasar?", a: ["Jenga", "Kloss", "Stapla", "Mikado"], r: "Jenga", cat: "PARTY" },
    { q: "I Cards Against Humanity, vilken färg har korten som innehåller frågorna/luckorna?", a: ["Svart", "Vit", "Blå", "Röd"], r: "Svart", cat: "PARTY" },

    // --- Fantasy & Äventyr ---
    { q: "Vilket massivt spel (ofta i en stor låda) utspelar sig i staden Gloomhaven?", a: ["Gloomhaven", "Frosthaven", "Dungeon Quest", "Mice and Mystics"], r: "Gloomhaven", cat: "ÄVENTYR" },
    { q: "Vilket spel kallas ofta för 'världens mest kända rollspel'?", a: ["Dungeons & Dragons", "Pathfinder", "Eon", "Drakar och Demoner"], r: "Dungeons & Dragons", cat: "ROLLSPEL" },
    { q: "Hur många sidor har en tärning som kallas d20?", a: ["20", "12", "10", "100"], r: "20", cat: "NÖRDIGT" },
    { q: "Vilket spel handlar om att fly från ett hemsökt hus som man själv bygger under spelets gång?", a: ["Betrayal at House on the Hill", "Mansion of Madness", "Cluedo", "Ghost Castle"], r: "Betrayal at House on the Hill", cat: "SKRÄCK" },

    // --- Korta & Snabba frågor ---
    { q: "Vilken färg har kategorin 'Geografi' i Trivial Pursuit?", a: ["Blå", "Brun", "Grön", "Gul"], r: "Blå", cat: "TP" },
    { q: "Hur många kort har man på handen vid start i UNO?", a: ["7", "5", "10", "8"], r: "7", cat: "KORT" },
    { q: "Vilket spel går ut på att man är lönnmördare som ska hitta sina agenter via ordledtrådar?", a: ["Codenames", "Decrypto", "Spyfall", "The Resistance"], r: "Codenames", cat: "PARTY" },
    { q: "Vilket gammalt spel spelas med glaskulor på en stjärnformad bräda?", a: ["Kinaspel", "Fia", "Kulspel", "Solitär"], r: "Kinaspel", cat: "RETRO" },
    { q: "Vilket spel handlar om att bygga de mest effektiva tågrutterna mellan städer?", a: ["Ticket to Ride", "Railroad Tycoon", "Steam", "TransAmerica"], r: "Ticket to Ride", cat: "MODERNT" },
    { q: "Hur många rutor har ett klassiskt Luffarschack (tre-i-rad)?", a: ["9", "12", "16", "6"], r: "9", cat: "KLASSIKER" },
    { q: "I spelet 'Operation', vad händer om du nuddar kanterna med pincetten?", a: ["Näsan lyser röd", "Datorn piper", "Du förlorar direkt", "Patienten skriker"], r: "Näsan lyser röd", cat: "KLASSIKER" },
    { q: "Vilket spel använder en matta med färgade cirklar och deltagarnas kroppar?", a: ["Twister", "Limbo", "Balans", "Knut"], r: "Twister", cat: "PARTY" },
    { q: "Vad heter den fiktiva valutan i spelet Finans?", a: ["Ecu", "Dollar", "Credits", "Finans-kronor"], r: "Ecu", cat: "RETRO" },
    { q: "Vilket land kommer spelet Mahjong ursprungligen ifrån?", a: ["Kina", "Japan", "Vietnam", "Korea"], r: "Kina", cat: "HISTORIA" },
    { q: "Hur många pjäser har varje spelare i Fia med knuff?", a: ["4", "3", "5", "2"], r: "4", cat: "KLASSIKER" },
    { q: "I spelet 'Dungeon Quest' (Drakborgen), vad är det största hotet i mitten av borgen?", a: ["Draken", "Trollet", "Fällan", "Mörkret"], r: "Draken", cat: "RETRO" },
    { q: "Vilket ordspel använder små träbrickor med bokstäver och poängvärden?", a: ["Scrabble", "Wordfeud", "Boggle", "Alfapet"], r: "Scrabble", cat: "ORD" },
    { q: "Hur många poäng är bokstaven 'Z' värd i svenska Alfapet?", a: ["10", "8", "4", "9"], r: "10", cat: "ORD" },
    { q: "Vilket spel går ut på att gissa påståenden om sina vänner, ofta med frågan 'Vem i rummet...'?", a: ["Vem i rummet", "Ego", "Sanning eller konsekvens", "Pekleken"], r: "Vem i rummet", cat: "PARTY" },
    { q: "Vilken spelserie innehåller titlar som 'Pandemic Legacy' och 'Risk Legacy'?", a: ["Legacy", "Campaign", "Evolution", "Chronicles"], r: "Legacy", cat: "NÖRDIGT" },
    { q: "I spelet 'Exploding Kittens', vilket kort kan stoppa en exploderande katt?", a: ["Defuse", "Nope", "Skip", "Attack"], r: "Defuse", cat: "KORT" },
    { q: "Vilket spel handlar om att handla med juveler för att imponera på adelsmän under renässansen?", a: ["Splendor", "Century", "Azul", "Jaipur"], r: "Splendor", cat: "MODERNT" },
    { q: "Vad kallas den runda skivan i spelet 'Tjuv och polis' där man ser hur mycket man får flytta?", a: ["Snurra", "Tärningshjul", "Växel", "Kompass"], r: "Snurra", cat: "RETRO" },
    { q: "Vilket mönstrat brickspel vann 'Spiel des Jahres' 2018 och är inspirerat av portugisiskt kakel?", a: ["Azul", "Sagrada", "Calico", "Patchwork"], r: "Azul", cat: "MODERNT" },
    { q: "I spelet 'Battleship' (Sänka skepp), hur många rutor långt är hangarfartyget?", a: ["5", "4", "3", "6"], r: "5", cat: "KLASSIKER" },
    { q: "Vilket spel går ut på att bygga ett vackert lapptäcke på en 9x9-yta?", a: ["Patchwork", "Cottage Garden", "Bärenpark", "Tetris"], r: "Patchwork", cat: "MODERNT" },
    { q: "Vilket spel handlar om att man är apor som skjuter kokosnötter i bägare?", a: ["Coconuts", "Monkey Business", "Banana Blast", "Jungle Speed"], r: "Coconuts", cat: "PARTY" },
    { q: "Vilket spel går ut på att man ska hitta den 'Dixon' som rört vid en speciell bild genom att använda abstrakta ledtrådar?", a: ["Dixit", "Mysterium", "Muse", "Stella"], r: "Dixit", cat: "PARTY" },

// --- Rollspel (RPG & D&D) ---
    { q: "Vad står förkortningen 'DM' för i rollspelssammanhang?", a: ["Dungeon Master", "Data Manager", "Dice Master", "Dragon Master"], r: "Dungeon Master", cat: "ROLLSPEL" },
    { q: "Vilken tärning används oftast för att avgöra om en handling lyckas i Dungeons & Dragons?", a: ["d20", "d12", "d100", "d6"], r: "d20", cat: "ROLLSPEL" },
    { q: "Vilket svenskt rollspel utspelar sig i en postapokalyptisk värld där man spelar mutanter?", a: ["Mutant", "Eon", "Drakar och Demoner", "Trudvang"], r: "Mutant", cat: "ROLLSPEL" },
    { q: "Vad kallas det när man slår det högsta möjliga värdet på en tärning (oftast en 20:a)?", a: ["Critical Hit", "Natural One", "Epic Win", "Overkill"], r: "Critical Hit", cat: "ROLLSPEL" },
    { q: "I rollspel, vad står förkortningen 'NPC' för?", a: ["Non-Player Character", "New Player Class", "Neutral Party Companion", "Non-Physical Creature"], r: "Non-Player Character", cat: "ROLLSPEL" },
    { q: "Vilken ras i D&D är känd för att ha 'Darkvision' och bo under jorden?", a: ["Drow", "Halfling", "Dragonborn", "Tiefling"], r: "Drow", cat: "ROLLSPEL" },
    { q: "Vem skapade Dungeons & Dragons tillsammans med Dave Arneson?", a: ["Gary Gygax", "Steve Jackson", "Richard Garfield", "H.P. Lovecraft"], r: "Gary Gygax", cat: "ROLLSPEL" },
    { q: "Vad kallas spelvärlden i rollspelet 'Drakar och Demoner' (2023 års version)?", a: ["Dimmornas dal", "Ereb Altor", "Mundana", "Trudvang"], r: "Dimmornas dal", cat: "ROLLSPEL" },

    // --- Kortspel (Magic, Pokémon, Yu-Gi-Oh) ---
    { q: "Vilket kort anses vara det mest värdefulla och sällsynta i Magic: The Gathering?", a: ["Black Lotus", "Blue Eyes White Dragon", "Charizard", "Ancestral Recall"], r: "Black Lotus", cat: "KORTSPEL" },
    { q: "Vilken typ av energi använder en Pikachu oftast i Pokémon TCG?", a: ["Lightning", "Fire", "Psychic", "Colorless"], r: "Lightning", cat: "KORTSPEL" },
    { q: "I Yu-Gi-Oh, hur många kort krävs för att vinna direkt med 'Exodia'?", a: ["5", "3", "4", "6"], r: "5", cat: "KORTSPEL" },
    { q: "Vad kallas det när man blandar sin kortlek i Magic så att motståndaren får dra det understa kortet?", a: ["Att cutta", "Att scrya", "Att milla", "Att tappar"], r: "Att cutta", cat: "KORTSPEL" },
    { q: "Vilken färg i Magic: The Gathering fokuserar mest på eld, kaos och snabba attacker?", a: ["Röd", "Svart", "Blå", "Grön"], r: "Röd", cat: "KORTSPEL" },
    { q: "Vad står förkortningen 'TCG' för?", a: ["Trading Card Game", "Total Card Gaming", "Tactical Card Group", "Tabletop Card Game"], r: "Trading Card Game", cat: "KORTSPEL" },
    { q: "Vilket kortspel går ut på att döda monster, stjäla skatten och hugga dina vänner i ryggen?", a: ["Munchkin", "Hearthstone", "Exploding Kittens", "Gloom"], r: "Munchkin", cat: "KORTSPEL" },
    { q: "Hur många kort har en standardlek i Magic: The Gathering (minimum)?", a: ["60", "40", "52", "100"], r: "60", cat: "KORTSPEL" },

    // --- Figurspel (Warhammer & Miniatyrer) ---
    { q: "Vilket år utspelar sig huvudserien i Warhammer-universumet (sci-fi versionen)?", a: ["40,000", "30,000", "50,000", "2,000"], r: "40,000", cat: "FIGURSPEL" },
    { q: "Vad kallas de ikoniska supersoldaterna i Warhammer 40k?", a: ["Space Marines", "Stormtroopers", "Master Chiefs", "Gears of War"], r: "Space Marines", cat: "FIGURSPEL" },
    { q: "Vad kallas den färgmetod där man drar nästan torr färg över upphöjda detaljer på en figur?", a: ["Drybrushing", "Layering", "Washing", "Glazing"], r: "Drybrushing", cat: "Hobby" },
    { q: "Vilket företag tillverkar Warhammer?", a: ["Games Workshop", "Wizards of the Coast", "Hasbro", "Asmodee"], r: "Games Workshop", cat: "FIGURSPEL" },
    { q: "Vad kallas de utomjordiska varelserna i Warhammer 40k som styrs av ett 'Hive Mind'?", a: ["Tyranids", "Necrons", "Eldar", "Tau"], r: "Tyranids", cat: "FIGURSPEL" },
    { q: "Vilket verktyg används oftast för att ta bort små plastrester från en miniatyr?", a: ["Hobbykniv", "Hammare", "Lödkolv", "Svarv"], r: "Hobbykniv", cat: "Hobby" },

    // --- Cosplay & Konvent ---
    { q: "Från vilket land kommer termen 'Cosplay' ursprungligen?", a: ["Japan", "USA", "Sydkorea", "Kina"], r: "Japan", cat: "COSPLAY" },
    { q: "Vad är 'Cosplay' en sammanslagning av för två ord?", a: ["Costume & Play", "Cosmic & Player", "Cosmetic & Play", "Cool & Player"], r: "Costume & Play", cat: "COSPLAY" },
    { q: "Vad kallas det material (skumgummi) som ofta används för att bygga rustningar?", a: ["EVA-foam", "Styrolit", "PVC", "Latex"], r: "EVA-foam", cat: "COSPLAY" },
    { q: "Vad betyder termen 'Crossplay' inom cosplay-världen?", a: ["Att klä ut sig till ett kön man inte tillhör", "Att blanda två karaktärer", "Att tävla i grupp", "Att köpa sin dräkt färdig"], r: "Att klä ut sig till ett kön man inte tillhör", cat: "COSPLAY" },
    { q: "Vad kallas en person som rör sig på ett konvent utan dräkt?", a: ["Mugglar-cosplayer (Civil)", "NPC", "Gäst", "Noob"], r: "Mugglar-cosplayer (Civil)", cat: "COSPLAY" },
    { q: "Vad står förkortningen 'WCS' för inom tävlingscosplay?", a: ["World Cosplay Summit", "World Costume Show", "Winners Cosplay Series", "West Coast Showcase"], r: "World Cosplay Summit", cat: "COSPLAY" },

    // --- Blandat Nördigt ---
    { q: "Vad kallas genren där teknik möter viktorianskt mode (ofta med kugghjul)?", a: ["Steampunk", "Cyberpunk", "Dieselpunk", "Atompunk"], r: "Steampunk", cat: "GENRE" },
    { q: "Vilken superhjälte kallas för 'The Dark Knight'?", a: ["Batman", "Iron Man", "Black Panther", "Daredevil"], r: "Batman", cat: "COMICS" },
    { q: "Vilken färg har Luke Skywalkers ljussabel i 'Return of the Jedi'?", a: ["Grön", "Blå", "Röd", "Lila"], r: "Grön", cat: "STAR WARS" },
    { q: "Vad kallas de japanska serietidningarna?", a: ["Manga", "Anime", "Manhua", "Webtoon"], r: "Manga", cat: "KULTUR" },
    { q: "Vilket språk talar man i landet Mordor (enligt Tolkien)?", a: ["Svarta språket", "Quenya", "Sindarin", "Khuzdul"], r: "Svarta språket", cat: "LITTERATUR" },
    { q: "Vad heter huvudpersonen i 'The Legend of Zelda'?", a: ["Link", "Zelda", "Ganon", "Navi"], r: "Link", cat: "SPEL" },
    { q: "Vad kallas det när man spelar rollspel via text på nätet?", a: ["Play-by-post", "Lajv", "Speedrun", "Streaming"], r: "Play-by-post", cat: "ROLLSPEL" },
    { q: "Vilken varelse är hälften häst och hälften örn?", a: ["Hippogriff", "Centaur", "Grip", "Pegasus"], r: "Hippogriff", cat: "MYTOLOGI" },
    { q: "Vilket material är Captain Americas sköld gjord av?", a: ["Vibranium", "Adamantium", "Kryptonit", "Mithril"], r: "Vibranium", cat: "COMICS" },
    { q: "Vilken siffra är 'Svaret på frågan om livet, universum och allting'?", a: ["42", "7", "100", "666"], r: "42", cat: "LITTERATUR" },
    { q: "Vad kallas ett rollspel som utspelar sig fysiskt (man klär ut sig och agerar)?", a: ["Lajv (LARP)", "Cosplay", "E-sport", "Tabletop"], r: "Lajv (LARP)", cat: "ROLLSPEL" },
    { q: "Vem bär 'The One Ring' till Mount Doom?", a: ["Frodo Bagger", "Bilbo Bagger", "Sam Gamgi", "Gandalf"], r: "Frodo Bagger", cat: "LITTERATUR" },
    { q: "Vilken tärning har flest sidor av dessa?", a: ["d12", "d10", "d8", "d4"], r: "d12", cat: "NÖRDIGT" },
    { q: "Vad kallas den stora mässan i San Diego som är känd för film- och serieavslöjanden?", a: ["Comic-Con", "Gamescom", "E3", "Pax"], r: "Comic-Con", cat: "KONVENT" },
    { q: "Vad heter den talande katten i 'Sailor Moon'?", a: ["Luna", "Salem", "Meowth", "Jiji"], r: "Luna", cat: "ANIME" },
    { q: "Vilket brädspel/figurspel använder termen 'WAAAGH!'?", a: ["Warhammer (Orcs)", "D&D", "Starcraft", "Warcraft"], r: "Warhammer (Orcs)", cat: "FIGURSPEL" },
    { q: "Vilket är det första steget i att måla en figur?", a: ["Priming (Grundmålning)", "Highlighting", "Varnishing", "Basning"], r: "Priming (Grundmålning)", cat: "Hobby" },
    { q: "Vem är känd som 'The Stan Lee of Manga'?", a: ["Osamu Tezuka", "Akira Toriyama", "Eiichiro Oda", "Hayao Miyazaki"], r: "Osamu Tezuka", cat: "ANIME" },
    { q: "Vad kallas ett deck-building spel där man köper kort under spelets gång?", a: ["Dominion", "Poker", "Bridge", "Uno"], r: "Dominion", cat: "KORTSPEL" },
    { q: "Vilken känd rollspelsprofil har rösten till 'Mercree' i Overwatch?", a: ["Matthew Mercer", "Vin Diesel", "Joe Manganiello", "Wil Wheaton"], r: "Matthew Mercer", cat: "NÖRDIGT" },
    { q: "Vad kallas valutan i världen 'Azeroth'?", a: ["Guld, silver & koppar", "Gil", "Septims", "Caps"], r: "Guld, silver & koppar", cat: "SPEL" },

    // --- TECH & GAMING ---
    { q: "Vad står förkortningen 'HTTP' för?", a: ["Hypertext Transfer Protocol", "High Tech Transfer Process", "Hyperlink Text Terminal", "Home Tool Transfer Program"], r: "Hypertext Transfer Protocol", cat: "TECH" },
    { q: "Vilket företag lanserade den första iPhone-modellen 2007?", a: ["Apple", "Samsung", "Nokia", "Motorola"], r: "Apple", cat: "TECH" },
    { q: "I vilket populärt spel bygger man av block och kämpar mot 'Creepers'?", a: ["Minecraft", "Roblox", "Terraria", "Fortnite"], r: "Minecraft", cat: "GAMING" },
    { q: "Vilken färg har de flesta av 'Among Us'-karaktärerna i spelets ikon?", a: ["Röd", "Blå", "Gul", "Grön"], r: "Röd", cat: "GAMING" },
    { q: "Vad heter den digitala plattformen för spel skapad av Valve?", a: ["Steam", "Origin", "Epic Games Store", "Uplay"], r: "Steam", cat: "TECH" },
    { q: "Vilket programmeringsspråk används främst för att göra webbsidor interaktiva?", a: ["JavaScript", "Python", "C++", "HTML"], r: "JavaScript", cat: "TECH" },
    { q: "Vad kallas det när man utnyttjar ett programmeringsfel i ett spel för att få fördelar?", a: ["Exploit", "Mod", "Patch", "Easter Egg"], r: "Exploit", cat: "GAMING" },
    { q: "Vilken svensk stad är känd för att vara hemvist åt speljätten Massive Entertainment (Ubisoft)?", a: ["Malmö", "Stockholm", "Göteborg", "Uppsala"], r: "Malmö" , cat: "GAMING" },

    // --- MARIO & SONIC KLASSIKER ---
    { q: "Vad händer om Sonic tar skada när han bär på guldringar?", a: ["Han tappar alla ringar", "Han dör direkt", "Han tappar 1 ring", "Han blir osynlig"], r: "Han tappar alla ringar", cat: "RETRO" },
    { q: "Vad heter prinsessan som Mario oftast räddar i Svampriket?", a: ["Peach", "Zelda", "Daisy", "Rosalina"], r: "Peach", cat: "NINTENDO" },
    { q: "I vilket spel dök dinosaurien Yoshi upp för första gången?", a: ["Super Mario World", "Super Mario Bros 1", "Mario Kart 64", "Super Mario Sunshine"], r: "Super Mario World", cat: "RETRO" },
    { q: "Vilket företag skapade Sonic the Hedgehog som en rival till Mario?", a: ["SEGA", "Nintendo", "Sony", "Capcom"], r: "SEGA", cat: "RETRO" },
    { q: "Vad samlar Sonic på i banorna för att inte dö när han blir träffad?", a: ["Guldringar", "Mynt", "Diamanter", "Stjärnor"], r: "Guldringar", cat: "GAMING" },
    { q: "Vilken bana i Mario Kart är ökänd för att sakna räcken och vara mycket svår?", a: ["Rainbow Road", "Bowser's Castle", "Mario Circuit", "Koopa Beach"], r: "Rainbow Road", cat: "NINTENDO" },
    { q: "Vad heter Marios bror som bär gröna kläder?", a: ["Luigi", "Wario", "Waluigi", "Toad"], r: "Luigi", cat: "NINTENDO" },
    { q: "Vilken kraft ger 'Fire Flower' till Mario?", a: ["Kasta eldbollar", "Bli osårbar", "Flyga", "Bli jättestor"], r: "Kasta eldbollar", cat: "NINTENDO" },
    { q: "Vad heter den elaka sköldpaddskungen som är Marios ärkefiende?", a: ["Bowser", "King Boo", "Wario", "Kamek"], r: "Bowser", cat: "NINTENDO" },
    { q: "Vem är känd som 'The Blue Blur'?", a: ["Sonic", "Mega Man", "Sub-Zero", "Smurfarna"], r: "Sonic", cat: "RETRO" },
    { q: "Vilken färg har de små svamparna 'Toads' hattar oftast?", a: ["Vit med röda prickar", "Grön", "Blå", "Helt vit"], r: "Vit med röda prickar", cat: "NINTENDO" },
    { q: "Vad heter Sonics bästa vän, den tvåsvansade räven?", a: ["Tails", "Knuckles", "Shadow", "Amy"], r: "Tails", cat: "RETRO" },
// --- MARIO & SONIC (Forts.) ---
    { q: "Vilken bana i Mario Kart är ökänd för att sakna räcken och vara mycket svår?", a: ["Rainbow Road", "Bowser's Castle", "Mario Circuit", "Koopa Beach"], r: "Rainbow Road", cat: "NINTENDO" },
    { q: "Vad heter Marios bror som bär gröna kläder?", a: ["Luigi", "Wario", "Waluigi", "Toad"], r: "Luigi", cat: "NINTENDO" },
    { q: "Vilken kraft ger 'Fire Flower' till Mario?", a: ["Kasta eldbollar", "Bli osårbar", "Flyga", "Bli jättestor"], r: "Kasta eldbollar", cat: "NINTENDO" },
    { q: "Vad heter den elaka sköldpaddskungen som är Marios ärkefiende?", a: ["Bowser", "King Boo", "Wario", "Kamek"], r: "Bowser", cat: "NINTENDO" },
    { q: "Vem är känd som 'The Blue Blur'?", a: ["Sonic", "Mega Man", "Sub-Zero", "Smurfarna"], r: "Sonic", cat: "RETRO" },
    { q: "Vilken färg har de små svamparna 'Toads' hattar oftast?", a: ["Vit med röda prickar", "Grön", "Blå", "Helt vit"], r: "Vit med röda prickar", cat: "NINTENDO" },
    { q: "Vad heter Sonics bästa vän, den tvåsvansade räven?", a: ["Tails", "Knuckles", "Shadow", "Amy"], r: "Tails", cat: "RETRO" },

    // --- MARVEL & DC ---
    { q: "Vilken superhjälte kallas för 'The Dark Knight'?", a: ["Batman", "Superman", "Iron Man", "Spider-Man"], r: "Batman", cat: "DC" },
    { q: "Vad heter Spider-Mans civila jag?", a: ["Peter Parker", "Bruce Wayne", "Tony Stark", "Clark Kent"], r: "Peter Parker", cat: "MARVEL" },
    { q: "Vilken metall är Wolverines skelett täckt av?", a: ["Adamantium", "Vibranium", "Titan", "Järn"], r: "Adamantium", cat: "MARVEL" },
    { q: "Vem är känd som 'The Man of Steel'?", a: ["Superman", "Thor", "Hulk", "Captain America"], r: "Superman", cat: "DC" },
    { q: "Vilken superhjältegrupp hör Iron Man och Captain America till?", a: ["The Avengers", "Justice League", "X-Men", "Fantastic Four"], r: "The Avengers", cat: "MARVEL" },
    { q: "Vad heter hemplaneten för guden Thor?", a: ["Asgård", "Krypton", "Mars", "Xandar"], r: "Asgård", cat: "MARVEL" },
    { q: "Vilken färg har Hulken vanligtvis när han är arg?", a: ["Grön", "Röd", "Blå", "Grå"], r: "Grön", cat: "MARVEL" },
    { q: "Vad heter Batmans trogna butler?", a: ["Alfred", "Jarvis", "Robin", "Gordon"], r: "Alfred", cat: "DC" },
    { q: "Vem är Wonder Womans alter ego?", a: ["Diana Prince", "Selina Kyle", "Natasha Romanoff", "Lois Lane"], r: "Diana Prince", cat: "DC" },
    { q: "Vilket vapen använder Captain America främst?", a: ["En sköld", "En hammare", "En pilbåge", "En piska"], r: "En sköld", cat: "MARVEL" },

    // --- VETENSKAP & NATUR ---
    { q: "Vilket organ i kroppen pumpar runt blodet?", a: ["Hjärtat", "Lungan", "Levern", "Hjärnan"], r: "Hjärtat", cat: "VETENSKAP" },
    { q: "Vilken är den närmaste stjärnan till jorden?", a: ["Solen", "Proxima Centauri", "Sirius", "Polstjärnan"], r: "Solen", cat: "ASTRONOMI" },
    { q: "Vilket djur är känt för att vara 'skogens konung' i Sverige?", a: ["Älg", "Björn", "Varg", "Rådjur"], r: "Älg", cat: "NATUR" },
    { q: "Vad kallas vatten i fast form?", a: ["Is", "Ånga", "Snö", "Hagel"], r: "Is", cat: "VETENSKAP" },
    { q: "Vilken färg får man om man blandar blått och gult?", a: ["Grönt", "Lila", "Orange", "Brunt"], r: "Grönt", cat: "KONST" },
    { q: "Vilket träd bär ekollon?", a: ["Ek", "Bok", "Lönn", "Björk"], r: "Ek", cat: "NATUR" },
    { q: "Vad heter den största planeten i vårt solsystem?", a: ["Jupiter", "Saturnus", "Neptunus", "Uranus"], r: "Jupiter", cat: "ASTRONOMI" },
    { q: "Hur många ben har en spindel?", a: ["8", "6", "10", "12"], r: "8", cat: "NATUR" },
    { q: "Vilken världsdel ligger Sverige i?", a: ["Europa", "Asien", "Nordamerika", "Oceanien"], r: "Europa", cat: "GEOGRAFI" },
    { q: "Vad heter den gas som vi människor andas in för att leva?", a: ["Syre", "Kväve", "Koldioxid", "Väte"], r: "Syre", cat: "VETENSKAP" },

    // --- RETROSPEL & ARKAD ---
    { q: "Vilket pusselspel skapades av Alexey Pajitnov och handlar om fallande block?", a: ["Tetris", "Arkanoid", "Pac-Man", "Dig Dug"], r: "Tetris", cat: "ARKAD" },
    { q: "I vilket spel jagas en gul cirkel av fyra spöken i en labyrint?", a: ["Pac-Man", "Donkey Kong", "Frogger", "Asteroids"], r: "Pac-Man", cat: "ARKAD" },
    { q: "Vad heter den lilla figuren som måste hoppa över tunnor i det ursprungliga Donkey Kong?", a: ["Jumpman", "Mario", "Luigi", "Stanley"], r: "Jumpman", cat: "RETRO" },
    { q: "Vilken japansk spelutvecklare skapade Legend of Zelda och Super Mario?", a: ["Shigeru Miyamoto", "Hideo Kojima", "Satoshi Tajiri", "Akira Toriyama"], r: "Shigeru Miyamoto", cat: "NINTENDO" },
    { q: "Vad står förkortningen 'FPS' för i spelsammanhang?", a: ["First Person Shooter", "Fast Point System", "Frames Per Second", "Final Play State"], r: "First Person Shooter", cat: "GAMING" },
    { q: "Vilket år släpptes den första Playstation-konsolen i Japan?", a: ["1994", "1992", "1996", "1990"], r: "1994", cat: "PLAYSTATION" },
    { q: "Vilket djur är maskoten för Nintendo-serien Pokémon?", a: ["Pikachu", "Eevee", "Charmander", "Bulbasaur"], r: "Pikachu", cat: "NINTENDO" },
    { q: "Vad kallas den lilla skärmen på en Nintendo GameCube-kontroll?", a: ["Det finns ingen skärm", "LCD-skärm", "Visual Memory Unit", "Gamepad"], r: "Det finns ingen skärm", cat: "RETRO" },
    { q: "Vilket företag tillverkade konsolen 'Genesis' (känd som Mega Drive i Europa)?", a: ["SEGA", "Nintendo", "Atari", "NEC"], r: "SEGA", cat: "RETRO" },
    { q: "Vad heter huvudkaraktären i Halo-serien?", a: ["Master Chief", "Marcus Fenix", "Doomguy", "Commander Shepard"], r: "Master Chief", cat: "GAMING" },
    { q: "Vilket spel handlar om att överleva på en öde ö och bygga saker av resurser?", a: ["Animal Crossing", "Minecraft", "The Sims", "Stardew Valley"], r: "Animal Crossing", cat: "GAMING" },
    { q: "Vad heter den lilla rosa figuren som kan suga upp fiender och ta deras krafter?", a: ["Kirby", "Jigglypuff", "Waddle Dee", "Meta Knight"], r: "Kirby", cat: "NINTENDO" },
    { q: "Vilket bilspel från Nintendo har funnits sedan Super Nintendo-eran?", a: ["Mario Kart", "F-Zero", "Gran Turismo", "Need for Speed"], r: "Mario Kart", cat: "NINTENDO" },
// --- POKÉMON & NINTENDO ---
    { q: "Vilken Pokémon har nummer #001 i Pokédex?", a: ["Bulbasaur", "Pikachu", "Charmander", "Squirtle"], r: "Bulbasaur", cat: "POKÉMON" },
    { q: "Vilken typ av Pokémon är Pikachu?", a: ["Elektrisk", "Eld", "Vatten", "Gräs"], r: "Elektrisk", cat: "POKÉMON" },
    { q: "Vad heter bollen man använder för att fånga Pokémon?", a: ["Pokéball", "Great Ball", "Master Ball", "Ultra Ball"], r: "Pokéball", cat: "POKÉMON" },
    { q: "Vilken region kommer de första 151 Pokémon-arterna ifrån?", a: ["Kanto", "Johto", "Hoenn", "Sinnoh"], r: "Kanto", cat: "POKÉMON" },
    { q: "Vem är huvudkaraktären i Pokémon-animen som vill bli en Pokémon-mästare?", a: ["Ash Ketchum", "Gary Oak", "Brock", "Misty"], r: "Ash Ketchum", cat: "POKÉMON" },
    { q: "Vilken Nintendo-konsol introducerade rörelsekontroller och Wii Sports?", a: ["Wii", "GameCube", "Nintendo 64", "Switch"], r: "Wii", cat: "NINTENDO" },
    { q: "Vad heter huvudkaraktären i 'The Legend of Zelda'?", a: ["Link", "Zelda", "Ganon", "Epona"], r: "Link", cat: "NINTENDO" },
    { q: "I vilket spel kämpar man för att överleva mot 'the Storm' och bygga fort?", a: ["Fortnite", "Apex Legends", "PUBG", "Warzone"], r: "Fortnite", cat: "GAMING" },

    // --- FILM & TV ---
    { q: "Vilken film handlar om en ung trollkarl som går på Hogwarts?", a: ["Harry Potter", "Sagan om Ringen", "Percy Jackson", "Narnia"], r: "Harry Potter", cat: "FILM" },
    { q: "Vem spelar huvudrollen som Jack Sparrow i Pirates of the Caribbean?", a: ["Johnny Depp", "Brad Pitt", "Orlando Bloom", "Tom Cruise"], r: "Johnny Depp", cat: "FILM" },
    { q: "Vilken Disney-film handlar om lejonet Simba?", a: ["Lejonkungen", "Aladdin", "Mulan", "Djungelboken"], r: "Lejonkungen", cat: "FILM" },
    { q: "I vilken filmserie hittar vi karaktärer som Luke Skywalker och Darth Vader?", a: ["Star Wars", "Star Trek", "Guardians of the Galaxy", "Dune"], r: "Star Wars", cat: "FILM" },
    { q: "Vad heter den gröna ogren som bor i ett träsk?", a: ["Shrek", "Fiona", "Donkey", "Puss in Boots"], r: "Shrek", cat: "FILM" },
    { q: "Vem är känd som '007'?", a: ["James Bond", "Ethan Hunt", "Jason Bourne", "Sherlock Holmes"], r: "James Bond", cat: "FILM" },
    { q: "I vilken stad utspelar sig serien 'Vänner' (Friends)?", a: ["New York", "Los Angeles", "Chicago", "London"], r: "New York", cat: "TV-SERIER" },

// --- KONSOLER: KLASSISKA FEL (20 frågor) ---
    { q: "Vad kallas det fruktade hårdvarufelet på Xbox 360 som indikeras av tre röda lampor?", a: ["Red Ring of Death", "Circle of Doom", "Fatal Error Light", "Red Box of Pain"], r: "Red Ring of Death", cat: "FELSÖKNING" },
    { q: "Vilket problem drabbade ofta Nintendo Switch-kontroller där karaktären rör sig utan att man rör spaken?", a: ["Joy-Con Drift", "Stick Lag", "Ghost Input", "Sensor Failure"], r: "Joy-Con Drift", cat: "FELSÖKNING" },
    { q: "Vad var det vanligaste sättet folk 'lagade' sina Nintendo NES-kassetter på (vilket egentligen skadade dem)?", a: ["Blåste i dem", "Skakade dem", "Hällde vatten på dem", "Suddade med suddgummi"], r: "Blåste i dem", cat: "FELSÖKNING" },
    { q: "Vilken färg lyser en PlayStation 4 med om den drabbas av ett kritiskt hårdvarufel vid start?", a: ["Blått (Blue Light of Death)", "Rött", "Gult", "Vitt"], r: "Blått (Blue Light of Death)", cat: "FELSÖKNING" },
    { q: "Vad kallas felet på PlayStation 3 som motsvarar Xbox 360:s röda ring?", a: ["Yellow Light of Death", "Red Screen of Terror", "Green Blink", "Orange Alert"], r: "Yellow Light of Death", cat: "FELSÖKNING" },
    { q: "Varför slutade många skivläsare på original-PlayStation 1 fungera efter ett tag?", a: ["Plastdetaljer slets ut av värme", "Lasern blev för stark", "Skivorna snurrade för fort", "Damm i fläkten"], r: "Plastdetaljer slets ut av värme", cat: "FELSÖKNING" },
    { q: "Vilket felmeddelande visas på en Nintendo GameCube om den inte kan läsa skivan?", a: ["An error has occurred", "Disc Read Error", "No Disk Found", "System Failure"], r: "An error has occurred", cat: "FELSÖKNING" },
    { q: "Vad beror oftast 'drift' i handkontroller på?", a: ["Slitage i potentiometern", "Dåligt batteri", "Bluetooth-störningar", "Mjukvarubuggar"], r: "Slitage i potentiometern", cat: "FELSÖKNING" },
    { q: "Vilken konsol var känd för att repa skivor om man vände den från liggande till stående medan den kördes?", a: ["Xbox 360", "Wii", "PlayStation 2", "Dreamcast"], r: "Xbox 360", cat: "FELSÖKNING" },
    { q: "Vad händer med en Nintendo DS om gångjärnet går sönder?", a: ["Den övre skärmen kan tappa bild", "Batteriet slutar ladda", "Ljudet försvinner", "Spelen slutar fungera"], r: "Den övre skärmen kan tappa bild", cat: "FELSÖKNING" },
    { q: "Vilken komponent i en modern konsol behöver oftast bytas ut på grund av uttorkning för att förhindra överhettning?", a: ["Kylpasta / Flytande metall", "Batteriet", "HDMI-porten", "Wifi-antennen"], r: "Kylpasta / Flytande metall", cat: "FELSÖKNING" },
    { q: "Vad är 'BLOD' i sammanhanget PlayStation 4?", a: ["Blue Light of Death", "Battery Low On Device", "Basic Logic Output Delay", "Binary Loss Of Data"], r: "Blue Light of Death", cat: "FELSÖKNING" },
    { q: "Vad kallas det när en konsol inte längre kan startas alls efter en misslyckad uppdatering?", a: ["Bricked", "Crashed", "Frozen", "Locked"], r: "Bricked", cat: "FELSÖKNING" },
    { q: "Vilket ljud är ett tecken på att en mekanisk hårddisk i en PS4 håller på att gå sönder?", a: ["Klickande ljud", "Högfrekvent pip", "Ett surrande ljud", "Det är helt tyst"], r: "Klickande ljud", cat: "FELSÖKNING" },
    { q: "Vad var problemet med PSP-skärmar (originalet) vid snabba rörelser?", a: ["Ghosting (eftersläpning)", "De blev svarta", "De sprack lätt", "Färgerna blev inverterade"], r: "Ghosting (eftersläpning)", cat: "FELSÖKNING" },
    { q: "Vad indikerar en blinkande vit lampa på en PS5?", a: ["Systemet försöker starta", "Överhettning", "Handkontrollen laddar", "Nätverksfel"], r: "Systemet försöker starta", cat: "FELSÖKNING" },
    { q: "Varför kan en Nintendo Switch plötsligt sluta ta laddning via USB-C?", a: ["Skadade stift i porten", "För mycket sparfiler", "Skärmen är för ljus", "Spelkassetten sitter snett"], r: "Skadade stift i porten", cat: "FELSÖKNING" },
    { q: "Vad händer om en CMOS-batteri dör i en gammal konsol?", a: ["Klockan och inställningar nollställs", "Konsolen exploderar", "Spelen går långsammare", "Handkontrollen kopplas ifrån"], r: "Klockan och inställningar nollställs", cat: "FELSÖKNING" },
    { q: "Vilken konsol hade problem med 'ZIF-connectorn' för kassetterna?", a: ["NES (Nintendo)", "Sega Saturn", "Atari 2600", "Neo Geo"], r: "NES (Nintendo)", cat: "FELSÖKNING" },
    { q: "Vad är den vanligaste orsaken till att en HDMI-port på en konsol går sönder?", a: ["Fysiskt våld / Ryck i kabeln", "Damm", "Mjukvaruuppdateringar", "För hög upplösning"], r: "Fysiskt våld / Ryck i kabeln", cat: "FELSÖKNING" },

    // --- PC-FELSÖKNING: HÅRDVARA & MJUKVARA (40 frågor) ---
    { q: "Vad kallas det blåa felmeddelandet i Windows som täcker hela skärmen?", a: ["Blue Screen of Death (BSOD)", "Blue Error Page", "Windows Crash View", "System Failure Screen"], r: "Blue Screen of Death (BSOD)", cat: "FELSÖKNING" },
    { q: "Vilken tangent trycker man oftast upprepade gånger på vid start för att komma in i BIOS/UEFI?", a: ["DEL eller F2", "F12", "Enter", "Shift"], r: "DEL eller F2", cat: "FELSÖKNING" },
    { q: "Om datorn piper flera gånger vid start och inte visar bild, vad är det som kommunicerar felkoden?", a: ["BIOS/UEFI via moderkortets högtalare", "Windows", "Hårddisken", "Grafikkortet"], r: "BIOS/UEFI via moderkortets högtalare", cat: "FELSÖKNING" },
    { q: "Vad är det första du bör kontrollera om datorn inte startar alls?", a: ["Att strömkabeln sitter i", "Om Windows är uppdaterat", "Om musen fungerar", "Hur mycket RAM du har"], r: "Att strömkabeln sitter i", cat: "FELSÖKNING" },
    { q: "Vad innebär 'Throttling' när det gäller en processor?", a: ["Prestandan sänks för att skydda mot värme", "Processorn stängs av helt", "Fläktarna stannar", "Internet blir långsammare"], r: "Prestandan sänks för att skydda mot värme", cat: "FELSÖKNING" },
    { q: "Vilket program i Windows används för att tvinga avslutning av program som låst sig?", a: ["Aktivitetshanteraren (Task Manager)", "Kontrollpanelen", "Anteckningar", "Utforskaren"], r: "Aktivitetshanteraren (Task Manager)", cat: "FELSÖKNING" },
    { q: "Vad är ett typiskt tecken på att ditt RAM-minne är trasigt?", a: ["Slumpmässiga omstarter och blåskärmar", "Musen laggar", "Skärmen blir svart var 10:e minut", "Tangentbordet slutar skriva"], r: "Slumpmässiga omstarter och blåskärmar", cat: "FELSÖKNING" },
    { q: "Om skärmen visar konstiga färger eller fyrkanter (artefakter), vilken del är troligen trasig?", a: ["Grafikkortet", "Processorn", "Nätaggregatet", "Ljudkortet"], r: "Grafikkortet", cat: "FELSÖKNING" },
    { q: "Vad gör kommandot 'ipconfig /release' och '/renew'?", a: ["Startar om nätverksanslutningen/IP", "Rensar webbhistorik", "Ökar ladda-ner hastighet", "Stänger av brandväggen"], r: "Startar om nätverksanslutningen/IP", cat: "FELSÖKNING" },
    { q: "Vad är 'Safe Mode' (Felsäkert läge) i Windows?", a: ["Startar Windows med minimalt antal drivrutiner", "Ett läge där virus inte kan köras", "Ett läge för barn", "Ett läge som sparar ström"], r: "Startar Windows med minimalt antal drivrutiner", cat: "FELSÖKNING" },
    { q: "Vilken komponent i datorn kan orsaka att den plötsligt dör vid tung belastning (t.ex. gaming)?", a: ["Nätaggregatet (PSU)", "Musen", "Hörlurarna", "Webbkameran"], r: "Nätaggregatet (PSU)", cat: "FELSÖKNING" },
    { q: "Vad betyder felkoden '404' på en hemsida?", a: ["Sidan kunde inte hittas", "Servern är nere", "Du har inget internet", "Åtkomst nekad"], r: "Sidan kunde inte hittas", cat: "FELSÖKNING" },
    { q: "Vad gör man om man får meddelandet 'CPU Fan Error' vid start?", a: ["Kontrollerar att CPU-fläkten snurrar", "Byter ut skärmen", "Installerar om Windows", "Köper mer RAM"], r: "Kontrollerar att CPU-fläkten snurrar", cat: "FELSÖKNING" },
    { q: "Vad är syftet med att 'flasha' BIOS?", a: ["Uppdatera moderkortets mjukvara", "Rensa hårddisken", "Göra skärmen ljusare", "Snabbformatera USB-minnen"], r: "Uppdatera moderkortets mjukvara", cat: "FELSÖKNING" },
    { q: "Vad kallas det när en LCD-skärm har en punkt som alltid lyser i en färg?", a: ["Fastnat pixel (Stuck pixel)", "Död pixel", "Hål i skärmen", "Bränd skärm"], r: "Fastnat pixel (Stuck pixel)", cat: "FELSÖKNING" },
    { q: "Om datorn startar men fastnar på 'No Boot Device Found', vad är problemet?", a: ["Datorn hittar inte hårddisken", "Tangentbordet saknas", "Skärmen är avstängd", "Det finns inget internet"], r: "Datorn hittar inte hårddisken", cat: "FELSÖKNING" },
    { q: "Vilket verktyg i Windows används för att kontrollera hårddiskens hälsa?", a: ["CHKDSK", "DXDIAG", "MSCONFIG", "REGEDIT"], r: "CHKDSK", cat: "FELSÖKNING" },
    { q: "Vad innebär det att 'defragmentera' en mekanisk hårddisk?", a: ["Organisera filer för snabbare åtkomst", "Radera allt innehåll", "Laga fysiska repor", "Byta namn på filer"], r: "Organisera filer för snabbare åtkomst", cat: "FELSÖKNING" },
    { q: "Varför ska man inte defragmentera en SSD?", a: ["Det sliter på minnescellerna i onödan", "Det gör den långsammare", "Den kan explodera", "Det finns inget utrymme"], r: "Det sliter på minnescellerna i onödan", cat: "FELSÖKNING" },
    { q: "Vad kallas det när en bild 'bränner fast' på en gammal skärm eller OLED?", a: ["Inbränning (Burn-in)", "Ghosting", "Shadowing", "Pixel-lock"], r: "Inbränning (Burn-in)", cat: "FELSÖKNING" },
    { q: "Vilket kommando i terminalen används för att se vägen ett paket tar över nätverket?", a: ["tracert", "ping", "netstat", "get-route"], r: "tracert", cat: "FELSÖKNING" },
    { q: "Vad är 'coil whine'?", a: ["Ett högfrekvent ljud från elektriska komponenter", "En fläkt som tar i chassit", "Ett virusljud", "När Windows startar långsamt"], r: "Ett högfrekvent ljud från elektriska komponenter", cat: "FELSÖKNING" },
    { q: "Vad är den vanligaste orsaken till att en bärbar dator blir extremt varm och seg?", a: ["Damm i kylningen", "För många bilder på skrivbordet", "Batteriet är fullt", "Laddaren sitter i"], r: "Damm i kylningen", cat: "FELSÖKNING" },
    { q: "Vad gör man om man får ett 'CMOS Checksum Error'?", a: ["Byter batteriet på moderkortet", "Installerar om Windows", "Byter ut musen", "Vänder på nätverkskabeln"], r: "Byter batteriet på moderkortet", cat: "FELSÖKNING" },
    { q: "Vilket verktyg visar detaljerad information om DirectX och grafikdrivrutiner i Windows?", a: ["dxdiag", "msinfo32", "cmd", "taskmgr"], r: "dxdiag", cat: "FELSÖKNING" },
    { q: "Vad betyder 'POST' i datorsammanhang?", a: ["Power On Self Test", "Primary Output System Tool", "Peripheral Online Storage Test", "Process Optimization System"], r: "Power On Self Test", cat: "FELSÖKNING" },
    { q: "Om du bygger en dator och den startar i 1 sekund och sen dör, vad är vanligaste felet?", a: ["Kortslutning eller glömd CPU-ström", "Hårddisken saknas", "Musen är trasig", "Fel färg på chassit"], r: "Kortslutning eller glömd CPU-ström", cat: "FELSÖKNING" },
    { q: "Vad kallas programvaran som ligger mellan hårdvaran och operativsystemet (t.ex. BIOS)?", a: ["Firmware", "Middleware", "Adware", "Spyware"], r: "Firmware", cat: "FELSÖKNING" },
    { q: "Varför fungerar inte 'Plug and Play' ibland?", a: ["Drivrutiner saknas", "USB-porten är trött", "Internet är för långsamt", "Skärmen är för liten"], r: "Drivrutiner saknas", cat: "FELSÖKNING" },
    { q: "Vad är tecknet på att ett nätaggregat håller på att dö?", a: ["Datorn startar slumpmässigt om eller dör", "Ikonerna flyttar på sig", "Ljudet försvinner", "Internet dör"], r: "Datorn startar slumpmässigt om eller dör", cat: "FELSÖKNING" },
    { q: "Vad är fördelen med att använda 'DDU' (Display Driver Uninstaller)?", a: ["Rensar bort gamla grafikdrivrutiner helt", "Gör grafikkortet snabbare", "Laddar ner nya spel", "Laggar mindre i CS"], r: "Rensar bort gamla grafikdrivrutiner helt", cat: "FELSÖKNING" },
    { q: "Vad kan orsaka 'Input Lag' på en TV när man spelar konsol?", a: ["Bildförbättringslägen är påslagna", "Kabeln är för kort", "TV:n har för mycket damm", "Handkontrollen är smutsig"], r: "Bildförbättringslägen är påslagna", cat: "FELSÖKNING" },
    { q: "Vad innebär 'Bottleneck' (Flaskhals)?", a: ["En komponent begränsar de andras prestanda", "När datorn dricker för mycket ström", "När fläkten sitter löst", "När chassit är för trångt"], r: "En komponent begränsar de andras prestanda", cat: "FELSÖKNING" },
    { q: "Vilket filnamn har Windows-registret?", a: ["regedit.exe", "explorer.exe", "cmd.exe", "taskmgr.exe"], r: "regedit.exe", cat: "FELSÖKNING" },
    { q: "Vad gör man om en USB-enhet 'inte känns igen'?", a: ["Testar en annan port / uppdaterar drivrutin", "Slänger enheten", "Startar om skärmen", "Byter nätverkskabel"], r: "Testar en annan port / uppdaterar drivrutin", cat: "FELSÖKNING" },
    { q: "Vad indikerar att ett laptop-batteri är 'svullet'?", a: ["Chassit buktar ut eller trackpaden lyfter", "Datorn blir lättare", "Skärmen blir ljusare", "Tangenterna lyser starkare"], r: "Chassit buktar ut eller trackpaden lyfter", cat: "FELSÖKNING" },
    { q: "Varför ska man undvika att använda dammsugare inuti en dator?", a: ["Statisk elektricitet kan döda komponenter", "Den suger upp skruvarna", "Den låter för mycket", "Den gör datorn för ren"], r: "Statisk elektricitet kan döda komponenter", cat: "FELSÖKNING" },
    { q: "Vad kallas den lilla jumpern man använder för att nollställa BIOS?", a: ["Clear CMOS", "Reset Bios", "Start Jumper", "Mode Switch"], r: "Clear CMOS", cat: "FELSÖKNING" },
    { q: "Vilket program är bäst för att se realtids-temperaturer på CPU och GPU?", a: ["HWMonitor / MSI Afterburner", "Paint", "Excel", "Chrome"], r: "HWMonitor / MSI Afterburner", cat: "FELSÖKNING" },
    { q: "Vad gör man om Windows fryser helt och ingenting reagerar?", a: ["Håller in strömknappen i 5-10 sekunder", "Väntar i 2 timmar", "Ropar på hjälp", "Drar ut skärmkabeln"], r: "Håller in strömknappen i 5-10 sekunder", cat: "FELSÖKNING" },
// --- ORIGINAL XBOX & KLOCKKONDENSATORN (10 frågor) ---
    { q: "Vilken komponent i original-Xboxen (v1.0-v1.5) är ökänd för att läcka syra och fräta sönder moderkortet?", a: ["Klockkondensatorn", "Nätaggregatet", "DVD-läsaren", "Fläktkontrollern"], r: "Klockkondensatorn", cat: "FELSÖKNING" },
    { q: "Vad är huvuduppgiften för den problematiska kondensatorn i en original-Xbox?", a: ["Hålla klockan igång vid strömavbrott", "Ge extra kraft till grafikchippet", "Filtrera ljudsignalen", "Ladda handkontrollerna"], r: "Hålla klockan igång vid strömavbrott", cat: "RETRO-TECH" },
    { q: "Vad är den rekommenderade åtgärden för en original-Xbox v1.0-v1.5 för att rädda den från läckage?", a: ["Löda bort kondensatorn helt", "Smörja in den i olja", "Frysa ner moderkortet", "Byta ut hårddisken"], r: "Löda bort kondensatorn helt", cat: "FELSÖKNING" },
    { q: "Vilken version av original-Xboxen rättade till problemet genom att använda en mer stabil kondensator?", a: ["v1.6", "v1.0", "v1.2", "v1.4"], r: "v1.6", cat: "RETRO-TECH" },
    { q: "Vad händer om klockkondensatorn läcker ut sin elektrolyt?", a: ["Kopparledningar på moderkortet fräts av", "Hårddisken raderas", "Konsolen börjar ryka", "Handkontrollsportarna slutar fungera"], r: "Kopparledningar på moderkortet fräts av", cat: "FELSÖKNING" },
    { q: "Hur länge kan en frisk kondensator i en Xbox hålla klockan vid liv utan ström?", a: ["Några timmar", "Flera månader", "Ett år", "För evigt"], r: "Några timmar", cat: "RETRO-TECH" },
    { q: "Vilket märke tillverkade de flesta av de läckande kondensatorerna i Xbox?", a: ["Aerovox / Nichicon", "Sony", "Samsung", "Panasonic"], r: "Aerovox / Nichicon", cat: "RETRO-TECH" },
    { q: "Vilket operativsystem baserades original-Xboxens gränssnitt (Dashboard) på?", a: ["En modifierad version av Windows 2000", "Windows 95", "MS-DOS", "Linux"], r: "En modifierad version av Windows 2000", cat: "RETRO-TECH" },
    { q: "Vad kallas den speciella skruvmejseln som behövs för att öppna en original-Xbox?", a: ["Torx (T10, T15, T20)", "Stjärna (PH2)", "Insex", "Tri-Wing"], r: "Torx (T10, T15, T20)", cat: "FELSÖKNING" },
    { q: "Varför 'måste' man ha klockkondensatorn kvar i en Xbox v1.6 trots att den sällan läcker?", a: ["Konsolen vägrar starta utan den", "Bilden blir svartvit", "Fläkten går på max", "Ljudet försvinner"], r: "Konsolen vägrar starta utan den", cat: "FELSÖKNING" },

    // --- TJOCK-TV & CRT-TEKNIK (10 frågor) ---
    { q: "Varför har en CRT-skärm (Tjock-TV) i princip noll input lag jämfört med en modern LCD?", a: ["Signalen ritas analogt direkt av en elektronstråle", "Den har snabbare internet", "Den har färre färger", "Den använder mer ström"], r: "Signalen ritas analogt direkt av en elektronstråle", cat: "RETRO-TECH" },
    { q: "Vad står förkortningen CRT för?", a: ["Cathode Ray Tube", "Central Ray Terminal", "Color Real Tube", "Circuit Relay Terminal"], r: "Cathode Ray Tube", cat: "RETRO-TECH" },
    { q: "Vad kallas den process där man tar bort oönskad magnetism från en CRT-skärm (ofta med ett 'DONG'-ljud)?", a: ["Degauss", "Defrost", "Decouple", "Defrag"], r: "Degauss", cat: "RETRO-TECH" },
    { q: "Vilken uppdateringsfrekvens (Hz) var standard för en PAL-TV i Sverige förr?", a: ["50 Hz", "60 Hz", "100 Hz", "144 Hz"], r: "50 Hz", cat: "RETRO-TECH" },
    { q: "Vilken typ av kontakt användas oftast i Europa för att få bäst analog bild på en CRT?", a: ["SCART (RGB)", "Antennkabel", "Komposit (Gul kontakt)", "S-Video"], r: "SCART (RGB)", cat: "RETRO-TECH" },
    { q: "Varför upplevs 30 FPS som 'mjukare' på en CRT än på en modern LCD?", a: ["Naturlig rörelseoskärpa (phosphor decay)", "Skärmen är mindre", "Glaskonstruktionen", "Högre kontrast"], r: "Naturlig rörelseoskärpa (phosphor decay)", cat: "RETRO-TECH" },
    { q: "Vad händer om man håller en stark magnet nära en CRT-skärm som är igång?", a: ["Färgerna förvrängs (permanent skada kan ske)", "Skärmen stängs av", "Bilden blir skarpare", "Inget händer"], r: "Färgerna förvrängs (permanent skada kan ske)", cat: "FELSÖKNING" },
    { q: "Vad kallas de tunna svarta linjerna mellan raderna på en CRT som ger den dess karaktäristiska utseende?", a: ["Scanlines", "Interlace lines", "Grid dots", "Dead zones"], r: "Scanlines", cat: "RETRO-TECH" },
    { q: "Varför är det livsfarligt att öppna en CRT-TV även om sladden är utdragen?", a: ["Anoden kan lagra tiotusentals volt", "Glaset kan explodera spontant", "Den innehåller giftig gas", "Den är för tung"], r: "Anoden kan lagra tiotusentals volt", cat: "FELSÖKNING" },
    { q: "Vilken teknik i CRT-skärmar gör att ljuspistoler som 'NES Zapper' fungerar?", a: ["Elektronstrålens exakta tajming", "Infrarött ljus", "Bluetooth", "Skärmens magnetism"], r: "Elektronstrålens exakta tajming", cat: "RETRO-TECH" },

    // --- KONSOL- & DATORFRÅGOR (40 frågor) ---
    { q: "Vilken konsol var den första att ha en inbyggd hårddisk?", a: ["Original Xbox", "PlayStation 2", "GameCube", "Dreamcast"], r: "Original Xbox", cat: "RETRO-TECH" },
    { q: "Vad kallas den mjukvarubaserade lösningen för att köra gamla spel på en modern dator?", a: ["Emulator", "Simulator", "Virtualizer", "Translator"], r: "Emulator", cat: "GAMING" },
    { q: "Vilken filändelse har oftast en sparad kopia av ett kassetspel (ROM)?", a: [".nes / .sfc / .bin", ".exe", ".txt", ".mp3"], r: ".nes / .sfc / .bin", cat: "TECH" },
    { q: "Vilken Nintendo-konsol använde små 8cm stora DVD-skivor?", a: ["GameCube", "Wii", "Wii U", "Nintendo 64"], r: "GameCube", cat: "RETRO-TECH" },
    { q: "Vad står förkortningen 'FPS' för när man pratar om skärmuppdatering?", a: ["Frames Per Second", "First Person Shooter", "Fast Processing Speed", "Final Picture State"], r: "Frames Per Second", cat: "TECH" },
    { q: "Vilket företag tillverkade processorn 'Cell' som satt i PlayStation 3?", a: ["Sony, Toshiba & IBM", "Intel", "AMD", "Nvidia"], r: "Sony, Toshiba & IBM", cat: "TECH" },
    { q: "Vilken konsol hade handkontroller med inbyggda skärmar kallade 'VMU'?", a: ["Sega Dreamcast", "Saturn", "PlayStation 1", "Nintendo 64"], r: "Sega Dreamcast", cat: "RETRO-TECH" },
    { q: "Vad kallas det när man modifierar en konsol för att kunna köra hemkodade program?", a: ["Homebrew", "Jailbreak", "Rooting", "Cracking"], r: "Homebrew", cat: "TECH" },
    { q: "Vilken bärbar konsol hade en skärm som kunde visa 3D utan glasögon?", a: ["Nintendo 3DS", "PlayStation Vita", "Game Boy Advance", "Game Gear"], r: "Nintendo 3DS", cat: "NINTENDO" },
    { q: "Vad står 'RGB' för i bildsammanhang?", a: ["Red Green Blue", "Real Global Brightness", "Retro Game Binary", "Ray Generation Buffer"], r: "Red Green Blue", cat: "TECH" },
    { q: "Vilket år släpptes Windows 95?", a: ["1995", "1994", "1996", "1990"], r: "1995", cat: "HISTORIA" },
    { q: "Vilken webbläsare var den mest dominanta på 90-talet innan Internet Explorer tog över?", a: ["Netscape Navigator", "Opera", "Mosaic", "Firefox"], r: "Netscape Navigator", cat: "INTERNET" },
    { q: "Vad kallas den process där en dator letar efter fel på hårddisken vid uppstart?", a: ["Chkdsk", "Scandisk", "Defrag", "Bios-check"], r: "Chkdsk", cat: "FELSÖKNING" },
    { q: "Vilken port på datorn användes oftast för joysticks innan USB fanns?", a: ["Game Port (MIDI)", "Serial Port", "Parallel Port", "VGA"], r: "Game Port (MIDI)", cat: "RETRO-TECH" },
    { q: "Vad står 'DPI' för på en gamingmus?", a: ["Dots Per Inch", "Data Per Input", "Digital Point Index", "Distance Per Interval"], r: "Dots Per Inch", cat: "TECH" },
    { q: "Vilken tillverkare ligger bakom grafikkortsserien 'Radeon'?", a: ["AMD", "Nvidia", "Intel", "Matrox"], r: "AMD", cat: "TECH" },
    { q: "Vad innebär 'V-Sync'?", a: ["Synkar FPS med skärmens uppdateringsfrekvens", "Gör färgerna starkare", "Ökar upplösningen", "Stänger av ljudet"], r: "Synkar FPS med skärmens uppdateringsfrekvens", cat: "TECH" },
    { q: "Vilket kommando i CMD visar din dators nätverksinställningar?", a: ["ipconfig", "netstat", "ping", "tracert"], r: "ipconfig", cat: "TECH" },
    { q: "Vad är 'Thermal Throttling'?", a: ["Datorn sänker farten för att inte smälta", "Fläkten går sönder", "Datorn fryser fast", "Batteriet laddas ur"], r: "Datorn sänker farten för att inte smälta", cat: "FELSÖKNING" },
    { q: "Vilken legendarisk processor från Intel lanserades 1993?", a: ["Pentium", "Core 2 Duo", "Celeron", "i7"], r: "Pentium", cat: "RETRO-TECH" },
    { q: "Vad står 'SSD' för?", a: ["Solid State Drive", "Super Speed Disk", "Static System Device", "Storage Serial Drive"], r: "Solid State Drive", cat: "TECH" },
    { q: "Vilken sladd används oftast för att ladda en modern PlayStation 5-kontroll?", a: ["USB-C", "Micro-USB", "Mini-USB", "Lightning"], r: "USB-C", cat: "TECH" },
    { q: "Vad är fördelen med en mekanisk brytare i ett tangentbord?", a: ["Hållbarhet och taktil känsla", "Det är tystare", "Det väger mindre", "Det kräver ingen ström"], r: "Hållbarhet och taktil känsla", cat: "TECH" },
    { q: "Vilket operativsystem är Android baserat på?", a: ["Linux", "Windows", "Unix", "DOS"], r: "Linux", cat: "TECH" },
    { q: "Vad kallas det när man byter ut en komponents mjukvara för att låsa upp funktioner?", a: ["Firmware flash", "Overclocking", "Undervolting", "Softmod"], r: "Firmware flash", cat: "TECH" },
    { q: "Vilken kabel skickar analog bild via tre kontakter: Röd, Grön och Blå?", a: ["Komponent (YPbPr)", "Komposit", "S-Video", "VGA"], r: "Komponent (YPbPr)", cat: "RETRO-TECH" },
    { q: "Vad innebär 'Dead on Arrival' (DOA)?", a: ["Produkten är trasig redan vid leverans", "Datorn dog efter 1 timme", "Batteriet är urladdat", "Paketet kom aldrig fram"], r: "Produkten är trasig redan vid leverans", cat: "FELSÖKNING" },
    { q: "Vilken speltillverkare skapade Unreal Engine?", a: ["Epic Games", "Valve", "id Software", "Ubisoft"], r: "Epic Games", cat: "GAMING" },
    { q: "Vad kallas en pixel som fastnat och bara visar vitt?", a: ["Hot pixel", "Dead pixel", "Stuck pixel", "Bright pixel"], r: "Hot pixel", cat: "FELSÖKNING" },
    { q: "Vilken nätverkshastighet motsvarar 'Gigabit'?", a: ["1000 Mbps", "100 Mbps", "10 Gbps", "10 Mbps"], r: "1000 Mbps", cat: "TECH" },
    { q: "Vad är syftet med en 'proxy'?", a: ["Fungera som ett filter mellan dig och internet", "Göra sprit av datorer", "Snabba upp processorn", "Ladda ner mer RAM"], r: "Fungera som ett filter mellan dig och internet", cat: "INTERNET" },
    { q: "Vilken färg har oftast en USB 3.0-port invändigt?", a: ["Blå", "Svart", "Vit", "Röd"], r: "Blå", cat: "TECH" },
    { q: "Vad kallas en dator som är byggd för att enbart sköta nätverkslagring?", a: ["NAS", "Server", "Mainframe", "Router"], r: "NAS", cat: "TECH" },
    { q: "Vad innebär det att en processor har 'Multiple Cores'?", a: ["Den kan göra flera saker samtidigt", "Den har mer minne", "Den drar mindre ström", "Den blir aldrig varm"], r: "Den kan göra flera saker samtidigt", cat: "TECH" },
    { q: "Vilket program används för att 'mounta' diskavbilder (ISO-filer) som virtuella skivor?", a: ["Daemon Tools / Rufus", "WinRAR", "VLC", "Paint"], r: "Daemon Tools / Rufus", cat: "TECH" },
    { q: "Vad står 'BIOS' för?", a: ["Basic Input Output System", "Binary Input Operating System", "Base Integrated Operating Software", "Basic Internal Output State"], r: "Basic Input Output System", cat: "TECH" },
    { q: "Vilken typ av port används för att ansluta externa grafikkort (eGPU)?", a: ["Thunderbolt", "USB 2.0", "HDMI", "SATA"], r: "Thunderbolt", cat: "TECH" },
    { q: "Vilken spelserie är känd för att ha 'Master Chief' som huvudkaraktär?", a: ["Halo", "Doom", "Gears of War", "Mass Effect"], r: "Halo", cat: "GAMING" },
    { q: "Vad gör man om man vill nollställa sitt Windows-lösenord utan att formatera (om man är proffs)?", a: ["Använder en 'bootable' Linux/PE-sticka", "Ropar på Microsoft", "Byter tangentbord", "Väntar i 24 timmar"], r: "Använder en 'bootable' Linux/PE-sticka", cat: "FELSÖKNING" },
    { q: "Vad kallas den lilla högtalaren på moderkortet som piper vid fel?", a: ["Beeper / Piezo speaker", "Subwoofer", "Tweeter", "Main speaker"], r: "Beeper / Piezo speaker", cat: "TECH" },

// --- NES ZAPPER & DUCK HUNT (5 frågor) ---
    { q: "Varför fungerar 'Duck Hunt' med NES Zapper endast på en CRT (Tjock-TV)?", a: ["Ljuspistolen förlitar sig på elektronstrålens exakta tajming", "LCD-skärmar är för ljusa", "Moderna TV-apparater saknar antenningång", "Zappern kräver magnetismen från en CRT"], r: "Ljuspistolen förlitar sig på elektronstrålens exakta tajming", cat: "RETRO-TECH" },
    { q: "Vad händer på skärmen i en bråkdel av en sekund när du trycker på avtryckaren i Duck Hunt?", a: ["Skärmen blir svart med vita rektanglar där målen är", "Skärmen blinkar i alla regnbågens färger", "Bilden fryser helt", "Ingenting synbart för blotta ögat"], r: "Skärmen blir svart med vita rektanglar där målen är", cat: "RETRO-TECH" },
    { q: "Hur vet NES-konsolen om du träffade ankan?", a: ["Fotodioden i pistolen känner av ljus från den vita rutan", "Pistolen skjuter en laserstråle mot TV:n", "TV:n skickar en signal tillbaka till konsolen", "Det är baserat på rent slumpmässig tur"], r: "Fotodioden i pistolen känner av ljus från den vita rutan", cat: "RETRO-TECH" },
    { q: "Vilket problem på moderna TV-apparater gör att ljuspistoler missar även om färgerna vore rätt?", a: ["Input lag (bildfördröjning)", "För hög upplösning", "Skärmen är för platt", "Digital brusreducering"], r: "Input lag (bildfördröjning)", cat: "RETRO-TECH" },
    { q: "Vilken färg hade den ursprungliga NES Zappern i Japan och USA innan den blev orange?", a: ["Grå", "Svart", "Röd", "Vit"], r: "Grå", cat: "RETRO-TECH" },

    // --- EL-LÄRA: SPÄNNING, STRÖM, EFFEKT (20 frågor) ---
    { q: "Vad mäts elektrisk spänning i?", a: ["Volt (V)", "Ampere (A)", "Watt (W)", "Ohm (Ω)"], r: "Volt (V)", cat: "EL-LÄRA" },
    { q: "Vad kallas flödet av elektroner i en ledning?", a: ["Ström", "Spänning", "Resistans", "Effekt"], r: "Ström", cat: "EL-LÄRA" },
    { q: "Vilken enhet används för att mäta elektrisk ström?", a: ["Ampere (A)", "Volt (V)", "Watt (W)", "Ohm (Ω)"], r: "Ampere (A)", cat: "EL-LÄRA" },
    { q: "Vad mäts elektrisk effekt i (energi per tidsenhet)?", a: ["Watt (W)", "Joule (J)", "Volt (V)", "Ampere (A)"], r: "Watt (W)", cat: "EL-LÄRA" },
    { q: "Vad står enheten Ohm (Ω) för?", a: ["Resistans (motstånd)", "Kapacitans", "Induktans", "Spänning"], r: "Resistans (motstånd)", cat: "EL-LÄRA" },
    { q: "Vilken formel beskriver Ohms lag?", a: ["U = I * R", "P = U * I", "E = m * c²", "U = P / R"], r: "U = I * R", cat: "EL-LÄRA" },
    { q: "Om du har en spänning på 230V och en ström på 10A, vad är effekten?", a: ["2300 W", "230 W", "23 W", "240 W"], r: "2300 W", cat: "EL-LÄRA" },
    { q: "Vad händer med strömmen om motståndet ökar men spänningen är densamma?", a: ["Strömmen minskar", "Strömmen ökar", "Strömmen är oförändrad", "Spänningen ökar också"], r: "Strömmen minskar", cat: "EL-LÄRA" },
    { q: "Vilken färg har oftast den skyddsjordade ledaren i en svensk elkabel?", a: ["Grön/Gul", "Blå", "Brun", "Svart"], r: "Grön/Gul", cat: "EL-LÄRA" },
    { q: "Vad kallas en komponent som begränsar strömmen i en krets?", a: ["Resistor", "Kondensator", "Transistor", "Diod"], r: "Resistor", cat: "EL-LÄRA" },
    { q: "Vad är skillnaden mellan likström (DC) och växelström (AC)?", a: ["DC flyter i en riktning, AC byter riktning", "AC är farligare än DC", "DC finns bara i batterier", "Det är ingen skillnad"], r: "DC flyter i en riktning, AC byter riktning", cat: "EL-LÄRA" },
    { q: "Vilken spänning har vi i de vanliga vägguttagen i Sverige?", a: ["230 V", "110 V", "400 V", "12 V"], r: "230 V", cat: "EL-LÄRA" },
    { q: "Vad kallas en komponent som kan lagra elektrisk laddning?", a: ["Kondensator", "Resistor", "Transformator", "Säkring"], r: "Kondensator", cat: "EL-LÄRA" },
    { q: "Vad är syftet med en säkring?", a: ["Bryta strömmen vid överbelastning", "Öka spänningen", "Spara ström", "Göra elen renare"], r: "Bryta strömmen vid överbelastning", cat: "EL-LÄRA" },
    { q: "Vilken metall är den vanligaste ledaren i elkablar på grund av sin goda ledningsförmåga?", a: ["Koppar", "Järn", "Aluminium", "Bly"], r: "Koppar", cat: "EL-LÄRA" },
    { q: "Vad kallas ett material som inte leder ström alls?", a: ["Isolator", "Halvledare", "Superledare", "Generator"], r: "Isolator", cat: "EL-LÄRA" },
    { q: "Vad står förkortningen 'kWh' för?", a: ["Kilowattimme", "Kilowatthalt", "Kilo-watt-hertz", "Kinetisk watt-hjälp"], r: "Kilowattimme", cat: "EL-LÄRA" },
    { q: "Vilken formel används för att räkna ut effekt (P)?", a: ["P = U * I", "P = R * I", "P = U / R", "P = I / U"], r: "P = U * I", cat: "EL-LÄRA" },
    { q: "Vad är en 'kortslutning'?", a: ["När strömmen tar en oplanerad väg med minimalt motstånd", "När sladden är för kort", "När batteriet tar slut", "När lampan slocknar"], r: "När strömmen tar en oplanerad väg med minimalt motstånd", cat: "EL-LÄRA" },
    { q: "Vad gör en transformator?", a: ["Ändrar spänningen (höjer eller sänker)", "Gör om DC till AC", "Lagrar ström för natten", "Mäter förbrukningen"], r: "Ändrar spänningen (höjer eller sänker)", cat: "EL-LÄRA" },

    // --- KONSOL- & DATORFRÅGOR (25 frågor) ---
    { q: "Vilken konsol hade den högsta lanseringspriset i historien (justerat för inflation)?", a: ["Neo Geo", "PlayStation 3", "Panasonic 3DO", "Sega Saturn"], r: "Neo Geo", cat: "RETRO-TECH" },
    { q: "Vad kallas den speciella processorn i en PlayStation 2?", a: ["Emotion Engine", "Cell Broadband Engine", "Super FX", "Reality Engine"], r: "Emotion Engine", cat: "RETRO-TECH" },
    { q: "Vilket filsystem introducerade Windows 95 (OSR2) för att stödja större hårddiskar?", a: ["FAT32", "NTFS", "exFAT", "APFS"], r: "FAT32", cat: "TECH" },
    { q: "Vilken bärbar konsol var först med färgskärm men sög ut 6st AA-batterier på 3 timmar?", a: ["Sega Game Gear", "Atari Lynx", "Game Boy Color", "TurboExpress"], r: "Atari Lynx", cat: "RETRO-TECH" },
    { q: "Vad kallas tekniken där två grafikkort arbetar tillsammans (Nvidias namn)?", a: ["SLI", "Crossfire", "Bridge", "Link"], r: "SLI", cat: "TECH" },
    { q: "Vilket år lanserades den första versionen av World of Warcraft?", a: ["2004", "2002", "2006", "1999"], r: "2004", cat: "GAMING" },
    { q: "Vilken upplösning har 'Full HD'?", a: ["1920 x 1080", "1280 x 720", "3840 x 2160", "1024 x 768"], r: "1920 x 1080", cat: "TECH" },
    { q: "Vad står 'SATA' för när man pratar om hårddiskar?", a: ["Serial Advanced Technology Attachment", "Simple Array Tool Access", "System Automated Tech Aid", "Storage And Tech Area"], r: "Serial Advanced Technology Attachment", cat: "TECH" },
    { q: "Vilken speltillverkare ligger bakom serier som Resident Evil och Mega Man?", a: ["Capcom", "Konami", "Square Enix", "Namco"], r: "Capcom", cat: "GAMING" },
    { q: "Vad kallas den första nivån i Super Mario Bros 1-1?", a: ["Mushroom Kingdom", "Level 1", "World 1-1", "Area 1"], r: "World 1-1", cat: "NINTENDO" },
    { q: "Vilken port på datorn användes för skrivare innan USB (lång lila kontakt)?", a: ["Parallellport (LPT)", "Serieport", "VGA", "FireWire"], r: "Parallellport (LPT)", cat: "RETRO-TECH" },
    { q: "Vad är syftet med en 'proxy'-server?", a: ["Slussa trafik och dölja IP", "Göra internet snabbare fysiskt", "Ladda batteriet", "Söka efter virus"], r: "Slussa trafik och dölja IP", cat: "TECH" },
    { q: "Vilket kommando i Linux/Terminalen används för att byta mapp?", a: ["cd", "ls", "mkdir", "rm"], r: "cd", cat: "TECH" },
    { q: "Vad innebär 'Ping of Death'?", a: ["En nätverksattack med för stora paket", "När man dör i ett spel pga lag", "En trasig nätverkskabel", "Ett ljud från en router"], r: "En nätverksattack med för stora paket", cat: "TECH" },
    { q: "Vilken färg har nollan i en vanlig växelströmskrets i Sverige?", a: ["Blå", "Brun", "Svart", "Grön"], r: "Blå", cat: "EL-LÄRA" },
    { q: "Vad mäts ljusstyrkan på en bildskärm oftast i?", a: ["Nits (cd/m²)", "Lux", "Lumen", "Watt"], r: "Nits (cd/m²)", cat: "TECH" },

// --- LANBIT-BERÄTTELSER ---
    { q: "Elias har med sig 3 st 24-pack energidryck till LANBIT. Han ger bort 12 burkar till sina vänner. Hur många burkar har han kvar?", a: ["60", "48", "72", "56"], r: "60", cat: "MATEMATIK" },
    { q: "Sara ska köpa en ny gamingmus för 800 kr. Hon har en rabattkod på 15%. Vad blir det slutgiltiga priset?", a: ["680 kr", "720 kr", "650 kr", "700 kr"], r: "680 kr", cat: "MATEMATIK" },
    { q: "En turnering på LANBIT har 64 deltagare. Det är ett 'single elimination'-träd (vinnaren går vidare, förloraren åker ut). Hur många matcher spelas totalt innan en vinnare är korad?", a: ["63", "64", "32", "127"], r: "63", cat: "LOGIK" },
    { q: "Liam laddar ner ett spel på 120 GB. Hans internethastighet tillåter honom att ladda ner 10 GB per timme. Hur många timmar tar det?", a: ["12", "10", "15", "20"], r: "12", cat: "MATEMATIK" },
    { q: "I en CS-match vinner tjejlaget 16-4. Hur många procent av ronderna vann det förlorande laget?", a: ["20%", "25%", "15%", "10%"], r: "20%", cat: "MATEMATIK" },
    { q: "Maja spenderar 400 kr i kiosken. En toast kostar 25 kr och en läsk 15 kr. Om hon köper 10 läsk, hur många toasts har hon råd med för resten av pengarna?", a: ["10", "8", "12", "6"], r: "10", cat: "MATEMATIK" },
    { q: "En fiberkabel på 500 meter ska delas upp i bitar om 25 meter styck. Hur många bitar blir det?", a: ["20", "25", "15", "10"], r: "20", cat: "MATEMATIK" },
    { q: "Om 4 personer kan bygga upp en rad med 20 datorplatser på 2 timmar, hur lång tid tar det för 8 personer att göra samma jobb?", a: ["1 timme", "4 timmar", "30 minuter", "2 timmar"], r: "1 timme", cat: "LOGIK" },
    { q: "Oscar streamar i 720p och använder 2 GB data per timme. Om han har en datapott på 50 GB, hur många hela timmar kan han streama?", a: ["25", "20", "50", "10"], r: "25", cat: "MATEMATIK" },
    { q: "Klockan är 22:15 och Hugo säger att han ska spela i exakt 500 minuter till. Vad är klockan när han slutar?", a: ["06:35", "05:15", "07:25", "04:45"], r: "06:35", cat: "LOGIK" },
// --- GLASSPAKET & PRISER ---
    { q: "Ett glasspaket med 10 st 'Piggelin' kostar 60 kr. Hur mycket kostar varje glass i paketet?", a: ["6 kr", "5 kr", "10 kr", "12 kr"], r: "6 kr", cat: "MATEMATIK" },
    { q: "Ett storpack glass kostar 120 kr och innehåller 15 glassar. Vad är styckpriset?", a: ["8 kr", "10 kr", "7 kr", "9 kr"], r: "8 kr", cat: "MATEMATIK" },
    { q: "Sofia köper ett paket med 8 glassbåtar för 88 kr. Hugo köper lösa glassbåtar för 15 kr styck. Hur mycket sparar Sofia per glass genom att köpa paketet?", a: ["4 kr", "2 kr", "7 kr", "5 kr"], r: "4 kr", cat: "MATEMATIK" },
    { q: "Ett 2-liters glasspaket kostar 40 kr. Hur mycket kostar glassen per deciliter?", a: ["2 kr", "4 kr", "20 kr", "0.5 kr"], r: "2 kr", cat: "MATEMATIK" },
    { q: "Ett glasspaket kostar 75 kr. Det är 'Köp 3 betala för 2'. Hur mycket kostar då tre paket totalt?", a: ["150 kr", "225 kr", "200 kr", "125 kr"], r: "150 kr", cat: "MATEMATIK" },
    { q: "Om ett paket med 12 glasspinnar väger 600 gram, hur mycket väger varje glasspinne?", a: ["50 g", "60 g", "40 g", "100 g"], r: "50 g", cat: "MATEMATIK" },
    { q: "Liam köper glass till sitt lag. Ett paket med 20 glassar kostar 180 kr. Hur mycket kostar 5 glassar?", a: ["45 kr", "40 kr", "50 kr", "36 kr"], r: "45 kr", cat: "MATEMATIK" },
    { q: "Ett glasspaket kostade 50 kr men sänks med 20%. Vad kostar det nu?", a: ["40 kr", "45 kr", "35 kr", "30 kr"], r: "40 kr", cat: "MATEMATIK" },
    { q: "Maja har 200 kr. Glasspaket kostar 35 kr styck. Hur många hela paket kan hon köpa?", a: ["5", "6", "4", "7"], r: "5", cat: "MATEMATIK" },
    { q: "Om 3 glasspaket rymmer totalt 4,5 liter glass, hur mycket rymmer ett paket?", a: ["1,5 liter", "1,2 liter", "2 liter", "1,8 liter"], r: "1,5 liter", cat: "MATEMATIK" },

    // --- LANBIT & MATTE ---
    { q: "Oliver köper 4 st pizzor för 110 kr styck och 2 st familjeläsk för 35 kr styck. Han betalar med en tusing. Hur mycket får han tillbaka?", a: ["490 kr", "510 kr", "450 kr", "550 kr"], r: "490 kr", cat: "MATEMATIK" },
    { q: "En skärm har upplösningen 1920x1080. Hur många pixlar finns det totalt på skärmen (ungefär)?", a: ["2,07 miljoner", "1,5 miljoner", "3,2 miljoner", "800 tusen"], r: "2,07 miljoner", cat: "TECH" },
    { q: "Leo spelar i 4 timmar. Han vinner 3 matcher per timme. Hur många matcher vinner han totalt?", a: ["12", "7", "10", "15"], r: "12", cat: "MATEMATIK" },
    { q: "Ett tangentbord har 105 tangenter. Om man tar bort alla siffertangenter (0-9) och de 12 funktionstangenterna (F1-F12), hur många är kvar?", a: ["83", "85", "81", "79"], r: "83", cat: "LOGIK" },
    { q: "Sara laddar ner en fil på 500 MB. Hastigheten är 5 MB per sekund. Hur många sekunder tar det?", a: ["100", "50", "200", "250"], r: "100", cat: "MATEMATIK" },
    { q: "En gamingstol kostar 2400 kr. Om man betalar 200 kr i månaden, hur många år tar det att betala av den?", a: ["1 år", "2 år", "1,5 år", "3 år"], r: "1 år", cat: "MATEMATIK" },
    { q: "I en turnering får man 3 poäng för vinst och 1 poäng för oavgjort. Team Alpha har 4 vinster och 2 oavgjorda. Hur många poäng har de?", a: ["14", "12", "16", "10"], r: "14", cat: "MATEMATIK" },
    { q: "En stream har 250 tittare. 20% av dem skriver i chatten. Hur många chattar?", a: ["50", "25", "75", "100"], r: "50", cat: "MATEMATIK" },
    { q: "Om en nätverkskabel kostar 12 kr per meter, vad kostar en kabel som är 15 meter lång?", a: ["180 kr", "150 kr", "200 kr", "165 kr"], r: "180 kr", cat: "MATEMATIK" },
    { q: "Mollie vinner 400 kr på ett lotteri. Hon sparar hälften och köper musmattor för resten. Om en musmatta kostar 50 kr, hur många får hon?", a: ["4", "8", "2", "5"], r: "4", cat: "MATEMATIK" },

    // --- BLANDAD LOGIK & RÄKNING ---
    { q: "Vad är summan av talen 1 till 10?", a: ["55", "50", "45", "60"], r: "55", cat: "MATEMATIK" },
    { q: "En klocka saktar sig 2 minuter varje timme. Om den ställs rätt kl 08:00, vad visar den kl 12:00?", a: ["11:52", "11:58", "11:54", "11:50"], r: "11:52", cat: "LOGIK" },
    { q: "Om du har 5 röda bollar och 5 blå bollar i en påse, hur många måste du dra för att vara säker på att ha två av samma färg?", a: ["3", "2", "6", "5"], r: "3", cat: "LOGIK" },
    { q: "Ett träd dubblar sin höjd varje år. Om det är 10 meter efter 10 år, när var det 5 meter?", a: ["År 9", "År 5", "År 8", "År 1"], r: "År 9", cat: "LOGIK" },
    { q: "Vad är 100 delat med 0,5?", a: ["200", "50", "25", "150"], r: "200", cat: "MATEMATIK" },
    { q: "En hage har 4 hörn. I varje hörn sitter en katt. Framför varje katt sitter 3 katter. Hur många katter är det?", a: ["4", "12", "16", "8"], r: "4", cat: "LOGIK" },
    { q: "Hur många månader har 28 dagar?", a: ["Alla 12", "Endast 1", "6", "2"], r: "Alla 12", cat: "LOGIK" },
    { q: "Vilket tal kommer härnäst: 1, 3, 6, 10, 15, ...?", a: ["21", "20", "25", "18"], r: "21", cat: "LOGIK" },
    { q: "Om en penna och ett sudd kostar 11 kr totalt, och pennan kostar 10 kr mer än suddet, vad kostar suddet?", a: ["0.50 kr", "1 kr", "1.50 kr", "2 kr"], r: "0.50 kr", cat: "LOGIK" },
    { q: "Hur många kanter har en kub?", a: ["12", "8", "6", "10"], r: "12", cat: "MATEMATIK" },

    // --- MER VARDAGSMATTE ---
    { q: "Du köper 3 kg godis för 210 kr. Vad är kilopriset?", a: ["70 kr", "60 kr", "80 kr", "65 kr"], r: "70 kr", cat: "MATEMATIK" },
    { q: "En buss rymmer 50 personer. Om 4/5 av platserna är upptagna, hur många lediga platser finns det?", a: ["10", "40", "5", "15"], r: "10", cat: "MATEMATIK" },
    { q: "Ett recept för 4 personer kräver 2 ägg. Hur många ägg behövs för 10 personer?", a: ["5", "4", "6", "8"], r: "5", cat: "MATEMATIK" },
    { q: "Vad är 15% av 200?", a: ["30", "15", "20", "45"], r: "30", cat: "MATEMATIK" },
    { q: "En film är 135 minuter lång. Hur många timmar och minuter är det?", a: ["2h 15min", "2h 35min", "1h 35min", "2h 5min"], r: "2h 15min", cat: "MATEMATIK" },
    { q: "Du har 120 kr och köper 4 st tidningar. Du får 20 kr tillbaka. Vad kostade en tidning?", a: ["25 kr", "30 kr", "20 kr", "22 kr"], r: "25 kr", cat: "MATEMATIK" },
    { q: "Vilket är det minsta talet som är delbart med både 3 och 4?", a: ["12", "6", "24", "18"], r: "12", cat: "MATEMATIK" },
    { q: "Om du cyklar 15 km på en timme, hur långt kommer du på 20 minuter?", a: ["5 km", "3 km", "7.5 km", "10 km"], r: "5 km", cat: "MATEMATIK" },
    { q: "Vad är kvadratroten ur 81?", a: ["9", "8", "7", "10"], r: "9", cat: "MATEMATIK" },
    { q: "Hur många gram går det på 2,5 kilogram?", a: ["2500", "250", "25000", "25"], r: "2500", cat: "MATEMATIK" },
    { q: "En triangel har basen 10 cm och höjden 6 cm. Vad är arean?", a: ["30 cm²", "60 cm²", "15 cm²", "20 cm²"], r: "30 cm²", cat: "MATEMATIK" },
    { q: "Vilket tal är 100 mindre än 10 000?", a: ["9900", "9000", "9990", "9090"], r: "9900", cat: "MATEMATIK" },
    { q: "Hur många minuter är en tredjedels timme?", a: ["20", "15", "30", "10"], r: "20", cat: "MATEMATIK" },
    { q: "Om X + 5 = 12, vad är 2X?", a: ["14", "7", "10", "12"], r: "14", cat: "MATEMATIK" },
    { q: "Vad är medelvärdet av 10, 20 och 30?", a: ["20", "15", "25", "10"], r: "20", cat: "MATEMATIK" },
    { q: "Ett dussin ägg kostar 36 kr. Vad kostar 3 ägg?", a: ["9 kr", "12 kr", "6 kr", "3 kr"], r: "9 kr", cat: "MATEMATIK" },
    { q: "Hur många grader är en rät vinkel?", a: ["90", "180", "45", "360"], r: "90", cat: "MATEMATIK" },
    { q: "Vilket tal saknas: 2, 5, 11, 23, ?", a: ["47", "46", "35", "50"], r: "47", cat: "LOGIK" },
    { q: "Om du kastar två tärningar, vad är det största summan du kan få?", a: ["12", "11", "10", "13"], r: "12", cat: "MATEMATIK" },
    { q: "En hink rymmer 10 liter. Den är fylld till 40%. Hur många liter vatten är det i hinken?", a: ["4", "6", "40", "0.4"], r: "4", cat: "MATEMATIK" },

    // --- VARIERANDE MATTE & LOGIK ---
    { q: "Amanda tänker på ett tal. Hon multiplicerar det med 3, lägger till 7 och får 22. Vilket tal tänkte hon på?", a: ["5", "4", "6", "7"], r: "5", cat: "MATEMATIK" },
    { q: "En snigel ska klättra upp för en 10 meter hög vägg. Varje dag klättrar den upp 3 meter, men varje natt halkar den ner 2 meter. Vilken dag når den toppen?", a: ["Dag 8", "Dag 10", "Dag 9", "Dag 7"], r: "Dag 8", cat: "LOGIK" },
    { q: "Lukas har dubbelt så många följare som Sofia. Sofia har 150 följare mer än Erik. Erik har 200 följare. Hur många har Lukas?", a: ["700", "550", "350", "600"], r: "700", cat: "MATEMATIK" },
    { q: "Om 5 skjortor tar 5 timmar att torka i solen, hur lång tid tar det för 10 skjortor att torka?", a: ["5 timmar", "10 timmar", "2,5 timmar", "1 timme"], r: "5 timmar", cat: "LOGIK" },
    { q: "Ett tåg lämnar stationen med 100 passagerare. Vid första stoppet går 20 av och 10 på. Vid andra stoppet går hälften av de kvarvarande av. Hur många är kvar på tåget?", a: ["45", "50", "40", "55"], r: "45", cat: "MATEMATIK" },
    { q: "En rektangulär musmatta är 40 cm bred och 30 cm hög. Vad är dess area i kvadratcentimeter?", a: ["1200", "70", "140", "1000"], r: "1200", cat: "MATEMATIK" },
    { q: "Emil köper tre spel för totalt 1200 kr. Det första kostade 500 kr, det andra hälften av det första. Vad kostade det tredje?", a: ["450 kr", "250 kr", "300 kr", "350 kr"], r: "450 kr", cat: "MATEMATIK" },
    { q: "Om X + X + X = 45, vad är X * 2?", a: ["30", "15", "45", "10"], r: "30", cat: "MATEMATIK" },
    { q: "En familj har 5 döttrar. Varje dotter har en bror. Hur många barn har familjen totalt?", a: ["6", "10", "5", "11"], r: "6", cat: "LOGIK" },
    { q: "Vad är nästa tal i serien: 2, 4, 8, 16, ...?", a: ["32", "24", "20", "64"], r: "32", cat: "MATEMATIK" },
    { q: "Simon delar ut 120 flyers. Han ger 1/4 till klass A och 1/3 av det som är kvar till klass B. Hur många flyers har han kvar efter det?", a: ["60", "90", "30", "45"], r: "60", cat: "MATEMATIK" },
    { q: "En klocka visar 09:00. Hur många grader har timvisaren rört sig när klockan är 12:00?", a: ["90 grader", "180 grader", "45 grader", "120 grader"], r: "90 grader", cat: "MATEMATIK" },
    { q: "Julia har 12 äpplen. Hon ger hälften till Karl. Karl ger 2 äpplen till sin syster. Hur många äpplen har Karl kvar?", a: ["4", "6", "2", "8"], r: "4", cat: "MATEMATIK" },
    { q: "En skjorta kostar 200 kr efter en prissänkning på 50%. Vad kostade den från början?", a: ["400 kr", "300 kr", "250 kr", "500 kr"], r: "400 kr", cat: "MATEMATIK" },
    { q: "Vilket tal saknas: 100, 90, 81, 73, ?", a: ["66", "65", "64", "67"], r: "66", cat: "LOGIK" },
    { q: "Linus springer 5 km på 25 minuter. Vilken är hans genomsnittshastighet i km/h?", a: ["12 km/h", "10 km/h", "15 km/h", "20 km/h"], r: "12 km/h", cat: "MATEMATIK" },
    { q: "Ett kilo äpplen kostar 24 kr. Hur mycket kostar 250 gram?", a: ["6 kr", "8 kr", "12 kr", "4 kr"], r: "6 kr", cat: "MATEMATIK" },
    { q: "Vilket är det största tresiffriga talet där alla siffror är olika?", a: ["987", "999", "989", "876"], r: "987", cat: "LOGIK" },
    { q: "En låda innehåller 5 röda, 3 blå och 2 gröna bollar. Hur stor är chansen (i %) att du drar en blå boll?", a: ["30%", "50%", "20%", "33%"], r: "30%", cat: "MATEMATIK" },
    { q: "Om tre katter fångar tre råttor på tre minuter, hur lång tid tar det för 100 katter att fånga 100 råttor?", a: ["3 minuter", "100 minuter", "1 minut", "33 minuter"], r: "3 minuter", cat: "LOGIK" },
    { q: "Alice är 12 år gammal. Hennes mamma är tre gånger så gammal. Hur gammal är mamman när Alice är hälften så gammal som mamman?", a: ["48", "36", "42", "24"], r: "48", cat: "LOGIK" },
    { q: "Vad är hälften av 2 plus 2?", a: ["3", "2", "4", "1"], r: "3", cat: "LOGIK" },
    { q: "Noah köper en pizza för 120 kr och lämnar 15% dricks. Hur mycket betalar han totalt?", a: ["138 kr", "135 kr", "140 kr", "132 kr"], r: "138 kr", cat: "MATEMATIK" },
    { q: "Ett cykelhjul har en omkrets på 2 meter. Hur många varv snurrar hjulet på 1 kilometer?", a: ["500", "1000", "200", "50"], r: "500", cat: "MATEMATIK" },
    { q: "Vilket tal är en fjärdedel av hälften av 80?", a: ["10", "20", "5", "40"], r: "10", cat: "MATEMATIK" },
    { q: "En bok har 200 sidor. Hur många gånger förekommer siffran '1' i sidnumreringen från 1 till 100?", a: ["21", "20", "11", "10"], r: "21", cat: "LOGIK" },
    { q: "Leo har 50 kr. Han köper godis för 12,50 kr och en dricka för 18,50 kr. Hur mycket har han kvar?", a: ["19 kr", "21 kr", "20 kr", "18 kr"], r: "19 kr", cat: "MATEMATIK" },
    { q: "Vad är summan av de första fem primtalen (2, 3, 5, 7, 11)?", a: ["28", "26", "30", "25"], r: "28", cat: "MATEMATIK" },
    { q: "En korg innehåller 10 par strumpor. Hur många strumpor måste du dra för att vara helt säker på att få ett matchande par?", a: ["11", "3", "21", "10"], r: "11", cat: "LOGIK" },
    { q: "Om klockan är 15:50, hur många minuter är det kvar till 18:15?", a: ["145", "135", "125", "155"], r: "145", cat: "MATEMATIK" },
    { q: "Ett bageri bakar 120 bullar. De säljer 80% av dem. Hur många bullar finns kvar?", a: ["24", "40", "30", "20"], r: "24", cat: "MATEMATIK" },
    { q: "Vilken är summan av vinklarna i en triangel?", a: ["180 grader", "360 grader", "90 grader", "270 grader"], r: "180 grader", cat: "MATEMATIK" },
    { q: "En hage har 10 får och några hönor. Totalt finns det 50 ben. Hur många hönor finns det?", a: ["5", "10", "15", "20"], r: "5", cat: "LOGIK" },
    { q: "Om du multiplicerar alla siffror på en telefonknappsats (0-9), vad blir resultatet?", a: ["0", "362880", "45", "1"], r: "0", cat: "LOGIK" },
    { q: "Kevin har 3 dussin ägg. Han tappar 5 ägg. Hur många har han kvar?", a: ["31", "25", "36", "29"], r: "31", cat: "MATEMATIK" },
    { q: "Vad är 0,5 * 0,5?", a: ["0,25", "1,0", "0,5", "0,1"], r: "0,25", cat: "MATEMATIK" },
    { q: "En bil kör 90 km på 1 timme och 30 minuter. Vilken är hastigheten?", a: ["60 km/h", "45 km/h", "75 km/h", "90 km/h"], r: "60 km/h", cat: "MATEMATIK" },
    { q: "Hur många sekunder går det på en kvart?", a: ["900", "600", "1200", "1500"], r: "900", cat: "MATEMATIK" },
    { q: "Om du har 3 äpplen och tar bort 2, hur många äpplen har du?", a: ["2", "1", "3", "0"], r: "2", cat: "LOGIK" },
    { q: "Vilket tal är mitt emellan 15 och 35?", a: ["25", "20", "30", "22"], r: "25", cat: "MATEMATIK" },

    { q: "Vilken konsol hade en kontroll med en inbyggd analogspak som ofta blev slapp efter för mycket Mario Party?", a: ["Nintendo 64", "PlayStation 1", "Sega Saturn", "Dreamcast"], r: "Nintendo 64", cat: "RETRO-TECH" },
    { q: "Vad står förkortningen 'POST' för när datorn startar?", a: ["Power On Self Test", "Primary Output System Tool", "Peripheral Online Storage Test", "Process Option Start"], r: "Power On Self Test", cat: "TECH" },
    { q: "Vad är en 'Deadlock' i programmering?", a: ["Två processer väntar på varandra för evigt", "Datorn har brunnit", "Lösenordet är bortglömt", "Nätverket är nere"], r: "Två processer väntar på varandra för evigt", cat: "TECH" },
    { q: "Vilken speltitel anses ofta vara det första 'Easter Egget' i spelhistorien?", a: ["Adventure (Atari 2600)", "Pac-Man", "Pong", "Asteroids"], r: "Adventure (Atari 2600)", cat: "GAMING" },
    { q: "Vad kallas den process där en CPU utför instruktioner?", a: ["Fetch-Decode-Execute cycle", "Read-Write cycle", "Open-Close process", "Input-Output loop"], r: "Fetch-Decode-Execute cycle", cat: "TECH" },
    { q: "Vilket material används oftast i moderna transistorer?", a: ["Kisel (Silicon)", "Guld", "Silver", "Plast"], r: "Kisel (Silicon)", cat: "TECH" },
    { q: "Vad står 'OSI' för i OSI-modellen för nätverk?", a: ["Open Systems Interconnection", "Online System Index", "Operating System Interface", "Output Signal Integration"], r: "Open Systems Interconnection", cat: "TECH" },
    { q: "Vilket år släpptes den första versionen av Windows (1.0)?", a: ["1985", "1981", "1990", "1975"], r: "1985", cat: "HISTORIA" },
    { q: "Vad är 'Ethernet'?", a: ["En teknik för lokala nätverk (LAN)", "Ett annat namn för internet", "Ett operativsystem", "En webbläsare"], r: "En teknik för lokala nätverk (LAN)", cat: "TECH" },

    // --- GEOGRAFI & RESOR ---
    { q: "Vilken är världens största flod (volymmässigt)?", a: ["Amazonas", "Nilen", "Mississippi", "Yangtze"], r: "Amazonas", cat: "GEOGRAFI" },
    { q: "I vilket land kan man besöka pyramiderna i Giza?", a: ["Egypten", "Mexiko", "Grekland", "Italien"], r: "Egypten", cat: "GEOGRAFI" },
    { q: "Vilken stad är känd som 'The Big Apple'?", a: ["New York", "London", "Paris", "Berlin"], r: "New York", cat: "GEOGRAFI" },
    { q: "Vilket land har formen av en stövel?", a: ["Italien", "Frankrike", "Spanien", "Grekland"], r: "Italien", cat: "GEOGRAFI" },
    { q: "Vad heter världens högsta berg?", a: ["Mount Everest", "K2", "Kilimanjaro", "Mont Blanc"], r: "Mount Everest", cat: "GEOGRAFI" },
    { q: "Vilken är Sveriges största sjö?", a: ["Vänern", "Vättern", "Mälaren", "Hjälmaren"], r: "Vänern", cat: "GEOGRAFI" },

    // --- TECH & INTERNET ---
    { q: "Vad står 'WWW' för?", a: ["World Wide Web", "World Wide Window", "Web Wide World", "Web Window World"], r: "World Wide Web", cat: "INTERNET" },
    { q: "Vilket socialt medium ägs av Elon Musk och hette tidigare Twitter?", a: ["X", "Threads", "TikTok", "Instagram"], r: "X", cat: "INTERNET" },
    { q: "Vilken sökmotor är den mest använda i världen?", a: ["Google", "Bing", "Yahoo", "DuckDuckGo"], r: "Google", cat: "INTERNET" },
    { q: "Vad kallas en bärbar dator ofta med ett annat ord?", a: ["Laptop", "Desktop", "Tablet", "Monitor"], r: "Laptop", cat: "TECH" },
    { q: "Vad kallas 'mjukvara' på engelska?", a: ["Software", "Hardware", "Middleware", "Firmware"], r: "Software", cat: "TECH" },
    { q: "Vilket företag tillverkar Playstation?", a: ["Sony", "Microsoft", "Nintendo", "Sega"], r: "Sony", cat: "TECH" },

    // --- MAT & DRYCK ---
    { q: "Vilket land kommer maträtten Pizza ursprungligen ifrån?", a: ["Italien", "Frankrike", "USA", "Grekland"], r: "Italien", cat: "MAT" },
    { q: "Vad kallas torkade vindruvor?", a: ["Russin", "Plommon", "Dadlar", "Fikon"], r: "Russin", cat: "MAT" },
    { q: "Vilken frukt sägs ha fallit på Isaac Newtons huvud och gett honom idén om tyngdkraften?", a: ["Äpple", "Päron", "Apelsin", "Banan"], r: "Äpple", cat: "VETENSKAP" },

    // --- SPORT & FRITID ---
    { q: "Hur många spelare har ett fotbollslag på planen samtidigt (per lag)?", a: ["11", "10", "12", "7"], r: "11", cat: "SPORT" },
    { q: "I vilken sport använder man ordet 'Home Run'?", a: ["Baseboll", "Basket", "Tennis", "Golf"], r: "Baseboll", cat: "SPORT" },
    { q: "Vem är känd som 'The King of Pop'?", a: ["Michael Jackson", "Elvis Presley", "Prince", "Justin Bieber"], r: "Michael Jackson", cat: "MUSIK" },
    { q: "Vilket land arrangerade sommar-OS 2024?", a: ["Frankrike", "Japan", "Brasilien", "Storbritannien"], r: "Frankrike", cat: "SPORT" },
    { q: "Vad heter den största svenska turneringen i fotboll för ungdomar?", a: ["Gothia Cup", "Åhus Beach", "TV-pucken", "Svenska Cupen"], r: "Gothia Cup", cat: "SPORT" },
    { q: "Vilken färg har de fem ringarna i OS-symbolen (förutom svart, rött, grönt och gult)?", a: ["Blått", "Lila", "Orange", "Vitt"], r: "Blått", cat: "SPORT" },
    { q: "Hur många hål spelas vanligtvis i en full runda golf?", a: ["18", "9", "12", "24"], r: "18", cat: "SPORT" },
    { q: "Vad heter den högsta ligan i ishockey i Sverige?", a: ["SHL", "NHL", "Allsvenskan", "KHL"], r: "SHL", cat: "SPORT" },

// --- MUSIK & KULTUR ---
    { q: "Vilket instrument spelar man på om man använder en stråke och har det mellan knäna?", a: ["Cello", "Fiol", "Kontrabas", "Altfiol"], r: "Cello", cat: "MUSIK" },
    { q: "Vilket band sjunger låten 'Mamma Mia'?", a: ["ABBA", "Queen", "The Beatles", "Roxette"], r: "ABBA", cat: "MUSIK" },
    { q: "Vad kallas en person som leder en orkester?", a: ["Dirigent", "Kompositör", "Solist", "Kapellmästare"], r: "Dirigent", cat: "MUSIK" },
    { q: "Vilket land vann Eurovision Song Contest 2023 med låten 'Tattoo'?", a: ["Sverige", "Finland", "Norge", "Israel"], r: "Sverige", cat: "MUSIK" },

    // --- SPORT & KROPP ---
    { q: "I vilken sport kan man få 'Strike' eller 'Spare'?", a: ["Bowling", "Golf", "Tennis", "Biljard"], r: "Bowling", cat: "SPORT" },
    { q: "Vilken färg har ledartröjan i cykeltävlingen Tour de France?", a: ["Gul", "Röd", "Grön", "Blå"], r: "Gul", cat: "SPORT" },
    { q: "Hur många hjärtan har en bläckfisk?", a: ["3", "1", "2", "4"], r: "3", cat: "NATUR" },
    { q: "Vad heter den största muskeln i kroppen?", a: ["Sätesmuskeln (Rumpan)", "Lårmuskeln", "Ryggmuskeln", "Biceps"], r: "Sätesmuskeln (Rumpan)", cat: "VETENSKAP" },
    { q: "Vilket land kommer kampsporten Karate ifrån?", a: ["Japan", "Kina", "Korea", "Thailand"], r: "Japan", cat: "SPORT" },

    // --- GEOGRAFI & VÄRLDEN ---
    { q: "Vilken är världens minsta världsdel?", a: ["Oceanien", "Europa", "Antarktis", "Sydamerika"], r: "Oceanien", cat: "GEOGRAFI" },
    { q: "Vad heter huvudstaden i Frankrike?", a: ["Paris", "Lyon", "Marseille", "Nice"], r: "Paris", cat: "GEOGRAFI" },
    { q: "Vilken är världens folkrikaste stad (år 2023)?", a: ["Tokyo", "Shanghai", "Delhi", "New York"], r: "Tokyo", cat: "GEOGRAFI" },
    { q: "I vilken världsdel ligger landet Australien?", a: ["Oceanien", "Asien", "Antarktis", "Afrika"], r: "Oceanien", cat: "GEOGRAFI" },
    { q: "Vilket hav ligger mellan Europa och Amerika?", a: ["Atlanten", "Stilla havet", "Indiska oceanen", "Medelhavet"], r: "Atlanten", cat: "GEOGRAFI" },
    { q: "Vad heter huvudstaden i USA?", a: ["Washington D.C.", "New York", "Los Angeles", "Chicago"], r: "Washington D.C.", cat: "GEOGRAFI" },
    { q: "Vilket land gränsar Sverige till i väst?", a: ["Norge", "Finland", "Danmark", "Ryssland"], r: "Norge", cat: "GEOGRAFI" },

    // --- VETENSKAP & RYMDEN ---
    { q: "Vad kallas det när månen täcker solen helt?", a: ["Solförmörkelse", "Månförmörkelse", "Fullmåne", "Supermåne"], r: "Solförmörkelse", cat: "ASTRONOMI" },
    { q: "Vilken planet är känd för sina stora ringar?", a: ["Saturnus", "Jupiter", "Uranus", "Neptunus"], r: "Saturnus", cat: "ASTRONOMI" },
    { q: "Vad kallas kraften som gör att vi håller oss kvar på jorden?", a: ["Gravitation", "Magnetism", "Friktion", "Centrifugalkraft"], r: "Gravitation", cat: "VETENSKAP" },
    { q: "Vilket år landade den första människan på månen?", a: ["1969", "1965", "1972", "1960"], r: "1969", cat: "HISTORIA" },
    { q: "Vem uppfann glödlampan?", a: ["Thomas Edison", "Nikola Tesla", "Albert Einstein", "Alexander Graham Bell"], r: "Thomas Edison", cat: "VETENSKAP" },

    // --- FILM & LITTERATUR ---
    { q: "Vem har skrivit böckerna om Pippi Långstrump?", a: ["Astrid Lindgren", "Tove Jansson", "Elsa Beskow", "Selma Lagerlöf"], r: "Astrid Lindgren", cat: "LITTERATUR" },
    { q: "Vad heter den lilla snögubben i filmen Frost (Frozen)?", a: ["Olof", "Sven", "Kristoffer", "Hans"], r: "Olof", cat: "FILM" },
    { q: "Vilken superhjälte kan klättra på väggar och skjuta nät?", a: ["Spider-Man", "Batman", "Super-Man", "Iron Man"], r: "Spider-Man", cat: "MARVEL" },
    { q: "Vad heter hunden i den tecknade serien om Tintin?", a: ["Milou", "Snobben", "Pluto", "Lufsen"], r: "Milou", cat: "LITTERATUR" },
    { q: "I vilken film hittar vi karaktären Buzz Lightyear?", a: ["Toy Story", "Hitta Nemo", "Bilar", "Monsters Inc"], r: "Toy Story", cat: "FILM" },

    // --- DJUR & NATUR ---
    { q: "Vad kallas en grupp vargar?", a: ["Flock", "Skock", "Svärm", "Stim"], r: "Flock", cat: "NATUR" },
    { q: "Vilket djur är känt för att vara det snabbaste på land?", a: ["Gepard", "Lejon", "Häst", "Antilop"], r: "Gepard", cat: "NATUR" },
    { q: "Hur många ben har en insekt?", a: ["6", "8", "4", "10"], r: "6", cat: "NATUR" },
    { q: "Vilken fågel är känd för att kunna härma mänskligt tal?", a: ["Papegoja", "Uggla", "Örn", "Pingvin"], r: "Papegoja", cat: "NATUR" },
    { q: "Vad äter en pandabjörn nästan uteslutande?", a: ["Bambu", "Kött", "Fisk", "Frukt"], r: "Bambu", cat: "NATUR" },

    // --- HISTORIA & ÖVRIGT ---
    { q: "Vilket år började det andra världskriget?", a: ["1939", "1914", "1945", "1918"], r: "1939", cat: "HISTORIA" },
    { q: "Vem var Sveriges kung år 2023?", a: ["Carl XVI Gustaf", "Gustaf V", "Gustaf VI Adolf", "Oscar II"], r: "Carl XVI Gustaf", cat: "HISTORIA" },
    { q: "Vilken stad brann ner nästan helt år 1666?", a: ["London", "Paris", "Rom", "Stockholm"], r: "London", cat: "HISTORIA" },
    { q: "Vem upptäckte Amerika (enligt traditionell historieskrivning) år 1492?", a: ["Christofer Columbus", "Vasco da Gama", "Marco Polo", "Leif Eriksson"], r: "Christofer Columbus", cat: "HISTORIA" },
    { q: "Vilket land skänkte Frihetsgudinnan till USA?", a: ["Frankrike", "Storbritannien", "Tyskland", "Italien"], r: "Frankrike", cat: "HISTORIA" },
    { q: "Vad heter Sveriges nationalsång?", a: ["Du gamla, du fria", "Den blomstertid nu kommer", "Sverige", "Kungssången"], r: "Du gamla, du fria", cat: "MUSIK" },
    { q: "Hur många tangenter har ett vanligt piano?", a: ["88", "76", "64", "100"], r: "88", cat: "MUSIK" },
    { q: "Vilken färg har en smaragd?", a: ["Grön", "Röd", "Blå", "Gul"], r: "Grön", cat: "VETENSKAP" },
    { q: "Vad kallas det när man sover under vintern, som vissa björnar gör?", a: ["Gå i ide", "Dvala", "Vintersömn", "Slummer"], r: "Gå i ide", cat: "NATUR" },
// --- DISNEY & ANIMERAT ---
    { q: "Vad heter den lilla sjöjungfrun i Disneys klassiker?", a: ["Ariel", "Belle", "Jasmine", "Aurora"], r: "Ariel", cat: "FILM" },
    { q: "Vilket djur är Bambi?", a: ["Rådjur", "Hjort", "Kanin", "Räv"], r: "Rådjur", cat: "NATUR" },
    { q: "Vad heter den flygande elefanten med stora öron?", a: ["Dumbo", "Bambi", "Baloo", "Simba"], r: "Dumbo", cat: "FILM" },
    { q: "Vem bor i en ananas djupt nere i havet?", a: ["Svampbob Fyrkant", "Patrick Stjärna", "Bläckward", "Sandy"], r: "Svampbob Fyrkant", cat: "TV-SERIER" },
    { q: "Vad heter den snabba röda bilen i filmen Bilar (Cars)?", a: ["Blixten McQueen", "Bärgarn", "Doc Hudson", "Sally"], r: "Blixten McQueen", cat: "FILM" },
// --- HÅRDVARA (20 frågor) ---
    { q: "Vad står förkortningen CPU för?", a: ["Central Processing Unit", "Computer Personal Unit", "Central Peripheral Universal", "Core Process Unit"], r: "Central Processing Unit", cat: "TECH" },
    { q: "Vilken komponent kallas ofta för datorns 'hjärna'?", a: ["Processorn", "Hårddisken", "Moderkortet", "Nätaggregatet"], r: "Processorn", cat: "TECH" },
    { q: "Vilken typ av minne används för att lagra data temporärt medan datorn körs?", a: ["RAM", "SSD", "HDD", "ROM"], r: "RAM", cat: "TECH" },
    { q: "Vad gör en GPU?", a: ["Hanterar grafik och bilder", "Lagrar filer permanent", "Ansluter datorn till internet", "Kyler ner processorn"], r: "Hanterar grafik och bilder", cat: "TECH" },
    { q: "Vilken lagringsteknik har inga rörliga delar och är snabbare än en vanlig hårddisk?", a: ["SSD", "HDD", "Diskett", "CD-ROM"], r: "SSD", cat: "TECH" },
    { q: "Vad står RAM för?", a: ["Random Access Memory", "Read Access Memory", "Rapid Action Module", "Remote Analysis Method"], r: "Random Access Memory", cat: "TECH" },
    { q: "Vilken kabel används oftast för att skicka både bild och ljud digitalt till en skärm?", a: ["HDMI", "VGA", "DVI", "PS/2"], r: "HDMI", cat: "TECH" },
    { q: "Var placeras processorn (CPU) i en stationär dator?", a: ["I sockeln på moderkortet", "I nätaggregatet", "I en USB-port", "Direkt på hårddisken"], r: "I sockeln på moderkortet", cat: "TECH" },
    { q: "Vad är syftet med kylpasta?", a: ["Förbättra värmeöverföring", "Limma fast processorn", "Rengöra fläktarna", "Isolera elektricitet"], r: "Förbättra värmeöverföring", cat: "TECH" },
    { q: "Vilken enhet mäter man klockfrekvensen på en processor i?", a: ["Hertz (GHz)", "Byte (GB)", "Watt (W)", "Volt (V)"], r: "Hertz (GHz)", cat: "TECH" },
    { q: "Vilken komponent levererar ström till alla delar i datorn?", a: ["Nätaggregatet (PSU)", "Batteriet", "Kylaren", "Chassit"], r: "Nätaggregatet (PSU)", cat: "TECH" },
    { q: "Vad står USB för?", a: ["Universal Serial Bus", "United Software Binary", "Universal System Backup", "Ultra Speed Boot"], r: "Universal Serial Bus", cat: "TECH" },
    { q: "Vilket av dessa är ett moderkort-format?", a: ["ATX", "JPG", "MP3", "BIOS"], r: "ATX", cat: "TECH" },
    { q: "Vad kallas den lilla batteridrivna kretsen som sparar klockan och inställningar på moderkortet?", a: ["CMOS", "CPU", "RAM", "SATA"], r: "CMOS", cat: "TECH" },
    { q: "Vilken port används för att ansluta en nätverkskabel?", a: ["Ethernet / RJ45", "USB-C", "DisplayPort", "Thunderbolt"], r: "Ethernet / RJ45", cat: "TECH" },
    { q: "Vad innebär 'Overclocking'?", a: ["Köra hårdvara snabbare än standard", "Byta ut klockan i Windows", "Sänka strömförbrukningen", "Installera fler fläktar"], r: "Köra hårdvara snabbare än standard", cat: "TECH" },
    { q: "Vilken skärmpanelstyp är känd för bäst färgåtergivning och betraktningsvinklar?", a: ["IPS", "TN", "CRT", "LCD"], r: "IPS", cat: "TECH" },
    { q: "Vad är en 'Raspberry Pi'?", a: ["En liten enkorts-dator", "Ett operativsystem", "Ett grafikkort", "En typ av lagring"], r: "En liten enkorts-dator", cat: "TECH" },
    { q: "Hur många bitar finns det i en Byte?", a: ["8", "16", "32", "64"], r: "8", cat: "TECH" },
    { q: "Vilken typ av anslutning används oftast för moderna interna SSD-enheter?", a: ["NVMe / M.2", "IDE", "SCSI", "FireWire"], r: "NVMe / M.2", cat: "TECH" },

    // --- MJUKVARA & PROGRAMMERING (15 frågor) ---
    { q: "Vilket av dessa är ett operativsystem?", a: ["Linux", "Python", "HTML", "C++"], r: "Linux", cat: "TECH" },
    { q: "Vad står förkortningen 'GUI' för?", a: ["Graphical User Interface", "General Unit Integration", "Global User Index", "Gaming Unified Input"], r: "Graphical User Interface", cat: "TECH" },
    { q: "Vilket programmeringsspråk används främst för att ge struktur åt webbsidor?", a: ["HTML", "JavaScript", "Swift", "Ruby"], r: "HTML", cat: "TECH" },
    { q: "Vad gör en 'kompilator' (compiler)?", a: ["Översätter kod till maskinkod", "Rensar hårddisken", "Packar upp ZIP-filer", "Hittar virus"], r: "Översätter kod till maskinkod", cat: "TECH" },
    { q: "Vad är 'Open Source'?", a: ["Programvara med öppen källkod", "Ett gratis antivirus", "En olåst dator", "Programvara som saknar licens"], r: "Programvara med öppen källkod", cat: "TECH" },
    { q: "Vilket filsystem används oftast i Windows?", a: ["NTFS", "FAT32", "APFS", "EXT4"], r: "NTFS", cat: "TECH" },
    { q: "Vad kallas ett fel i ett program eller spel?", a: ["Bug", "Lag", "Spam", "Crash"], r: "Bug", cat: "TECH" },
    { q: "Vilket program används för att visa webbsidor?", a: ["Webbläsare", "Utforskaren", "Terminalen", "BIOS"], r: "Webbläsare", cat: "TECH" },
    { q: "Vad står 'URL' för?", a: ["Uniform Resource Locator", "Universal Radio Link", "User Record List", "Unit Real Logic"], r: "Uniform Resource Locator", cat: "TECH" },
    { q: "Vilket tecken används nästan alltid för att ange en kommentar i Python?", a: ["#", "//", "/*", "!"], r: "#", cat: "TECH" },
    { q: "Vad kallas den mjukvara som styr hårdvaran på lägsta nivå, t.ex. i en mus eller router?", a: ["Firmware", "Shareware", "Adware", "Malware"], r: "Firmware", cat: "TECH" },
    { q: "Vad är 'Cloud Computing'?", a: ["Tjänster som körs via internet", "Datorer som drivs av solenergi", "Trådlösa tangentbord", "Lokal lagring"], r: "Tjänster som körs via internet", cat: "TECH" },
    { q: "Vilket företag utvecklar operativsystemet Windows?", a: ["Microsoft", "Apple", "Google", "IBM"], r: "Microsoft", cat: "TECH" },
    { q: "Vad är syftet med en 'Device Driver' (drivrutin)?", a: ["Låta operativsystemet prata med hårdvara", "Hitta borttappade filer", "Öka internethastigheten", "Skapa backups"], r: "Låta operativsystemet prata med hårdvara", cat: "TECH" },
    { q: "Vilken förkortning används för 'Application Programming Interface'?", a: ["API", "SDK", "IDE", "JSON"], r: "API", cat: "TECH" },

    // --- NÄTVERK & INTERNET (15 frågor) ---
    { q: "Vad står 'IP' för i IP-adress?", a: ["Internet Protocol", "Internal Page", "Instant Process", "Input Point"], r: "Internet Protocol", cat: "TECH" },
    { q: "Vilken enhet sköter trafiken mellan ditt hemmanätverk och internet?", a: ["Router", "Switch", "Hub", "Repeater"], r: "Router", cat: "TECH" },
    { q: "Vad gör en DNS-server?", a: ["Översätter domännamn till IP-adresser", "Skyddar mot hackare", "Lagrar webbplatser", "Skickar e-post"], r: "Översätter domännamn till IP-adresser", cat: "TECH" },
    { q: "Vilket protokoll används för säker, krypterad surf på webben?", a: ["HTTPS", "HTTP", "FTP", "UDP"], r: "HTTPS", cat: "TECH" },
    { q: "Vad är ett 'Ping'-test?", a: ["Mäter svarstiden till en annan server", "Kollar ljudet på datorn", "Testar skärmens uppdatering", "Hittar nya filer"], r: "Mäter svarstiden till en annan server", cat: "TECH" },
    { q: "Vilken frekvens används oftast av moderna Wi-Fi-routers utöver 2.4 GHz?", a: ["5 GHz", "10 GHz", "800 MHz", "1.2 GHz"], r: "5 GHz", cat: "TECH" },
    { q: "Vad står 'LAN' för?", a: ["Local Area Network", "Large Access Node", "Light Area Network", "Log Action Now"], r: "Local Area Network", cat: "TECH" },
    { q: "Vilket av dessa är en IPv4-adress?", a: ["192.168.0.1", "2001:db8::1", "www.google.com", "88.88.88"], r: "192.168.0.1", cat: "TECH" },
    { q: "Vad är 'Bandbredd'?", a: ["Mängden data som kan överföras per sekund", "Längden på en nätverkskabel", "Hur många enheter som kan anslutas", "Namnet på ett Wi-Fi"], r: "Mängden data som kan överföras per sekund", cat: "TECH" },
    { q: "Vad används FTP till?", a: ["Filöverföring", "Skicka meddelanden", "Spela spel online", "Söka på webben"], r: "Filöverföring", cat: "TECH" },
    { q: "Vad är en 'MAC-adress'?", a: ["En unik identifierare för nätverkskort", "Adressen till Apples huvudkontor", "Ett lösenord för routers", "En IP-adress i MacOS"], r: "En unik identifierare för nätverkskort", cat: "TECH" },
    { q: "Vad är fördelen med fiberoptik jämfört med kopparledningar?", a: ["Högre fart och längre räckvidd", "Det är billigare", "Det kräver ingen ström", "Det är lättare att böja"], r: "Högre fart och längre räckvidd", cat: "TECH" },
    { q: "Vad kallas den process där en router skickar trafik till en specifik intern enhet?", a: ["Port Forwarding", "Deep Linking", "Cloud Syncing", "Bridging"], r: "Port Forwarding", cat: "TECH" },
    { q: "Vad står 'IoT' för?", a: ["Internet of Things", "Input Output Technology", "Internal Online Tool", "Internet of Tasks"], r: "Internet of Things", cat: "TECH" },
    { q: "Vad innebär 'Latens'?", a: ["Fördröjning i nätverket", "Högsta möjliga hastighet", "Antal förlorade paket", "Lösenordsstyrka"], r: "Fördröjning i nätverket", cat: "TECH" },

    // --- INTERNETSÄKERHET (10 frågor) ---
    { q: "Vad kallas det när någon försöker lura dig att uppge lösenord via falska e-postmeddelanden?", a: ["Phishing", "Spamming", "Lagging", "Buffering"], r: "Phishing", cat: "TECH" },
    { q: "Vad är syftet med en brandvägg (Firewall)?", a: ["Blockera obehörig nätverkstrafik", "Släcka bränder i serverrum", "Göra datorn snabbare", "Kryptera hårddisken"], r: "Blockera obehörig nätverkstrafik", cat: "TECH" },
    { q: "Vad står 'VPN' för?", a: ["Virtual Private Network", "Very Personal Name", "Verified Process Node", "Virtual Path Number"], r: "Virtual Private Network", cat: "TECH" },
    { q: "Vad innebär 'Tvåfaktorsautentisering' (2FA)?", a: ["Krav på två olika identifieringsmetoder", "Att man har två lösenord efter varandra", "Att två personer måste logga in samtidigt", "Inloggning på två olika enheter"], r: "Krav på två olika identifieringsmetoder", cat: "TECH" },
    { q: "Vad är 'Malware'?", a: ["Samlingsnamn för skadlig programvara", "Ett program för att redigera bilder", "Hårdvara som gått sönder", "Ett säkert operativsystem"], r: "Samlingsnamn för skadlig programvara", cat: "TECH" },
    { q: "Vad kallas skadlig kod som krypterar dina filer och kräver pengar för att låsa upp dem?", a: ["Ransomware", "Spyware", "Adware", "Trojan"], r: "Ransomware", cat: "TECH" },
    { q: "Vad är en 'Trojan' i datorsammanhang?", a: ["Skadlig kod som ser ut som ett nyttigt program", "Ett virus som bara drabbar routers", "Ett program som stänger av skärmen", "En hacker från Grekland"], r: "Skadlig kod som ser ut som ett nyttigt program", cat: "TECH" },
    { q: "Vad bör ett säkert lösenord innehålla?", a: ["Blandning av bokstäver, siffror och tecken", "Bara små bokstäver", "Ditt födelsedatum", "Namnet på din hund"], r: "Blandning av bokstäver, siffror och tecken", cat: "TECH" },
    { q: "Vad är en 'Brute Force'-attack?", a: ["Att testa alla möjliga lösenordskombinationer", "Att stjäla en fysisk server", "Att skicka virus via USB", "Att överbelasta ett elnät"], r: "Att testa alla möjliga lösenordskombinationer", cat: "TECH" },
    { q: "Vad kallas ett nätverk av infekterade datorer som kontrolleras av en hackare?", a: ["Botnet", "Mainframe", "Grid", "Subnet"], r: "Botnet", cat: "TECH" },

    // --- HARRY POTTER ---
    { q: "Vad heter Harry Potters uggla?", a: ["Hedwig", "Errol", "Scabbers", "Crookshanks"], r: "Hedwig", cat: "LITTERATUR" },
    { q: "Vilket elevhem på Hogwarts tillhör Harry Potter?", a: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"], r: "Gryffindor", cat: "LITTERATUR" },
    { q: "Vad heter Harry Potters två bästa vänner?", a: ["Ron & Hermione", "Fred & George", "Neville & Luna", "Draco & Pansy"], r: "Ron & Hermione", cat: "LITTERATUR" },
    { q: "Vilken sport spelar man på kvastar i Harry Potter-världen?", a: ["Quidditch", "Fotboll", "Kvastboll", "Sökaren"], r: "Quidditch", cat: "LITTERATUR" },

    // --- RYMDEN & VETENSKAP ---
    { q: "Vilken är den minsta planeten i vårt solsystem?", a: ["Merkurius", "Mars", "Venus", "Pluto"], r: "Merkurius", cat: "ASTRONOMI" },
    { q: "Vad heter vår galax?", a: ["Vintergatan", "Andromeda", "Orion", "Sombrero"], r: "Vintergatan", cat: "ASTRONOMI" },
    { q: "Hur många planeter finns det i vårt solsystem (sedan 2006)?", a: ["8", "9", "7", "10"], r: "8", cat: "ASTRONOMI" },
    { q: "Vad kallas en stjärna som exploderar?", a: ["Supernova", "Svart hål", "Röd jätte", "Vit dvärg"], r: "Supernova", cat: "ASTRONOMI" },
    { q: "Vad heter den största månen som kretsar kring jorden?", a: ["Månen", "Titan", "Europa", "Ganymedes"], r: "Månen", cat: "ASTRONOMI" },

    // --- MÄNNISKAKROPPEN ---
    { q: "Hur många tänder har en vuxen människa normalt (inklusive visdomständer)?", a: ["32", "28", "30", "34"], r: "32", cat: "VETENSKAP" },
    { q: "Vilken är kroppens största organ?", a: ["Huden", "Levern", "Lungan", "Tarmarna"], r: "Huden", cat: "VETENSKAP" },
    { q: "Vilket ämne i blodet ger det dess röda färg?", a: ["Hemoglobin", "Plasma", "Insulin", "Adrenalin"], r: "Hemoglobin", cat: "VETENSKAP" },
    { q: "Vad heter det skelettben som skyddar hjärnan?", a: ["Kranium", "Ryggrad", "Bäcken", "Bröstkorg"], r: "Kranium", cat: "VETENSKAP" },

    // --- GEOGRAFI & FLAGOR ---
    { q: "Vilka färger har Tysklands flagga?", a: ["Svart, rött, guld", "Blått, vitt, rött", "Grönt, vitt, rött", "Gult och blått"], r: "Svart, rött, guld", cat: "GEOGRAFI" },
    { q: "I vilken stad ligger Eiffeltornet?", a: ["Paris", "London", "Berlin", "Madrid"], r: "Paris", cat: "GEOGRAFI" },
    { q: "Vad heter världens minsta land?", a: ["Vatikanstaten", "Monaco", "San Marino", "Malta"], r: "Vatikanstaten", cat: "GEOGRAFI" },
    { q: "Vilken valuta använder man i USA?", a: ["Dollar", "Euro", "Pund", "Yen"], r: "Dollar", cat: "GEOGRAFI" },
    { q: "Vad heter den största ön i Medelhavet?", a: ["Sicilien", "Sardinien", "Cypern", "Kreta"], r: "Sicilien", cat: "GEOGRAFI" },

    // --- BLANDAT / FINAL ---
    { q: "Vilken färg har en rubin?", a: ["Röd", "Blå", "Grön", "Gul"], r: "Röd", cat: "VETENSKAP" },
    { q: "Vad kallas en ung häst?", a: ["Föl", "Kalv", "Lamm", "Killing"], r: "Föl", cat: "NATUR" },
    { q: "Hur många minuter går det på en timme?", a: ["60", "100", "50", "120"], r: "60", cat: "MATEMATIK" },
    { q: "Vilket instrument har svarta och vita tangenter?", a: ["Piano", "Gitarr", "Trummor", "Flöjt"], r: "Piano", cat: "MUSIK" },
    { q: "Vad heter det när man tävlar i att springa 42 195 meter?", a: ["Maraton", "Sprint", "Stafett", "Triatlon"], r: "Maraton", cat: "SPORT" },
    { q: "Vilken är den vanligaste färgen på en brandbil i Sverige?", a: ["Röd", "Gul", "Blå", "Grön"], r: "Röd", cat: "ALLMÄNT" },
    { q: "Vad kallas en person som flyger ett flygplan?", a: ["Pilot", "Kapten", "Konduktör", "Chaufför"], r: "Pilot", cat: "ALLMÄNT" },
    { q: "Vilken dag kommer efter lördag?", a: ["Söndag", "Måndag", "Fredag", "Torsdag"], r: "Söndag", cat: "ALLMÄNT" },
    { q: "Hur många hjul har en vanlig personbil?", a: ["4", "2", "3", "5"], r: "4", cat: "ALLMÄNT" },
    { q: "Vad får man om man fryser ner vatten?", a: ["Is", "Snö", "Ånga", "Regn"], r: "Is", cat: "VETENSKAP" },
    { q: "Vilket djur säger 'Muuuu'?", a: ["Ko", "Häst", "Får", "Gris"], r: "Ko", cat: "NATUR" },
    { q: "Vad heter den runda saken man kastar i basket?", a: ["Boll", "Puck", "Klot", "Ring"], r: "Boll", cat: "SPORT" },
    { q: "Vilken färg har ett moget bananskal?", a: ["Gult", "Rött", "Blått", "Lila"], r: "Gult", cat: "NATUR" },
    // --- DISNEY & ANIMERAT ---
    { q: "I vilken animerad Disney-film dyker Bowser upp i en statistroll på ett stödgruppsmöte för skurkar?", a: ["Röjar-Ralf", "Trassel", "Zootropolis", "Bolt"], r: "Röjar-Ralf", cat: "FILM" },
    { q: "Vad heter den talande snögubben i Frost som älskar varma kramar?", a: ["Olof", "Sven", "Kristoffer", "Hans"], r: "Olof", cat: "FILM" },
    { q: "Vilken färg är det på draken Mushu i filmen Mulan?", a: ["Röd", "Grön", "Blå", "Guld"], r: "Röd", cat: "FILM" },
    { q: "Vad heter flickan som besöker underlandet i Disneys klassiker?", a: ["Alice", "Wendy", "Belle", "Aurora"], r: "Alice", cat: "FILM" },
    { q: "Vilket djur är 'Stampis' i filmen Bambi?", a: ["Kanin", "Rådjur", "Skunk", "Ekorre"], r: "Kanin", cat: "FILM" },
    { q: "Vad heter den lilla krabban som sjunger 'Havet är djupt' i Den lilla sjöjungfrun?", a: ["Sebastian", "Flundra", "Scuttle", "Louis"], r: "Sebastian", cat: "FILM" },
    { q: "I vilken film hittar vi den flygande mattan och anden i lampan?", a: ["Aladdin", "Herkules", "Tarzan", "Pinocchio"], r: "Aladdin", cat: "FILM" },
    { q: "Vad heter huvudkaraktären i Moana (Viana på svenska)?", a: ["Moana", "Maui", "Tala", "Heihei"], r: "Moana", cat: "FILM" },
    { q: "Vilken Disney-prinsessa har magiskt, extremt långt hår?", a: ["Rapunzel", "Tiana", "Merida", "Cinderella"], r: "Rapunzel", cat: "FILM" },
    { q: "Vad heter den gamla mannen som flyger sitt hus med ballonger i filmen Upp?", a: ["Carl", "Russell", "Kevin", "Dug"], r: "Carl", cat: "FILM" },
    { q: "Vem är kungen av Pride Rock i början av Lejonkungen?", a: ["Mufasa", "Simba", "Scar", "Pumbaa"], r: "Mufasa", cat: "FILM" },
    { q: "Vilket yrke har pappa i Hitta Nemo?", a: ["Han är en clownfisk", "Han är tandläkare", "Han är kock", "Han är lärare"], r: "Han är en clownfisk", cat: "FILM" },
    { q: "Vad heter monstret med ett öga i Monsters Inc.?", a: ["Mike Wazowski", "James P. Sullivan", "Randall", "Boo"], r: "Mike Wazowski", cat: "FILM" },
    { q: "Vilken Disney-film utspelar sig i Paris och handlar om en råtta som vill laga mat?", a: ["Råttatouille", "Ringaren i Notre Dame", "Aristocats", "Bells äventyr"], r: "Råttatouille", cat: "FILM" },
    { q: "Vad heter de sju dvärgarna i Snövit (förutom Toker, Blyger och Glader)?", a: ["Trötter, Proppmätt, Kloker, Butter", "Trötter, Tokig, Sömntuta, Butter", "Trötter, Prosit, Kloker, Butter", "Trötter, Prosit, Kloker, Arger"], r: "Trötter, Prosit, Kloker, Butter", cat: "FILM" },
    { q: "Vilket djur är Maui i Moana känd för att kunna förvandla sig till med sin krok?", a: ["Falk", "Haj", "Ödle", "Allt möjligt"], r: "Allt möjligt", cat: "FILM" },
    { q: "Vad heter den lilla roboten som städar skräp på jorden i en Pixar-film?", a: ["WALL-E", "EVE", "Baymax", "R2-D2"], r: "WALL-E", cat: "FILM" },
    { q: "Vilken Disney-film handlar om en flicka som klär ut sig till en man för att gå med i armén?", a: ["Mulan", "Pocahontas", "Tiana", "Merida"], r: "Mulan", cat: "FILM" },
    { q: "Vad heter hunden som blir kär i Lady i Lady och Lufsen?", a: ["Lufsen", "Tramp", "Buster", "Pongo"], r: "Lufsen", cat: "FILM" },
    { q: "I vilken film kämpar Mr. Incredible och hans familj mot skurken Syndrome?", a: ["Superhjältarna", "Megamind", "DUM-E", "Big Hero 6"], r: "Superhjältarna", cat: "FILM" },

    // --- ACTION- & ÄVENTYRSFILMER ---
    { q: "Vem spelar rollen som Ethan Hunt i Mission: Impossible-filmerna?", a: ["Tom Cruise", "Brad Pitt", "Keanu Reeves", "Matt Damon"], r: "Tom Cruise", cat: "FILM" },
    { q: "Vad heter den artificiella intelligensen som försöker utrota mänskligheten i Terminator-filmerna?", a: ["Skynet", "HAL 9000", "Ultron", "VIKI"], r: "Skynet", cat: "FILM" },
    { q: "Vilket vapen förknippas mest med Indiana Jones?", a: ["Piska", "Svärd", "Bågskytte", "Laser"], r: "Piska", cat: "FILM" },
    { q: "Vad heter Keanu Reeves karaktär i The Matrix?", a: ["Neo", "Morpheus", "Trinity", "Smith"], r: "Neo", cat: "FILM" },
    { q: "Vem regisserade action-klassikern Jurassic Park?", a: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Ridley Scott"], r: "Steven Spielberg", cat: "FILM" },
    { q: "Vilken skådespelare spelar John Wick?", a: ["Keanu Reeves", "Liam Neeson", "Bruce Willis", "Jason Statham"], r: "Keanu Reeves", cat: "FILM" },
    { q: "Vad heter den brittiska spionen med kodnamn 007?", a: ["James Bond", "Jason Bourne", "Jack Reacher", "Kingsman"], r: "James Bond", cat: "FILM" },
    { q: "I vilken actionfilm hittar vi repliken 'I'll be back'?", a: ["The Terminator", "Predator", "Rambo", "Die Hard"], r: "The Terminator", cat: "FILM" },
    { q: "Vem spelar huvudrollen som Katniss Everdeen i The Hunger Games?", a: ["Jennifer Lawrence", "Emma Watson", "Scarlett Johansson", "Zendaya"], r: "Jennifer Lawrence", cat: "FILM" },
    { q: "Vad heter fartyget i Pirates of the Caribbean som kapten Jack Sparrow vill ha tillbaka?", a: ["The Black Pearl", "The Flying Dutchman", "The Queen Anne's Revenge", "The Interceptor"], r: "The Black Pearl", cat: "FILM" },
    { q: "Vilken stad förstörs i början av filmen Die Hard (Nakatomi Plaza ligger där)?", a: ["Los Angeles", "New York", "Chicago", "Miami"], r: "Los Angeles", cat: "FILM" },
    { q: "Vem spelar rollen som Wolverine i X-Men filmerna?", a: ["Hugh Jackman", "Ryan Reynolds", "Chris Evans", "Tom Hardy"], r: "Hugh Jackman", cat: "FILM" },
    { q: "Vad heter skurken i Avengers: Infinity War som vill utplåna hälften av universum?", a: ["Thanos", "Loki", "Ultron", "Hela"], r: "Thanos", cat: "FILM" },
    { q: "I vilken actionfilmserie kör man snabba bilar och pratar mycket om 'familjen'?", a: ["Fast & Furious", "Need for Speed", "Mad Max", "Transporter"], r: "Fast & Furious", cat: "FILM" },
    { q: "Vem spelar Batman i The Dark Knight-trilogin?", a: ["Christian Bale", "Ben Affleck", "Michael Keaton", "Robert Pattinson"], r: "Christian Bale", cat: "FILM" },
    { q: "Vad heter hobbiten som bär den enda ringen till Mordor?", a: ["Frodo Bagger", "Sam Gamgi", "Bilbo Bagger", "Merry"], r: "Frodo Bagger", cat: "FILM" },
    { q: "Vilken skådespelare spelar Iron Man i Marvel-filmerna?", a: ["Robert Downey Jr.", "Chris Pratt", "Chris Hemsworth", "Mark Ruffalo"], r: "Robert Downey Jr.", cat: "FILM" },
    { q: "Vad heter den ökenplanet som stora delar av filmen Dune utspelar sig på?", a: ["Arrakis", "Tatooine", "Mars", "Pandora"], r: "Arrakis", cat: "FILM" },
    { q: "Vem regisserade Interstellar och Inception?", a: ["Christopher Nolan", "Quentin Tarantino", "Martin Scorsese", "Denis Villeneuve"], r: "Christopher Nolan", cat: "FILM" },
    { q: "I filmen Mad Max: Fury Road, vad kallas den eftertraktade vätskan som alla slåss om?", a: ["Aqua Cola", "Guzzoline", "Milk", "Nitro"], r: "Aqua Cola", cat: "FILM" },

    { q: "Vad heter det när det regnar och åskar samtidigt?", a: ["Oväder", "Solsken", "Snöstorm", "Dimma"], r: "Oväder", cat: "NATUR" }
];

// --- 2. KONSTRUKTION & UI-TEXTER ---
const forbiddenWordsArr = [
    "neger", "nigger", "svartskalle", "blatte", "fitta", "kuk", "hora", "slampa", "bög", "jävel", "helvete", "skit", "idiot", "mongo", "retard",
    "pucko", "luder", "arsle", "bitch", "faggot", "kukhuvud", "piss", "knulla", "våldtäkt", "pedofil", "hitler", "stalin", "nazist", "is", "isis",
    "bajs", "kiss", "rumpa", "anus", "stjärt", "prutt", "toalett", "toa", "avföring", "urin", "balle", "pung", "bröst", "tuttar", "penis", "vagina"
];

const ui = {
    startBtn: "BOOT PROTOCOL 🚀",
    gamerTag: "DITT GAMER-TAG:",
    scoreText: "av 30 poäng.",
    kamekTitle: "DU BLEV FÅNGAD! 🪄✨",
    kamekFoul: "Du försökte fuska eller lämna sidan. Som straff har Kamek spelat sitt skratt och stängt ner ditt quiz.",
    kamekReason: "Anledning: ",
    reboot: "FÖRSÖK IGEN 🚀",
    correct: "RÄTT SVAR!",
    wrong: "FEL SVAR!",
    perfect: "BETYG: MVG++ (30/30) – PERFEKT! Operatör Psl631 skickar luftskeppet. Hämta din vinst!",
    high: "BETYG: MVG – STRÅLANDE! Du är en elit-gamer.",
    average: "BETYG: VG – VÄL GODKÄNT. Kamek skrattar åt din insats, men du är ändå bra.",
    low: "BETYG: G – GODKÄNT. Du klarade dig, men du måste öva mer.",
    fail: "BETYG: IG – UNDERKÄNT. Resultatet räckte inte ända fram.",
    critical: "BETYG: IG- (TOTALT MISSLYCKANDE). Toad gråter.",
    batteryLow: "⚠️ [VARNING] STRÖMFÖRSÖRJNING BRUTEN. ANSLUT LADDARE FÖR OPTIMAL TERMINALPRESTANDA.",
    noInternet: "[VARNING] Offline: Dina resultat sparas inte till molnet och istället sparas lokalt**",
    adBlock: "[SYSTEM] AdBlock detekterad, stäng av för maximal prestanda",
    nameWarning: "[SYSTEM] Ditt namn flaggades som offensivt och har ändrats till 'Gäst'",
    syncing: "[SYSTEM] SYNKRONISERAR MED MOLNET...",
    syncComplete: "[SYSTEM] DATA ÖVERFÖRD TILL CENTRALEN"
};

/**
 * Navigeringsfunktioner för Instruktionsskärmen
 */
function showInstructions() {
    // Spela ljud om det finns
    if (sfx.boop) playSound(sfx.boop);
    
    // Växla skärmar
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("instructions-screen").classList.remove("hidden");
}

function hideInstructions() {
    if (sfx.boop) playSound(sfx.boop);
    
    document.getElementById("instructions-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
}

// --- 3. VARIABLER ---
let playerName = "";
let score = 0;
let currentIdx = 0;
let lives = 3;
let maxLives = 3;
let shuffledQuestions = []; // LÄGG TILL DENNA RAD
let currentMode = 'tournament';
let lifelines = {
    fiftyFifty: true,
    skip: true,
    analysis: true,
    reboot: true
};
let questionStartTime = 0;
let stats = { answerTimes: [], categories: {} };
window.quizActive = false;

// --- 4. LJUD & SFX ---
const sfx = {
    pling: new Audio('pling.mp3'),
    boop: new Audio('boooop.mp3'),
    kamek: new Audio('kamek.mp3'),
    denied: new Audio('denied.wav'), // Windows XP DONG-ljudet
    gameOver: new Audio('mario_game_over.mp3'),
    hacker: new Audio('hacker.mp3'),
    glitch: new Audio('reboot.mp3'),
    warp: new Audio('skip.mp3'),
    ana: new Audio('analysis.mp3'),
    yay: new Audio('yay.mp3'),
    cash: new Audio('cash_register.mp3'),
    trombone: new Audio('sad_trombone.mp3'),
    loser: new Audio('mk64_loser.wav')
};

function playSound(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

// --- 5. SYSTEMFUNKTIONER ---
function showToast(msg, color) {
    const toast = document.createElement("div");
    toast.style = `position:fixed; top:20px; right:20px; background:${color}; color:white; padding:15px; font-family:'VT323'; z-index:10000; border:2px solid white; box-shadow:5px 5px 0px black; pointer-events:none;`;
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 6000);
}

async function checkSystemStatus() {
    // Sekundär kontroll för mobila enheter
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        document.body.innerHTML = `<div style="background:black; color:red; height:100vh; display:flex; align-items:center; justify-content:center; font-family:'Press Start 2P'; text-align:center; padding:20px;">[ SYSTEM ERROR ]<br><br>MOBIL ENHET EJ TILLÅTEN</div>`;
        return;
    }

    if (!navigator.onLine) {
        showToast(ui.noInternet, "#ff0000");
    }

    // AdBlock-detektering
    const adTest = document.createElement('div');
    adTest.innerHTML = '&nbsp;';
    adTest.className = 'adsbygoogle';
    adTest.style.position = 'absolute';
    adTest.style.left = '-999px';
    document.body.appendChild(adTest);

    window.setTimeout(() => {
        if (adTest.offsetHeight === 0) {
            showToast(ui.adBlock, "#6600cc");
        }
        adTest.remove();
    }, 100);

    // Batteristatus
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            const checkBattery = () => { if (!battery.charging) showToast(ui.batteryLow, "#ff6600"); };
            battery.addEventListener('chargingchange', checkBattery);
            checkBattery();
        });
    }
}

function sanitizeName(name) {
    let clean = name.trim();
    if (!clean || clean.toLowerCase() === "gäst") return "Gäst";
    const allowedPattern = /^[a-zA-ZåäöÅÄÖ0-9]+$/;
    if (!allowedPattern.test(clean) || forbiddenWordsArr.some(word => clean.toLowerCase().includes(word))) {
        showToast(ui.nameWarning, "red");
        return "Gäst";
    }
    return clean.length > 15 ? clean.substring(0, 15) : clean;
}

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(b => b.style.borderColor = "#333");
    const activeBtn = document.getElementById('btn-' + (mode === 'tournament' ? 'tournament' : 'classic'));
    if (activeBtn) activeBtn.style.borderColor = "#00ff00";
}

function updateLivesUI() {
    const container = document.getElementById("lives-container");
    if (!container) return;
    container.innerHTML = "";
    if (currentMode === 'tournament') {
        container.innerHTML = "<span style='color:gold; font-family:VT323;'>[ OÄNDLIGA LIV ]</span>";
        return;
    }
    for (let i = 1; i <= maxLives; i++) {
        const heart = document.createElement("img");
        heart.style.width = "25px";
        heart.src = i <= lives ? "heart_full.png" : "heart_empty.png";
        container.appendChild(heart);
    }
}

// --- 6. SPEL-LOGIK ---
function startQuiz() {
    console.log("System: Initierar uppstart...");
    
    const nameInput = document.getElementById("player-name");
    if (!nameInput) return; // Säkerhetskoll

    playerName = sanitizeName(nameInput.value);
    
    // Hämta skärmarna
    const startScreen = document.getElementById("start-screen");
    const loadingScreen = document.getElementById("loading-container");
    const quizScreen = document.getElementById("quiz-screen");

    // Steg 1: Dölj start, visa laddning
    if (startScreen) startScreen.classList.add("hidden");
    if (loadingScreen) loadingScreen.classList.remove("hidden");

    // Steg 2: Vänta 1.5 sekunder (simulerad laddning)
    setTimeout(() => {
        if (loadingScreen) loadingScreen.classList.add("hidden");
        if (quizScreen) quizScreen.classList.remove("hidden");

// --- HÄR ÄR FIXEN: AKTIVERA KAMEK ---
        window.quizActive = true; 
        // ------------------------------------

        // Blanda frågor och starta
        shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
        currentIdx = 0;
        score = 0;
        
        // Starta gränssnittet
        if (typeof updateLivesUI === "function") updateLivesUI();
        showQuestion();
    }, 1500);
}

function showQuestion() {
    const q = shuffledQuestions[currentIdx];
    questionStartTime = Date.now(); // För statistik
    
    // Uppdatera texter
    document.getElementById("progress").innerText = `STATION 24 - PROTOKOLL ${currentIdx + 1} / 30`;
    
    const catDisplay = document.getElementById("question-category");
    if (catDisplay) catDisplay.innerText = `[ KATEGORI: ${q.cat || "ALLMÄNT"} ]`;

    document.getElementById("question-text").innerText = q.q;
    
    // Hitta rätt container (options-grid)
    const grid = document.getElementById("options-grid");
    grid.innerHTML = ""; // Rensa gamla knappar
    
    // Slumpa ordningen på svarsalternativen för just denna fråga
    const randomizedAnswers = [...q.a].sort(() => Math.random() - 0.5);
    
    randomizedAnswers.forEach(alt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        // Vi lägger texten i en span för att matcha CSS-styling om det behövs
        btn.innerHTML = `<span>${alt}</span>`; 
        btn.onclick = () => checkAnswer(alt, btn);
        grid.appendChild(btn);
    });
}

function checkAnswer(choice, btn) {
    const q = shuffledQuestions[currentIdx];
    const allBtns = document.querySelectorAll('.option-btn');
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    stats.answerTimes.push(timeTaken);

    // Inaktivera alla knappar direkt
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    const monitor = document.querySelector('.monitor-frame'); // Eller .main-container
    const beepText = document.getElementById('beep-overlay');

    if (choice === q.r) {
        score++;
        playSound(sfx.pling);
        btn.classList.add("correct-flash");
        
        // Gå vidare efter normal delay
        setTimeout(nextQuestion, 1500);
    } else {
        // --- DRAMATISKT FEL-SVAR PROTOKOLL ---
        
        // 1. Spela ljudet omedelbart
        playSound(sfx.boop); 

        // 2. Aktivera skärmskakning och rött blink
        if (monitor) monitor.classList.add('screen-damage');
        
        // 3. Visa BÖÖÖÖP-texten
        if (beepText) beepText.style.display = 'block';

        // 4. Markera den klickade knappen som fel
        btn.classList.add("wrong-flash");

        // 5. Visa det rätta svaret för spelaren
        allBtns.forEach(b => { 
            if(b.innerText.trim() === q.r) b.classList.add("correct-flash"); 
        });

        // Hantera liv i Classic Mode
        if (currentMode === 'classic') {
            lives--;
            updateLivesUI()
            if (lives <= 0) { 
                // Om liven är slut, städa upp effekten och visa Game Over
                setTimeout(() => {
                    cleanupWrongAnswerEffects(monitor, beepText);
                    showGameOver();
                }, 1400); // Lite längre delay för att Game Over ska kännas
                return; // Avbryt här
            }
        }

        // Gå vidare till nästa fråga efter att effekten är klar
        setTimeout(() => {
            cleanupWrongAnswerEffects(monitor, beepText);
            nextQuestion();
        }, 1800); // Längre delay (0.3s skak + tid att läsa rätt svar)
    }
}

// Hjälpfunktion för att städa upp CSS-klasser och text
function cleanupWrongAnswerEffects(monitor, beepText) {
    if (monitor) monitor.classList.remove('screen-damage');
    if (beepText) beepText.style.display = 'none';
}

// Hjälpfunktion för att hantera stegen till nästa fråga
function nextQuestion() {
    currentIdx++;
    if (currentIdx < 30) {
        showQuestion();
    } else {
        showResults();
    }
}

function showGameOver() {
    window.quizActive = false;
    playSound(sfx.gameOver);
    document.getElementById("quiz-screen").classList.add("hidden");
    const res = document.getElementById("result-screen");
    res.classList.remove("hidden");
    res.innerHTML = `
        <h1 style="color:red; font-family:'Press Start 2P';">GAME OVER</h1>
        <p style="font-family:VT323; font-size:1.5rem;">Systemet fick slut på energi (liv).</p>
        <p style="color:yellow; font-family:VT323;">Poäng: ${score}/30</p>
        <button onclick="location.reload()" class="menu-btn" style="margin-top:20px;">ÅTERSTÄLL TERMINAL 🚀</button>
    `;
}

// Central varningsfunktion för använda livlinor
function triggerLifelineWarning() {
    if (sfx.denied) {
        sfx.denied.currentTime = 0;
        sfx.denied.play().catch(e => console.log("Ljud blockerat:", e));
    }
    showToast("LIVLINA REDAN ANVÄND", "#ff0000");
    
    const quizScreen = document.getElementById("quiz-screen");
    if (quizScreen) {
        quizScreen.classList.add("error-shake");
        setTimeout(() => quizScreen.classList.remove("error-shake"), 500);
    }
}

// 1. 50/50
function useFiftyFifty() {
    console.log("Försöker använda 50/50...");
    if (!lifelines.fiftyFifty) { triggerLifelineWarning(); return; }
    
    playSound(sfx.hacker);
    const currentQ = shuffledQuestions[currentIdx];
    const buttons = Array.from(document.querySelectorAll(".option-btn"));
    
    let removed = 0;
    buttons.sort(() => Math.random() - 0.5).forEach(btn => {
        if (btn.innerText !== currentQ.r && removed < 2) {
            btn.style.visibility = "hidden";
            removed++;
        }
    });

    lifelines.fiftyFifty = false;
    const btnElement = document.getElementById("fifty-fifty-btn");
    if (btnElement) btnElement.classList.add("used");
    showToast("50/50 AKTIVERAD", "#00ff00");
}

// 2. SKIP (Byt fråga)
function useSkipQuestion() {
    console.log("Försöker använda Skip...");
    if (!lifelines.skip) { triggerLifelineWarning(); return; }
    
    playSound(sfx.skip);
    lifelines.skip = false;
    const btnElement = document.getElementById("skip-btn");
    if (btnElement) btnElement.classList.add("used");

    currentIdx++;
    if (currentIdx < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// 3. ANALYS (Tips)
function useAnalysis() {
    console.log("Försöker använda Analys...");
    if (!lifelines.analysis) { triggerLifelineWarning(); return; }
    
    playSound(sfx.analysis);
    const currentQ = shuffledQuestions[currentIdx];
    showToast(`ANALYS: SVARET BÖRJAR PÅ "${currentQ.r.charAt(0)}"`, "#00ccff");
    
    lifelines.analysis = false;
    const btnElement = document.getElementById("analysis-btn");
    if (btnElement) btnElement.classList.add("used");
}

// 4. REBOOT (Extra liv)
function useReboot() {
    console.log("Försöker använda Reboot...");
    if (!lifelines.reboot) { triggerLifelineWarning(); return; }
    
    if (lives >= 3) {
        showToast("SYSTEMET REDAN OPTIMERAT (FULLA LIV)", "#ffffff");
        return;
    }

    playSound(sfx.reboot);
    lives++;
    if (typeof updateLivesUI === "function") updateLivesUI();
    
    lifelines.reboot = false;
    const btnElement = document.getElementById("reboot-btn");
    if (btnElement) btnElement.classList.add("used");
}

// --- 8. AVSLUT & RESULTAT ---
function showResults() {
    window.quizActive = false;
    document.getElementById("quiz-screen").classList.add("hidden");
    const res = document.getElementById("result-screen");
    res.classList.remove("hidden");
    res.innerHTML = `<p style="color:cyan; font-family:'VT323';">${ui.syncing}</p><div class="fake-progress-bar"></div>`;

    setTimeout(() => {
        res.innerHTML = `
            <h2 id="result-header">ANALYS SLUTFÖRD</h2>
            <div id="toad-sad-container" class="hidden"><img src="sad_toad.jfif" style="width:100px; border:2px solid red;"></div>
            <p id="result-score" style="font-size:1.8rem; color:#fff;">${playerName}: ${score}/30</p>
            <p id="result-comment" style="color:yellow; font-size:1.1rem; font-family:VT323;"></p>
            <div id="advanced-stats" style="font-family:VT323; text-align:left; border-top:1px solid #333; padding-top:10px;"></div>
            <div id="leaderboard-display"></div>
            <button class="menu-btn" onclick="location.reload()" style="margin-top:20px;">OMSTART 🚀</button>
        `;
        
        const avgTime = (stats.answerTimes.reduce((a,b)=>a+b,0) / stats.answerTimes.length).toFixed(1);
        const comment = document.getElementById("result-comment");
        
        if (score === 30) { comment.innerText = ui.perfect; playSound(sfx.yay); }
        else if (score >= 23) { comment.innerText = ui.high; playSound(sfx.cash); }
        else if (score >= 14) { comment.innerText = ui.average; playSound(sfx.kamek); }
        else if (score >= 6) { comment.innerText = ui.fail; playSound(sfx.trombone); }
        else { comment.innerText = ui.critical; playSound(sfx.loser); document.getElementById("toad-sad-container").classList.remove("hidden");
        showToast("VARNING: MEKANISKT DISKFEL DETEKTERAT", "#ff0000");}

        document.getElementById("advanced-stats").innerHTML = `
            <p>> SNITT-TID PER FRÅGA: ${avgTime}s</p>
            <p>> PRECISION: ${Math.round((score/30)*100)}%</p>
        `;
        updateLeaderboard();
        showToast(ui.syncComplete, "green");
    }, 2000);
}

function updateLeaderboard() {
    let lb = JSON.parse(localStorage.getItem('station24_lb')) || [];
    lb.push({ name: playerName, score: score });
    lb.sort((a,b) => b.score - a.score);
    localStorage.setItem('station24_lb', JSON.stringify(lb.slice(0, 5)));
    let html = "<h3>--- HALL OF FAME ---</h3>";
    lb.slice(0,5).forEach((e, i) => { html += `<p>${i + 1}. ${e.name} - ${e.score} XP</p>`; });
    document.getElementById("leaderboard-display").innerHTML = html;
}

/* ===========================================================
   KAMEK AGGRESSIVE ANTI-CHEAT PROTOCOL (LOCKDOWN v4.1)
   =========================================================== */

// 1. Detektera flikbyte eller om fönstret tappar fokus
window.addEventListener('blur', () => { 
    if (window.quizActive) {
        triggerKamekVrede("DETEKTERAD FOKUS-FÖRLUST (FÖRSÖK TILL GOOGLING)"); 
    }
});

// 2. Blockera högerklick (förhindra "Inspektera")
window.addEventListener('contextmenu', (e) => {
    if (window.quizActive) {
        e.preventDefault();
        triggerKamekVrede("HÖGERKLICK DETEKTERAT (FÖRBJUDEN ÅTGÄRD)");
    }
});

// --- KAMEK STYRPLATTA-DETEKTOR ---
window.addEventListener('wheel', (e) => {
    // Kollar om scroll-värdet inte är ett heltal eller om delta-värdet är för litet, vilket indikerar en trackpad
    if (window.quizActive && (!Number.isInteger(e.deltaY) || (Math.abs(e.deltaY) > 0 && Math.abs(e.deltaY) < 20))) {
        triggerKamekVrede("STYRPLATTA_ANVÄNDS - Sluta smeka din laptop! Använd en riktig datormus för Station 24 Protocol. Kamek accepterar endast mekanisk precision!");
    }
}, { passive: false });

// 3. Blockera F12 och Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
window.addEventListener('keydown', (e) => {
    if (!window.quizActive) return;

    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
        triggerKamekVrede("F12 DETEKTERAT (SYSTEMINTRÅNGSFÖRSÖK)");
    }
    
    // Ctrl+Shift+I (Inspektera), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element)
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        triggerKamekVrede("DEVELOPER TOOLS GENVÄG DETEKTERAD");
    }

    // Ctrl+U (Visa källkod)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        triggerKamekVrede("SOURCE VIEW DETEKTERAD");
    }
});

// 4. Den uppdaterade övertagningsfunktionen (Skrollbar & Lugnt pulserande)
function triggerKamekVrede(reason) {
    window.quizActive = false;
    
    // Stoppa all annan musik och spela Kameks skratt
    Object.values(sfx).forEach(sound => { sound.pause(); sound.currentTime = 0; });
    playSound(sfx.kamek);
    
    // Injicera CSS för det lugna pulserandet
    const styleInject = document.createElement('style');
    styleInject.innerHTML = `
        @keyframes kamek-pulse {
            0% { border-color: #ff0000; box-shadow: 0 0 20px #550000; }
            50% { border-color: #550000; box-shadow: 0 0 10px #220000; }
            100% { border-color: #ff0000; box-shadow: 0 0 20px #550000; }
        }
        .kamek-overlay {
            animation: kamek-pulse 2.5s infinite ease-in-out; /* Lugn puls */
        }
    `;
    document.head.appendChild(styleInject);
    document.title = "🛑 Quiz avbrutet av Kamek";
    
    // Rensa sidan och lås den i rött/svart kaos (nu skrollbar via overflow-y: auto)
    document.body.innerHTML = `
        <div class="kamek-overlay" style="background:#000; color:#ff0000; height:100vh; width:100vw; position:fixed; top:0; left:0; z-index:9999999; display:block; font-family:'Press Start 2P', cursive; text-align:center; padding:20px; border: 15px solid #ff0000; box-sizing: border-box; overflow-y: auto; -webkit-overflow-scrolling: touch;">
            
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100%; padding: 20px 0;">
                
                <h1 style="font-size:2.8rem; margin-bottom: 30px; text-shadow: 8px 8px #550000; line-height: 1.1;">${ui.kamekTitle}</h1>
                
                <div style="background: red; padding: 10px; margin-bottom: 30px; display: inline-block;">
                    <img src="kamek.jfif" style="width:220px; display:block; border:5px solid black;">
                </div>

                <p style="font-family:'VT323'; font-size:2.2rem; color:yellow; background: black; padding: 15px; border: 2px dashed yellow; margin-bottom: 20px; max-width: 90%;">
                    ÖVERTRÄDELSE: ${reason}
                </p>
                
                <p style="font-family:'VT323'; color:#fff; font-size:1.4rem; margin-top: 20px; max-width: 750px; line-height: 1.3; margin-bottom: 10px;">
                    ${ui.kamekFoul}<br>Ditt deltagande i Station 24 har avbrutits och Operatör Psl631 har informerats.
                </p>

                <div style="margin-top:40px; margin-bottom: 40px;">
                    <button onclick="location.reload()" style="background:#ff0000; color:white; border:4px solid white; padding:20px 40px; cursor:pointer; font-family:'Press Start 2P'; font-size:1.1rem; box-shadow: 5px 5px 0px #550000; transition: transform 0.1s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        ${ui.reboot}
                    </button>
                </div>

                <div style="width:100%; opacity:0.3; font-size:0.6rem; letter-spacing:2px; font-family: 'Press Start 2P';">
                    ERROR_CODE: CHEAT_DETECTED_STATION_24_V4.1
                </div>
            </div>
        </div>
    `;
}

// --- 6. INITIALISERING ---
window.addEventListener('load', () => {
    // Kontrollera att funktionen finns innan vi kör den
    if (typeof checkSystemStatus === "function") {
        checkSystemStatus();
    } else {
        console.error("System check failed: Function not found.");
    }
});

// VARNING: Se till att det INTE finns några extra tecken eller måsvingar under denna rad!