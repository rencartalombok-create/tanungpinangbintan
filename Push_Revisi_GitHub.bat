@echo off
title Push Revisi ke GitHub - Tanjung Pinang Rent Car
color 0b
echo ==========================================================
echo       PUSH REVISI KE GITHUB ^& SINKRONISASI FOLDER
echo ==========================================================
echo.
echo 1. Generate & Update Otomatis Artikel SEO...
node seo_automation.js
echo.
echo 2. Menyinkronkan file ke folder produksi (tanjungpinang)...
xcopy "d:\proj\rentcartanjung\index.html" "d:\proj\tanjungpinang\" /y /d
xcopy "d:\proj\rentcartanjung\style.css" "d:\proj\tanjungpinang\" /y /d
xcopy "d:\proj\rentcartanjung\artikel.html" "d:\proj\tanjungpinang\" /y /d
xcopy "d:\proj\rentcartanjung\script.js" "d:\proj\tanjungpinang\" /y /d
xcopy "d:\proj\rentcartanjung\assets\*" "d:\proj\tanjungpinang\assets\" /y /e /i /d
xcopy "d:\proj\rentcartanjung\blog\*" "d:\proj\tanjungpinang\blog\" /y /e /i /d
echo.
echo 3. Menyiapkan Git Commit...
git add .
git commit -m "Revisi Tampilan Armada"
echo.
echo 4. Mengirim perubahan ke GitHub...
git push origin main
echo.
echo ==========================================================
echo Selesai! Tekan tombol apa saja untuk menutup jendela ini.
echo ==========================================================
pause > nul