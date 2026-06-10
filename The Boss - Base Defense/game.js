// --- LJUD-ASSETS ---
const sndGlass = new Audio('glass_break.mp3'); 
const sndPlat = new Audio('plat.mp3'); 
const sndPang = new Audio('pang.mp3');
const sndKamek = new Audio('kamek.mp3'); // Spelas vid lockdown[cite: 8]
const sndPling = new Audio('pling.mp3');
const sndBoop = new Audio('boooop.mp3'); 
const sndHurt = new Audio('hurt.mp3'); // Eller ta bort raden i shoot-funktionen
const sndClick = new Audio('click.mp3'); // Se till att filen heter click.mp3
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// --- TILLSTÅND ---
let score = 0; let lives = 3; let wave = 1;
let strobeActive = false;
let spawnedThisWave = 0;
let enemiesPerWave = 10;
let isTransitioning = false; // Hindrar fiender från att spawna under paus mellan vågor
let gameState = 'START';
let enemies = [];
// --- NYA VARIABLER ---
// --- UPPDATERADE VARIABLER ---
let ammoInMag = 10;    // Skott i nuvarande magasin
let magSize = 10;      // Hur många skott ett magasin rymmer
let emergencyAmmoBoxes = 3; // Spelaren startar med 3 nödlådor
let ammoReserve = 40;  // Total reserv (startar med 50 totalt)
let isReloading = false;
let isSlowMo = false;
const imgSlowMo = new Image(); imgSlowMo.src = 'slomo.jfif'; // Lägg till en klock-ikon eller liknande
let isInvincible = false;
let doublePoints = false;
let rainbowTimer = 0;

let p1 = { x: canvas.width/2, y: canvas.height/2, color: 'lime' };
let p2 = { x: canvas.width/2, y: canvas.height/2, color: 'cyan', active: false };

// --- BILD-ASSETS ---
const imgWeight = new Image(); imgWeight.src = 'weight.png';
const imgBomb = new Image(); imgBomb.src = 'bomb.png';
const imgStar = new Image(); imgStar.src = 'star.jpg';
const imgHeartFull = new Image(); imgHeartFull.src = 'heart_full.png';
const imgHeartEmpty = new Image(); imgHeartEmpty.src = 'heart_empty.png';
const imgP1 = new Image(); imgP1.src = 'pansar_hel.png';
const imgP2 = new Image(); imgP2.src = 'pansar_trasig.png';
const imgP3 = new Image(); imgP3.src = 'pansar_mycket_trasig.png';

// --- HJÄLPFUNKTIONER ---
function showToast(text, color) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const t = document.createElement('div');
    t.className = 'toast'; 
    t.style.borderColor = color; 
    t.innerText = text;

    container.appendChild(t);

    // Ta bort toasten efter 3 sekunder med en snygg utfasning
    setTimeout(() => {
        t.classList.add('fade-out');
        setTimeout(() => t.remove(), 500); // Vänta på att animationen ska bli klar
    }, 3000);
}

// --- RADIO CONFIGURATION ---
const eurodancePlaylist = [
    'music/you_spin_me_round.mp3',
    'music/cotton_eye_joe.mp3',
    'music/rhythm_is_a_dancer.mp3',
    'music/ma_baker.mp3',
    'music/what_is_love.mp3',
    'music/blue.mp3',
    'music/be_my_lover.mp3'
];
let isMusicMuted = false;
let backgroundMusic = null;
const isStreamMode = new URLSearchParams(window.location.search).get('stream') === 'true';

/**
 * Denna funktion hanterar själva växlingen
 */
const toggleMusic = (e) => {
    if (e) e.stopPropagation(); // Stoppa klicket från att starta spelet

    if (isStreamMode) return;

    isMusicMuted = !isMusicMuted;
    const container = document.getElementById('radio-container');

    if (isMusicMuted) {
        if (backgroundMusic) backgroundMusic.pause();
        container.classList.add('radio-muted');
        showToast("🔈 RADIO OFF", "#888");
    } else {
        container.classList.remove('radio-muted');
        showToast("🔊 EURODANCE ON", "#00ffcc");
        
        // Om musiken finns, spela. Om inte, starta den (första gången man klickar)
        if (backgroundMusic) {
            backgroundMusic.play().catch(() => console.log("User interaction needed"));
        } else {
            startStationRadio(); 
        }
    }
};

/**
 * Startar radion - Måste anropas i startGame()
 */
const startStationRadio = () => {
    if (backgroundMusic || isStreamMode) return;

    const track = eurodancePlaylist[Math.floor(Math.random() * eurodancePlaylist.length)];
    backgroundMusic = new Audio(track);
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;

    // Spela bara om användaren INTE har klickat på mute i menyn
    if (!isMusicMuted) {
        backgroundMusic.play().catch(e => console.error("Autoplay blocked"));
        showToast(`🎵 NOW PLAYING: EURODANCE`, "#00ffcc");
    }
};

// --- INPUT-LYSSNARE ---

// 1. Tangentbord (M-knappen)
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm') {
        toggleMusic();
    }
});

// 2. Handkontroll (Vänster analogspak-klick = Button 10)
// Denna del bör ligga i din game-loop (update-funktion)
const handleGamepadInput = () => {
    const gp = navigator.getGamepads()[0];
    if (!gp) return;

    // Button 10 är oftast klicket på vänster spak (L3)
    if (gp.buttons[10].pressed) {
        if (!gp.l3Pressed) { // Förhindra att den "fladdrar" on/off
            toggleMusic();
            gp.l3Pressed = true;
        }
    } else {
        gp.l3Pressed = false;
    }
};

// --- SPECIFIKA VARNINGS-TOASTS ---

// 1. Batteristatus (Ansluter till webbläsarens Battery API)
if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
        const checkBattery = () => {
            if (!battery.charging) {
                showToast("⚠️ Låg batterinivå! Anslut laddare för optimal prestanda.", "#ff4444");
            }
        };
        battery.addEventListener('levelchange', checkBattery);
        checkBattery();
    });
}

// 2. Kontrollstöd (NES-kontroll / Okänd kontroll)
window.addEventListener("gamepadconnected", (e) => {
    // Om kontrollen har för få knappar eller axlar (t.ex. en gammal NES-adapter)
    if (e.gamepad.buttons.length < 4) {
        showToast("⚠️ Denna kontroll stödjs ej fullt ut (för få knappar).", "#ffaa00");
    } else {
        showToast("🎮 Handkontroll ansluten!", "#00ff00");
    }
});

// 3. Adblock Detektering (Enkel kontroll)
async function checkAdBlock() {
    try {
        const response = await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { method: 'HEAD', mode: 'no-cors' });
    } catch (e) {
        showToast("🚫 Adblock detekterat! Vissa funktioner kan begränsas.", "#ff0000");
    }
}
checkAdBlock();

// 4. Online/Offline status
window.addEventListener('offline', () => {
    showToast("📶 Offline - kan ej synka med molnet", "#ffaa00");
});
window.addEventListener('online', () => {
    showToast("✅ Online - synk återupptagen", "#00ff00");
});

// 5. Cookies blockerade
if (!navigator.cookieEnabled) {
    showToast("🍪 Cookies är blockerade! Poäng kan inte sparas.", "#ff4444");
}

// --- AVANCERADE VARNINGSSYSTEM ---

// 1. Detektering av Prestanda-drop (FPS-vakt)
let lastTime = performance.now();
let frameCount = 0;
let perfWarningActive = false;

function monitorPerformance() {
    frameCount++;
    let currentTime = performance.now();
    
    if (currentTime > lastTime + 1000) { // Varje sekund
        let fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Om FPS droppar under 30 (standard är 60)
        if (fps < 30 && !perfWarningActive && gameState === 'PLAYING') {
            showToast("⚠️ Prestanda-drop detekterat! Stäng andra flikar.", "#ffaa00");
            perfWarningActive = true; 
            setTimeout(() => perfWarningActive = false, 30000); // Varnar max var 30:e sek
        }
        
        frameCount = 0;
        lastTime = currentTime;
    }
    if (gameState !== 'LOCKDOWN') requestAnimationFrame(monitorPerformance);
}
monitorPerformance();

// 2. Kontroll av Sparningsfunktion (LocalStorage)
function checkSaveCapability() {
    try {
        localStorage.setItem('test', '1');
        localStorage.removeItem('test');
    } catch (e) {
        showToast("❌ Kan inte spara poäng! Webbläsarlagring är full eller låst.", "#ff0000");
    }
}
checkSaveCapability();

// 3. WebGL / Grafikstöd-kontroll
if (!window.WebGLRenderingContext) {
    showToast("⚠️ Din enhet saknar WebGL-stöd. Grafiken kan lagga.", "#ffaa00");
}

// 4. Långsam nätverksanslutning (Network Information API)
if (navigator.connection) {
    const connection = navigator.connection;
    const checkConnection = () => {
        if (connection.saveData) {
            showToast("📉 Datasparkontroll aktiv - laddning kan ta längre tid.", "#ffaa00");
        }
        if (connection.effectiveType === '2g' || connection.effectiveType === '3g') {
            showToast("📶 Långsam anslutning - synk med molnet kan misslyckas.", "#ffaa00");
        }
    };
    connection.addEventListener('change', checkConnection);
    checkConnection();
}

// 5. Inaktivitetsvarning (AFK)
let afkTimer;
function resetAfkTimer() {
    clearTimeout(afkTimer);
    if (gameState === 'PLAYING') {
        afkTimer = setTimeout(() => {
            showToast("💤 Hallå? Är du kvar? Spelet pausades nästan...", "#ffcc00");
        }, 60000); // 1 minut inaktivitet
    }
}
window.addEventListener('mousemove', resetAfkTimer);
window.addEventListener('keydown', resetAfkTimer);

// UPPDATERAD: Spelar kamek.mp3 när lockdown aktiveras[cite: 8]
function triggerLockdown(reason) {
    if (gameState !== 'LOCKDOWN') {
        sndKamek.currentTime = 0;
        sndKamek.play().catch(()=>{}); 
    }
    gameState = 'LOCKDOWN';
    const overlay = document.getElementById('lockdown-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        const pTag = overlay.querySelector('p');
        if (pTag) pTag.innerText = reason;
        document.body.style.overflow = 'auto'; 
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (gameState === 'START') {
        p1.x = canvas.width / 2;
        p1.y = canvas.height / 2;
    }
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// --- KAMEK ANTI-CHEAT ---
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    triggerLockdown(t('right_click_forbidden'));
});

let aimPath = [];

function checkJitter(newX, newY) {
    aimPath.push({x: newX, y: newY});
    if (aimPath.length > 10) aimPath.shift();

    if (aimPath.length === 10) {
        // Räkna ut om rörelsen är för perfekt
        let totalDeviation = 0;
        // ... (matematik som kollar avvikelse från en rät linje)
        if (totalDeviation === 0) {
            triggerKamekLockdown(t('aimbotuser'));
        }
    }
}

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        triggerLockdown(t('escape_locked'));
    }
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        triggerLockdown(t('devtools_forbidden'));
    }
});

window.onblur = function() {
    if (gameState === 'PLAYING') {
        triggerLockdown(t('lost_focus'));
    }
};

document.addEventListener('visibilitychange', () => {
    if (document.hidden && gameState === 'PLAYING') {
        triggerLockdown(t('tab_switch_detected'));
    }
});

// --- ANTI-MACRO & TURBO SENSOR V3 ---
var clickHistory = [];
var lastClickTimestamp = 0;

window.addEventListener('mousedown', function(e) {
    if (gameState !== 'PLAYING') return;

    var now = Date.now();
    var delta = now - lastClickTimestamp;
    lastClickTimestamp = now;

    // Spara de senaste 15 intervallen för analys
    clickHistory.push(delta);
    if (clickHistory.length > 15) clickHistory.shift();

    // 1. TURBO-KONTROLL (Hastighet)
    // Om spelaren klickar snabbare än 60ms (ca 16 klick/sekund) upprepade gånger
    if (delta < 60) {
        triggerLockdown(t('turbo_detected'));
        return;
    }

    // 2. MAKRO-KONTROLL (Precision i timing)
    // Människor kan inte klicka med exakt samma millisekunds-mellanrum 10 gånger i rad.
    if (clickHistory.length >= 10) {
        var isBot = true;
        var firstInterval = clickHistory[0];
        
        for (var i = 1; i < clickHistory.length; i++) {
            // Om intervallen skiljer sig med mindre än 1ms är det ett makro
            if (Math.abs(clickHistory[i] - firstInterval) > 1) {
                isBot = false;
                break;
            }
        }

        if (isBot) {
            triggerLockdown(t('macro_detected'));
        }
    }
});

// --- INPUT ---
window.addEventListener('mousemove', (e) => { 
    if (gameState === 'PLAYING') { p1.x = e.clientX; p1.y = e.clientY; } 
});

window.addEventListener('mousedown', () => {
    if (gameState === 'PLAYING') {
        shoot(p1);
    } else if (gameState === 'GAMEOVER') {
        location.reload();
    }
});

// --- SPEL-LOGIK ---
let currentPlayerName = "Gäst";

// --- STARTA SPELET ---
function startGame() {
    // Aktivera fullskärm på hela dokumentet eller canvas-elementet
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else if (docElm.mozRequestFullScreen) { /* Firefox */
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) { /* IE/Edge */
        docElm.msRequestFullscreen();
    }

    // Hämta namn från fältet, om tomt sätt till "Gäst"
    const nameInput = document.getElementById('playerName');
    currentPlayerName = nameInput.value.trim() || "Gäst";

    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'none';

    gameState = 'PLAYING';
    score = 0; lives = 3; wave = 1; enemies = []; spawnedThisWave = 0;
    
    // Säkerställ att UI existerar innan uppdatering
    const scoreEl = document.getElementById('score');
    if (scoreEl) scoreEl.innerText = score;
    
    // Nollställ ammunition
    ammoInMag = magSize;
    ammoReserve = 40;
    updateAmmoUI();

startStationRadio(); // Startar musiken i samband med klicket
    
    console.log("Mission Started - Eurodance incoming!");
    
    spawnEnemy();
    showToast(`LYCKA TILL, ${currentPlayerName.toUpperCase()}!`, "lime");
}
// --- SPARA TILL LEADERBOARD ---
function saveHighScore(name, newScore) {
    let scores = JSON.parse(localStorage.getItem('baseDefenseHighScores')) || [];
    
    // Spara både namn och poäng som ett objekt
    scores.push({ name: name, score: newScore });
    
    // Sortera högst poäng först och behåll topp 5
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 5);
    
    localStorage.setItem('baseDefenseHighScores', JSON.stringify(scores));
    updateLeaderboardUI();
}

function updateLeaderboardUI() {
    const body = document.getElementById('leaderboard-body');
    if (!body) return;
    
    const scores = JSON.parse(localStorage.getItem('baseDefenseHighScores')) || [];
    body.innerHTML = ""; 

    if (scores.length === 0) {
        body.innerHTML = "<tr><td colspan='3'>INGA POÄNG ÄN!</td></tr>";
        return;
    }

    scores.forEach((s, index) => {
        const row = `<tr>
            <td>#${index + 1}</td>
            <td>${s.name}</td>
            <td>${s.score}</td>
        </tr>`;
        body.innerHTML += row;
    });
}

function spawnEnemy() {
    // 1. Grundläggande säkerhetskontroller
    if (gameState !== 'PLAYING' || isTransitioning) return;

    // 2. Kontrollera om vågen är slut
    if (spawnedThisWave >= enemiesPerWave) {
        if (enemies.length === 0) {
            nextWave();
        } else {
            setTimeout(spawnEnemy, 1000);
        }
        return;
    }

    const r = Math.random();
    let type = 'weight';
    let hp = 1;
    
    // --- HASTIGHET (EXTRA LÅNGSAM START) ---
    // Startar på 0.8. Ökar med 0.2 per våg.
    let speed = 0.8 + (wave * 0.2); 

    // --- LOGIK FÖR TYPER ---
    
    // Power-ups (Hjärtan, Ammo, Slowmo)
    if (r < 0.05) { 
        type = 'life'; 
        speed *= 1.2; 
    } else if (r < 0.15) { 
        type = 'ammo_box'; 
        speed *= 0.9; 
    } else if (r < 0.20) {
        type = 'slowmo';
    }
    
    // Stjärna (Nu med star.png) och 2X-poäng (Från Wave 5)[cite: 1]
    else if (wave >= 5 && r < 0.28) {
        if (r < 0.24) {
            type = 'star'; // Kom ihåg att lägga till imgStar.src = 'star.png' i assets!
            speed *= 1.5;
        } else {
            type = '2x';
        }
    }
    
    // --- NUKE LOGIK (BLIR VANLIGARE JU HÖGRE WAVE) ---
    // Risken för en Nuke ökar med 2% för varje våg efter Wave 5[cite: 1].
    else if (wave >= 5 && r > (0.98 - (wave * 0.02))) {
        type = 'nuke';
        speed = 1.0; // Nukes faller nu ännu långsammare för att vara lömska
    }
    
    // Wave 7+ Logik: Vikter ersätts ibland med Bomber[cite: 1]
    else if (wave >= 7 && r < 0.45) {
        type = 'bomb';
        speed *= 1.4;
    }
    
    // Pansarvikt (Från Wave 3)[cite: 1]
    else if (wave >= 3 && r < 0.60) {
        type = 'armored';
        hp = 3;
        speed *= 0.6;
    }
    
    // Standardvikt[cite: 1]
    else if (r < 0.40) {
        type = 'bomb'; 
        speed *= 1.5;
    }

    enemies.push({ 
        x: Math.random() * (canvas.width - 60), 
        y: -60, 
        size: 60, 
        type, 
        hp, 
        speed 
    });

    spawnedThisWave++;

    // --- SPAWN INTERVAL (LUGNARE) ---
    // Startar på 2.5 sekunder. Blir snabbare per våg[cite: 1].
    let spawnDelay = Math.max(500, 2500 - (wave * 150));
    setTimeout(spawnEnemy, spawnDelay);
}
function shoot(p) {
    if (isReloading) {
        if (sndClick) sndClick.play().catch(()=>{});
        return; 
    }
    if (ammoInMag <= 0) {
        if (sndClick) sndClick.play().catch(()=>{});
        return; 
    }

    ammoInMag--;
    if (sndPang) {
        sndPang.currentTime = 0;
        sndPang.play().catch(()=>{}); 
    }

    enemies.forEach((en, i) => {
        if (p.x > en.x && p.x < en.x + en.size && p.y > en.y && p.y < en.y + en.size) {
            
            // 1. STJÄRNA (Odödlighet & Regnbåge)
            if (en.type === 'star') {
                activateInvincibility(); // Denna funktion sätter isInvincible = true
                enemies.splice(i, 1);
            } 
            // 2. 2X (Dubbla poäng)
            else if (en.type === '2x') {
                activateDoublePoints(); // Denna funktion sätter doublePoints = true
                enemies.splice(i, 1);
            }
            // 3. NUKE (Omedelbar förlust)[cite: 1]
            else if (en.type === 'nuke') {
    // 1. Stoppa allt skjutande och rörelse
    gameState = 'GAMEOVER_ANIMATION'; 

    // 2. Spela explosionsljud
    const sndExplosion = new Audio('explosion.mp3'); // Se till att filen finns
    sndExplosion.play().catch(()=>{});

    // 3. Trigga visuell explosionseffekt (Skärmen skakar/blinkar vitt)
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 4. Vänta kort, spela sedan Kameks skratt och visa meddelande
    setTimeout(() => {
        if (sndKamek) {
            sndKamek.currentTime = 0;
            sndKamek.play().catch(()=>{});
        }
        triggerLockdown("☢️ NUKE DETONERAD! \n Kamek skrattar åt din aska: 'NYEHEHEHE!'");
        
        // 5. Avsluta spelet efter skrattet
        setTimeout(() => endGame(), 3000);
    }, 500);
    
    enemies.splice(i, 1);
    return; // Avbryt loopen direkt
}
            // 4. HJÄRTA[cite: 1]
            else if (en.type === 'life') {
                if (sndPling) sndPling.play().catch(()=>{});
                if (lives < 3) lives++;
                enemies.splice(i, 1);
            } 
            // 5. SLOW-MO[cite: 1]
            else if (en.type === 'slowmo') {
                activateSlowMo();
                enemies.splice(i, 1);
            }
            // 6. AMMO BOX[cite: 1]
            else if (en.type === 'ammo_box') {
                ammoReserve += 20; 
                showToast("+20 RESERV-AMMO!", "#00ccff");
                enemies.splice(i, 1);
                updateAmmoUI();
            }
            // 7. VANLIGA FIENDER (Vikter, Bomber, Pansar)[cite: 1]
            else {
                en.hp--;
                if (en.hp <= 0) {
                    let gain = (en.type === 'bomb' ? 200 : (en.type === 'armored' ? 500 : 100));
                    // Om doublePoints är aktivt får du x2[cite: 1]
                    score += doublePoints ? gain * 2 : gain; 
                    enemies.splice(i, 1);
                    document.getElementById('score').innerText = score;
                } else {
                    if (typeof sndHurt !== 'undefined') sndHurt.play().catch(()=>{});
                }
            }
        }
    });
    updateAmmoUI(); // Se till att mätaren uppdateras vid varje skott[cite: 1]
}

function updateAmmoUI() {
    const ammoEl = document.getElementById('ammo-display');
    if (ammoEl) {
        ammoEl.innerText = `AMMO: ${ammoInMag}/${ammoReserve} | 📦: ${emergencyAmmoBoxes}`;
    }
}

// --- FUNKTION FÖR STJÄRNA (ODÖDLIGHET) ---
function activateInvincibility() {
    isInvincible = true;
    showToast("🌟 ODÖDLIG! (7 SEK)", "gold");
    
    // Stäng av effekten efter 7 sekunder
    setTimeout(() => {
        isInvincible = false;
        showToast("✨ Odödlighet slut", "#aaa");
    }, 7000);
}

// --- FUNKTION FÖR DUBBLA POÄNG ---
function activateDoublePoints() {
    doublePoints = true;
    showToast("💰 DUBBLA POÄNG! (10 SEK)", "#00ff00"); triggerStrobe();
    
    // Stäng av effekten efter 10 sekunder
    setTimeout(() => {
        doublePoints = false;
        showToast("💰 Poäng återställda", "#aaa"); killStrobe();
    }, 10000);
}

// --- NY OMLADDNINGSFUNKTION ---
function reload() {
    if (isReloading || ammoInMag === magSize || ammoReserve <= 0) return;

    isReloading = true;
    showToast("🔄 LADDAR OM...", "#ffffff");
    
    // Simulerar en omladdningstid på 1.5 sekunder
    setTimeout(() => {
        let needed = magSize - ammoInMag;
        let toReload = Math.min(needed, ammoReserve);
        
        ammoInMag += toReload;
        ammoReserve -= toReload;
        
        isReloading = false;
        showToast("✅ REDO!", "#00ff00");
    }, 1500);
}

// Lyssna på tangentbordet för "R"
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') reload();
});

// --- TIDSKONTROLL (SLOW MOTION) ---
function activateSlowMo() {
    isSlowMo = true;
    showToast("🕒 TIDEN SAKTAD!", "#ffcc00");
    setTimeout(() => { isSlowMo = false; }, 5000); // Varar i 5 sekunder
}

// --- UPPDATERAD UPDATE (RÖRELSE & LIV) ---
function update() {
    if (gameState === 'PLAYING') {
        handleGamepad(); 
        enemies.forEach((en, i) => {
            // Rörelse (Saktas ner om Slow-mo är aktivt)
            en.y += isSlowMo ? en.speed * 0.3 : en.speed;

            if (en.y > canvas.height - 50) {
                // RÄTTNING: Nukes, power-ups och hjärtan drar INTE av liv vid botten
                const isSafe = ['life', 'slowmo', 'ammo_box', 'star', '2x', 'nuke'].includes(en.type);
                
                if (!isSafe && !isInvincible) {
                    lives--; 
                    if (sndBoop) {
                        sndBoop.currentTime = 0;
                        sndBoop.play().catch(()=>{});
                    }
                    if (lives <= 0) endGame();
                }
                
                // Ta bort objektet oavsett om det gav skada eller ej
                enemies.splice(i, 1); 
            }
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
// Om vi är i nuke-animationsläget, rita en vit/orange blixt
    if (gameState === 'GAMEOVER_ANIMATION') {
        ctx.fillStyle = Math.random() > 0.5 ? "white" : "orange";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return; // Sluta rita fiender under explosionen
    }    
// Regnbågseffekt på hela skärmen om stjärnan är aktiv
    if (isInvincible) {
        ctx.fillStyle = `hsla(${Date.now() % 360}, 70%, 50%, 0.15)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (gameState === 'PLAYING') {
        enemies.forEach(en => {
            // RENDERING UTAN BILDER (Vektorgrafik för säkerhet)
            if (en.type === 'ammo_box') {
                ctx.fillStyle = "#00ccff";
                ctx.fillRect(en.x, en.y, en.size, en.size);
                ctx.fillStyle = "white";
                ctx.font = "bold 14px Arial";
                ctx.textAlign = "center";
                ctx.fillText("AMMO", en.x + en.size/2, en.y + en.size/2 + 5);
            } 
            else if (en.type === 'star') {
    if (imgStar.complete) {
        ctx.drawImage(imgStar, en.x, en.y, en.size, en.size);
    } else {
        // Reserv om bilden inte laddat[cite: 1]
        ctx.fillStyle = "yellow";
        ctx.fillRect(en.x, en.y, en.size, en.size);
    }
}
            else if (en.type === '2x') {
                ctx.fillStyle = "#00ff00";
                ctx.font = "bold 28px Luckiest Guy";
                ctx.textAlign = "center";
                ctx.fillText("2X", en.x + en.size/2, en.y + en.size/2 + 10);
            } 
            else if (en.type === 'nuke') {
                ctx.fillStyle = "yellow";
                ctx.beginPath();
                ctx.moveTo(en.x, en.y + en.size);
                ctx.lineTo(en.x + en.size/2, en.y);
                ctx.lineTo(en.x + en.size, en.y + en.size);
                ctx.fill();
                ctx.fillStyle = "black";
                ctx.font = "20px Arial";
                ctx.fillText("☢️", en.x + en.size/2 - 10, en.y + en.size - 10);
            }
            // RENDERING MED BILDER[cite: 1]
            else {
                let img = imgWeight;
                if (en.type === 'bomb') img = imgBomb;
                else if (en.type === 'life') img = imgHeartFull;
                else if (en.type === 'slowmo') img = imgSlowMo;
                else if (en.type === 'armored') {
                    const armorStage = [imgP3, imgP2, imgP1];
                    img = armorStage[en.hp - 1] || imgP1;
                }

                if (img && img.complete) {
                    ctx.drawImage(img, en.x, en.y, en.size, en.size);
                } else {
                    ctx.fillStyle = "magenta"; // Reservfärg vid fel
                    ctx.fillRect(en.x, en.y, en.size, en.size);
                }
            }
        });

        // Rita sikten
        drawSight(p1);
        if (p2.active) drawSight(p2);

        // --- ÄNDRA DETTA I game.js ---
// Rita livmätare (Hjärtan) ovanför kamerarutan
for(let i = 0; i < 3; i++) {
    const hImg = i < lives ? imgHeartFull : imgHeartEmpty;
    if (hImg.complete) {
        // Vi ändrar Y-positionen till -210 för att hamna ovanför kameran (150px + marginal)
        ctx.drawImage(hImg, 20 + i * 55, canvas.height - 210, 45, 45);
    }
}

        if (isTransitioning) {
            drawText("WAVE COMPLETE!", canvas.height/2, 60, "yellow");
        }

    } else if (gameState === 'GAMEOVER') {
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawText("MISSION FAILED", canvas.height/2 - 40, 70, "red");
        drawText(`SCORE: ${score}`, canvas.height/2 + 40, 40, "white");
    }

    if (gameState !== 'LOCKDOWN') {
        update();
        requestAnimationFrame(draw);
    }
}

// Hjälpfunktion för att rita den animerade stjärnan
function drawVectorStar(cx, cy, spikes, outer, inner) {
    let rot = Math.PI/2*3; let x = cx; let y = cy; let step = Math.PI/spikes;
    ctx.beginPath(); ctx.moveTo(cx, cy-outer);
    for(let i=0; i<spikes; i++){
        x=cx+Math.cos(rot)*outer; y=cy+Math.sin(rot)*outer; ctx.lineTo(x,y); rot+=step;
        x=cx+Math.cos(rot)*inner; y=cy+Math.sin(rot)*inner; ctx.lineTo(x,y); rot+=step;
    }
    ctx.lineTo(cx, cy-outer); ctx.closePath();
    ctx.fillStyle = `hsl(${Date.now() % 360}, 100%, 50%)`; // Regnbågsfärg!
    ctx.fill();
}


 if (gameState === 'START' || gameState === 'RULES') {
        // --- START/REGLER TEXT (Om HTML-menyn är dold) ---
        drawText("THE BOSS: BASE DEFENSE", canvas.height / 2 - 40, 60, "#ffcc00");
        drawText("CLICK TO BEGIN", canvas.height / 2 + 40, 30, "lime");
    }

    // --- KAMEK LOCKDOWN SYSTEM ---
    if (gameState !== 'LOCKDOWN') {
        update();
        requestAnimationFrame(draw);
    }

function triggerStrobe() {
    if (strobeActive) return;
    strobeActive = true;
    document.getElementById('strobe-overlay').classList.add('strobe-attack');
    
    // Den stängs av automatiskt efter en kort stund om man inte avbryter manuellt
    setTimeout(() => {
        killStrobe();
    }, 1000); 
}

function killStrobe() {
    strobeActive = false;
    const overlay = document.getElementById('strobe-overlay');
    if (overlay) {
        overlay.classList.remove('strobe-attack');
    }

}

// --- KAMEK RANDOM MAYHEM SYSTEM ---

function startRandomStrobeTimer() {
    // Vi kollar var 3:e sekund om Kamek vill jävlas
    setInterval(() => {
        if (gameState === 'PLAYING' && !strobeActive) {
            // 10% chans var 3:e sekund att en slumpmässig strobe startar
            if (Math.random() < 0.10) {
                console.log("KAMEK ATTACK: Slumpmässig strobe aktiverad!");
                triggerRandomMayhemStrobe();
            }
        }
    }, 3000);
}

function triggerRandomMayhemStrobe() {
    strobeActive = true;
    const overlay = document.getElementById('strobe-overlay');
    overlay.classList.add('strobe-attack');
    
    // Slumpmässiga strobes varar längre (mellan 1.5 till 3 sekunder)
    // såvida inte spelaren trycker på 'S' eller handkontrollen!
    let duration = 1500 + Math.random() * 1500;
    
    setTimeout(() => {
        if (strobeActive) {
            killStrobe();
        }
    }, duration);
}

// Starta timern direkt när skriptet laddas
startRandomStrobeTimer();

function useEmergencyAmmo() {
    // Kan bara användas om både magasin och reserv är helt tomma
    if (ammoInMag === 0 && ammoReserve === 0 && emergencyAmmoBoxes > 0) {
        emergencyAmmoBoxes--;
        ammoReserve += 15; // Ger en liten mängd skott för att överleva
        showToast(`🚨 NÖDAMMO ANVÄND! (${emergencyAmmoBoxes} kvar)`, "#ffcc00");
        sndPling.play().catch(()=>{}); // Eller ett annat passande ljud
        updateAmmoUI();
    } else if (emergencyAmmoBoxes === 0 && ammoInMag === 0 && ammoReserve === 0) {
        showToast("🚫 INGA NÖDLÅDOR KVAR!", "#ff0000");
    }
}

// Lyssna på tangentbordet för "E"
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') reload();
    if (e.key.toLowerCase() === 'e') useEmergencyAmmo();
    if (e.key.toLowerCase() === 's') killStrobe(); // Stoppa strobe med S
});


function toggleInstructions(show) {
    const modal = document.getElementById('instructions-modal');
    if (modal) {
        modal.style.display = show ? 'block' : 'none';
    }
}

// Stäng modalen om man klickar utanför den
window.onclick = function(event) {
    const modal = document.getElementById('instructions-modal');
    if (event.target == modal) {
        toggleInstructions(false);
    }
}

function handleGamepad() {
    const gps = navigator.getGamepads();
    
    [0, 1].forEach(index => {
        if (gps[index]) {
            const gp = gps[index];
            let p = (index === 0) ? p1 : p2;

            // RÖRELSE OCH PRECISION
            if (Math.abs(gp.axes[0]) > 0.1) p.x += gp.axes[0] * 15;
            if (Math.abs(gp.axes[1]) > 0.1) p.y += gp.axes[1] * 15;

            // SKJUT (RT eller A)[cite: 4]
            if ((gp.buttons[0].pressed || gp.buttons[7].pressed) && !p.isShooting) {
                shoot(p);
                p.isShooting = true;
                setTimeout(() => { p.isShooting = false; }, 150); 
            }

            // --- NYTT: RELOAD MED X/SQUARE (Knapp 2)[cite: 4] ---
            if (gp.buttons[2].pressed) {
                reload();
            }
            if (gp.buttons[1].pressed || gp.buttons[3].pressed) { // Knapp B eller Y
    killStrobe();
}

            // LOCKDOWN
            if (gp.buttons[9].pressed || gp.buttons[8].pressed) {
                triggerLockdown("KAMEK GILLAR INTE PAUSER!");
            }
        }
    });

    // Uppdatera UI
    document.getElementById('ammo-display').innerText = `${ammoInMag} / ${ammoReserve}`;
}

function drawText(t, y, s, c) {
    ctx.fillStyle = c; ctx.textAlign = "center";
    ctx.font = s + "px 'Luckiest Guy'";
    ctx.strokeStyle = "black"; ctx.lineWidth = 4;
    ctx.strokeText(t, canvas.width/2, y);
    ctx.fillText(t, canvas.width/2, y);
}

// UPPDATERAD: Siktet blir rött när man siktar på en fiende/item[cite: 8]
function drawSight(p) {
    const isOverTarget = enemies.some(en => 
        p.x > en.x && p.x < en.x + en.size && 
        p.y > en.y && p.y < en.y + en.size
    );

    ctx.strokeStyle = isOverTarget ? "red" : p.color; 
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(p.x, p.y, 25, 0, Math.PI*2);
    ctx.moveTo(p.x-40, p.y); ctx.lineTo(p.x+40, p.y);
    ctx.moveTo(p.x, p.y-40); ctx.lineTo(p.x, p.y+40); ctx.stroke();
}

function nextWave() {
    isTransitioning = true;
    wave++; enemiesPerWave += 5;
    const waveEl = document.getElementById('wave-display');
    if (waveEl) waveEl.innerText = "WAVE " + wave;
    setTimeout(() => { isTransitioning = false; spawnEnemy(); }, 2000);
}

// --- HÅN OCH BETYGSYSTEM ---
function getMockery(finalScore) {
    // Specialkod: psl631 ger guldmynt och beröm
    const nameInput = document.getElementById('playerName');
    if (nameInput && nameInput.value.toLowerCase() === "psl631") {
        showToast("💰 GULD MYNT VIDAREBEFORDADE! Kungen av Station 24.", "gold");
        return "SUPER (STJÄRNVINSTEN) - LEGENDARISK STATUS!";
    }

    if (finalScore < 1000) return "USELT - Var du ens vaken?";
    if (finalScore < 3000) return "DÅLIGT - Goomborna skrattar åt dig.";
    if (finalScore < 7000) return "GENOMSNITT - Helt okej, men inte mer.";
    if (finalScore < 15000) return "BRA - Nu börjar det likna något!";
    if (finalScore < 30000) return "BÄST - En sann försvarare av basen!";
    return "SUPER (STJÄRNVINSTEN) - DU ÄR OSTOPPBAR!";
}

// --- AVSLUTA SPELET ---
// --- UPPDATERAD ENDGAME ---
function endGame() {
    gameState = 'GAMEOVER';
    new Audio('f6_sad_trombone.mp3').play().catch(()=>{});
    
    // Hämta betyg baserat på poäng
    const rating = getMockery(score);
    
    // Spara poäng och namn
    saveHighScore(currentPlayerName, score);
    
    // Visa betyg i en Toast[cite: 5]
    setTimeout(() => {
        showToast(`RESULTAT: ${rating}`, "#ffcc00");
    }, 500);

    // Återgå till startskärmen[cite: 5]
    setTimeout(() => {
        const startScreen = document.getElementById('start-screen');
        if (startScreen) {
            startScreen.style.display = 'block';
            updateLeaderboardUI();
        }
    }, 4000);
}

// --- KAMEK TRACKPAD-VAKT ---
window.addEventListener('wheel', (e) => {
    // Traditionella möss skrollar oftast i fasta heltal (t.ex. 100, 120, 150).
    // Trackpads skickar ofta små, icke-heltal (t.ex. 4.5, 12.2) pga "smooth scrolling".
    const isTrackpad = !Number.isInteger(e.deltaY) || (Math.abs(e.deltaY) > 0 && Math.abs(e.deltaY) < 20);

    // Kontrollera om spelet är aktivt (fungerar för både Base Defense och Math Mayhem)
    const isGameRunning = (typeof gameState !== 'undefined' && gameState === 'PLAYING') || 
                          (typeof gameActive !== 'undefined' && gameActive === true);

    if (isTrackpad && isGameRunning) {
        const mockery = "SLUTA SMEKA DIN LAPTOP! 🚫 \n\n" +
                        "Kamek skrattar åt din klumpiga styrplatta: 'NYEHEHEHE!' \n" +
                        "Dina fingrar duger inte för Station 24 Protocol. \n\n" +
                        "⚠️ REKOMMENDATION: Anslut en riktig DATORMUS för precision!";
        
        // Trigga lockdown-systemet
        if (typeof triggerLockdown === 'function') {
            triggerLockdown(mockery);
        } else {
            // Reserv om funktionen inte tar argument (som i Math Mayhem)
            gameActive = false;
            clearInterval(timerInterval);
            document.getElementById('lockdown-overlay').style.display = 'flex';
            document.querySelector('#lockdown-overlay p').innerText = mockery;
            new Audio('kamek.mp3').play().catch(()=>{});
        }
    }
}, { passive: false });

// --- KAMEK PRECISION START ---
document.getElementById('startButton').addEventListener('click', function(e) {
    // Stoppar klicket från att registreras som ett skott i spelet samtidigt
    e.stopPropagation(); 

    if (gameState === 'START') {
        gameState = 'PLAYING';
        
        // Gömmer startskärmen (menyn)
        document.getElementById('start-screen').style.display = 'none';
        
        // Startar fiende-vågorna
        spawnEnemies();
        
        console.log("Systemet online. Lycka till, Operatör.");
    }
});

// Endast detta ska finnas längst ner:
updateLeaderboardUI();
draw();