/* ===========================================================
   STATION 24: OPERATOR PSL631 PROTOCOL v41.0 - FULL ENGLISH
   =========================================================== */

// --- 1. FRÅGEDATABAS ---
const questions = [
    // LANBIT & NORDIC LANs
        { q: "What year was LANBIT organized for the very first time?", a: ["2011", "2009", "2013", "2015"], r: "2011" },
        { q: "What is LANBIT's main motto for its participants?", a: ["Community & Drug-free", "Pro-gamers only", "Best hardware wins", "No sleep allowed"], r: "Community & Drug-free" },
        { q: "Which Swedish LAN holds the world record for being the world's largest LAN party?", a: ["DreamHack", "Birdie", "NärCon", "LANBIT"], r: "DreamHack" },
        { q: "What is the name of Norway's largest LAN held in Vikingskipet every Easter?", a: ["The Gathering", "Polar Party", "Gamer's Paradise", "Oslo LAN"], r: "The Gathering" },
        { q: "Which Finnish event is both a LAN and one of the world's largest demo scenes?", a: ["Assembly", "Lantrek", "Vectorama", "Digiexpo"], r: "Assembly" },
        { q: "What does the abbreviation 'LAN' stand for in LANBIT?", a: ["Local Area Network", "Large Area Node", "Long Active Night", "Light And Noise"], r: "Local Area Network" },
        { q: "Which type of tournament is usually the loudest at LANBIT?", a: ["Smash / Mario Kart", "Chess", "Excel speedrun", "Solitaire"], r: "Smash / Mario Kart" },
// Add to the 'en' array
{ q: "Which city is considered the birthplace of Hip Hop?", a: ["New York City (The Bronx)", "Los Angeles (Compton)", "Atlanta", "Detroit"], r: "New York City (The Bronx)" },
{ q: "Who released the legendary 1994 album 'Illmatic' at just 20 years old?", a: ["Nas", "Jay-Z", "The Notorious B.I.G.", "Rakim"], r: "Nas" },
{ q: "Which group was Dr. Dre, Ice Cube, and Eazy-E members of?", a: ["N.W.A", "Wu-Tang Clan", "Public Enemy", "Outkast"], r: "N.W.A" },
{ q: "Which artist won a Pulitzer Prize for Music for his album 'DAMN.'?", a: ["Kendrick Lamar", "J. Cole", "Drake", "Kanye West"], r: "Kendrick Lamar" },
{ q: "What is the name of the alter ego Eminem uses for his more violent and dark songs?", a: ["Slim Shady", "Stan", "The Rabbit", "Marshall Mathers"], r: "Slim Shady" },
{ q: "Which female rapper released the diamond-certified hit 'Bodak Yellow'?", a: ["Cardi B", "Nicki Minaj", "Megan Thee Stallion", "Doja Cat"], r: "Cardi B" },
{ q: "What was the stage name of the rapper Christopher Wallace, who was a key figure in East Coast hip hop?", a: ["The Notorious B.I.G.", "Tupac Shakur", "Method Man", "Snoop Dogg"], r: "The Notorious B.I.G." },
{ q: "Which Atlanta duo is responsible for the hits 'Ms. Jackson' and 'Hey Ya!'?", a: ["Outkast", "Migos", "Run the Jewels", "Rae Sremmurd"], r: "Outkast" },
{ q: "What does the 'Wu' in Wu-Tang Clan stand for, according to the group's lore?", a: ["Witty Unpredictable", "West Underground", "War Unit", "World Union"], r: "Witty Unpredictable" },
{ q: "Which producer is famous for the 'We The Best' ad-lib?", a: ["DJ Khaled", "Metro Boomin", "Dr. Dre", "Pharrell Williams"], r: "DJ Khaled" },
        // EUROVISION & MUSIC
        { q: "In which city is the Eurovision Song Contest 2026 being hosted?", a: ["Vienna", "Stockholm", "Berlin", "Oslo"], r: "Vienna" },
        { q: "Who won Eurovision 1974 for Sweden with the song 'Waterloo'?", a: ["ABBA", "Herreys", "Roxette", "The Real Group"], r: "ABBA" },
        { q: "Who won for Sweden in 2012 with the iconic song 'Euphoria'?", a: ["Loreen", "Carola", "Charlotte Perrelli", "Måns Zelmerlöw"], r: "Loreen" },
        { q: "What is it called in the film world when you replace the original language with another, e.g., Swedish speech on an English film?", a: ["Dubbing", "Subbing", "Rendering", "Remixing"], r: "Dubbing" },
// POKEMON & ANIME
        { q: "Which Pokémon is number 001 in the Pokédex?", a: ["Bulbasaur", "Pikachu", "Charmander", "Squirtle"], r: "Bulbasaur" },
        { q: "What is the name of Ash Ketchum's very first Pokémon?", a: ["Pikachu", "Caterpie", "Bulbasaur", "Pidgey"], r: "Pikachu" },
        { q: "In the world of Pokémon, which type is super effective against Water?", a: ["Electric", "Fire", "Rock", "Psychic"], r: "Electric" },
        { q: "What is the name of the main character in One Piece who wants to become King of the Pirates?", a: ["Monkey D. Luffy", "Zoro", "Sanji", "Naruto"], r: "Monkey D. Luffy" },
// --- RETRO MUSIC (70s, 80s, 90s) ---
        { q: "Which legendary band was led by Freddie Mercury and sang 'Bohemian Rhapsody'?", a: ["Queen", "Led Zeppelin", "The Rolling Stones", "Pink Floyd"], r: "Queen" },
        { q: "Who is known as the 'King of Pop' and released the world's best-selling album 'Thriller'?", a: ["Michael Jackson", "Prince", "George Michael", "Elvis Presley"], r: "Michael Jackson" },
        { q: "Which 80s star sang 'Like a Virgin' and 'Material Girl'?", a: ["Madonna", "Cyndi Lauper", "Whitney Houston", "Tina Turner"], r: "Madonna" },
        { q: "What was the name of the Spice Girls' debut hit single from 1996?", a: ["Wannabe", "Say You'll Be There", "2 Become 1", "Spice Up Your Life"], r: "Wannabe" },
        { q: "Which Nirvana song is often credited with bringing Grunge into the mainstream in 1991?", a: ["Smells Like Teen Spirit", "Come As You Are", "Lithium", "In Bloom"], r: "Smells Like Teen Spirit" },
        { q: "In the 80s, what did 'MTV' originally stand for?", a: ["Music Television", "Modern Television", "Movie Tracks Video", "Multi-Tone Voice"], r: "Music Television" },

        // --- MODERN MUSIC (2010s - 2020s) ---
        { q: "Which British artist released the hit albums '19', '21', '25', and '30'?", a: ["Adele", "Dua Lipa", "Ed Sheeran", "Sam Smith"], r: "Adele" },
        { q: "Which Canadian singer is known for the hits 'Blinding Lights' and 'Starboy'?", a: ["The Weeknd", "Justin Bieber", "Drake", "Shawn Mendes"], r: "The Weeknd" },
        { q: "What is the name of Miley Cyrus's 2023 mega-hit about buying herself flowers?", a: ["Flowers", "Wrecking Ball", "Midnight Sky", "Party in the USA"], r: "Flowers" },
        { q: "Which K-pop group became the first to perform at Coachella and has members named Lisa and Jennie?", a: ["BLACKPINK", "BTS", "Twice", "Red Velvet"], r: "BLACKPINK" },
        { q: "Who performed the Super Bowl Halftime Show in 2024?", a: ["Usher", "Rihanna", "Dr. Dre", "Bruno Mars"], r: "Usher" },

// --- Specific Geography ---
    { q: "Which of these countries does NOT have Arabic as an official language?", a: ["Iran", "Syria", "Egypt", "Algeria"], r: "Iran", cat: "GEOGRAPHY" },
    { q: "Which of these EU countries does NOT use the Euro as currency?", a: ["Hungary", "Finland", "Slovakia", "Ireland"], r: "Hungary", cat: "GEOGRAPHY" },
    { q: "Which Middle Eastern country does NOT use Arabic as its primary official language?", a: ["Turkey", "Iraq", "Lebanon", "Jordan"], r: "Turkey", cat: "GEOGRAPHY" },

    // --- Hard World Questions ---
    { q: "Which country is the largest by area without having a single permanent river?", a: ["Saudi Arabia", "Libya", "Australia", "Mongolia"], r: "Saudi Arabia", cat: "GEOGRAPHY" },
    { q: "Which is the world's highest capital city (meters above sea level)?", a: ["La Paz", "Quito", "Thimphu", "Addis Ababa"], r: "La Paz", cat: "GEOGRAPHY" },
    { q: "In which country is the world's driest place, the Atacama Desert, located?", a: ["Chile", "Peru", "Namibia", "China"], r: "Chile", cat: "GEOGRAPHY" },
    { q: "Which country has the most time zones (total of 12 including overseas territories)?", a: ["France", "Russia", "USA", "China"], r: "France", cat: "GEOGRAPHY" },
    { q: "Which archipelago does the island of Socotra belong to, known for its Dragon Blood trees?", a: ["Yemen", "Somalia", "India", "Oman"], r: "Yemen", cat: "GEOGRAPHY" },
    { q: "Which country borders the most other countries (14)?", a: ["China", "Russia", "Brazil", "India"], r: "China", cat: "GEOGRAPHY" },
    { q: "Which is the only state in the world located in all four hemispheres?", a: ["Kiribati", "Ecuador", "Indonesia", "Kenya"], r: "Kiribati", cat: "GEOGRAPHY" },

    // --- Tech & Console Errors ---
    { q: "What is the dreaded hardware failure on Xbox 360 indicated by three red lights called?", a: ["Red Ring of Death", "Circle of Doom", "Fatal Error Light", "Red Box of Pain"], r: "Red Ring of Death", cat: "TROUBLESHOOTING" },
    { q: "What is the component in original Xbox (v1.0-1.5) that leaks acid and destroys the motherboard?", a: ["Clock Capacitor", "Power Supply", "DVD Drive", "Fan Controller"], r: "Clock Capacitor", cat: "TROUBLESHOOTING" },
    { q: "What is the Blue Screen in Windows that covers the whole screen called?", a: ["Blue Screen of Death (BSOD)", "Blue Error Page", "Windows Crash View", "System Failure Screen"], r: "Blue Screen of Death (BSOD)", cat: "TROUBLESHOOTING" },
    { q: "What does 'POST' stand for when a computer starts?", a: ["Power On Self Test", "Primary Output System Tool", "Peripheral Online Storage Test", "Process Option Start"], r: "Power On Self Test", cat: "TECH" },
// Add to the 'en' list
{ q: "What is the name of the AI technology that allows computers to learn from data without explicit programming?", a: ["Machine Learning", "Cloud Computing", "Blockchain", "Optical Fiber"], r: "Machine Learning" },
{ q: "Which popular video game genre features 100 players fighting to be the last one standing?", a: ["Battle Royale", "MOBA", "Sandbox", "RTS"], r: "Battle Royale" },
{ q: "What does the 'GPU' abbreviation stand for?", a: ["Graphics Processing Unit", "General Power Utility", "Global Path Universal", "Gaming Protocol Unit"], r: "Graphics Processing Unit" },
{ q: "Which famous tech entrepreneur founded the company SpaceX and bought Twitter (now X)?", a: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"], r: "Elon Musk" },
{ q: "What is the term for a secret message or hidden feature left in a game by developers?", a: ["Easter Egg", "Glitch", "Beta", "Plugin"], r: "Easter Egg" },
{ q: "In the world of streaming, what does 'POV' stand for?", a: ["Point Of View", "Player On Video", "Power Of Voice", "Piece Of Valve"], r: "Point Of View" },
{ q: "Which programming language uses the 'snake_case' naming convention and is named after a British comedy group?", a: ["Python", "C++", "Ruby", "Swift"], r: "Python" },
{ q: "What is the name of the digital currency that started the crypto-boom in 2009?", a: ["Bitcoin", "Ethereum", "Dogecoin", "Litecoin"], r: "Bitcoin" },
{ q: "Which game console was the first to use CD-ROMs instead of cartridges for its main games?", a: ["PlayStation 1", "Nintendo 64", "Sega Genesis", "Super Nintendo"], r: "PlayStation 1" },
{ q: "What is a 'VPN' used for in internet networking?", a: ["Virtual Private Network", "Video Path Node", "Variable Port Number", "Visual Processing Net"], r: "Virtual Private Network" },

        // --- MUSIC TECH & CULTURE ---
        { q: "In the 90s, what was the most popular software for playing MP3 files on a PC?", a: ["Winamp", "Spotify", "VLC", "Windows Movie Maker"], r: "Winamp" },
        { q: "Which digital music store did Apple launch in 2003, changing the industry forever?", a: ["iTunes Store", "Napster", "Pandora", "Amazon Music"], r: "iTunes Store" },
        { q: "What is the name of the Swedish music streaming service founded by Daniel Ek?", a: ["Spotify", "Tidal", "SoundCloud", "Deezer"], r: "Spotify" },
        { q: "What is the standard 'sampling rate' for CD-quality audio?", a: ["44.1 kHz", "48 kHz", "96 kHz", "128 kbps"], r: "44.1 kHz" },
        { q: "Which famous electronic music festival is held annually in Boom, Belgium?", a: ["Tomorrowland", "Ultra", "Coachella", "Glastonbury"], r: "Tomorrowland" },

        // --- INSTRUMENTS & THEORY ---
        { q: "How many strings does a standard electric bass guitar usually have?", a: ["4", "6", "5", "12"], r: "4" },
        { q: "Which family of instruments does the Saxophone belong to?", a: ["Woodwind", "Brass", "Percussion", "Strings"], r: "Woodwind" },
        { q: "What is the name of the electronic instrument played without touching it, using metal antennas?", a: ["Theremin", "Synthesizer", "Keytar", "Vocoder"], r: "Theremin" },
// --- ROCK & METAL LEGENDS ---
        { q: "Which band is known for the hit 'Stairway to Heaven'?", a: ["Led Zeppelin", "Deep Purple", "Black Sabbath", "The Who"], r: "Led Zeppelin" },
        { q: "Who is the lead singer of the band Guns N' Roses?", a: ["Axl Rose", "Slash", "Eddie Vedder", "Kurt Cobain"], r: "Axl Rose" },
        { q: "Which Australian band is famous for 'Back in Black' and 'Thunderstruck'?", a: ["AC/DC", "INXS", "Midnight Oil", "Tame Impala"], r: "AC/DC" },
        { q: "What is the name of Metallica's self-titled 1991 album, often called by its color?", a: ["The Black Album", "The White Album", "Red Lightning", "Blue Steel"], r: "The Black Album" },
        { q: "Which band's mascot is a zombie-like creature named Eddie?", a: ["Iron Maiden", "Megadeth", "Slayer", "Anthrax"], r: "Iron Maiden" },

        // --- 80s & 90s SYNTH & POP ---
        { q: "Which British duo sang 'West End Girls' and 'It's a Sin'?", a: ["Pet Shop Boys", "Erasure", "Depeche Mode", "Wham!"], r: "Pet Shop Boys" },
        { q: "Which song by Rick Astley became one of the internet's biggest memes?", a: ["Never Gonna Give You Up", "Together Forever", "Take Me To Your Heart", "Cry For Help"], r: "Never Gonna Give You Up" },
        { q: "In which year did MTV launch in the United States?", a: ["1981", "1979", "1985", "1989"], r: "1981" },
        { q: "Which girl group sang the 90s hit 'Waterfalls'?", a: ["TLC", "Destiny's Child", "En Vogue", "SWV"], r: "TLC" },
        { q: "Who sang 'I Will Always Love You' for the movie The Bodyguard?", a: ["Whitney Houston", "Mariah Carey", "Celine Dion", "Janet Jackson"], r: "Whitney Houston" },

        // --- HIP HOP & R&B ---
        { q: "Which rapper is also known as 'Slim Shady'?", a: ["Eminem", "Dr. Dre", "Snoop Dogg", "50 Cent"], r: "Eminem" },
        { q: "What was the name of the debut album by Wu-Tang Clan?", a: ["Enter the Wu-Tang (36 Chambers)", "Ready to Die", "Illmatic", "The Chronic"], r: "Enter the Wu-Tang (36 Chambers)" },
        { q: "Who is the 'Queen Bey' of modern pop and R&B?", a: ["Beyoncé", "Rihanna", "Alicia Keys", "Ciara"], r: "Beyoncé" },
        { q: "Which artist released the 2017 hit 'Humble'?", a: ["Kendrick Lamar", "Drake", "J. Cole", "Post Malone"], r: "Kendrick Lamar" },

        // --- ELECTRONIC & DANCE ---
        { q: "Which French duo wore robot helmets and released 'Random Access Memories'?", a: ["Daft Punk", "Justice", "Air", "Phoenix"], r: "Daft Punk" },
        { q: "What does 'EDM' stand for in the music world?", a: ["Electronic Dance Music", "Electric Drum Machine", "Everyday Digital Music", "Enhanced Data Mix"], r: "Electronic Dance Music" },
        { q: "Which DJ is famous for the hit 'Levels' and the album 'True'?", a: ["Avicii", "David Guetta", "Tiësto", "Kygo"], r: "Avicii" },
        { q: "What is the name of the Japanese electronic musical instrument shaped like a musical note?", a: ["Otamatone", "Theremin", "Keytar", "Stylophone"], r: "Otamatone" },

        // --- GAMING & MOVIE SOUNDTRACKS ---
        { q: "Who composed the iconic music for Star Wars, Jaws, and Indiana Jones?", a: ["John Williams", "Hans Zimmer", "Danny Elfman", "Ennio Morricone"], r: "John Williams" },
        { q: "Which game features the song 'Simple and Clean' by Utada Hikaru?", a: ["Kingdom Hearts", "Final Fantasy", "Tekken", "Persona"], r: "Kingdom Hearts" },
        { q: "What is the name of the main theme from the Halo series known for its Gregorian chant?", a: ["Halo Theme", "Warthog Run", "Finish the Fight", "Covenant Dance"], r: "Halo Theme" },
        { q: "In which game do you play as a musician fighting an evil corporation in 'Hi-Fi RUSH'?", a: ["Chai", "Peppermint", "808", "Macaron"], r: "Chai" },

        // --- MODERN HITS (2020s) ---
        { q: "Which artist released the album 'Harry's House' in 2022?", a: ["Harry Styles", "Niall Horan", "Zayn Malik", "Liam Payne"], r: "Harry Styles" },
        { q: "Who sang the hit 'Drivers License' that went viral on TikTok in 2021?", a: ["Olivia Rodrigo", "Sabrina Carpenter", "Billie Eilish", "Tate McRae"], r: "Olivia Rodrigo" },
        { q: "Which band's name is also the title of a song by the Pixies?", a: ["Hey", "Gigantic", "Debaser", "Where Is My Mind"], r: "Where Is My Mind" },
        { q: "What is the name of the 2024 hit by Sabrina Carpenter?", a: ["Espresso", "Latte", "Cappuccino", "Mocha"], r: "Espresso" },

        // --- INSTRUMENTS & TRIVIA ---
        { q: "What is the highest-pitched woodwind instrument in an orchestra?", a: ["Piccolo", "Flute", "Oboe", "Clarinet"], r: "Piccolo" },
        { q: "How many keys are on a standard full-sized piano?", a: ["88", "76", "92", "104"], r: "88" },
        { q: "Which instrument is often associated with the Scottish Highlands?", a: ["Bagpipes", "Harp", "Accordion", "Violin"], r: "Bagpipes" },
        { q: "What is the term for a piece of music played by only one person?", a: ["Solo", "Duet", "Trio", "Quartet"], r: "Solo" },

        // --- EUROVISION & SCANDINAVIAN HITS ---
        { q: "Which country has won the Eurovision Song Contest the most times (shared with Sweden)?", a: ["Ireland", "United Kingdom", "Israel", "Luxembourg"], r: "Ireland" },
        { q: "Who won Eurovision for Norway in 2009 with the song 'Fairytale'?", a: ["Alexander Rybak", "Kurt Nilsen", "Jahn Teigen", "TIX"], r: "Alexander Rybak" },
        { q: "Which Danish band had a global hit with '7 Years'?", a: ["Lukas Graham", "Aqua", "Alphabeat", "Mew"], r: "Lukas Graham" },
        { q: "In which year did Lordi win Eurovision for Finland?", a: ["2006", "2002", "2010", "2008"], r: "2006" },

        // --- MISC MUSIC KNOWLEDGE ---
        { q: "What was the first music video ever played on MTV?", a: ["Video Killed the Radio Star", "Thriller", "Take on Me", "Billie Jean"], r: "Video Killed the Radio Star" },
        { q: "Which artist is known for the alter ego 'Ziggy Stardust'?", a: ["David Bowie", "Iggy Pop", "Lou Reed", "Mick Jagger"], r: "David Bowie" },
        { q: "What is the title of the song often called the 'Rickroll'?", a: ["Never Gonna Give You Up", "Together Forever", "Cry for Help", "Whenever You Need Somebody"], r: "Never Gonna Give You Up" },
        { q: "Which music format was the predecessor to the CD and offered better audio quality than cassettes?", a: ["Vinyl Record", "Minidisc", "8-track", "LaserDisc"], r: "Vinyl Record" },
        { q: "What does 'BPM' stand for in music production?", a: ["Beats Per Minute", "Bass Power Mode", "Binary Pulse Modulation", "Best Playable Music"], r: "Beats Per Minute" },
        { q: "Which legendary festival took place in 1969 and is seen as a peak of the hippie era?", a: ["Woodstock", "Glastonbury", "Lollapalooza", "Burning Man"], r: "Woodstock" },       
 // STAR WARS & SCI-FI
        { q: "Which character is known for the line: 'I am your father'?", a: ["Darth Vader", "Luke Skywalker", "Han Solo", "Obi-Wan Kenobi"], r: "Darth Vader" },
        { q: "What is the name of Han Solo's loyal co-pilot and Wookiee friend?", a: ["Chewbacca", "Ewok", "Jabba", "Lando"], r: "Chewbacca" },
        { q: "Which color is Samuel L. Jackson's (Mace Windu) unique lightsaber?", a: ["Purple", "Green", "Blue", "Yellow"], r: "Purple" },
        { q: "What is the name of the droid that is 'fluent in over six million forms of communication'?", a: ["C-3PO", "R2-D2", "BB-8", "K-2SO"], r: "C-3PO" },

        // HARDWARE & CABLES (Retro tech)
        { q: "What was the name of the classic TV cable with a wide, rectangular connector and 21 pins?", a: ["RGB SCART", "Antenna cable", "Composite (Yellow plug)", "S-Video"], r: "RGB SCART" },
        { q: "Before HDMI, what was the most common blue-colored connector used for computer monitors?", a: ["VGA", "DVI", "DisplayPort", "USB-C"], r: "VGA" },
        { q: "What was the 'Game Boy Color' screen often compared to because of its lack of backlight?", a: ["Pea soup", "A mirror", "A flashlight", "A crystal ball"], r: "Pea soup" },

        // MARIO & SONIC CLASSICS
        { q: "What happens if Sonic takes damage while carrying gold rings?", a: ["He loses all his rings", "He dies instantly", "He loses 1 ring", "He becomes invisible"], r: "He loses all his rings" },
        { q: "What is the name of the princess Mario usually rescues in the Mushroom Kingdom?", a: ["Peach", "Zelda", "Daisy", "Rosalina"], r: "Peach" },
        { q: "In which game did the dinosaur Yoshi make his very first appearance?", a: ["Super Mario World", "Super Mario Bros 1", "Mario Kart 64", "Super Mario Sunshine"], r: "Super Mario World" },
        { q: "Which company created Sonic the Hedgehog as a rival to Mario?", a: ["SEGA", "Nintendo", "Sony", "Capcom"], r: "SEGA" },
        { q: "What does Sonic collect in the levels to avoid dying when hit?", a: ["Gold Rings", "Coins", "Diamonds", "Stars"], r: "Gold Rings" },
        { q: "Which Mario Kart track is infamous for having no guardrails?", a: ["Rainbow Road", "Moo Moo Farm", "Bowser's Castle", "Koopa Troopa Beach"], r: "Rainbow Road" },
        { q: "What is the name of the main character in the Legend of Zelda series?", a: ["Link", "Zelda", "Ganon", "Navi"], r: "Link" },
// MATH & LOGIC (Helt nya)
        { q: "What is the square root of 81?", a: ["9", "7", "8", "11"], r: "9" },
        { q: "If a digital clock shows 13:37, what time is it in the 12-hour format?", a: ["1:37 PM", "1:37 AM", "3:37 PM", "11:37 AM"], r: "1:37 PM" },
        { q: "How many degrees are there in a full circle?", a: ["360", "180", "90", "400"], r: "360" },
        { q: "What is the next number in the sequence: 2, 4, 8, 16...?", a: ["32", "24", "20", "64"], r: "32" },

        // ELECTRICITY & PHYSICS
        { q: "Which unit is used to measure electrical resistance?", a: ["Ohm (Ω)", "Watt (W)", "Volt (V)", "Ampere (A)"], r: "Ohm (Ω)" },
        { q: "What color is usually used for the 'Live' wire (Phase) in modern European power cables?", a: ["Brown", "Blue", "Green/Yellow", "Black"], r: "Brown" },
        { q: "What is the speed of light approximately?", a: ["300,000 km/s", "1,000,000 km/s", "10,000 km/s", "500,000 km/s"], r: "300,000 km/s" },
        { q: "What is the name of the particle that carries a negative electrical charge?", a: ["Electron", "Proton", "Neutron", "Photon"], r: "Electron" },
// HARDWARE FAILURES & STRUGGLE
        { q: "You are building a PC and drop a tiny screw behind the motherboard. What is the biggest risk if you leave it there?", a: ["A short circuit", "The PC gets too heavy", "The fan will get stuck", "The Wi-Fi becomes slow"], r: "A short circuit" },
        { q: "Your PC starts, the fans spin, but the screen is black and the motherboard 'beeps' three times. What is usually wrong?", a: ["RAM memory issue", "Empty gas tank", "Keyboard is unplugged", "The monitor is upside down"], r: "RAM memory issue" },
        { q: "What is the term for when a component (like a CPU) gets too hot and the system slows it down to protect it?", a: ["Thermal Throttling", "Ice Mode", "Liquid Cooling", "Turbo Lag"], r: "Thermal Throttling" },
        { q: "You find an old joystick with a 15-pin connector that looks like a VGA port but wider. What is this port called?", a: ["Game Port", "SATA", "Thunderbolt", "FireWire"], r: "Game Port" },

        // MATH STORIES (In the style of the Swedish questions)
        { q: "Operator PSL631 has 128 GB of RAM. He gives half to Kamek and then installs 32 GB more. How much RAM does he have now?", a: ["96 GB", "64 GB", "128 GB", "160 GB"], r: "96 GB" },
        { q: "A download is 1000 MB. Your internet speed is 10 MB per second. How many seconds does the download take?", a: ["100 seconds", "10 seconds", "1000 seconds", "1 minute"], r: "100 seconds" },
        { q: "A Retro-gamer buys 3 games for $20 each. He pays with a $100 bill. How many $10 bills should he get back in change?", a: ["4", "40", "2", "6"], r: "4" },
        { q: "If a Minecraft chest can hold 27 stacks of items, and each stack is 64 items, how many items are in a full chest?", a: ["1728", "1500", "1920", "2048"], r: "1728" },

        // ELECTRICITY & PHYSICS (Advanced)
        { q: "According to Ohm's Law, if you want to find the Voltage (V), you multiply Current (I) with what?", a: ["Resistance (R)", "Power (P)", "Frequency (F)", "Speed (S)"], r: "Resistance (R)" },
        { q: "Which of these materials is a 'Semi-conductor', used to make the chips inside your computer?", a: ["Silicon", "Copper", "Wood", "Rubber"], r: "Silicon" },
        { q: "In a PC power supply, which color wire usually carries the +12V power used for the GPU and CPU?", a: ["Yellow", "Red", "Black", "Orange"], r: "Yellow" },
        { q: "What is the name of the 'safety switch' in a house that cuts the power if a cable is damaged or wet?", a: ["Circuit Breaker", "Transformer", "Voltmeter", "Capacitor"], r: "Circuit Breaker" },

        // NETWORK & INTERNET
        { q: "What is the name of the unique 12-digit hexadecimal address that every network card has?", a: ["MAC Address", "Home Address", "ZIP Code", "DNS Record"], r: "MAC Address" },
        { q: "Which protocol is used to automatically give an IP address to your computer when you join LANBIT?", a: ["DHCP", "HTTP", "FTP", "POP3"], r: "DHCP" },
        { q: "If you 'Ping' a server and it says 'Request Timed Out', what does it mean?", a: ["No response", "The server is too fast", "You won the game", "Wrong password"], r: "No response" },

        // RETRO TECH LORE
        { q: "What was the max capacity of a standard 3.5-inch Floppy Disk?", a: ["1.44 MB", "700 MB", "4.7 GB", "128 KB"], r: "1.44 MB" },
        { q: "Why did people 'degauss' their old CRT monitors?", a: ["To fix color distortion", "To clean the glass", "To save electricity", "To increase resolution"], r: "To fix color distortion" },
        // IT-STRUGGLE & INTERNET LORE
        { q: "What does the 'S' stand for in HTTPS?", a: ["Secure", "System", "Speed", "Standard"], r: "Secure" },
        { q: "Which famous error message on Windows is known as 'BSOD'?", a: ["Blue Screen of Death", "Basic System Output Data", "Binary System Overload Delay", "Blue Screen of Doom"], r: "Blue Screen of Death" },
        { q: "What is the name of the annoying sound your 56k modem made in the 90s?", a: ["Handshake", "Dial-tone", "Ping", "Static noise"], r: "Handshake" },
        { q: "What is 'Latency' usually called in online gaming?", a: ["Ping", "FPS", "Lag", "Packet loss"], r: "Ping" },

        // GEOGRAPHY & WORLD (Nya)
        { q: "Which is the smallest country in the world?", a: ["Vatican City", "Monaco", "San Marino", "Malta"], r: "Vatican City" },
        { q: "What is the capital of Australia?", a: ["Canberra", "Sydney", "Melbourne", "Perth"], r: "Canberra" },
        { q: "Which river is the longest in the world?", a: ["Nile", "Amazon", "Mississippi", "Yangtze"], r: "Nile" },
        { q: "In which country can you find the ancient city of Machu Picchu?", a: ["Peru", "Chile", "Mexico", "Bolivia"], r: "Peru" },
        // INTERNET & MEMES
        { q: "What was the name of the first truly viral video service that Google eventually bought in 2006?", a: ["YouTube", "MySpace", "DailyMotion", "Vimeo"], r: "YouTube" },
        { q: "Which file format is most commonly used for small, animated loops on the internet?", a: ["GIF", "MP3", "EXE", "PDF"], r: "GIF" },
        { q: "What is the name of the 'blue bird' app that changed its name to 'X'?", a: ["Twitter", "Threads", "Mastodon", "Discord"], r: "Twitter" },
        // TECH & SYSTEMS
        { q: "What does the abbreviation 'OS' stand for in computing?", a: ["Operating System", "Optical Sensor", "Online Storage", "Output Sound"], r: "Operating System" },
        { q: "Which component is responsible for displaying graphics on your screen?", a: ["Graphics Card (GPU)", "Motherboard", "Power Supply", "Sound Card"], r: "Graphics Card (GPU)" },
        { q: "Which game console suffered from the widespread hardware failure known as the 'Red Ring of Death'?", a: ["Xbox 360", "Playstation 3", "Nintendo Wii", "Sega Dreamcast"], r: "Xbox 360" },
        { q: "Which of the following is a valid IPv4 address?", a: ["192.168.1.254", "256.0.0.1", "10.0.0.2.1", "172.16.256.1"], r: "192.168.1.254" },
        { q: "Which company owns and manufactures the Xbox?", a: ["Microsoft", "Sony", "Nintendo", "Apple"], r: "Microsoft" },
        { q: "Which operating system has a penguin as its mascot?", a: ["Linux", "Windows", "MacOS", "Android"], r: "Linux" },
        { q: "What is the computer's main processor called in three letters?", a: ["CPU", "GPU", "RAM", "HDD"], r: "CPU" },

        // MARIO GALAXY & MOVIES
        { q: "What is the name of the little star friend under Mario's cap in Galaxy?", a: ["Luma", "Starry", "Twink", "Comet"], r: "Luma" },
        { q: "Who guards the 'Comet Observatory' in Mario Galaxy?", a: ["Rosalina", "Daisy", "Pauline", "Peach"], r: "Rosalina" },
        { q: "Who voiced Bowser in the 2023 movie?", a: ["Jack Black", "Chris Pratt", "Seth Rogen", "Vin Diesel"], r: "Jack Black" },
        { q: "In the 2023 movie, what is the name of the kingdom where Donkey Kong lives?", a: ["Jungle Kingdom", "Mushroom Kingdom", "Ice Kingdom", "Kong Land"], r: "Jungle Kingdom" },

        // RETRO & GAMING CULTURE
        { q: "Which portable console from 1989 required 4 AA batteries?", a: ["Game Boy", "Game Gear", "Atari Lynx", "Nintendo DS"], r: "Game Boy" },
        { q: "What does the abbreviation 'SNES' stand for?", a: ["Super Nintendo Entertainment System", "Super Network System", "Standard Network System", "Sega Nintendo"], r: "Super Nintendo Entertainment System" },
        { q: "Which color is the ghost 'Blinky' in Pac-Man?", a: ["Red", "Blue", "Pink", "Orange"], r: "Red" },
        { q: "In which game do characters like Link, Pikachu, and Mario fight each other?", a: ["Super Smash Bros", "Mario Party", "Playstation All-Stars", "Tekken"], r: "Super Smash Bros" },

        // CRASH & SPYRO
        { q: "What is the name of the mask that protects Crash Bandicoot?", a: ["Aku Aku", "Uka Uka", "Ooga Booga", "Lani-Loli"], r: "Aku Aku" },
        { q: "What animal is Spyro?", a: ["Dragon", "Lizard", "Dinosaur", "Bat"], r: "Dragon" },
        { q: "Who developed the original Crash Bandicoot games for PS1?", a: ["Naughty Dog", "Insomniac Games", "Sucker Punch", "Rockstar"], r: "Naughty Dog" },

        // GEOGRAPHY & NATURE
        { q: "Which country has the most islands in the world?", a: ["Sweden", "Philippines", "Indonesia", "Canada"], r: "Sweden" },
        { q: "What is the largest island in the world (that is not a continent)?", a: ["Greenland", "Madagascar", "New Guinea", "Borneo"], r: "Greenland" },
        { q: "What is the name of the largest desert in the world?", a: ["Antarctica", "Sahara", "Gobi", "Kalahari"], r: "Antarctica" },
        { q: "How many hearts does an octopus have?", a: ["3", "1", "2", "8"], r: "3" },
        { q: "Which is the fastest fish in the world?", a: ["Sailfish", "Swordfish", "Mako Shark", "Tuna"], r: "Sailfish" },

        // HISTORY
        { q: "In what year did the Berlin Wall fall?", a: ["1989", "1991", "1985", "1990"], r: "1989" },
        { q: "Which civilization built the pyramids of Giza?", a: ["Ancient Egypt", "Aztecs", "Mayans", "Incas"], r: "Ancient Egypt" },
        { q: "What was the name of the ship that sank on its maiden voyage in 1912?", a: ["Titanic", "Lusitania", "Britannic", "Olympic"], r: "Titanic" },
        { q: "In what year did humans land on the moon for the first time?", a: ["1969", "1965", "1972", "1961"], r: "1969" },
// Add these to your 'en' array
{ q: "Which country has the most islands in the world?", a: ["Sweden", "Philippines", "Indonesia", "Canada"], r: "Sweden" },
{ q: "What is the largest island in the world (that is not a continent)?", a: ["Greenland", "Madagascar", "New Guinea", "Borneo"], r: "Greenland" },
{ q: "In which country is Africa's highest mountain, Kilimanjaro, located?", a: ["Tanzania", "Kenya", "Ethiopia", "Uganda"], r: "Tanzania" },
{ q: "Which river flows through the most countries?", a: ["Danube", "Nile", "Amazon", "Mississippi"], r: "Danube" },
{ q: "Which capital city is the northernmost in the world?", a: ["Reykjavik", "Oslo", "Helsinki", "Nuuk"], r: "Reykjavik" },
{ q: "What is the name of the world's smallest country by area?", a: ["Vatican City", "Monaco", "Nauru", "San Marino"], r: "Vatikanstaten" },
{ q: "Which country is known as 'The Land of a Thousand Lakes'?", a: ["Finland", "Sweden", "Canada", "Norway"], r: "Finland" },
{ q: "Which sea is the saltiest in the world?", a: ["Red Sea", "Dead Sea", "Mediterranean", "Caspian Sea"], r: "Red Sea" },
{ q: "What is the name of the largest desert in the world?", a: ["Antarctica", "Sahara", "Gobi", "Kalahari"], r: "Antarktis" },
{ q: "In which country can you visit the ancient city of Machu Picchu?", a: ["Peru", "Chile", "Colombia", "Ecuador"], r: "Peru" },
{ q: "In what year did the Berlin Wall fall?", a: ["1989", "1991", "1985", "1990"], r: "1989" },
{ q: "Which civilization built the Pyramids of Giza?", a: ["Ancient Egypt", "Aztecs", "Mayans", "Incas"], r: "Forntida Egypten" },
{ q: "Who invented the printing press in Europe during the 1400s?", a: ["Johannes Gutenberg", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei"], r: "Johannes Gutenberg" },
{ q: "What was the name of the ship that sank on its maiden voyage in 1912?", a: ["Titanic", "Lusitania", "Britannic", "Olympic"], r: "Titanic" },
{ q: "In what year did humans land on the moon for the first time?", a: ["1969", "1965", "1972", "1961"], r: "1969" },
{ q: "Who was the first human in space?", a: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"], r: "Jurij Gagarin" },
{ q: "Which board game features a moving board where you push tiles to find treasure?", a: ["Labyrinth", "The Forbidden Diamond", "Clue", "HeroQuest"], r: "Labyrint" },
{ q: "In which game can you be sent to jail without passing 'Go'?", a: ["Monopoly", "Risk", "The Farming Game", "Life"], r: "Monopoly" },
{ q: "What is the classic game where you must guess the murderer, the room, and the weapon?", a: ["Clue", "Mysterium", "Scotland Yard", "Cops and Robbers"], r: "Cluedo" },
{ q: "In Chess, which piece can only move diagonally?", a: ["Bishop", "Knight", "Rook", "Pawn"], r: "Löpare" },
{ q: "What is the total number of dots on a standard six-sided die?", a: ["21", "20", "24", "18"], r: "21" },
{ q: "In which board game do you try to stop global disease outbreaks?", a: ["Pandemic", "Risk", "Operation", "Mice and Mystics"], r: "Pandemic" },
        // INFRASTRUCTURE
        { q: "Which bridge connects Malmö with Copenhagen?", a: ["Öresund Bridge", "Great Belt Bridge", "Västerbron", "Älvsborg Bridge"], r: "Öresund Bridge" },
        { q: "In which city can you find Tower Bridge?", a: ["London", "New York", "Dublin", "Edinburgh"], r: "London" },
        { q: "What is the name of the tunnel under the English Channel?", a: ["Eurotunnel", "Channel Bridge", "Atlantic Tunnel", "The Chunnel"], r: "Eurotunnel" },
{ q: "Which mammal has the strongest bite in the world?", a: ["Hippopotamus", "Hyena", "Grizzly Bear", "Polar Bear"], r: "Flodhäst" },
{ q: "How many hearts does an octopus have?", a: ["3", "1", "2", "8"], r: "3" },
{ q: "What is the only mammal that can truly fly?", a: ["Bat", "Flying Squirrel", "Hummingbird", "Flying Fox"], r: "Fladdermus" },
{ q: "Which bird has the largest wingspan in the world?", a: ["Wandering Albatross", "Golden Eagle", "Condor", "Pelican"], r: "Vandrande albatross" },
{ q: "Which animal has the longest pregnancy (approx. 22 months)?", a: ["Elephant", "Blue Whale", "Rhino", "Giraffe"], r: "Elefant" },
{ q: "Which is the fastest fish in the world?", a: ["Sailfish", "Swordfish", "Mako Shark", "Tuna"], r: "Segelfisk" },
{ q: "Which animal lacks vocal cords?", a: ["Giraffe", "Rabbit", "Snake", "Shark"], r: "Giraff" },
{ q: "Which tree species is the tallest in the world?", a: ["Redwood", "Eucalyptus", "Spruce", "Oak"], r: "Redwood" },
{ q: "Which animal has the longest lifespan (can live over 400 years)?", a: ["Greenland Shark", "Galapagos Tortoise", "Elephant", "Blue Whale"], r: "Håkäring" },
        // MINECRAFT
        { q: "Which material is required to build the frame of a Nether Portal?", a: ["Obsidian", "Bedrock", "Cobblestone", "Blackstone"], r: "Obsidian" },
        { q: "What happens if you use a bed in the Nether or The End?", a: ["It explodes", "You fall asleep", "Nothing", "You set your spawn point"], r: "It explodes" },
        { q: "What is the name of the official 'boss' in The End?", a: ["Ender Dragon", "The Wither", "Warden", "Herobrine"], r: "Ender Dragon" },

        // MODERN MUSIC & POP CULTURE
        { q: "Which female artist dominated 2023 with her 'Eras Tour'?", a: ["Taylor Swift", "Beyoncé", "SZA", "Dua Lipa"], r: "Taylor Swift" },
        { q: "Who is known for the hit 'Bad Guy' and often has neon-green hair?", a: ["Billie Eilish", "Halsey", "Lorde", "Melanie Martinez"], r: "Billie Eilish" },
        { q: "What is the name of the popular social media app that dictates which songs become hits today?", a: ["TikTok", "Instagram", "Snapchat", "BeReal"], r: "TikTok" },

        // BOARD GAMES
        { q: "In which game can you be sent to jail without passing Go?", a: ["Monopoly", "Risk", "The Farming Game", "Life"], r: "Monopoly" },
        { q: "In chess, which piece can only move diagonally?", a: ["Bishop", "Knight", "Rook", "Pawn"], r: "Bishop" },
        { q: "What is the total number of dots on a standard six-sided die?", a: ["21", "20", "24", "18"], r: "21" },
{ q: "Which board game features a 'Traitor' mechanic where one player secretly works against the others in a haunted mansion?", a: ["Betrayal at House on the Hill", "Clue", "Mysterium", "Mansions of Madness"], r: "Betrayal at House on the Hill" },
{ q: "In the game 'Catan', which resource is needed to build both settlements and roads?", a: ["Brick", "Ore", "Wool", "Grain"], r: "Brick" },
{ q: "Which game is known for its bird-themed engine-building mechanics?", a: ["Wingspan", "Evolution", "Root", "Everdell"], r: "Wingspan" },
{ q: "How many tiles are there in a standard game of Scrabble?", a: ["100", "98", "102", "104"], r: "100" },
{ q: "Which board game tasks players with stopping four deadly diseases from wiping out the world?", a: ["Pandemic", "Plague Inc", "Flash Point", "Biohazard"], r: "Pandemic" },
{ q: "In '7 Wonders', which wonder is associated with the city of Giza?", a: ["The Pyramids", "The Lighthouse", "The Colossus", "The Hanging Gardens"], r: "The Pyramids" },
{ q: "What is the name of the 'curse' in the game 'The 7th Continent'?", a: ["The Voracious Goddess", "The Black Hole", "The Eternal Night", "The Deep Fog"], r: "The Voracious Goddess" },
{ q: "Which strategy game involves building a rail network across North America?", a: ["Ticket to Ride", "Railroad Tycoon", "Carcassonne", "Iron Horse"], r: "Ticket to Ride" },
{ q: "In 'Gloomhaven', what happens when a player runs out of cards?", a: ["They become exhausted", "They die instantly", "They skip a turn", "They lose all gold"], r: "They become exhausted" },
{ q: "Which board game uses a 'Defuse' card to stay in the game?", a: ["Exploding Kittens", "Uno", "Phase 10", "Skip-Bo"], r: "Exploding Kittens" },
{ q: "What is the highest-ranking piece in a game of Stratego?", a: ["Marshal", "General", "Colonel", "Spy"], r: "Marshal" },
{ q: "Which game features 'Meeple' pieces originally used in its 2000 release?", a: ["Carcassonne", "Agricola", "Stone Age", "Terraforming Mars"], r: "Carcassonne" },
{ q: "In 'Azul', what are players trying to decorate?", a: ["The Royal Palace of Evora", "A Cathedral", "A Garden", "A Mosque"], r: "The Royal Palace of Evora" },
{ q: "Which horror game is based on the works of H.P. Lovecraft?", a: ["Arkham Horror", "Betrayal", "Dead of Winter", "Zombicide"], r: "Arkham Horror" },
{ q: "How many players can play a standard game of 'Diplomacy'?", a: ["7", "4", "5", "6"], r: "7" },
{ q: "What color is the 'Property' Boardwalk in Monopoly?", a: ["Dark Blue", "Green", "Yellow", "Red"], r: "Dark Blue" },
{ q: "In 'Terraforming Mars', which resource is used to buy cards?", a: ["MegaCredits", "Steel", "Titanium", "Heat"], r: "MegaCredits" },
{ q: "Which game involves bidding on power plants to supply cities with electricity?", a: ["Power Grid", "Brass: Birmingham", "Concordia", "Food Chain Magnate"], r: "Power Grid" },
{ q: "What is the name of the square tiles used in 'Mahjong'?", a: ["Tiles", "Blocks", "Bricks", "Cards"], r: "Tiles" },
{ q: "In 'Splendor', what do players collect to buy development cards?", a: ["Gems", "Gold", "Silk", "Spices"], r: "Gems" },
{ q: "What is the most common thermoplastic used by cosplayers to create armor?", a: ["Worbla", "PVC", "Styrene", "Acrylic"], r: "Worbla" },
{ q: "What does the term 'Crossplay' mean in the cosplay community?", a: ["Cosplaying a character of a different gender", "Cosplaying two characters at once", "Mixing two different franchises", "Cosplaying with a partner"], r: "Cosplaying a character of a different gender" },
{ q: "Which type of foam is preferred for lightweight prop making due to its density?", a: ["EVA Foam", "Polystyrene", "Sponge Foam", "Latex"], r: "EVA Foam" },
{ q: "What is a 'Wig Cap' used for?", a: ["Hiding natural hair under a wig", "Styling the wig", "Storing the wig", "Washing the wig"], r: "Hiding natural hair under a wig" },
{ q: "In cosplay, what is 'Weathering'?", a: ["Making a costume look worn or dirty", "Protecting a costume from rain", "Adding lights to a costume", "Painting with metallic colors"], r: "Making a costume look worn or dirty" },
{ q: "What tool is commonly used to shape EVA foam with heat?", a: ["Heat Gun", "Hair Dryer", "Soldering Iron", "Glue Gun"], r: "Heat Gun" },
{ q: "Which adhesive is famous for being 'contact' based, requiring it to dry on both surfaces before joining?", a: ["Barge / Contact Cement", "Super Glue", "Hot Glue", "PVA Glue"], r: "Barge / Contact Cement" },
{ q: "What is 'Prop-making'?", a: ["Creating accessories or weapons for a costume", "Designing the fabric patterns", "Taking photos of cosplayers", "Organizing cosplay events"], r: "Creating accessories or weapons for a costume" },
{ q: "Which fabric is often used for tight-fitting superhero costumes due to its elasticity?", a: ["Spandex / Lycra", "Cotton", "Leather", "Silk"], r: "Spandex / Lycra" },
{ q: "What does 'WIP' stand for in the crafting community?", a: ["Work In Progress", "World In Pictures", "Weapon In Preparation", "Wear In Public"], r: "Work In Progress" },
{ q: "Which convention is home to the 'World Cosplay Summit' (WCS)?", a: ["Nagoya, Japan", "San Diego Comic-Con", "Gamescom", "Anime Expo"], r: "Nagoya, Japan" },
{ q: "What is a 'Closet Cosplay'?", a: ["A costume made from everyday clothes you already own", "A costume kept hidden", "A very expensive costume", "A costume of a shy character"], r: "A costume made from everyday clothes you already own" },
{ q: "What is the purpose of a 'Primer' when painting props?", a: ["To help the paint stick to the surface", "To make the prop shiny", "To fill large holes", "To change the color of the foam"], r: "To help the paint stick to the surface" },
{ q: "Which Japanese term refers to the culture of dressing up as fictional characters?", a: ["Cosplay", "Otaku", "Kawaii", "Anime"], r: "Cosplay" },
{ q: "What is 'Cel-shading' in cosplay makeup?", a: ["Making the face look like a 2D drawing", "Adding realistic shadows", "Using glitter and sparkles", "Covering eyebrows completely"], r: "Making the face look like a 2D drawing" },
{ q: "What is the most common thermoplastic used by cosplayers to create armor?", a: ["Worbla", "PVC", "Styrene", "Acrylic"], r: "Worbla" },
{ q: "What does the term 'Crossplay' mean in the cosplay community?", a: ["Cosplaying a character of a different gender", "Cosplaying two characters at once", "Mixing two different franchises", "Cosplaying with a partner"], r: "Cosplaying a character of a different gender" },
{ q: "Which type of foam is preferred for lightweight prop making due to its density?", a: ["EVA Foam", "Polystyrene", "Sponge Foam", "Latex"], r: "EVA Foam" },
{ q: "What is a 'Wig Cap' used for?", a: ["Hiding natural hair under a wig", "Styling the wig", "Storing the wig", "Washing the wig"], r: "Hiding natural hair under a wig" },
{ q: "In cosplay, what is 'Weathering'?", a: ["Making a costume look worn or dirty", "Protecting a costume from rain", "Adding lights to a costume", "Painting with metallic colors"], r: "Making a costume look worn or dirty" },
{ q: "What tool is commonly used to shape EVA foam with heat?", a: ["Heat Gun", "Hair Dryer", "Soldering Iron", "Glue Gun"], r: "Heat Gun" },
{ q: "Which adhesive is famous for being 'contact' based, requiring it to dry on both surfaces before joining?", a: ["Barge / Contact Cement", "Super Glue", "Hot Glue", "PVA Glue"], r: "Barge / Contact Cement" },
{ q: "What is 'Prop-making'?", a: ["Creating accessories or weapons for a costume", "Designing the fabric patterns", "Taking photos of cosplayers", "Organizing cosplay events"], r: "Creating accessories or weapons for a costume" },
{ q: "Which fabric is often used for tight-fitting superhero costumes due to its elasticity?", a: ["Spandex / Lycra", "Cotton", "Leather", "Silk"], r: "Spandex / Lycra" },
{ q: "What does 'WIP' stand for in the crafting community?", a: ["Work In Progress", "World In Pictures", "Weapon In Preparation", "Wear In Public"], r: "Work In Progress" },
{ q: "Which convention is home to the 'World Cosplay Summit' (WCS)?", a: ["Nagoya, Japan", "San Diego Comic-Con", "Gamescom", "Anime Expo"], r: "Nagoya, Japan" },
{ q: "What is a 'Closet Cosplay'?", a: ["A costume made from everyday clothes you already own", "A costume kept hidden", "A very expensive costume", "A costume of a shy character"], r: "A costume made from everyday clothes you already own" },
{ q: "What is the purpose of a 'Primer' when painting props?", a: ["To help the paint stick to the surface", "To make the prop shiny", "To fill large holes", "To change the color of the foam"], r: "To help the paint stick to the surface" },
{ q: "Which Japanese term refers to the culture of dressing up as fictional characters?", a: ["Cosplay", "Otaku", "Kawaii", "Anime"], r: "Cosplay" },
{ q: "What is 'Cel-shading' in cosplay makeup?", a: ["Making the face look like a 2D drawing", "Adding realistic shadows", "Using glitter and sparkles", "Covering eyebrows completely"], r: "Making the face look like a 2D drawing" },
{ q: "In 'Magic: The Gathering', which color is associated with healing and protection?", a: ["White", "Blue", "Green", "Red"], r: "White" },
{ q: "What is the name of the most powerful and expensive card in 'Magic: The Gathering's' history?", a: ["Black Lotus", "Ancestral Recall", "Time Vault", "Mox Diamond"], r: "Black Lotus" },
{ q: "In the Pokémon TCG, how many prize cards do you take to win a standard match?", a: ["6", "3", "4", "5"], r: "6" },
{ q: "Which card game uses the phrase 'It's time to duel!'?", a: ["Yu-Gi-Oh!", "Cardfight!! Vanguard", "Duel Masters", "Hearthstone"], r: "Yu-Gi-Oh!" },
{ q: "What is the maximum number of copies of a single card allowed in a standard 'Hearthstone' deck?", a: ["2", "4", "1", "3"], r: "2" },
{ q: "In 'Yu-Gi-Oh!', what happens when you collect all five pieces of Exodia in your hand?", a: ["You win the duel instantly", "You gain 5000 LP", "You destroy all enemy monsters", "You draw 5 cards"], r: "You win the duel instantly" },
{ q: "Which TCG features characters from Disney like Mickey Mouse and Elsa?", a: ["Lorcana", "Weiss Schwarz", "Digimon Card Game", "One Piece TCG"], r: "Lorcana" },
{ q: "What is a 'Mulligan' in card games?", a: ["Redrawing your starting hand", "Playing a card twice", "Skipping your turn", "Discarding your entire deck"], r: "Redrawing your starting hand" },
{ q: "In 'Magic: The Gathering', what is the name of the 'dimension-traveling' characters?", a: ["Planeswalkers", "Guardians", "Wizards", "Travelers"], r: "Planeswalkers" },
{ q: "Which card game was created by Richard Garfield in 1993?", a: ["Magic: The Gathering", "Netrunner", "KeyForge", "Vampire: The Eternal Struggle"], r: "Magic: The Gathering" },
{ q: "What does 'Tapping' a card mean?", a: ["Rotating it to show it has been used", "Discarding it", "Putting it on top of the deck", "Hiding it under another card"], r: "Rotating it to show it has been used" },
{ q: "In 'Hearthstone', which class uses the 'Enrage' (now damaged) mechanic frequently?", a: ["Warrior", "Mage", "Priest", "Rogue"], r: "Warrior" },
{ q: "Which Pokémon is known as 'Base Set #4' and is a holy grail for collectors?", a: ["Charizard", "Blastoise", "Venusaur", "Mewtwo"], r: "Charizard" },
{ q: "In the game 'Uno', how many cards does a player start with?", a: ["7", "5", "10", "8"], r: "7" },
{ q: "What is a 'Draft' format in card games?", a: ["Players pass packs and pick cards to build a deck", "Players use their own pre-built decks", "Players share one single deck", "Players trade cards during the game"], r: "Players pass packs and pick cards to build a deck" },
{ q: "What does 'DM' stand for in Dungeons & Dragons?", a: ["Dungeon Master", "Daily Mission", "Danger Monitor", "Dragon Maker"], r: "Dungeon Master" },
{ q: "In D&D 5e, which ability score is used for 'Initiative'?", a: ["Dexterity", "Strength", "Intelligence", "Wisdom"], r: "Dexterity" },
{ q: "What is a 'Nat 20'?", a: ["Rolling a 20 on a 20-sided die", "Rolling two 10s", "A level 20 character", "The 20th expansion of the game"], r: "Rolling a 20 on a 20-sided die" },
{ q: "Which RPG system uses the 'SPECIAL' attribute system?", a: ["Fallout", "Cyberpunk RED", "GURPS", "Pathfinder"], r: "Fallout" },
{ q: "In 'Call of Cthulhu', what is the most important stat to keep track of to avoid going insane?", a: ["Sanity", "Health", "Intelligence", "Power"], r: "Sanity" },
{ q: "What is the name of the default setting for Dungeons & Dragons 5th Edition?", a: ["The Forgotten Realms", "Greyhawk", "Eberron", "Dragonlance"], r: "The Forgotten Realms" },
{ q: "Which die is most commonly used for skill checks in 'Pathfinder'?", a: ["d20", "d12", "d10", "d6"], r: "d20" },
{ q: "What is 'Metagaming' in an RPG?", a: ["Using out-of-character knowledge in the game", "Creating a powerful character", "Playing the same character for years", "Changing the rules of the game"], r: "Using out-of-character knowledge in the game" },
{ q: "Which class in D&D is known for making 'Pacts' with powerful entities?", a: ["Warlock", "Wizard", "Sorcerer", "Paladin"], r: "Warlock" },
{ q: "In 'Cyberpunk RED', what is the 'Humanity' cost associated with?", a: ["Installing cyberware", "Eating real food", "Losing a fight", "Healing a wound"], r: "Installing cyberware" },
{ q: "What does 'NPC' stand for?", a: ["Non-Player Character", "New Player Class", "Neutral Power Center", "Night Patrol Captain"], r: "Non-Player Character" },
{ q: "Which RPG setting features a world where the 'Shadowrun' occurs, mixing magic and tech?", a: ["Shadowrun", "Starfinder", "Numenera", "Rifts"], r: "Shadowrun" },
{ q: "What is a 'Critical Fail' usually called?", a: ["Natural 1", "Total Miss", "Fumble", "Epic Fail"], r: "Natural 1" },
{ q: "Who is the 'God-of-Death' in the Forgotten Realms setting?", a: ["Kelemvor", "Bane", "Mystra", "Lathander"], r: "Kelemvor" },
{ q: "Which RPG uses a 'Tower of Jenga' instead of dice to determine success?", a: ["Dread", "Ten Candles", "Kids on Bikes", "Alice is Missing"], r: "Dread" },
{ q: "Which convention is considered the largest tabletop gaming event in the world?", a: ["Essen Spiel (Germany)", "Gen Con (USA)", "PAX Unplugged", "Origins Game Fair"], r: "Essen Spiel (Germany)" },
{ q: "Where is 'San Diego Comic-Con' (SDCC) held annually?", a: ["San Diego, California", "Los Angeles, California", "San Francisco, California", "Las Vegas, Nevada"], r: "San Diego, California" },
{ q: "Which gaming convention is famous for its 'Bring Your Own Computer' (BYOC) LAN area?", a: ["DreamHack", "Gamescom", "E3", "Tokyo Game Show"], r: "DreamHack" },
{ q: "What is the name of the massive gaming event held in Cologne, Germany?", a: ["Gamescom", "Spiel", "Eurogamer Expo", "Paris Games Week"], r: "Gamescom" },
{ q: "Which event is known as 'The Best Four Days in Gaming'?", a: ["Gen Con", "Essen Spiel", "Dragon Con", "PAX East"], r: "Gen Con" },
{ q: "In which city is the 'Tokyo Game Show' held?", a: ["Chiba (near Tokyo)", "Osaka", "Kyoto", "Yokohama"], r: "Chiba (near Tokyo)" },
{ q: "What does 'PAX' stand for in the context of PAX conventions?", a: ["Penny Arcade Expo", "Players and Xperience", "Professional Alliance of Xbox", "People Against X-play"], r: "Penny Arcade Expo" },
{ q: "Which convention is famous for its massive parade and emphasis on fan culture in Atlanta?", a: ["Dragon Con", "Anime Expo", "NYCC", "MCM Comic Con"], r: "Dragon Con" },
{ q: "What is 'E3' (Electronic Entertainment Expo) primarily known for?", a: ["Big video game announcements", "Board game tournaments", "Cosplay competitions", "Retro gaming sales"], r: "Big video game announcements" },
{ q: "Which UK-based convention is the largest for general pop culture?", a: ["MCM London Comic Con", "EGX", "Insomnia", "UK Games Expo"], r: "MCM London Comic Con" },
{ q: "What is the 'Indie Megabooth' usually found at?", a: ["PAX", "E3", "Gen Con", "Comic-Con"], r: "PAX" },
{ q: "Which convention is held at the Los Angeles Convention Center and is the largest anime-focused event in North America?", a: ["Anime Expo", "Otakon", "Anime Weekend Atlanta", "Crunchyroll Expo"], r: "Anime Expo" },
{ q: "What is a 'Panel' at a convention?", a: ["A presentation or Q&A with guests", "A piece of a costume", "A type of entry ticket", "A merchant's stall"], r: "A presentation or Q&A with guests" },
{ q: "Which event focuses purely on tabletop games and is held in Indianapolis?", a: ["Gen Con", "Origins", "PAX Unplugged", "BGG.CON"], r: "Gen Con" },
{ q: "What is an 'Artist Alley' at a convention?", a: ["An area where independent artists sell their work", "A place to paint miniatures", "A hallway with fan art on the walls", "A VIP lounge for famous artists"], r: "An area where independent artists sell their work" },

        // MATH & LOGIC
        { q: "What is the square root of 144?", a: ["12", "14", "10", "16"], r: "12" },
        { q: "What is 15% of 200?", a: ["30", "15", "20", "45"], r: "30" },
        { q: "How many bits are in one byte?", a: ["8", "10", "16", "4"], r: "8" },

        // ELECTRICITY
        { q: "Which unit is used to measure electrical current?", a: ["Ampere (A)", "Volt (V)", "Watt (W)", "Ohm (Ω)"], r: "Ampere (A)" },
        { q: "What does the abbreviation AC stand for in electricity?", a: ["Alternating Current", "Direct Current", "Battery Power", "Fuse"], r: "Alternating Current" },
// --- CYBER SECURITY & DIGITAL LITERACY ---
        { q: "What is a 'DDoS' attack?", a: ["Overloading a website with traffic", "Stealing passwords via email", "Installing a virus", "Deleting a database"], r: "Overloading a website with traffic" },
        { q: "What is the primary purpose of 'Two-Factor Authentication' (2FA)?", a: ["Adding an extra layer of security", "Making logins faster", "Sharing passwords safely", "Saving battery life"], r: "Adding an extra layer of security" },
        { q: "What is 'Phishing'?", a: ["Fraudulent emails to steal info", "Hunting for hardware deals", "A way to increase FPS", "Cleaning a computer fan"], r: "Fraudulent emails to steal info" },
        { q: "What does a 'Firewall' do in a network?", a: ["Blocks unauthorized access", "Speeds up the internet", "Cools down the router", "Monitors power usage"], r: "Blocks unauthorized access" },
        { q: "What is 'Ransomware'?", a: ["Malware that locks your files", "A program that steals RAM", "A type of free antivirus", "A tool for streamers"], r: "Malware that locks your files" },

        // --- PROGRAMMING & CODE BASICS ---
        { q: "In JavaScript, which symbol is commonly used to end a line of code?", a: ["; (Semicolon)", ": (Colon)", ". (Period)", "! (Exclamation)"], r: "; (Semicolon)" },
        { q: "What is a 'Variable' in programming?", a: ["A container for storing data", "A type of computer mouse", "A hardware error", "An internet speed test"], r: "A container for storing data" },
        { q: "What is 'Debugging'?", a: ["Finding and fixing errors", "Installing new hardware", "Deleting temporary files", "Playing a game for free"], r: "Finding and fixing errors" },
        { q: "Which loop runs as long as a certain condition remains true?", a: ["While-loop", "For-loop", "If-statement", "Function"], r: "While-loop" },

        // --- CRT & RETRO HARDWARE (TV-Tech) ---
        { q: "What does 'Degaussing' do on an old CRT monitor?", a: ["Removes magnetic distortion", "Cleans the glass", "Increases resolution", "Starts the fan"], r: "Removes magnetic distortion" },
        { q: "Why are CRT monitors considered better for retro gaming 'lag-wise'?", a: ["Zero digital processing delay", "They have more memory", "Higher refresh rates", "Better internet chips"], r: "Zero digital processing delay" },
        { q: "What are the black lines often seen between pixels on a CRT screen called?", a: ["Scanlines", "Dead pixels", "Ghosting", "Motion blur"], r: "Scanlines" },
        { q: "Why shouldn't you open an old CRT monitor without knowledge?", a: ["Dangerous high voltage", "The glass might melt", "It loses all channels", "The warranty expires"], r: "Dangerous high voltage" },

        // --- RETRO PLATFORMERS: CROC, 40 WINKS & PS1 ---
        { q: "What type of animal is the main character in 'Croc: Legend of the Gobbos'?", a: ["Crocodile", "Lizard", "Dragon", "Turtle"], r: "Crocodile" },
        { q: "In the game '40 Winks', what do the children Ruff and Tumble collect?", a: ["Winks", "Stars", "Coins", "Teddy bears"], r: "Winks" },
        { q: "Who is the main antagonist in '40 Winks' who steals the Winks?", a: ["Nitekap", "Dr. Nightmare", "Sleepyhead", "The Sandman"], r: "Nitekap" },
        { q: "What happens on a PS1 if you pull out a memory card while the save icon is flashing?", a: ["The file gets corrupted", "The card melts", "The game becomes free", "Nothing"], r: "The file gets corrupted" },

        // --- INFRASTRUCTURE & SCANDINAVIAN NODES ---
        { q: "Which bridge connects Malmö with Copenhagen?", a: ["Øresund Bridge", "Great Belt Bridge", "Västerbron", "Storebælt"], r: "Øresund Bridge" },
        { q: "What is the name of the tunnel between Norway and Sweden under Svinesund?", a: ["There is no tunnel", "Svinesund Tunnel", "Skagerrak Pipe", "The Norse Hole"], r: "There is no tunnel" },
        { q: "Which city is the northernmost capital in the world?", a: ["Reykjavik", "Oslo", "Helsinki", "Stockholm"], r: "Reykjavik" },
        { q: "What is the name of the circular metro line in Copenhagen?", a: ["Cityringen", "Øresund Line", "The Loop", "Copenhagen Circle"], r: "Cityringen" },
        { q: "What is the name of the unique train tunnel under central Malmö?", a: ["Citytunneln", "The Bridge Link", "Malmö Tube", "Oresund Pipe"], r: "Citytunneln" },
// --- NETWORKING & PROTOCOLS ---
        { q: "What does 'Wi-Fi' stand for?", a: ["Wireless Fidelity", "Wide Forest", "Wire-Free Internet", "Nothing, it's a brand name"], r: "Nothing, it's a brand name" },
        { q: "Which protocol is used for sending emails?", a: ["SMTP", "FTP", "HTTP", "SNMP"], r: "SMTP" },
        { q: "What is the function of a 'DNS' (Domain Name System)?", a: ["Translates URLs to IP addresses", "Protects against viruses", "Speeds up the CPU", "Connects the mouse"], r: "Translates URLs to IP addresses" },
        { q: "What is the standard maximum length for a single CAT6 ethernet cable without a repeater?", a: ["100 meters", "50 meters", "500 meters", "1 kilometer"], r: "100 meters" },

        // --- MODERN TECH & AI ---
        { q: "What does 'AI' stand for in technology?", a: ["Artificial Intelligence", "Automatic Interface", "Advanced Input", "Active Integration"], r: "Artificial Intelligence" },
        { q: "Which company developed the 'ChatGPT' language model?", a: ["OpenAI", "Google", "Microsoft", "Meta"], r: "OpenAI" },
        { q: "What is the name of the 'cloud' storage service provided by Apple?", a: ["iCloud", "OneDrive", "Google Drive", "Dropbox"], r: "iCloud" },
        { q: "In the context of monitors, what does 'OLED' stand for?", a: ["Organic Light-Emitting Diode", "Optical Laser Electronic Display", "Over-Light Energy Device", "Output Led Engine"], r: "Organic Light-Emitting Diode" },

        // --- OPERATING SYSTEMS ---
        { q: "Which company developed the Android operating system?", a: ["Google", "Samsung", "Nokia", "Motorola"], r: "Google" },
        { q: "What is the 'kernel' of an operating system?", a: ["The core part that manages hardware", "The login screen", "The wallpaper engine", "The recycle bin"], r: "The core part that manages hardware" },
        { q: "Which key combination is famously used to open the Task Manager in Windows?", a: ["Ctrl+Shift+Esc", "Alt+F4", "Ctrl+Alt+Delete", "Win+L"], r: "Ctrl+Shift+Esc" },
        { q: "What is the name of the default web browser in Windows 11?", a: ["Microsoft Edge", "Internet Explorer", "Cortana", "Bing"], r: "Microsoft Edge" },

        // --- GAMING HISTORY & HARDWARE ---
        { q: "Which was the first commercially successful video game, released by Atari in 1972?", a: ["Pong", "Space Invaders", "Pac-Man", "Asteroids"], r: "Pong" },
        { q: "What was the name of the first Sony PlayStation's handheld rival from Nintendo?", a: ["Game Boy Color", "Nintendo DS", "Game & Watch", "Virtual Boy"], r: "Game Boy Color" },
        { q: "Which game console is the best-selling of all time (as of 2024)?", a: ["PlayStation 2", "Nintendo Switch", "Nintendo DS", "Xbox 360"], r: "PlayStation 2" },
        { q: "What was the original name of Nintendo before they made video games?", a: ["Marufuku Company", "Sega", "Technos", "Hobby Japan"], r: "Marufuku Company" },

        // --- MISC TECH TRIVIA ---
        { q: "How many megabytes are in a gigabyte (theoretically in binary)?", a: ["1024", "1000", "512", "2048"], r: "1024" },
        { q: "What is the name of the first computer programmer in history?", a: ["Ada Lovelace", "Alan Turing", "Grace Hopper", "Charles Babbage"], r: "Ada Lovelace" },
        { q: "Which tech giant is nicknamed 'The Big Blue'?", a: ["IBM", "Intel", "Facebook", "HP"], r: "IBM" },
        { q: "What does 'SSD' stand for?", a: ["Solid State Drive", "Super Speed Disk", "Static System Data", "Simple Storage Device"], r: "Solid State Drive" },

        // --- GENERAL NERD KNOWLEDGE ---
        { q: "Which element has the chemical symbol 'Au'?", a: ["Gold", "Silver", "Aluminum", "Argon"], r: "Gold" },
        { q: "What is the name of the 'Red Planet'?", a: ["Mars", "Venus", "Jupiter", "Saturn"], r: "Mars" },
        { q: "Who painted the Mona Lisa?", a: ["Leonardo da Vinci", "Michelangelo", "Picasso", "Van Gogh"], r: "Leonardo da Vinci" },
        { q: "What is the most common gas in Earth's atmosphere?", a: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"], r: "Nitrogen" },
        { q: "What does 'DNA' stand for?", a: ["Deoxyribonucleic acid", "Digital Neural Access", "Dinitrogen Acid", "Dual Node Access"], r: "Deoxyribonucleic acid" },
        // MISC GAMING STRUGGLE
        { q: "What is the first thing a 'pro-gamer' does before he starts crying when the router glows red?", a: ["Restarts the router", "Calls the police", "Changes the network cable", "Goes outside"], r: "Restarts the router" },
        { q: "What is a '404' error when you try to reach a website?", a: ["Page not found", "Server is on fire", "Wrong password", "You are banned"], r: "Page not found" }
    // ... Additional questions would be translated similarly
];

// --- 2. KONSTRUKTION & UI-TEXTER ---
const forbiddenWordsArr = [
    // --- Original Swedish List ---
    "neger", "nigger", "svartskalle", "blatte", "fitta", "kuk", "hora", "slampa", "bög", "jävel", "helvete", "skit", "idiot", "mongo", "retard",
    "pucko", "luder", "arsle", "bitch", "faggot", "kukhuvud", "piss", "knulla", "våldtäkt", "pedofil", "hitler", "stalin", "nazist", "is", "isis",
    "bajs", "kiss", "rumpa", "anus", "stjärt", "prutt", "toalett", "toa", "avföring", "urin", "balle", "pung", "bröst", "tuttar", "penis", "vagina",

    // --- English Additions (Global Operator Standards) ---
    "fuck", "shit", "asshole", "bastard", "cunt", "dick", "pussy", "fag", "nigg", "slut", "whore", "retard", "gay", "lesbian", "porn", "sex", 
    "abuse", "rape", "nazi", "terrorist", "weapon", "drugs", "cocaine", "weed", "heroin", "meth", "piss", "crap", "damn", "hell", "stupid"
];

const ui = {
    startBtn: "BOOT PROTOCOL 🚀",
    gamerTag: "YOUR GAMER TAG:",
    scoreText: "out of 30 points.",
    kamekTitle: "YOU GOT CAUGHT! 🪄✨",
    kamekFoul: "You tried to cheat or leave the page. As punishment, Kamek has played his laugh and shut down your terminal.",
    kamekReason: "Reason: ",
    reboot: "TRY AGAIN 🚀",
    correct: "CORRECT!",
    wrong: "WRONG!",
    perfect: "GRADE: S (30/30) – PERFECT! Operator Psl631 is sending the airship. Collect your prize!",
    high: "GRADE: A – BRILLIANT! You are an elite gamer.",
    average: "GRADE: B – WELL DONE. Kamek laughs at your effort, but you're still good.",
    low: "GRADE: C – PASS. You made it, but you need more practice.",
    fail: "GRADE: D – FAILURE. The result did not reach the target.",
    critical: "GRADE: E (TOTAL COLLAPSE). Toad is crying.",
    batteryLow: "⚠️ [WARNING] POWER SOURCE DISCONNECTED. CONNECT CHARGER FOR OPTIMAL TERMINAL PERFORMANCE.",
    noInternet: "[WARNING] Offline: Your results will not be synced to the cloud and are instead saved locally**",
    adBlock: "[SYSTEM] AdBlock detected, please disable for maximum performance",
    nameWarning: "[SYSTEM] Your name was flagged as offensive and changed to 'Guest'",
    syncing: "[SYSTEM] SYNCING WITH CLOUD...",
    syncComplete: "[SYSTEM] DATA TRANSFERRED TO CENTRAL"
};

// --- 3. VARIABLER ---
let playerName = "";
let score = 0;
let currentIdx = 0;
let lives = 3;
let maxLives = 3;
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

// --- 5. SYSTEM FUNCTIONS ---
function showToast(msg, color) {
    const toast = document.createElement("div");
    toast.style = `position:fixed; top:20px; right:20px; background:${color}; color:white; padding:15px; font-family:'VT323'; z-index:10000; border:2px solid white; box-shadow:5px 5px 0px black; pointer-events:none;`;
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 6000);
}

async function checkSystemStatus() {
    if (!navigator.onLine) showToast(ui.noInternet, "#ff0000");

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

    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            const checkBatteryStatus = () => { 
                if (!battery.charging) { 
                    showToast(ui.batteryLow, "#ff6600"); 
                }
            };
            battery.addEventListener('chargingchange', checkBatteryStatus);
            checkBatteryStatus();
        });
    }
}

function sanitizeName(name) {
    let clean = name.trim();
    if (!clean || clean.toLowerCase() === "guest") return "Guest";
    const allowedPattern = /^[a-zA-Z0-9]+$/;
    if (!allowedPattern.test(clean) || forbiddenWordsArr.some(word => clean.toLowerCase().includes(word))) {
        showToast(ui.nameWarning, "red");
        return "Guest";
    }
    return clean.length > 15 ? clean.substring(0, 15) : clean;
}

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(b => b.style.borderColor = "#333");
    const activeBtn = document.getElementById('btn-' + (mode === 'tournament' ? 'tournament' : 'classic'));
    if (activeBtn) activeBtn.style.borderColor = "#00ff00";
}

function updateLivesDisplay() {
    const container = document.getElementById("lives-container");
    if (!container) return;
    container.innerHTML = "";
    if (currentMode === 'tournament') {
        container.innerHTML = "<span style='color:gold; font-family:VT323;'>[ INFINITE LIVES ]</span>";
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
    let rawInput = document.getElementById("player-name").value;
    playerName = sanitizeName(rawInput);
    document.getElementById("player-name").value = playerName;

    if (currentMode === 'classic') {
        lives = 3;
        lifelines = { fiftyFifty: true, skip: true, reboot: true, analysis: true };
    } else {
        lives = Infinity;
        lifelines = { fiftyFifty: true, skip: true, reboot: false, analysis: true };
        document.getElementById('reboot-btn').classList.add('used');
    }

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("loading-container").classList.remove("hidden");
    
    setTimeout(() => {
        document.getElementById("loading-container").classList.add("hidden");
        document.getElementById("quiz-screen").classList.remove("hidden");
        window.quizActive = true;
        shuffledQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 30);
        updateLivesDisplay();
        showQuestion();
    }, 1200);
}

function showQuestion() {
    const q = shuffledQuestions[currentIdx];
    questionStartTime = Date.now(); // För statistik
    
    // Uppdatera texter
    document.getElementById("progress").innerText = `STATION 24 - PROTOKOLL ${currentIdx + 1} / 30`;
    
    const catDisplay = document.getElementById("question-category");
    if (catDisplay) catDisplay.innerText = `[ CATEGORY: ${q.cat || "GENERAL"} ]`;

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
            updateLivesDisplay();
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
        <p style="font-family:VT323; font-size:1.5rem;">System ran out of energy (lives).</p>
        <p style="color:yellow; font-family:VT323;">Score: ${score}/30</p>
        <button onclick="location.reload()" class="menu-btn" style="margin-top:20px;">RESET TERMINAL 🚀</button>
    `;
}

// Central varningsfunktion för använda livlinor
function triggerLifelineWarning() {
    if (sfx.denied) {
        sfx.denied.currentTime = 0;
        sfx.denied.play().catch(e => console.log("Sound blocked:", e));
    }
    showToast("LIFELINE ALREADY USED", "#ff0000");
    
    const quizScreen = document.getElementById("quiz-screen");
    if (quizScreen) {
        quizScreen.classList.add("error-shake");
        setTimeout(() => quizScreen.classList.remove("error-shake"), 500);
    }
}

function useFiftyFifty() {
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
    showToast("50/50 ACTIVATED", "#00ff00");
}

function useSkipQuestion() {
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

function useAnalysis() {
    if (!lifelines.analysis) { triggerLifelineWarning(); return; }
    
    playSound(sfx.analysis);
    const currentQ = shuffledQuestions[currentIdx];
    showToast(`ANALYSIS: ANSWER STARTS WITH "${currentQ.r.charAt(0)}"`, "#00ccff");
    
    lifelines.analysis = false;
    const btnElement = document.getElementById("analysis-btn");
    if (btnElement) btnElement.classList.add("used");
}

function useReboot() {
    if (!lifelines.reboot) { triggerLifelineWarning(); return; }
    
    if (lives >= 3) {
        showToast("SYSTEM ALREADY OPTIMIZED (FULL LIVES)", "#ffffff");
        return;
    }

    playSound(sfx.reboot);
    lives++;
    updateLivesDisplay();
    
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
            <h2 id="result-header">ANALYSIS COMPLETE</h2>
            <div id="toad-sad-container" class="hidden"><img src="sad_toad.jfif" style="width:100px; border:2px solid red;"></div>
            <p id="result-score" style="font-size:1.8rem; color:#fff;">${playerName}: ${score}/30</p>
            <p id="result-comment" style="color:yellow; font-size:1.1rem; font-family:VT323;"></p>
            <div id="advanced-stats" style="font-family:VT323; text-align:left; border-top:1px solid #333; padding-top:10px;"></div>
            <div id="leaderboard-display"></div>
            <button class="menu-btn" onclick="location.reload()" style="margin-top:20px;">RESTART 🚀</button>
        `;
        
        const avgTime = (stats.answerTimes.reduce((a,b)=>a+b,0) / stats.answerTimes.length).toFixed(1);
        const comment = document.getElementById("result-comment");
        
        if (score === 30) { comment.innerText = ui.perfect; playSound(sfx.yay); }
        else if (score >= 23) { comment.innerText = ui.high; playSound(sfx.cash); }
        else if (score >= 14) { comment.innerText = ui.average; playSound(sfx.kamek); }
        else if (score >= 6) { comment.innerText = ui.fail; playSound(sfx.trombone); }
        else { 
            comment.innerText = ui.critical; 
            playSound(sfx.loser); 
            document.getElementById("toad-sad-container").classList.remove("hidden");
            showToast("WARNING: MECHANICAL DISK ERROR DETECTED", "#ff0000");
        }

        document.getElementById("advanced-stats").innerHTML = `
            <p>> AVG TIME PER QUESTION: ${avgTime}s</p>
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

// ANTI-CHEAT
window.addEventListener('blur', () => { 
    if (window.quizActive) {
        triggerKamekVrede("DETECTED FOCUS LOSS (ATTEMPTED GOOGLING)"); 
    }
});

window.addEventListener('contextmenu', (e) => {
    if (window.quizActive) {
        e.preventDefault();
        triggerKamekVrede("RIGHT CLICK DETECTED (FORBIDDEN ACTION)");
    }
});

window.addEventListener('keydown', (e) => {
    if (!window.quizActive) return;

    if (e.keyCode === 123) {
        e.preventDefault();
        triggerKamekVrede("F12 DETECTED (SYSTEM INTRUSION ATTEMPT)");
    }
    
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        triggerKamekVrede("DEVELOPER TOOLS SHORTCUT DETECTED");
    }

    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        triggerKamekVrede("SOURCE VIEW DETECTED");
    }
});

function triggerKamekVrede(reason) {
    window.quizActive = false;
    Object.values(sfx).forEach(sound => { sound.pause(); sound.currentTime = 0; });
    playSound(sfx.kamek);
    
    document.title = "🛑 Quiz Terminated by Kamek";
    
    document.body.innerHTML = `
        <div class="kamek-overlay" style="background:#000; color:#ff0000; height:100vh; width:100vw; position:fixed; top:0; left:0; z-index:9999999; display:block; font-family:'Press Start 2P', cursive; text-align:center; padding:20px; border: 15px solid #ff0000; box-sizing: border-box; overflow-y: auto;">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100%; padding: 20px 0;">
                <h1 style="font-size:2.8rem; margin-bottom: 30px; text-shadow: 8px 8px #550000;">${ui.kamekTitle}</h1>
                <div style="background: red; padding: 10px; margin-bottom: 30px; display: inline-block;">
                    <img src="kamek.jfif" style="width:220px; display:block; border:5px solid black;">
                </div>
                <p style="font-family:'VT323'; font-size:2.2rem; color:yellow; background: black; padding: 15px; border: 2px dashed yellow; margin-bottom: 20px;">
                    VIOLATION: ${reason}
                </p>
                <p style="font-family:'VT323'; color:#fff; font-size:1.4rem; margin-top: 20px; max-width: 750px; line-height: 1.3;">
                    ${ui.kamekFoul}<br>Your participation in Station 24 has been terminated and Operator Psl631 has been informed.
                </p>
                <div style="margin-top:40px;">
                    <button onclick="location.reload()" style="background:#ff0000; color:white; border:4px solid white; padding:20px 40px; cursor:pointer; font-family:'Press Start 2P'; font-size:1.1rem;">
                        REBOOT SYSTEM 🚀
                    </button>
                </div>
            </div>
        </div>
    `;
}

window.addEventListener('load', () => {
    checkSystemStatus();
});
