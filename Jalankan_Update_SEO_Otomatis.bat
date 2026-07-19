@echo off
title Update SEO & Artikel Otomatis - Zelina Transport
color 0a

echo ==========================================================
echo       MEMULAI PROSES UPDATE ARTIKEL SEO OTOMATIS
echo ==========================================================
echo.
echo Melacak kata kunci: "sewa mobil tanjung pinang", "rental mobil bintan", dll...
echo.

:: Run Node automation script
node seo_automation.js
echo.

:prompt
set /p gitpush="Apakah Anda ingin mengirim (Git Push) perubahan ke GitHub sekarang? (Y/N): "
if /i "%gitpush%"=="Y" goto git_sync
if /i "%gitpush%"=="N" goto exit_no
echo Pilihan tidak valid. Silakan masukkan Y atau N.
goto prompt

:git_sync
echo.
echo ==========================================================
echo             MENGIRIM REVISI KE GITHUB
echo ==========================================================
echo.
echo 1. Menyiapkan Git Commit...
git add .
git commit -m "Update Otomatis Artikel SEO & Sitemap - Periode %DATE%"
echo.
echo 2. Mengirim ke GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Gagal melakukan push ke GitHub. Pastikan koneksi internet Anda aktif.
) else (
    echo.
    echo ✅ Berhasil mengupdate repositori GitHub!
)
goto end_script

:exit_no
echo.
echo Mengabaikan git push. File lokal Anda di folder produksi telah sukses disinkronkan.
goto end_script

:end_script
echo.
echo ==========================================================
echo Selesai! Jendela ini akan tertutup otomatis dalam 5 detik.
echo ==========================================================
timeout /t 5 > nul
exit
