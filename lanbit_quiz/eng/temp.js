const questions = [
    // LANBIT & NORDISKA LAN
    { q: "Vilket år arrangerades LANBIT för allra första gången?", a: ["2011", "2009", "2013", "2015"], r: "2011", cat: "LANBIT" },
    { q: "Vad är LANBIT:s främsta ledord för sina deltagare?", a: ["Gemenskap & Drogfritt", "Endast Pro-gamers", "Bäst hårdvara vinner", "Ingen sömn tillåten"], r: "Gemenskap & Drogfritt", cat: "LANBIT" },
    { q: "Vilket svenskt LAN innehar världsrekordet som världens största LAN-party?", a: ["DreamHack", "Birdie", "NärCon", "LANBIT"], r: "DreamHack", cat: "LAN-KULTUR" },
    { q: "Vad heter Norges största LAN som hålls i Vikingskipet varje påsk?", a: ["The Gathering", "Polar Party", "Gamer's Paradise", "Oslo LAN"], r: "The Gathering", cat: "LAN-KULTUR" },
    { q: "Vilket finskt event är både ett LAN och en av världens största demoscener?", a: ["Assembly", "Lantrek", "Vectorama", "Digiexpo"], r: "Assembly", cat: "LAN-KULTUR" },
    { q: "Vad står förkortningen 'LAN' för i LANBIT?", a: ["Local Area Network", "Large Area Node", "Long Active Night", "Light And Noise"], r: "Local Area Network", cat: "TECH" },
    { q: "Vilken typ av turnering är oftast mest högljudd på LANBIT?", a: ["Smash / Mario Kart", "Schack", "Excel-speedrun", "Patiens"], r: "Smash / Mario Kart", cat: "LANBIT" },

    // EUROVISION & MUSIK
    { q: "I vilken stad arrangeras Eurovision Song Contest 2026?", a: ["Wien", "Stockholm", "Berlin", "Oslo"], r: "Wien", cat: "MUSIK" },
    { q: "Vem representerar Sverige i Eurovision Song Contest 2026?", a: ["Felicia", "Dotter", "Liamoo", "Loreen"], r: "Felicia", cat: "MUSIK" },
    { q: "Vilken svensk grupp vann Eurovision 1974 med låten 'Waterloo'?", a: ["ABBA", "Herreys", "Roxette", "The Real Group"], r: "ABBA", cat: "MUSIK" },
    { q: "Vem vann för Sverige 2012 med den ikoniska låten 'Euphoria'?", a: ["Loreen", "Carola", "Charlotte Perrelli", "Måns Zelmerlöw"], r: "Loreen", cat: "MUSIK" },
    { q: "Vad kallas det inom filmvärlden när man ersätter originalspråket med ett annat, t.ex. svenskt tal på en engelsk film?", a: ["Dubbning", "Subbing", "Rendering", "Remixing"], r: "Dubbning", cat: "FILM" },
    
    // DATOR, TECH & SYSTEM
    { q: "Vad står förkortningen 'OS' för i datorsammanhang?", a: ["Operating System", "Optical Sensor", "Online Storage", "Output Sound"], r: "Operating System", cat: "TECH" },
    { q: "Vilken komponent ansvarar för att visa grafik på din skärm?", a: ["Grafikkort (GPU)", "Moderkort", "Nätaggregat", "Ljudkort"], r: "Grafikkort (GPU)", cat: "HÅRDVARA" },
    { q: "Vilket spelkonsol drabbades av det omfattande hårdvarufelet 'Red Ring of Death'?", a: ["Xbox 360", "Playstation 3", "Nintendo Wii", "Sega Dreamcast"], r: "Xbox 360", cat: "KONSOL" },
    { q: "Vilket av följande är en giltig IPv4-adress?", a: ["192.168.1.254", "256.0.0.1", "10.0.0.2.1", "172.16.256.1"], r: "192.168.1.254", cat: "NÄTVERK" },
    { q: "Vilket företag äger och tillverkar Xbox?", a: ["Microsoft", "Sony", "Nintendo", "Apple"], r: "Microsoft", cat: "TECH" },
    { q: "Vilket operativsystem har en pingvin som maskot?", a: ["Linux", "Windows", "MacOS", "Android"], r: "Linux", cat: "TECH" },
    { q: "Vad kallas datorns huvudprocessor med tre bokstäver?", a: ["CPU", "GPU", "RAM", "HDD"], r: "CPU", cat: "HÅRDVARA" },
    { q: "Vilken port användes för runda mus-kontakter förr?", a: ["PS/2", "USB", "VGA", "HDMI"], r: "PS/2", cat: "RETRO-TECH" },

    // MARIO GALAXY & FILM
    { q: "Vad heter den lilla stjärnvännen under Marios keps i Galaxy?", a: ["Luma", "Starry", "Twink", "Comet"], r: "Luma", cat: "NINTENDO" },
    { q: "Vem vaktar 'Comet Observatory' i Mario Galaxy?", a: ["Rosalina", "Daisy", "Pauline", "Peach"], r: "Rosalina", cat: "NINTENDO" },
    { q: "Vilken förvandling får Mario av en 'Bee Mushroom'?", a: ["Bi-Mario", "Flyg-Mario", "Sväv-Mario", "Honungs-Mario"], r: "Bi-Mario", cat: "NINTENDO" },
    { q: "Vem spelade Mario i otecknade filmen från 1993?", a: ["Bob Hoskins", "Danny DeVito", "Tom Hanks", "Mario Ahrens"], r: "Bob Hoskins", cat: "FILM" },
    { q: "Vem gjorde rösten till Bowser i filmen från 2023?", a: ["Jack Black", "Chris Pratt", "Seth Rogen", "Vin Diesel"], r: "Jack Black", cat: "FILM" },
    { q: "I 2023 års film, vad heter det rike som Donkey Kong bor i?", a: ["Jungle Kingdom", "Mushroom Kingdom", "Ice Kingdom", "Kong Land"], r: "Jungle Kingdom", cat: "FILM" },

    // RETRO & SPELKULTUR
    { q: "Vilken konsol släpptes först i Sverige?", a: ["NES (Nintendo)", "Sega Mega Drive", "Super Nintendo", "PlayStation 1"], r: "NES (Nintendo)", cat: "RETRO" },
    { q: "Vilken bärbar konsol från 1989 krävde 4 st AA-batterier?", a: ["Game Boy", "Game Gear", "Atari Lynx", "Nintendo DS"], r: "Game Boy", cat: "RETRO" },
    { q: "Vad står förkortningen 'SNES' för?", a: ["Super Nintendo Entertainment System", "Super Network System", "Standard Network System", "Sega Nintendo"], r: "Super Nintendo Entertainment System", cat: "RETRO" },
    { q: "Vilken färg hade Game Boy-originalskärmen (kallad ärtsoppa)?", a: ["Grön", "Blå", "Grå", "Gul"], r: "Grön", cat: "RETRO" },
    { q: "Vilket år lanserades NES (Nintendo Entertainment System) i Sverige?", a: ["1986", "1983", "1989", "1991"], r: "1986", cat: "RETRO" },
    { q: "Vilket arkadspel skapade en brist på 100-yen mynt i Japan när det kom?", a: ["Space Invaders", "Pong", "Street Fighter", "Donkey Kong"], r: "Space Invaders", cat: "ARKAD" },
    { q: "Vilken färg har spöket 'Blinky' i Pac-Man?", a: ["Röd", "Blå", "Rosa", "Orange"], r: "Röd", cat: "ARKAD" },
    { q: "I vilket spel kämpar karaktärer som Link, Pikachu och Mario mot varandra?", a: ["Super Smash Bros", "Mario Party", "Playstation All-Stars", "Tekken"], r: "Super Smash Bros", cat: "NINTENDO" },
    { q: "Vilket var det första kommersiellt framgångsrika arkadspelet?", a: ["Pong", "Tetris", "Snake", "Pac-Man"], r: "Pong", cat: "ARKAD" },

    // CRASH BANDICOOT & SPYRO
    { q: "Vad heter den mask som skyddar Crash Bandicoot?", a: ["Aku Aku", "Uka Uka", "Ooga Booga", "Lani-Loli"], r: "Aku Aku", cat: "PLAYSTATION" },
    { q: "Vilken frukt samlar Crash Bandicoot på?", a: ["Wumpa Fruit", "Äpplen", "Mango", "Persika"], r: "Wumpa Fruit", cat: "PLAYSTATION" },
    { q: "Vad heter Crash Bandicoots ärkefiende?", a: ["Dr. Neo Cortex", "Dr. Eggman", "Dr. N. Gin", "Tiny Tiger"], r: "Dr. Neo Cortex", cat: "PLAYSTATION" },
    { q: "Vilket djur är Spyro?", a: ["Drake", "Ödla", "Dinosaurie", "Fladdermus"], r: "Drake", cat: "PLAYSTATION" },
    { q: "Vad heter Spyros lilla trollslände-vän?", a: ["Sparx", "Flash", "Buzz", "Spyro Jr"], r: "Sparx", cat: "PLAYSTATION" },
    { q: "Vem utvecklade de ursprungliga Crash Bandicoot-spelen till PS1?", a: ["Naughty Dog", "Insomniac Games", "Sucker Punch", "Rockstar"], r: "Naughty Dog", cat: "PS-HISTORIA" },
    { q: "Vilken färg har Spyro?", a: ["Lila", "Blå", "Grön", "Röd"], r: "Lila", cat: "PLAYSTATION" },
    { q: "Vad heter Crash Bandicoots syster?", a: ["Coco", "Tawna", "Nina", "Candy"], r: "Coco", cat: "PLAYSTATION" },

    // GEOGRAFI
    { q: "Vilket land har flest öar i världen?", a: ["Sverige", "Filippinerna", "Indonesien", "Kanada"], r: "Sverige", cat: "GEOGRAFI" },
    { q: "Vilken är världens största ö (som inte är en kontinent)?", a: ["Grönland", "Madagaskar", "Nya Guinea", "Borneo"], r: "Grönland", cat: "GEOGRAFI" },
    { q: "I vilket land ligger Afrikas högsta berg, Kilimanjaro?", a: ["Tanzania", "Kenya", "Etiopien", "Uganda"], r: "Tanzania", cat: "GEOGRAFI" },
    { q: "Vilket land kallas för 'Land of the Thunder Dragon'?", a: ["Bhutan", "Nepal", "Tibet", "Mongoliet"], r: "Bhutan", cat: "GEOGRAFI" },
    { q: "Vilken huvudstad ligger nordligast i världen?", a: ["Reykjavik", "Oslo", "Helsingfors", "Nuuk"], r: "Reykjavik", cat: "GEOGRAFI" },
    
    // MATEMATIK & LOGIK
    { q: "Alice har med sig 44 energidrycker till LANBIT. Hon planerar att dricka 3 stycken per dygn. Hur många hela drycker har hon kvar när det fjärde dygnet börjar?", a: ["35", "32", "38", "41"], r: "35", cat: "LOGIK" },
    { q: "Vad är roten ur 144?", a: ["12", "14", "10", "16"], r: "12", cat: "MATEMATIK" },
    { q: "Hur många bitar går det på en byte?", a: ["8", "10", "16", "4"], r: "8", cat: "TECH" }
];