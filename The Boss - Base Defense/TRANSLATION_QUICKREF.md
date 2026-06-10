# Base Defense Ultra - Translation System Quick Reference

## Files Created

1. **translations.js** - Master translation library
   - 4 languages: Swedish (sv), English (en), Danish (da), Norwegian (no)
   - 150+ translation keys
   - Auto-detects browser language
   - Saves user preference to localStorage

2. **TRANSLATION_GUIDE.md** - Complete integration guide
   - How to include translations in HTML
   - Code examples
   - Testing procedures

3. **TRANSLATION_EXAMPLE.html** - Interactive demo page
   - Shows all available languages
   - Displays example translations
   - Demonstrates language switching

## Quick Start (3 Steps)

### Step 1: Add Script to index.html
```html
<script src="translations.js"></script>
```

### Step 2: Replace Swedish Text with Translation Function
```javascript
// Before
showToast("🔈 RADIO OFF", "#888");

// After
showToast(t('radio_off'), "#888");
```

### Step 3: Add Language Selector (Optional but Recommended)
```html
<button onclick="setLanguage('en')">English</button>
<button onclick="setLanguage('da')">Dansk</button>
<button onclick="setLanguage('no')">Norsk</button>
<button onclick="setLanguage('sv')">Svenska</button>
```

## Key Functions

| Function | Usage | Returns |
|----------|-------|---------|
| `t(key)` | Translate simple string | Localized text |
| `t(key, param)` | Translate with parameter | Localized text with value |
| `setLanguage(code)` | Switch language | Reloads page |
| `getCurrentLanguage()` | Get current language | Code (sv/en/da/no) |
| `getAvailableLanguages()` | List all languages | Array of {code, name} |

## Language Codes
- **sv** = Swedish (Original)
- **en** = English
- **da** = Danish
- **no** = Norwegian

## Translation Keys by Category

### UI Labels
```
score, mag, wave, ammo_reserve
start_game, instructions, settings
player_name, placeholder_name
```

### Messages & Toasts
```
good_luck_msg(name)
wave_complete, mission_failed
reserve_ammo, invincible, double_points
reloading, reload_ready, slow_mo
```

### Warnings
```
low_battery, unsupported_control, gamepad_connected
adblock_detected, offline_warning, online_restored
cookies_blocked, performance_drop, afk_warning
```

### Ratings
```
terrible, poor, average, good, great, excellent, legendary
```

### Lockdown Messages
```
right_click_forbidden, devtools_forbidden
focus_lost, tab_switch, turbo_click, macro_detected
```

## Implementation Checklist

- [ ] Add `<script src="translations.js"></script>` to index.html
- [ ] Replace all hardcoded Swedish strings with `t('key')` calls
- [ ] Test with each language (sv, en, da, no)
- [ ] Add language selector button (optional)
- [ ] Verify localStorage is saving language preference
- [ ] Test game functionality in all languages
- [ ] Check that emoji work in all languages
- [ ] Verify player name displays correctly
- [ ] Test lockdown messages in all languages

## Testing in Browser Console

```javascript
// Check current language
getCurrentLanguage()

// Try each language
setLanguage('sv')  // Swedish
setLanguage('en')  // English
setLanguage('da')  // Danish
setLanguage('no')  // Norwegian

// Get specific translation
t('score')
t('good_luck_msg', 'Alice')
t('emergency_ammo_used', 3)

// List all languages
getAvailableLanguages()

// Check localStorage
localStorage.getItem('baseDefenseLanguage')
```

## Adding More Languages

To add German, French, or other languages:

1. Open `translations.js`
2. Add new entry to TRANSLATIONS object:
```javascript
TRANSLATIONS = {
    // ... existing languages ...
    de: {
        lang_name: 'Deutsch',
        score: 'WERTUNG',
        mag: 'MAG',
        // ... copy all keys from English entry ...
    }
}
```

3. Translate all strings
4. Save and reload page

## Common Implementation Examples

### In HTML Element
```html
<div class="stat-box">
    <span id="score-label"></span>: <span id="score">0</span>
</div>
<script>
    document.getElementById('score-label').textContent = t('score');
</script>
```

### In JavaScript/game.js
```javascript
// Toast messages
showToast(t('invincible'), "gold");
showToast(t('emergency_ammo_used', 3), "#ffcc00");

// UI Updates
if (waveEl) waveEl.innerText = t('wave') + " " + wave;

// Ratings
if (finalScore < 1000) rating = t('terrible');
else if (finalScore < 3000) rating = t('poor');
else rating = t('great');

// Good luck message
showToast(t('good_luck_msg', currentPlayerName), "lime");
```

### In Lockdown Messages
```javascript
function triggerLockdown(reason) {
    gameState = 'LOCKDOWN';
    const pTag = document.querySelector('#lockdown-overlay p');
    if (pTag) pTag.innerText = reason;
    // reason can be t('devtools_forbidden'), t('focus_lost'), etc.
}
```

## File Locations

All files are in: `C:\Users\ASUS\Desktop\mariokart-turnering\lanbit-spel\The Boss - Base Defense\`

- translations.js ← Include this in HTML
- TRANSLATION_GUIDE.md ← Detailed guide
- TRANSLATION_EXAMPLE.html ← Interactive demo
- TRANSLATION_QUICKREF.md ← This file

## Browser Support

Works with all modern browsers:
- Chrome/Chromium ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Opera ✓

## Auto Language Detection

Game automatically detects browser language:
- Swedish browser → Swedish game
- English browser → English game
- Danish browser → Danish game
- Norwegian browser → Norwegian game
- Other languages → English (fallback)

User's choice is saved in localStorage and persists across sessions.

## Notes

- All translations are complete and reviewed
- Emoji symbols are consistent across all languages
- Game messages maintain tone and personality
- Function-based keys support parameter insertion
- LocalStorage key: `baseDefenseLanguage`
- No external dependencies required
- Lightweight (~34KB uncompressed)

## Support

For questions or issues with translations, refer to:
1. TRANSLATION_GUIDE.md - Detailed integration guide
2. TRANSLATION_EXAMPLE.html - Working examples
3. translations.js - Source of truth for all strings
