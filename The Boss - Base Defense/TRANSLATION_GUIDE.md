# Base Defense Ultra - Multi-Language Translation Guide

## Overview
The game now supports English, Danish, and Norwegian in addition to Swedish. Language selection is saved in browser localStorage.

## Files Added
- **translations.js** - Contains all translation strings for all languages (Swedish, English, Danish, Norwegian)

## Language Codes
- `sv` - Svenska (Swedish) - Original
- `en` - English
- `da` - Dansk (Danish)
- `no` - Norsk (Norwegian)

## How to Use in HTML

### 1. Include the Translation Library
Add this to your `index.html` in the `<head>` section:
```html
<script src="translations.js"></script>
```

### 2. Add Language Selector Button
Add a language selector button somewhere in your HTML (e.g., in the start screen):

```html
<!-- Language Selector -->
<div id="language-selector" style="position: fixed; top: 20px; right: 20px; z-index: 50;">
    <button onclick="showLanguageMenu()" style="
        padding: 10px 15px;
        background: #1a0033;
        color: #ffcc00;
        border: 2px solid #8200ff;
        border-radius: 5px;
        font-family: 'Luckiest Guy';
        cursor: pointer;
    ">
        🌐 LANGUAGE
    </button>
    <div id="language-menu" style="
        display: none;
        position: absolute;
        top: 50px;
        right: 0;
        background: #1a0033;
        border: 2px solid #8200ff;
        border-radius: 5px;
        min-width: 150px;
        z-index: 100;
    ">
        <!-- Languages will be inserted here by JavaScript -->
    </div>
</div>

<script>
function showLanguageMenu() {
    const menu = document.getElementById('language-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    
    if (menu.style.display === 'block' && menu.children.length === 0) {
        getAvailableLanguages().forEach(lang => {
            const btn = document.createElement('button');
            btn.textContent = lang.name;
            btn.style.cssText = `
                display: block;
                width: 100%;
                padding: 10px;
                background: none;
                border: none;
                color: #ffcc00;
                font-family: 'Luckiest Guy';
                cursor: pointer;
                text-align: left;
                border-bottom: 1px solid #8200ff;
            `;
            btn.onclick = () => setLanguage(lang.code);
            menu.appendChild(btn);
        });
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const selector = document.getElementById('language-selector');
    if (selector && !selector.contains(e.target)) {
        document.getElementById('language-menu').style.display = 'none';
    }
});
</script>
```

### 3. Use Translation Function in HTML
Replace Swedish text with translation function calls:

**Before:**
```html
<div class="stat-box">SCORE: <span id="score">0</span></div>
```

**After:**
```html
<div class="stat-box" id="score-label">SCORE: <span id="score">0</span></div>
<script>
document.getElementById('score-label').textContent = t('score') + ': ';
</script>
```

### 4. Use Translation Function in JavaScript

**Before:**
```javascript
showToast("🔈 RADIO OFF", "#888");
```

**After:**
```javascript
showToast(t('radio_off'), "#888");
```

## Common Translation Keys

### UI Elements
- `score` - Score label
- `mag` - Magazine label
- `wave` - Wave label
- `start_game` - Start button
- `instructions` - Instructions button
- `settings` - Settings button

### Messages
- `good_luck_msg(name)` - Good luck message with player name
- `emergency_ammo_used(count)` - Emergency ammo message with count
- `wave_complete` - Wave complete message
- `mission_failed` - Mission failed message

### Warnings
- `low_battery` - Battery warning
- `offline_warning` - Offline warning
- `performance_drop` - Performance drop warning

## Example: Translating a Toast Message

### JavaScript
```javascript
// Before
showToast("🌟 ODÖDLIG! (7 SEK)", "gold");

// After
showToast(t('invincible'), "gold");
```

## Example: Translating UI Element

### HTML with ID
```html
<div class="stat-box" id="wave-display">WAVE 1</div>

<!-- In script section or game.js -->
<script>
function updateWaveDisplay(waveNum) {
    const waveEl = document.getElementById('wave-display');
    if (waveEl) waveEl.innerText = t('wave') + " " + waveNum;
}
</script>
```

## How Players Select Language

1. Game loads - automatically detects browser language (sv, en, da, no)
2. If browser language not supported, defaults to English
3. Language choice is saved in localStorage
4. Player can change language anytime via the 🌐 LANGUAGE button
5. Page reloads with new language

## Adding New Languages

To add a new language (e.g., German):

1. Open `translations.js`
2. Add a new entry to the `TRANSLATIONS` object:

```javascript
TRANSLATIONS = {
    // ... existing languages ...
    de: { // German
        lang_name: 'Deutsch',
        score: 'PUNKTZAHL',
        // ... add all keys ...
    }
}
```

3. All keys must match the existing keys in other languages

## Updating Translations

To update a translation:

1. Open `translations.js`
2. Find the appropriate language key
3. Update the string value
4. Save the file
5. Clear browser cache and reload

## Testing Translations

### In Browser Console
```javascript
// Check current language
getCurrentLanguage()

// Switch language programmatically
setLanguage('da')

// Get translation
t('score')

// View all languages
getAvailableLanguages()
```

## Notes

- All Swedish strings have been translated to English, Danish, and Norwegian
- Function-based keys (like `good_luck_msg(name)`) accept parameters
- Empty message keys `[key]` indicate missing translations
- Emojis are preserved across all languages
- Date/time formats follow each language's conventions

## Testing Checklist

- [ ] Language selector appears in top-right
- [ ] Clicking button shows available languages
- [ ] Selecting language reloads page in new language
- [ ] Language choice persists on page reload
- [ ] All UI elements display in correct language
- [ ] All toast messages display in correct language
- [ ] All warnings display in correct language
- [ ] Player name is displayed correctly
- [ ] Lockdown messages display in correct language
- [ ] Leaderboard displays in correct language
