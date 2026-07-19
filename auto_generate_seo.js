const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'blog');

// Ensure blog directory exists
if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
}

// Target keywords for auto-generation
const targetArticles = [
    {
        keyword: "Sewa Mobil Tanjung Pinang",
        slug: "sewa-mobil-tanjung-pinang",
        category: "PILIHAN UTAMA",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "umum"
    },
    {
        keyword: "Sewa Mobil Bintan",
        slug: "sewa-mobil-bintan",
        category: "REKOMENDASI",
        location: "Bintan",
        isBintan: true,
        focus: "umum"
    },
    {
        keyword: "Rental Mobil Tanjung Pinang",
        slug: "rental-mobil-tanjung-pinang",
        category: "INFORMASI TERBARU",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "umum"
    },
    {
        keyword: "Rental Mobil Bintan",
        slug: "rental-mobil-bintan",
        category: "TIPS PERJALANAN",
        location: "Bintan",
        isBintan: true,
        focus: "umum"
    },
    {
        keyword: "Sewa Mobil Murah Tanjung Pinang",
        slug: "sewa-mobil-murah-tanjung-pinang",
        category: "PROMO & LAYANAN",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "murah"
    },
    {
        keyword: "Rental Mobil Murah Bintan",
        slug: "rental-mobil-murah-bintan",
        category: "PROMO & LAYANAN",
        location: "Bintan",
        isBintan: true,
        focus: "murah"
    },
    {
        keyword: "Sewa Mobil Lepas Kunci Tanjung Pinang",
        slug: "sewa-mobil-lepas-kunci-tanjung-pinang",
        category: "PILIHAN UTAMA",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "lepas-kunci"
    },
    {
        keyword: "Rental Mobil Bintan Lepas Kunci",
        slug: "rental-mobil-bintan-lepas-kunci",
        category: "REKOMENDASI",
        location: "Bintan",
        isBintan: true,
        focus: "lepas-kunci"
    },
    {
        keyword: "Sewa Mobil dengan Supir Tanjung Pinang",
        slug: "sewa-mobil-dengan-supir-tanjung-pinang",
        category: "INFORMASI TERBARU",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "driver"
    },
    {
        keyword: "Rental Mobil Bintan dengan Driver",
        slug: "rental-mobil-bintan-dengan-driver",
        category: "TIPS PERJALANAN",
        location: "Bintan",
        isBintan: true,
        focus: "driver"
    },
    {
        keyword: "Harga Sewa Mobil Tanjung Pinang",
        slug: "harga-sewa-mobil-tanjung-pinang",
        category: "DAFTAR TARIF",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "harga"
    }
];

// Helper to capitalize words
const capitalize = (s) => s.replace(/\b\w/g, l => l.toUpperCase());

// Generate dynamic date text (e.g., "Juli 2026")
const getDynamicDateText = () => {
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const d = new Date();
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
};

const dateText = getDynamicDateText();
const dateNow = new Date().toISOString();

// Content blocks generator
const getIntro = (item) => {
    const kw = item.keyword;
    const loc = item.location;
    
    if (item.focus === "lepas-kunci") {
        return `<p class="seo-lead">Apakah Anda menyukai kebebasan berkendara sendiri tanpa terikat jadwal driver? Layanan <strong>${kw}</strong> lepas kunci adalah pilihan terbaik. Dengan menyewa mobil lepas kunci dari Zelina Transport, Anda memiliki privasi penuh dan kebebasan menentukan rute perjalanan menjelajahi keindahan ${loc} dan sekitarnya.</p>
        <p>Kami menyediakan armada lepas kunci yang prima, bersih, dan siap menemani perjalanan wisata, dinas, maupun bisnis Anda dengan persyaratan yang mudah dan proses serah terima cepat.</p>`;
    }
    
    if (item.focus === "driver") {
        return `<p class="seo-lead">Menjelajahi kawasan ${loc} akan terasa jauh lebih menyenangkan dan bebas lelah dengan memilih layanan <strong>${kw}</strong>. Zelina Transport menyediakan driver profesional, ramah, dan sangat berpengalaman dalam menavigasi rute-rute terbaik di Kepulauan Riau.</p>
        <p>Dengan sewa mobil + driver, Anda tidak perlu pusing memikirkan navigasi jalan, macet, atau kelelahan menyetir. Cukup duduk manis dan nikmati perjalanan Anda dengan nyaman, aman, dan tepat waktu.</p>`;
    }
    
    if (item.focus === "murah") {
        return `<p class="seo-lead">Mencari layanan transportasi hemat untuk liburan atau urusan bisnis Anda? Kami hadir menawarkan solusi <strong>${kw}</strong> dengan jaminan harga termurah, armada berkualitas tinggi, dan pelayanan profesional kelas satu.</p>
        <p>Di Zelina Transport, kami berkomitmen memberikan harga yang sangat transparan tanpa ada biaya siluman (hidden fees). Nikmati perjalanan keliling ${loc} tanpa menguras kantong Anda dengan berbagai pilihan paket sewa kami.</p>`;
    }
    
    if (item.focus === "harga") {
        return `<p class="seo-lead">Ingin tahu estimasi biaya sewa kendaraan untuk perjalanan Anda berikutnya? Halaman <strong>${kw}</strong> ini menyajikan rincian daftar harga sewa mobil terbaru dan terlengkap dari Zelina Transport untuk wilayah Tanjung Pinang dan Bintan.</p>
        <p>Kami menawarkan paket sewa harian, mingguan, hingga bulanan dengan harga kompetitif. Semua kendaraan kami selalu dipelihara secara rutin untuk memastikan performa maksimal dan keamanan prima selama Anda gunakan.</p>`;
    }
    
    // Umum
    return `<p class="seo-lead">Selamat datang di Zelina Transport, penyedia jasa <strong>${kw}</strong> terpercaya dengan pilihan armada terlengkap dan harga terjangkau. Menjelajahi keindahan alam serta pusat bisnis di wilayah ${loc} akan terasa jauh lebih nyaman, aman, dan fleksibel jika Anda menggunakan armada terbaik kami.</p>
    <p>Kami memahami pentingnya transportasi yang andal untuk mendukung kelancaran urusan Anda. Baik untuk tujuan wisata keluarga, perjalanan dinas kantor, pernikahan, maupun antar-jemput bandara dan pelabuhan, kami siap memberikan pelayanan prima.</p>`;
};

const getWhyUs = (item) => {
    const kw = item.keyword;
    const loc = item.location;
    
    let focusPoints = "";
    if (item.focus === "lepas-kunci") {
        focusPoints = `
        <li><strong>Privasi 100% Terjaga:</strong> Bebas mengobrol dan berdiskusi di dalam mobil bersama keluarga atau rekan bisnis tanpa canggung.</li>
        <li><strong>Bebas Mengatur Rute & Waktu:</strong> Kunjungi destinasi wisata di ${loc} kapan pun Anda mau tanpa dibatasi durasi waktu supir.</li>
        <li><strong>Lebih Hemat Biaya:</strong> Tarif sewa lepas kunci tentu lebih hemat karena tidak perlu membayar jasa driver dan makan driver.</li>`;
    } else if (item.focus === "driver") {
        focusPoints = `
        <li><strong>Driver Berpengalaman & Ramah:</strong> Sopir kami sangat menguasai rute jalan di ${loc} dan siap merekomendasikan spot kuliner/wisata terbaik.</li>
        <li><strong>Bebas Lelah & Stres:</strong> Anda tidak perlu lelah menyetir, mencari tempat parkir, atau bingung membaca Google Maps.</li>
        <li><strong>Keamanan & Ketepatan Waktu:</strong> Sopir kami terlatih mengemudi dengan aman (safety driving) dan menjamin Anda tiba tepat waktu.</li>`;
    } else {
        focusPoints = `
        <li><strong>Armada Terawat & Bersih:</strong> Semua unit mobil kami selalu dibersihkan secara detail dan diservis secara berkala sebelum diserahkan ke tangan Anda.</li>
        <li><strong>Harga Jujur & Transparan:</strong> Apa yang disepakati di awal adalah yang Anda bayar. Bebas dari biaya siluman di akhir sewa.</li>
        <li><strong>Layanan Antar Jemput Fleksibel:</strong> Kami siap mengantarkan dan menjemput unit mobil di Bandara Raja Haji Fisabilillah, Pelabuhan Sri Bintan Pura, maupun hotel Anda.</li>`;
    }
    
    return `<h2 class="seo-heading">Mengapa Memilih Sewa Mobil di Zelina Transport?</h2>
    <p>Zelina Transport adalah penyedia jasa rental mobil terkemuka di Kepulauan Riau. Berikut adalah keunggulan utama layanan kami untuk menunjang kebutuhan pencarian <strong>${kw}</strong> Anda:</p>
    <ul>
        ${focusPoints}
        <li><strong>Layanan Customer Service 24 Jam:</strong> Tim admin kami siap melayani reservasi dan membantu kendala darurat Anda kapan saja selama 24 jam penuh.</li>
    </ul>`;
};

const getPrices = (item) => {
    const loc = item.location;
    return `<h2 class="seo-heading">Daftar Harga & Tarif Rental Mobil ${loc} Terupdate (${dateText})</h2>
    <p>Berikut adalah tabel estimasi harga sewa mobil harian di Zelina Transport untuk menunjang rencana perjalanan Anda. Tarif sangat fleksibel dan kompetitif:</p>
    
    <div class="table-container">
        <table class="seo-table">
            <thead>
                <tr>
                    <th>Jenis Mobil</th>
                    <th>Kapasitas</th>
                    <th>Transmisi</th>
                    <th>Harga Sewa / Hari</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Toyota New Avanza</strong></td>
                    <td>7 Kursi</td>
                    <td>Manual/Matic</td>
                    <td class="price-text">Rp 350.000</td>
                </tr>
                <tr>
                    <td><strong>Toyota Avanza Grand</strong></td>
                    <td>7 Kursi</td>
                    <td>Manual</td>
                    <td class="price-text">Rp 250.000</td>
                </tr>
                <tr>
                    <td><strong>Daihatsu All New Xenia</strong></td>
                    <td>7 Kursi</td>
                    <td>Manual/Matic</td>
                    <td class="price-text">Rp 350.000</td>
                </tr>
                <tr>
                    <td><strong>Toyota All New Veloz</strong></td>
                    <td>7 Kursi</td>
                    <td>Matic</td>
                    <td class="price-text">Rp 350.000</td>
                </tr>
                <tr>
                    <td><strong>Toyota Innova Reborn</strong></td>
                    <td>8 Kursi</td>
                    <td>Matic/Manual</td>
                    <td class="price-text">Rp 500.000</td>
                </tr>
                <tr>
                    <td><strong>Toyota Innova Zenix</strong></td>
                    <td>8 Kursi</td>
                    <td>Matic</td>
                    <td class="price-text">Rp 600.000</td>
                </tr>
                <tr>
                    <td><strong>Toyota Hiace Commuter</strong></td>
                    <td>14 Kursi</td>
                    <td>Manual</td>
                    <td class="price-text">Rp 1.200.000</td>
                </tr>
                <tr>
                    <td><strong>Toyota Fortuner / Pajero</strong></td>
                    <td>7 Kursi</td>
                    <td>Matic</td>
                    <td class="price-text">Rp 1.200.000</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p class="seo-note">* Catatan: Harga sewa di atas dapat berubah sewaktu-waktu tergantung musim liburan (peak season) dan ketersediaan armada. Tarif di atas adalah untuk sewa lepas kunci. Hubungi Customer Service kami untuk detail tarif sewa dengan driver + BBM.</p>`;
};

const getDestinations = (item) => {
    const loc = item.location;
    if (item.isBintan) {
        return `<h2 class="seo-heading">Destinasi Wisata Populer di Bintan yang Wajib Dikunjungi</h2>
        <p>Dengan sewa mobil Bintan yang nyaman, Anda bisa menjelajahi berbagai destinasi eksotis di Pulau Bintan dengan sangat mudah:</p>
        <ol>
            <li><strong>Treasure Bay Bintan (Lagoi):</strong> Kolam renang air asin terbesar di Asia Tenggara dengan beragam wahana air seru.</li>
            <li><strong>Pantai Trikora:</strong> Garis pantai panjang berpasir putih eksotis dengan formasi batu granit yang indah.</li>
            <li><strong>Gurun Pasir Busung & Danau Biru:</strong> Bekas area penambangan yang kini menjadi spot foto instagramable terpopuler di Bintan.</li>
            <li><strong>Vihara Patung Seribu Wajah:</strong> Destinasi religi Buddha yang megah dengan ratusan patung murid Buddha (Arhat) dengan ekspresi unik.</li>
        </ol>`;
    } else {
        return `<h2 class="seo-heading">Destinasi Wisata Pilihan di Tanjung Pinang</h2>
        <p>Jelajahi situs-situs bersejarah dan ikon kota Tanjung Pinang dengan armada mobil terawat kami:</p>
        <ol>
            <li><strong>Pulau Penyengat:</strong> Pusat Kerajaan Melayu Riau-Lingga yang legendaris, tempat berdirinya Masjid Raya Sultan Riau yang unik karena menggunakan campuran putih telur.</li>
            <li><strong>Gedung Gonggong:</strong> Landmark ikonik kota Tanjung Pinang yang menyerupai siput gonggong, terletak tepat di tepi laut tepi pantai Gurindam 12.</li>
            <li><strong>Vihara Ksitigarbha Bodhisattva (Patung 1000 Wajah):</strong> Menyuguhkan pemandangan ratusan patung batu dengan ekspresi wajah yang berbeda-beda.</li>
            <li><strong>Wisata Kuliner Akau Potong Lembu:</strong> Pusat kuliner malam Tanjung Pinang yang menyajikan hidangan laut (seafood) segar dan makanan khas Melayu-Tionghoa yang lezat.</li>
        </ol>`;
    }
};

const getFaq = (item) => {
    const kw = item.keyword;
    const loc = item.location;
    
    return [
        {
            q: `Berapa tarif sewa mobil di ${loc}?`,
            a: `Tarif sewa mobil sangat bervariasi mulai dari Rp 250.000 per hari untuk mobil keluarga seperti Toyota Avanza, hingga Rp 1.200.000 per hari untuk mobil berkapasitas besar seperti Toyota Hiace. Hubungi WhatsApp Zelina Transport untuk promo terupdate.`
        },
        {
            q: `Apakah syarat sewa mobil lepas kunci di Zelina Transport?`,
            a: `Syarat sewa lepas kunci cukup mudah dan praktis. Anda hanya perlu menyiapkan dokumen identitas diri seperti KTP, SIM A aktif, serta kartu identitas pendukung lainnya demi proses verifikasi cepat.`
        },
        {
            q: `Apakah bisa melayani penjemputan di bandara atau pelabuhan?`,
            a: `Tentu saja! Kami melayani jasa antar jemput (delivery & pick-up) unit langsung di Bandara Raja Haji Fisabilillah (TNJ), Pelabuhan Sri Bintan Pura, Pelabuhan Bulang Linggi Uban, maupun hotel tempat Anda menginap di wilayah Tanjung Pinang dan Bintan.`
        }
    ];
};

// HTML template compiler
const compileTemplate = (item, internalLinks) => {
    // Dynamic image assignment based on location and focus for rich aesthetics
    let imageUrl = "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"; // default car road
    if (item.isBintan) {
        if (item.focus === "lepas-kunci") {
            imageUrl = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80"; // luxury car
        } else if (item.focus === "driver") {
            imageUrl = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80"; // driving
        } else {
            imageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"; // beach/island
        }
    } else {
        if (item.focus === "lepas-kunci") {
            imageUrl = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"; // chevrolet car
        } else if (item.focus === "driver") {
            imageUrl = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80"; // driving
        }
    }

    const titleTag = `${item.keyword} Terpercaya & Harga Murah | Zelina Transport`;
    const metaDesc = `Mencari layanan ${item.keyword.toLowerCase()}? Zelina Transport menyediakan rental mobil harian, mingguan, bulanan di Tanjung Pinang & Bintan lepas kunci atau dengan supir profesional.`;
    const canonical = `https://tanjungpinangrentcar.com/blog/${item.slug}.html`;
    const waLink = `https://wa.me/6285763760841?text=Halo%20Zelina%20Transport,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(item.keyword)}%20di%20${encodeURIComponent(item.location)}.`;
    
    const schemaArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": titleTag,
        "description": metaDesc,
        "image": imageUrl,
        "author": { "@type": "Organization", "name": "Zelina Transport" },
        "publisher": { 
            "@type": "Organization", 
            "name": "Zelina Transport", 
            "logo": { "@type": "ImageObject", "url": "https://tanjungpinangrentcar.com/assets/logo.png" } 
        },
        "datePublished": dateNow,
        "dateModified": dateNow
    };
    
    const faqs = getFaq(item);
    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    };
    
    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tanjungpinangrentcar.com" },
            { "@type": "ListItem", "position": 2, "name": "Artikel", "item": "https://tanjungpinangrentcar.com/artikel.html" },
            { "@type": "ListItem", "position": 3, "name": item.keyword, "item": canonical }
        ]
    };
    
    const schemaLocalBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Zelina Transport",
        "image": "https://tanjungpinangrentcar.com/assets/logo.png",
        "telephone": "+6285763760841",
        "priceRange": "Rp250000 - Rp1800000",
        "address": { 
            "@type": "PostalAddress", 
            "streetAddress": "Batu 8 atas JL. Raja Haji Fisabilillah", 
            "addressLocality": "Tanjung Pinang", 
            "addressRegion": "Kepulauan Riau",
            "postalCode": "29125",
            "addressCountry": "ID" 
        }
    };
    
    return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titleTag}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="${item.keyword.toLowerCase()}, rental mobil bintan, sewa mobil tanjung pinang, rental mobil murah, lepas kunci, dengan supir, zelina transport">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${canonical}">
    
    <!-- Open Graph Tags -->
    <meta property="og:locale" content="id_ID">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${titleTag}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:site_name" content="Zelina Transport">
    <meta property="article:published_time" content="${dateNow}">
    <meta property="article:modified_time" content="${dateNow}">
    <meta property="og:image" content="${imageUrl}">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${titleTag}">
    <meta name="twitter:description" content="${metaDesc}">
    <meta name="twitter:image" content="${imageUrl}">
    
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Schema Structured Data -->
    <script type="application/ld+json">${JSON.stringify(schemaArticle)}</script>
    <script type="application/ld+json">${JSON.stringify(schemaFAQ)}</script>
    <script type="application/ld+json">${JSON.stringify(schemaBreadcrumb)}</script>
    <script type="application/ld+json">${JSON.stringify(schemaLocalBusiness)}</script>
    
    <style>
        :root {
            --primary: #0EA5E9;
            --primary-dark: #0284C7;
            --secondary: #F97316;
            --secondary-dark: #EA580C;
            --dark: #1F2937;
            --gray: #64748B;
            --light: #F8FAFC;
            --white: #FFFFFF;
            --border: #E2E8F0;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { 
            font-family: 'Poppins', system-ui, -apple-system, sans-serif; 
            line-height: 1.7; 
            color: var(--dark); 
            background: var(--light); 
        }
        .container { max-width: 850px; margin: 0 auto; padding: 20px; }
        header { 
            text-align: center; 
            padding: 40px 0 30px; 
            border-bottom: 1px solid var(--border); 
            margin-bottom: 30px; 
        }
        .meta-info {
            font-size: 0.9rem;
            color: var(--gray);
            margin-top: 10px;
        }
        .meta-info i { color: var(--primary); margin-right: 5px; }
        h1 { font-size: 2.3rem; color: var(--dark); line-height: 1.3; font-weight: 700; }
        .hero-img {
            width: 100%;
            height: 420px;
            object-fit: cover;
            border-radius: 16px;
            margin: 20px 0 30px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }
        h2.seo-heading { 
            font-size: 1.7rem; 
            color: var(--dark); 
            margin: 35px 0 15px; 
            font-weight: 700;
            border-left: 5px solid var(--primary);
            padding-left: 15px;
        }
        p { margin-bottom: 20px; font-size: 1.05rem; color: #374151; text-align: justify; }
        .seo-lead { font-size: 1.15rem; font-weight: 500; color: #1f2937; line-height: 1.8; }
        ul, ol { margin-bottom: 25px; padding-left: 25px; }
        li { margin-bottom: 10px; font-size: 1.05rem; color: #374151; }
        strong { color: var(--dark); }
        .table-container {
            width: 100%;
            overflow-x: auto;
            margin: 30px 0;
            border-radius: 12px;
            border: 1px solid var(--border);
            box-shadow: 0 4px 6px rgba(15, 23, 42, 0.01);
        }
        .seo-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 1rem;
        }
        .seo-table th {
            background-color: var(--dark);
            color: var(--white);
            padding: 14px 18px;
            font-weight: 600;
        }
        .seo-table td {
            padding: 14px 18px;
            border-bottom: 1px solid var(--border);
            background-color: var(--white);
        }
        .seo-table tr:last-child td { border-bottom: none; }
        .price-text {
            color: var(--secondary-dark);
            font-weight: 700;
        }
        .seo-note {
            font-size: 0.9rem;
            color: var(--gray);
            font-style: italic;
            margin-top: -15px;
            margin-bottom: 30px;
        }
        .cta-box { 
            background: linear-gradient(135deg, var(--dark) 0%, #111827 100%); 
            padding: 40px; 
            border-radius: 16px; 
            text-align: center; 
            margin: 45px 0; 
            border: 1px solid rgba(255,255,255,0.05);
            color: var(--white);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
        }
        .cta-box h3 { font-size: 1.6rem; margin-bottom: 12px; font-weight: 700; }
        .cta-box p { color: rgba(255,255,255,0.8); margin-bottom: 25px; text-align: center; font-size: 1.05rem; }
        .btn-wa { 
            display: inline-flex; 
            align-items: center;
            gap: 10px;
            background: #25d366; 
            color: #fff; 
            padding: 14px 32px; 
            text-decoration: none; 
            border-radius: 30px; 
            font-weight: 700; 
            font-size: 1.1rem;
            box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
            transition: all 0.3s ease;
        }
        .btn-wa:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(37, 211, 102, 0.5);
            background: #22c55e;
        }
        .faq-section {
            margin-top: 40px;
        }
        .faq-item { 
            background-color: var(--white);
            border: 1px solid var(--border); 
            border-radius: 12px; 
            margin-bottom: 15px; 
            padding: 20px; 
            box-shadow: 0 4px 6px rgba(15, 23, 42, 0.01);
        }
        .faq-item h3 { margin: 0 0 10px 0; font-size: 1.15rem; color: var(--dark); font-weight: 600; }
        .faq-item p { margin: 0; color: #4B5563; font-size: 1rem; }
        .related-articles { 
            background-color: var(--white); 
            padding: 30px; 
            border-radius: 16px; 
            margin-top: 50px; 
            border: 1px solid var(--border);
        }
        .related-articles h3 { margin-top: 0; color: var(--dark); margin-bottom: 20px; font-weight: 700; font-size: 1.25rem; }
        .related-articles ul { list-style: none; padding-left: 0; margin-bottom: 0; }
        .related-articles li { 
            margin-bottom: 12px; 
            padding-left: 20px; 
            position: relative; 
        }
        .related-articles li::before {
            content: "\f105";
            font-family: "Font Awesome 6 Free";
            font-weight: 900;
            position: absolute;
            left: 0;
            color: var(--primary);
        }
        .related-articles a {
            color: var(--primary-dark);
            font-weight: 500;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        .related-articles a:hover {
            color: var(--secondary);
            text-decoration: underline;
        }
        footer { 
            text-align: center; 
            padding: 40px 0; 
            margin-top: 60px; 
            border-top: 1px solid var(--border); 
            font-size: 0.95rem; 
            color: var(--gray); 
        }
        footer p { text-align: center; margin-bottom: 5px; }
        
        /* Floating WhatsApp Button */
        .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #25d366;
            color: #fff;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            z-index: 100;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .whatsapp-float:hover {
            transform: scale(1.1);
            background-color: #22c55e;
        }
        
        /* Back to Home Button */
        .back-home {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--primary-dark);
            text-decoration: none;
            font-weight: 600;
            margin-bottom: 20px;
            transition: all 0.2s ease;
        }
        .back-home:hover {
            color: var(--secondary);
            transform: translateX(-3px);
        }

        @media(max-width: 768px) { 
            h1 { font-size: 1.8rem; } 
            .hero-img { height: 260px; }
            .container { padding: 15px; } 
            .cta-box { padding: 25px 20px; }
            .btn-wa { padding: 12px 24px; font-size: 1rem; }
        }
    </style>
</head>
<body>

<div class="container">
    <a href="../index.html" class="back-home"><i class="fa-solid fa-arrow-left"></i> Kembali ke Beranda</a>
    
    <header>
        <h1>${titleTag}</h1>
        <div class="meta-info">
            <span><i class="fa-solid fa-user"></i> Oleh: Zelina Transport</span> &nbsp;|&nbsp; 
            <span><i class="fa-solid fa-calendar-days"></i> Terupdate: ${dateText}</span>
        </div>
    </header>

    <img src="${imageUrl}" alt="${item.keyword}" class="hero-img" loading="lazy">

    <article>
        ${getIntro(item)}
        
        ${getWhyUs(item)}
        
        ${getPrices(item)}

        <div class="cta-box">
            <h3>Pesan Layanan Anda Sekarang</h3>
            <p>Konsultasikan kebutuhan perjalanan Anda, jenis mobil, durasi sewa, serta dapatkan penawaran harga sewa mobil terbaik di Tanjung Pinang dan Bintan hari ini!</p>
            <a href="${waLink}" class="btn-wa" target="_blank" rel="noopener">
                <i class="fa-brands fa-whatsapp"></i> Chat WhatsApp CS (24 Jam Online)
            </a>
        </div>

        ${getDestinations(item)}

        <h2 class="seo-heading faq-section">Pertanyaan yang Sering Diajukan (FAQ)</h2>
        ${faqs.map(f => `
        <div class="faq-item">
            <h3>${f.q}</h3>
            <p>${f.a}</p>
        </div>
        `).join('')}

        <div class="related-articles">
            <h3>Rekomendasi Layanan & Artikel Lainnya</h3>
            <ul>
                ${internalLinks.map(l => `<li><a href="${l.slug}.html">${l.keyword} Terbaik</a></li>`).join('')}
            </ul>
        </div>
    </article>

    <footer>
        <p>&copy; ${new Date().getFullYear()} Zelina Transport. All Rights Reserved.</p>
        <p>Batu 8 atas JL. Raja Haji Fisabilillah, Kota Tanjung Pinang, Kepulauan Riau</p>
    </footer>
</div>

<a href="${waLink}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Hubungi Kami Via WhatsApp">
    <i class="fa-brands fa-whatsapp"></i>
</a>

</body>
</html>`;
};

// Generate articles
targetArticles.forEach(item => {
    // Select other articles for internal linking
    const otherArticles = targetArticles.filter(a => a.slug !== item.slug);
    // Shuffle or slice to get 4 links
    const internalLinks = otherArticles.slice(0, 4);
    
    const htmlContent = compileTemplate(item, internalLinks);
    const filePath = path.join(blogDir, `${item.slug}.html`);
    
    fs.writeFileSync(filePath, htmlContent, 'utf-8');
    console.log(`Generated: blog/${item.slug}.html`);
});

console.log("\nAuto SEO Articles generation completed!");

// Now run the update_artikel.js script automatically
console.log("\nRunning update_artikel.js to sync homepage and article list...");
require('./update_artikel.js');
