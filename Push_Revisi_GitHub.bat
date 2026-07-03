@echo off
title Push Revisi ke GitHub - Tanjung Pinang Rent Car
color 0b
echo ==========================================================
echo       PUSH REVISI KE GITHUB ^& SINKRONISASI FOLDER
echo ==========================================================
echo.
echo 1. Update otomatis artikel SEO...
node update_artikel.js
echo.
echo 2. Menyinkronkan file ke folder produksi (tanjungpinang)...
xcopy "d:\proj\rentcartanjung\index.html" "d:\proj\tanjungpinang\" /y /d
xcopy "d:\proj\rentcartanjung\style.css" "d:\proj\tanjungpinang\" /y /d
xcopy "d:\proj\rentcartanjung\artikel.html" "d:\proj\tanjungpinang\" /y /d
echo.
echo 3. Menyiapkan Git Commit...
set /p commit_msg="Masukkan pesan revisi (Tekan Enter untuk default: 'Revisi Tampilan Armada'): "
if "%commit_msg%"=="" set commit_msg=Revisi Tampilan Armada
echo.
echo 3. Menambahkan perubahan ke git...
git add .
echo.
echo 4. Melakukan commit dengan pesan: "%commit_msg%"...
git commit -m "%commit_msg%"
echo.
echo 5. Mengirim perubahan ke GitHub...
git push origin main
echo.
echo ==========================================================
echo Selesai! Tekan tombol apa saja untuk menutup jendela ini.
echo ==========================================================
pause > nul
