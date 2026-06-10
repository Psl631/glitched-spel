// frågor.js
const allQuestions = {
    'sv': [
    // LANBIT & NORDISKA LAN
    { q: "Vilket år arrangerades LANBIT för allra första gången?", a: ["2011", "2009", "2013", "2015"], r: "2011" },
    { q: "Vad är LANBIT:s främsta ledord för sina deltagare?", a: ["Gemenskap & Drogfritt", "Endast Pro-gamers", "Bäst hårdvara vinner", "Ingen sömn tillåten"], r: "Gemenskap & Drogfritt" },
    { q: "Vilket svenskt LAN innehar världsrekordet som världens största LAN-party?", a: ["DreamHack", "Birdie", "NärCon", "LANBIT"], r: "DreamHack" },
    { q: "Vad heter Norges största LAN som hålls i Vikingskipet varje påsk?", a: ["The Gathering", "Polar Party", "Gamer's Paradise", "Oslo LAN"], r: "The Gathering" },
    { q: "Vilket finskt event är både ett LAN och en av världens största demoscener?", a: ["Assembly", "Lantrek", "Vectorama", "Digiexpo"], r: "Assembly" },
    { q: "Vad står förkortningen 'LAN' för i LANBIT?", a: ["Local Area Network", "Large Area Node", "Long Active Night", "Light And Noise"], r: "Local Area Network" },
    { q: "Vilken typ av turnering är oftast mest högljudd på LANBIT?", a: ["Smash / Mario Kart", "Schack", "Excel-speedrun", "Patiens"], r: "Smash / Mario Kart" },

    // EUROVISION & MUSIK
    { q: "I vilken stad arrangeras Eurovision Song Contest 2026?", a: ["Wien", "Stockholm", "Berlin", "Oslo"], r: "Wien" },
    { q: "Vem representerar Sverige i Eurovision Song Contest 2026?", a: ["Felicia", "Dotter", "Liamoo", "Loreen"], r: "Felicia" },
    { q: "Vilken svensk grupp vann Eurovision 1974 med låten 'Waterloo'?", a: ["ABBA", "Herreys", "Roxette", "The Real Group"], r: "ABBA" },
    { q: "Vem vann för Sverige 2012 med den ikoniska låten 'Euphoria'?", a: ["Loreen", "Carola", "Charlotte Perrelli", "Måns Zelmerlöw"], r: "Loreen" },
    { q: "Vad kallas det inom filmvärlden när man ersätter originalspråket med ett annat, t.ex. svenskt tal på en engelsk film?", a: ["Dubbning", "Subbing", "Rendering", "Remixing"], r: "Dubbning" },
    // DATOR, TECH & SYSTEM
    { q: "Vad står förkortningen 'OS' för i datorsammanhang?", a: ["Operating System", "Optical Sensor", "Online Storage", "Output Sound"], r: "Operating System" },
    { q: "Vilken komponent ansvarar för att visa grafik på din skärm?", a: ["Grafikkort (GPU)", "Moderkort", "Nätaggregat", "Ljudkort"], r: "Grafikkort (GPU)" },
    { q: "Vilken spelkonsol drabbades av det omfattande hårdvarufelet 'Red Ring of Death'?", a: ["Xbox 360", "Playstation 3", "Nintendo Wii", "Sega Dreamcast"], r: "Xbox 360" },
    { q: "Vilket av följande är en giltig IPv4-adress?", a: ["192.168.1.254", "256.0.0.1", "10.0.0.2.1", "172.16.256.1"], r: "192.168.1.254" },
    { q: "Vilket företag äger och tillverkar Xbox?", a: ["Microsoft", "Sony", "Nintendo", "Apple"], r: "Microsoft" },
    { q: "Vilket operativsystem har en pingvin som maskot?", a: ["Linux", "Windows", "MacOS", "Android"], r: "Linux" },
    { q: "Vad kallas datorns huvudprocessor med tre bokstäver?", a: ["CPU", "GPU", "RAM", "HDD"], r: "CPU" },
    { q: "Vilken port användes för runda mus-kontakter förr?", a: ["PS/2", "USB", "VGA", "HDMI"], r: "PS/2" },

    // MARIO GALAXY & FILM
    { q: "Vad heter den lilla stjärnvännen under Marios keps i Galaxy?", a: ["Luma", "Starry", "Twink", "Comet"], r: "Luma" },
    { q: "Vem vaktar 'Comet Observatory' i Mario Galaxy?", a: ["Rosalina", "Daisy", "Pauline", "Peach"], r: "Rosalina" },
    { q: "Vilken förvandling får Mario av en 'Bee Mushroom'?", a: ["Bi-Mario", "Flyg-Mario", "Sväv-Mario", "Honungs-Mario"], r: "Bi-Mario" },
    { q: "Vem spelade Mario i otecknade filmen från 1993?", a: ["Bob Hoskins", "Danny DeVito", "Tom Hanks", "Mario Ahrens"], r: "Bob Hoskins" },
    { q: "Vem gjorde rösten till Bowser i filmen från 2023?", a: ["Jack Black", "Chris Pratt", "Seth Rogen", "Vin Diesel"], r: "Jack Black" },
    { q: "I 2023 års film, vad heter det rike som Donkey Kong bor i?", a: ["Jungle Kingdom", "Mushroom Kingdom", "Ice Kingdom", "Kong Land"], r: "Jungle Kingdom" },

    // RETRO & SPELKULTUR
    { q: "Vilken konsol släpptes först i Sverige?", a: ["NES (Nintendo)", "Sega Mega Drive", "Super Nintendo", "PlayStation 1"], r: "NES (Nintendo)" },
    { q: "Vilken bärbar konsol från 1989 krävde 4 st AA-batterier?", a: ["Game Boy", "Game Gear", "Atari Lynx", "Nintendo DS"], r: "Game Boy" },
    { q: "Vad står förkortningen 'SNES' för?", a: ["Super Nintendo Entertainment System", "Super Network System", "Standard Network System", "Sega Nintendo"], r: "Super Nintendo Entertainment System" },
    { q: "Vilken färg hade Game Boy-originalskärmen (kallad ärtsoppa)?", a: ["Grön", "Blå", "Grå", "Gul"], r: "Grön" },
    { q: "Vilket år lanserades NES (Nintendo Entertainment System) i Sverige?", a: ["1986", "1983", "1989", "1991"], r: "1986" },
    { q: "Vilket arkadspel skapade en brist på 100-yen mynt i Japan när det kom?", a: ["Space Invaders", "Pong", "Street Fighter", "Donkey Kong"], r: "Space Invaders" },
    { q: "Vilken färg har spöket 'Blinky' i Pac-Man?", a: ["Röd", "Blå", "Rosa", "Orange"], r: "Röd" },
    { q: "I vilket spel kämpar karaktärer som Link, Pikachu och Mario mot varandra?", a: ["Super Smash Bros", "Mario Party", "Playstation All-Stars", "Tekken"], r: "Super Smash Bros" },
    { q: "Vilket var det första kommersiellt framgångsrika arkadspelet?", a: ["Pong", "Tetris", "Snake", "Pac-Man"], r: "Pong" },
// --- CRASH BANDICOOT & SPYRO ---
    { q: "Vad heter den mask som skyddar Crash Bandicoot?", a: ["Aku Aku", "Uka Uka", "Ooga Booga", "Lani-Loli"], r: "Aku Aku" },
    { q: "Vilken frukt samlar Crash Bandicoot på?", a: ["Wumpa Fruit", "Äpplen", "Mango", "Persika"], r: "Wumpa Fruit" },
    { q: "Vad heter Crash Bandicoots ärkefiende?", a: ["Dr. Neo Cortex", "Dr. Eggman", "Dr. N. Gin", "Tiny Tiger"], r: "Dr. Neo Cortex" },
    { q: "Vilket djur är Spyro?", a: ["Drake", "Ödla", "Dinosaurie", "Fladdermus"], r: "Drake" },
    { q: "Vad heter Spyros lilla trollslände-vän?", a: ["Sparx", "Flash", "Buzz", "Spyro Jr"], r: "Sparx" },
    { q: "Vem utvecklade de ursprungliga Crash Bandicoot-spelen till PS1?", a: ["Naughty Dog", "Insomniac Games", "Sucker Punch", "Rockstar"], r: "Naughty Dog" },
    { q: "Vilken färg har Spyro?", a: ["Lila", "Blå", "Grön", "Röd"], r: "Lila" },
    { q: "Vad heter Crash Bandicoots syster?", a: ["Coco", "Tawna", "Nina", "Candy"], r: "Coco" },
/* --- NYA FRÅGOR (60 ST): GEOGRAFI, DJUR, NATUR, HISTORIA --- */
    // GEOGRAFI (15 st)
    { q: "Vilket land har flest öar i världen?", a: ["Sverige", "Filippinerna", "Indonesien", "Kanada"], r: "Sverige" },
    { q: "Vilken är världens största ö (som inte är en kontinent)?", a: ["Grönland", "Madagaskar", "Nya Guinea", "Borneo"], r: "Grönland" },
    { q: "I vilket land ligger Afrikas högsta berg, Kilimanjaro?", a: ["Tanzania", "Kenya", "Etiopien", "Uganda"], r: "Tanzania" },
    { q: "Vilken flod flyter genom flest länder?", a: ["Donau", "Nilen", "Amazonfloden", "Mississippi"], r: "Donau" },
    { q: "Vilken huvudstad ligger nordligast i världen?", a: ["Reykjavik", "Oslo", "Helsingfors", "Nuuk"], r: "Reykjavik" },
    { q: "Vad heter världens minsta land till ytan?", a: ["Vatikanstaten", "Monaco", "Nauru", "San Marino"], r: "Vatikanstaten" },
    { q: "Vilket land kallas för 'De tusen sjöarnas land'?", a: ["Finland", "Sverige", "Kanada", "Norge"], r: "Finland" },
    { q: "Vilket hav är världens saltaste?", a: ["Röda havet", "Döda havet", "Medelhavet", "Kaspiska havet"], r: "Röda havet" },
    { q: "Vad heter den största öknen i världen?", a: ["Antarktis", "Sahara", "Gobi", "Kalahari"], r: "Antarktis" },
    { q: "Vilken stad kallas för 'Den eviga staden'?", a: ["Rom", "Athen", "Jerusalem", "Paris"], r: "Rom" },
    { q: "Vilket land har tre huvudstäder?", a: ["Sydafrika", "Nigeria", "Bolivia", "Malaysia"], r: "Sydafrika" },
    { q: "Vilken är världens djupaste sjö?", a: ["Bajkalsjön", "Tanganyikasjön", "Kaspiska havet", "Vättern"], r: "Bajkalsjön" },
    { q: "I vilket land kan man besöka Machu Picchu?", a: ["Peru", "Chile", "Colombia", "Ecuador"], r: "Peru" },
    { q: "Vilket land har flest tidszoner (inklusive territorier)?", a: ["Frankrike", "Ryssland", "USA", "Kina"], r: "Frankrike" },
    { q: "Vilken kanal förbinder Atlanten med Stilla havet?", a: ["Panamakanalen", "Suezkanalen", "Kielkanalen", "Korintkanalen"], r: "Panamakanalen" },

    // DJUR & NATUR (15 st)
    { q: "Vilket däggdjur har det kraftigaste bettet i världen?", a: ["Flodhäst", "Hyena", "Grizzlybjörn", "Isbjörn"], r: "Flodhäst" },
    { q: "Hur många hjärtan har en bläckfisk?", a: ["3", "1", "2", "8"], r: "3" },
    { q: "Vilket djur är det enda däggdjuret som kan flyga på riktigt?", a: ["Fladdermus", "Flygekorre", "Kolibri", "Flygande hund"], r: "Fladdermus" },
    { q: "Vilken fågel har världens största vingspann?", a: ["Vandrande albatross", "Kungsörn", "Kondor", "Pelikan"], r: "Vandrande albatross" },
    { q: "Vilket djur har längst dräktighetstid (ca 22 månader)?", a: ["Elefant", "Blåval", "Noshörning", "Giraff"], r: "Elefant" },
    { q: "Vilken är världens snabbaste fisk?", a: ["Segelfisk", "Svärdfisk", "Mako-haj", "Tonfisk"], r: "Segelfisk" },
    { q: "Vad kallas en grupp med lejon?", a: ["Stolthet (Pride)", "Flock", "Klan", "Stim"], r: "Stolthet (Pride)" },
    { q: "Vilket djur saknar stämband?", a: ["Giraff", "Kanin", "Orm", "Haj"], r: "Giraff" },
    { q: "Vilken är världens största hajart?", a: ["Valhaj", "Vithaj", "Hammarhaj", "Brugd"], r: "Valhaj" },
    { q: "Hur många ben har en spindel?", a: ["8", "6", "10", "12"], r: "8" },
    { q: "Vilket trädslag är världens högsta?", a: ["Redwood", "Eukalyptus", "Gran", "Ek"], r: "Redwood" },
    { q: "Vad kallas läran om svampar?", a: ["Mykologi", "Biologi", "Botanik", "Svamplära"], r: "Mykologi" },
    { q: "Vilket är det enda djuret som kan se både infrarött och ultraviolett ljus?", a: ["Guldfisk", "Katt", "Uggla", "Råtta"], r: "Guldfisk" },
    { q: "Vilket djur har det längsta livet (kan bli över 400 år)?", a: ["Håkäring", "Galapagosköldpadda", "Elefant", "Blåval"], r: "Håkäring" },
    { q: "Vilken blomma är källan till kryddan saffran?", a: ["Krokus", "Tulpan", "Ros", "Lilja"], r: "Krokus" },

    // HISTORIA (15 st)
    { q: "Vilket år föll Berlinmuren?", a: ["1989", "1991", "1985", "1990"], r: "1989" },
    { q: "Vem var kungen av Makedonien som skapade ett av historiens största riken?", a: ["Alexander den store", "Julius Caesar", "Leonidas", "Darius"], r: "Alexander den store" },
    { q: "Vilken civilisation byggde pyramiderna i Giza?", a: ["Forntida Egypten", "Aztekerna", "Mayafolket", "Inkafolket"], r: "Forntida Egypten" },
    { q: "Vem uppfann boktryckarkonsten i Europa på 1400-talet?", a: ["Johannes Gutenberg", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei"], r: "Johannes Gutenberg" },
    { q: "Vilket land invaderade Tyskland 1 september 1939?", a: ["Polen", "Frankrike", "Ryssland", "Tjeckoslovakien"], r: "Polen" },
    { q: "Vem satt 27 år i fängelse innan han blev Sydafrikas president?", a: ["Nelson Mandela", "Desmond Tutu", "Steve Biko", "Kofi Annan"], r: "Nelson Mandela" },
    { q: "Vilken svensk kung dog vid slaget vid Lützen 1632?", a: ["Gustav II Adolf", "Karl XII", "Gustav Vasa", "Erik XIV"], r: "Gustav II Adolf" },
    { q: "Vilken kvinna var Frankrikes regent och brändes på bål 1431?", a: ["Jeanne d'Arc", "Marie Antoinette", "Katarina av Medici", "Eleonora av Akvitanien"], r: "Jeanne d'Arc" },
    { q: "Vad hette skeppet som sjönk på sin jungfrufärd 1912?", a: ["Titanic", "Lusitania", "Britannic", "Olympic"], r: "Titanic" },
    { q: "Vilket imperium styrdes av Djingis Khan?", a: ["Mongolväldet", "Osmanska riket", "Romerska riket", "Persiska riket"], r: "Mongolväldet" },
    { q: "Vem var USA:s första president?", a: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], r: "George Washington" },
    { q: "I vilken stad mördades ärkehertig Franz Ferdinand 1914?", a: ["Sarajevo", "Wien", "Belgrad", "Prag"], r: "Sarajevo" },
    { q: "Vad hette den ryska tsarfamiljen som störtades 1917?", a: ["Romanov", "Habsburg", "Bourbon", "Tudor"], r: "Romanov" },
    { q: "Vilket år landade människan på månen för första gången?", a: ["1969", "1965", "1972", "1961"], r: "1969" },
    { q: "Vem var den första människan i rymden?", a: ["Jurij Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"], r: "Jurij Gagarin" },
/* --- NYA FRÅGOR: NORDEN & INFRASTRUKTUR --- */
    // SVERIGE & NORDEN GEOGRAFI (30 st)
    { q: "Vilket är Sveriges högsta berg?", a: ["Kebnekaise", "Sarektjåkkå", "Akka", "Helags"], r: "Kebnekaise" },
    { q: "Vilken är Nordens största sjö?", a: ["Vänern", "Vättern", "Mjösa", "Saimen"], r: "Vänern" },
    { q: "Vilken stad kallas ofta för 'Nordens Venedig'?", a: ["Stockholm", "Göteborg", "Köpenhamn", "Alesund"], r: "Stockholm" },
    { q: "Vilken ö är Danmarks största (om vi bortser från Grönland)?", a: ["Själland", "Fyn", "Lolland", "Bornholm"], r: "Själland" },
    { q: "I vilket landskap ligger Sveriges geografiska mittpunkt?", a: ["Medelpad", "Härjedalen", "Jämtland", "Dalarna"], r: "Medelpad" },
    { q: "Vilken norsk stad är känd som 'porten till fjordarna'?", a: ["Bergen", "Oslo", "Trondheim", "Stavanger"], r: "Bergen" },
    { q: "Vad heter vulkanen på Island som lamslog flygtrafiken 2010?", a: ["Eyjafjallajökull", "Hekla", "Katla", "Grimsvötn"], r: "Eyjafjallajökull" },
    { q: "Vilken finsk stad är känd för att vara 'jultomtens hemstad'?", a: ["Rovaniemi", "Helsingfors", "Tammerfors", "Åbo"], r: "Rovaniemi" },
    { q: "Vilken är Sveriges till ytan största ö?", a: ["Gotland", "Öland", "Orust", "Hisingen"], r: "Gotland" },
    { q: "Vilket land tillhör ögruppen Färöarna?", a: ["Danmark", "Norge", "Island", "Sverige"], r: "Danmark" },
    { q: "Vad heter havet mellan Sverige och Finland?", a: ["Bottniska viken", "Skagerrak", "Kattegatt", "Öresund"], r: "Bottniska viken" },
    { q: "Vilken är den högsta punkten i Danmark (fastlandet)?", a: ["Møllehøj", "Himmelbjerget", "Skamlingsbanken", "Yding Skovhøj"], r: "Møllehøj" },
    { q: "Vilken svensk stad ligger vid Vätterns södra spets?", a: ["Jönköping", "Växjö", "Linköping", "Skövde"], r: "Jönköping" },
    { q: "I vilket land ligger sjön Mjösa?", a: ["Norge", "Finland", "Sverige", "Danmark"], r: "Norge" },
    { q: "Vad heter Sveriges sydligaste udde?", a: ["Smygehuk", "Kullen", "Falsterbo", "Sandhammaren"], r: "Smygehuk" },
    { q: "Vilken valuta används på Island?", a: ["Króna", "Euro", "Mark", "Daler"], r: "Króna" },
    { q: "Vilken svensk älv är längst?", a: ["Klarälven-Göta älv", "Torne älv", "Dalälven", "Ume älv"], r: "Klarälven-Göta älv" },
    { q: "Vad heter den smala vattenvägen mellan Helsingborg och Helsingör?", a: ["Öresund", "Stora Bält", "Lilla Bält", "Fehmarn Bält"], r: "Öresund" },
    { q: "Vilken norsk fjord är världens längsta och djupaste?", a: ["Sognefjorden", "Geirangerfjorden", "Hardangerfjorden", "Lysefjorden"], r: "Sognefjorden" },
    { q: "Vilken stad är Finlands äldsta?", a: ["Åbo", "Helsingfors", "Borgå", "Vanda"], r: "Åbo" },
    { q: "Vilket landskap i Sverige har en blomma som heter Linnea som landskapsblomma?", a: ["Småland", "Öland", "Blekinge", "Halland"], r: "Småland" },
    { q: "Vad heter det område i norra Skandinavien där samerna bor?", a: ["Sápmi", "Nordkalotten", "Finnmark", "Lapponia"], r: "Sápmi" },
    { q: "Vilken ögrupp i Norra ishavet tillhör Norge?", a: ["Svalbard", "Lofoten", "Vesterålen", "Jan Mayen"], r: "Svalbard" },
    { q: "Vilken svensk sjö förbinds med Vänern via Göta kanal?", a: ["Vättern", "Hjälmaren", "Mälaren", "Siljan"], r: "Vättern" },
    { q: "Vilket nordiskt land har flest sjöar?", a: ["Finland", "Sverige", "Norge", "Danmark"], r: "Finland" },
    { q: "Vilken är den största staden i Norge efter Oslo?", a: ["Bergen", "Stavanger", "Trondheim", "Drammen"], r: "Bergen" },
    { q: "Vilket landskap kallas ofta för 'Sveriges trädgård'?", a: ["Blekinge", "Skåne", "Halland", "Gotland"], r: "Blekinge" },
    { q: "Vad heter den största nationalparken i Sverige?", a: ["Padjelanta", "Sarek", "Stora Sjöfallet", "Muddus"], r: "Padjelanta" },
    { q: "Vilken dansk stad är känd för sitt legoland?", a: ["Billund", "Odense", "Aarhus", "Roskilde"], r: "Billund" },
    { q: "Vad heter sundet mellan Jylland och den norska sydkusten?", a: ["Skagerrak", "Kattegatt", "Öresund", "Belt"], r: "Skagerrak" },

    // TUNNLAR & BROAR (10 st)
    { q: "Hur lång är Öresundsbron (total längd)?", a: ["7845 meter", "5240 meter", "9120 meter", "12100 meter"], r: "7845 meter" },
    { q: "Vilken är världens längsta vägtunnel?", a: ["Lærdalstunneln (Norge)", "Gotthardtunneln (Schweiz)", "Ryfylketunneln (Norge)", "Mont Blanc (Frankrike/Italien)"], r: "Lærdalstunneln (Norge)" },
    { q: "Vilken bro förbinder Malmö med Köpenhamn?", a: ["Öresundsbron", "Stora Bältbron", "Västerbron", "Älvsborgsbron"], r: "Öresundsbron" },
    { q: "Vad heter den kända röda hängbron i San Francisco?", a: ["Golden Gate Bridge", "Brooklyn Bridge", "Bay Bridge", "Manhattan Bridge"], r: "Golden Gate Bridge" },
    { q: "Vilken svensk bro rasade 1980 efter att ha blivit påkörd av fartyget Star Clipper?", a: ["Almöbron (Tjörnbron)", "Ölandsbron", "Älvsborgsbron", "Sandöbron"], r: "Almöbron (Tjörnbron)" },
    { q: "I vilken stad hittar man Tower Bridge?", a: ["London", "New York", "Dublin", "Edinburgh"], r: "London" },
    { q: "Vilken är Sveriges längsta bro (som ligger helt i Sverige)?", a: ["Ölandsbron", "Högakustenbron", "Uddevallabron", "Igelstabron"], r: "Ölandsbron" },
    { q: "Vad heter tunneln under Engelska kanalen?", a: ["Eurotunneln", "Channel Bridge", "Atlantic Tunnel", "The Chunnel"], r: "Eurotunneln" },
    { q: "Vilken bro i Stockholm invigdes 1935 och är en av stadens mest kända vyer?", a: ["Västerbron", "Tranebergsbron", "Skanstullsbron", "Centralbron"], r: "Västerbron" },
    { q: "Vilken norsk tunnel är världens djupaste undersjöiska vägtunnel (292 m under havet)?", a: ["Ryfylketunneln", "Eiksundtunneln", "Hitratunneln", "Oslofjordtunneln"], r: "Ryfylketunneln" },
    // BLANDAT / KLASSIKER (15 st)
    { q: "Vilket grundämne har kemisk beteckning 'Au'?", a: ["Guld", "Silver", "Aluminium", "Argon"], r: "Guld" },
    { q: "Vad heter världens mest sålda bok (efter bibeln)?", a: ["Don Quijote", "Harry Potter", "Sagan om Ringen", "Koranen"], r: "Don Quijote" },
    { q: "Vilken planet är känd som 'Den röda planeten'?", a: ["Mars", "Venus", "Jupiter", "Saturnus"], r: "Mars" },
    { q: "Vem målade Mona Lisa?", a: ["Leonardo da Vinci", "Michelangelo", "Picasso", "Van Gogh"], r: "Leonardo da Vinci" },
    { q: "Hur många tangenter har ett standardpiano?", a: ["88", "76", "92", "104"], r: "88" },
    { q: "Vilken är den vanligaste gasen i jordens atmosfär?", a: ["Kväve", "Syre", "Koldioxid", "Argon"], r: "Kväve" },
    { q: "Vad står förkortningen 'DNA' för?", a: ["Deoxiribonukleinsyra", "Dinitrogenyra", "Digital Neural Access", "Detox-syra"], r: "Deoxiribonukleinsyra" },
    { q: "Vilket land gav Frihetsgudinnan till USA?", a: ["Frankrike", "Storbritannien", "Tyskland", "Italien"], r: "Frankrike" },
    { q: "Vem skrev pjäsen 'Hamlet'?", a: ["William Shakespeare", "Charles Dickens", "Oscar Wilde", "Mark Twain"], r: "William Shakespeare" },
    { q: "Vad heter den minsta benet i människokroppen?", a: ["Stigbygeln", "Hammaren", "Städet", "Lilltåbenet"], r: "Stigbygeln" },
    { q: "Vilken är den största inre organet i människan?", a: ["Levern", "Hjärtat", "Lungan", "Hjärnan"], r: "Levern" },
    { q: "Vad kallas ett ord som stavas likadant baklänges?", a: ["Palindrom", "Anagram", "Synonym", "Antonym"], r: "Palindrom" },
    { q: "Vilket instrument spelade Sherlock Holmes?", a: ["Violin", "Piano", "Flöjt", "Cello"], r: "Violin" },
    { q: "Vilken stad arrangerade de första moderna olympiska spelen 1896?", a: ["Athen", "Paris", "London", "Rom"], r: "Athen" },
    { q: "Vad kallas rädslan för spindlar?", a: ["Araknofobi", "Akrofobi", "Klaustrofobi", "Agorafobi"], r: "Araknofobi" },

    // --- PLAYSTATION HISTORIA (PS1, PS2, PS3) ---
    { q: "Vilket år lanserades PlayStation 1 i Europa?", a: ["1995", "1994", "1996", "1993"], r: "1995" },
    { q: "Vilken är världens mest sålda spelkonsol genom tiderna?", a: ["PlayStation 2", "Nintendo DS", "PlayStation 4", "Wii"], r: "PlayStation 2" },
    { q: "Vilket spel introducerade den skräckinjagande 'Pyramid Head'?", a: ["Silent Hill 2", "Resident Evil", "Fatal Frame", "Alone in the Dark"], r: "Silent Hill 2" },
    { q: "Vad hette den bärbara PlayStation-konsolen som använde UMD-skivor?", a: ["PSP", "PS Vita", "Game Gear", "PocketStation"], r: "PSP" },
    { q: "Vilken färg hade de skivor som PS1-spel brändes på undersidan?", a: ["Svart", "Blå", "Silver", "Guld"], r: "Svart" },
    { q: "Vad heter huvudkaraktären i God of War-serien?", a: ["Kratos", "Ares", "Zeus", "Deimos"], r: "Kratos" },
    { q: "Vilket PS2-spel handlar om en pojke som jagar gigantiska varelser för att rädda en flicka?", a: ["Shadow of the Colossus", "Ico", "Okami", "The Last Guardian"], r: "Shadow of the Colossus" },
    { q: "Vilken tjänst lanserades till PS3 för att spela online?", a: ["PlayStation Network", "PS Online", "Sony Connect", "PS World"], r: "PlayStation Network" },
    { q: "Vilken rörelsekänslig kontroll släppte Sony till PS3 som svar på Wii?", a: ["PS Move", "EyeToy", "Sixaxis", "Kinect"], r: "PS Move" },
    { q: "Vad hette den lilla roboten som följer med Ratchet?", a: ["Clank", "Daxter", "Bentley", "Jak"], r: "Clank" },
    { q: "Vilket spel till PS3 marknadsfördes med tekniken 'Cell Broadband Engine'?", a: ["Uncharted", "Killzone 2", "Resistance", "Infamous"], r: "Uncharted" },

    // --- GRAND THEFT AUTO (GTA) ---
    { q: "I vilken stad utspelar sig GTA: Vice City?", a: ["Vice City", "Liberty City", "Los Santos", "San Fierro"], r: "Vice City" },
    { q: "Vad heter den karaktär man spelar som i GTA: San Andreas?", a: ["Carl Johnson (CJ)", "Tommy Vercetti", "Niko Bellic", "Claude"], r: "Carl Johnson (CJ)" },
    { q: "Vilken stad i verkligheten är Liberty City baserad på?", a: ["New York", "Los Angeles", "Miami", "Chicago"], r: "New York" },
    { q: "Vilka tre karaktärer växlar man mellan i GTA V?", a: ["Franklin, Michael, Trevor", "Niko, Roman, Little Jacob", "CJ, Sweet, Big Smoke", "Tommy, Lance, Ken"], r: "Franklin, Michael, Trevor" },
    { q: "Vilket var det första GTA-spelet i 3D?", a: ["GTA III", "GTA 1", "GTA: Vice City", "GTA 2"], r: "GTA III" },
    { q: "Vad heter spelstudion som skapat GTA-serien?", a: ["Rockstar Games", "Ubisoft", "EA", "Activision"], r: "Rockstar Games" },
    { q: "Vilket radioprogram i GTA är känt för sina galna talkshows?", a: ["Chatterbox FM", "Flash FM", "K-DST", "Radio X"], r: "Chatterbox FM" },
    { q: "I GTA IV, vad vill din kusin Roman ständigt göra?", a: ["Spela bowling", "Köra taxi", "Gå på strippklubb", "Äta burgare"], r: "Spela bowling" },

    // --- BLANDAT SPEL & NERD KULTUR ---
    { q: "Vad heter den första banan i Super Mario Bros 1-1?", a: ["Finns inget namn", "Mushroom Plains", "World 1-1", "Intro Level"], r: "World 1-1" },
    { q: "Vilket spel startade 'Battle Royale'-trenden på allvar?", a: ["PUBG", "Fortnite", "H1Z1", "Apex Legends"], r: "PUBG" },
    { q: "Vilket företag skapade Half-Life och Steam?", a: ["Valve", "Epic Games", "Blizzard", "id Software"], r: "Valve" },
    { q: "Vad heter Master Chiefs AI-följeslagare i Halo?", a: ["Cortana", "Siri", "Alexa", "Glados"], r: "Cortana" },
    { q: "Vilket material är det starkaste i Minecraft?", a: ["Netherite", "Diamant", "Guld", "Järn"], r: "Netherite" },
    { q: "Vem är känd som 'The Witcher' i spelserien med samma namn?", a: ["Geralt av Rivia", "Vesemir", "Eskel", "Lambert"], r: "Geralt av Rivia" },
    { q: "Vilket pusselspel skapades av Alexey Pajitnov 1984?", a: ["Tetris", "Arkanoid", "Snake", "Lemmings"], r: "Tetris" },
    { q: "Vad heter den gula hunden i Final Fantasy VII?", a: ["Red XIII (Nanaki)", "Red XIV", "Caith Sith", "Chocobo"], r: "Red XIII (Nanaki)" },
    { q: "Vilket spel handlar om en lönnmördare vid namn Agent 47?", a: ["Hitman", "Splinter Cell", "Metal Gear Solid", "Assassin's Creed"], r: "Hitman" },
    { q: "Vad står förkortningen FPS för?", a: ["First Person Shooter", "Fast Processing System", "Frames Per Second", "Final Point Score"], r: "First Person Shooter" },
    { q: "Vilken Pokémon har nummer 001 i Pokedexen?", a: ["Bulbasaur", "Pikachu", "Charmander", "Squirtle"], r: "Bulbasaur" },
    { q: "Vilket spel till PS3 innehöll den ikoniska repliken 'War has changed'?", a: ["Metal Gear Solid 4", "Call of Duty", "Battlefield", "Medal of Honor"], r: "Metal Gear Solid 4" },
    { q: "Vem är skaparen bakom Metal Gear-serien?", a: ["Hideo Kojima", "Shigeru Miyamoto", "Masahiro Sakurai", "Todd Howard"], r: "Hideo Kojima" },
    { q: "Vilket spel utspelar sig i undervattensstaden Rapture?", a: ["BioShock", "Fallout", "Dead Space", "Soma"], r: "BioShock" },
    { q: "Vad heter valutan i Fallout-spelen?", a: ["Bottlecaps (Kapsyler)", "Credits", "Gold", "Septims"], r: "Bottlecaps (Kapsyler)" },
    { q: "I vilket spel kan man höra frasen 'Finish Him!'?", a: ["Mortal Kombat", "Street Fighter", "Tekken", "SoulCalibur"], r: "Mortal Kombat" },
    { q: "Vilken färg har Gordon Freemans HEV-dräkt i Half-Life?", a: ["Orange", "Grön", "Blå", "Röd"], r: "Orange" },
    { q: "Vilket år släpptes World of Warcraft (WoW)?", a: ["2004", "2002", "2006", "2000"], r: "2004" },
    { q: "Vad heter världen man befinner sig i i Skyrim?", a: ["Tamriel", "Azeroth", "Hyrule", "Pandora"], r: "Tamriel" },
    { q: "Vilken japansk spelstudio ligger bakom Dark Souls och Elden Ring?", a: ["FromSoftware", "PlatinumGames", "Konami", "Square Enix"], r: "FromSoftware" },
    { q: "Vad heter 'The Boss' i Metal Gear Solid 3?", a: ["The Boss", "Big Boss", "The Joy", "The Sorrow"], r: "The Boss" },
    { q: "Vilket bärbart spel blev ett fenomen på 90-talet och handlade om att sköta ett digitalt djur?", a: ["Tamagotchi", "Digimon", "Game Boy", "Furby"], r: "Tamagotchi" },
    { q: "Vad heter huvudpersonen i Tomb Raider?", a: ["Lara Croft", "Nathan Drake", "Jill Valentine", "Claire Redfield"], r: "Lara Croft" },
// --- GAMINGDATORER & KOMPONENTER ---
    { q: "Vad kallas den teknik från NVIDIA som använder AI för att få spel att flyta bättre?", a: ["DLSS", "FSR", "Ray Tracing", "PhysX"], r: "DLSS" },
    { q: "Vilken komponent i en gamingdator kallas ofta för dess 'korttidsminne'?", a: ["RAM", "SSD", "CPU", "VRAM"], r: "RAM" },
    { q: "Vilket märke är känt för sin 'Alien'-logga på sina gamingdatorer?", a: ["Alienware", "Razer", "MSI", "ASUS ROG"], r: "Alienware" },
    { q: "Vad står 'RGB' för, som lyser upp de flesta gamingdatorer idag?", a: ["Red Green Blue", "Real Glow Bright", "Red Gold Black", "Retro Gaming Box"], r: "Red Green Blue" },
    { q: "Vilket företag tillverkar 'Ryzen'-processorer?", a: ["AMD", "Intel", "NVIDIA", "Qualcomm"], r: "AMD" },

    // --- OPERATIVSYSTEM & WEBBLÄSARE ---
    { q: "Vilket operativsystem från Microsoft introducerade den första Start-menyn 1995?", a: ["Windows 95", "Windows 98", "Windows XP", "Windows 3.1"], r: "Windows 95" },
    { q: "Vilken webbläsare var den mest dominerande på 90-talet innan Internet Explorer tog över?", a: ["Netscape Navigator", "Mosaic", "Opera", "Firefox"], r: "Netscape Navigator" },
    { q: "Vad heter Apples egna webbläsare som finns på Mac och iPhone?", a: ["Safari", "Chrome", "Edge", "iBrowse"], r: "Safari" },
    { q: "Vilket operativsystem är Android-mobiler i grunden baserade på?", a: ["Linux", "Windows", "Unix", "MS-DOS"], r: "Linux" },
    { q: "Vad heter den moderna webbläsaren från Microsoft som ersatte Internet Explorer?", a: ["Edge", "Explorer 2.0", "Bing Browser", "Surface"], r: "Edge" },

    // --- XBOX HISTORIA ---
    { q: "Vilket spel var 'launch title' till den första Xbox-konsolen och blev dess största succé?", a: ["Halo: Combat Evolved", "Fable", "Gears of War", "Forza Motorsport"], r: "Halo: Combat Evolved" },
    { q: "Vad hette den första, extremt stora handkontrollen till original-Xbox?", a: ["The Duke", "The Beast", "The Tank", "The Chunk"], r: "The Duke" },
    { q: "Vilken tjänst lanserades 2002 för att låta Xbox-spelare spela mot varandra online?", a: ["Xbox Live", "Xbox Gold", "Xbox Connect", "Xbox Pass"], r: "Xbox Live" },
    { q: "Vilken Xbox-konsol var den första att stödja 4K Blu-ray?", a: ["Xbox One S", "Xbox 360", "Xbox One", "Xbox Series X"], r: "Xbox One S" },

    // --- CALL OF DUTY (CoD) ---
    { q: "Vilket CoD-spel introducerade det första 'Zombies'-läget?", a: ["World at War", "Modern Warfare", "Black Ops", "CoD 2"], r: "World at War" },
    { q: "Vad heter den ikoniska banan i Modern Warfare som utspelar sig på en liten fraktbåt?", a: ["Shipment", "Rust", "Nuketown", "Crash"], r: "Shipment" },
    { q: "Vilket år släpptes det allra första Call of Duty-spelet?", a: ["2003", "2001", "2005", "2007"], r: "2003" },
    { q: "Vad heter kaptenen med den ikoniska mustaschen i Modern Warfare-serien?", a: ["Captain Price", "Soap MacTavish", "Ghost", "General Shepherd"], r: "Captain Price" },

    // --- RETRO-PÄRLOR: 40 WINKS, CROC & PS1 ---
    { q: "Vilket djur är huvudkaraktären i spelet 'Croc: Legend of the Gobbos'?", a: ["Krokodil", "Ödla", "Drake", "Sköldpadda"], r: "Krokodil" },
    { q: "Vad heter de små fluffiga varelserna som Croc försöker rädda?", a: ["Gobbos", "Munchkins", "Winks", "Lumas"], r: "Gobbos" },
    { q: "I spelet '40 Winks', vad samlar barnen Ruff och Tumble på för att stoppa mardrömmar?", a: ["Winks", "Stjärnor", "Mynt", "Nallar"], r: "Winks" },
    { q: "Vilken studio utvecklade 'Croc' (och var nära att göra ett 3D-Mario åt Nintendo)?", a: ["Argonaut Games", "Rare", "Core Design", "Psygnosis"], r: "Argonaut Games" },
    { q: "Vad heter den onda skurken i '40 Winks' som stjäl alla Winks?", a: ["Nitekap", "Dr. Nightmare", "Sleepyhead", "Big Bad Wolf"], r: "Nitekap" },
    { q: "Vilken typ av fordon kör man i introt till original-spelet 'Driver' på PS1?", a: ["Bil (Muscle car)", "Motorcykel", "Lastbil", "Taxi"], r: "Bil (Muscle car)" },
// --- 80-TALSMUSIK (SYNTH, ROCK & POP) ---
    { q: "Vilket band släppte megahiten 'Take On Me' med sin banbrytande musikvideo?", a: ["A-ha", "Duran Duran", "Depeche Mode", "Alphaville"], r: "A-ha" },
    { q: "Vem kröntes till 'King of Pop' efter albumet Thriller 1982?", a: ["Michael Jackson", "Prince", "George Michael", "Lionel Richie"], r: "Michael Jackson" },
    { q: "Vilken kvinnlig artist sjöng om att vara en 'Material Girl'?", a: ["Madonna", "Cyndi Lauper", "Whitney Houston", "Tina Turner"], r: "Madonna" },
    { q: "Vilket svenskt rockband slog igenom globalt med 'The Final Countdown'?", a: ["Europe", "Roxette", "Gyllene Tider", "ABBA"], r: "Europe" },
    { q: "Från vilken film kommer 80-talslåten 'The Power of Love' med Huey Lewis and the News?", a: ["Tillbaka till framtiden", "Ghostbusters", "Top Gun", "The Breakfast Club"], r: "Tillbaka till framtiden" },
    { q: "Vilket instrument dominerade 80-talets popmusik mer än något annat?", a: ["Synthesizer", "Dragspel", "Banjo", "Munspel"], r: "Synthesizer" },
    { q: "Vem sjöng 'Purple Rain'?", a: ["Prince", "David Bowie", "Rick Astley", "Billy Idol"], r: "Prince" },
    { q: "Vilket band sjöng om att de ville 'I Want To Break Free'?", a: ["Queen", "The Police", "U2", "Dire Straits"], r: "Queen" },

    // --- POPULÄRMUSIK & MODERNA HITLÅTAR ---
    { q: "Vilken artist har fans som kallas för 'Swifties'?", a: ["Taylor Swift", "Ariana Grande", "Billie Eilish", "Katy Perry"], r: "Taylor Swift" },
    { q: "Vad heter Ed Sheerans superhit som handlar om en person han träffade i en bar?", a: ["Shape of You", "Perfect", "Thinking Out Loud", "Bad Habits"], r: "Shape of You" },
    { q: "Vilken svensk DJ och producent låg bakom världshiten 'Levels'?", a: ["Avicii", "Swedish House Mafia", "Alesso", "Eric Prydz"], r: "Avicii" },
    { q: "Vem sjunger 'Blinding Lights', som blev en av de största låtarna under 2020-talet?", a: ["The Weeknd", "Drake", "Justin Bieber", "Post Malone"], r: "The Weeknd" },
    { q: "Vilken K-pop-grupp blev de första från Sydkorea att toppa Billboard-listan?", a: ["BTS", "Blackpink", "EXO", "Psy"], r: "BTS" },
    { q: "Vad heter låten som Miley Cyrus vann sin första Grammy för 2024?", a: ["Flowers", "Wrecking Ball", "Party in the USA", "Midnight Sky"], r: "Flowers" },

    // --- NOSTALGI (TV, LEKSAKER & PRYLAR) ---
    { q: "Vilket år lanserades den första iPhonen, som förändrade mobilmarknaden?", a: ["2007", "2005", "2009", "2010"], r: "2007" },
    { q: "Vilken typ av leksak var 'Pogs' som var extremt populära på 90-talet?", a: ["Små brickor", "Gosedjur", "Actionfigurer", "Bilar"], r: "Små brickor" },
    { q: "Vad hette den första sociala nätverkssajten som var störst innan Facebook?", a: ["MySpace", "Lunarstorm", "Friendster", "Hi5"], r: "MySpace" },
    { q: "Vad samlade man på i små påsar som kallades 'Gogos'?", a: ["Plastfigurer", "Klistermärken", "Kulor", "Kapsyler"], r: "Plastfigurer" },
    { q: "Vilken tecknad serie handlar om fyra sköldpaddor som bor i kloakerna och älskar pizza?", a: ["TMNT", "Power Rangers", "Bumbibjörnarna", "ThunderCats"], r: "TMNT" },
    { q: "Vad kallades den bärbara CD-spelaren som man bar med sig innan MP3-spelaren kom?", a: ["Discman", "Walkman", "iPod", "Zune"], r: "Discman" },
    { q: "Vilket program på 90-talet lät användare ladda ner musik (ofta olagligt) via P2P?", a: ["Napster", "Spotify", "iTunes", "Limewire"], r: "Napster" },
    { q: "Vad hette den lilla fjädern i metall eller plast som kunde 'gå' nerför trappor?", a: ["Slinky", "Yo-yo", "Beyblade", "Tazo"], r: "Slinky" },

    // --- BLANDAD SPELNOSTALGI & TECH ---
    { q: "Vilken konsol hade en kontroll med tre handtag?", a: ["Nintendo 64", "PlayStation 1", "Sega Saturn", "Dreamcast"], r: "Nintendo 64" },
    { q: "Vad står förkortningen 'DVD' för?", a: ["Digital Versatile Disc", "Digital Video Data", "Data Visual Drive", "Direct Video Disc"], r: "Digital Versatile Disc" },
    { q: "Vilket spel handlar om en gul varelse som jagas av spöken i en labyrint?", a: ["Pac-Man", "Dig Dug", "Q*bert", "Galaga"], r: "Pac-Man" },
    { q: "Vilken färg har den kända 'Blue Screen of Death' i Windows?", a: ["Blå", "Röd", "Svart", "Vit"], r: "Blå" },
    { q: "Vad hette den lila draken som var maskot för PlayStation?", a: ["Spyro", "Croc", "Gex", "Ripto"], r: "Spyro" },
    { q: "Vad kallades den lilla digitala klockan man bar på armen som kunde räkna steg på 90-talet?", a: ["Tamagotchi", "Pager", "Casio", "Digimon"], r: "Tamagotchi" },
    { q: "Vilken webbläsare hade en röd 'O' som logga?", a: ["Opera", "Firefox", "Chrome", "Safari"], r: "Opera" },
    { q: "Vad hette skurken i Power Rangers som bodde på månen?", a: ["Rita Repulsa", "Lord Zedd", "Goldar", "Ivan Ooze"], r: "Rita Repulsa" },
    { q: "Vilken känd mobilmodell från Nokia kallades 'oförstörbar'?", a: ["3310", "5110", "N95", "6210"], r: "3310" },
    { q: "Vad kallas det när man 'blåser' i en gammal spelkassett för att få den att funka?", a: ["Nostalgi-fix", "Placebo-effekt", "Reset", "Booting"], r: "Placebo-effekt" },
    { q: "Vilket filformat förknippas mest med musik på 2000-talet?", a: ["MP3", "WAV", "FLAC", "MIDI"], r: "MP3" },
    { q: "Vem är Marios gröna bror?", a: ["Luigi", "Wario", "Waluigi", "Yoshi"], r: "Luigi" },
    { q: "Vilken färg är det på Master Chiefs rustning i Halo?", a: ["Grön", "Blå", "Grå", "Guld"], r: "Grön" },
    { q: "Vad hette skurken i spelet 'Duck Hunt' som skrattade åt dig när du missade?", a: ["Hunden", "Ankan", "Jägaren", "Bossen"], r: "Hunden" },
    { q: "Vilket år kom den första PlayStation-konsolen ut i Japan?", a: ["1994", "1992", "1996", "1990"], r: "1994" },
    { q: "Vilket känt strategispel börjar med att man bygger en 'Town Center'?", a: ["Age of Empires", "StarCraft", "Warcraft", "SimCity"], r: "Age of Empires" },
    { q: "Vilket program använde man på 90-talet för att 'chatta' (med ett karakteristiskt 'Uh-oh!'-ljud)?", a: ["ICQ", "MSN", "Skype", "Discord"], r: "ICQ" },
    { q: "Vad heter den kända fuskkoden i The Sims som ger dig mer pengar?", a: ["Rosebud / Motherlode", "Kaching", "MoneyTree", "Richman"], r: "Rosebud / Motherlode" },
    // --- DATOR-KUNSKAP ---
    { q: "Vad står förkortningen 'WWW' för i en webbadress?", a: ["World Wide Web", "World Western Web", "Web Wide World", "Web Web Web"], r: "World Wide Web" },
    { q: "Vilken tangent på ett svenskt tangentbord har symbolen '€'?", a: ["E", "5", "U", "G"], r: "E" },
    { q: "Vad kallas det när man ökar hastigheten på sin CPU eller GPU över fabriksinställningarna?", a: ["Overclocking", "Speed-boosting", "Hyper-threading", "Turbo-mode"], r: "Overclocking" },
// --- MINECRAFT (BASICS TILL EXPERT) ---
    { q: "Vilket material krävs för att bygga ramen till en Nether Portal?", a: ["Obsidian", "Bedrock", "Gråsten", "Svartsten"], r: "Obsidian" },
    { q: "Vad händer om man använder en säng i Nether eller The End?", a: ["Den exploderar", "Man somnar", "Ingenting", "Man sätter sin spawn-point"], r: "Den exploderar" },
    { q: "Vilken varelse är känd för sitt karakteristiska fräsande ljud innan den exploderar?", a: ["Creeper", "Zombie", "Skeleton", "Enderman"], r: "Creeper" },
    { q: "Vad måste man mata en varg med för att tämja den så den blir en hund?", a: ["Ben", "Kött", "Fisk", "Äpplen"], r: "Ben" },
    { q: "Vilken färg har de ögon som en Enderman har?", a: ["Lila", "Gröna", "Röda", "Gula"], r: "Lila" },
    { q: "Vilket block är det enda som kan förstöra Bedrock i Survival mode?", a: ["Inget block", "Diamant-hacka", "TNT", "Netherite-hacka"], r: "Inget block" },
    { q: "Vad heter den officiella 'bossen' i The End?", a: ["Ender Dragon", "The Wither", "Warden", "Herobrine"], r: "Ender Dragon" },
    { q: "Vilken matbit ger mest 'hunger saturation' i spelet?", a: ["Guldäpple", "Stekt biff", "Pumpapaj", "Morot"], r: "Guldäpple" },
    { q: "Vad kallas den mörka dimension där den skräckinjagande 'Warden' bor?", a: ["Deep Dark", "The Void", "Nether", "The Caves"], r: "Deep Dark" },
    { q: "Vilket föremål behöver du för att kunna flyga med vingar (Elytra) under en längre tid?", a: ["Fyrverkeriraketer", "Fjädrar", "Kol", "Pilar"], r: "Fyrverkeriraketer" },
    { q: "Vilken varelse förvandlas en gris till om den träffas av blixten?", a: ["Zombie Pigman", "Creeper", "Hoglin", "Wither Skeleton"], r: "Zombie Pigman" },
    { q: "Vad heter skaparen av Minecraft (hans alias)?", a: ["Notch", "Jeb", "Dinnerbone", "Dream"], r: "Notch" },
    { q: "Vilket år släpptes den första publika versionen av Minecraft?", a: ["2009", "2011", "2007", "2010"], r: "2009" },
    { q: "Hur många block högt är ett standard-hopp för en spelare?", a: ["1.25 block", "1 block", "2 block", "1.5 block"], r: "1.25 block" },
    { q: "Vad får man om man blandar vatten och rinnande lava?", a: ["Kullersten (Cobblestone)", "Obsidian", "Magma", "Glas"], r: "Kullersten (Cobblestone)" },
    { q: "Vilken färg har 'Lapis Lazuli'?", a: ["Blå", "Grön", "Lila", "Röd"], r: "Blå" },
    { q: "Vad heter den bybo som byter saker mot diamanter eller smaragder?", a: ["Villager", "Pillager", "Wandering Trader", "Steve"], r: "Villager" },
    { q: "Vilket verktyg behövs för att samla snöbollar?", a: ["Spade", "Hacka", "Yxa", "Händer"], r: "Spade" },
    { q: "Vilken ingrediens behövs för att göra en 'Potion of Healing'?", a: ["Glittrande melon", "Magma-kräm", "Socker", "Spider eye"], r: "Glittrande melon" },
    { q: "Vad händer om man namnger en varelse 'Dinnerbone' med en namnlapp?", a: ["Den hamnar upp och ner", "Den blir osynlig", "Den blir regnbågsfärgad", "Den attackerar allt"], r: "Den hamnar upp och ner" },

    // --- MODERN MUSIK (2020-TALET & TRENDER) ---
    { q: "Vilken kvinnlig artist dominerade 2023 med sin 'Eras Tour'?", a: ["Taylor Swift", "Beyoncé", "SZA", "Dua Lipa"], r: "Taylor Swift" },
    { q: "Vem sjöng den virala låten 'As It Was' som toppade listorna 2022?", a: ["Harry Styles", "Justin Bieber", "The Weeknd", "Shawn Mendes"], r: "Harry Styles" },
    { q: "Vilken låt av Kate Bush fick en enorm nystart 2022 tack vare serien 'Stranger Things'?", a: ["Running Up That Hill", "Wuthering Heights", "Babooshka", "Cloudbusting"], r: "Running Up That Hill" },
    { q: "Vem släppte albumet 'Renaissance' 2022?", a: ["Beyoncé", "Rihanna", "Nicki Minaj", "Doja Cat"], r: "Beyoncé" },
    { q: "Vilken brittisk artist sjunger hitten 'Levitating'?", a: ["Dua Lipa", "Adele", "Olivia Rodrigo", "Bebe Rexha"], r: "Dua Lipa" },
    { q: "Vilken låt blev den mest streamade på Spotify under ett dygn 2024?", a: ["Fortnight (Taylor Swift)", "Vampire (Olivia Rodrigo)", "Flowers (Miley Cyrus)", "Houdini (Eminem)"], r: "Fortnight (Taylor Swift)" },
    { q: "Vem är känd för hitlåten 'Bad Guy' och har ofta neon-grönt hår?", a: ["Billie Eilish", "Halsey", "Lorde", "Melanie Martinez"], r: "Billie Eilish" },
    { q: "Vilken artist gjorde Super Bowl Halftime Show 2024?", a: ["Usher", "Rihanna", "The Weeknd", "Bruno Mars"], r: "Usher" },
    { q: "Vad heter Olivia Rodrigos debutalbum från 2021?", a: ["SOUR", "GUTS", "SWEET", "BITTER"], r: "SOUR" },
    { q: "Vilken låt av Glass Animals blev en enorm 'sleeper hit' och toppade listorna långt efter släpp?", a: ["Heat Waves", "Youth", "Gooey", "Tokyo Drifting"], r: "Heat Waves" },
    { q: "Vem sjunger 'Espresso', en av de största sommarplågorna 2024?", a: ["Sabrina Carpenter", "Tate McRae", "Camila Cabello", "Madison Beer"], r: "Sabrina Carpenter" },
    { q: "Vilken artist är känd för sina masker och lanserade hiten 'Starboy'?", a: ["The Weeknd", "Daft Punk", "Marshmello", "Sia"], r: "The Weeknd" },
    { q: "Vad heter den populära sociala medie-appen som dikterar vilka låtar som blir hits idag?", a: ["TikTok", "Instagram", "Snapchat", "BeReal"], r: "TikTok" },
    { q: "Vem sjunger låten 'Water' som blev en viral dans-trend 2023?", a: ["Tyla", "Ayra Starr", "Doja Cat", "SZA"], r: "Tyla" },
    { q: "Vilken rappare släppte den kontroversiella 'diss-låten' 'Not Like Us' 2024?", a: ["Kendrick Lamar", "Drake", "J. Cole", "Kanye West"], r: "Kendrick Lamar" },
    { q: "Vad heter den fiktiva artisten i filmen 'Barbie' som sjunger 'I'm Just Ken'?", a: ["Ryan Gosling", "Dua Lipa", "Billie Eilish", "Sam Smith"], r: "Ryan Gosling" },
    { q: "Vilket svenskt band gjorde comeback 2021 med albumet 'Voyage' efter 40 år?", a: ["ABBA", "Roxette", "The Hives", "Europe"], r: "ABBA" },
    { q: "Vem sjunger låten 'Houdini' som släpptes i slutet av 2023 (pop-versionen)?", a: ["Dua Lipa", "Eminem", "Harry Styles", "Ariana Grande"], r: "Dua Lipa" },
// --- BRÄDSPEL (40 NYA FRÅGOR) ---
    { q: "Vilket brädspel har en rörlig spelplan där man skjuter in brickor för att hitta skatter?", a: ["Labyrint", "Den försvunna diamanten", "Cluedo", "HeroQuest"], r: "Labyrint" },
    { q: "Vad heter den kända diamanten man letar efter i 'Den försvunna diamanten'?", a: ["Afrikas Stjärna", "Hoppets diamant", "Koh-i-Noor", "Kullinan"], r: "Afrikas Stjärna" },
    { q: "I vilket spel kan man bli skickad till fängelset utan att passera Gå?", a: ["Monopoly", "Risk", "Bondespelet", "Life"], r: "Monopoly" },
    { q: "Vilket ordspel går ut på att bilda ord med bokstavsbrickor som har olika poängvärden?", a: ["Scrabble", "Alfapet", "Boggle", "Wordfeud"], r: "Scrabble" },
    { q: "I Risk, vilket område är känt för att vara svårt att hålla men ger extra förstärkningar?", a: ["Australien", "Nordamerika", "Asien", "Europa"], r: "Asien" },
    { q: "Vad heter det klassiska spelet där man ska gissa vem mördaren är, i vilket rum och med vilket vapen?", a: ["Cluedo", "Mysterium", "Scotland Yard", "Tjuv och Polis"], r: "Cluedo" },
    { q: "Vilket brädspel går ut på att placera brickor för att bygga ett medeltida landskap med städer och kloster?", a: ["Carcassonne", "Catan", "Citadels", "Kingdomino"], r: "Carcassonne" },
    { q: "Hur många pjäser har en spelare i början av ett parti Backgammon?", a: ["15", "12", "10", "16"], r: "15" },
    { q: "I vilket spel samlar man 'tårtbitar' genom att svara rätt på frågor i olika kategorier?", a: ["Trivial Pursuit", "Geni", "Bezzerwizzer", "Jeopardy"], r: "Trivial Pursuit" },
    { q: "Vad kallas den vita bollen i biljard (som ofta används i brädspelsliknande sammanhang)?", a: ["Köboll", "Stöten", "Master", "Cue"], r: "Köboll" },
    { q: "Vilket brädspel från 80-talet handlar om att styra fyra hjältar genom en grotta fylld med monster?", a: ["HeroQuest", "Dungeons & Dragons", "Gloomhaven", "Mice & Mystics"], r: "HeroQuest" },
    { q: "I Othello (Reversi), vilken färg börjar alltid spelet?", a: ["Svart", "Vit", "Det lottas", "Grön"], r: "Svart" },
    { q: "Vilket spel går ut på att dra ut träblock ur ett torn utan att det välter?", a: ["Jenga", "Klask", "Stapla", "Tumble"], r: "Jenga" },
    { q: "I brädspelssammanhang, vad står förkortningen 'RPG' för?", a: ["Role-Playing Game", "Random Point Generator", "Real-time Play Group", "Rapid Play Game"], r: "Role-Playing Game" },
    { q: "Vilket däckbyggarspel (deck-builder) anses ha startat hela genren 2008?", a: ["Dominion", "Magic: The Gathering", "Star Realms", "Ascension"], r: "Dominion" },
    { q: "I schack, vilken pjäs kan bara röra sig diagonalt?", a: ["Löpare", "Häst", "Torn", "Bonde"], r: "Löpare" },
    { q: "Vilket spel använder en stor plastmatta med färgade cirklar och deltagarnas kroppar?", a: ["Twister", "Limbo", "Hoppis", "Flex"], r: "Twister" },
    { q: "Vad heter valutan i spelet Catan?", a: ["Resurser (Trä, lera, etc)", "Guld", "Credits", "Smaragder"], r: "Resurser (Trä, lera, etc)" },
    { q: "I spelet Pandemic, vad händer om man får 8 utbrott (outbreaks)?", a: ["Man förlorar direkt", "Man vinner", "Sjukdomen muterar", "Inget händer"], r: "Man förlorar direkt" },
    { q: "Vilket brädspel går ut på att man ska bygga sju underverk genom kortspel?", a: ["7 Wonders", "Terraforming Mars", "Splendor", "Civilization"], r: "7 Wonders" },

    // --- BLANDAD NÖRDKULTUR & TECH (VARIERANDE SVÅRIGHET) ---
    { q: "Vilken färg har Luke Skywalkers ljussabel i 'Return of the Jedi'?", a: ["Grön", "Blå", "Röd", "Lila"], r: "Grön" },
    { q: "Vad heter den virtuella världen i filmen 'Tron'?", a: ["The Grid", "The Matrix", "The Web", "The Net"], r: "The Grid" },
    { q: "Vilket programmeringsspråk har fått sitt namn efter en brittisk komedigrupp?", a: ["Python", "Java", "C++", "Ruby"], r: "Python" },
    { q: "Vad heter den legendariska kartan i Counter-Strike som utspelar sig i en ökenstad?", a: ["Dust II", "Mirage", "Inferno", "Aztec"], r: "Dust II" },
    { q: "Vilken karaktär i Lord of the Rings säger 'You shall not pass!'?", a: ["Gandalf", "Saruman", "Frodo", "Aragorn"], r: "Gandalf" },
    { q: "Vad står förkortningen 'HTTP' för?", a: ["Hypertext Transfer Protocol", "High Tech Terminal Process", "Hyperlink Text Tool", "Home Tool Transfer Pro"], r: "Hypertext Transfer Protocol" },
    { q: "Vem grundade SpaceX och Tesla?", a: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"], r: "Elon Musk" },
    { q: "Vad heter roboten i 'Interstellar' som har en humor-inställning?", a: ["TARS", "R2-D2", "HAL 9000", "Wall-E"], r: "TARS" },
    { q: "Vilket år släpptes det första 'Grand Theft Auto'-spelet?", a: ["1997", "1995", "1999", "2001"], r: "1997" },
    { q: "Vad kallas en person som 'streamar' spel på plattformen Twitch?", a: ["Streamer", "Broadcaster", "YouTuber", "Vlogger"], r: "Streamer" },
    { q: "Vad heter den lilla orangea roboten i Star Wars: The Force Awakens?", a: ["BB-8", "R2-D2", "C-3PO", "K-2SO"], r: "BB-8" },
    { q: "Vilket företag ligger bakom spelserien 'The Legend of Zelda'?", a: ["Nintendo", "Sega", "Sony", "Ubisoft"], r: "Nintendo" },
    { q: "Vad kallas den teknik där man skapar digitala pengar utan en central bank?", a: ["Blockchain", "Cloud Computing", "Fiber", "SaaS"], r: "Blockchain" },
    { q: "Vilken Marvel-hjälte är känd som 'The Merc with a Mouth'?", a: ["Deadpool", "Spider-Man", "Iron Man", "Thor"], r: "Deadpool" },
    { q: "Vad heter rymdskeppet i tv-serien 'Firefly'?", a: ["Serenity", "Enterprise", "Millennium Falcon", "Rocinante"], r: "Serenity" },
    { q: "Vilken pixel-baserad sandlåda skapades av 'Notch'?", a: ["Minecraft", "Terraria", "Roblox", "Stardew Valley"], r: "Minecraft" },
    { q: "Vad står 'AI' för?", a: ["Artificiell Intelligens", "Advanced Interface", "Automated Information", "Active Integration"], r: "Artificiell Intelligens" },
    { q: "Vilket socialt nätverk köptes upp och döptes om till 'X'?", a: ["Twitter", "Facebook", "Snapchat", "TikTok"], r: "Twitter" },
    { q: "Vem skapade operativsystemet Linux?", a: ["Linus Torvalds", "Steve Jobs", "Bill Gates", "Mark Shuttleworth"], r: "Linus Torvalds" },
    { q: "Vad heter det fiktiva grundämnet som gör Captain Americas sköld oförstörbar?", a: ["Vibranium", "Adamantium", "Kryptonit", "Beskar"], r: "Vibranium" },
// --- BRÄDSPEL (NYA!) ---
    { q: "Vilket brädspel går ut på att bygga vägar, riddare och städer på ön Catan?", a: ["Settlers of Catan", "Carcassonne", "Ticket to Ride", "Terraforming Mars"], r: "Settlers of Catan" },
    { q: "Vilken färg har de dyraste tomterna (Norrmalmstorg & Centrum) i svenska Monopoly?", a: ["Mörkblå", "Gröna", "Gula", "Röda"], r: "Mörkblå" },
    { q: "I vilket spel använder man små träfigurer som kallas 'Meeple'?", a: ["Carcassonne", "Risk", "Pandemic", "7 Wonders"], r: "Carcassonne" },
    { q: "Hur många pjäser har varje spelare i början av ett schackspel?", a: ["16", "12", "20", "8"], r: "16" },
    { q: "Vilket spel går ut på att gissa ord genom att rita på tid?", a: ["Pictionary", "Med andra ord", "Alias", "Cluedo"], r: "Pictionary" },
    { q: "I vilket brädspel försöker man stoppa globala sjukdomsutbrott?", a: ["Pandemic", "Risk", "Operation", "Mice and Mystics"], r: "Pandemic" },
    { q: "Vad heter det klassiska spelet där man ska knuffa ut motståndarens kulor från spelplanen?", a: ["Abalone", "Othello", "Fia med knuff", "Kulspel"], r: "Abalone" },
    { q: "Vilket brädspel utspelar sig i ett hemsökt hus där en spelare kan bli en förrädare?", a: ["Betrayal at House on the Hill", "Cluedo", "Mysterium", "Dead of Winter"], r: "Betrayal at House on the Hill" },
    { q: "Hur många prickar finns det totalt på en vanlig sexsidig tärning?", a: ["21", "20", "24", "18"], r: "21" },
    { q: "I vilket spel samlar man tågvagnar för att bygga rutter mellan städer?", a: ["Ticket to Ride", "Monopoly", "Catan", "Dungeon Run"], r: "Ticket to Ride" },
    // --- NINTENDO SWITCH 2 & FRAMTIDENS GAMING ---
    { q: "Vilken teknik ryktas Nintendo Switch 2 använda för att förbättra grafiken med hjälp av AI?", a: ["DLSS", "Ray Tracing", "PhysX", "Teraflops"], r: "DLSS" },
    { q: "Vilken typ av skärmteknik hoppas många fans ska finnas på Switch 2 för bättre färger?", a: ["OLED", "LCD", "Plasma", "CRT"], r: "OLED" },
    { q: "Vad kallas bakåtkompatibilitet, en funktion som Switch 2 förväntas ha?", a: ["Att kunna spela gamla spel", "Att kunna spela online", "Att ladda snabbare", "Att ha trådlösa kontroller"], r: "Att kunna spela gamla spel" },

    // --- MATEMATIK (KLURIGT & LOGIK) ---
    { q: "Vad kallas ett tal som bara är delbart med sig självt och 1?", a: ["Primtal", "Jämnt tal", "Negativt tal", "Bråktal"], r: "Primtal" },
    { q: "Vad är roten ur 144?", a: ["12", "14", "10", "16"], r: "12" },
    { q: "Om du har en d20-tärning, vad är sannolikheten i procent att slå en 'Natural 20'?", a: ["5%", "10%", "1%", "20%"], r: "5%" },
    { q: "Vad är värdet på 'pi' avrundat till två decimaler?", a: ["3.14", "3.12", "3.16", "3.10"], r: "3.14" },
// --- ELEKTRICITET & ELLÄRA (VOLT, WATT, OHM, AMPERE) ---
    { q: "Vilken enhet används för att mäta elektrisk ström?", a: ["Ampere (A)", "Volt (V)", "Watt (W)", "Ohm (Ω)"], r: "Ampere (A)" },
    { q: "Vad mäter man med enheten Watt?", a: ["Effekt", "Spänning", "Resistans", "Ljusstyrka"], r: "Effekt" },
    { q: "Enligt Ohms lag: Om spänningen (V) ökar och resistansen (Ω) är samma, vad händer med strömmen (A)?", a: ["Den ökar", "Den minskar", "Den försvinner", "Inget händer"], r: "Den ökar" },
    { q: "Vilken enhet mäter elektriskt motstånd (resistans)?", a: ["Ohm (Ω)", "Watt (W)", "Volt (V)", "Ampere (A)"], r: "Ohm (Ω)" },
    { q: "Om en apparat drar 2 Ampere vid 230 Volt, vad är effekten i Watt? (P = U * I)", a: ["460 W", "230 W", "115 W", "920 W"], r: "460 W" },
    { q: "Vilken färg har oftast jordkabeln i en svensk elinstallation?", a: ["Gul/Grön", "Blå", "Brun", "Svart"], r: "Gul/Grön" },
    { q: "Vad kallas komponenten som begränsar strömmen i en krets?", a: ["Resistor", "Kondensator", "Transistor", "Diod"], r: "Resistor" },
    { q: "Vad står förkortningen AC för inom el?", a: ["Växelström", "Likström", "Batteriström", "Säkring"], r: "Växelström" },
    { q: "Vilken spänning har vi i ett vanligt svenskt vägguttag?", a: ["230V", "110V", "12V", "400V"], r: "230V" },
    { q: "Vad händer om du kopplar för många apparater till en säkring?", a: ["Säkringen går", "Spänningen ökar", "Strömmen tar slut", "Inget"], r: "Säkringen går" },

    // --- MATEMATIK: HUVUDRÄKNING & LOGIK ---
    { q: "Vad är 7 multiplicerat med 8?", a: ["56", "54", "62", "49"], r: "56" },
    { q: "Vad blir 100 dividerat med 4?", a: ["25", "20", "30", "15"], r: "25" },
    { q: "Vad är 15 % av 200?", a: ["30", "15", "20", "45"], r: "30" },
    { q: "Vad är nästa tal i serien: 2, 4, 8, 16...?", a: ["32", "24", "20", "64"], r: "32" },
    { q: "Vad blir 9 * 9?", a: ["81", "72", "99", "90"], r: "81" },
    { q: "Vad är hälften av en fjärdedel?", a: ["En åttondel", "En sjättedel", "En femtedel", "En halv"], r: "En åttondel" },
    { q: "Vad är 120 + 85?", a: ["205", "195", "215", "225"], r: "205" },
    { q: "Hur många grader är en rät vinkel?", a: ["90°", "180°", "45°", "360°"], r: "90°" },
    { q: "Vad är 10 upphöjt till 3 (10³)?", a: ["1000", "300", "30", "100"], r: "1000" },
    { q: "Vad blir 50 - (10 * 2)?", a: ["30", "80", "40", "20"], r: "30" },

    // --- MATEMATIK: GEOMETRI & ENHETER ---
    { q: "Hur många millimeter går det på en decimeter?", a: ["100 mm", "10 mm", "1000 mm", "50 mm"], r: "100 mm" },
    { q: "Vad kallas en triangel där alla sidor är lika långa?", a: ["Liksidig", "Likbent", "Rätvinklig", "Oliksidig"], r: "Liksidig" },
    { q: "Hur räknar man ut arean på en rektangel?", a: ["Basen * Höjden", "Sidan * 4", "Radien * Pi", "Basen + Höjden"], r: "Basen * Höjden" },
    { q: "Vad är omkretsen på en kvadrat om sidan är 5 cm?", a: ["20 cm", "25 cm", "10 cm", "15 cm"], r: "20 cm" },
    { q: "Hur många sekunder går det på en kvart?", a: ["900 s", "600 s", "1200 s", "150 s"], r: "900 s" },
    { q: "Vad är 1000 gram i kilogram?", a: ["1 kg", "10 kg", "0.1 kg", "100 kg"], r: "1 kg" },
    { q: "Vilken form har en tärning?", a: ["Kub", "Klot", "Cylinder", "Pyramid"], r: "Kub" },
    { q: "Vad är summan av vinklarna i en triangel?", a: ["180°", "360°", "90°", "270°"], r: "180°" },
    { q: "Vad kallas linjen från mitten av en cirkel ut till kanten?", a: ["Radie", "Diameter", "Omkrets", "Tangent"], r: "Radie" },
    { q: "Om en klocka är 14:45, hur många minuter är det kvar till 16:00?", a: ["75 min", "65 min", "15 min", "45 min"], r: "75 min" },
// --- HP-STIL: MATEMATISKA BERÄTTELSER PÅ LANBIT ---
    { q: "Alice har med sig 44 energidrycker till LANBIT. Hon planerar att dricka 3 stycken per dygn. Hur många hela drycker har hon kvar när det fjärde dygnet börjar?", a: ["35", "32", "38", "41"], r: "35" },
    { q: "Bertil ska köpa nätverkskabel. Varje rulle är 12 meter lång. Han behöver totalt 100 meter kabel. Hur många meter kabel blir över på den sista rullen han tvingas köpa?", a: ["8", "4", "2", "6"], r: "8" },
    { q: "Calle, Denise och Ebba delar på en påse med 58 nätverkskontakter. De tar lika många var tills det inte går att dela jämnt längre. Hur många kontakter blir kvar i påsen?", a: ["1", "2", "0", "3"], r: "1" },
    { q: "Fanny har en budget på 500 kr för mat under LANBIT. Om varje pizza kostar 85 kr, hur många hela pizzor kan hon köpa innan pengarna inte räcker till en till?", a: ["5", "6", "4", "7"], r: "5" },
    { q: "Gustav laddar ner ett spel på 74 GB. Hans nedladdningshastighet är stabil på 8 GB per timme. Hur många GB återstår att ladda ner efter 9 timmar?", a: ["2", "4", "6", "0"], r: "2" },
    { q: "Hanna ska arrangera en turnering för 67 deltagare. Varje grupp måste bestå av exakt 6 spelare. Hur många spelare kan inte placeras i en fullständig grupp?", a: ["1", "7", "3", "5"], r: "1" },
    { q: "Ivar köper 92 stycken buntband för att snygga till kablarna. Han använder 15 buntband per datorhörna. Hur många buntband har han kvar efter att ha fixat 6 hörnor?", a: ["2", "12", "5", "8"], r: "2" },
    { q: "Julia har 35 timmar kvar på sitt LAN-pass. Om hon sover 6 timmar per dygn, hur många timmar vaken tid har hon kvar om hon stannar exakt 1,5 dygn?", a: ["27", "29", "24", "31"], r: "27" },
    { q: "Karl bygger en dator och har 23 skruvar. Varje fläkt kräver 4 skruvar. Om han monterar 5 fläktar, hur många skruvar får han över?", a: ["3", "1", "2", "0"], r: "3" },
    { q: "Lova har en skärm som drar 45 Watt. Hur många sådana skärmar kan hon teoretiskt koppla på en grendosa som klarar maximalt 200 Watt innan den blir överbelastad?", a: ["4", "5", "3", "6"], r: "4" },
// NORDISKA TUNNEL-UTMANINGAR (10 st)
    { q: "Vad heter tunneln som förbinder Norge och Sverige under Svinesund?", a: ["Halleby-tunneln", "Svinesundstunneln", "Skagerrak-röret", "Finns ingen tunnel"], r: "Finns ingen tunnel" },
    { q: "Vilken tunnel i Stockholm är känd för att ha 'slussat' trafik sedan 2004?", a: ["Södra länken", "Essingeleden", "Norra länken", "Muskötunneln"], r: "Södra länken" },
    { q: "Vad heter tunneln under Stora Bält i Danmark?", a: ["Sprogø-tunneln", "Storebæltstunnelen", "Danish Link", "The Belt Hole"], r: "Storebæltstunnelen" },
    { q: "Vilken är Sveriges längsta vägtunnel?", a: ["Södra länken", "Muskötunneln", "Törnskogstunneln", "Lundbytunneln"], r: "Södra länken" },
    { q: "Vilken tunnel är en del av Citybanan i Stockholm?", a: ["Söderströmstunneln", "Blå linjen", "Brunkebergstunneln", "Klaratunneln"], r: "Söderströmstunneln" },
    { q: "Vad heter den undersjöiska tunneln som ska byggas mellan Danmark och Tyskland?", a: ["Femern Bält-tunneln", "Kiel-tunneln", "Östersjöröret", "NordLink"], r: "Femern Bält-tunneln" },
    { q: "Vilken tunnel i Norge är känd för att vara världens längsta vägtunnel?", a: ["Lærdalstunneln", "Gudvangatunneln", "Ryfylketunneln", "Folgefonnatunneln"], r: "Lærdalstunneln" },
    { q: "Vad heter den gamla tunneln i Stockholm för fotgängare under Brunkebergsåsen?", a: ["Brunkebergstunneln", "Gula gången", "Hötorgsgången", "Sergeltunneln"], r: "Brunkebergstunneln" },
    { q: "Vilken tunnel förbinder ön Värdö med fastlandet på Åland?", a: ["Vårdö-tunneln", "Bomarsundstunneln", "Märket-röret", "Finns ingen tunnel"], r: "Finns ingen tunnel" },
    { q: "Vad heter tågtunneln som går under centrala Malmö?", a: ["Citytunneln", "Öresundsröret", "Triangeltunneln", "Malmölänken"], r: "Citytunneln" },
   /* --- ERSÄTTNINGSFRÅGOR: NORDISKA TUNNELBANOR (EJ SVERIGE) --- */
    // OSLO T-BANE (NORGE)
    { q: "Vad kallas tunnelbanan i Oslo?", a: ["T-banen", "Tunnelbanen", "Bytrikken", "Metroen"], r: "T-banen" },
    { q: "Vilken station i Oslo fungerar som den centrala knutpunkten för alla linjer?", a: ["Majorstuen", "Jernbanetorget", "Nationaltheatret", "Grønland"], r: "Majorstuen" },
    { q: "Vilken linje i Oslo tar dig upp till den kända hoppbacken Holmenkollen?", a: ["Linje 1", "Linje 2", "Linje 3", "Linje 5"], r: "Linje 1" },
    { q: "Hur många linjer består Oslos T-bane av?", a: ["5", "4", "6", "3"], r: "5" },
    { q: "Vilken färg har logotypen för Oslos T-bane?", a: ["Blå och vit", "Röd och vit", "Grön och svart", "Gul och blå"], r: "Blå och vit" },

    // HELSINGFORS METRO (FINLAND)
    { q: "Vilket år invigdes tunnelbanan i Helsingfors?", a: ["1982", "1975", "1990", "1968"], r: "1982" },
    { q: "Vilken färg har tågen i Helsingfors tunnelbana?", a: ["Orange", "Blå", "Grön", "Röd"], r: "Orange" },
    { q: "Vad heter den västliga utbyggnaden av Helsingfors tunnelbana?", a: ["Västmetron", "Sjömetron", "Kustbanan", "Botnia-linjen"], r: "Västmetron" },
    { q: "Helsingfors tunnelbana sägs ofta vara världens...?", a: ["Nordligaste", "Kortaste", "Djupaste", "Säkraste"], r: "Nordligaste" },
    { q: "Vilken är den östra slutstationen i Helsingfors (vid sidan av Mellungsbacka)?", a: ["Nordsjö", "Hertonäs", "Gårdsbacka", "Fiskehamnen"], r: "Nordsjö" },

    // KÖPENHAMNS METRO (DANMARK)
    { q: "Vad är unikt med tågen i Köpenhamns Metro?", a: ["De är helt förarlösa", "De går på diesel", "De är gjorda av trä", "De har två våningar"], r: "De är helt förarlösa" },
    { q: "Vad kallas den cirkulära linjen i Köpenhamns tunnelbana?", a: ["Cityringen", "Øresundslinjen", "København Loop", "The Circle"], r: "Cityringen" },
    { q: "Vilken färg har linje M1 och M2 i Köpenhamn?", a: ["Grön och Gul", "Blå och Röd", "Lila och Vit", "Svart och Grå"], r: "Grön och Gul" },
    { q: "Till vilken känd plats kan du åka direkt med Köpenhamns Metro M2?", a: ["Flygplatsen (Kastrup)", "Legoland", "Ströget", "Kronborg Slot"], r: "Flygplatsen (Kastrup)" },
    { q: "Hur ofta går tågen i Köpenhamns Metro under rusningstid?", a: ["Varje 2-4 minut", "Varje 10:e minut", "Varje minut", "Var 15:e minut"], r: "Varje 2-4 minut" },

    // JÄMFÖRELSE & INFRASTRUKTUR
    { q: "Vilken nordisk stad har flest tunnelbanestationer efter Stockholm?", a: ["Oslo", "Helsingfors", "Köpenhamn", "Reykjavik"], r: "Oslo" },
    { q: "Vilken av dessa städer har en tunnelbana som till stor del går ovan jord?", a: ["Oslo", "Köpenhamn", "Helsingfors", "Alla tre"], r: "Alla tre" },
    { q: "I vilken stad hittar man stationen 'Itäkeskus' (Östra centrum)?", a: ["Helsingfors", "Oslo", "Mariehamn", "Esbo"], r: "Helsingfors" },
    { q: "Vilken färg har linjenätet på kartan för Oslos 'Fellestunnel'?", a: ["Alla färger (delad)", "Svart", "Grå", "Vit"], r: "Alla färger (delad)" },
    { q: "Vilken nordisk huvudstad saknar helt tunnelbana (Metro)?", a: ["Reykjavik", "Oslo", "Helsingfors", "Köpenhamn"], r: "Reykjavik" },
 // --- LOGIK & PROPORTIONER (HP-STIL) ---
    { q: "Måns och Nora delar på en datamängd på 120 GB. Måns har laddat ner dubbelt så mycket som Nora. Hur många GB har Nora laddat ner?", a: ["40", "60", "30", "80"], r: "40" },
    { q: "Olle ser att 15 % av platserna på LANBIT är tomma. Om det finns totalt 400 platser, hur många platser är upptagna?", a: ["340", "385", "60", "360"], r: "340" },
    { q: "Petra kör en stream i 4 timmar. Varje timme förbrukar 2,5 GB data. Om hon har en pott på 12 GB, hur mycket data har hon kvar efteråt?", a: ["2", "4", "1", "0"], r: "2" },
    { q: "Quinn har en tärningsserie där resultaten är 14, 18 och 22. Vad är medelvärdet av dessa tre resultat?", a: ["18", "16", "20", "17"], r: "18" },
    { q: "Rasmus ska dela ut 83 flyers på LANBIT. Han ger 9 stycken till varje rad med bord. Hur många flyers har han kvar när han når den sista ofullständiga raden?", a: ["2", "11", "5", "1"], r: "2" },
    { q: "Sara har 100 godisbitar. Hon ger bort 2/5 av dem. Hur många bitar har hon kvar själv?", a: ["60", "40", "50", "20"], r: "60" },
    { q: "Torsten räknar ut att en nedladdning tar 50 minuter. Om 70 % av tiden har gått, hur många minuter är det kvar?", a: ["15", "10", "20", "25"], r: "15" },
    { q: "Urban köper 3 st tangentbord för totalt 2100 kr. Vad kostar 5 stycken av samma modell?", a: ["3500", "2800", "4200", "3100"], r: "3500" },
    { q: "Vera har 112 digitala kort. Hon vill lägga dem i mappar med 10 kort i varje. Hur många kort blir över i den sista mappen?", a: ["2", "1", "12", "0"], r: "2" },
    { q: "Walter har 19 timmar på sig att koda. Han jobbar i pass om 3 timmar med 1 timmes paus mellan passen. Hur många hela pass hinner han med?", a: ["5", "4", "6", "3"], r: "5" },
    // --- BLANDAD MATTE & TEKNIK-LOGIK ---
    { q: "Vad blir 0.5 + 0.25?", a: ["0.75", "0.7", "1.0", "0.525"], r: "0.75" },
    { q: "Vad är 10 % av 1 miljon?", a: ["100 000", "10 000", "1 000", "500 000"], r: "100 000" },
    { q: "Vad är 7 + 7 / 7?", a: ["8", "2", "1", "14"], r: "8" },
    { q: "Hur många bitar går det på en byte?", a: ["8", "10", "16", "4"], r: "8" },
    { q: "Vad är 25 * 4?", a: ["100", "80", "125", "75"], r: "100" },
    { q: "Vilket tal är varken positivt eller negativt?", a: ["0", "1", "-1", "Pi"], r: "0" },
    { q: "Vad blir 11 * 12?", a: ["132", "121", "110", "144"], r: "132" },
    { q: "Hur många minuter är 2.5 timmar?", a: ["150 min", "120 min", "180 min", "250 min"], r: "150 min" },
    { q: "Vad är 1 minus 1/3?", a: ["2/3", "1/3", "3/3", "0"], r: "2/3" },
    { q: "Vad är kvadratroten ur 64?", a: ["8", "6", "7", "9"], r: "8" },
    // --- FYSIK & NATURVETENSKAP ---
    { q: "Vilken känd fysiker formulerade formeln E=mc²?", a: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Stephen Hawking"], r: "Albert Einstein" },
    { q: "Vad kallas kraften som drar alla föremål mot jordens mitt?", a: ["Gravitation", "Magnetism", "Centrifugalkraft", "Friktion"], r: "Gravitation" },
    { q: "Vilken enhet mäter man elektrisk spänning i?", a: ["Volt", "Ampere", "Watt", "Ohm"], r: "Volt" },
    { q: "I vilken hastighet färdas ljuset i vakuum (ungefär)?", a: ["300 000 km/s", "100 000 km/s", "500 000 km/s", "1 000 000 km/s"], r: "300 000 km/s" },
// --- MATEMATIK & LOGIK (XYZ/KVA/NOG) ---
    { q: "Om x + x + x = 45, vad är då x * 2?", a: ["30", "15", "45", "10"], r: "30" },
    { q: "Vilket tal är resultatet av 0,75 dividerat med 0,25?", a: ["3", "0,3", "0,5", "4"], r: "3" },
    { q: "Vad är x om 2x - 7 = 13?", a: ["10", "15", "6", "20"], r: "10" },
    { q: "Hur många minuter går det på 1,75 timmar?", a: ["105", "115", "75", "110"], r: "105" },
    { q: "Vilket bråk är störst?", a: ["3/4", "2/3", "5/8", "1/2"], r: "3/4" },
    { q: "Om en rektangel har omkretsen 24 cm och ena sidan är 4 cm, vad är arean?", a: ["32 cm²", "16 cm²", "48 cm²", "24 cm²"], r: "32 cm²" },
    { q: "Vad är medelvärdet av 4, 8, 15 och 17?", a: ["11", "10", "12", "9"], r: "11" },
    { q: "Vad blir 2³ + 3²?", a: ["17", "12", "15", "13"], r: "17" },
    { q: "Om 20% av ett tal är 40, vad är talet?", a: ["200", "160", "80", "400"], r: "200" },
    { q: "Vad är roten ur 0,49?", a: ["0,7", "0,07", "7", "0,49"], r: "0,7" },
    { q: "En triangel har vinklarna 45° och 75°. Vad är den tredje vinkeln?", a: ["60°", "70°", "80°", "90°"], r: "60°" },
    { q: "Vilket tal följer i serien: 1, 3, 7, 15, ...?", a: ["31", "25", "29", "22"], r: "31" },
    { q: "Vad är produkten av 0,6 och 0,5?", a: ["0,3", "0,11", "1,1", "3,0"], r: "0,3" },
    { q: "Hur många sekunder är 5% av en timme?", a: ["180", "300", "60", "120"], r: "180" },
    { q: "Vad är 1,2 miljoner dividerat med 400 000?", a: ["3", "30", "0,3", "4"], r: "3" },

    // --- SPRÅK & ORDFÖRSTÅELSE (ORD) ---
    { q: "Vad betyder ordet 'Ambivalens'?", a: ["Tveksamhet", "Självsäkerhet", "Likgiltighet", "Ilska"], r: "Tveksamhet" },
    { q: "Vad är en 'Anakronism'?", a: ["Något otidsenligt", "En sorts sjukdom", "Ett matematiskt fel", "En känd dikt"], r: "Något otidsenligt" },
    { q: "Vad betyder ordet 'Godtycklig'?", a: ["Slumpmässig", "Snäll", "Bestämd", "Viktig"], r: "Slumpmässig" },
    { q: "Vad är synonymt med 'Implicit'?", a: ["Underförstått", "Tydligt", "Krångligt", "Falskt"], r: "Underförstått" },
    { q: "Vad betyder 'Kutym'?", a: ["Sedvänja", "Skämt", "Kostym", "Lag"], r: "Sedvänja" },
    { q: "Vad innebär det att vara 'Pragmatisk'?", a: ["Praktisk", "Drömmande", "Teoretisk", "Envis"], r: "Praktisk" },
    { q: "Vad betyder 'Paradox'?", a: ["Motsägelse", "Likhet", "Parallell", "Slutsats"], r: "Motsägelse" },
    { q: "Vad betyder ordet 'Futil'?", a: ["Obetydlig", "Framtida", "Arg", "Snabb"], r: "Obetydlig" },
    { q: "Vad är motsatsen till 'Relevant'?", a: ["Irrelevant", "Viktig", "Sann", "Objektiv"], r: "Irrelevant" },
    { q: "Vad betyder 'Initialt'?", a: ["I början", "Slutgiltigt", "Ofta", "Sällan"], r: "I början" },

    // --- LÄSTAL & BERÄTTELSER (HP-STIL) ---
    { q: "Alice köper 4 kg äpplen för 80 kr. Vad kostar 7 kg?", a: ["140 kr", "120 kr", "160 kr", "100 kr"], r: "140 kr" },
    { q: "Bertil kör 150 km på 2 timmar. Vad är hans medelhastighet?", a: ["75 km/h", "60 km/h", "80 km/h", "70 km/h"], r: "75 km/h" },
    { q: "Calle sparar 200 kr i månaden. Hur mycket har han efter 3,5 år?", a: ["8400 kr", "7200 kr", "6000 kr", "9600 kr"], r: "8400 kr" },
    { q: "Denise har en påse med 60 kolor. Hon ger bort 1/3. Hur många har hon kvar?", a: ["40", "20", "30", "50"], r: "40" },
    { q: "Ebba sänker priset på en vara med 25%. Nu kostar den 750 kr. Vad kostade den innan?", a: ["1000 kr", "900 kr", "1100 kr", "850 kr"], r: "1000 kr" },
    { q: "Fanny blandar saft 1:5. Hur mycket färdig dryck får hon av 2 dl koncentrat?", a: ["12 dl", "10 dl", "6 dl", "8 dl"], r: "12 dl" },
    { q: "Gustav har 112 buntband och använder 10 per dator. Hur många blir över efter 11 datorer?", a: ["2", "1", "12", "0"], r: "2" },
    { q: "Hanna sover 8 timmar per natt. Hur stor andel av dygnet är hon vaken?", a: ["2/3", "1/3", "1/2", "3/4"], r: "2/3" },
    { q: "Ivar drar 2 Ampere vid 230 Volt. Vad är effekten i Watt?", a: ["460 W", "230 W", "115 W", "920 W"], r: "460 W" },
    { q: "Julia har en d20. Vad är sannolikheten att hon slår 15 eller högre?", a: ["30%", "20%", "25%", "15%"], r: "30%" },
    // --- AVANCERAD TEKNIK & HÅRDVARA ---
    { q: "Vad står förkortningen SSD för i lagringssammanhang?", a: ["Solid State Drive", "Super Speed Disk", "Static System Data", "Silent Software Drive"], r: "Solid State Drive" },
    { q: "Vilket material används oftast för att tillverka halvledare till datorchipp?", a: ["Kisel (Silicon)", "Järn", "Plast", "Koppar"], r: "Kisel (Silicon)" },
    { q: "Vad kallas den lilla batterityp (ofta silverfärgad) som sparar inställningar på ett moderkort?", a: ["CR2032", "AA", "Li-Ion", "9V"], r: "CR2032" },
    { q: "Vilken typ av kabel används för att skicka både bild och ljud digitalt till en skärm?", a: ["HDMI", "VGA", "AUX", "S-Video"], r: "HDMI" },
// --- CYBERSÄKERHET & IT-SÄKERHET ---
    { q: "Varför är det farligt att lämna datorn olåst på ett LAN?", a: ["Någon kan installera skadlig kod", "Skärmen kan bränna fast", "Internet slutar fungera", "Tangentbordet blir smutsigt"], r: "Någon kan installera skadlig kod" },
    { q: "Vad bör du göra om en främling ber om ditt lösenord för att 'fixa din ping'?", a: ["Neka och anmäla", "Ge ut det direkt", "Ge ett gammalt lösenord", "Skratta och ge det"], r: "Neka och anmäla" },
    { q: "Vad kallas en attack där en hemsida överbelastas med trafik tills den kraschar?", a: ["DDoS", "Spam", "Lag", "Ping-pong"], r: "DDoS" },
    { q: "Vilket program skyddar din dator mot virus i realtid?", a: ["Antivirus", "Webbläsare", "Spotify", "Discord"], r: "Antivirus" },
    { q: "Vad är 'Social Engineering'?", a: ["Att lura folk till info", "Att bygga nätverk", "Att koda sociala medier", "Att laga datorer"], r: "Att lura folk till info" },
    { q: "Vad står 'HTTPS' för i en webbadress (S:et)?", a: ["Secure", "Speed", "System", "Standard"], r: "Secure" },
    { q: "Varför ska man inte använda samma lösenord på alla sidor?", a: ["Om en hackas, hackas alla", "Det är svårt att minnas", "Datorn blir långsammare", "Det är olagligt"], r: "Om en hackas, hackas alla" },
    { q: "Vad är en 'VPN' bra för?", a: ["Dölja din IP-adress", "Öka din FPS", "Ladda ner mer RAM", "Städa hårddisken"], r: "Dölja din IP-adress" },

    // --- SCI-FI & FILM (RÖJAR-RALF ÄNDRAD) ---
    { q: "I vilken animerad film ser vi Bowser sitta i ett skurkmöte?", a: ["Röjar-Ralf", "Draktränaren", "Toy Story", "Shrek"], r: "Röjar-Ralf" },
    { q: "Vem skapade Star Wars-universumet?", a: ["George Lucas", "Steven Spielberg", "J.J. Abrams", "Ridley Scott"], r: "George Lucas" },
    { q: "Vilken tidsmaskin används i 'Tillbaka till framtiden'?", a: ["En DeLorean", "En TARDIS", "En telefonkiosk", "En rymdfärja"], r: "En DeLorean" },
    { q: "I filmen 'Inception', vad används för att manipulera människor?", a: ["Drömmar", "Robotar", "Tidsresor", "Utomjordingar"], r: "Drömmar" },
    { q: "Vad heter den lilla roboten som städar jorden i Pixar-filmen?", a: ["WALL-E", "R2-D2", "Baymax", "Johnny 5"], r: "WALL-E" },
    { q: "Vilket år utspelar sig 'Blade Runner' (originalet)?", a: ["2019", "2049", "1999", "3000"], r: "2019" },
    { q: "I 'The Hunger Games', vad heter huvudpersonen?", a: ["Katniss Everdeen", "Hermione Granger", "Tris Prior", "Bella Swan"], r: "Katniss Everdeen" },
    { q: "Vilken superhjälte kommer från planeten Krypton?", a: ["Superman", "Thor", "Star-Lord", "Wonder Woman"], r: "Superman" },
    { q: "Vem spelar Iron Man i Marvel-filmerna?", a: ["Robert Downey Jr.", "Chris Evans", "Tom Holland", "Mark Ruffalo"], r: "Robert Downey Jr." },
    { q: "Vad heter den onda datorn i 'Terminator'?", a: ["Skynet", "GlaDOS", "Jarvis", "Ultron"], r: "Skynet" },

    // --- MATEMATIK & LOGIK (HP-STIL) ---
    { q: "Om Adam har 60 äpplen och ger 1/4 till Bertil, hur många har han kvar?", a: ["45", "15", "30", "50"], r: "45" },
    { q: "Vad är summan av 13, 27 och 40?", a: ["80", "70", "90", "75"], r: "80" },
    { q: "Vilket tal är hälften av 0,5?", a: ["0,25", "0,1", "1,0", "0,05"], r: "0,25" },
    { q: "Vad är 9 gånger 7?", a: ["63", "56", "72", "64"], r: "63" },
    { q: "Hur många sidor har en hexagon?", a: ["6", "5", "8", "4"], r: "6" },
    { q: "Om x + 15 = 40, vad är x?", a: ["25", "35", "15", "20"], r: "25" },
    { q: "Vad är 10% av 500?", a: ["50", "5", "100", "10"], r: "50" },
    { q: "Vad blir 2 + 2 * 2?", a: ["6", "8", "4", "10"], r: "6" },
    { q: "Vad kallas ett tal som bara kan delas med 1 och sig självt?", a: ["Primtal", "Jämnt tal", "Negativt tal", "Decimaltal"], r: "Primtal" },
    { q: "Hur många grader är ett helt varv?", a: ["360°", "180°", "90°", "100°"], r: "360°" },
{ 
        q: "Du försöker installera ett spel men får felet 'Not enough disk space'. Vad är den snabbaste (och mest smärtsamma) lösningen?", 
        a: ["Tömma Papperskorgen", "Köpa mer RAM", "Radera System32", "Installera om Windows"], 
        r: "Tömma Papperskorgen" 
    },
    { 
        q: "Vad kallas det när du råkar spilla energidryck i tangentbordet och tangenterna börjar skriva 'aaaaaaaaaaaa' av sig själva?", 
        a: ["Key Ghosting", "Kortslutning", "Sticky Keys", "Macro-bugg"], 
        r: "Kortslutning" 
    },
    { 
        q: "Din router lyser rött. Vad är det första en 'pro-gamer' gör innan han börjar gråta?", 
        a: ["Startar om routern", "Ringer polisen", "Byter nätverkskabel", "Går utomhus"], 
        r: "Startar om routern" 
    },
    { 
        q: "Du hör ett klickande ljud inifrån chassit som låter som en klocka. Vilken komponent håller på att dö?", 
        a: ["Hårddisken (HDD)", "Processorn", "Grafikkortet", "CD-läsaren"], 
        r: "Hårddisken (HDD)" 
    },
    { 
        q: "Vad kallas det när skärmen ser ut som ett trasigt pussel med konstiga färger och streck?", 
        a: ["Artifacts", "Glitch-art", "Pixel-burn", "Gamma-error"], 
        r: "Artifacts" 
    },
    { 
        q: "Varför vägrar din gamla dator starta trots att fläktarna snurrar? Operatör Psl631 gissar på...", 
        a: ["Dåligt CMOS-batteri", "För mycket damm", "Skärmen är avstängd", "Säkringen har gått"], 
        r: "Dåligt CMOS-batteri" 
    },
    { 
        q: "Du har 100 flikar öppna i Chrome och datorn laggar. Vilken resurs är slut?", 
        a: ["RAM-minne", "Hårddiskutrymme", "Internet-hastighet", "Skärmupplösning"], 
        r: "RAM-minne" 
    },
    { 
        q: "Vad är 'Safe Mode' (Felsäkert läge) i Windows egentligen till för?", 
        a: ["Felsökning utan drivrutiner", "Att spela spel snabbare", "Anonym surfing", "Barnspärr"], 
        r: "Felsökning utan drivrutiner" 
    },
    { 
        q: "Vilket klassiskt felmeddelande dök upp när man försökte skriva till en diskett som var låst?", 
        a: ["Write Protected", "Disk Error", "Access Denied", "Fatal Exception"], 
        r: "Write Protected" 
    },
    { 
        q: "Din laptop blir så varm att den kan steka ett ägg. Vad är den troligaste orsaken?", 
        a: ["Igentäppta luftintag", "För snabbt internet", "Hög volym i högtalarna", "För ljusstark skärm"], 
        r: "Igentäppta luftintag" 
    },
    { 
        q: "Du trycker på 'Print Screen' men ingenting händer. Var hamnade bilden?", 
        a: ["I Urklipp (Clipboard)", "I mappen Bilder", "På skrivbordet", "Direkt i papperskorgen"], 
        r: "I Urklipp (Clipboard)" 
    },
    { 
        q: "Vad är ett '404'-fel när du försöker nå en webbsida?", 
        a: ["Sidan hittades inte", "Servern brinner", "Lösenordet är fel", "Du är bannad"], 
        r: "Sidan hittades inte" 
    },
    { 
        q: "Varför laggar din trådlösa handkontroll mitt i en boss-fight?", 
        a: ["Batteritorsk", "Dålig sikt", "För hög ping", "Musmattan är smutsig"], 
        r: "Batteritorsk" 
    },
    { 
        q: "Vad innebär det att 'överklocka' en komponent?", 
        a: ["Köra den över specifikation", "Ställa in klockan i BIOS", "Göra den tystare", "Byta färg på LED-lamporna"], 
        r: "Köra den över specifikation" 
    },
    { 
        q: "Vilket tangentbordskommando räddar dig när ett program har hängt sig totalt?", 
        a: ["Ctrl+Alt+Del", "Alt+F4", "Ctrl+S", "Windows+L"], 
        r: "Ctrl+Alt+Del" 
    },
    { 
        q: "Varför får du felet 'IP Address Conflict'?", 
        a: ["Två enheter har samma IP", "Ditt internet är slut", "Routern är för gammal", "Din IP är hemlig"], 
        r: "Två enheter har samma IP" 
    },
    { 
        q: "Vad är 'Bloatware'?", 
        a: ["Onödiga förinstallerade program", "Virus som äter filer", "Damm i chassit", "Tunga speluppdateringar"], 
        r: "Onödiga förinstallerade program" 
    },
    { 
        q: "Du har glömt ditt lösenord till Windows. Vad är den sista utvägen för en amatör?", 
        a: ["Installera om Windows", "Skrika på skärmen", "Vänta på en uppdatering", "Byta tangentbord"], 
        r: "Installera om Windows" 
    },
    { 
        q: "Vad gör en 'Disk Defragmenter' (i de gamla goda dagarna)?", 
        a: ["Städar upp filer på HDD", "Lagade repiga CD-skivor", "Tömde RAM-minnet", "Gjorde internet snabbare"], 
        r: "Städar upp filer på HDD" 
    },
    { 
        q: "Din skärm är helt gul- eller blåaktig. Vad sitter löst?", 
        a: ["VGA/DVI-kabeln", "Strömkabeln", "Hörlursuttaget", "Musen"], 
        r: "VGA/DVI-kabeln" 
    },

    // --- TEKNIK & FAKTA ---
// --- SPELKONSOLER: DEFEKTER & STRUL (40 ST) ---
    { q: "Vad kallas det fruktade felet på Xbox 360 där tre röda lampor lyser runt startknappen?", a: ["Red Ring of Death", "The Red Eye", "System Overheat", "Disk Jam"], r: "Red Ring of Death" },
    { q: "Vilket problem drabbade ofta tidiga Nintendo Switch-kontroller (Joy-Cons)?", a: ["Joy-Con Drift", "Button Lag", "Battery Bloat", "Signal Loss"], r: "Joy-Con Drift" },
    { q: "Vad var det klassiska knepet för att få en dammig NES-kassett att starta (trots att det faktiskt skadade kontakterna)?", a: ["Blåsa i kassetten", "Tvätta med tvål", "Skaka den hårt", "Slicka på chippet"], r: "Blåsa i kassetten" },
    { q: "Vad kallas det på PS3 när konsolen lyser gult och sedan dör?", a: ["YLOD (Yellow Light of Death)", "Gold Mode", "Power Surge", "Overload"], r: "YLOD (Yellow Light of Death)" },
    { q: "Varför vägrade ofta en PlayStation 2 att läsa skivor efter några år?", a: ["Damm på lasern", "Skivorna blev för tunga", "Motorn blev för snabb", "Den blev trött"], r: "Damm på lasern" },
    { q: "Vilken konsol hade en handkontroll med en inbyggd skärm som ofta drog slut på batteriet direkt?", a: ["Wii U GamePad", "Dreamcast", "GameBoy Advance", "PS Vita"], r: "Wii U GamePad" },
    { q: "Vad hände om man råkade flytta en Xbox 360 medan en skiva snurrade inuti?", a: ["Skivan blev repad cirkulärt", "Konsolen exploderade", "Spelet sparades", "Inget hände"], r: "Skivan blev repad cirkulärt" },
    { q: "Vilken bärbar konsol var känd för att ha en skärm som var nästan omöjlig att se utan en extern lampa?", a: ["Game Boy Classic", "Game Gear", "Atari Lynx", "PSP"], r: "Game Boy Classic" },
    { q: "Vad kallas felet när en PlayStation 4 piper tre gånger och spottar ut skivan mitt i ett spel?", a: ["Auto-Eject Bug", "Disk Hunger", "Panic Mode", "Ghost Touch"], r: "Auto-Eject Bug" },
    { q: "Vilken retro-konsol krävde ett 'Expansion Pak' för att vissa spel (som Donkey Kong 64) ens skulle starta?", a: ["Nintendo 64", "Sega Saturn", "PlayStation 1", "SNES"], r: "Nintendo 64" },
    { q: "Vad är orsaken till 'Ghosting' på en gammal LCD-skärm?", a: ["Långsam responstid", "Spöken i maskinen", "För hög ljusstyrka", "Dålig HDMI-kabel"], r: "Långsam responstid" },
    { q: "Vilket batteriproblem drabbade många gamla Pokémon-kassetter till Game Boy?", a: ["Klockbatteriet tog slut", "Batteriet läckte syra", "Det gick inte att ladda", "Spara-filen blev för stor"], r: "Klockbatteriet tog slut" },
    { q: "Vad kallas det när bilden 'bränner fast' permanent på en gammal plasma- eller OLED-TV?", a: ["Burn-in", "Image Ghosting", "Color Fade", "Pixel Death"], r: "Burn-in" },
    { q: "Vilken konsol från Sega använde en 'VMU' som minneskort som pep högt när batteriet var slut?", a: ["Dreamcast", "Sega Mega Drive", "Saturn", "Master System"], r: "Dreamcast" },
    { q: "Varför överhettade PlayStation 4 ofta och lät som ett jetplan?", a: ["Torkad kylpasta/damm", "Fläkten var för liten", "Hårddisken var full", "Strömkabeln var dålig"], r: "Torkad kylpasta/damm" },
    { q: "Vad hände om man drog ur ett minneskort till PS1 medan 'Save'-ikonen blinkade?", a: ["Filen blev korrupt", "Kortet smälte", "Spelet blev gratis", "Inget hände"], r: "Filen blev korrupt" },
    { q: "Vilken konsol hade 'The Duke' – en handkontroll så stor att nästan ingen kunde hålla i den?", a: ["Original Xbox", "Atari 5200", "Intellivision", "Sega Nomad"], r: "Original Xbox" },
    { q: "Vad kallas det när en pixel på skärmen fastnar i en färg (ofta lysande grön eller röd)?", a: ["Stuck Pixel", "Dead Pixel", "Hot Pixel", "Lazy Pixel"], r: "Stuck Pixel" },
    { q: "Varför tappade GameBoy Advance-spel ofta sin färgstyrka jämfört med TV-spel?", a: ["Skärmen saknade bakgrundsbelysning", "Processorn var svag", "Batteriet var för svagt", "Kassetterna var små"], r: "Skärmen saknade bakgrundsbelysning" },
    { q: "Vilken konsol använde de små 'UMD'-diskar som ofta föll isär i plasthöljet?", a: ["PSP", "Nintendo DS", "GameCube", "Gamegear"], r: "PSP" },
    { q: "Vad kallas fenomenet när grafiken i ett spel börjar 'flimra' eller försvinna för att processorn inte hinner med?", a: ["Sprite flickering", "Lag spike", "Texture pop-in", "Frame drop"], r: "Sprite flickering" },
    { q: "Vilket vanligt fel drabbade Nintendo 64-analogspaken efter för mycket Mario Party?", a: ["Den blev slapp/utsliten", "Den fastnade i mitten", "Den föll av", "Den blev klibbig"], r: "Den blev slapp/utsliten" },
    { q: "Vad var 'The Tower of Power'?", a: ["Sega Mega Drive + CD + 32X", "En stapel med NES-spel", "En överhettad PC", "En Gameboy-adapter"], r: "Sega Mega Drive + CD + 32X" },
    { q: "Vad är 'Input Lag'?", a: ["Fördröjning mellan knapptryck och skärm", "Segt internet", "Dåliga batterier", "Långsamma fingrar"], r: "Fördröjning mellan knapptryck och skärm" },
    { q: "Varför piper vissa konsoler när man försöker starta dem utan en HDMI-kabel?", a: ["Handshake-fel", "Den är arg", "Strömfel", "Upplösningsfel"], r: "Handshake-fel" },
    { q: "Vad innebär 'Region Locking' på en konsol?", a: ["Spel från andra länder fungerar inte", "Du kan bara spela hemma", "Konsolen är låst med kod", "Internet är spärrat"], r: "Region Locking" },
    { q: "Vilken komponent i en modern konsol slits ut snabbast om man aldrig stänger av den?", a: ["Fläkten", "Grafikkortet", "HDMI-porten", "Bluetooth-chippet"], r: "Fläkten" },
    { q: "Vad kallas det när en bildskärm visar två olika bildrutor samtidigt så det ser 'skuret' ut?", a: ["Screen Tearing", "Ghosting", "Blurring", "Aliasing"], r: "Screen Tearing" },
    { q: "Vad är 'Vertical Sync' (V-Sync) till för?", a: ["Att stoppa Screen Tearing", "Att öka FPS", "Att göra färgerna bättre", "Att kyla ner datorn"], r: "Att stoppa Screen Tearing" },
    { q: "Vad var 'Game Genie'?", a: ["En fusk-adapter", "En spelmaskin", "Ett virus", "Ett minneskort"], r: "En fusk-adapter" },
    { q: "Varför slutade ofta Nintendo GameCube-luckan att stängas?", a: ["Plastpiggen gick av", "Skivan var för stor", "Den blev magnetisk", "Mjukvarufel"], r: "Plastpiggen gick av" },
    { q: "Vad kallas det när man 'hackar' en konsol för att köra egen mjukvara?", a: ["Homebrew", "Selfmade", "Softcore", "Inside-job"], r: "Homebrew" },
    { q: "Vilken konsol hade en kontroll som anslöts via en 'infravöd' port som krävde fri sikt?", a: ["Atari 2600 (Remote)", "Wii", "PS2", "NES"], r: "Atari 2600 (Remote)" },
    { q: "Vad händer om en 'Kondensator' (Capacitor) läcker på ett gammalt moderkort?", a: ["Fräter sönder kretsarna", "Datorn blir snabbare", "Det börjar lukta jordgubbe", "Inget märks"], r: "Fräter sönder kretsarna" },
    { q: "Vad kallas det när man använder en adapter för att spela bärbara spel på en TV?", a: ["Super Game Boy / Player", "TV-Link", "Big Screen Mode", "Master Adapter"], r: "Super Game Boy / Player" },
    { q: "Varför surrar vissa gamla nätaggregat (Coil Whine)?", a: ["Vibrationer i spolar", "Fläkten är trasig", "Den drar för mycket el", "Den vill ha uppmärksamhet"], r: "Vibrationer i spolar" },
    { q: "Vilken konsol-tillverkare drog sig ur marknaden efter floppen med 'Dreamcast'?", a: ["Sega", "Nintendo", "Atari", "Panasonic"], r: "Sega" },
    { q: "Vad var det största problemet med 'Virtual Boy'?", a: ["Huvudvärk och röda färger", "Den var för tung", "Den saknade spel", "Den var för dyr"], r: "Huvudvärk och röda färger" },
    { q: "Vad kallas en konsol som har allt inbyggt i kontrollen och kopplas direkt till TV:n?", a: ["Plug & Play", "All-in-One", "Stick-Game", "Direct-Console"], r: "Plug & Play" },
    { q: "Vad är 'Brickning'?", a: ["Mjukvaran dör och konsolen blir en tegelsten", "Konsolen blir tung", "Man bygger in den i väggen", "Man tappar den i marken"], r: "Mjukvaran dör och konsolen blir en tegelsten" },
    { q: "Vilken komponent är datorns 'hjärna'?", a: ["CPU", "GPU", "RAM", "SSD"], r: "CPU" },
    { q: "Vilket operativsystem har en pingvin som maskot?", a: ["Linux", "Windows", "macOS", "Android"], r: "Linux" },
    { q: "Vad står 'RAM' för?", a: ["Random Access Memory", "Read All Media", "Rapid Action Mode", "Real Audio Music"], r: "Random Access Memory" },
    { q: "Vilken webbläsare utvecklas av Google?", a: ["Chrome", "Firefox", "Safari", "Edge"], r: "Chrome" },
    { q: "Vilken teknik används för trådlös överföring på kort avstånd?", a: ["Bluetooth", "Fiber", "4G", "Sata"], r: "Bluetooth" },
    { q: "Vad är 'Python' inom teknikvärlden?", a: ["Ett programmeringsspråk", "Ett virus", "Ett tangentbord", "En datormus"], r: "Ett programmeringsspråk" },
    { q: "Vilken enhet mäter frekvens (t.ex. på en processor)?", a: ["Hertz (Hz)", "Volt (V)", "Watt (W)", "Ohm (Ω)"], r: "Hertz (Hz)" },
    { q: "Vad står 'URL' för?", a: ["Webbadress", "Hårddisk", "Bildfil", "E-post"], r: "Webbadress" },
    { q: "Vilken knapp på tangentbordet avbryter oftast en handling?", a: ["Esc", "Enter", "Space", "Shift"], r: "Esc" },
    { q: "Vad kallas den lilla bilden som representerar ett program?", a: ["Ikon", "Pixel", "Banner", "Sprite"], r: "Ikon" },
    { q: "Vilket material leder ström bäst av dessa?", a: ["Koppar", "Plast", "Glas", "Trä"], r: "Koppar" },
    { q: "Vad är 'Cloud Storage'?", a: ["Lagring på internet", "Lagring i moln", "En sorts hårddisk", "Vädertjänst"], r: "Lagring på internet" },
    // --- PROGRAMMERING & KOD ---
    { q: "Vilken symbol används oftast i JavaScript för att avsluta en kodrad?", a: ["; (Semikolon)", ": (Kolon)", ". (Punkt)", "! (Utropstecken)"], r: "; (Semikolon)" },
    { q: "Vad kallas en 'behållare' i kod som lagrar ett värde (t.ex. let score = 0;)?", a: ["Variabel", "Funktion", "Loop", "Array"], r: "Variabel" },
    { q: "Vilken typ av loop körs så länge ett visst villkor är sant?", a: ["While-loop", "For-loop", "If-statement", "Function"], r: "While-loop" },
    { q: "Vad kallas det när man letar efter och rättar till fel i sin kod?", a: ["Debugging", "Coding", "Compiling", "Rendering"], r: "Debugging" },
    { q: "Vilket tecken används för att skriva en kommentar i JavaScript som datorn ignorerar?", a: ["//", "##", "??", "!!"], r: "//" },
// --- INTERNETSÄKERHET & DIGITALT VETT ---
    { q: "Vad kallas det när en hackare låser dina filer och kräver pengar för att låsa upp dem?", a: ["Ransomware", "Spyware", "Adware", "Bloatware"], r: "Ransomware" },
    { q: "Vilken typ av lösenordsskydd kräver både ett lösenord och en kod från en app?", a: ["Tvåfaktorsautentisering (2FA)", "Biometri", "Single Sign-On", "CAPTCHA"], r: "Tvåfaktorsautentisering (2FA)" },
    { q: "Vad ska du kontrollera i webbläsaren för att se om en anslutning är krypterad?", a: ["Hänglåset vid URL:en", "Sidans bakgrundsfärg", "Om det finns bilder", "Sidans typsnitt"], r: "Hänglåset vid URL:en" },
    { q: "Vad är ett 'Zero-day'-hot?", a: ["En nyligen upptäckt sårbarhet", "Ett virus som raderar klockan", "En gammal säkerhetslucka", "Ett spam-mail"], r: "En nyligen upptäckt sårbarhet" },
    { q: "Varför är det riskabelt att använda öppna, okrypterade Wi-Fi-nätverk?", a: ["Trafiken kan avlyssnas", "Batteriet dör snabbare", "Det går alltid långsamt", "Skärmen kan flimra"], r: "Trafiken kan avlyssnas" },
    { q: "Vad innebär 'Keylogging'?", a: ["Att tangenttryckningar registreras", "Att musen rör sig själv", "Att skärmen låses", "Att hårddisken rensas"], r: "Att tangenttryckningar registreras" },
    { q: "Vad är syftet med en 'Integritetspolicy'?", a: ["Berätta hur data används", "Snabba upp hemsidan", "Visa reklam", "Låsa användarkonton"], r: "Berätta hur data används" },
    { q: "Vad kallas det när man får ett SMS som försöker lura en på bankuppgifter?", a: ["Smishing", "Phishing", "Vishing", "Spam"], r: "Smishing" },
    { q: "Vad är en 'Botnet'?", a: ["Ett nätverk av kapade datorer", "En snabb spelserver", "Ett chattprogram", "En typ av router"], r: "Ett nätverk av kapade datorer" },
    { q: "Varför bör man alltid uppdatera sin routers firmware?", a: ["Täppa till säkerhetshål", "Få snyggare menyer", "Minska strömförbrukningen", "Göra kablarna snabbare"], r: "Täppa till säkerhetshål" },

    // --- CRT & RETRO-TEKNIK (TJOCK-TV) ---
    { q: "Vad gör funktionen 'Degaussing' på en CRT-skärm?", a: ["Tar bort missfärgade magnetfält", "Ökar ljusstyrkan", "Byter kanal snabbare", "Rensar damm inuti"], r: "Tar bort missfärgade magnetfält" },
    { q: "Varför drar en tjock-tv extremt mycket ström precis vid start?", a: ["För att ladda avmagnetiseringsspolen", "För att värma upp glaset", "För att starta högtalarna", "För att ladda fjärrkontrollen"], r: "För att ladda avmagnetiseringsspolen" },
    { q: "Varför upplevs retrospel ha 'mindre lagg' på en CRT än på en modern LCD?", a: ["Ingen digital bildbehandling", "Glaset leder ström bättre", "Lägre upplösning går fortare", "Tjock-tv har mer RAM"], r: "Ingen digital bildbehandling" },
    { q: "Vad kallas de svarta linjerna som ofta syns mellan pixlarna på en bra CRT?", a: ["Scanlines", "Dead pixels", "Ghosting", "Motion blur"], r: "Scanlines" },
    { q: "Varför ser 240p-grafik (från t.ex. NES) 'mjukare' ut på en CRT än på en LCD?", a: ["Pixlarna blöder ihop naturligt", "LCD har för mycket färg", "CRT har inbyggt filter", "Tjock-tv har bättre kontrast"], r: "Pixlarna blöder ihop naturligt" },
    { q: "Vilket karakteristiskt ljud hörs ofta när man startar en CRT-tv?", a: ["Ett statiskt knastrande ljud", "Ett högt fläktljud", "En digital melodi", "Ett tickande ljud"], r: "Ett statiskt knastrande ljud" },
    { q: "Vad är den främsta anledningen till att inte öppna en CRT-tv utan kunskap?", a: ["Livsfarlig högspänning", "Garantin försvinner", "Glaset kan smälta", "Den tappar alla kanaler"], r: "Livsfarlig högspänning" },
    { q: "Vad står förkortningen CRT för?", a: ["Cathode Ray Tube", "Color Ray Television", "Central Raster Technology", "Circuit Ray Tube"], r: "Cathode Ray Tube" },
    { q: "Vad händer om du håller en stark magnet nära en tjock-tv?", a: ["Färgerna blir förvrängda", "Bilden blir skarpare", "Ljudet försvinner", "Den byter till kanal 1"], r: "Färgerna blir förvrängda" },
    { q: "Vilken typ av kabel gav bäst bildkvalitet till en CRT i Europa?", a: ["RGB SCART", "Antennkabel", "Komposit (Gul kontakt)", "S-Video"], r: "RGB SCART" },
    // Lägg till i 'sv'-arrayen
{ q: "Vilken grupp slog igenom stort med albumet 'Välkommen till Förorten' år 1998?", a: ["The Latin Kings", "Infinite Mass", "Looptroop Rockers", "Fattaru"], r: "The Latin Kings" },
{ q: "Vad heter artisten bakom succéalbumet 'För Sent för Edits' som vann flera Grammisar 2021?", a: ["Yasin", "1.Cuz", "Einár", "Ant Wan"], r: "Yasin" },
{ q: "Från vilken stadsdel kommer rap-kollektivet Hov1?", a: ["Södermalm", "Rinkeby", "Gunnilse", "Rosengård"], r: "Södermalm" },
{ q: "Vilken svensk rappare har haft stora internationella framgångar med låten 'Hummer'?", a: ["Yung Lean", "Bladee", "Dree Low", "Z.E"], r: "Yung Lean" },
{ q: "Vem grundade skivbolaget 'Redline Records' tillsammans med sina bröder?", a: ["The Salazar Brothers", "Petter", "Ken Ring", "Timbuktu"], r: "The Salazar Brothers" },
{ q: "Vilken låt blev Petters stora genombrott 1998?", a: ["Mikrofonkåt", "Vinden har vänt", "Solsidan", "Repris"], r: "Mikrofonkåt" },
{ q: "Vilken grupp består av Promoe, Embee, CosM.I.C och Supreme?", a: ["Looptroop Rockers", "Snook", "Just D", "Kartellen"], r: "Looptroop Rockers" },
{ q: "Vad heter rapparen som vann Melodifestivalen 2024 tillsammans med Marcus & Martinus (som låtskrivare)?", a: ["Joy", "Linda Pira", "Silvana Imam", "Erik Lundin"], r: "Joy" },
{ q: "Vilken svensk rappare bär ofta en ikonisk blåvit mask?", a: ["1.Cuz", "Z.E", "Dree Low", "Greekazo"], r: "1.Cuz" },
{ q: "Vad heter Timbuktus mest kända låt som handlar om att allt ordnar sig?", a: ["Alla vill till himmelen men ingen vill dö", "The Botten Is Nådd", "Det löser sig", "Resten av ditt liv"], r: "Alla vill till himmelen men ingen vill dö" },
// Lägg till i 'sv'-listan
{ q: "Vad står 'DDoS' för när en hemsida attackeras av för mycket trafik?", a: ["Distributed Denial of Service", "Digital Data Over Sync", "Direct Disk Operating System", "Data Delivery On Site"], r: "Distributed Denial of Service" },
{ q: "Vilken svensk streamer blev världskänd för sina 'Let's Play'-videor på YouTube?", a: ["PewDiePie", "Anomalix", "Settman", "HeatoN"], r: "PewDiePie" },
{ q: "Vad kallas det när man försöker lura någon att ge ut sitt lösenord via ett falskt mail?", a: ["Phishing", "Looting", "Framing", "Buffering"], r: "Phishing" },
{ q: "Vilket år släpptes det första spelet i 'The Legend of Zelda'-serien till NES?", a: ["1986", "1984", "1988", "1990"], r: "1986" },
{ q: "Vad kallas tekniken som gör att du kan köra flera operativsystem samtidigt på en dator?", a: ["Virtualisering", "Multi-booting", "Hyper-threading", "Overclocking"], r: "Virtualisering" },
{ q: "Vilket företag ligger bakom den populära spelmotorn 'Unreal Engine'?", a: ["Epic Games", "Unity", "Valve", "Rockstar"], r: "Epic Games" },
{ q: "Vad är namnet på den AI-robot som slog världsmästaren i brädspelet Go?", a: ["AlphaGo", "Deep Blue", "ChatGPT", "Watson"], r: "AlphaGo" },
{ q: "Vilken färg har den högsta nivån på utrustning (Loot) i spel som Fortnite eller World of Warcraft?", a: ["Lila/Orange", "Grön/Blå", "Vit/Grå", "Röd/Svart"], r: "Lila/Orange" },
{ q: "Vad kallas det när en spelare utnyttjar ett programmeringsfel för att få fördelar?", a: ["Exploit", "Mod", "Patch", "Easter Egg"], r: "Exploit" },
{ q: "Vilken svensk stad är känd för att vara hemvist åt speljätten Massive Entertainment (Ubisoft)?", a: ["Malmö", "Stockholm", "Göteborg", "Uppsala"], r: "Malmö" }, 
// MARIO & SONIC KLASSIKER
    { q: "Vad händer om Sonic tar skada när han bär på guldringar?", a: ["Han tappar alla ringar", "Han dör direkt", "Han tappar 1 ring", "Han blir osynlig"], r: "Han tappar alla ringar" },
    { q: "Vad heter prinsessan som Mario oftast räddar i Svampriket?", a: ["Peach", "Zelda", "Daisy", "Rosalina"], r: "Peach" },
    { q: "I vilket spel dök dinosaurien Yoshi upp för första gången?", a: ["Super Mario World", "Super Mario Bros 1", "Mario Kart 64", "Super Mario Sunshine"], r: "Super Mario World" },
    { q: "Vilket företag skapade Sonic the Hedgehog som en rival till Mario?", a: ["SEGA", "Nintendo", "Sony", "Capcom"], r: "SEGA" },
    { q: "Vad samlar Sonic på i banorna för att inte dö när han blir träffad?", a: ["Guldringar", "Mynt", "Diamanter", "Stjärnor"], r: "Guldringar" },
    { q: "Vilken bana i Mario Kart är ökänd för att sakna räcken?", a: ["Rainbow Road", "Moo Moo Farm", "Bowsers Castle", "Koopa Troopa Beach"], r: "Rainbow Road" },
    { q: "Vad heter huvudkaraktären i Zelda-spelen?", a: ["Link", "Zelda", "Ganon", "Tingle"], r: "Link" }
 ],
    'en': [
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

        // INFRASTRUCTURE
        { q: "Which bridge connects Malmö with Copenhagen?", a: ["Öresund Bridge", "Great Belt Bridge", "Västerbron", "Älvsborg Bridge"], r: "Öresund Bridge" },
        { q: "In which city can you find Tower Bridge?", a: ["London", "New York", "Dublin", "Edinburgh"], r: "London" },
        { q: "What is the name of the tunnel under the English Channel?", a: ["Eurotunnel", "Channel Bridge", "Atlantic Tunnel", "The Chunnel"], r: "Eurotunnel" },

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
    ],
    'fi': [
        { q: "Mikä asema tämä on?", a: ["Station 24", "Station 1"], r: "Station 24" }
        // ... alla dina finska frågor
    ]
};