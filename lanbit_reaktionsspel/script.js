/**
 * STATION 24 - REFLEX PROTOCOL
 * Universal Engine v5.0 - Kamek Elite Integrated (Multi-Language Edition)
 */

// --- TRANSLATION SYSTEM ---
const translations = {
    sv: {
        sub_header: "--- SENSORISK NERFVERIFIERING ---",
        placeholder: "Alias (Lämna tomt för Gäst)...",
        btn_how: "❓ HUR SPELAR JAG?",
        btn_start: "STARTA PROTOKOLL",
        leaderboard_title: "TOPPLISTA (MS)",
        loading: "Laddar ranking...",
        best: "⏱️ BÄSTA:",
        operator: "👤 OPERATÖR:",
        wait_signal: "VÄNTA PÅ SIGNAL...",
        now: "NU!",
        focus: "FOKUSERA...",
        play_again: "SPELA IGEN",
        back: "TILLBAKA",
        modal_title: "REDAKTIONELLA ORDER",
        rule_1: "<strong>1.</strong> Klicka på skärmen när den byter färg till grön.",
        rule_2: "<strong>2.</strong> Tjuvstart leder till omedelbar <strong>DNF</strong>.",
        rule_3: "<strong>⚠️ VARNING:</strong> Innehåller blinkande ljus och plötsliga ljud.",
        rule_4: "<strong>🔒 KAMEK:</strong> Inga styrplattor, inget fusk, inget flikbyte.",
        btn_understand: "FÖRSTÅTT",
        dnf: "🚫 TJUVSTART!",
        lock_title: "LÅST AV KAMEK",
        rating_star: "⭐ STJÄRNVINST! ⭐",
        rating_gold: "🪙 GULDMYNT! (BRA)",
        rating_avg: "🥈 GENOMSNITT",
        rating_bad: "🥉 DÅLIGT",
        rating_useless: "🐢 USEL (KAMEK SKRATTAR)",
        err_devtools: "Försöker du inspektera koden? Du är inte värdig!",
        err_right_click: "Högerklick? Försöker du inspektera mina hemligheter? I Station 24 kör vi rent spel! Nyehehehe!",
        err_pause: "Paus? En riktig operatör vilar aldrig! I min terminal finns ingen pausknapp, bara konsekvenser!",
        err_trackpad: "SLUTA SMEKA DIN LAPTOP! Kamek kräver en riktig mus.",
        err_tab: "Ingen flykt! Du försökte fuska genom att lämna terminalen.",
        err_battery: "Hämta laddaren! Terminalen dör.",
        err_ram: "Din RAM-kapacitet är ett skämt!"
    },
fi: {
        sub_header: "--- AISTI-HERMO-VARMINNUS ---",
        placeholder: "Nimimerkki (Jätä tyhjäksi Vieraalle)...",
        btn_how: "❓ KUINKA PELATAAN?",
        btn_start: "KÄYNNISTÄ PROTOKOLLA",
        leaderboard_title: "PISTETAULUKKO (MS)",
        loading: "Ladataan sijoituksia...",
        best: "⏱️ PARAS:",
        operator: "👤 OPERAATTORI:",
        wait_signal: "ODOTA MERKKIÄ...",
        now: "NYT!",
        focus: "KESKITY...",
        play_again: "PELAA UUDELLEEN",
        back: "TAKASI",
        modal_title: "TOIMITUSKOHTAISET OHJEET",
        rule_1: "<strong>1.</strong> Klikkaa näyttöä, kun se muuttuu vihreäksi.",
        rule_2: "<strong>2.</strong> Varaslähtö johtaa välittömään <strong>DNF</strong>-hylkäykseen.",
        rule_3: "<strong>⚠️ VAROITUS:</strong> Sisältää vilkkuvia valoja ja äkillisiä ääniä.",
        rule_4: "<strong>🔒 KAMEK:</strong> Ei kosketuslevyjä, ei huijausta, ei välilehden vaihtoa.",
        btn_understand: "YMMÄRRÄN",
        dnf: "🚫 VARASLÄHTÖ!",
        lock_title: "KAMEKIN LUKITSEMA",
        rating_star: "⭐ TÄHTIVOITTO! ⭐",
        rating_gold: "🪙 KULTA-KOLIKKO! (HYVÄ)",
        rating_avg: "🥈 KESKIVERTO",
        rating_bad: "🥉 HUONO",
        rating_useless: "🐢 SURKEA (KAMEK NAURAA)",
        err_devtools: "Yritätkö tarkastella koodia? Et ole sen arvoinen!",
        err_right_click: "Oikea klikkaus? Yritätkö urkkia salaisuuksiani? Station 24:ssä pelataan rehellisesti! Nyehehehe!",
        err_pause: "Tauko? Oikea operaattori ei lepää koskaan! Päätteessäni ei ole taukonäppäintä, vain seurauksia!",
        err_trackpad: "LOPETA LÄPPÄRIN SILITTELY! Kamek vaatii oikean hiiren.",
        err_tab: "Ei pakotietä! Yritit huijata poistumalla päätteestä.",
        err_battery: "Hae laturi! Pääte kuolee.",
        err_ram: "RAM-kapasiteettisi on vitsi!"
    },
    en: {
        sub_header: "--- SENSORY NERVE VERIFICATION ---",
        placeholder: "Alias (Leave empty for Guest)...",
        btn_how: "❓ HOW DO I PLAY?",
        btn_start: "START PROTOCOL",
        leaderboard_title: "LEADERBOARD (MS)",
        loading: "Loading ranking...",
        best: "⏱️ BEST:",
        operator: "👤 OPERATOR:",
        wait_signal: "WAIT FOR SIGNAL...",
        now: "NOW!",
        focus: "FOCUS...",
        play_again: "PLAY AGAIN",
        back: "BACK",
        modal_title: "EDITORIAL ORDERS",
        rule_1: "<strong>1.</strong> Click the screen when it changes color to green.",
        rule_2: "<strong>2.</strong> Early start leads to an immediate <strong>DNF</strong>.",
        rule_3: "<strong>⚠️ WARNING:</strong> Contains flashing lights and sudden sounds.",
        rule_4: "<strong>🔒 KAMEK:</strong> No trackpads, no cheating, no tab-switching.",
        btn_understand: "UNDERSTOOD",
        dnf: "🚫 FALSE START!",
        lock_title: "LOCKED BY KAMEK",
        rating_star: "⭐ STAR VICTORY! ⭐",
        rating_gold: "🪙 GOLD COIN! (GOOD)",
        rating_avg: "🥈 AVERAGE",
        rating_bad: "🥉 BAD",
        rating_useless: "🐢 USELESS (KAMEK LAUGHS)",
        err_devtools: "Are you trying to inspect the code? You are not worthy!",
        err_right_click: "Right click? Trying to inspect my secrets? In Station 24 we play fair! Nyehehehe!",
        err_pause: "Pause? A real operator never rests! In my terminal there is no pause button, only consequences!",
        err_trackpad: "STOP STROKING YOUR LAPTOP! Kamek demands a real mouse.",
        err_tab: "No escape! You tried to cheat by leaving the terminal.",
        err_battery: "Get the charger! The terminal is dying.",
        err_ram: "Your RAM capacity is a joke!"
    },
    da: {
        sub_header: "--- SENSORISK NERVEVERIFICERING ---",
        placeholder: "Alias (Efterlad tom for Gæst)...",
        btn_how: "❓ HVORDAN SPILLER JEG?",
        btn_start: "START PROTOKOL",
        leaderboard_title: "TOPLISTE (MS)",
        loading: "Indlæser ranking...",
        best: "⏱️ BEDSTE:",
        operator: "👤 OPERATØR:",
        wait_signal: "VENT PÅ SIGNAL...",
        now: "NU!",
        focus: "FOKUSER...",
        play_again: "SPIL IGEN",
        back: "TILBAGE",
        modal_title: "REDAKTIONELLE ORDRE",
        rule_1: "<strong>1.</strong> Klik på skærmen, når den skifter farve til grøn.",
        rule_2: "<strong>2.</strong> Tyvstart fører til øjeblikkelig <strong>DNF</strong>.",
        rule_3: "<strong>⚠️ ADVARSEL:</strong> Indeholder blinkende lys og pludselige lyde.",
        rule_4: "<strong>🔒 KAMEK:</strong> Ingen pegefelter, intet snyd, intet skift af fane.",
        btn_understand: "FORSTÅET",
        dnf: "🚫 TYVSTART!",
        lock_title: "LÅST AF KAMEK",
        rating_star: "⭐ STJERNEGEVINST! ⭐",
        rating_gold: "🪙 GULDMØNT! (GOD)",
        rating_avg: "🥈 GENNEMSNIT",
        rating_bad: "🥉 DÅRLIGT",
        rating_useless: "🐢 ELENDIG (KAMEK GRINER)",
        err_devtools: "Forsøger du at inspicere koden? Du er ikke værdig!",
        err_right_click: "Højreklik? Forsøger du at inspicere mine hemmeligheder? I Station 24 spiller vi rent! Nyehehehe!",
        err_pause: "Pause? En rigtig operatør hviler aldrig! I min terminal er der ingen pauseknap, kun konsekvenser!",
        err_trackpad: "STOP MED AT AE DIN BÆRBARE! Kamek kræver en rigtig mus.",
        err_tab: "Ingen flugt! Du forsøgte at snyde ved at forlade terminalen.",
        err_battery: "Hent opladeren! Terminalen dør.",
        err_ram: "Din RAM-kapacitet er en joke!"
    },
    no: {
        sub_header: "--- SENSORISK NERVEVERIFISERING ---",
        placeholder: "Alias (La stå tom for Gjest)...",
        btn_how: "❓ HVORDAN SPILLER JEG?",
        btn_start: "START PROTOKOLL",
        leaderboard_title: "TOPPLISTE (MS)",
        loading: "Lader ranking...",
        best: "⏱️ BESTE:",
        operator: "👤 OPERATØR:",
        wait_signal: "VENT PÅ SIGNAL...",
        now: "NÅ!",
        focus: "FOKUSER...",
        play_again: "SPILL IGJEN",
        back: "TILBAKE",
        modal_title: "REDAKTIONELLE ORDRE",
        rule_1: "<strong>1.</strong> Klikk på skjermen når den bytter farge til grønn.",
        rule_2: "<strong>2.</strong> Tjuvstart fører til umiddelbar <strong>DNF</strong>.",
        rule_3: "<strong>⚠️ ADVARSEL:</strong> Inneholder blinkende lys og plutselige lyder.",
        rule_4: "<strong>🔒 KAMEK:</strong> Ingen styreflater, ingen juks, ingen fanebytte.",
        btn_understand: "FORSTÅTT",
        dnf: "🚫 TJUVSTART!",
        lock_title: "LÅST AV KAMEK",
        rating_star: "⭐ STJERNEGEVINST! ⭐",
        rating_gold: "🪙 GULDMYNT! (BRA)",
        rating_avg: "🥈 GJENNOMSNITT",
        rating_bad: "🥉 DÅRLIGT",
        rating_useless: "🐢 ELENDIG (KAMEK LER)",
        err_devtools: "Forsøker du å inspisere koden? Du er ikke verdig!",
        err_right_click: "Høyreklikk? Forsøker du å inspisere mine hemmeligheter? I Station 24 spiller vi rent! Nyehehehe!",
        err_pause: "Pause? En riktig operatør hviler aldri! I min terminal er det ingen pauseknapp, bare konsekvenser!",
        err_trackpad: "SLUTT Å STRYKE LAPTOPPEN DIN! Kamek krever en ekte mus.",
        err_tab: "Ingen flukt! Du forsøkte å jukse ved å forlate terminalen.",
        err_battery: "Hent laderen! Terminalen dør.",
        err_ram: "Din RAM-kapasitet er en vits!"
    }
};

let currentLang = localStorage.getItem('s24_reflex_lang') || 'sv';

function t(key) {
    return translations[currentLang]?.[key] || translations['en']?.[key] || key;
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('s24_reflex_lang', lang);
        updateUIElements();
    }
}

function updateUIElements() {
    // Startskärm
    document.getElementById('lbl-sub-header').innerText = t('sub_header');
    document.getElementById('playerName').placeholder = t('placeholder');
    document.getElementById('btn-how-play').innerText = t('btn_how');
    document.getElementById('startButton').innerText = t('btn_start');
    document.getElementById('lbl-leaderboard').innerText = t('leaderboard_title');
    
    // Spelskärm HUD
    document.getElementById('lbl-best').innerHTML = `${t('best')} <span id="best-ms">${bestScore === Infinity ? '---' : bestScore}</span> ms`;
    document.getElementById('lbl-operator').innerHTML = `${t('operator')} <span id="current-op">${currentPlayer}</span>`;
    
    // Status & Knappar
    if (!flashActive && waitingForFlash) {
        document.getElementById('status-text').innerText = t('wait_signal');
    }
    document.getElementById('btn-again').innerText = t('play_again');
    document.getElementById('btn-back').innerText = t('back');
    
    // Info Modal
    document.getElementById('lbl-modal-title').innerText = t('modal_title');
    document.getElementById('lbl-rule-1').innerHTML = t('rule_1');
    document.getElementById('lbl-rule-2').innerHTML = t('rule_2');
    document.getElementById('lbl-rule-3').innerHTML = t('rule_3');
    document.getElementById('lbl-rule-4').innerHTML = t('rule_4');
    document.getElementById('btn-understand').innerText = t('btn_understand');
    
    // Uppdatera flaggornas aktiva utseende
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(currentLang));
    });

    updateLeaderboardUI();
}

// --- GLOBAL STATE ---
var gameActive = false, waitingForFlash = false, flashActive = false;
var startTime, timeoutId, currentPlayer = "Gäst";
var bestScore = Infinity;

// LJUD
const sndKamek = new Audio('kamek.mp3');
const sndTuta = new Audio('tuta.mp3');
const sndYay = new Audio('yay.mp3');
const sndLoss = new Audio('sad_trombone.mp3');
const sndBoooop = new Audio('boooop.mp3');

// --- 1. SÄKERHETSKONTROLL (KAMEK VAKT) ---
window.onkeydown = (e) => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        kamekLockdown("DEVTOOLS_INTRUSION", t('err_devtools'));
    }
};

window.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
    if (gameActive) {
        kamekLockdown("RIGHT_CLICK_PROHIBITED", t('err_right_click'));
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && gameActive) {
        kamekLockdown("PAUSE_ATTEMPT_DETECTED", t('err_pause'));
    }
});

window.addEventListener('wheel', e => {
    const isTrackpad = !Number.isInteger(e.deltaY) || (Math.abs(e.deltaY) > 0 && Math.abs(e.deltaY) < 20);
    if (isTrackpad && gameActive) {
        kamekLockdown("TRACKPAD_DETECTION", t('err_trackpad'));
    }
}, { passive: false });

document.addEventListener('visibilitychange', () => { 
    if(document.hidden && gameActive) kamekLockdown("TAB_SWITCH", t('err_tab')); 
});

// --- 2. HARDWARE VAKTER ---
if (navigator.getBattery) {
    navigator.getBattery().then(b => {
        b.onlevelchange = () => { if(!b.charging && b.level < 0.15 && gameActive) kamekLockdown("BATTERY_LOW", t('err_battery')); };
    });
}

function monitorMemory() {
    if (performance.memory && gameActive) {
        if (performance.memory.usedJSHeapSize > performance.memory.jsHeapSizeLimit * 0.9) {
            kamekLockdown("MEMORY_OVERFLOW", t('err_ram'));
        }
    }
}
setInterval(monitorMemory, 5000);

// --- 3. SPELFLÖDE ---
function openInfo() { document.getElementById('info-modal').style.display = 'flex'; }
function closeInfo() { document.getElementById('info-modal').style.display = 'none'; }

function beginProtocol() {
    let name = document.getElementById('playerName').value.trim();
    currentPlayer = name === "" ? (currentLang === 'en' ? "Guest" : currentLang === 'fi' ? "Vieras" : "Gäst") : name;
    
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    gameActive = true;
    updateUIElements();
    resetTest();
}

function triggerFlash() {
    waitingForFlash = false;
    flashActive = true;
    document.getElementById('flash-area').classList.add('flash-ready');
    document.getElementById('status-text').innerText = t('now');
    startTime = performance.now();
}

function handleInput() {
    if (!gameActive) return;

    if (waitingForFlash) {
        clearTimeout(timeoutId);
        sndBoooop.play().catch(() => {});
        showResult("DNF", t('dnf'), "rating-useless");
    } 
    else if (flashActive) {
        let endTime = performance.now();
        let reactionTime = Math.round(endTime - startTime);
        flashActive = false;
        
        let ratingText = "";
        let ratingClass = "";

        if (reactionTime < 180) {
            ratingText = t('rating_star');
            ratingClass = "rating-star";
            sndYay.play();
        } else if (reactionTime < 250) {
            ratingText = t('rating_gold');
            ratingClass = "rating-gold";
            sndYay.play();
        } else if (reactionTime < 400) {
            ratingText = t('rating_avg');
            ratingClass = "rating-avg";
        } else if (reactionTime < 700) {
            ratingText = t('rating_bad');
            ratingClass = "rating-bad";
        } else {
            ratingText = t('rating_useless');
            ratingClass = "rating-useless";
            sndLoss.play();
        }

        if (reactionTime < bestScore) {
            bestScore = reactionTime;
            saveScore(currentPlayer, bestScore);
        }

        showResult(reactionTime + " MS", ratingText, ratingClass);
    }
}

function showResult(ms, text, cssClass) {
    document.getElementById('flash-area').style.display = 'none';
    
    const resultArea = document.getElementById('result-area');
    const resMs = document.getElementById('reflex-result');
    const resRate = document.getElementById('rating-display');
    
    resultArea.style.display = 'block';
    resMs.innerText = ms;
    resMs.className = cssClass;
    resRate.innerText = text;
    resRate.className = cssClass;
}

function resetTest() {
    document.getElementById('result-area').style.display = 'none';
    document.getElementById('flash-area').style.display = 'flex';
    document.getElementById('flash-area').classList.remove('flash-ready');
    
    waitingForFlash = true;
    flashActive = false;
    document.getElementById('status-text').innerText = t('focus');
    document.getElementById('status-text').style.color = "#333";
    
    let delay = Math.random() * 4000 + 2000;
    timeoutId = setTimeout(triggerFlash, delay);
}

function goBack() {
    clearTimeout(timeoutId);
    gameActive = false;
    
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'flex';
    
    updateLeaderboardUI();
}

// --- 4. TOPPLISTA ---
function saveScore(name, ms) {
    let lb = JSON.parse(localStorage.getItem('s24_reflex_lb')) || [];
    lb.push({ name: name, score: ms });
    lb.sort((a, b) => a.score - b.score);
    localStorage.setItem('s24_reflex_lb', JSON.stringify(lb.slice(0, 10)));
    updateLeaderboardUI();
}

function updateLeaderboardUI() {
    const lb = JSON.parse(localStorage.getItem('s24_reflex_lb')) || [];
    const content = document.getElementById('leaderboard-content');
    if (lb.length > 0) {
        content.innerHTML = lb.map((e, i) => `<div style="display:flex; justify-content:space-between; border-bottom:1px solid #333; padding:5px;">
            <span>#${i+1} ${e.name}</span>
            <span style="color:#00ffcc">${e.score} ms</span>
        </div>`).join("");
    } else {
        content.innerText = t('loading');
    }
}

function kamekLockdown(code, msg) {
    gameActive = false;
    clearTimeout(timeoutId);
    try { sndKamek.play(); } catch(e){}
    document.body.innerHTML = `
        <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#1a0033;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;text-align:center;border:15px double #8200ff;box-sizing:border-box;z-index:99999;">
            <img src="kamek.jfif" style="width:150px;border:5px solid #ffcc00;border-radius:50%;" onerror="this.src='https://via.placeholder.com/150?text=KAMEK'">
            <h1 style="font-family:'Luckiest Guy', sans-serif;color:#ffcc00;font-size:60px;margin:20px;">${t('lock_title')}</h1>
            <p style="font-size:30px;font-style:italic;">"${msg}"</p>
            <p style="color:#8200ff;font-family:monospace;font-weight:bold;margin-top:40px;">ERROR: ${code}</p>
            <button onclick="location.reload()" style="margin-top:30px;padding:15px 40px;background:#ffcc00;color:black;font-family:'Luckiest Guy', sans-serif;font-size:24px;border-radius:10px;cursor:pointer;border:none;">REBOOT</button>
        </div>`;
}

window.addEventListener('keydown', (e) => {
    if (e.code === "Space") handleInput();
});

// Init vid laddning
document.addEventListener('DOMContentLoaded', () => {
    updateUIElements();
});