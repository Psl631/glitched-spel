@echo off
title STATION 24 - AUTOMATIC PROTOCOL BOOT
color 0D
echo ============================================================
echo      KAMEK IS DEPLOYING STATION 24 TO THIS TERMINAL...
echo ============================================================
echo.
echo [SYSTEM] Checking power source...
echo.

:: Configuration
set "foldername=lanbit_quiz"
set "source=%~dp0%foldername%"
set "destination=%USERPROFILE%\Desktop\%foldername%"

:: 1. Check source
if not exist "%source%\" (
    echo [CRITICAL ERROR] Folder "%source%" not found!
    pause
    exit
)

:: 2. Copy files
echo [SYSTEM] Bypassing security filters...
echo [SYSTEM] Copying elite data to Desktop...
xcopy "%source%" "%destination%" /E /I /H /Y /Q >nul

:: 3. Create shortcut
echo [SYSTEM] Creating Master Link...
powershell "$s=(New-Object -COM WScript.Shell).CreateShortcut('%USERPROFILE%\Desktop\STATION24_TERMINAL.lnk');$s.TargetPath='%destination%\index.html';$s.Save()"

:: 4. PLAY KAMEK.MP3 (Minimized)
echo [AUDIO] Kamek is laughing at your skills...
start /min wmplayer /play /close "%destination%\kamek.mp3"

:: 5. OPEN THE QUIZ AUTOMATICALLY
echo [LAUNCH] Opening terminal in browser...
start "" "%destination%\index.html"

:: 6. SHOW DIALOG BOX WITH HUMOR
powershell -Command "Add-Type -AssemblyName PresentationFramework; [System.Windows.MessageBox]::Show('Station 24 has been successfully deployed! `n`nGood luck, Operator!', 'STATION 24: BOOT COMPLETE', 'OK', 'Information')" [cite: 72]

echo.
echo ============================================================
echo      INSTALLATION COMPLETE. DISCONNECTING FROM DEPOT.
echo ============================================================
timeout /t 3 >nul
exit