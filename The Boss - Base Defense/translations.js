// Multi-language translation system for Base Defense Ultra
const TRANSLATIONS = {
    sv: { // Swedish (Original)
        lang_name: 'Svenska',
        // UI Elements
        score: 'SCORE',
        mag: 'MAG',
        wave: 'WAVE',
        start_game: 'START GAME / STARTA SPEL',
        instructions: 'INSTRUKTIONER',
        settings: '🎥 INSTÄLLNINGAR',
        player_name: 'SKRIV DITT NAMN:',
        placeholder_name: 'Skriv här...',
        medical_warning: '⚠️ MEDICINSK VARNING: Spelet innehåller intensiva stroboskopljus. Rekommenderas ej för personer med epilepsi eller liknande tillstånd.',
        
        // Media Control
        media_control: 'MEDIA-KONTROLL',
        activate_hardware: 'Aktivera hårdvara för turneringen:',
        camera: 'KAMERA',
        microphone: 'MIKROFON',
        on: 'PÅ',
        off: 'AV',
        save_activate: 'SPARA & AKTIVERA',
        
        // Radio
        radio_off: '🔈 RADIO OFF',
        radio_on: '🔊 EURODANCE ON',
        now_playing: '🎵 NOW PLAYING: EURODANCE',
        
        // Leaderboard
        top_defenders: '🏆 TOP DEFENDERS',
        rank: 'RANK',
        name: 'NAMN',
        score_col: 'SCORE',
        no_scores: 'INGA POÄNG ÄN!',
        
        // Instructions
        operator_manual: 'OPERATÖRS-MANUAL',
        sensory_profile: '🧠 SENSORISK PROFIL',
        vision: 'SYN',
        hearing: 'HÖRSEL',
        touch: 'KÄNSEL',
        battle_controls: '🎮 STRIDSKONTROLLER',
        keyboard: 'TANGENTBORD',
        gamepad: 'GAMEPAD',
        mouse: 'Mus',
        shoot: 'Skjut',
        reload: 'Ladda om',
        emergency_box: 'Nödlåda',
        stop_strobe: 'Stoppa Strobe',
        trigger_rt: '[RT/R2]',
        button_x: '[X/A]',
        button_b: '[B/Y]',
        
        kamek_warning: '🧙‍♂️ KAMEK ANTI-CHEAT & VARNING',
        turbo_click_warning: 'Turbo-klick och script detekteras automatiskt. Vid fusk låses terminalen (Lockdown).',
        forbidden_target: '☢️ FÖRBJUDET MÅL',
        nuke_warning: 'Skjut ALDRIG på radioaktiva tecken (Nukes). Träff = Omedelbar GAME OVER.',
        
        life_system: '🛡️ LIVSSYSTEM',
        life_desc: 'Du har 3 LIV. Varje missad fiende tar 1 LIV.\n0 liv = Systemkrasch och Game Over.',
        power_ups: '💎 POWER-UPS',
        heart: '❤️ Hjärta: +1 Liv',
        clock: '🕒 Klocka: Slow-Mo',
        star: '⭐ Stjärna: Odödlig',
        gold: '💰 Guld: X2 Poäng',
        
        confirm_protocol: 'BEKRÄFTA PROTOKOLL & STARTA',
        
        // Lockdown Screen
        cheat_detected: 'CHEAT DETECTED!',
        kamek_locked: 'Kamek has locked the game!',
        restart: 'RESTART',
        
        // In-game Messages
        luck: 'LYCKA TILL',
        good_luck_msg: (name) => `LYCKA TILL, ${name.toUpperCase()}!`,
        
        ammo_reserve: 'AMMO',
        reserve_ammo: '+20 RESERV-AMMO!',
        invincible: '🌟 ODÖDLIG! (7 SEK)',
        invincible_end: '✨ Odödlighet slut',
        double_points: '💰 DUBBLA POÄNG! (10 SEK)',
        double_points_end: '💰 Poäng återställda',
        
        reloading: '🔄 LADDAR OM...',
        reload_ready: '✅ REDO!',
        
        slow_mo: '🕒 TIDEN SAKTAD!',
        emergency_ammo_used: (count) => `🚨 NÖDAMMO ANVÄND! (${count} kvar)`,
        no_emergency_boxes: '🚫 INGA NÖDLÅDOR KVAR!',
        
        wave_complete: 'WAVE COMPLETE!',
        mission_failed: 'MISSION FAILED',
        
        // Lockdown Reasons
        right_click_forbidden: 'Högerklick är strikt förbjudet på Station 24!',
        aombot_detected: 'Aombot upptäckt- strikt förbjudet att använda!',
        no_escape: 'Ingen flykt! ESC-tangenten är låst under uppdraget.',
        devtools_forbidden: 'Fuskförsök detekterat: DevTools är inte tillåtet!',
        focus_lost: 'DU TAPPADE FOKUS! Kamek accepterar inga distraktioner.',
        tab_switch: 'Flikbyte detekterat! Spelet har låsts av säkerhetsskäl.',
        turbo_click: 'Nyehehehe! Tror du att du är en kulspruta? Station 24 kräver mänsklig motorik, inte turbo-fingrar! Terminalen låst.',
        macro_detected: 'Ojdå! Vilken fantastisk taktfasthet... FÖR ATT VARA EN MASKIN! Nyehehe! Dina makron biter inte på Kamek. Adjö, fuskare!',
        
        // Warnings
        low_battery: '⚠️ Låg batterinivå! Anslut laddare för optimal prestanda.',
        unsupported_control: '⚠️ Denna kontroll stödjs ej fullt ut (för få knappar).',
        gamepad_connected: '🎮 Handkontroll ansluten!',
        adblock_detected: '🚫 Adblock detekterat! Vissa funktioner kan begränsas.',
        offline_warning: '📶 Offline - kan ej synka med molnet',
        online_restored: '✅ Online - synk återupptagen',
        cookies_blocked: '🍪 Cookies är blockerade! Poäng kan inte sparas.',
        performance_drop: '⚠️ Prestanda-drop detekterat! Stäng andra flikar.',
        save_failed: '❌ Kan inte spara poäng! Webbläsarlagring är full eller låst.',
        webgl_missing: '⚠️ Din enhet saknar WebGL-stöd. Grafiken kan lagga.',
        data_saver_active: '📉 Datasparkontroll aktiv - laddning kan ta längre tid.',
        slow_connection: '📶 Långsam anslutning - synk med molnet kan misslyckas.',
        afk_warning: '💤 Hallå? Är du kvar? Spelet pausades nästan...',
        
        // Ratings
        terrible: 'USELT - Var du ens vaken?',
        poor: 'DÅLIGT - Goomborna skrattar åt dig.',
        average: 'GENOMSNITT - Helt okej, men inte mer.',
        good: 'BRA - Nu börjar det likna något!',
        great: 'BÄST - En sann försvarare av basen!',
        excellent: 'SUPER (STJÄRNVINSTEN) - DU ÄR OSTOPPBAR!',
        legendary: 'SUPER (STJÄRNVINSTEN) - LEGENDARISK STATUS!',
        
        // System messages
        no_media_confirm: 'Ingen media vald. Fortsätt ändå?',
        system_live: '✅ SYSTEMET ÄR LIVE',
        access_denied: '❌ ÅTKOMST NEKAD ELLER INGEN ENHET',
        nuke_detonated: '☢️ NUKE DETONERAD! \n Kamek skrattar åt din aska: \'NYEHEHEHE!\'',
        gold_coin: '💰 GULD MYNT VIDAREBEFORDADE! Kungen av Station 24.',
        
        // Kamek messages
        kamek_pause_warning: 'KAMEK GILLAR INTE PAUSER!',
        kamek_swearing: '⚠️ VARNING #',
        clean_mouth: ': STÄDA MUNNEN!',
        toxic_lockdown: 'LÅST AV KAMEK',
        swearing_forbidden: '"Svordomar tillåts inte."',
        toxic_error: 'SYSTEM_ERROR: TOXIC_OPERATOR_DETECTED',
        zero_score: 'RESULTAT: 0 POÄNG REGISTRERADE',
        try_again: 'FÖRSÖK IGEN',
        
        // Unsupported Device
        js_required: '⚠️ JAVASCRIPT KRÄVS',
        js_disabled: 'Station 24 kan inte starta eftersom JavaScript är inaktiverat.',
        enable_js: 'Aktivera JavaScript i dina webbläsarinställningar för att delta i turneringen.',
        
        system_error: '⚠️ SYSTEMFEL',
        tournament_protection: 'Station 24 Turneringsskydd',
        
        system_archaeology: '🚫 SYSTEM-ARKEOLOGI',
        ie_message: 'Internet Explorer? Museet ringde och vill ha tillbaka sin webbläsare. Uppgradera till en riktig dator innan basen blir skrot!',
        
        car_terminal: '🚗 FORDONSTERMINAL NEKAD',
        tesla_message: 'Försöker du rädda basen från förarsätet i din Tesla? Parkera bilen och hämta en PC innan du krockar både i spelet och i verkligheten!',
        
        couch_potato: '📺 SOFFPOTATIS-DETEKTOR',
        tv_message: 'Att spela på en Smart TV är som att försöka skriva en roman med en fjärrkontroll. Sluta slöa i soffan och sätt dig vid en arbetsstation!',
        
        console_limit: '🎮 KONSOL-BEGRÄNSNING',
        console_message: 'Vi stöder inte \'Aim Assist\' från spelkonsoler här. Operatör PSL631 kräver en Master Race-dator (Windows/Mac/Linux) för detta uppdrag!',
        
        tablet_detected: '🎨 PADDA DETEKTERAD',
        tablet_message: 'En iPad är bara en förvuxen telefon. Dina kladdiga fingrar på skärmen kommer aldrig kunna försvara basen. Hämta en mus och ett tangentbord!',
        
        mobile_denied: '📱 FICK-LEKSAK NEKAD',
        mobile_message: 'Din skärm är för liten för den här typen av krigföring. Station 24 Protocol kräver en stationär terminal, inte en enhet du har i fickan!',
    },
    en: { // English
        lang_name: 'English',
        // UI Elements
        score: 'SCORE',
        mag: 'MAG',
        wave: 'WAVE',
        start_game: 'START GAME',
        instructions: 'INSTRUCTIONS',
        settings: '🎥 SETTINGS',
        player_name: 'ENTER YOUR NAME:',
        placeholder_name: 'Type here...',
        medical_warning: '⚠️ MEDICAL WARNING: This game contains intense strobe lights. Not recommended for people with epilepsy or similar conditions.',
        
        // Media Control
        media_control: 'MEDIA CONTROL',
        activate_hardware: 'Activate hardware for the tournament:',
        camera: 'CAMERA',
        microphone: 'MICROPHONE',
        on: 'ON',
        off: 'OFF',
        save_activate: 'SAVE & ACTIVATE',
        
        // Radio
        radio_off: '🔈 RADIO OFF',
        radio_on: '🔊 EURODANCE ON',
        now_playing: '🎵 NOW PLAYING: EURODANCE',
        
        // Leaderboard
        top_defenders: '🏆 TOP DEFENDERS',
        rank: 'RANK',
        name: 'NAME',
        score_col: 'SCORE',
        no_scores: 'NO SCORES YET!',
        
        // Instructions
        operator_manual: 'OPERATOR\'S MANUAL',
        sensory_profile: '🧠 SENSORY PROFILE',
        vision: 'VISION',
        hearing: 'HEARING',
        touch: 'TOUCH',
        battle_controls: '🎮 BATTLE CONTROLS',
        keyboard: 'KEYBOARD',
        gamepad: 'GAMEPAD',
        mouse: 'Mouse',
        shoot: 'Shoot',
        reload: 'Reload',
        emergency_box: 'Emergency Box',
        stop_strobe: 'Stop Strobe',
        trigger_rt: '[RT/R2]',
        button_x: '[X/A]',
        button_b: '[B/Y]',
        
        kamek_warning: '🧙‍♂️ KAMEK ANTI-CHEAT & WARNING',
        turbo_click_warning: 'Turbo-clicking and scripts are automatically detected. When cheating is detected, the terminal is locked (Lockdown).',
        forbidden_target: '☢️ FORBIDDEN TARGET',
        nuke_warning: 'NEVER shoot at radioactive symbols (Nukes). Hit = Instant GAME OVER.',
        
        life_system: '🛡️ LIFE SYSTEM',
        life_desc: 'You have 3 LIVES. Each missed enemy takes 1 LIFE.\n0 lives = System crash and Game Over.',
        power_ups: '💎 POWER-UPS',
        heart: '❤️ Heart: +1 Life',
        clock: '🕒 Clock: Slow-Mo',
        star: '⭐ Star: Invincible',
        gold: '💰 Gold: X2 Points',
        
        confirm_protocol: 'CONFIRM PROTOCOL & START',
        
        // Lockdown Screen
        cheat_detected: 'CHEAT DETECTED!',
        kamek_locked: 'Kamek has locked the game!',
        restart: 'RESTART',
        
        // In-game Messages
        luck: 'GOOD LUCK',
        good_luck_msg: (name) => `GOOD LUCK, ${name.toUpperCase()}!`,
        
        ammo_reserve: 'AMMO',
        reserve_ammo: '+20 RESERVE AMMO!',
        invincible: '🌟 INVINCIBLE! (7 SEC)',
        invincible_end: '✨ Invincibility ended',
        double_points: '💰 DOUBLE POINTS! (10 SEC)',
        double_points_end: '💰 Points restored',
        
        reloading: '🔄 RELOADING...',
        reload_ready: '✅ READY!',
        
        slow_mo: '🕒 TIME SLOWED!',
        emergency_ammo_used: (count) => `🚨 EMERGENCY AMMO USED! (${count} left)`,
        no_emergency_boxes: '🚫 NO EMERGENCY BOXES LEFT!',
        
        wave_complete: 'WAVE COMPLETE!',
        mission_failed: 'MISSION FAILED',
        
        // Lockdown Reasons
        right_click_forbidden: 'Right-click is strictly forbidden on Station 24!',
        aombot_detected: 'Aombot detected - strictly forbidden!',
        no_escape: 'No escape! The ESC key is locked during the mission.',
        devtools_forbidden: 'Cheating attempt detected: DevTools are not allowed!',
        focus_lost: 'YOU LOST FOCUS! Kamek doesn\'t accept distractions.',
        tab_switch: 'Tab switch detected! The game is locked for security reasons.',
        turbo_click: 'Nyehehehe! Do you think you\'re a machine gun? Station 24 requires human reflexes, not turbo-fingers! Terminal locked.',
        macro_detected: 'Oops! What fantastic precision... FOR A MACHINE! Nyehehe! Your macros don\'t fool Kamek. Goodbye, cheater!',
        
        // Warnings
        low_battery: '⚠️ Low battery level! Connect charger for optimal performance.',
        unsupported_control: '⚠️ This controller is not fully supported (not enough buttons).',
        gamepad_connected: '🎮 Gamepad connected!',
        adblock_detected: '🚫 Adblock detected! Some functions may be limited.',
        offline_warning: '📶 Offline - cannot sync with cloud',
        online_restored: '✅ Online - sync resumed',
        cookies_blocked: '🍪 Cookies are blocked! Scores cannot be saved.',
        performance_drop: '⚠️ Performance drop detected! Close other tabs.',
        save_failed: '❌ Cannot save scores! Browser storage is full or locked.',
        webgl_missing: '⚠️ Your device lacks WebGL support. Graphics may lag.',
        data_saver_active: '📉 Data Saver active - loading may take longer.',
        slow_connection: '📶 Slow connection - cloud sync may fail.',
        afk_warning: '💤 Hello? Are you still there? Game almost paused...',
        
        // Ratings
        terrible: 'TERRIBLE - Were you even awake?',
        poor: 'POOR - The Goombas are laughing at you.',
        average: 'AVERAGE - Totally okay, but nothing more.',
        good: 'GOOD - Now it\'s starting to look like something!',
        great: 'GREAT - A true defender of the base!',
        excellent: 'EXCELLENT - YOU ARE UNSTOPPABLE!',
        legendary: 'SUPER (STAR WIN) - LEGENDARY STATUS!',
        
        // System messages
        no_media_confirm: 'No media selected. Continue anyway?',
        system_live: '✅ SYSTEM IS LIVE',
        access_denied: '❌ ACCESS DENIED OR NO DEVICE',
        nuke_detonated: '☢️ NUKE DETONATED! \n Kamek laughs at your ashes: \'NYEHEHEHE!\'',
        gold_coin: '💰 GOLD COIN FORWARDED! King of Station 24.',
        
        // Kamek messages
        kamek_pause_warning: 'KAMEK DOESN\'T LIKE PAUSES!',
        kamek_swearing: '⚠️ WARNING #',
        clean_mouth: ': CLEAN YOUR MOUTH!',
        toxic_lockdown: 'LOCKED BY KAMEK',
        swearing_forbidden: '"Swearing is not allowed."',
        toxic_error: 'SYSTEM_ERROR: TOXIC_OPERATOR_DETECTED',
        zero_score: 'RESULT: 0 POINTS REGISTERED',
        try_again: 'TRY AGAIN',
        
        // Unsupported Device
        js_required: '⚠️ JAVASCRIPT REQUIRED',
        js_disabled: 'Station 24 cannot start because JavaScript is disabled.',
        enable_js: 'Enable JavaScript in your browser settings to participate in the tournament.',
        
        system_error: '⚠️ SYSTEM ERROR',
        tournament_protection: 'Station 24 Tournament Protection',
        
        system_archaeology: '🚫 SYSTEM ARCHAEOLOGY',
        ie_message: 'Internet Explorer? The museum wants their browser back. Upgrade to a real computer before the base turns into scrap!',
        
        car_terminal: '🚗 VEHICLE TERMINAL DENIED',
        tesla_message: 'Trying to save the base from the driver\'s seat of your Tesla? Park the car and get a PC before you crash both in the game and in real life!',
        
        couch_potato: '📺 COUCH POTATO DETECTOR',
        tv_message: 'Playing on a Smart TV is like trying to write a novel with a remote control. Stop being lazy on the couch and sit at a workstation!',
        
        console_limit: '🎮 CONSOLE LIMITATION',
        console_message: 'We don\'t support "Aim Assist" from gaming consoles here. Operator PSL631 requires a Master Race computer (Windows/Mac/Linux) for this mission!',
        
        tablet_detected: '🎨 TABLET DETECTED',
        tablet_message: 'An iPad is just a grown-up phone. Your greasy fingers on the screen will never defend the base. Get a mouse and keyboard!',
        
        mobile_denied: '📱 POCKET GADGET DENIED',
        mobile_message: 'Your screen is too small for this type of warfare. Station 24 Protocol requires a stationary terminal, not a device in your pocket!',
    },
    da: { // Danish
        lang_name: 'Dansk',
        // UI Elements
        score: 'SCORE',
        mag: 'MAG',
        wave: 'BØLGE',
        start_game: 'START SPILLET',
        instructions: 'INSTRUKTIONER',
        settings: '🎥 INDSTILLINGER',
        player_name: 'SKRIV DIT NAVN:',
        placeholder_name: 'Skriv her...',
        medical_warning: '⚠️ MEDICINSK ADVARSEL: Spillet indeholder intense stroboskoplys. Anbefales ikke for personer med epilepsi eller lignende tilstande.',
        
        // Media Control
        media_control: 'MEDIAKONTROL',
        activate_hardware: 'Aktivér hardware til turneringen:',
        camera: 'KAMERA',
        microphone: 'MIKROFON',
        on: 'TIL',
        off: 'FRA',
        save_activate: 'GEM & AKTIVÉR',
        
        // Radio
        radio_off: '🔈 RADIO FRA',
        radio_on: '🔊 EURODANCE TIL',
        now_playing: '🎵 NU AFSPILLES: EURODANCE',
        
        // Leaderboard
        top_defenders: '🏆 TOP FORSVARERE',
        rank: 'RANG',
        name: 'NAVN',
        score_col: 'SCORE',
        no_scores: 'INGEN SCORE ENDNU!',
        
        // Instructions
        operator_manual: 'OPERATØRS MANUAL',
        sensory_profile: '🧠 SENSORISK PROFIL',
        vision: 'SYN',
        hearing: 'HØRELSE',
        touch: 'FØLELSE',
        battle_controls: '🎮 KAMPKONTROLLER',
        keyboard: 'TASTATUR',
        gamepad: 'GAMEPAD',
        mouse: 'Mus',
        shoot: 'Skyd',
        reload: 'Genindlæs',
        emergency_box: 'Nødsituation-kasse',
        stop_strobe: 'Stop stroboskop',
        trigger_rt: '[RT/R2]',
        button_x: '[X/A]',
        button_b: '[B/Y]',
        
        kamek_warning: '🧙‍♂️ KAMEK ANTI-SNYD & ADVARSEL',
        turbo_click_warning: 'Turboklik og scripts detekteres automatisk. Når snyd opdages, låses terminalen (Lockdown).',
        forbidden_target: '☢️ FORBUDT MÅL',
        nuke_warning: 'SKYD ALDRIG på radioaktive symboler (atomvåben). Træf = Øjeblikkelig SPIL SLUT.',
        
        life_system: '🛡️ LYVSSYSTEM',
        life_desc: 'Du har 3 LIV. Hver manglende fjende tager 1 LIV.\n0 liv = Systemkrash og Spil Slut.',
        power_ups: '💎 POWER-UPS',
        heart: '❤️ Hjerte: +1 Liv',
        clock: '🕒 Ur: Slow-Mo',
        star: '⭐ Stjerne: Uforgængelig',
        gold: '💰 Guld: X2 Point',
        
        confirm_protocol: 'BEKRÆFT PROTOKOL & START',
        
        // Lockdown Screen
        cheat_detected: 'SNYD DETEKTERET!',
        kamek_locked: 'Kamek har låst spillet!',
        restart: 'GENSTART',
        
        // In-game Messages
        luck: 'HELD OG LYKKE',
        good_luck_msg: (name) => `HELD OG LYKKE, ${name.toUpperCase()}!`,
        
        ammo_reserve: 'AMMUNITION',
        reserve_ammo: '+20 RESERVE AMMUNITION!',
        invincible: '🌟 UFORGÆNGELIG! (7 SEK)',
        invincible_end: '✨ Uforgængelighed endte',
        double_points: '💰 DOBBELT POINT! (10 SEK)',
        double_points_end: '💰 Point gendannet',
        
        reloading: '🔄 GENINDLÆSER...',
        reload_ready: '✅ KLAR!',
        
        slow_mo: '🕒 TID LANGSOMMET!',
        emergency_ammo_used: (count) => `🚨 NØDSITUATION AMMUNITION BRUGT! (${count} tilbage)`,
        no_emergency_boxes: '🚫 INGEN NØDSITUATION KASSER TILBAGE!',
        
        wave_complete: 'BØLGE FÆRDIG!',
        mission_failed: 'MISSION FEJLEDE',
        
        // Lockdown Reasons
        right_click_forbidden: 'Højreklik er strengt forbudt på Station 24!',
        aombot_detected: 'Aombot detekteret - strengt forbudt!',
        no_escape: 'Ingen flugt! ESC-tasten er låst under missionen.',
        devtools_forbidden: 'Snydforsøg detekteret: DevTools er ikke tilladt!',
        focus_lost: 'DU MISTEDE FOKUS! Kamek accepterer ingen distraktioner.',
        tab_switch: 'Fanebytning detekteret! Spillet er låst af sikkerhedsårsager.',
        turbo_click: 'Nyehehehe! Tror du, at du er et maskingevær? Station 24 kræver menneskelig refleks, ikke turbofingre! Terminal låst.',
        macro_detected: 'Ups! Hvilken fantastisk præcision... FOR EN MASKINE! Nyehehe! Dine makroer narrer ikke Kamek. Farvel, bedrager!',
        
        // Warnings
        low_battery: '⚠️ Lavt batteriniveau! Tilslut oplader for optimal ydeevne.',
        unsupported_control: '⚠️ Denne controller understøttes ikke fuldt (for få knapper).',
        gamepad_connected: '🎮 Gamepad tilsluttet!',
        adblock_detected: '🚫 Adblock detekteret! Nogle funktioner kan være begrænset.',
        offline_warning: '📶 Offline - kan ikke synkronisere med skyen',
        online_restored: '✅ Online - synkronisering genoptaget',
        cookies_blocked: '🍪 Cookies er blokeret! Score kan ikke gemmes.',
        performance_drop: '⚠️ Ydelsesfald detekteret! Luk andre faner.',
        save_failed: '❌ Kan ikke gemme score! Browserlagring er fuld eller låst.',
        webgl_missing: '⚠️ Din enhed mangler WebGL-understøttelse. Grafik kan hænge.',
        data_saver_active: '📉 Data Saver aktiv - indlæsning kan tage længere tid.',
        slow_connection: '📶 Langsom forbindelse - skyen sync kan mislykkes.',
        afk_warning: '💤 Hej? Er du stadig der? Spillet blev næsten sat på pause...',
        
        // Ratings
        terrible: 'DÅRLIGT - Var du overhovedet vågen?',
        poor: 'RINGE - Goombas ler ad dig.',
        average: 'GENNEMSNIT - Helt i orden, men ikke mere.',
        good: 'GODT - Nu ser det ud til at være noget!',
        great: 'FANTASTISK - En sand forsvarer af basen!',
        excellent: 'FREMRAGENDE - DU ER USEJRLIG!',
        legendary: 'SUPER (STJERNE VIND) - LEGENDARISK STATUS!',
        
        // System messages
        no_media_confirm: 'Ingen medier valgt. Fortsæt alligevel?',
        system_live: '✅ SYSTEMET ER LIVE',
        access_denied: '❌ ADGANG NÆGTET ELLER INGEN ENHED',
        nuke_detonated: '☢️ ATOMVÅBEN DETONERET! \n Kamek ler ad din aske: \'NYEHEHEHE!\'',
        gold_coin: '💰 GULDMØNT VIDERESENDT! Konge af Station 24.',
        
        // Kamek messages
        kamek_pause_warning: 'KAMEK KAN IKKE LIDE PAUSER!',
        kamek_swearing: '⚠️ ADVARSEL #',
        clean_mouth: ': RENS DIN MUN!',
        toxic_lockdown: 'LÅST AF KAMEK',
        swearing_forbidden: '"Forbandelser er ikke tilladt."',
        toxic_error: 'SYSTEM_ERROR: TOXIC_OPERATOR_DETECTED',
        zero_score: 'RESULTAT: 0 POINT REGISTRERET',
        try_again: 'PRØV IGEN',
        
        // Unsupported Device
        js_required: '⚠️ JAVASCRIPT PÅKRÆVET',
        js_disabled: 'Station 24 kan ikke starte, fordi JavaScript er deaktiveret.',
        enable_js: 'Aktivér JavaScript i dine browserindstillinger for at deltage i turneringen.',
        
        system_error: '⚠️ SYSTEMFEJL',
        tournament_protection: 'Station 24 Turnering Beskyttelse',
        
        system_archaeology: '🚫 SYSTEM-ARKÆOLOGI',
        ie_message: 'Internet Explorer? Museet vil have deres browser tilbage. Opgrader til en rigtig computer før basen bliver til skrot!',
        
        car_terminal: '🚗 KØRETØJ TERMINAL NÆGTET',
        tesla_message: 'Forsøger du at redde basen fra fører sædet i din Tesla? Park bilen og få en pc før du crasher både i spillet og i det virkelige liv!',
        
        couch_potato: '📺 SOFASIDDENDE DETEKTOR',
        tv_message: 'At spille på en Smart TV er som at prøve at skrive en roman med en fjernbetjening. Stop med at være doven på sofaen og sid ved en arbejdsstation!',
        
        console_limit: '🎮 KONSOL BEGRÆNSNING',
        console_message: 'Vi understøtter ikke "Aim Assist" fra spilkonsoller her. Operatør PSL631 kræver en Master Race-computer (Windows/Mac/Linux) til denne mission!',
        
        tablet_detected: '🎨 TABLET DETEKTERET',
        tablet_message: 'En iPad er bare en voksen telefon. Dine fedtede fingre på skærmen vil aldrig kunne forsvare basen. Få en mus og tastatur!',
        
        mobile_denied: '📱 LOMMEGADGET NÆGTET',
        mobile_message: 'Din skærm er for lille til denne type krigsførelse. Station 24 Protocol kræver en stationær terminal, ikke en enhed i lommen!',
    },
    no: { // Norwegian
        lang_name: 'Norsk',
        // UI Elements
        score: 'SCORE',
        mag: 'MAG',
        wave: 'BØLGE',
        start_game: 'START SPILLET',
        instructions: 'INSTRUKSJONER',
        settings: '🎥 INNSTILLINGER',
        player_name: 'SKRIV DITT NAVN:',
        placeholder_name: 'Skriv her...',
        medical_warning: '⚠️ MEDISINSK ADVARSEL: Spillet inneholder intense stroboskoplys. Ikke anbefalt for personer med epilepsi eller lignende tilstander.',
        
        // Media Control
        media_control: 'MEDIAKONTROLL',
        activate_hardware: 'Aktiver maskinvare for turneringen:',
        camera: 'KAMERA',
        microphone: 'MIKROFON',
        on: 'PÅ',
        off: 'AV',
        save_activate: 'LAGRE & AKTIVER',
        
        // Radio
        radio_off: '🔈 RADIO AV',
        radio_on: '🔊 EURODANCE PÅ',
        now_playing: '🎵 NÅVÆRENDE AVSPILLING: EURODANCE',
        
        // Leaderboard
        top_defenders: '🏆 TOPP FORSVARERE',
        rank: 'RANG',
        name: 'NAVN',
        score_col: 'SCORE',
        no_scores: 'INGEN POENGSUM ENNÅ!',
        
        // Instructions
        operator_manual: 'OPERATØRMANUAL',
        sensory_profile: '🧠 SANSELLIG PROFIL',
        vision: 'SYN',
        hearing: 'HØRSEL',
        touch: 'FØLELSE',
        battle_controls: '🎮 KAMPKONTROLLER',
        keyboard: 'TASTATUR',
        gamepad: 'GAMEPAD',
        mouse: 'Mus',
        shoot: 'Skyt',
        reload: 'Lad inn på nytt',
        emergency_box: 'Nødkasse',
        stop_strobe: 'Stopp stroboskop',
        trigger_rt: '[RT/R2]',
        button_x: '[X/A]',
        button_b: '[B/Y]',
        
        kamek_warning: '🧙‍♂️ KAMEK ANTI-JUKS & ADVARSEL',
        turbo_click_warning: 'Turboklikking og skript oppdages automatisk. Når juks oppdages, låses terminalen (Lockdown).',
        forbidden_target: '☢️ FORBUDT MÅL',
        nuke_warning: 'SKYT ALDRI på radioaktive symboler (atomvåpen). Treff = Øyeblikkelig SPILL OVER.',
        
        life_system: '🛡️ LIVSSYSTEM',
        life_desc: 'Du har 3 LIV. Hver fiendemangler tar 1 LIV.\n0 liv = Systemkrasj og Spill Over.',
        power_ups: '💎 POWER-UPS',
        heart: '❤️ Hjerte: +1 Liv',
        clock: '🕒 Klokke: Slow-Mo',
        star: '⭐ Stjerne: Udødelig',
        gold: '💰 Gull: X2 Poeng',
        
        confirm_protocol: 'BEKREFT PROTOKOLL & START',
        
        // Lockdown Screen
        cheat_detected: 'JUKS OPPDAGET!',
        kamek_locked: 'Kamek har låst spillet!',
        restart: 'OMSTART',
        
        // In-game Messages
        luck: 'LYKKE TIL',
        good_luck_msg: (name) => `LYKKE TIL, ${name.toUpperCase()}!`,
        
        ammo_reserve: 'AMMUNISJON',
        reserve_ammo: '+20 RESERVE AMMUNISJON!',
        invincible: '🌟 UDØDELIG! (7 SEK)',
        invincible_end: '✨ Udødelighet endte',
        double_points: '💰 DOBBELT POENG! (10 SEK)',
        double_points_end: '💰 Poeng gjenopprettet',
        
        reloading: '🔄 LADER INN...',
        reload_ready: '✅ KLAR!',
        
        slow_mo: '🕒 TID SAKTNET!',
        emergency_ammo_used: (count) => `🚨 NØDKASSE AMMUNISJON BRUKT! (${count} igjen)`,
        no_emergency_boxes: '🚫 INGEN NØDKASSER IGJEN!',
        
        wave_complete: 'BØLGE FULLFØRT!',
        mission_failed: 'OPPDRAG MISLYKTES',
        
        // Lockdown Reasons
        right_click_forbidden: 'Høyreklikking er strengt forbudt på Station 24!',
        aombot_detected: 'Aombot oppdaget - strengt forbudt!',
        no_escape: 'Ingen flukt! ESC-tasten er låst under oppdraget.',
        devtools_forbidden: 'Juksforsøk oppdaget: DevTools er ikke tillatt!',
        focus_lost: 'DU MISTET FOKUS! Kamek aksepterer ingen distraksjoner.',
        tab_switch: 'Fanebytte oppdaget! Spillet er låst av sikkerhetsgrunner.',
        turbo_click: 'Nyehehehe! Tror du at du er et maskingevær? Station 24 krever menneskelig refleks, ikke turbofingre! Terminal låst.',
        macro_detected: 'Oops! Hvilken fantastisk presisjon... FOR EN MASKIN! Nyehehe! Dine makroer narrer ikke Kamek. Ha det, juksemakker!',
        
        // Warnings
        low_battery: '⚠️ Lavt batterinivå! Koble til lader for optimal ytelse.',
        unsupported_control: '⚠️ Denne kontrolleren er ikke fullt støttet (for få knapper).',
        gamepad_connected: '🎮 Gamepad tilkoblet!',
        adblock_detected: '🚫 Adblock oppdaget! Noen funksjoner kan være begrenset.',
        offline_warning: '📶 Offline - kan ikke synkronisere med skyen',
        online_restored: '✅ Online - synkronisering gjenopptatt',
        cookies_blocked: '🍪 Informasjonskapsler er blokkert! Poengsum kan ikke lagres.',
        performance_drop: '⚠️ Ytelsesfall oppdaget! Lukk andre faner.',
        save_failed: '❌ Kan ikke lagre poengsum! Nettleserlagring er full eller låst.',
        webgl_missing: '⚠️ Enheten din mangler WebGL-støtte. Grafikk kan henge.',
        data_saver_active: '📉 Data Saver aktiv - lasting kan ta lengre tid.',
        slow_connection: '📶 Langsom forbindelse - skylaginksing kan mislykkes.',
        afk_warning: '💤 Hei? Er du fortsatt der? Spillet ble nesten satt på pause...',
        
        // Ratings
        terrible: 'FORFERDELIG - Var du i det hele tatt våken?',
        poor: 'DÅRLIG - Goombas ler av deg.',
        average: 'GJENNOMSNITT - Helt i orden, men ingenting mer.',
        good: 'BRAF - Nå begynner det å se bra ut!',
        great: 'FLOTT - En sann forsvarer av basen!',
        excellent: 'UTMERKET - DU ER USTOPPE LIG!',
        legendary: 'SUPER (STJERNESEIER) - LEGENDARISK STATUS!',
        
        // System messages
        no_media_confirm: 'Ingen media valgt. Fortsette likevel?',
        system_live: '✅ SYSTEMET ER LIVE',
        access_denied: '❌ ADGANG NEKTET ELLER INGEN ENHET',
        nuke_detonated: '☢️ ATOMVÅPEN DETONERT! \n Kamek ler av asken din: \'NYEHEHEHE!\'',
        gold_coin: '💰 GULLMYNT VIDERESENDT! Konge av Station 24.',
        
        // Kamek messages
        kamek_pause_warning: 'KAMEK LIKER IKKE PAUSER!',
        kamek_swearing: '⚠️ ADVARSEL #',
        clean_mouth: ': RENS MUNNEN DIN!',
        toxic_lockdown: 'LÅST AV KAMEK',
        swearing_forbidden: '"Forbannelser er ikke tillatt."',
        toxic_error: 'SYSTEM_ERROR: TOXIC_OPERATOR_DETECTED',
        zero_score: 'RESULTAT: 0 POENGSUM REGISTRERT',
        try_again: 'PRØV IGJEN',
        
        // Unsupported Device
        js_required: '⚠️ JAVASCRIPT PÅKREVD',
        js_disabled: 'Station 24 kan ikke starte fordi JavaScript er deaktivert.',
        enable_js: 'Aktiver JavaScript i nettleserinnstillingene dine for å delta i turneringen.',
        
        system_error: '⚠️ SYSTEMFEIL',
        tournament_protection: 'Station 24 Turnering Beskyttelse',
        
        system_archaeology: '🚫 SYSTEMARKÆOLOGI',
        ie_message: 'Internet Explorer? Museet vil ha nettleseren sin tilbake. Oppgrader til en ekte datamaskin før basen blir til skrot!',
        
        car_terminal: '🚗 KJØRETØYTERMINAL NEKTET',
        tesla_message: 'Forsøker du å redde basen fra sjåførsetet i Tesla-en din? Park bilen og få en PC før du krasjer både i spillet og i det virkelige liv!',
        
        couch_potato: '📺 SOFADETEKTOR',
        tv_message: 'Å spille på en Smart TV er som å prøve å skrive en roman med en fjernkontroll. Slutt å være lat på sofaen og sitt ved en arbeidsstation!',
        
        console_limit: '🎮 KONSOLLBEGRENSNING',
        console_message: 'Vi støtter ikke "Aim Assist" fra spillkonsoller her. Operatør PSL631 krever en Master Race-datamaskin (Windows/Mac/Linux) for denne oppdraget!',
        
        tablet_detected: '🎨 NETTBRETT OPPDAGET',
        tablet_message: 'En iPad er bare en voksen mobil. De fettige fingrene dine på skjermen vil aldri kunne forsvare basen. Få en mus og tastatur!',
        
        mobile_denied: '📱 MOBIL GADGET NEKTET',
        mobile_message: 'Skjermen din er for liten for denne typen krigsføring. Station 24 Protocol krever en stasjonær terminal, ikke en enhet i lommen din!',
    }
};

// Get current language from localStorage or browser language
function getCurrentLanguage() {
    let lang = localStorage.getItem('baseDefenseLanguage');
    if (!lang) {
        const browserLang = navigator.language.split('-')[0];
        lang = (TRANSLATIONS[browserLang]) ? browserLang : 'en';
        localStorage.setItem('baseDefenseLanguage', lang);
    }
    return lang;
}

// Get translation string
function t(key, ...args) {
    const lang = getCurrentLanguage();
    const trans = TRANSLATIONS[lang] || TRANSLATIONS['en'];
    let value = trans[key];
    
    if (typeof value === 'function') {
        return value(...args);
    }
    return value || `[${key}]`;
}

// Set language
function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
        localStorage.setItem('baseDefenseLanguage', lang);
        location.reload();
    }
}

// Get available languages
function getAvailableLanguages() {
    return Object.keys(TRANSLATIONS).map(code => ({
        code: code,
        name: TRANSLATIONS[code].lang_name
    }));
}
