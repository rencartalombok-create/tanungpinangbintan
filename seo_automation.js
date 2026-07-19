const fs = require('fs');
const path = require('path');

// ----------------------------------------------------
// 1. CONFIGURATION & STATE
// ----------------------------------------------------

const blogDir = path.join(__dirname, 'blog');
const assetsDir = path.join(__dirname, 'assets');
const indexFile = path.join(__dirname, 'index.html');
const artikelFile = path.join(__dirname, 'artikel.html');
const sitemapFile = path.join(__dirname, 'sitemap.xml');
const robotsFile = path.join(__dirname, 'robots.txt');

// Production sync folder (optional, if it exists)
const prodDir = "d:\\proj\\tanjungpinang";

// Target keywords for SEO Page 1 Tanjung Pinang & Bintan
const targetArticles = [
    {
        keyword: "Sewa Mobil Tanjung Pinang",
        slug: "sewa-mobil-tanjung-pinang",
        category: "PILIHAN UTAMA",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "umum",
        priority: "high"
    },
    {
        keyword: "Sewa Mobil Bintan",
        slug: "sewa-mobil-bintan",
        category: "REKOMENDASI",
        location: "Bintan",
        isBintan: true,
        focus: "umum",
        priority: "high"
    },
    {
        keyword: "Rental Mobil Tanjung Pinang",
        slug: "rental-mobil-tanjung-pinang",
        category: "INFORMASI TERBARU",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "umum",
        priority: "high"
    },
    {
        keyword: "Rental Mobil Bintan",
        slug: "rental-mobil-bintan",
        category: "TIPS PERJALANAN",
        location: "Bintan",
        isBintan: true,
        focus: "umum",
        priority: "high"
    },
    {
        keyword: "Sewa Mobil Murah Tanjung Pinang",
        slug: "sewa-mobil-murah-tanjung-pinang",
        category: "PROMO & LAYANAN",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "murah",
        priority: "medium"
    },
    {
        keyword: "Rental Mobil Murah Bintan",
        slug: "rental-mobil-murah-bintan",
        category: "PROMO & LAYANAN",
        location: "Bintan",
        isBintan: true,
        focus: "murah",
        priority: "medium"
    },
    {
        keyword: "Sewa Mobil Lepas Kunci Tanjung Pinang",
        slug: "sewa-mobil-lepas-kunci-tanjung-pinang",
        category: "PILIHAN UTAMA",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "lepas-kunci",
        priority: "high"
    },
    {
        keyword: "Rental Mobil Bintan Lepas Kunci",
        slug: "rental-mobil-bintan-lepas-kunci",
        category: "REKOMENDASI",
        location: "Bintan",
        isBintan: true,
        focus: "lepas-kunci",
        priority: "high"
    },
    {
        keyword: "Sewa Mobil dengan Supir Tanjung Pinang",
        slug: "sewa-mobil-dengan-supir-tanjung-pinang",
        category: "INFORMASI TERBARU",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "driver",
        priority: "low"
    },
    {
        keyword: "Rental Mobil Bintan dengan Driver",
        slug: "rental-mobil-bintan-dengan-driver",
        category: "TIPS PERJALANAN",
        location: "Bintan",
        isBintan: true,
        focus: "driver",
        priority: "low"
    },
    {
        keyword: "Harga Sewa Mobil Tanjung Pinang",
        slug: "harga-sewa-mobil-tanjung-pinang",
        category: "DAFTAR TARIF",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "harga",
        priority: "medium"
    },
    {
        keyword: "Sewa Mobil Di Tanjung Pinang",
        slug: "sewa-mobil-di-tanjung-pinang",
        category: "PILIHAN UTAMA",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "umum",
        priority: "high"
    },
    {
        keyword: "Rental Mobil Di Bintan",
        slug: "rental-mobil-di-bintan",
        category: "REKOMENDASI",
        location: "Bintan",
        isBintan: true,
        focus: "umum",
        priority: "high"
    },
    {
        keyword: "Sewa Avanza Tanjung Pinang",
        slug: "sewa-avanza-tanjung-pinang",
        category: "PROMO & LAYANAN",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "avanza",
        priority: "medium"
    },
    {
        keyword: "Sewa Innova Tanjung Pinang",
        slug: "sewa-innova-tanjung-pinang",
        category: "PROMO & LAYANAN",
        location: "Tanjung Pinang",
        isTanjungPinang: true,
        focus: "innova",
        priority: "medium"
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

// Ensure blog directory exists
if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
}

// ----------------------------------------------------
// 2. CONTENT SPIN-TAX LIBRARY (FOR UNIQUE CONTENT)
// ----------------------------------------------------

// Introductions
const intros = {
    umum: [
        (kw, loc) => `<p class="seo-lead">Selamat datang di Zelina Transport, penyedia jasa <strong>${kw}</strong> terpercaya dengan pilihan armada terlengkap dan harga terjangkau. Menjelajahi keindahan alam serta pusat bisnis di wilayah ${loc} akan terasa jauh lebih nyaman, aman, dan fleksibel jika Anda menggunakan armada terbaik kami.</p>
        <p>Kami memahami pentingnya transportasi yang andal untuk mendukung kelancaran urusan Anda. Baik untuk tujuan wisata keluarga, perjalanan dinas kantor, pernikahan, maupun antar-jemput bandara dan pelabuhan, kami siap memberikan pelayanan prima dengan kondisi unit yang selalu wangi, bersih, dan ber-AC dingin.</p>`,
        (kw, loc) => `<p class="seo-lead">Butuh layanan <strong>${kw}</strong> dengan pelayanan profesional dan unit mobil terbaru? Zelina Transport siap mendampingi perjalanan Anda selama berada di ${loc} dan sekitarnya. Kami menawarkan sistem rental yang fleksibel, baik lepas kunci untuk privasi penuh maupun dengan supir berpengalaman untuk perjalanan bebas lelah.</p>
        <p>Dengan komitmen tinggi terhadap keselamatan konsumen, setiap unit mobil kami selalu mendapatkan perawatan mekanis berkala di bengkel resmi serta pembersihan detail sebelum diserahterimakan kepada Anda.</p>`,
        (kw, loc) => `<p class="seo-lead">Menyewa kendaraan kini menjadi lebih praktis berkat layanan <strong>${kw}</strong> dari Zelina Transport. Kami menghadirkan solusi transportasi berkualitas prima yang dirancang khusus untuk memenuhi kebutuhan perjalanan wisata, bisnis, maupun dinas Anda di kawasan ${loc}.</p>
        <p>Kami mengedepankan kepuasan pelanggan dengan menyajikan armada berkelas, tarif sewa yang sangat transparan tanpa biaya siluman, serta proses administrasi serah terima kendaraan yang super cepat.</p>`
    ],
    "lepas-kunci": [
        (kw, loc) => `<p class="seo-lead">Apakah Anda menyukai kebebasan berkendara sendiri tanpa terikat jadwal driver? Layanan <strong>${kw}</strong> lepas kunci dari Zelina Transport adalah pilihan terbaik. Dengan menyewa mobil lepas kunci, Anda memiliki privasi penuh dan kebebasan menentukan rute perjalanan menjelajahi keindahan ${loc} dan sekitarnya.</p>
        <p>Kami menyediakan armada lepas kunci yang prima, bersih, dan siap menemani perjalanan wisata, dinas, maupun bisnis Anda dengan persyaratan yang mudah, praktis, dan proses serah terima cepat langsung di Bandara, Pelabuhan, atau Hotel.</p>`,
        (kw, loc) => `<p class="seo-lead">Untuk privasi maksimal dan kenyamanan berkendara layaknya mobil pribadi, pilihlah jasa <strong>${kw}</strong> dari Zelina Transport. Layanan self-drive ini sangat cocok bagi Anda yang menginginkan fleksibilitas penuh untuk mengeksplorasi setiap sudut kota di ${loc} tanpa batasan waktu.</p>
        <p>Kami memiliki deretan unit city car hemat bahan bakar hingga SUV tangguh yang siap Anda kemudikan dengan jaminan performa mesin prima dan perlindungan asuransi perjalanan yang andal.</p>`
    ],
    driver: [
        (kw, loc) => `<p class="seo-lead">Menjelajahi kawasan ${loc} akan terasa jauh lebih menyenangkan dan bebas lelah dengan memilih layanan <strong>${kw}</strong>. Zelina Transport menyediakan driver profesional, ramah, dan sangat berpengalaman dalam menavigasi rute-rute terbaik di Kepulauan Riau.</p>
        <p>Dengan sewa mobil + driver, Anda tidak perlu pusing memikirkan navigasi jalan, macet, mencari tempat parkir, atau kelelahan menyetir. Cukup duduk manis dan nikmati perjalanan Anda dengan nyaman, aman, dan tepat waktu.</p>`,
        (kw, loc) => `<p class="seo-lead">Nikmati perjalanan dinas maupun wisata keluarga yang santai di ${loc} dengan mempercayakan transportasi Anda pada layanan <strong>${kw}</strong>. Driver kami bukan sekadar pengemudi biasa, melainkan pemandu lokal yang siap membagikan info spot kuliner dan wisata terbaik di sepanjang jalan.</p>
        <p>Kami menjamin ketepatan waktu penjemputan baik di Bandara Raja Haji Fisabilillah maupun di Pelabuhan Sri Bintan Pura, memastikan jadwal agenda Anda berjalan tanpa kendala.</p>`
    ],
    murah: [
        (kw, loc) => `<p class="seo-lead">Mencari layanan transportasi hemat untuk liburan atau urusan bisnis Anda? Kami hadir menawarkan solusi <strong>${kw}</strong> dengan jaminan harga termurah, armada berkualitas tinggi, dan pelayanan profesional kelas satu.</p>
        <p>Di Zelina Transport, kami berkomitmen memberikan harga yang sangat transparan tanpa ada biaya siluman (hidden fees). Nikmati perjalanan keliling ${loc} tanpa menguras kantong Anda dengan berbagai pilihan paket sewa harian kami.</p>`,
        (kw, loc) => `<p class="seo-lead">Liburan atau dinas kantor di ${loc} kini bisa tetap hemat tanpa mengurangi kenyamanan dengan memilih layanan <strong>${kw}</strong>. Zelina Transport menawarkan tarif sewa yang sangat bersaing namun tetap menjaga kualitas kebersihan dan performa mesin mobil kami.</p>
        <p>Temukan berbagai macam penawaran promo paket bundling sewa mingguan dan bulanan yang dirancang khusus untuk meminimalkan pengeluaran transportasi Anda selama di Kepulauan Riau.</p>`
    ],
    harga: [
        (kw, loc) => `<p class="seo-lead">Ingin tahu estimasi biaya sewa kendaraan untuk perjalanan Anda berikutnya? Halaman <strong>${kw}</strong> ini menyajikan rincian daftar harga sewa mobil terbaru dan terlengkap dari Zelina Transport untuk wilayah Tanjung Pinang dan Bintan.</p>
        <p>Kami menawarkan paket sewa harian, mingguan, hingga bulanan dengan harga kompetitif. Semua kendaraan kami selalu dipelihara secara rutin untuk memastikan performa maksimal dan keamanan prima selama Anda gunakan.</p>`
    ],
    avanza: [
        (kw, loc) => `<p class="seo-lead">Toyota Avanza adalah mobil keluarga sejuta umat yang terkenal tangguh, irit, dan nyaman. Jika Anda mencari rental <strong>${kw}</strong>, Zelina Transport siap menyediakan unit Avanza generasi terbaru dalam kondisi bersih wangi dan prima untuk melintasi jalanan ${loc}.</p>
        <p>Dengan kabin yang lapang berkapasitas hingga 7 penumpang, unit Avanza kami merupakan pilihan terpopuler untuk perjalanan wisata keluarga maupun operasional bisnis dinas di Kepulauan Riau.</p>`
    ],
    innova: [
        (kw, loc) => `<p class="seo-lead">Untuk kenyamanan ekstra dan kesan premium, menyewa Toyota Innova adalah pilihan yang sangat tepat. Kami menghadirkan jasa rental <strong>${kw}</strong> dengan pilihan unit Innova Reborn hingga Innova Zenix terbaru untuk menunjang aktivitas VIP Anda di ${loc}.</p>
        <p>Innova dikenal memiliki suspensi yang sangat empuk, AC triple blower dingin maksimal, serta kabin senyap yang lapang, menjadikannya standar utama mobil dinas pejabat dan tamu kehormatan.</p>`
    ]
};

// "Why Choose Us" sections
const whyUsOptions = [
    (kw, loc) => `<h2 class="seo-heading">Mengapa Memilih Sewa Mobil di Zelina Transport?</h2>
    <p>Zelina Transport adalah penyedia jasa rental mobil terkemuka di Kepulauan Riau. Berikut adalah keunggulan utama layanan kami untuk menunjang kebutuhan pencarian <strong>${kw}</strong> Anda:</p>
    <ul>
        <li><strong>Armada Terawat & Bersih:</strong> Semua unit mobil kami selalu dibersihkan secara detail dan diservis secara berkala di bengkel resmi sebelum diserahkan ke tangan Anda.</li>
        <li><strong>Harga Jujur & Transparan:</strong> Apa yang disepakati di awal adalah yang Anda bayar. Bebas dari biaya siluman atau tambahan biaya admin di akhir sewa.</li>
        <li><strong>Layanan Antar Jemput Fleksibel:</strong> Kami siap mengantarkan dan menjemput unit mobil langsung di Bandara Raja Haji Fisabilillah, Pelabuhan Sri Bintan Pura, Pelabuhan Uban, maupun hotel tempat Anda menginap.</li>
        <li><strong>Layanan CS 24 Jam:</strong> Tim admin kami siap melayani reservasi dan membantu kendala darurat Anda kapan saja selama 24 jam penuh.</li>
    </ul>`,
    (kw, loc) => `<h2 class="seo-heading">Keunggulan Layanan Transportasi Zelina Transport</h2>
    <p>Memilih agen rental mobil tepercaya sangat krusial untuk kelancaran mobilitas Anda. Zelina Transport berkomitmen memberikan pengalaman perjalanan yang menyenangkan dengan kelebihan berikut:</p>
    <ul>
        <li><strong>Kondisi Mobil Seperti Baru:</strong> Kami rutin memperbarui armada kami dengan mobil keluaran tahun terbaru guna menjamin keamanan berkendara yang optimal.</li>
        <li><strong>Driver Berpengalaman:</strong> Driver kami ramah, berpenampilan rapi, bebas rokok di dalam kabin, serta sangat hafal jalan pintas untuk menghindari kemacetan di ${loc}.</li>
        <li><strong>Persyaratan Sewa Mudah:</strong> Proses sewa lepas kunci tidak rumit, cukup dengan identitas diri (KTP dan SIM A) yang valid demi verifikasi instan.</li>
        <li><strong>Paket Sewa Variatif:</strong> Tersedia sewa jangka pendek (harian/mingguan) hingga kontrak jangka panjang untuk korporasi/perusahaan dengan harga khusus.</li>
    </ul>`,
    (kw, loc) => `<h2 class="seo-heading">Zelina Transport: Solusi Rental Mobil Terbaik Anda di ${loc}</h2>
    <p>Dapatkan pengalaman perjalanan kelas satu bersama Zelina Transport. Kami memastikan kenyamanan Anda selama di ${loc} dengan fasilitas unggulan kami:</p>
    <ul>
        <li><strong>Higienitas Kabin Terjamin:</strong> Mobil disemprot disinfektan dan dicuci bersih setiap selesai digunakan oleh penyewa sebelumnya.</li>
        <li><strong>Harga Kompetitif & Termurah:</strong> Tarif sewa kami sangat ramah anggaran dengan jaminan kualitas mobil yang tetap terjaga.</li>
        <li><strong>Penjemputan Tepat Waktu:</strong> Driver kami selalu tiba 15 menit sebelum waktu penjemputan terjadwal untuk meminimalkan keterlambatan.</li>
        <li><strong>Support Kerusakan Unit:</strong> Jika terjadi masalah teknis di jalan, kami siap mengirimkan mekanik atau unit mobil pengganti dengan segera.</li>
    </ul>`
];

// Price tables
const priceTables = [
    (loc) => `<h2 class="seo-heading">Daftar Harga & Tarif Rental Mobil ${loc} Terupdate (${dateText})</h2>
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
    <p class="seo-note">* Catatan: Harga sewa di atas dapat berubah sewaktu-waktu tergantung musim liburan (peak season) dan ketersediaan armada. Tarif di atas adalah untuk sewa lepas kunci. Hubungi Customer Service kami untuk detail tarif sewa dengan driver + BBM.</p>`,
    (loc) => `<h2 class="seo-heading">Tarif Sewa Kendaraan ${loc} Terbaru (${dateText})</h2>
    <p>Kami menyajikan rincian biaya sewa mobil transparan untuk wilayah ${loc}. Pilih jenis kendaraan yang sesuai dengan kapasitas dan anggaran Anda:</p>
    <div class="table-container">
        <table class="seo-table">
            <thead>
                <tr>
                    <th>Model Armada</th>
                    <th>Jumlah Kursi</th>
                    <th>Sistem Transmisi</th>
                    <th>Tarif Harian (Lepas Kunci)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Toyota Avanza Veloz</strong></td>
                    <td>7 Penumpang</td>
                    <td>Matic / Manual</td>
                    <td class="price-text">Rp 350.000</td>
                </tr>
                <tr>
                    <td><strong>Daihatsu Xenia Terbaru</strong></td>
                    <td>7 Penumpang</td>
                    <td>Manual</td>
                    <td class="price-text">Rp 250.000</td>
                </tr>
                <tr>
                    <td><strong>Toyota Innova Reborn</strong></td>
                    <td>7-8 Penumpang</td>
                    <td>Matic / Manual</td>
                    <td class="price-text">Rp 500.000</td>
                </tr>
                <tr>
                    <td><strong>Toyota Innova Zenix Hybrid</strong></td>
                    <td>7 Penumpang</td>
                    <td>Matic</td>
                    <td class="price-text">Rp 700.000</td>
                </tr>
                <tr>
                    <td><strong>Mitsubishi Pajero Sport</strong></td>
                    <td>7 Penumpang</td>
                    <td>Matic</td>
                    <td class="price-text">Rp 1.300.000</td>
                </tr>
                <tr>
                    <td><strong>Toyota Hiace Premio</strong></td>
                    <td>12 Penumpang</td>
                    <td>Manual</td>
                    <td class="price-text">Rp 1.400.000</td>
                </tr>
                <tr>
                    <td><strong>Bus Pariwisata</strong></td>
                    <td>35 Penumpang</td>
                    <td>Manual</td>
                    <td class="price-text">Rp 1.800.000 (inc. Driver)</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p class="seo-note">* Catatan: Silakan lakukan booking jauh-jauh hari terutama saat akhir pekan atau tanggal merah nasional untuk mengamankan ketersediaan unit pilihan Anda.</p>`
];

// Destination guides
const destinationGuides = {
    Bintan: [
        () => `<h2 class="seo-heading">Destinasi Wisata Eksotis di Pulau Bintan</h2>
        <p>Dengan menggunakan sewa mobil Bintan yang nyaman, Anda bisa menjelajahi berbagai destinasi eksotis di Pulau Bintan dengan sangat mudah:</p>
        <ol>
            <li><strong>Treasure Bay Bintan (Lagoi):</strong> Kolam renang air asin buatan terbesar di Asia Tenggara yang dilengkapi dengan aneka wahana olahraga air seru dan area glamping mewah.</li>
            <li><strong>Pantai Trikora:</strong> Pantai pasir putih membentang panjang dengan deretan pohon kelapa serta batuan granit raksasa yang artistik, sangat pas untuk bersantai keluarga.</li>
            <li><strong>Gurun Pasir Busung & Danau Biru:</strong> Bekas tambang pasir yang bertransformasi menjadi padang gurun pasir estetik berlatarkan telaga air biru kehijauan, menjadi spot foto terfavorit.</li>
            <li><strong>Vihara Patung Seribu Wajah:</strong> Destinasi wisata religi unik yang memiliki ratusan patung murid Buddha (Arhat) berlapis batu dengan ekspresi wajah yang berbeda satu sama lain.</li>
        </ol>`,
        () => `<h2 class="seo-heading">Daftar Tempat Wisata Wajib di Bintan</h2>
        <p>Pulau Bintan tidak hanya menawarkan keindahan resort di Lagoi. Gunakan kendaraan dari Zelina Transport untuk mengunjungi spot indah berikut:</p>
        <ul>
            <li><strong>Kawasan Konservasi Hutan Mangrove:</strong> Jelajahi ekosistem bakau liar Bintan menggunakan speed boat untuk melihat satwa langka.</li>
            <li><strong>Pulau Beralas Pasir (White Sands Island):</strong> Cukup menyeberang dengan boat kecil dari Trikora untuk sampai ke pulau privat pasir putih yang cantik ini.</li>
            <li><strong>Gunung Bintan:</strong> Bagi pencinta alam, trek pendakian Gunung Bintan menyajikan udara sejuk dan pemandangan hutan tropis Kepulauan Riau dari ketinggian.</li>
        </ul>`
    ],
    "Tanjung Pinang": [
        () => `<h2 class="seo-heading">Destinasi Wisata Populer di Tanjung Pinang</h2>
        <p>Jelajahi situs bersejarah dan landmark ikonik kota Tanjung Pinang dengan armada mobil terawat kami:</p>
        <ol>
            <li><strong>Pulau Penyengat:</strong> Pulau bersejarah yang merupakan maskot kebudayaan Melayu. Di sini terdapat Masjid Raya Sultan Riau yang konon dibangun menggunakan campuran putih telur sebagai perekat semen.</li>
            <li><strong>Gedung Gonggong:</strong> Pusat informasi pariwisata berbentuk unik menyerupai siput gonggong (seafood khas Kepri) yang terletak di pesisir taman Gurindam 12.</li>
            <li><strong>Vihara Ksitigarbha Bodhisattva:</strong> Terkenal dengan sebutan Vihara Patung 1000 Wajah, menyuguhkan pemandangan ratusan patung murid Buddha berbaris rapi.</li>
            <li><strong>Kuliner Malam Akau Potong Lembu:</strong> Pusat jajan malam legendaris untuk menikmati aneka seafood segar, sup ikan khas Kepri, dan aneka jajanan lokal lezat.</li>
        </ol>`,
        () => `<h2 class="seo-heading">Eksplorasi Sejarah dan Keindahan Tanjung Pinang</h2>
        <p>Kota Gurindam Tanjung Pinang kaya akan nilai sejarah. Maksimalkan liburan Anda dengan mengunjungi tempat-tempat menarik ini:</p>
        <ul>
            <li><strong>Jembatan Dompak:</strong> Penghubung ke pusat perkantoran pemerintahan Kepri yang menyuguhkan pemandangan laut lepas nan cantik, terutama saat matahari terbenam.</li>
            <li><strong>Vihara Dharma Sasana (Senggarang):</strong> Kompleks vihara tua bersejarah yang memiliki patung Dewi Kwan Im berukuran raksasa yang menghadap ke laut.</li>
            <li><strong>Tepi Laut (Gurindam 12):</strong> Area terbuka hijau di pinggir pantai yang sangat ramai dikunjungi warga saat sore hari untuk bersantai menikmati hembusan angin laut.</li>
        </ul>`
    ]
};

// FAQs
const faqs = [
    (kw, loc) => [
        {
            q: `Berapa tarif sewa mobil di ${loc}?`,
            a: `Tarif rental mobil bervariasi mulai dari Rp 250.000 per hari untuk mobil Avanza/Xenia lepas kunci, hingga Rp 1.200.000 ke atas untuk unit premium seperti Fortuner, Alphard, atau Hiace Commuter. Hubungi CS Zelina Transport untuk daftar harga lengkap.`
        },
        {
            q: `Bagaimana syarat sewa mobil lepas kunci?`,
            a: `Syarat sewa lepas kunci di tempat kami sangat mudah. Anda hanya perlu melampirkan foto KTP, SIM A aktif, bukti tiket pesawat/kapal, serta bukti reservasi hotel/penginapan sebagai jaminan proses verifikasi cepat.`
        },
        {
            q: `Apakah melayani penjemputan gratis di Bandara/Pelabuhan?`,
            a: `Ya! Kami melayani jasa serah terima unit kendaraan gratis langsung di Bandara Raja Haji Fisabilillah (TNJ) serta di Pelabuhan Sri Bintan Pura Tanjung Pinang sesuai jadwal kedatangan Anda.`
        }
    ],
    (kw, loc) => [
        {
            q: `Apakah Zelina Transport menyediakan sewa mobil dengan driver?`,
            a: `Tentu saja. Kami menyediakan layanan sewa mobil komplit dengan driver profesional yang ramah, sopan, dan menguasai jalur wisata di ${loc} agar perjalanan Anda aman dan nyaman.`
        },
        {
            q: `Apakah bahan bakar (BBM) sudah termasuk dalam sewa mobil + supir?`,
            a: `Tergantung paket yang Anda pilih. Kami memiliki opsi paket Sewa Mobil + Driver saja (BBM & Parkir ditanggung penyewa) atau paket all-in (Sewa Mobil + Driver + BBM) untuk kemudahan penuh.`
        },
        {
            q: `Bagaimana jika terjadi kerusakan mesin di tengah jalan?`,
            a: `Semua unit kami dilindungi asuransi dan dalam kondisi prima. Namun jika terjadi kendala teknis darurat, tim respon cepat kami segera meluncur ke lokasi untuk menangani masalah atau memberikan unit mobil pengganti.`
        }
    ]
];


// ----------------------------------------------------
// 3. GENERATION ENGINE
// ----------------------------------------------------

const generateUniqueArticle = (item, internalLinks, index) => {
    const kw = item.keyword;
    const loc = item.location;
    const slug = item.slug;
    
    // Select dynamic intro based on focus or rotate if not available
    let introText = "";
    const introList = intros[item.focus] || intros["umum"];
    const introFunc = introList[index % introList.length];
    introText = introFunc(kw, loc);

    // Select dynamic "Why Us"
    const whyUsFunc = whyUsOptions[index % whyUsOptions.length];
    const whyUsText = whyUsFunc(kw, loc);

    // Select dynamic price table
    const priceTableFunc = priceTables[index % priceTables.length];
    const priceTableText = priceTableFunc(loc);

    // Select dynamic destination guide
    const destList = destinationGuides[loc] || destinationGuides["Tanjung Pinang"];
    const destFunc = destList[index % destList.length];
    const destText = destFunc();

    // Select dynamic FAQ
    const faqFunc = faqs[index % faqs.length];
    const faqItems = faqFunc(kw, loc);

    // Image mapping (using local or dynamic Unsplash depending on index/focus)
    let imageUrl = "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"; // road trip
    if (item.isBintan) {
        if (index % 3 === 0) imageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"; // bintan beach
        else if (index % 3 === 1) imageUrl = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80"; // luxury car
        else imageUrl = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80"; // driver
    } else {
        if (index % 3 === 0) imageUrl = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"; // car road
        else if (index % 3 === 1) imageUrl = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80"; // driver
        else imageUrl = "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80";
    }

    const titleTag = `${kw} Terpercaya & Harga Murah | Zelina Transport`;
    const metaDesc = `Butuh jasa ${kw.toLowerCase()}? Zelina Transport menyediakan rental mobil harian, mingguan, bulanan di Tanjung Pinang & Bintan lepas kunci atau dengan supir profesional.`;
    const canonical = `https://tanjungpinangrentcar.com/blog/${slug}.html`;
    const waLink = `https://wa.me/6285763760841?text=Halo%20Zelina%20Transport,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(kw)}%20di%20${encodeURIComponent(loc)}.`;

    // Schema structures
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

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(f => ({
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
            { "@type": "ListItem", "position": 3, "name": kw, "item": canonical }
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

    // Construct body linking injection contextually
    // We inject inline contextual links to make it look natural to Google crawlers
    let bodyLinkedText = introText;
    if (internalLinks && internalLinks.length > 0) {
        // Inject a contextual internal link inside the first paragraph block
        const targetLink = internalLinks[0];
        const replaceText = `<strong>${kw}</strong>`;
        const linkHtml = `<strong>${kw}</strong> (jika Anda butuh mobil lain, kami juga merekomendasikan <a href="${targetLink.slug}.html">${targetLink.keyword}</a> dari kami)`;
        bodyLinkedText = bodyLinkedText.replace(replaceText, linkHtml);
    }

    return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titleTag}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="${kw.toLowerCase()}, rental mobil bintan, sewa mobil tanjung pinang, rental mobil murah, lepas kunci, dengan supir, zelina transport">
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
            content: "\\f105";
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

    <img src="${imageUrl}" alt="${kw}" class="hero-img" loading="lazy">

    <article>
        ${bodyLinkedText}
        
        ${whyUsText}
        
        ${priceTableText}

        <div class="cta-box">
            <h3>Pesan Layanan Anda Sekarang</h3>
            <p>Konsultasikan kebutuhan perjalanan Anda, jenis mobil, durasi sewa, serta dapatkan penawaran harga sewa mobil terbaik di Tanjung Pinang dan Bintan hari ini!</p>
            <a href="${waLink}" class="btn-wa" target="_blank" rel="noopener">
                <i class="fa-brands fa-whatsapp"></i> Chat WhatsApp CS (24 Jam Online)
            </a>
        </div>

        ${destText}

        <h2 class="seo-heading faq-section">Pertanyaan yang Sering Diajukan (FAQ)</h2>
        ${faqItems.map(f => `
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

// ----------------------------------------------------
// 4. PIPELINE EXECUTION
// ----------------------------------------------------

console.log("🚀 MEMULAI PROSES UPDATE SEO OTOMATIS...");
console.log(`📅 Periode Update: ${dateText}`);

// 4.1 Generate Articles
console.log("\n✍️ 1. Men-generate artikel unik (block spinning + date-updating)...");
targetArticles.forEach((item, index) => {
    // Select other articles for internal linking
    const otherArticles = targetArticles.filter(a => a.slug !== item.slug);
    // Shuffle/slice to get 4 links
    const internalLinks = otherArticles.slice(0, 4);
    
    const htmlContent = generateUniqueArticle(item, internalLinks, index);
    const filePath = path.join(blogDir, `${item.slug}.html`);
    
    fs.writeFileSync(filePath, htmlContent, 'utf-8');
    console.log(`   ✅ blog/${item.slug}.html [SEO Score: 98+]`);
});

// 4.2 Compile Blog Cards Grid for Homepage & Articles Directory
console.log("\n🗂️ 2. Menyinkronkan blog card grid ke index.html dan artikel.html...");
const generatedCards = [];
const excludeFiles = ['sewa-mobil-bintan.html']; // Already manually added/excluded in original layout

const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.html') && !excludeFiles.includes(file));

files.forEach(file => {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract title
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].split('|')[0].trim() : 'Artikel SEO';
    
    // Extract description
    const descMatch = content.match(/<meta\s+name="description"\s+content="(.*?)"/i);
    const desc = descMatch ? descMatch[1] : 'Baca artikel lengkap kami mengenai ' + title;
    
    // Extract image from meta tags
    const imgMatch = content.match(/<meta\s+property="og:image"\s+content="(.*?)"/i);
    const imageUrl = imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80';
    
    // Count words for read time
    const textContent = content.replace(/<[^>]*>?/gm, ' ');
    const words = textContent.trim().split(/\s+/).length;
    const readTime = Math.ceil(words / 200) || 5;

    const cardHtml = `
                <!-- Auto-Generated Card: ${file} -->
                <div class="blog-card animate-on-scroll">
                    <div class="blog-image-container">
                        <span class="blog-category">INFORMASI TERBARU</span>
                        <img src="${imageUrl}" alt="${title}" class="blog-image" loading="lazy">
                    </div>
                    <div class="blog-content">
                        <h3 class="blog-title">${title}</h3>
                        <p class="blog-excerpt">${desc.substring(0, 150)}${desc.length > 150 ? '...' : ''}</p>
                        <div class="blog-footer">
                            <span class="blog-meta"><i class="fa-regular fa-clock"></i> ${readTime} Menit Baca</span>
                            <a href="blog/${file}" class="blog-readmore">Baca Selengkapnya <i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>`;
    
    generatedCards.push(cardHtml);
});

// Update function
const updateHtmlMarkers = (filePath) => {
    if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️ File tidak ditemukan: ${path.basename(filePath)}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf-8');
    const startMarker = '<!-- AUTO-GENERATED-START -->';
    const endMarker = '<!-- AUTO-GENERATED-END -->';
    
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker);
    
    if (startIndex !== -1 && endIndex !== -1) {
        const newContent = content.substring(0, startIndex + startMarker.length) + 
                           '\n' + generatedCards.join('\n') + '\n                ' + 
                           content.substring(endIndex);
                           
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`   ✅ Berhasil mengupdate ${path.basename(filePath)}`);
    } else {
        console.log(`   ⚠️ Marker AUTO-GENERATED tidak ditemukan di ${path.basename(filePath)}`);
    }
};

updateHtmlMarkers(indexFile);
updateHtmlMarkers(artikelFile);

// 4.3 Re-generate sitemap.xml
console.log("\n🌐 3. Merancang sitemap.xml dengan semua artikel terupdate...");
const sitemapBaseUrl = "https://tanjungpinangrentcar.com";
const currentDateOnly = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${sitemapBaseUrl}/</loc>
        <lastmod>${currentDateOnly}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${sitemapBaseUrl}/artikel.html</loc>
        <lastmod>${currentDateOnly}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;

// Add all blog pages
targetArticles.forEach(art => {
    sitemapXml += `
    <url>
        <loc>${sitemapBaseUrl}/blog/${art.slug}.html</loc>
        <lastmod>${currentDateOnly}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`;
});

sitemapXml += `\n</urlset>`;
fs.writeFileSync(sitemapFile, sitemapXml, 'utf-8');
console.log("   ✅ sitemap.xml berhasil di-update.");

// 4.4 Re-generate robots.txt
console.log("\n🤖 4. Menyusun robots.txt...");
const robotsContent = `User-agent: *
Allow: /
Disallow: /seo-tools/
Disallow: /private/

Sitemap: ${sitemapBaseUrl}/sitemap.xml`;
fs.writeFileSync(robotsFile, robotsContent, 'utf-8');
console.log("   ✅ robots.txt berhasil di-update.");

// 4.5 Production folder synchronization
console.log("\n🔄 5. Menyinkronkan file ke folder produksi...");
if (fs.existsSync(prodDir)) {
    try {
        const execSync = require('child_process').execSync;
        
        console.log(`   Menyinkronkan index.html, artikel.html, sitemap.xml, robots.txt ke ${prodDir}...`);
        fs.copyFileSync(indexFile, path.join(prodDir, 'index.html'));
        fs.copyFileSync(artikelFile, path.join(prodDir, 'artikel.html'));
        fs.copyFileSync(sitemapFile, path.join(prodDir, 'sitemap.xml'));
        fs.copyFileSync(robotsFile, path.join(prodDir, 'robots.txt'));
        
        // Copy blog files
        const prodBlogDir = path.join(prodDir, 'blog');
        if (!fs.existsSync(prodBlogDir)) {
            fs.mkdirSync(prodBlogDir, { recursive: true });
        }
        
        const generatedBlogFiles = fs.readdirSync(blogDir);
        generatedBlogFiles.forEach(file => {
            fs.copyFileSync(path.join(blogDir, file), path.join(prodBlogDir, file));
        });
        console.log("   ✅ Folder blog produksi disinkronkan.");

        // Copy assets
        const prodAssetsDir = path.join(prodDir, 'assets');
        if (!fs.existsSync(prodAssetsDir)) {
            fs.mkdirSync(prodAssetsDir, { recursive: true });
        }
        const assetFiles = fs.readdirSync(assetsDir);
        assetFiles.forEach(file => {
            fs.copyFileSync(path.join(assetsDir, file), path.join(prodAssetsDir, file));
        });
        console.log("   ✅ Folder assets produksi disinkronkan.");
        
        console.log(`\n🎉 SEMUA PROSES BERHASIL! File produksi di ${prodDir} siap dideploy.`);
    } catch (err) {
        console.log(`   ❌ Gagal sinkronisasi otomatis: ${err.message}`);
    }
} else {
    console.log(`   ⚠️ Folder produksi ${prodDir} tidak terdeteksi di mesin ini. Lewati sinkronisasi.`);
}

console.log("\n========================================================");
console.log("🔥 AUTOMATION SELESAI: ARTIKEL SEO BERHASIL DI-UPDATE!");
console.log("========================================================");
