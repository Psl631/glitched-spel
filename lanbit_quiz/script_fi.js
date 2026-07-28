/* ===========================================================
   ASEMA 24: OPERAATTORI PSL631 PROTOKOLLA v41.0 - TÄYDELLINEN
   =========================================================== */

// DEBUG-TYÖKALU: Etsii puuttuvan elementin
const originalGetId = document.getElementById;
document.getElementById = function(id) {
    const el = originalGetId.call(document, id);
    if (!el) console.warn(`VAROITUS: Elementtiä ID:llä "${id}" ei löydy HTML-koodistasi!`);
    return el;
};

// --- 1. KYSYMYS TIETOKANTA (KAVERIKSI MANUAALISESTI) ---
// --- 1. KYSYMYSTIETOKANTA (SUOMI) ---
const questions = [
    // --- LANBIT & POHJOISMAISET LANIT ---
{ q: "Mikä ruotsalainen LAN pitää hallussaan maailmanennätystä maailman suurimpana LAN-tapahtumana?", a: ["DreamHack", "Birdie", "NärCon", "LANBIT"], r: "DreamHack", cat: "LAN-KULTTUURI" },
 { q: "Mikä suomalainen tapahtuma on sekä LAN että yksi maailman suurimmista demoscene-tapahtumista?", a: ["Assembly", "Lantrek", "Vectorama", "Digiexpo"], r: "Assembly", cat: "ASSEMBLY" },
    { q: "Mitä lyhenne 'LAN' tarkoittaa?", a: ["Local Area Network", "Large Area Node", "Long Active Night", "Light And Noise"], r: "Local Area Network", cat: "TEKNIIKKA" },
    { q: "Mikä turnaustyyppi on yleensä äänekkäin LAN-tapahtumissa?", a: ["Smash / Mario Kart", "Shakki", "Excel-speedrun", "Pasianssi"], r: "Smash / Mario Kart", cat: "LAN-KULTTUURI" },
    // --- ASSEMBLY, DEMOSCENE & SUOMALAINEN PELIALA ---
    { q: "Minä vuonna ensimmäinen Assembly-tapahtuma järjestettiin?", a: ["1992", "1995", "1989", "1998"], r: "1992", cat: "ASSEMBLY" },
    { q: "Missä paikassa Assembly Summer -tapahtuma järjestetään nykyään?", a: ["Helsingin Messukeskus", "Tampereen Messukeskus", "Turun Messukeskus", "Hartwall Areena"], r: "Helsingin Messukeskus", cat: "ASSEMBLY" },
    { q: "Mikä legendaarinen suomalainen demoryhmä loi maailmanmainetta saavuttaneen 'Second Reality' -demon?", a: ["Future Crew", "Complex", "Asylum", "Mfx"], r: "Future Crew", cat: "DEMOSCENE" },
    { q: "Mitä teemaa Assembly-tapahtuma oli alun perin 1990-luvun alussa täysin keskittynyt juhlistamaan?", a: ["Demoscene ja tietokonetaide", "Esports-ammattilaisuus", "Lautapelit", "Mobiilipelit"], r: "Demoscene ja tietokonetaide", cat: "ASSEMBLY" },
    { q: "Mikä suomalainen pelistudio tunnetaan maailmalla peleistä Max Payne, Alan Wake ja Control?", a: ["Remedy Entertainment", "Housemarque", "Rovio", "Supercell"], r: "Remedy Entertainment", cat: "PELIALA" },
    { q: "Mikä peliyhtiö kehitti maailmanmaineeseen nousseen Angry Birds -pelin?", a: ["Rovio", "Supercell", "Fingersoft", "Colossal Order"], r: "Rovio", cat: "PELIALA" },
    { q: "Mikä suomalainen klassikkopeli vuodelta 1998 oli 2D-pohjainen luolasotapeli aseilla ja matoilla?", a: ["Liero", "Wings", "Slicks 'n' Slide", "Mine Bombers"], r: "Liero", cat: "RETROPELIT" },
    { q: "Mikä helsinkiläinen pelistudio kehitti PlayStation 5:n peliarvostelumenestyksen 'Returnal'?", a: ["Housemarque", "RedLynx", "Frozenbyte", "Bugbear"], r: "Housemarque", cat: "PELIALA" },
    { q: "Mikä suomalainen autopelistudio tunnetaan 'FlatOut'- ja 'Wreckfest'-romurallipeleistä?", a: ["Bugbear Entertainment", "RedLynx", "Colossal Order", "Remedy"], r: "Bugbear Entertainment", cat: "PELIALA" },
    { q: "Mikä legendaarinen suomalainen ylhäältä päin kuvattu 2D-rallipeli vuodelta 1993 oli lanien moninpelisuosikki?", a: ["Slicks 'n' Slide", "Rally-Sport", "Death Rally", "GeneRally"], r: "Slicks 'n' Slide", cat: "RETROPELIT" },
    { q: "Mikä suomalainen studio on kehittänyt maailmanlaajuisesti suositun 'Cities: Skylines' -kaupunkisimulaattorin?", a: ["Colossal Order", "Frozenbyte", "Kavsoft", "Supercell"], r: "Colossal Order", cat: "PELIALA" },
    { q: "Mikä peli teki suomalaisesta Remedy-studiosta maailmankuulun vuonna 2001 hidastetun 'Bullet Time' -mekaniikkansa ansiosta?", a: ["Max Payne", "Alan Wake", "Quantum Break", "Death Rally"], r: "Max Payne", cat: "PELIALA" },
{ q: "Kuka voitti jääkiekon MM-kullan Suomelle vuonna 2011?", a: ["Suomi", "Ruotsi", "Venäjä", "Kanada"], r: "Suomi", cat: "SPORT" },
{ q: "Mikä suomalainen jalkapalloseura tunnetaan nimellä HJK?", a: ["Helsingin Jalkapalloklubi", "Hämeenlinnan JK", "Haukiputaan JK", "Haminan JK"], r: "Helsingin Jalkapalloklubi", cat: "SPORT" },
{ q: "Kuka on Suomen tunnetuin keihäänheittäjä?", a: ["Tero Pitkämäki", "Mika Häkkinen", "Teemu Selänne", "Jari Litmanen"], r: "Tero Pitkämäki", cat: "SPORT" },
{ q: "Missä lajissa Kimi Räikkönen on maailmanmestari?", a: ["Formula 1", "Ralli", "Moottoripyöräily", "Karting"], r: "Formula 1", cat: "SPORT" },
{ q: "Kuka suomalainen hiihtäjä voitti useita olympiamitaleja 1970–1980-luvuilla?", a: ["Marja-Liisa Kirvesniemi", "Aino-Kaisa Saarinen", "Krista Pärmäkoski", "Kerttu Niskanen"], r: "Marja-Liisa Kirvesniemi", cat: "SPORT" },
{ q: "Mikä maa voitti jalkapallon MM-kisat 2018?", a: ["Ranska", "Saksa", "Brasilia", "Argentiina"], r: "Ranska", cat: "SPORT" },
{ q: "Kuka suomalainen jääkiekkoilija tunnetaan lempinimellä 'The Finnish Flash'?", a: ["Teemu Selänne", "Patrik Laine", "Sebastian Aho", "Saku Koivu"], r: "Teemu Selänne", cat: "SPORT" },
{ q: "Mikä on pesäpallon lyöntipaikka?", a: ["Koti", "Kenttä", "Lautanen", "Pallo"], r: "Lautanen", cat: "SPORT" },
{ q: "Kuinka monta pelaajaa on jääkiekkojoukkueella jäällä yhtä aikaa?", a: ["6", "5", "7", "4"], r: "6", cat: "SPORT" },
{ q: "Mikä on Suomen kansallisurheilulaji?", a: ["Pesäpallo", "Jääkiekko", "Jalkapallo", "Hiihto"], r: "Pesäpallo", cat: "SPORT" },

{ q: "Mikä on Suomen pääkaupunki?", a: ["Helsinki", "Turku", "Tampere", "Oulu"], r: "Helsinki", cat: "HELPPO" },
{ q: "Mikä eläin sanoo 'miau'?", a: ["Kissa", "Koira", "Hevonen", "Lammas"], r: "Kissa", cat: "HELPPO" },
{ q: "Mikä väri syntyy, kun sekoitat sinistä ja keltaista?", a: ["Vihreä", "Punainen", "Oranssi", "Violetti"], r: "Vihreä", cat: "HELPPO" },
{ q: "Kuinka monta päivää on viikossa?", a: ["7", "5", "6", "8"], r: "7", cat: "HELPPO" },
{ q: "Mikä vuodenaika on yleensä kylmin?", a: ["Talvi", "Kesä", "Syksy", "Kevät"], r: "Talvi", cat: "HELPPO" },
{ q: "Mikä hedelmä on keltainen ja pitkä?", a: ["Banaani", "Omena", "Päärynä", "Appelsiini"], r: "Banaani", cat: "HELPPO" },
{ q: "Mikä eläin on Suomen kansalliseläin?", a: ["Karhu", "Susi", "Ilves", "Hirvi"], r: "Karhu", cat: "HELPPO" },
{ q: "Mikä juoma tunnetaan nimellä 'kahvi'?", a: ["Kahvi", "Tee", "Mehu", "Vesi"], r: "Kahvi", cat: "HELPPO" },
{ q: "Mikä on Suomen lipun väri?", a: ["Sininen ja valkoinen", "Punainen ja valkoinen", "Keltainen ja sininen", "Vihreä ja valkoinen"], r: "Sininen ja valkoinen", cat: "HELPPO" },
{ q: "Mikä eläin on suurin?", a: ["Sinivalas", "Elefantti", "Norsu", "Virtahepo"], r: "Sinivalas", cat: "HELPPO" },

{ q: "Paljonko on 5 + 7?", a: ["12", "10", "11", "13"], r: "12", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 9 × 3?", a: ["27", "21", "24", "30"], r: "27", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 15 − 6?", a: ["9", "7", "8", "10"], r: "9", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 100 ÷ 4?", a: ["25", "20", "30", "40"], r: "25", cat: "MATEMATIIKKA" },
{ q: "Mikä on 8 × 8?", a: ["64", "56", "72", "48"], r: "64", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 3²?", a: ["9", "6", "12", "3"], r: "9", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 50 + 75?", a: ["125", "100", "130", "115"], r: "125", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 144 ÷ 12?", a: ["12", "10", "14", "16"], r: "12", cat: "MATEMATIIKKA" },
{ q: "Mikä on 7 × 6?", a: ["42", "36", "48", "40"], r: "42", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 90 − 33?", a: ["57", "63", "55", "60"], r: "57", cat: "MATEMATIIKKA" },

{ q: "Kuka voitti olympiakultaa miesten keihäässä 2021?", a: ["Neeraj Chopra", "Johannes Vetter", "Tero Pitkämäki", "Anderson Peters"], r: "Neeraj Chopra", cat: "SPORT" },
{ q: "Mikä maa voitti jääkiekon MM-kisat 2022?", a: ["Suomi", "Kanada", "Ruotsi", "Tšekki"], r: "Suomi", cat: "SPORT" },
{ q: "Kuka suomalainen on voittanut F1-maailmanmestaruuden?", a: ["Kimi Räikkönen", "Valtteri Bottas", "Teemu Selänne", "Jari Kurri"], r: "Kimi Räikkönen", cat: "SPORT" },
{ q: "Mikä urheilulaji käyttää mailaa ja palloa ja pelataan jäällä?", a: ["Jääkiekko", "Pesäpallo", "Golf", "Tennis"], r: "Jääkiekko", cat: "SPORT" },
{ q: "Kuinka monta reikää on täydessä golf-kierroksessa?", a: ["18", "9", "12", "20"], r: "18", cat: "SPORT" },

{ q: "Mikä on maailman suurin maa?", a: ["Venäjä", "Kanada", "Kiina", "USA"], r: "Venäjä", cat: "HELPPO" },
{ q: "Mikä eläin tunnetaan nimellä 'koira'?", a: ["Koira", "Kissa", "Hevonen", "Kana"], r: "Koira", cat: "HELPPO" },
{ q: "Mikä on 1. kuukausi vuodessa?", a: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu"], r: "Tammikuu", cat: "HELPPO" },
{ q: "Mikä on Suomen tunnetuin järvi?", a: ["Saimaa", "Inarijärvi", "Päijänne", "Oulujärvi"], r: "Saimaa", cat: "HELPPO" },
{ q: "Mikä on 10 + 10?", a: ["20", "15", "25", "30"], r: "20", cat: "HELPPO" },

{ q: "Paljonko on 7 × 9?", a: ["63", "54", "72", "69"], r: "63", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 120 ÷ 6?", a: ["20", "18", "22", "24"], r: "20", cat: "MATEMATIIKKA" },
{ q: "Mikä on 5³?", a: ["125", "25", "75", "150"], r: "125", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 200 − 88?", a: ["112", "120", "108", "118"], r: "112", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 14 × 3?", a: ["42", "36", "48", "40"], r: "42", cat: "MATEMATIIKKA" },

{ q: "Kuka suomalainen jalkapalloilija pelaa lempinimellä 'Litti'?", a: ["Jari Litmanen", "Teemu Pukki", "Sami Hyypiä", "Roman Eremenko"], r: "Jari Litmanen", cat: "SPORT" },
{ q: "Mikä urheilulaji käyttää koripalloa?", a: ["Koripallo", "Jalkapallo", "Lentopallo", "Käsipallo"], r: "Koripallo", cat: "SPORT" },
{ q: "Kuka voitti Wimbledonin 2019?", a: ["Novak Djokovic", "Roger Federer", "Rafael Nadal", "Andy Murray"], r: "Novak Djokovic", cat: "SPORT" },
{ q: "Mikä maa voitti jalkapallon EM-kisat 2020?", a: ["Italia", "Englanti", "Espanja", "Portugali"], r: "Italia", cat: "SPORT" },
{ q: "Kuinka monta pelaajaa on jalkapallojoukkueessa kentällä?", a: ["11", "10", "12", "9"], r: "11", cat: "SPORT" },

{ q: "Mikä on 3 + 14?", a: ["17", "16", "18", "15"], r: "17", cat: "HELPPO" },
{ q: "Mikä eläin on nopein?", a: ["Gepardi", "Leijona", "Tiikeri", "Susi"], r: "Gepardi", cat: "HELPPO" },
{ q: "Mikä on Suomen pohjoisin kaupunki?", a: ["Utsjoki", "Rovaniemi", "Inari", "Sodankylä"], r: "Utsjoki", cat: "HELPPO" },
{ q: "Mikä on 2 × 4?", a: ["8", "6", "10", "4"], r: "8", cat: "HELPPO" },
{ q: "Mikä on maailman korkein vuori?", a: ["Mount Everest", "K2", "Kilimanjaro", "Mont Blanc"], r: "Mount Everest", cat: "HELPPO" },

{ q: "Paljonko on 250 ÷ 5?", a: ["50", "45", "55", "60"], r: "50", cat: "MATEMATIIKKA" },
{ q: "Mikä on 9²?", a: ["81", "72", "90", "99"], r: "81", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 33 + 47?", a: ["80", "75", "90", "70"], r: "80", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 18 × 2?", a: ["36", "32", "40", "34"], r: "36", cat: "MATEMATIIKKA" },
{ q: "Paljonko on 1000 − 450?", a: ["550", "600", "500", "450"], r: "550", cat: "MATEMATIIKKA" },
    // --- SUOMEN MAANTIETO ---
    { q: "Mikä on Suomen suurin järvi?", a: ["Saimaa", "Inarijärvi", "Päijänne", "Pielinen"], r: "Saimaa", cat: "SUOMI" },
    { q: "Mikä on Suomen korkein tunturi/huippu?", a: ["Halti", "Saana", "Ylläs", "Levi"], r: "Halti", cat: "SUOMI" },
    { q: "Noin kuinka monta järveä Suomessa on yli hehtaarin kokoluokassa?", a: ["Noin 188 000", "Noin 50 000", "Noin 500 000", "Noin 10 000"], r: "Noin 188 000", cat: "SUOMI" },
    { q: "Mikä kaupunki tunnetaan 'Suomen Manchesterina' teollisuushistoriansa vuoksi?", a: ["Tampere", "Turku", "Oulu", "Lahti"], r: "Tampere", cat: "SUOMI" },
    { q: "Mikä on Lapin maakuntakeskus, jossa sijaitsee myös Joulupukin pajakylä?", a: ["Rovaniemi", "Kemi", "Tornio", "Ivalo"], r: "Rovaniemi", cat: "SUOMI" },
    { q: "Mikä meri rajoittaa Suomea etelässä ja lännessä?", a: ["Itämeri", "Pohjanmeri", "Jäämeri", "Norjanmeri"], r: "Itämeri", cat: "SUOMI" },
    { q: "Mikä on Suomen vanhin kaupunki?", a: ["Turku", "Helsinki", "Porvoo", "Rauma"], r: "Turku", cat: "SUOMI" },
    { q: "Mikä saaristo Suomen lounaisrannikolla on saarten määrältään yksi maailman suurimmista?", a: ["Saaristomeri", "Ahvenanmeri", "Merenkurkku", "Suomenlahti"], r: "Saaristomeri", cat: "SUOMI" },
    { q: "Mikä Pohjois-Pohjanmaan kaupunki tunnetaan Suomen 'IT- ja teknologiakaupunkina' pohjoisessa?", a: ["Oulu", "Kajaani", "Rovaniemi", "Kokkola"], r: "Oulu", cat: "SUOMI" },

    // --- SUOMEN HISTORIA & KULTTUURI ---
    { q: "Minä vuonna Suomi julistautui itsenäiseksi?", a: ["1917", "1906", "1918", "1945"], r: "1917", cat: "HISTORIA" },
    { q: "Kuka oli Suomen ensimmäinen presidentti?", a: ["K. J. Ståhlberg", "C. G. E. Mannerheim", "Urho Kekkonen", "J. K. Paasikivi"], r: "K. J. Ståhlberg", cat: "HISTORIA" },
    { q: "Kuka kokosi Suomen kansalliseepoksen Kalevalan?", a: ["Elias Lönnrot", "Aleksis Kivi", "J. L. Runeberg", "Eino Leino"], r: "Elias Lönnrot", cat: "HISTORIA" },
    { q: "Mikä on Suomen virallinen kansalliseläin?", a: ["Karhu", "Susi", "Hirvi", "Ilves"], r: "Karhu", cat: "SUOMI" },
    { q: "Mikä on Suomen kansallislintu?", a: ["Laulujoutsen", "Kurki", "Harakka", "Koppelo"], r: "Laulujoutsen", cat: "SUOMI" },
    { q: "Mitä rahayksikköä Suomessa käytettiin ennen euroon siirtymistä vuonna 2002?", a: ["Markka", "Kruunu", "Rupla", "Penni"], r: "Markka", cat: "HISTORIA" },
    { q: "Mikä suomalainen matkapuhelingiantti hallitsi maailman markkinoita 1990- ja 2000-luvuilla?", a: ["Nokia", "Salora", "Benefon", "Ericsson"], r: "Nokia", cat: "TEKNIIKKA" },
    { q: "Mikä ikoninen Nokia-puhelinmalli tunnetaan internet-meemeissä 'särkymättömänä' legendana?", a: ["3310", "5110", "1100", "8210"], r: "3310", cat: "MEEMIT" },
    { q: "Kuka suomalainen säveltäjä on luonut teokset 'Finlandia' ja 'Kullervo'?", a: ["Jean Sibelius", "Einojuhani Rautavaara", "Kaija Saariaho", "Oskar Merikanto"], r: "Jean Sibelius", cat: "KULTTUURI" },
    { q: "Kuka suomalainen kirjailija kirjoitti ensimmäisen suomenkielisen romaanin 'Seitsemän veljestä'?", a: ["Aleksis Kivi", "Eino Leino", "Mika Waltari", "Väinö Linna"], r: "Aleksis Kivi", cat: "KULTTUURI" },
    { q: "Mikä suomalainen keksintö / perinne on valittu UNESCOn aineettoman kulttuuriperinnön luetteloon?", a: ["Saunakulttuuri", "Mämmi", "Pesäpallo", "Kantele"], r: "Saunakulttuuri", cat: "KULTTUURI" },
    { q: "Kuka suomalainen kehittäjä loi Linux-käyttöjärjestelmän ytimen vuonna 1991?", a: ["Linus Torvalds", "Michael Widenius", "Jarkko Oikarinen", "Teemu Arina"], r: "Linus Torvalds", cat: "TEKNIIKKA" },
    // --- HIP HOP & KULTTUURI ---
    { q: "Mitä kaupunkia pidetään Hip Hopin synnyinpaikkana?", a: ["New York (The Bronx)", "Los Angeles (Compton)", "Atlanta", "Detroit"], r: "New York (The Bronx)", cat: "MUSA" },
    { q: "Kuka julkaisi legendaarisen 'Illmatic'-albumin vuonna 1994 ollessaan vain 20-vuotias?", a: ["Nas", "Jay-Z", "The Notorious B.I.G.", "Rakim"], r: "Nas", cat: "MUSA" },
    { q: "Minkä yhtyeen jäseniä Dr. Dre, Ice Cube ja Eazy-E olivat?", a: ["N.W.A", "Wu-Tang Clan", "Public Enemy", "Outkast"], r: "N.W.A", cat: "MUSA" },
    { q: "Mikä artistivoitti musiikin Pulitzer-palkinnon albumistaan 'DAMN.'?", a: ["Kendrick Lamar", "J. Cole", "Drake", "Kanye West"], r: "Kendrick Lamar", cat: "MUSA" },
    { q: "Mikä on Eminemin alter egon nimi, jota hän käyttää väkivaltaisemmissa ja tummemmissa kappaleissaan?", a: ["Slim Shady", "Stan", "The Rabbit", "Marshall Mathers"], r: "Slim Shady", cat: "MUSA" },
    { q: "Mikä naisräppäri julkaisi timanttimyyntiin yltäneen hitin 'Bodak Yellow'?", a: ["Cardi B", "Nicki Minaj", "Megan Thee Stallion", "Doja Cat"], r: "Cardi B", cat: "MUSA" },
    { q: "Mikä oli räppäri Christopher Wallacen taiteilijanimi?", a: ["The Notorious B.I.G.", "Tupac Shakur", "Method Man", "Snoop Dogg"], r: "The Notorious B.I.G.", cat: "MUSA" },
    { q: "Mikä atlantalaisduo tunnetaan hiteistä 'Ms. Jackson' ja 'Hey Ya!'?", a: ["Outkast", "Migos", "Run the Jewels", "Rae Sremmurd"], r: "Outkast", cat: "MUSA" },
    { q: "Mitä 'Wu' tarkoittaa Wu-Tang Clanin mytologiassa?", a: ["Witty Unpredictable", "West Underground", "War Unit", "World Union"], r: "Witty Unpredictable", cat: "MUSA" },
    { q: "Mikä tuottaja on kuuluisa 'We The Best' -huudostaan?", a: ["DJ Khaled", "Metro Boomin", "Dr. Dre", "Pharrell Williams"], r: "DJ Khaled", cat: "MUSA" },

    // --- EUROVISION & MUSIIKKI ---
    { q: "Missä kaupungissa järjestetään Eurovision laulukilpailu 2026?", a: ["Wien", "Tukholma", "Berliini", "Oslo"], r: "Wien", cat: "EUROVIISUT" },
    { q: "Kuka voitti Euroviisut 1974 Ruotsille kappaleella 'Waterloo'?", a: ["ABBA", "Herreys", "Roxette", "The Real Group"], r: "ABBA", cat: "EUROVIISUT" },
    { q: "Kuka voitti Ruotsille vuonna 2012 ikonisella kappaleella 'Euphoria'?", a: ["Loreen", "Carola", "Charlotte Perrelli", "Måns Zelmerlöw"], r: "Loreen", cat: "EUROVIISUT" },
    { q: "Miksi kutsutaan elokuvamaailmassa alkuperäisen puheen korvaamista toisella kielellä (esim. suomeksi)?", a: ["Dubkaus", "Tekstititys", "Renderöinti", "Remiksaus"], r: "Dubkaus", cat: "ELOKUVAT" },

    // --- POKÉMON & ANIME ---
    { q: "Mikä Pokémon on numerolla #001 Pokédexissä?", a: ["Bulbasaur", "Pikachu", "Charmander", "Squirtle"], r: "Bulbasaur", cat: "POKÉMON" },
    { q: "Mikä on Ash Ketchumin kaikkien aikojen ensimmäinen Pokémon?", a: ["Pikachu", "Caterpie", "Bulbasaur", "Pidgey"], r: "Pikachu", cat: "POKÉMON" },
    { q: "Mikä tyyppi on super-tehokas Vesityypin Pokémonia vastaan?", a: ["Sähkö", "Tuli", "Kivi", "Psyykkinen"], r: "Sähkö", cat: "POKÉMON" },
    { q: "Mikä on One Piecen päähenkilön nimi, joka haluaa Merirosvokuninkaaksi?", a: ["Monkey D. Luffy", "Zoro", "Sanji", "Naruto"], r: "Monkey D. Luffy", cat: "ANIME" },

    // --- RETROMUSIIKKI (70, 80 & 90-LUKU) ---
    { q: "Mitä legendaarista bändiä luotsasi Freddie Mercury ja lauloi 'Bohemian Rhapsodyn'?", a: ["Queen", "Led Zeppelin", "The Rolling Stones", "Pink Floyd"], r: "Queen", cat: "RETROMUSA" },
    { q: "Kuka tunnetaan 'Popin kuninkaana' ja julkaisi maailman myydyimmän albumin 'Thriller'?", a: ["Michael Jackson", "Prince", "George Michael", "Elvis Presley"], r: "Michael Jackson", cat: "RETROMUSA" },
    { q: "Mikä 80-luvun tähti lauloi 'Like a Virgin' ja 'Material Girl'?", a: ["Madonna", "Cyndi Lauper", "Whitney Houston", "Tina Turner"], r: "Madonna", cat: "RETROMUSA" },
    { q: "Mikä oli Spice Girlsin debyyttihitti vuodelta 1996?", a: ["Wannabe", "Say You'll Be There", "2 Become 1", "Spice Up Your Life"], r: "Wannabe", cat: "RETROMUSA" },
    { q: "Minkä Nirvanan kappaleen katsotaan tuoneen Grungen valtavirtaan vuonna 1991?", a: ["Smells Like Teen Spirit", "Come As You Are", "Lithium", "In Bloom"], r: "Smells Like Teen Spirit", cat: "RETROMUSA" },
    { q: "Mitä 'MTV' tarkoitti alkuperäisesti 80-luvulla?", a: ["Music Television", "Modern Television", "Movie Tracks Video", "Multi-Tone Voice"], r: "Music Television", cat: "RETROMUSA" },

    // --- MODERNI MUSIIKKI (2010–2020-LUKU) ---
    { q: "Mikä brittiläinen artistijulkaisi menestysalbumit '19', '21', '25' ja '30'?", a: ["Adele", "Dua Lipa", "Ed Sheeran", "Sam Smith"], r: "Adele", cat: "MODERNI MUSA" },
    { q: "Mikä kanadalaislaulaja tunnetaan hiteistä 'Blinding Lights' ja 'Starboy'?", a: ["The Weeknd", "Justin Bieber", "Drake", "Shawn Mendes"], r: "The Weeknd", cat: "MODERNI MUSA" },
    { q: "Mikä on Miley Cyrusin vuoden 2023 megahitin nimi, jossa hän ostaa itse kukkia?", a: ["Flowers", "Wrecking Ball", "Midnight Sky", "Party in the USA"], r: "Flowers", cat: "MODERNI MUSA" },
    { q: "Mikä K-pop-yhtye esiintyi ensimmäisenä Coachellassa ja sisältää jäsenet Lisa ja Jennie?", a: ["BLACKPINK", "BTS", "Twice", "Red Velvet"], r: "BLACKPINK", cat: "K-POP" },
    { q: "Kuka esiintyi Super Bowl Halftime Show'ssa vuonna 2024?", a: ["Usher", "Rihanna", "Dr. Dre", "Bruno Mars"], r: "Usher", cat: "MODERNI MUSA" },

    // --- TEKNOLOGIA & PELIT ---
    { q: "Mikä on sen AI-teknologian nimi, joka mahdollistaa tietokoneiden oppimisen datasta ilman suoraa koodausta?", a: ["Koneoppiminen (Machine Learning)", "Pilvilaskenta", "Lohkoketju", "Valokuitu"], r: "Koneoppiminen (Machine Learning)", cat: "TEKNIIKKA" },
    { q: "Mille suositulle peligenrelle on tyypillistä 100 pelaajan taistelu viimeisestä selviytyjästä?", a: ["Battle Royale", "MOBA", "Hiekkalaatikko", "RTS"], r: "Battle Royale", cat: "PELIT" },
    { q: "Mitä lyhenne 'GPU' tarkoittaa?", a: ["Graphics Processing Unit", "General Power Utility", "Global Path Universal", "Gaming Protocol Unit"], r: "Graphics Processing Unit", cat: "LAITTEISTO" },
    { q: "Kuka kuuluisa teknologia-yrittäjä perusti SpaceX:n ja osti Twitterin (nykyisin X)?", a: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"], r: "Elon Musk", cat: "TEKNIIKKA" },
    { q: "Mikä on nimitys kehittäjien peliin piilottamalle salaviestille tai ominaisuudelle?", a: ["Pääsiäismuna (Easter Egg)", "Glitch", "Beta", "Liso-osa"], r: "Pääsiäismuna (Easter Egg)", cat: "PELIT" },
    { q: "Mitä 'POV' tarkoittaa striimauksessa ja videoissa?", a: ["Point Of View", "Player On Video", "Power Of Voice", "Piece Of Valve"], r: "Point Of View", cat: "INTERNET" },
    { q: "Mikä ohjelmointikieli käyttää 'snake_case'-nimeämistä ja on nimetty brittiläisen komediaryhmän mukaan?", a: ["Python", "C++", "Ruby", "Swift"], r: "Python", cat: "KOODAUS" },
    { q: "Mikä kryptovaluutta aloitti krypto-boomin vuonna 2009?", a: ["Bitcoin", "Ethereum", "Dogecoin", "Litecoin"], r: "Bitcoin", cat: "TEKNIIKKA" },
    { q: "Mikä pelikonsoli käytti ensimmäisenä CD-ROM-levyjä pääasiallisena peliformaattinaan?", a: ["PlayStation 1", "Nintendo 64", "Sega Genesis", "Super Nintendo"], r: "PlayStation 1", cat: "RETRO" },
    { q: "Mihin tarkoitukseen 'VPN'-yhteyttä käytetään?", a: ["Virtuaalinen yksityisverkko (Virtual Private Network)", "Video Path Node", "Variable Port Number", "Visual Processing Net"], r: "Virtuaalinen yksityisverkko (Virtual Private Network)", cat: "VERKOT" },

    // --- MUSIIKKITEKNIIKKA & KULTTUURI ---
    { q: "Mikä oli 90-luvun suosituin ohjelma MP3-tiedostojen toistamiseen tietokoneella?", a: ["Winamp", "Spotify", "VLC", "Windows Movie Maker"], r: "Winamp", cat: "RETRO-TECH" },
    { q: "Minkä digitaalisen musiikkikaupan Apple lanseerasi vuonna 2003 muuttaen alan ikuisesti?", a: ["iTunes Store", "Napster", "Pandora", "Amazon Music"], r: "iTunes Store", cat: "TEKNIIKKA" },
    { q: "Mikä on Daniel Ekin perustaman ruotsalaisen musiikintoistopalvelun nimi?", a: ["Spotify", "Tidal", "SoundCloud", "Deezer"], r: "Spotify", cat: "TEKNIIKKA" },
    { q: "Mikä on CD-tasoisen äänen standardi näytteenottotaajuus (sampling rate)?", a: ["44.1 kHz", "48 kHz", "96 kHz", "128 kbps"], r: "44.1 kHz", cat: "MUSA-TEKNIIKKA" },
    { q: "Mikä kuuluisa elektronisen musiikin festivaali järjestetään vuosittain Boomissa, Belgiassa?", a: ["Tomorrowland", "Ultra", "Coachella", "Glastonbury"], r: "Tomorrowland", cat: "MUSA" },

    // --- SOITTIMET & TEORIA ---
    { q: "Kuinka monta kieltä on yleensä tavallisessa bassokitarassa?", a: ["4", "6", "5", "12"], r: "4", cat: "SOITTIMET" },
    { q: "Mihin soitinperheeseen saksofoni kuuluu?", a: ["Puuconnected (Puupuhaltimet)", "Vaskipuhaltimet", "Lyömäsoittimet", "Kielisoittimet"], r: "Puuconnected (Puupuhaltimet)", cat: "SOITTIMET" },
    { q: "Mikä on nimeltään elektroninen soitin, jota soitetaan koskettamatta sitä, antenneja käyttäen?", a: ["Theremin", "Syntetisaattori", "Keytar", "Vocoder"], r: "Theremin", cat: "SOITTIMET" },

    // --- ROCK & METAL ---
    { q: "Mikä bändi tunnetaan hitistään 'Stairway to Heaven'?", a: ["Led Zeppelin", "Deep Purple", "Black Sabbath", "The Who"], r: "Led Zeppelin", cat: "ROCK" },
    { q: "Kuka on Guns N' Roses -yhtyeen laulaja?", a: ["Axl Rose", "Slash", "Eddie Vedder", "Kurt Cobain"], r: "Axl Rose", cat: "ROCK" },
    { q: "Mikä australialainen bändi on kuuluisa biiseistään 'Back in Black' ja 'Thunderstruck'?", a: ["AC/DC", "INXS", "Midnight Oil", "Tame Impala"], r: "AC/DC", cat: "ROCK" },
    { q: "Mikä on Metallican vuonna 1991 julkaistun nimikkoalbumin lempinimi väriin viitaten?", a: ["The Black Album", "The White Album", "Red Lightning", "Blue Steel"], r: "The Black Album", cat: "ROCK" },
    { q: "Minkä bändin maskotti on zombimainen hahmo nimeltä Eddie?", a: ["Iron Maiden", "Megadeth", "Slayer", "Anthrax"], r: "Iron Maiden", cat: "ROCK" },

    // --- 80 & 90-LUVUN SYNTH & POP ---
    { q: "Mikä brittiduo lauloi 'West End Girls' ja 'It's a Sin'?", a: ["Pet Shop Boys", "Erasure", "Depeche Mode", "Wham!"], r: "Pet Shop Boys", cat: "RETROMUSA" },
    { q: "Mistä Rick Astleyn kappaleesta tuli yksi internetin suurimmista meemeistä?", a: ["Never Gonna Give You Up", "Together Forever", "Take Me To Your Heart", "Cry For Help"], r: "Never Gonna Give You Up", cat: "MEEMIT" },
    { q: "Minä vuonna MTV aloitti lähetyksensä Yhdysvalloissa?", a: ["1981", "1979", "1985", "1989"], r: "1981", cat: "HISTORIA" },
    { q: "Mikä tyttöbändi lauloi 90-luvun hitin 'Waterfalls'?", a: ["TLC", "Destiny's Child", "En Vogue", "SWV"], r: "TLC", cat: "RETROMUSA" },
    { q: "Kuka lauloi kappaleen 'I Will Always Love You' elokuvaan Bodyguard?", a: ["Whitney Houston", "Mariah Carey", "Celine Dion", "Janet Jackson"], r: "Whitney Houston", cat: "RETROMUSA" },

    // --- HIP HOP & R&B ---
    { q: "Kuka räppäri tunnetaan myös nimellä 'Slim Shady'?", a: ["Eminem", "Dr. Dre", "Snoop Dogg", "50 Cent"], r: "Eminem", cat: "HIP HOP" },
    { q: "Mikä oli Wu-Tang Clanin debyyttialbumin nimi?", a: ["Enter the Wu-Tang (36 Chambers)", "Ready to Die", "Illmatic", "The Chronic"], r: "Enter the Wu-Tang (36 Chambers)", cat: "HIP HOP" },
    { q: "Kuka on modernin popin ja R&B:n 'Queen Bey'?", a: ["Beyoncé", "Rihanna", "Alicia Keys", "Ciara"], r: "Beyoncé", cat: "MODERNI MUSA" },
    { q: "Mikä artistijulkaisi vuoden 2017 hitin 'Humble'?", a: ["Kendrick Lamar", "Drake", "J. Cole", "Post Malone"], r: "Kendrick Lamar", cat: "HIP HOP" },

    // --- ELEKTRONINEN & DANCE ---
    { q: "Mikä ranskalainen duo käytti robotinkypäriä ja julkaisi 'Random Access Memories'?", a: ["Daft Punk", "Justice", "Air", "Phoenix"], r: "Daft Punk", cat: "EDM" },
    { q: "Mitä 'EDM' tarkoittaa musiikkimaailmassa?", a: ["Electronic Dance Music", "Electric Drum Machine", "Everyday Digital Music", "Enhanced Data Mix"], r: "Electronic Dance Music", cat: "EDM" },
    { q: "Mikä DJ on kuuluisa hitistään 'Levels' ja albumista 'True'?", a: ["Avicii", "David Guetta", "Tiësto", "Kygo"], r: "Avicii", cat: "EDM" },
    { q: "Mikä on sen japanilaisen elektronisen soittimen nimi, joka on muotoiltu nuotin muotoiseksi?", a: ["Otamatone", "Theremin", "Keytar", "Stylophone"], r: "Otamatone", cat: "SOITTIMET" },

    // --- PELI- JA ELOKUVAMUSIIKKI ---
    { q: "Kuka sävelsi ikonisen musiikin elokuvaihin Star Wars, Tappajahai ja Indiana Jones?", a: ["John Williams", "Hans Zimmer", "Danny Elfman", "Ennio Morricone"], r: "John Williams", cat: "ELOKUVAT" },
    { q: "Mistä pelistä löytyy Utada Hikarun kappale 'Simple and Clean'?", a: ["Kingdom Hearts", "Final Fantasy", "Tekken", "Persona"], r: "Kingdom Hearts", cat: "PELIT" },
    { q: "Mikä on Halo-pelin tunnetun, gregoriaanista laulua sisältävän teemabiisin nimi?", a: ["Halo Theme", "Warthog Run", "Finish the Fight", "Covenant Dance"], r: "Halo Theme", cat: "PELIT" },
    { q: "Minkä nimisellä hahmolla pelaat musikaalisessa taistelupelissä 'Hi-Fi RUSH'?", a: ["Chai", "Peppermint", "808", "Macaron"], r: "Chai", cat: "PELIT" },

    // --- AINA UUDET HITIT (2020-LUKU) ---
    { q: "Mikä artistijulkaisi 'Harry's House' -albumin vuonna 2022?", a: ["Harry Styles", "Niall Horan", "Zayn Malik", "Liam Payne"], r: "Harry Styles", cat: "MODERNI MUSA" },
    { q: "Kuka lauloi viraalihitin 'Drivers License' TikTokissa vuonna 2021?", a: ["Olivia Rodrigo", "Sabrina Carpenter", "Billie Eilish", "Tate McRae"], r: "Olivia Rodrigo", cat: "MODERNI MUSA" },
    { q: "Minkä bändin nimi on myös Pixies-yhtyeen tunnetun kappaleen nimi?", a: ["Where Is My Mind", "Hey", "Gigantic", "Debaser"], r: "Where Is My Mind", cat: "ROCK" },
    { q: "Mikä on Sabrina Carpenterin vuoden 2024 megahitin nimi?", a: ["Espresso", "Latte", "Cappuccino", "Mocha"], r: "Espresso", cat: "MODERNI MUSA" },

    // --- TIVIA & SOITTIMET ---
    { q: "Mikä on orkesterin korkea-äänisin puupuhallin?", a: ["Piccolo", "Huilu", "Oboe", "Klarinetti"], r: "Piccolo", cat: "SOITTIMET" },
    { q: "Kuinka monta kosketinta on täysikokoisessa pianossa?", a: ["88", "76", "92", "104"], r: "88", cat: "SOITTIMET" },
    { q: "Mikä soitin liitetään usein Skotlannin Ylämaahan?", a: ["Säkkipilli", "Harppu", "Hanuri", "Viulu"], r: "Säkkipilli", cat: "SOITTIMET" },
    { q: "Miksi kutsutaan yhden henkilön esittämää musiikkikappaletta?", a: ["Solo", "Duetto", "Trio", "Kvartetti"], r: "Solo", cat: "MUSA" },

    // --- EUROVIISUT & POHJOISMAISET HITIT ---
    { q: "Mikä maa on voittanut Euroviisut useimmin (jaetulla sijalla Ruotsin kanssa)?", a: ["Irlanti", "Yhdistynyt kuningaskunta", "Israel", "Luxemburg"], r: "Irlanti", cat: "EUROVIISUT" },
    { q: "Kuka voitti Euroviisut Norjalle vuonna 2009 kappaleella 'Fairytale'?", a: ["Alexander Rybak", "Kurt Nilsen", "Jahn Teigen", "TIX"], r: "Alexander Rybak", cat: "EUROVIISUT" },
    { q: "Mikä tanskalainen bändi sai maailmanlaajuisen hitin kappaleella '7 Years'?", a: ["Lukas Graham", "Aqua", "Alphabeat", "Mew"], r: "Lukas Graham", cat: "MUSA" },
    { q: "Minä vuonna Lordi voitti Euroviisut Suomelle?", a: ["2006", "2002", "2010", "2008"], r: "2006", cat: "ASSEMBLY" },

    // --- SEKALAINEN MUSIIKKITIETO ---
    { q: "Mikä oli kaikkien aikojen ensimmäinen MTV-kanavalla esitetty musiikkivideo?", a: ["Video Killed the Radio Star", "Thriller", "Take on Me", "Billie Jean"], r: "Video Killed the Radio Star", cat: "HISTORIA" },
    { q: "Mikä artisti tunnetaan alter egostaan 'Ziggy Stardust'?", a: ["David Bowie", "Iggy Pop", "Lou Reed", "Mick Jagger"], r: "David Bowie", cat: "RETROMUSA" },
    { q: "Mikä on 'Rickroll'-meemiin liitetyn kappaleen virallinen nimi?", a: ["Never Gonna Give You Up", "Together Forever", "Cry for Help", "Whenever You Need Somebody"], r: "Never Gonna Give You Up", cat: "MEEMIT" },
    { q: "Mikä musiikkiformaatti edelsi CD-levyä tarjoten parempaa äänenlaatua kuin kasetit?", a: ["Vinyylilevy", "Minidisc", "8-raita", "LaserDisc"], r: "Vinyylilevy", cat: "RETRO-TECH" },
    { q: "Mitä 'BPM' tarkoittaa musiikintuotannossa?", a: ["Beats Per Minute", "Bass Power Mode", "Binary Pulse Modulation", "Best Playable Music"], r: "Beats Per Minute", cat: "MUSA-TEKNIIKKA" },
    { q: "Mikä legendaarinen festivaali järjestettiin vuonna 1969 ja nähtiin hippiaikakauden huipentumana?", a: ["Woodstock", "Glastonbury", "Lollapalooza", "Burning Man"], r: "Woodstock", cat: "HISTORIA" },

    // STAR WARS & SCI-FI
    { q: "Kuka hahmo tunnetaan lauseesta: 'I am your father'?", a: ["Darth Vader", "Luke Skywalker", "Han Solo", "Obi-Wan Kenobi"], r: "Darth Vader", cat: "SCI-FI" },
    { q: "Mikä on Han Solon uskoillisen perämiehen ja Wookiee-ystävän nimi?", a: ["Chewbacca", "Ewok", "Jabba", "Lando"], r: "Chewbacca", cat: "SCI-FI" },
    { q: "Minkä värinen on Samuel L. Jacksonin (Mace Windu) uniikki valomiekka?", a: ["Purppura", "Vihreä", "Sininen", "Keltainen"], r: "Purppura", cat: "SCI-FI" },
    { q: "Mikä on sen droidin nimi, joka 'puhuu yli kuutta miljoonaa viestintämuotoa'?", a: ["C-3PO", "R2-D2", "BB-8", "K-2SO"], r: "C-3PO", cat: "SCI-FI" },

    // RETRONÄYTÖT & KAAPELIT
    { q: "Mikä oli sen klassisen TV-kaapelin nimi, jossa oli suorakaiteen muotoinen liitin ja 21 pinniä?", a: ["RGB SCART", "Antennikaapeli", "Komposiitti (Keltainen)", "S-Video"], r: "RGB SCART", cat: "RETRO-TECH" },
    { q: "Mikä oli yleisin sininen liitin tietokonenäytöille ennen HDMI-aikakautta?", a: ["VGA", "DVI", "DisplayPort", "USB-C"], r: "VGA", cat: "RETRO-TECH" },
    { q: "Mihin Game Boy Colorin näyttöä usein verrattiin taustavalon puuttumisen vuoksi?", a: ["Hernekeittoon", "Peiliin", "Taskulamppuun", "Kristallipalloon"], r: "Hernekeittoon", cat: "RETRO" },

    // MARIO & SONIC
    { q: "Mitä tapahtuu, jos Sonic ottaa vahinkoa kantaessaan kultarenkaita?", a: ["Hän menettää kaikki renkaansa", "Hän kuolee välittömästi", "Hän menettää 1 renkaan", "Hän muuttuu näkymättömäksi"], r: "Hän menettää kaikki renkaansa", cat: "PELIT" },
    { q: "Mikä on sen prinsessan nimi, jonka Mario yleensä pelastaa Sienivaltakunnassa?", a: ["Peach", "Zelda", "Daisy", "Rosalina"], r: "Peach", cat: "NINTENDO" },
    { q: "Missä pelissä Yoshi-dinosaurus teki ensimmäisen esiintymisensä?", a: ["Super Mario World", "Super Mario Bros 1", "Mario Kart 64", "Super Mario Sunshine"], r: "Super Mario World", cat: "NINTENDO" },
    { q: "Mikä yhtiö loi Sonic the Hedgehogin Marion haastajaksi?", a: ["SEGA", "Nintendo", "Sony", "Capcom"], r: "SEGA", cat: "PELIT" },
    { q: "Mitä Sonic kerää tasoissa välttääkseen kuolemisen osumasta?", a: ["Kultarenkaita", "Kolikoita", "Timantteja", "Tähtiä"], r: "Kultarenkaita", cat: "PELIT" },
    { q: "Mikä Mario Kart -rata on kuuluisa siitä, ettei siinä ole lainkaan kaiteita?", a: ["Rainbow Road", "Moo Moo Farm", "Bowser's Castle", "Koopa Troopa Beach"], r: "Rainbow Road", cat: "NINTENDO" },
    { q: "Mikä on päähenkilön nimi The Legend of Zelda -pelisarjassa?", a: ["Link", "Zelda", "Ganon", "Navi"], r: "Link", cat: "NINTENDO" },

    // MATEMATIIKKA & LOGIIKKA
    { q: "Mikä on luvun 81 neliöjuuri?", a: ["9", "7", "8", "11"], r: "9", cat: "MATEMATIIKKA" },
    { q: "Jos digitaalikello näyttää 13:37, mitä se on 12 tunnin kellomuodossa?", a: ["1:37 PM", "1:37 AM", "3:37 PM", "11:37 AM"], r: "1:37 PM", cat: "LOGIIKKA" },
    { q: "Kuinka monta astetta on täydessä ympyrässä?", a: ["360", "180", "90", "400"], r: "360", cat: "MATEMATIIKKA" },
    { q: "Mikä on lukusarjan seuraava luku: 2, 4, 8, 16...?", a: ["32", "24", "20", "64"], r: "32", cat: "LOGIIKKA" },

    // SÄHKÖ- JA FYSIIKKA
    { q: "Mitä yksikköä käytetään sähkövastuksen (resistanssin) mittaamiseen?", a: ["Omi (Ω)", "Watti (W)", "Voltti (V)", "Ampeeri (A)"], r: "Omi (Ω)", cat: "FYSIIKKA" },
    { q: "Minkä väristä johtoa käytetään yleensä vaihejองค์kohtana (Live/Vaihe) nykyaikaisissa kaapeleissa?", a: ["Ruskea", "Sininen", "Keltavihreä", "Musta"], r: "Ruskea", cat: "SÄHKÖ" },
    { q: "Mikä on valonnopeus tyhjiössä noin?", a: ["300 000 km/s", "1 000 000 km/s", "10 000 km/s", "500 000 km/s"], r: "300 000 km/s", cat: "FYSIIKKA" },
    { q: "Mikä hiukkanen kantaa negatiivista sähkövarausta?", a: ["Elektroni", "Protoni", "Neutroni", "Fotoni"], r: "Elektroni", cat: "FYSIIKKA" },

    // LAITTEISTO-ONGELMAT
    { q: "Rakennat tietokonetta ja pudotat pienen ruuvin emolevyn taakse. Mikä on suurin riski, jos jätät sen sinne?", a: ["Oikosulku", "Koneesta tulee liian painava", "Tuuletin juuttuu", "Wi-Fi hidastuu"], r: "Oikosulku", cat: "VIANMÄÄRITYS" },
    { q: "Tietokoneesi käynnistyy, tuulettimet pyörivät, mutta näyttö on pimeänä ja emolevy piippaa 3 kertaa. Mikä on vikana?", a: ["RAM-muistiongelma", "Bensa loppu", "Näppäimistö irti", "Näyttö ylösalaisin"], r: "RAM-muistiongelma", cat: "VIANMÄÄRITYS" },
    { q: "Miksi kutsutaan ilmiötä, jossa komponentti kuumenee liikaa ja järjestelmä hidastaa sitä suojellakseen sitä?", a: ["Thermal Throttling", "Ice Mode", "Nestejäähdytys", "Turbo Lag"], r: "Thermal Throttling", cat: "VIANMÄÄRITYS" },
    { q: "Löydät vanhan peliohjaimen 15-pinnisellä liittimellä, joka näyttää leveämmältä VGA-portilta. Mikä portti tämä on?", a: ["Game Port", "SATA", "Thunderbolt", "FireWire"], r: "Game Port", cat: "RETRO-TECH" },

    // MATEMATIIKKA-TARINAT
    { q: "Operaattori PSL631:llä on 128 Gt RAM-muistia. Hän antaa puolet Kamekille ja asentaa 32 Gt lisää. Paljonko RAMia hänellä on nyt?", a: ["96 Gt", "64 Gt", "128 Gt", "160 Gt"], r: "96 Gt", cat: "MATEMATIIKKA" },
    { q: "Lataus on kooltaan 1000 Mt. Netin nopeutesi on 10 Mt sekunnissa. Kuinka monta sekuntia lataus kestää?", a: ["100 sekuntia", "10 sekuntia", "1000 sekuntia", "1 minuutti"], r: "100 sekuntia", cat: "MATEMATIIKKA" },
    { q: "Retropelaaja ostaa 3 peliä 20 euroa kappale. Hän maksaa 100 euron sedelillä. Kuinka monta 10 euron seteliä hän saa takaisin?", a: ["4", "40", "2", "6"], r: "4", cat: "MATEMATIIKKA" },
    { q: "Jos Minecraft-arkkuun mahtuu 27 pinoa tavaraa ja jokaisessa pinossa on 64 esinettä, kuinka monta esinettä täydessä arkussa on?", a: ["1728", "1500", "1920", "2048"], r: "1728", cat: "MINECRAFT" },

    // SÄHKÖ & VERKOT
    { q: "Ohmin lain mukaan, jos haluat laskea jännitteen (V), kerrot virran (I) millä?", a: ["Vastuksella (R)", "Teholla (P)", "Taajuudella (F)", "Nopeudella (S)"], r: "Vastuksella (R)", cat: "FYSIIKKA" },
    { q: "Mikä näistä materiaaleista on puolijohde (Semi-conductor), jota käytetään tietokoneen siruissa?", a: ["Pii (Silicon)", "Kupari", "Puu", "Kumi"], r: "Pii (Silicon)", cat: "TEKNIIKKA" },
    { q: "Tietokoneen virtalähteessä, minkä värisessä johdossa kulkee yleensä näyttikselle ja prosessorille syötettävä +12V jännite?", a: ["Keltainen", "Punainen", "Musta", "Oranssi"], r: "Keltainen", cat: "LAITTEISTO" },
    { q: "Mikä on talon 'turvakytkimen' nimi, joka katkaisee virran, jos kaapeli vaurioituu tai kastuu?", a: ["Vikavirtasuojakytkin / Sulake", "Muuntaja", "Volttimittari", "Kondensaattori"], r: "Vikavirtasuojakytkin / Sulake", cat: "SÄHKÖ" },
    { q: "Mikä on jokaiselle verkkokortille uniikki 12-merkkinen heksadesimaaliosoite?", a: ["MAC-osoite", "Kotiosoite", "Postinumero", "DNS-tietue"], r: "MAC-osoite", cat: "VERKOT" },
    { q: "Mitä protokollaa käytetään IP-osoitteen automaattiseen jakamiseen tietokoneellesi verkossa?", a: ["DHCP", "HTTP", "FTP", "POP3"], r: "DHCP", cat: "VERKOT" },
    { q: "Jos pingoat palvelinta ja saat vastaukseksi 'Request Timed Out', mitä se tarkoittaa?", a: ["Ei vastausta", "Palvelin on liian nopea", "Voitit pelin", "Väärä salasana"], r: "Ei vastausta", cat: "VERKOT" },

    // RETROMUISTOT & INTERNET
    { q: "Mikä oli tavallisen 3,5-tuumaisen korppuaseman (Floppy Disk) maksimikapasiteetti?", a: ["1.44 Mt", "700 Mt", "4.7 Gt", "128 Kt"], r: "1.44 Mt", cat: "RETRO-TECH" },
    { q: "Miksi ihmiset tekivät 'degauss'-toiminnon vanhoille CRT-putkinäytöilleen?", a: ["Korjatakseen värivääristymät", "Puhdistaakseen lasin", "Säästääkseen sähköä", "Nostakseen resoluutiota"], r: "Korjatakseen värivääristymät", cat: "RETRO-TECH" },
    { q: "Mitä kirjain 'S' tarkoittaa HTTPS-protokollassa?", a: ["Secure", "System", "Speed", "Standard"], r: "Secure", cat: "VERKOT" },
    { q: "Mikä kuuluisa Windowsin virheilmoitus tunnetaan nimellä 'BSOD'?", a: ["Blue Screen of Death", "Basic System Output Data", "Binary System Overload Delay", "Blue Screen of Doom"], r: "Blue Screen of Death", cat: "VIANMÄÄRITYS" },
    { q: "Miksi kutsuttiin sitä ääntä, jonka 56k-modeemi päästi yhdistäessään verkkoon 90-luvulla?", a: ["Handshake", "Dial-tone", "Ping", "Kohina"], r: "Handshake", cat: "RETRO-TECH" },
    { q: "Miksi verkkovivettä (latency) yleensä kutsutaan verkkopeleissä?", a: ["Ping", "FPS", "Lag", "Pakettihävikki"], r: "Ping", cat: "VERKOT" },

    // MAANTIETO
    { q: "Mikä on maailman pienin valtio?", a: ["Vatikaani", "Monaco", "San Marino", "Malta"], r: "Vatikaani", cat: "MAANTIETO" },
    { q: "Mikä on Australian pääkaupunki?", a: ["Canberra", "Sydney", "Melbourne", "Perth"], r: "Canberra", cat: "MAANTIETO" },
    { q: "Mikä joki on maailman pisin?", a: ["Niili", "Amazon", "Mississippi", "Jangtse"], r: "Niili", cat: "MAANTIETO" },
    { q: "Mistä maasta löytyy muinainen Machu Picchun kaupunki?", a: ["Peru", "Chile", "Meksiko", "Bolivia"], r: "Peru", cat: "MAANTIETO" },

    // MINECRAFT & PELIT
    { q: "Mitä materiaalia tarvitaan Nether-portaalin kehyksen rakentamiseen?", a: ["Obsidiaani", "Kallio (Bedrock)", "Mukmukivi", "Mustakivi"], r: "Obsidiaani", cat: "MINECRAFT" },
    { q: "Mitä tapahtuu, jos käytät sänkyä Netherissä tai The Endissä?", a: ["Se räjähtää", "Menet nukkuun", "Ei mitään", "Se asettaa syntymäpisteen"], r: "Se räjähtää", cat: "MINECRAFT" },
    { q: "Mikä on virallisen 'pääpomon' nimi The Endissä?", a: ["Ääri-drkki (Ender Dragon)", "Wither", "Warden", "Herobrine"], r: "Ääri-drkki (Ender Dragon)", cat: "MINECRAFT" },

    // TIEROT TURVALLISUUDESTA & KOODAUKSEN PERUSTEET
    { q: "Mikä on 'DDoS'-hyökkäys?", a: ["Sivuston ylikuormittaminen liikenteellä", "Salasanojen varastaminen sähköpostilla", "Viruksen asentaminen", "Tietokannan poistaminen"], r: "Sivuston ylikuormittaminen liikenteellä", cat: "TURVALLISUUS" },
    { q: "Mikä on kaksivaiheisen tunnistautumisen (2FA) pääasiallinen tarkoitus?", a: ["Lisätä ylimääräinen turvakerros", "Tehdä kirjautumisesta nopeampaa", "Jakaa salasanat turvallisesti", "Säästää akkua"], r: "Lisätä ylimääräinen turvakerros", cat: "TURVALLISUUS" },
    { q: "Mitä on 'Phishing' (Kalastelu)?", a: ["Huijaussähköposteja tietojen kalasteluun", "Laitteistotarjousten metsästystä", "Keino nostaa FPS:ää", "Tuulettimen puhdistusta"], r: "Huijaussähköposteja tietojen kalasteluun", cat: "TURVALLISUUS" },
    { q: "Mitä 'Palomuuri' (Firewall) tekee verkossa?", a: ["Estää luvattoman pääsyn", "Nopeuttaa internetiä", "Jäähdyttää reititintä", "Valvoo virrankulutusta"], r: "Estää luvattoman pääsyn", cat: "TURVALLISUUS" },
    { q: "Mikä on 'Ransomware' (Kiristyshaittaohjelma)?", a: ["Haittaohjelma, joka lukitsee tiedostosi", "Ohjelma, joka varastaa RAMia", "Ilmainen virustorjunta", "Työkalu striimaajille"], r: "Haittaohjelma, joka lukitsee tiedostosi", cat: "TURVALLISUUS" },
    { q: "Mitä merkkiä käytetään yleensä JavaScriptissä koodirivin päättämiseen?", a: ["; (Puolipiste)", ": (Kaksoispiste)", ". (Piste)", "! (Huutomerkki)"], r: "; (Puolipiste)", cat: "KOODAUS" },
    { q: "Mikä on 'Muuttuja' (Variable) ohjelmoinnissa?", a: ["Säiliö tiedon tallentamiseen", "Tietokonehiiren tyyppi", "Laitteistovirhe", "Nettinopeustesti"], r: "Säiliö tiedon tallentamiseen", cat: "KOODAUS" },
    { q: "Mitä on 'Debugging' (Koodin Puunaus / Virheenkorjaus)?", a: ["Virheiden etsimistä ja korjaamista", "Uuden laitteiston asentamista", "Väliaikaistiedostojen poistoa", "Pelin pelaamista ilmaiseksi"], r: "Virheiden etsimistä ja korjaamista", cat: "KOODAUS" },

    // RETRO TASOHYPPELYN KLASSIKOT & INFRASTRUKTUURI
    { q: "Mikä eläin on päähenkilö pelissä 'Croc: Legend of the Gobbos'?", a: ["Krokotiili", "Lisko", "Lohikäärme", "Kilpikonna"], r: "Krokotiili", cat: "RETRO" },
    { q: "Mitä lapset Ruff ja Tumble keräävät pelissä '40 Winks'?", a: ["Winks-yöolentoja", "Tähtiä", "Kolikoita", "Nallekarhuja"], r: "Winks-yöolentoja", cat: "RETRO" },
    { q: "Mitä tapahtuu PS1:llä, jos vedät muistikortin irti tallennuskuvakkeen vilkkuessa?", a: ["Tiedosto korruptoituu", "Kortti sulaa", "Pelistä tulee ilmainen", "Ei mitään"], r: "Tiedosto korruptoituu", cat: "RETRO-TECH" },
    { q: "Mikä silta yhdistää Malmön ja Kööpenhaminan?", a: ["Juutinrauman silta (Øresund)", "Iso-Beltin silta", "Västerbron", "Storebælt"], r: "Juutinrauman silta (Øresund)", cat: "MAANTIETO" },
    { q: "Mikä on maailman pohjoisin pääkaupunki?", a: ["Reykjavik", "Oslo", "Helsinki", "Tukholma"], r: "Reykjavik", cat: "MAANTIETO" },

    // LISÄÄ TEKNIIKKAA & YLEISSIVISTYSTÄ
    { q: "Mitä 'AI' tarkoittaa teknologiassa?", a: ["Tekoäly (Artificial Intelligence)", "Automaattinen käyttöliittymä", "Edistynyt syöte", "Aktiivinen integraatio"], r: "Tekoäly (Artificial Intelligence)", cat: "TEKNIIKKA" },
    { q: "Mikä yhtiö kehitti 'ChatGPT'-kielimallin?", a: ["OpenAI", "Google", "Microsoft", "Meta"], r: "OpenAI", cat: "TEKNIIKKA" },
    { q: "Mitä 'OLED' tarkoittaa näytöissä?", a: ["Organic Light-Emitting Diode", "Optical Laser Electronic Display", "Over-Light Energy Device", "Output Led Engine"], r: "OLED", cat: "LAITTEISTO" },
    { q: "Mikä oli Atarin vuonna 1972 julkaisema ensimmäinen kaupallisesti menestynyt videopeli?", a: ["Pong", "Space Invaders", "Pac-Man", "Asteroids"], r: "Pong", cat: "HISTORIA" },
    { q: "Mikä peli on kaikkien aikojen myydyin pelikonsoli (vuoteen 2024 mennessä)?", a: ["PlayStation 2", "Nintendo Switch", "Nintendo DS", "Xbox 360"], r: "PlayStation 2", cat: "RETRO" },
    { q: "Kuka oli historian ensimmäinen tietokoneohjelmoija?", a: ["Ada Lovelace", "Alan Turing", "Grace Hopper", "Charles Babbage"], r: "Ada Lovelace", cat: "HISTORIA" },
    { q: "Mille teknologiajätille on annettu lempinimi 'The Big Blue'?", a: ["IBM", "Intel", "Facebook", "HP"], r: "IBM", cat: "TEKNIIKKA" },
    { q: "Mikä kemiallinen merkki on Kullalla taulukossa?", a: ["Au", "Ag", "Al", "Ar"], r: "Au", cat: "TIEDE" },
    { q: "Mikä planeetta tunnetaan 'Punaisena planeettana'?", a: ["Mars", "Venus", "Jupiter", "Saturnus"], r: "Mars", cat: "AVARUUS" },
    { q: "Kuka maalasi Mona Lisan?", a: ["Leonardo da Vinci", "Michelangelo", "Picasso", "Van Gogh"], r: "Leonardo da Vinci", cat: "TAIDE" },
    { q: "Mitä 'DNA' tarkoittaa?", a: ["Deoksiribonukleiinihappo", "Digital Neural Access", "Dinitrogen Acid", "Dual Node Access"], r: "Deoksiribonukleiinihappo", cat: "TIEDE" },
    { q: "Mitä ammattipelaaja tekee ESIKSEKSI ennen kuin alkaa itkeä reitittimen vilkkuessa punaisena?", a: ["Käynnistää reitittimen uudelleen", "Soittaa poliisille", "Vaihtaa verkkokaapelin", "Menee ulos"], r: "Käynnistää reitittimen uudelleen", cat: "MEEMIT" },
    { q: "Mikä on '404'-virhe, kun yrität avata verkkosivua?", a: ["Sivua ei löydy (Page not found)", "Palvelin on tulessa", "Väärä salasana", "Olet saanut bännit"], r: "Sivua ei löydy (Page not found)", cat: "VERKOT" }
];

// --- 2. RAKENNE & KÄYTTÖLIITTYMÄTEKSTIT ---
const forbiddenWordsArr = [
    "vittu", "perkele", "paska", "helvetti", "saatana", "kusi", "idiootti", "fuck", "shit",
    "homo", "huora", "runkkari", "homo", "huorittelema", "pelle", "paskiainen", "kulli", "pimperö"
];

const ui = {
    startBtn: "KÄYNNISTÄ PROTOKOLLA 🚀",
    gamerTag: "SINUN GAMER-TAGI:",
    scoreText: "30 pisteestä.",
    kamekTitle: "JÄIT KIINNI! 🪄✨",
    kamekFoul: "Yritit huijata tai poistua sivulta. Rangaistukseksi Kamek on nauranut ja sulkenut tietovisasi.",
    kamekReason: "Syy: ",
    reboot: "YRITÄ UUDELLEEN 🚀",
    correct: "OIKEIN!",
    wrong: "VÄÄRIN!",
    perfect: "ARVOSANA: KIITETTÄVÄ++ (30/30) – TÄYDELLISTÄ! Operaattori Psl631 lähettää ilmalaivan. Hae voittosi!",
    high: "ARVOSANA: KIITETTÄVÄ – LOISTAVAA! Olet eliittipelaaja.",
    average: "ARVOSANA: HYVÄ – HYVÄKSYTTY. Kamek nauraa panoksellesi, mutta olit silti hyvä.",
    low: "ARVOSANA: TYDYTTÄVÄ – HYVÄKSYTTY. Pääsit läpi, mutta sinun on harjoiteltava lisää.",
    fail: "ARVOSANA: HYLÄTTY. Tulos ei riittänyt loppuun asti.",
    critical: "ARVOSANA: TÄYDELLINEN EPÄONNISTUMINEN. Toad itkee.",
    batteryLow: "⚠️ [VAROITUS] VIRRANSYÖTTÖ KATKENNUT. KYTKE LATURI PARHAAN SUORITUSKYVYN TAGAAMISEKSI.",
    noInternet: "[VAROITUS] Offline: Tuloksiasi ei tallenneta pilveen, vaan ne tallennetaan paikallisesti.",
    adBlock: "[JÄRJESTELMÄ] AdBlock havaittu, kytke pois päältä parhaan suorituskyvyn saavuttamiseksi",
    nameWarning: "[JÄRJESTELMÄ] Nimesi merkittiin sopimattomaksi ja se on muutettu muotoon 'Vieras'",
    syncing: "[JÄRJESTELMÄ] SYNKRONOIDAAN PILVEN KANSSA...",
    syncComplete: "[JÄRJESTELMÄ] TIEDOT SIIRRETTY KESKUKSEEN"
};

/**
 * Navigointitoiminnot ohjenäytölle
 */
function showInstructions() {
    if (sfx.boop) playSound(sfx.boop);
    
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("instructions-screen").classList.remove("hidden");
}

function hideInstructions() {
    if (sfx.boop) playSound(sfx.boop);
    
    document.getElementById("instructions-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
}

// --- 3. MUUTTUJAT ---
let playerName = "";
let score = 0;
let currentIdx = 0;
let lives = 3;
let maxLives = 3;
let shuffledQuestions = [];
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

// --- 4. ÄÄNET & SFX ---
const sfx = {
    pling: new Audio('pling.mp3'),
    boop: new Audio('boooop.mp3'),
    kamek: new Audio('kamek.mp3'),
    denied: new Audio('denied.wav'),
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

// --- 5. JÄRJESTELMÄTOIMINNOT ---
function showToast(msg, color) {
    const toast = document.createElement("div");
    toast.style = `position:fixed; top:20px; right:20px; background:${color}; color:white; padding:15px; font-family:'VT323'; z-index:10000; border:2px solid white; box-shadow:5px 5px 0px black; pointer-events:none;`;
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 6000);
}

async function checkSystemStatus() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        document.body.innerHTML = `<div style="background:black; color:red; height:100vh; display:flex; align-items:center; justify-content:center; font-family:'Press Start 2P'; text-align:center; padding:20px;">[ JÄRJESTELMÄVIRHE ]<br><br>MOBIILILAITE EI SALLITTU</div>`;
        return;
    }

    if (!navigator.onLine) {
        showToast(ui.noInternet, "#ff0000");
    }

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
            const checkBattery = () => { if (!battery.charging) showToast(ui.batteryLow, "#ff6600"); };
            battery.addEventListener('chargingchange', checkBattery);
            checkBattery();
        });
    }
}

function sanitizeName(name) {
    let clean = name.trim();
    if (!clean || clean.toLowerCase() === "vieras") return "Vieras";
    const allowedPattern = /^[a-zA-ZåäöÅÄÖ0-9]+$/;
    if (!allowedPattern.test(clean) || forbiddenWordsArr.some(word => clean.toLowerCase().includes(word))) {
        showToast(ui.nameWarning, "red");
        return "Vieras";
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
        container.innerHTML = "<span style='color:gold; font-family:VT323;'>[ RAJATTOMAT ELÄMÄT ]</span>";
        return;
    }
    for (let i = 1; i <= maxLives; i++) {
        const heart = document.createElement("img");
        heart.style.width = "25px";
        heart.src = i <= lives ? "heart_full.png" : "heart_empty.png";
        container.appendChild(heart);
    }
}

// --- 6. PELILOGIIKKA ---
function startQuiz() {
    console.log("System: Käynnistetään...");
    
    const nameInput = document.getElementById("player-name");
    if (!nameInput) return;

    playerName = sanitizeName(nameInput.value);
    
    const startScreen = document.getElementById("start-screen");
    const loadingScreen = document.getElementById("loading-container");
    const quizScreen = document.getElementById("quiz-screen");

    if (startScreen) startScreen.classList.add("hidden");
    if (loadingScreen) loadingScreen.classList.remove("hidden");

    setTimeout(() => {
        if (loadingScreen) loadingScreen.classList.add("hidden");
        if (quizScreen) quizScreen.classList.remove("hidden");

        window.quizActive = true; 

        shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
        currentIdx = 0;
        score = 0;
        
        if (typeof updateLivesUI === "function") updateLivesUI();
        showQuestion();
    }, 1500);
}

function showQuestion() {
    const q = shuffledQuestions[currentIdx];
    questionStartTime = Date.now();
    
    document.getElementById("progress").innerText = `ASEMA 24 - PROTOKOLLA ${currentIdx + 1} / 30`;
    
    const catDisplay = document.getElementById("question-category");
    if (catDisplay) catDisplay.innerText = `[ KATEGORIA: ${q.cat || "YLEINEN"} ]`;

    document.getElementById("question-text").innerText = q.q;
    
    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";
    
    const randomizedAnswers = [...q.a].sort(() => Math.random() - 0.5);
    
    randomizedAnswers.forEach(alt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
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

    allBtns.forEach(b => b.style.pointerEvents = 'none');

    const monitor = document.querySelector('.monitor-frame');
    const beepText = document.getElementById('beep-overlay');

    if (choice === q.r) {
        score++;
        playSound(sfx.pling);
        btn.classList.add("correct-flash");
        
        setTimeout(nextQuestion, 1500);
    } else {
        playSound(sfx.boop); 

        if (monitor) monitor.classList.add('screen-damage');
        if (beepText) beepText.style.display = 'block';

        btn.classList.add("wrong-flash");

        allBtns.forEach(b => { 
            if(b.innerText.trim() === q.r) b.classList.add("correct-flash"); 
        });

        if (currentMode === 'classic') {
            lives--;
            updateLivesUI();
            if (lives <= 0) { 
                setTimeout(() => {
                    cleanupWrongAnswerEffects(monitor, beepText);
                    showGameOver();
                }, 1400);
                return;
            }
        }

        setTimeout(() => {
            cleanupWrongAnswerEffects(monitor, beepText);
            nextQuestion();
        }, 1800);
    }
}

function cleanupWrongAnswerEffects(monitor, beepText) {
    if (monitor) monitor.classList.remove('screen-damage');
    if (beepText) beepText.style.display = 'none';
}

function nextQuestion() {
    currentIdx++;
    if (currentIdx < 30 && currentIdx < shuffledQuestions.length) {
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
        <p style="font-family:VT323; font-size:1.5rem;">Järjestelmältä loppui energia (elämät).</p>
        <p style="color:yellow; font-family:VT323;">Pisteet: ${score}/30</p>
        <button onclick="location.reload()" class="menu-btn" style="margin-top:20px;">NOLLA PÄÄTE 🚀</button>
    `;
}

function triggerLifelineWarning() {
    if (sfx.denied) {
        sfx.denied.currentTime = 0;
        sfx.denied.play().catch(e => console.log("Ljud blockerat:", e));
    }
    showToast("OLJENKORTTI JO KÄYTETTY", "#ff0000");
    
    const quizScreen = document.getElementById("quiz-screen");
    if (quizScreen) {
        quizScreen.classList.add("error-shake");
        setTimeout(() => quizScreen.classList.remove("error-shake"), 500);
    }
}

// 1. 50/50
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
    showToast("50/50 AKTIVOITU", "#00ff00");
}

// 2. SKIP (Vaihda kysymys)
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

// 3. ANALYYSI (Vihje)
function useAnalysis() {
    if (!lifelines.analysis) { triggerLifelineWarning(); return; }
    
    playSound(sfx.analysis);
    const currentQ = shuffledQuestions[currentIdx];
    showToast(`ANALYYSI: VASTAUS ALKAA KIRJAIMELLA "${currentQ.r.charAt(0)}"`, "#00ccff");
    
    lifelines.analysis = false;
    const btnElement = document.getElementById("analysis-btn");
    if (btnElement) btnElement.classList.add("used");
}

// 4. REBOOT (Lisäelämä)
function useReboot() {
    if (!lifelines.reboot) { triggerLifelineWarning(); return; }
    
    if (lives >= 3) {
        showToast("JÄRJESTELMÄ JO OPTIMOITU (TÄYDET ELÄMÄT)", "#ffffff");
        return;
    }

    playSound(sfx.reboot);
    lives++;
    if (typeof updateLivesUI === "function") updateLivesUI();
    
    lifelines.reboot = false;
    const btnElement = document.getElementById("reboot-btn");
    if (btnElement) btnElement.classList.add("used");
}

// --- 8. TULOKSET & LOPETUS ---
function showResults() {
    window.quizActive = false;
    document.getElementById("quiz-screen").classList.add("hidden");
    const res = document.getElementById("result-screen");
    res.classList.remove("hidden");
    res.innerHTML = `<p style="color:cyan; font-family:'VT323';">${ui.syncing}</p><div class="fake-progress-bar"></div>`;

    setTimeout(() => {
        res.innerHTML = `
            <h2 id="result-header">ANALYYSI VALMIS</h2>
            <div id="toad-sad-container" class="hidden"><img src="sad_toad.jfif" style="width:100px; border:2px solid red;"></div>
            <p id="result-score" style="font-size:1.8rem; color:#fff;">${playerName}: ${score}/30</p>
            <p id="result-comment" style="color:yellow; font-size:1.1rem; font-family:VT323;"></p>
            <div id="advanced-stats" style="font-family:VT323; text-align:left; border-top:1px solid #333; padding-top:10px;"></div>
            <div id="leaderboard-display"></div>
            <button class="menu-btn" onclick="location.reload()" style="margin-top:20px;">UUDELLEENKÄYNNISTYS 🚀</button>
        `;
        
        const avgTime = (stats.answerTimes.reduce((a,b)=>a+b,0) / stats.answerTimes.length).toFixed(1);
        const comment = document.getElementById("result-comment");
        
        if (score === 30) { comment.innerText = ui.perfect; playSound(sfx.yay); }
        else if (score >= 23) { comment.innerText = ui.high; playSound(sfx.cash); }
        else if (score >= 14) { comment.innerText = ui.average; playSound(sfx.kamek); }
        else if (score >= 6) { comment.innerText = ui.fail; playSound(sfx.trombone); }
        else { comment.innerText = ui.critical; playSound(sfx.loser); document.getElementById("toad-sad-container").classList.remove("hidden");
        showToast("VAROITUS: MEKAANINEN LEVYVIRHE HAVAITTU", "#ff0000");}

        document.getElementById("advanced-stats").innerHTML = `
            <p>> KESKI-AIKA KYSYMYSTÄ KOHDEN: ${avgTime}s</p>
            <p>> TARKKUUS: ${Math.round((score/30)*100)}%</p>
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
   KAMEK AGGRESSIIVINEN ANTI-CHEAT PROTOKOLLA (LOCKDOWN v4.1)
   =========================================================== */

// 1. Tunnista välilehden vaihto tai ikkunan fokuksen menetys
window.addEventListener('blur', () => { 
    if (window.quizActive) {
        triggerKamekVrede("FOKUKSEN MENETYS HAVAITTU (YRIYS GOOGLATA)"); 
    }
});

// 2. Estä oikea klikkaus (estää "Tarkastele")
window.addEventListener('contextmenu', (e) => {
    if (window.quizActive) {
        e.preventDefault();
        triggerKamekVrede("OIKEA KLIKKAUS HAVAITTU (KIELLETTY TOIMINTO)");
    }
});

// --- KAMEK KOSKETUSLEVY-TUNNISTIN ---
window.addEventListener('wheel', (e) => {
    if (window.quizActive && (!Number.isInteger(e.deltaY) || (Math.abs(e.deltaY) > 0 && Math.abs(e.deltaY) < 20))) {
        triggerKamekVrede("KOSKETUSLEVY KÄYTÖSSÄ - Lopeta kannettavasi silittäminen! Käytä oikeaa hiirtä Asema 24 -protokollaan. Kamek hyväksyy vain mekaanisen tarkkuuden!");
    }
}, { passive: false });

// 3. Estä F12 ja Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
window.addEventListener('keydown', (e) => {
    if (!window.quizActive) return;

    if (e.keyCode === 123) {
        e.preventDefault();
        triggerKamekVrede("F12 HAVAITTU (MURAUSYRITYS JÄRJESTELMÄÄN)");
    }
    
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        triggerKamekVrede("KEHITTÄJÄTYÖKALUJEN OIKOPOLKU HAVAITTU");
    }

    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        triggerKamekVrede("LÄHDEKOODIN KATSELU HAVAITTU");
    }
});

// 4. Kaappaustoisuus (Kaappausnäyttö)
function triggerKamekVrede(reason) {
    window.quizActive = false;
    
    Object.values(sfx).forEach(sound => { sound.pause(); sound.currentTime = 0; });
    playSound(sfx.kamek);
    
    const styleInject = document.createElement('style');
    styleInject.innerHTML = `
        @keyframes kamek-pulse {
            0% { border-color: #ff0000; box-shadow: 0 0 20px #550000; }
            50% { border-color: #550000; box-shadow: 0 0 10px #220000; }
            100% { border-color: #ff0000; box-shadow: 0 0 20px #550000; }
        }
        .kamek-overlay {
            animation: kamek-pulse 2.5s infinite ease-in-out;
        }
    `;
    document.head.appendChild(styleInject);
    document.title = "🛑 Kamek keskeytti tietovisan";
    
    document.body.innerHTML = `
        <div class="kamek-overlay" style="background:#000; color:#ff0000; height:100vh; width:100vw; position:fixed; top:0; left:0; z-index:9999999; display:block; font-family:'Press Start 2P', cursive; text-align:center; padding:20px; border: 15px solid #ff0000; box-sizing: border-box; overflow-y: auto; -webkit-overflow-scrolling: touch;">
            
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100%; padding: 20px 0;">
                
                <h1 style="font-size:2.8rem; margin-bottom: 30px; text-shadow: 8px 8px #550000; line-height: 1.1;">${ui.kamekTitle}</h1>
                
                <div style="background: red; padding: 10px; margin-bottom: 30px; display: inline-block;">
                    <img src="kamek.jfif" style="width:220px; display:block; border:5px solid black;">
                </div>

                <p style="font-family:'VT323'; font-size:2.2rem; color:yellow; background: black; padding: 15px; border: 2px dashed yellow; margin-bottom: 20px; max-width: 90%;">
                    RIKKOMUS: ${reason}
                </p>
                
                <p style="font-family:'VT323'; color:#fff; font-size:1.4rem; margin-top: 20px; max-width: 750px; line-height: 1.3; margin-bottom: 10px;">
                    ${ui.kamekFoul}<br>Osallistumisesi Aseman 24 toimintaan on keskeytetty ja Operaattorille Psl631 on ilmoitettu.
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

// --- 6. ALUSTUS ---
window.addEventListener('load', () => {
    if (typeof checkSystemStatus === "function") {
        checkSystemStatus();
    } else {
        console.error("System check failed: Function not found.");
    }
});