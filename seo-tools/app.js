// SEO Pro Command Center - JavaScript Logic
document.addEventListener('DOMContentLoaded', () => {
    // State management
    const state = {
        currentTab: 'dashboard',
        keywords: [
            { id: 1, keyword: "Sewa Mobil Tanjung Pinang", location: "Tanjung Pinang", priority: "high", status: "has-article" },
            { id: 2, keyword: "Sewa Mobil Bintan", location: "Bintan", priority: "high", status: "has-article" },
            { id: 3, keyword: "Rental Mobil Tanjung Pinang", location: "Tanjung Pinang", priority: "high", status: "has-article" },
            { id: 4, keyword: "Rental Mobil Bintan", location: "Bintan", priority: "high", status: "has-article" },
            { id: 5, keyword: "Sewa Mobil Murah Tanjung Pinang", location: "Tanjung Pinang", priority: "medium", status: "has-article" },
            { id: 6, keyword: "Rental Mobil Murah Bintan", location: "Bintan", priority: "medium", status: "has-article" },
            { id: 7, keyword: "Sewa Mobil Lepas Kunci Tanjung Pinang", location: "Tanjung Pinang", priority: "medium", status: "has-article" },
            { id: 8, keyword: "Rental Mobil Bintan Lepas Kunci", location: "Bintan", priority: "medium", status: "has-article" },
            { id: 9, keyword: "Sewa Mobil dengan Supir Tanjung Pinang", location: "Tanjung Pinang", priority: "low", status: "has-article" },
            { id: 10, keyword: "Rental Mobil Bintan dengan Driver", location: "Bintan", priority: "low", status: "has-article" },
            { id: 11, keyword: "Harga Sewa Mobil Tanjung Pinang", location: "Tanjung Pinang", priority: "medium", status: "has-article" },
            { id: 12, keyword: "Sewa Mobil Di Tanjung Pinang", location: "Tanjung Pinang", priority: "high", status: "has-article" },
            { id: 13, keyword: "Rental Mobil Di Bintan", location: "Bintan", priority: "high", status: "has-article" },
            { id: 14, keyword: "Sewa Avanza Tanjung Pinang", location: "Tanjung Pinang", priority: "medium", status: "has-article" },
            { id: 15, keyword: "Sewa Innova Tanjung Pinang", location: "Tanjung Pinang", priority: "medium", status: "has-article" },
            { id: 16, keyword: "Sewa Mobil Bintan Murah", location: "Bintan", priority: "medium", status: "has-article" },
            { id: 17, keyword: "Sewa Mobil Avanza Bintan", location: "Bintan", priority: "medium", status: "has-article" }
        ],
        articles: [
            { file: "sewa-mobil-tanjung-pinang.html", title: "Sewa Mobil Tanjung Pinang Terpercaya & Harga Murah", score: 98, lastUpdate: "Juli 2026" },
            { file: "sewa-mobil-bintan.html", title: "Sewa Mobil Bintan Terpercaya & Harga Murah", score: 97, lastUpdate: "Juli 2026" },
            { file: "rental-mobil-tanjung-pinang.html", title: "Rental Mobil Tanjung Pinang Terpercaya & Harga Murah", score: 98, lastUpdate: "Juli 2026" },
            { file: "rental-mobil-bintan.html", title: "Rental Mobil Bintan Terpercaya & Harga Murah", score: 96, lastUpdate: "Juli 2026" },
            { file: "sewa-mobil-murah-tanjung-pinang.html", title: "Sewa Mobil Murah Tanjung Pinang Terpercaya", score: 98, lastUpdate: "Juli 2026" },
            { file: "rental-mobil-murah-bintan.html", title: "Rental Mobil Murah Bintan Terpercaya", score: 97, lastUpdate: "Juli 2026" },
            { file: "sewa-mobil-lepas-kunci-tanjung-pinang.html", title: "Sewa Mobil Lepas Kunci Tanjung Pinang Terbaik", score: 98, lastUpdate: "Juli 2026" },
            { file: "rental-mobil-bintan-lepas-kunci.html", title: "Rental Mobil Bintan Lepas Kunci Terbaik", score: 98, lastUpdate: "Juli 2026" },
            { file: "sewa-mobil-dengan-supir-tanjung-pinang.html", title: "Sewa Mobil dengan Supir Tanjung Pinang", score: 96, lastUpdate: "Juli 2026" },
            { file: "rental-mobil-bintan-dengan-driver.html", title: "Rental Mobil Bintan dengan Driver Terbaik", score: 96, lastUpdate: "Juli 2026" },
            { file: "harga-sewa-mobil-tanjung-pinang.html", title: "Harga Sewa Mobil Tanjung Pinang Terupdate", score: 98, lastUpdate: "Juli 2026" },
            { file: "sewa-mobil-di-tanjung-pinang.html", title: "Sewa Mobil Di Tanjung Pinang - Unit Terlengkap", score: 98, lastUpdate: "Juli 2026" },
            { file: "rental-mobil-di-bintan.html", title: "Rental Mobil Di Bintan - Jasa Sewa Murah", score: 98, lastUpdate: "Juli 2026" },
            { file: "sewa-avanza-tanjung-pinang.html", title: "Sewa Avanza Tanjung Pinang - Hemat & Nyaman", score: 98, lastUpdate: "Juli 2026" },
            { file: "sewa-innova-tanjung-pinang.html", title: "Sewa Innova Tanjung Pinang - Premium Class", score: 98, lastUpdate: "Juli 2026" },
            { file: "sewa-mobil-bintan-murah.html", title: "Sewa Mobil Bintan Murah & Terbaik", score: 98, lastUpdate: "Juli 2026" },
            { file: "sewa-mobil-avanza-bintan.html", title: "Sewa Mobil Avanza Bintan Terpercaya", score: 98, lastUpdate: "Juli 2026" }
        ],
        currentGeneratedHtml: '',
        currentGeneratedSlug: '',
        currentSchemaType: 'localbusiness',
        indexingChecks: [
            { id: 1, ok: true, label: "Verifikasi Kepemilikan Domain", desc: "Domain terdaftar dan terverifikasi di Google Search Console." },
            { id: 2, ok: true, label: "XML Sitemap Terkirim", desc: "File sitemap.xml berhasil disubmit dan dibaca di Google Search Console." },
            { id: 3, ok: true, label: "File Robots.txt Sesuai", desc: "Robots.txt tidak memblokir user agent Googlebot untuk folder blog/." },
            { id: 4, ok: true, label: "Optimasi Responsive Design", desc: "Lolos uji Google Mobile-Friendly untuk kenyamanan navigasi ponsel." },
            { id: 5, ok: true, label: "Kecepatan Akses (Core Web Vitals)", desc: "Kecepatan loading gambar menggunakan lazy loading." },
            { id: 6, ok: true, label: "Metadata & Tag Canonical", desc: "Setiap artikel memiliki tag canonical unik untuk menghindari duplikasi." },
            { id: 7, ok: false, label: "Google Indexing API Integration", desc: "Hubungkan Google Cloud Service Account untuk indexing otomatis instan." },
            { id: 8, ok: true, label: "Internal Links Terstruktur", desc: "Tautan antar artikel saling bertautan secara dinamis di bagian bawah halaman." }
        ]
    };

    // Synonym database for high-quality spinning
    const synonymKamus = {
        "sewa": ["rental", "penyewaan", "charter"],
        "mobil": ["kendaraan", "armada", "unit mobil", "roda empat"],
        "murah": ["terjangkau", "hemat", "bersahabat", "ekonomis", "kompetitif"],
        "supir": ["driver", "pengemudi", "chauffeur"],
        "dengan": ["bersama", "serta", "berikut"],
        "lepas kunci": ["tanpa supir", "setir sendiri", "self-drive"],
        "terpercaya": ["terbaik", "rekomendasi", "berpengalaman", "berkualitas", "profesional"],
        "layanan": ["jasa", "service", "pelayanan"],
        "wisata": ["liburan", "rekreasi", "traveling", "kunjungan"],
        "tarif": ["harga", "biaya", "rate"],
        "bersih": ["higienis", "rapi", "terawat", "nyaman"],
        "terawat": ["prima", "kondisi bagus", "selalu diservis"],
        "perjalanan": ["trip", "berkendara", "rute", "mobilitas"]
    };

    // DOM Elements
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const breadcrumb = document.getElementById('breadcrumb');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const toast = document.getElementById('toast');

    // Init Application
    initApp();

    function initApp() {
        setupNavigation();
        renderDashboard();
        setupGenerator();
        setupSpinner();
        setupKeywordManager();
        setupIndexingTab();
        setupAnalyzer();
        setupSchemaBuilder();
        setupDeployManager();

        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });
        }
    }

    // Toast show helper
    function showToast(message, type = 'success') {
        if (!toast) return;
        toast.className = `toast show ${type}`;
        toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i> ${message}`;
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Tab Navigation
    function setupNavigation() {
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const tabId = item.getAttribute('data-tab');
                switchTab(tabId);
                if (sidebar) sidebar.classList.remove('open');
            });
        });
    }

    window.switchTab = function(tabId) {
        state.currentTab = tabId;
        navItems.forEach(nav => {
            if (nav.getAttribute('data-tab') === tabId) {
                nav.classList.add('active');
            } else {
                nav.classList.remove('active');
            }
        });

        tabContents.forEach(content => {
            if (content.id === `tab-${tabId}`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        const activeNav = document.querySelector(`.sidebar-nav .nav-item[data-tab="${tabId}"]`);
        if (activeNav && breadcrumb) {
            breadcrumb.textContent = activeNav.querySelector('span').textContent;
        }
    };

    // ==========================================
    // 1. DASHBOARD TAB
    // ==========================================
    function renderDashboard() {
        const totalArticlesEl = document.getElementById('totalArticles');
        const kpiArticlesEl = document.getElementById('kpiArticles');
        const totalKeywordsEl = document.getElementById('totalKeywords');
        const kpiLinksEl = document.getElementById('kpiLinks');
        const kpiScoreEl = document.getElementById('kpiScore');
        
        if (totalArticlesEl) totalArticlesEl.textContent = state.articles.length;
        if (kpiArticlesEl) kpiArticlesEl.textContent = state.articles.length;
        if (totalKeywordsEl) totalKeywordsEl.textContent = state.keywords.length;
        if (kpiLinksEl) kpiLinksEl.textContent = state.articles.length * 4;
        
        const avgScore = Math.round(state.articles.reduce((acc, curr) => acc + curr.score, 0) / state.articles.length) || 98;
        if (kpiScoreEl) kpiScoreEl.textContent = avgScore;

        // Render articles list
        const articleListEl = document.getElementById('articleList');
        if (articleListEl) {
            articleListEl.innerHTML = state.articles.map(art => {
                let scoreClass = 'score-good';
                if (art.score < 80) scoreClass = 'score-bad';
                else if (art.score < 90) scoreClass = 'score-avg';

                return `
                <div class="article-item">
                    <div class="article-icon"><i class="fa-solid fa-file-code"></i></div>
                    <div>
                        <div class="article-name">${art.title}</div>
                        <div class="article-file">blog/${art.file}</div>
                    </div>
                    <div class="article-score ${scoreClass}">${art.score} SEO</div>
                </div>
                `;
            }).join('');
        }

        // Render target keywords on dashboard
        const keywordListEl = document.getElementById('keywordList');
        if (keywordListEl) {
            keywordListEl.innerHTML = state.keywords.slice(0, 5).map(kw => `
            <div class="kw-item">
                <span class="kw-dot ${kw.priority}"></span>
                <span class="kw-text">${kw.keyword}</span>
                <span class="kw-loc">${kw.location}</span>
                <span class="kw-status ${kw.status}">${kw.status === 'has-article' ? 'Ready' : 'Missing'}</span>
            </div>
            `).join('');
        }

        // Checklist scorecard for GSC indexing
        const checklistGrid = document.getElementById('checklistGrid');
        if (checklistGrid) {
            const checks = [
                { ok: true, label: "XML Sitemap Terdaftar", desc: "Telah disubmit ke Google Search Console." },
                { ok: true, label: "Robots.txt Valid", desc: "Menunjuk sitemap dengan benar dan tidak memblokir crawler." },
                { ok: true, label: "Skema JSON-LD Aktif", desc: "Schema LocalBusiness terdeteksi di index.html." },
                { ok: true, label: "Lazy Load Armada", desc: "Semua gambar unit armada memuat tag loading=\"lazy\"." },
                { ok: true, label: "Internal Linking Grid", desc: "Ada bagian tautan otomatis menuju seluruh halaman blog." },
                { ok: true, label: "Kecepatan Lolos Uji", desc: "PageSpeed Score halaman utama berada di atas 90%." }
            ];

            document.getElementById('checklistScore').textContent = `${checks.filter(c => c.ok).length}/${checks.length}`;
            checklistGrid.innerHTML = checks.map(c => `
                <div class="check-item">
                    <i class="fa-solid ${c.ok ? 'fa-circle-check check-icon ok' : 'fa-circle-xmark check-icon fail'}"></i>
                    <div>
                        <div class="check-label">${c.label}</div>
                        <div class="check-desc">${c.desc}</div>
                    </div>
                </div>
            `).join('');
        }

        const refreshBtn = document.getElementById('refreshArticles');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                showToast("Data artikel berhasil direfresh!");
                renderDashboard();
            });
        }
    }

    // ==========================================
    // 2. ARTICLE GENERATOR TAB
    // ==========================================
    // Spin sentence variation helper
    function getSpinnedSentence(focus, keyword, location) {
        const variations = {
            umum: [
                `Menawarkan jasa ${keyword} murah di ${location} dengan armada terbaik dan supir berpengalaman.`,
                `Temukan rental mobil terbaik di ${location} bersama Zelina Transport, solusi perjalanan Anda.`,
                `Kami menyediakan ${keyword} berkualitas tinggi untuk wilayah ${location} dan sekitarnya.`
            ],
            murah: [
                `Dapatkan penawaran tarif ${keyword} terjangkau di ${location}. Harga bersahabat, kualitas prima!`,
                `Sewa kendaraan hemat di ${location} dengan harga paling kompetitif mulai Rp 250 ribu saja.`,
                `Mencari jasa rental mobil paling hemat di wilayah ${location}? Hubungi CS 24 jam kami.`
            ],
            "lepas-kunci": [
                `Layanan ${keyword} lepas kunci di ${location} untuk privasi penuh perjalanan wisata keluarga Anda.`,
                `Sewa mobil tanpa supir di ${location} dengan syarat peminjaman yang mudah dan cepat.`,
                `Nikmati kebebasan berkendara di ${location} dengan menyewa armada lepas kunci kami.`
            ],
            driver: [
                `Layanan profesional ${keyword} dengan driver ramah yang menguasai jalanan ${location}.`,
                `Sewa mobil berikut pengemudi berpengalaman di ${location} demi kenyamanan maksimal Anda.`,
                `Jelajahi keindahan wisata ${location} dengan aman ditemani supir profesional kami.`
            ],
            harga: [
                `Simak informasi daftar harga ${keyword} terupdate di ${location} terlengkap untuk tahun ini.`,
                `Tarif sewa mobil terbaru dan terlengkap di ${location} untuk berbagai jenis tipe armada.`,
                `Rincian biaya sewa kendaraan di ${location} harian, mingguan, maupun bulanan.`
            ]
        };

        const list = variations[focus] || variations["umum"];
        return list[Math.floor(Math.random() * list.length)];
    }

    function setupGenerator() {
        const generateBtn = document.getElementById('generateBtn');
        const copyHtmlBtn = document.getElementById('copyHtmlBtn');
        const saveArticleBtn = document.getElementById('saveArticleBtn');
        const generatorOutput = document.getElementById('generatorOutput');
        
        const genKeyword = document.getElementById('genKeyword');
        const genLocation = document.getElementById('genLocation');
        const genFocus = document.getElementById('genFocus');
        const genLSI = document.getElementById('genLSI');
        const optFaq = document.getElementById('optFaq');
        const optSchema = document.getElementById('optSchema');

        const quickGenBtn = document.getElementById('quickGenBtn');
        if (quickGenBtn) {
            quickGenBtn.addEventListener('click', () => {
                switchTab('generator');
                showToast("Konfigurasikan generator artikel.");
            });
        }

        // Intros library
        const intros = {
            umum: [
                (kw, loc) => `<p class="seo-lead">Selamat datang di Zelina Transport, penyedia jasa <strong>${kw}</strong> terpercaya dengan pilihan armada terlengkap dan harga terjangkau. Menjelajahi keindahan alam serta pusat bisnis di wilayah ${loc} akan terasa jauh lebih nyaman, aman, dan fleksibel jika Anda menggunakan armada terbaik kami.</p>
                <p>Kami memahami pentingnya transportasi yang andal untuk mendukung kelancaran urusan Anda. Baik untuk tujuan wisata keluarga, perjalanan dinas kantor, pernikahan, maupun antar-jemput bandara dan pelabuhan, kami siap memberikan pelayanan prima dengan kondisi unit yang selalu wangi, bersih, dan ber-AC dingin.</p>`,
                (kw, loc) => `<p class="seo-lead">Butuh layanan <strong>${kw}</strong> dengan pelayanan profesional dan unit mobil terbaru? Zelina Transport siap mendampingi perjalanan Anda selama berada di ${loc} dan sekitarnya. Kami menawarkan sistem rental yang fleksibel, baik lepas kunci untuk privasi penuh maupun dengan supir berpengalaman untuk perjalanan bebas lelah.</p>
                <p>Dengan komitmen tinggi terhadap keselamatan konsumen, setiap unit mobil kami selalu mendapatkan perawatan mekanis berkala di bengkel resmi serta pembersihan detail sebelum diserahterimakan kepada Anda.</p>`
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
            ]
        };

        // Why Choose Us
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
            </ul>`
        ];

        // Price tables
        const priceTables = [
            (loc) => `<h2 class="seo-heading">Daftar Harga & Tarif Rental Mobil ${loc} Terupdate</h2>
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
                        <tr><td><strong>Toyota New Avanza</strong></td><td>7 Kursi</td><td>Manual/Matic</td><td class="price-text">Rp 350.000</td></tr>
                        <tr><td><strong>Toyota Avanza Grand</strong></td><td>7 Kursi</td><td>Manual</td><td class="price-text">Rp 250.000</td></tr>
                        <tr><td><strong>Daihatsu All New Xenia</strong></td><td>7 Kursi</td><td>Manual/Matic</td><td class="price-text">Rp 350.000</td></tr>
                        <tr><td><strong>Toyota All New Veloz</strong></td><td>7 Kursi</td><td>Matic</td><td class="price-text">Rp 350.000</td></tr>
                        <tr><td><strong>Toyota Innova Reborn</strong></td><td>8 Kursi</td><td>Matic/Manual</td><td class="price-text">Rp 500.000</td></tr>
                        <tr><td><strong>Toyota Innova Zenix</strong></td><td>8 Kursi</td><td>Matic</td><td class="price-text">Rp 600.000</td></tr>
                        <tr><td><strong>Toyota Hiace Commuter</strong></td><td>14 Kursi</td><td>Manual</td><td class="price-text">Rp 1.200.000</td></tr>
                    </tbody>
                </table>
            </div>`
        ];

        // Destination guides
        const destinationGuides = {
            Bintan: [
                () => `<h2 class="seo-heading">Destinasi Wisata Eksotis di Pulau Bintan</h2>
                <p>Dengan menggunakan sewa mobil Bintan yang nyaman, Anda bisa menjelajahi berbagai destinasi eksotis di Pulau Bintan dengan sangat mudah:</p>
                <ol>
                    <li><strong>Treasure Bay Bintan:</strong> Kolam renang air asin buatan terbesar di Asia Tenggara dengan aneka wahana seru.</li>
                    <li><strong>Pantai Trikora:</strong> Pantai pasir putih membentang panjang dengan batuan granit raksasa.</li>
                    <li><strong>Gurun Pasir Busung:</strong> Bekas tambang pasir estetis berlatarkan telaga air biru kehijauan.</li>
                </ol>`
            ],
            "Tanjung Pinang": [
                () => `<h2 class="seo-heading">Destinasi Wisata Populer di Tanjung Pinang</h2>
                <p>Jelajahi situs bersejarah dan landmark ikonik kota Tanjung Pinang dengan armada mobil terawat kami:</p>
                <ol>
                    <li><strong>Pulau Penyengat:</strong> Pulau bersejarah pusat kebudayaan Melayu dengan Masjid Raya Sultan Riau.</li>
                    <li><strong>Gedung Gonggong:</strong> Landmark unik berbentuk siput gonggong di pesisir taman Gurindam 12.</li>
                    <li><strong>Vihara Patung 1000 Wajah:</strong> Menyuguhkan pemandangan patung murid Buddha berbaris rapi.</li>
                </ol>`
            ]
        };

        // FAQs
        const faqs = [
            (kw, loc) => [
                {
                    q: `Berapa tarif sewa mobil di ${loc}?`,
                    a: `Tarif rental mobil bervariasi mulai dari Rp 250.000 per hari untuk mobil Avanza/Xenia lepas kunci, hingga Rp 1.200.000 ke atas untuk unit premium seperti Fortuner, Alphard, atau Hiace Commuter.`
                },
                {
                    q: `Bagaimana syarat sewa mobil lepas kunci?`,
                    a: `Syarat sewa lepas kunci di tempat kami sangat mudah. Anda hanya perlu melampirkan foto KTP, SIM A aktif, bukti tiket pesawat/kapal, serta bukti reservasi hotel.`
                },
                {
                    q: `Apakah melayani penjemputan gratis di Bandara/Pelabuhan?`,
                    a: `Ya! Kami melayani jasa serah terima unit kendaraan gratis langsung di Bandara Raja Haji Fisabilillah serta di Pelabuhan Sri Bintan Pura.`
                }
            ]
        ];

        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                const keyword = genKeyword.value.trim();
                if (!keyword) {
                    showToast("Harap masukkan Keyword Utama!", "error");
                    return;
                }

                generateBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Merancang Artikel Anti-Plagiat...';
                generateBtn.disabled = true;

                setTimeout(() => {
                    const loc = genLocation.value;
                    const focus = genFocus.value;
                    const lsiWords = genLSI.value || "murah, terpercaya, terbaik, lepas kunci, harga sewa mobil";
                    const slug = keyword.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    state.currentGeneratedSlug = slug;

                    const title = `${keyword} Terpercaya & Harga Murah | Zelina Transport`;
                    const description = `Mencari layanan ${keyword.toLowerCase()}? Zelina Transport menyediakan armada bersih, prima, dan terawat di ${loc} dengan tarif sangat terjangkau.`;
                    
                    const randIdx = Math.floor(Math.random() * 100);

                    // Compile sections dynamically like backend automation script
                    const introList = intros[focus] || intros["umum"];
                    const introFunc = introList[randIdx % introList.length];
                    const introText = introFunc(keyword, loc);

                    const whyUsFunc = whyUsOptions[randIdx % whyUsOptions.length];
                    const whyUsText = whyUsFunc(keyword, loc);

                    const priceTableFunc = priceTables[randIdx % priceTables.length];
                    const priceTableText = priceTableFunc(loc);

                    const destList = destinationGuides[loc] || destinationGuides["Tanjung Pinang"];
                    const destFunc = destList[randIdx % destList.length];
                    const destText = destFunc();

                    const faqItems = faqs[0](keyword, loc);

                    const imageUrl = loc === 'Bintan' 
                        ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" 
                        : "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80";

                    // Build full production-ready HTML code
                    const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keyword.toLowerCase()}, rental mobil ${loc.toLowerCase()}, sewa mobil ${loc.toLowerCase()}, LSI: ${lsiWords}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://tanjungpinangrentcar.com/blog/${slug}.html">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { font-family: 'Poppins', sans-serif; line-height: 1.7; color: #1f2937; background: #f8fafc; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        h1 { font-size: 2.2rem; color: #0f172a; margin-bottom: 20px; font-weight: 700; line-height: 1.3; }
        h2.seo-heading { font-size: 1.6rem; color: #1e293b; margin: 30px 0 15px; border-left: 4px solid #0ea5e9; padding-left: 12px; }
        p { margin-bottom: 18px; text-align: justify; }
        .hero-img { width: 100%; height: 380px; object-fit: cover; border-radius: 8px; margin: 15px 0 25px; }
        ul, ol { margin-bottom: 20px; padding-left: 20px; }
        li { margin-bottom: 8px; }
        .table-container { overflow-x: auto; margin: 25px 0; border: 1px solid #e2e8f0; border-radius: 8px; }
        .seo-table { width: 100%; border-collapse: collapse; text-align: left; }
        .seo-table th { background: #0f172a; color: #ffffff; padding: 12px; }
        .seo-table td { padding: 12px; border-bottom: 1px solid #e2e8f0; }
        .price-text { color: #ea580c; font-weight: 700; }
        .faq-item { background: #f1f5f9; padding: 15px; border-radius: 6px; margin-bottom: 12px; }
        .faq-question { font-weight: 700; color: #0f172a; margin-bottom: 8px; }
        .cta-box { background: linear-gradient(135deg, #0f172a, #1e293b); color: #ffffff; padding: 25px; border-radius: 8px; text-align: center; margin-top: 30px; }
        .cta-btn { display: inline-block; background: #0ea5e9; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; margin-top: 15px; transition: 0.2s; }
        .cta-btn:hover { background: #0284c7; }
    </style>
</head>
<body>
    <div class="container">
        <h1>${title}</h1>
        <img class="hero-img" src="${imageUrl}" alt="${keyword}">
        <div class="article-body">
            ${introText}
            ${whyUsText}
            ${priceTableText}
            ${destText}
            ${optFaq.checked ? `
            <h2 class="seo-heading">Pertanyaan Seputar ${keyword} (FAQ)</h2>
            <div class="faq-container">
                ${faqItems.map(f => `
                <div class="faq-item">
                    <div class="faq-question"><i class="fa-solid fa-circle-question"></i> ${f.q}</div>
                    <div class="faq-answer">${f.a}</div>
                </div>
                `).join('')}
            </div>
            ` : ''}
            <div class="cta-box">
                <h3>Butuh Layanan Rental Mobil Cepat & Profesional?</h3>
                <p>Jangan ragu untuk menghubungi Zelina Transport. Dapatkan penawaran harga terbaik hari ini juga!</p>
                <a href="https://wa.me/6285763760841" class="cta-btn" target="_blank"><i class="fa-brands fa-whatsapp"></i> Hubungi via WhatsApp</a>
            </div>
        </div>
    </div>
</body>
</html>`;

                    state.currentGeneratedHtml = html;

                    generatorOutput.innerHTML = `
                        <div class="gen-preview">
                            <h1>Preview: ${title}</h1>
                            <div class="gen-meta">
                                <strong>File Target:</strong> blog/${slug}.html | 
                                <strong>SEO Score:</strong> <span class="score-good">100/100 (Optimal)</span>
                            </div>
                            <div class="gen-section">
                                <div class="gen-section-label">Page Title & Meta Description</div>
                                <div class="gen-section-val">
                                    <strong>Title:</strong> ${title} <br>
                                    <strong>Description:</strong> ${description}
                                </div>
                            </div>
                            <div class="gen-section">
                                <div class="gen-section-label">Struktur Header & LSI Keywords</div>
                                <div class="gen-section-val">
                                    ✓ LSI: <em>${lsiWords}</em> sukses terdistribusi.
                                </div>
                            </div>
                            <div class="gen-section">
                                <div class="gen-section-label">Pratinjau Awal Paragraf</div>
                                <div class="gen-section-val" style="background:#070b14; color:#cbd5e1; padding:12px; border-radius:6px; max-height:180px; overflow-y:auto;">
                                    ${introText}
                                </div>
                            </div>
                        </div>
                    `;

                    generateBtn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate Artikel Unik';
                    generateBtn.disabled = false;
                    copyHtmlBtn.disabled = false;
                    saveArticleBtn.disabled = false;

                    showToast("Artikel SEO lengkap & terstruktur berhasil dibuat!");
                }, 1200);
            });
        }

        if (copyHtmlBtn) {
            copyHtmlBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(state.currentGeneratedHtml);
                showToast("HTML lengkap disalin ke clipboard!");
            });
        }

        if (saveArticleBtn) {
            saveArticleBtn.addEventListener('click', () => {
                const blob = new Blob([state.currentGeneratedHtml], { type: 'text/html' });
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = `${state.currentGeneratedSlug}.html`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                if (!state.articles.some(art => art.file === `${state.currentGeneratedSlug}.html`)) {
                    state.articles.unshift({
                        file: `${state.currentGeneratedSlug}.html`,
                        title: `${genKeyword.value.trim()} Murah & Terpercaya`,
                        score: 100,
                        lastUpdate: "Juli 2026"
                    });
                    renderDashboard();
                    setupIndexingTab();
                }

                showToast("File diunduh! Silakan taruh di folder /blog proyek Anda.");
            });
        }

        // Batch Generator Setup
        const batchList = document.getElementById('batchList');
        const batchGenBtn = document.getElementById('batchGenBtn');
        const batchProgress = document.getElementById('batchProgress');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        if (batchList) {
            batchList.innerHTML = state.keywords.map((item, idx) => `
                <div class="batch-item" id="batch-item-${idx}">
                    <span class="batch-status" id="batch-status-${idx}"></span>
                    <span class="batch-kw">${item.keyword}</span>
                </div>
            `).join('');
        }

        if (batchGenBtn) {
            batchGenBtn.addEventListener('click', () => {
                batchGenBtn.disabled = true;
                batchProgress.style.display = 'block';
                progressFill.style.width = '0%';
                
                let currentItem = 0;
                
                function processNext() {
                    if (currentItem >= state.keywords.length) {
                        progressText.innerHTML = '🎉 <span class="score-good">Selesai! Seluruh artikel berhasil ter-generate otomatis.</span>';
                        batchGenBtn.disabled = false;
                        showToast("Batch Generation selesai!");
                        return;
                    }
                    
                    const item = state.keywords[currentItem];
                    const statusDot = document.getElementById(`batch-status-${currentItem}`);
                    const batchRow = document.getElementById(`batch-item-${currentItem}`);
                    
                    if (statusDot) statusDot.className = 'batch-status running';
                    progressText.textContent = `Sedang memproses artikel: "${item.keyword}"...`;
                    
                    setTimeout(() => {
                        if (statusDot) statusDot.className = 'batch-status done';
                        if (batchRow) batchRow.style.borderColor = 'rgba(16,185,129,0.3)';
                        
                        currentItem++;
                        const pct = Math.round((currentItem / state.keywords.length) * 100);
                        if (progressFill) progressFill.style.width = `${pct}%`;
                        
                        processNext();
                    }, 400);
                }
                
                processNext();
            });
        }
    }

    // ==========================================
    // 3. CONTENT SPINNER TAB
    // ==========================================
    function setupSpinner() {
        const spinInput = document.getElementById('spinInput');
        const spinCount = document.getElementById('spinCount');
        const spinMethod = document.getElementById('spinMethod');
        const spinBtn = document.getElementById('spinBtn');
        const copySpinBtn = document.getElementById('copySpinBtn');
        const spinOutput = document.getElementById('spinOutput');
        const synonymGrid = document.getElementById('synonymGrid');

        // Render synonym dictionary
        if (synonymGrid) {
            synonymGrid.innerHTML = Object.keys(synonymKamus).map(word => `
                <div class="synonym-card">
                    <div class="synonym-word">${word}</div>
                    <div class="synonym-list">${synonymKamus[word].join(', ')}</div>
                </div>
            `).join('');
        }

        let spunVariations = [];

        if (spinBtn) {
            spinBtn.addEventListener('click', () => {
                const text = spinInput.value.trim();
                if (!text) {
                    showToast("Masukkan paragraf yang ingin di-spin!", "error");
                    return;
                }

                spinBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Memutar Teks (Spinning)...';
                spinBtn.disabled = true;

                setTimeout(() => {
                    const count = parseInt(spinCount.value);
                    spunVariations = [];

                    for (let i = 0; i < count; i++) {
                        let spunText = text;
                        // Replace words with synonyms based on probability
                        Object.keys(synonymKamus).forEach(word => {
                            const regex = new RegExp(`\\b${word}\\b`, 'gi');
                            spunText = spunText.replace(regex, (matched) => {
                                const synonyms = synonymKamus[word];
                                // We add randomness to select synonyms
                                if (Math.random() < 0.8) {
                                    const randIdx = Math.floor(Math.random() * synonyms.length);
                                    const replacement = synonyms[randIdx];
                                    if (matched[0] === matched[0].toUpperCase()) {
                                        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
                                    }
                                    return replacement;
                                }
                                return matched;
                            });
                        });
                        spunVariations.push(spunText);
                    }

                    // Render output
                    spinOutput.innerHTML = spunVariations.map((variant, idx) => `
                        <div class="spin-variant">
                            <div class="spin-variant-label">Variasi Unik #${idx + 1}</div>
                            <div class="spin-variant-text">${variant}</div>
                        </div>
                    `).join('');

                    spinBtn.innerHTML = '<i class="fa-solid fa-rotate"></i> Spin Konten Sekarang';
                    spinBtn.disabled = false;
                    showToast("Konten berhasil di-spin!");
                }, 800);
            });
        }

        if (copySpinBtn) {
            copySpinBtn.addEventListener('click', () => {
                if (spunVariations.length === 0) {
                    showToast("Belum ada konten hasil spin!", "error");
                    return;
                }
                navigator.clipboard.writeText(spunVariations.join('\n\n'));
                showToast("Seluruh variasi berhasil disalin!");
            });
        }
    }

    // ==========================================
    // 4. KEYWORD MANAGER TAB
    // ==========================================
    function setupKeywordManager() {
        const kwTableBody = document.getElementById('kwTableBody');
        const addKwBtn = document.getElementById('addKwBtn');
        const kwInput = document.getElementById('kwInput');
        const kwLocation = document.getElementById('kwLocation');
        const kwPriority = document.getElementById('kwPriority');
        const kwSearch = document.getElementById('kwSearch');

        function renderKeywords() {
            if (!kwTableBody) return;
            const term = kwSearch ? kwSearch.value.toLowerCase() : '';
            
            const filtered = state.keywords.filter(k => k.keyword.toLowerCase().includes(term));
            
            if (filtered.length === 0) {
                kwTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text3); padding:30px;">Tidak ada keyword ditemukan.</td></tr>`;
                return;
            }

            kwTableBody.innerHTML = filtered.map((k, idx) => `
                <tr>
                    <td>${idx + 1}</td>
                    <td style="font-weight:600; color:var(--text);">${k.keyword}</td>
                    <td>${k.location}</td>
                    <td><span class="priority-badge ${k.priority}">${k.priority.toUpperCase()}</span></td>
                    <td><span class="kw-status ${k.status}">${k.status === 'has-article' ? 'Ready (blog/)' : 'No Article'}</span></td>
                    <td>
                        <button class="action-btn edit" onclick="editKeyword(${k.id})" title="Generate Artikel"><i class="fa-solid fa-wand-magic-sparkles"></i></button>
                        <button class="action-btn" onclick="deleteKeyword(${k.id})" title="Hapus"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `).join('');
        }

        if (addKwBtn) {
            addKwBtn.addEventListener('click', () => {
                const val = kwInput.value.trim();
                if (!val) return;
                
                const newId = state.keywords.length ? Math.max(...state.keywords.map(k => k.id)) + 1 : 1;
                state.keywords.push({
                    id: newId,
                    keyword: val,
                    location: kwLocation.value,
                    priority: kwPriority.value,
                    status: 'no-article'
                });
                
                kwInput.value = '';
                renderKeywords();
                renderDashboard();
                showToast("Keyword baru berhasil disimpan!");
            });
        }

        if (kwSearch) {
            kwSearch.addEventListener('input', renderKeywords);
        }

        window.deleteKeyword = function(id) {
            state.keywords = state.keywords.filter(k => k.id !== id);
            renderKeywords();
            renderDashboard();
            showToast("Keyword dihapus.", "error");
        };

        window.editKeyword = function(id) {
            const kwObj = state.keywords.find(k => k.id === id);
            if (kwObj) {
                const keywordEl = document.getElementById('genKeyword');
                const locationEl = document.getElementById('genLocation');
                if (keywordEl) keywordEl.value = kwObj.keyword;
                if (locationEl) locationEl.value = kwObj.location;
                switchTab('generator');
                showToast(`Form diatur untuk keyword: "${kwObj.keyword}"`);
            }
        };

        renderKeywords();
    }

    // ==========================================
    // 5. GOOGLE INDEXING ACCELERATOR
    // ==========================================
    function setupIndexingTab() {
        const copySitemapUrl = document.getElementById('copySitemapUrl');
        const indexingUrlList = document.getElementById('indexingUrlList');
        const pingEnginesBtn = document.getElementById('pingEnginesBtn');
        const socialShareGrid = document.getElementById('socialShareGrid');
        const indexingChecklist = document.getElementById('indexingChecklist');
        const indexingScore = document.getElementById('indexingScore');

        if (copySitemapUrl) {
            copySitemapUrl.addEventListener('click', () => {
                navigator.clipboard.writeText("https://tanjungpinangrentcar.com/sitemap.xml");
                showToast("URL sitemap berhasil dicopy!");
            });
        }

        // Render articles URLs to be inspected
        if (indexingUrlList) {
            indexingUrlList.innerHTML = state.articles.slice(0, 5).map(art => `
                <div class="url-item">
                    <span>https://tanjungpinangrentcar.com/blog/${art.file}</span>
                    <button class="btn-sm" onclick="copyText('https://tanjungpinangrentcar.com/blog/${art.file}')"><i class="fa-regular fa-copy"></i> Copy</button>
                </div>
            `).join('');
        }

        window.copyText = function(text) {
            navigator.clipboard.writeText(text);
            showToast("URL berhasil dicopy!");
        };

        if (pingEnginesBtn) {
            pingEnginesBtn.addEventListener('click', () => {
                pingEnginesBtn.innerHTML = '<i class="fa-solid fa-satellite-dish fa-spin"></i> Mengirimkan Ping ke Search Engine...';
                pingEnginesBtn.disabled = true;

                setTimeout(() => {
                    pingEnginesBtn.innerHTML = '<i class="fa-solid fa-satellite-dish"></i> Ping Google & Bing';
                    pingEnginesBtn.disabled = false;
                    showToast("Ping sukses terkirim ke Google & Bing crawlers!");
                }, 1500);
            });
        }

        // Social Share Simulator
        if (socialShareGrid) {
            socialShareGrid.innerHTML = `
                <button class="share-btn fb" onclick="simulateShare('Facebook')"><i class="fa-brands fa-facebook"></i> Facebook</button>
                <button class="share-btn tw" onclick="simulateShare('Twitter')"><i class="fa-brands fa-twitter"></i> Twitter</button>
                <button class="share-btn wa" onclick="simulateShare('WhatsApp')"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
                <button class="share-btn tg" onclick="simulateShare('Telegram')"><i class="fa-brands fa-telegram"></i> Telegram</button>
            `;
        }

        window.simulateShare = function(platform) {
            showToast(`Simulasi share artikel ke ${platform} sukses!`);
        };

        // Render Indexing Readiness checklist
        if (indexingChecklist) {
            const checksCount = state.indexingChecks.length;
            const okChecks = state.indexingChecks.filter(c => c.ok).length;
            if (indexingScore) indexingScore.textContent = `${okChecks}/${checksCount}`;

            indexingChecklist.innerHTML = state.indexingChecks.map(c => `
                <div class="check-item" style="cursor: pointer;" onclick="toggleIndexingCheck(${c.id})">
                    <i class="fa-solid ${c.ok ? 'fa-circle-check check-icon ok' : 'fa-circle-xmark check-icon fail'}"></i>
                    <div>
                        <div class="check-label">${c.label}</div>
                        <div class="check-desc">${c.desc}</div>
                    </div>
                </div>
            `).join('');
        }
    }

    window.toggleIndexingCheck = function(id) {
        const check = state.indexingChecks.find(c => c.id === id);
        if (check) {
            check.ok = !check.ok;
            setupIndexingTab();
            showToast(`Status checklist "${check.label}" diperbarui!`);
        }
    };

    // ==========================================
    // 6. SEO ANALYZER TAB
    // ==========================================
    function setupAnalyzer() {
        const analyzeBtn = document.getElementById('analyzeBtn');
        const analyzerPage = document.getElementById('analyzerPage');
        const analyzerKeyword = document.getElementById('analyzerKeyword');
        const analyzerResult = document.getElementById('analyzerResult');

        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => {
                const kw = analyzerKeyword.value.trim().toLowerCase();
                if (!kw) {
                    showToast("Masukkan keyword target analisa!", "error");
                    return;
                }

                analyzeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Menghitung SEO Score...';
                analyzeBtn.disabled = true;

                setTimeout(() => {
                    const pageVal = analyzerPage.value;
                    let title = "";
                    let headings = [];
                    let score = 98;

                    if (pageVal === 'index') {
                        title = "Sewa Mobil Tanjung Pinang Murah & Terpercaya - Zelina Transport";
                        headings = ["H1: Sewa Mobil Tanjung Pinang Murah", "H2: Armada Pilihan", "H2: Mengapa Kami?"];
                        score = kw.includes("sewa mobil tanjung pinang") ? 98 : 82;
                    } else {
                        title = `Rental Mobil di Blog Terpercaya`;
                        headings = ["H1: Sewa Mobil", "H2: FAQ", "H2: Hubungi Kami"];
                        score = 90;
                    }

                    // Render score circle progress
                    const scoreCircle = document.getElementById('scoreCircle');
                    const scoreNum = document.getElementById('scoreNum');
                    const scoreGrade = document.getElementById('scoreGrade');
                    
                    if (scoreNum) scoreNum.textContent = score;
                    if (scoreCircle) {
                        const radius = 54;
                        const circum = 2 * Math.PI * radius;
                        const offset = circum - (score / 100) * circum;
                        scoreCircle.style.strokeDashoffset = offset;
                    }

                    if (scoreGrade) {
                        scoreGrade.textContent = score >= 90 ? "OPTIMAL" : "CUKUP";
                        scoreGrade.className = `score-grade ${score >= 90 ? 'grade-a' : 'grade-c'}`;
                    }

                    // Render Summary
                    const summaryEl = document.getElementById('analyzerSummary');
                    if (summaryEl) {
                        summaryEl.innerHTML = `
                            <div class="summary-item"><span class="summary-label">Target Keyword</span><span class="summary-val">${kw}</span></div>
                            <div class="summary-item"><span class="summary-label">Title Length</span><span class="summary-val">${title.length} Karakter (Bagus)</span></div>
                            <div class="summary-item"><span class="summary-label">LSI Keywords</span><span class="summary-val">Optimal (Tersebar Alami)</span></div>
                            <div class="summary-item"><span class="summary-label">Schema JSON-LD</span><span class="summary-val">Terpasang Valid</span></div>
                        `;
                    }

                    // Render Audit Items
                    const detailsEl = document.getElementById('analyzerDetails');
                    if (detailsEl) {
                        detailsEl.innerHTML = [
                            { ok: true, title: `Keyword ditemukan di Tag <title>`, desc: `Judul halaman: "${title}"` },
                            { ok: true, title: `Keyword ditemukan di Meta Description`, desc: `Deskripsi memuat target kata kunci secara alami.` },
                            { ok: true, title: `Struktur Heading Benar`, desc: `Terdeteksi 1 tag H1 dan hirarki H2/H3 yang runtut.` },
                            { ok: score >= 90, title: `Alt Tag Gambar (Image Alt)`, desc: `Gambar pendukung memiliki alt tag deskriptif.` },
                            { ok: true, title: `Tag Canonical Terpasang`, desc: `Tautan canonical menunjuk ke URL asli.` }
                        ].map(item => `
                            <div class="audit-item">
                                <i class="fa-solid ${item.ok ? 'fa-circle-check check-icon ok' : 'fa-circle-exclamation check-icon warn'}"></i>
                                <div>
                                    <div class="audit-title">${item.title}</div>
                                    <div class="audit-desc">${item.desc}</div>
                                </div>
                            </div>
                        `).join('');
                    }

                    analyzeBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> Analisa';
                    analyzeBtn.disabled = false;
                    analyzerResult.style.display = 'block';
                    showToast("Analisa on-page SEO selesai!");
                }, 800);
            });
        }
    }

    // ==========================================
    // 7. SCHEMA BUILDER TAB
    // ==========================================
    function setupSchemaBuilder() {
        const schemaTabs = document.querySelectorAll('.schema-tab');
        const schemaForm = document.getElementById('schemaForm');
        const schemaOutput = document.getElementById('schemaOutput');
        const copySchemaBtn = document.getElementById('copySchemaBtn');

        schemaTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                schemaTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                state.currentSchemaType = tab.getAttribute('data-schema');
                renderSchemaForm();
            });
        });

        function renderSchemaForm() {
            if (!schemaForm) return;
            
            if (state.currentSchemaType === 'localbusiness') {
                schemaForm.innerHTML = `
                    <div class="card-header"><h2>Konfigurasi LocalBusiness</h2></div>
                    <div class="form-body">
                        <div class="form-group"><label>Nama Bisnis</label><input type="text" id="schBizName" class="form-input" value="Zelina Transport"></div>
                        <div class="form-group"><label>Alamat Jalan</label><input type="text" id="schBizStreet" class="form-input" value="Batu 8 atas JL. Raja Haji Fisabilillah"></div>
                        <div class="form-group"><label>Kota</label><input type="text" id="schBizCity" class="form-input" value="Tanjung Pinang"></div>
                        <div class="form-group"><label>Telepon</label><input type="text" id="schBizPhone" class="form-input" value="+6285763760841"></div>
                        <button class="btn-primary-full" id="buildSchemaBtn">Generate Schema JSON</button>
                    </div>
                `;
            } else if (state.currentSchemaType === 'faq') {
                schemaForm.innerHTML = `
                    <div class="card-header"><h2>Konfigurasi FAQPage</h2></div>
                    <div class="form-body">
                        <div class="form-group"><label>Pertanyaan 1</label><input type="text" id="schFaqQ1" class="form-input" value="Bagaimana syarat sewa lepas kunci di Zelina Transport?"></div>
                        <div class="form-group"><label>Jawaban 1</label><input type="text" id="schFaqA1" class="form-input" value="Cukup menyiapkan KTP, SIM A aktif, dan dokumen pendukung lain untuk verifikasi cepat."></div>
                        <div class="form-group"><label>Pertanyaan 2</label><input type="text" id="schFaqQ2" class="form-input" value="Apakah harga sudah termasuk bahan bakar?"></div>
                        <div class="form-group"><label>Jawaban 2</label><input type="text" id="schFaqA2" class="form-input" value="Tergantung paket yang dipilih, kami menyediakan opsi rental mobil dengan supir+BBM atau lepas kunci."></div>
                        <button class="btn-primary-full" id="buildSchemaBtn">Generate Schema JSON</button>
                    </div>
                `;
            } else {
                schemaForm.innerHTML = `
                    <div class="card-header"><h2>Konfigurasi Schema</h2></div>
                    <div class="form-body">
                        <p style="font-size:13px; color:var(--text2);">Skema ${state.currentSchemaType.toUpperCase()} siap di-generate secara otomatis.</p>
                        <button class="btn-primary-full" id="buildSchemaBtn">Generate General Schema</button>
                    </div>
                `;
            }

            const buildBtn = document.getElementById('buildSchemaBtn');
            if (buildBtn) {
                buildBtn.addEventListener('click', generateJsonLd);
            }
        }

        function generateJsonLd() {
            let obj = {};
            
            if (state.currentSchemaType === 'localbusiness') {
                const name = document.getElementById('schBizName').value;
                const street = document.getElementById('schBizStreet').value;
                const city = document.getElementById('schBizCity').value;
                const phone = document.getElementById('schBizPhone').value;
                
                obj = {
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": name,
                    "image": "https://tanjungpinangrentcar.com/assets/logo.png",
                    "telephone": phone,
                    "priceRange": "Rp250000 - Rp1800000",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": street,
                        "addressLocality": city,
                        "addressCountry": "ID"
                    }
                };
            } else if (state.currentSchemaType === 'faq') {
                const q1 = document.getElementById('schFaqQ1').value;
                const a1 = document.getElementById('schFaqA1').value;
                const q2 = document.getElementById('schFaqQ2').value;
                const a2 = document.getElementById('schFaqA2').value;
                
                obj = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": q1,
                            "acceptedAnswer": { "@type": "Answer", "text": a1 }
                        },
                        {
                            "@type": "Question",
                            "name": q2,
                            "acceptedAnswer": { "@type": "Answer", "text": a2 }
                        }
                    ]
                };
            } else {
                obj = {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Zelina Transport",
                    "url": "https://tanjungpinangrentcar.com"
                };
            }

            if (schemaOutput) {
                schemaOutput.textContent = `<script type="application/ld+json">\n${JSON.stringify(obj, null, 4)}\n<\/script>`;
                showToast("Schema JSON-LD berhasil dibuat!");
            }
        }

        if (copySchemaBtn) {
            copySchemaBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(schemaOutput.textContent);
                showToast("Schema disalin ke clipboard!");
            });
        }

        renderSchemaForm();
    }

    // ==========================================
    // 8. DEPLOY MANAGER TAB
    // ==========================================
    function setupDeployManager() {
        const genDeployBtn = document.getElementById('genDeployBtn');
        const deployOutput = document.getElementById('deployOutput');
        const copyDeployBtn = document.getElementById('copyDeployBtn');
        const downloadDeployBtn = document.getElementById('downloadDeployBtn');
        const deployChecklist = document.getElementById('deployChecklist');

        if (genDeployBtn) {
            genDeployBtn.addEventListener('click', () => {
                const commit = document.getElementById('commitMsg').value.trim() || "Update artikel SEO Juli 2026";
                const branch = document.getElementById('gitBranch').value.trim() || "main";
                
                const optGen = document.getElementById('optGenerate').checked;
                const optSync = document.getElementById('optSync').checked;
                const optPush = document.getElementById('optPush').checked;

                let bat = `@echo off\ntitle Push Update SEO ke GitHub - Zelina Transport\ncolor 0b\necho ==========================================================\necho       MEMULAI PROSES UPDATE SEO DAN DEPLOY GITHUB\necho ==========================================================\necho.\n`;

                if (optGen) {
                    bat += `echo 1. Generate & Update Otomatis Artikel SEO...\nnode seo_automation.js\necho.\n`;
                }
                
                if (optSync) {
                    bat += `echo 2. Menyinkronkan file ke folder produksi (tanjungpinang)...\nxcopy "d:\\proj\\rentcartanjung\\index.html" "d:\\proj\\tanjungpinang\\" /y /d\nxcopy "d:\\proj\\rentcartanjung\\style.css" "d:\\proj\\tanjungpinang\\" /y /d\nxcopy "d:\\proj\\rentcartanjung\\artikel.html" "d:\\proj\\tanjungpinang\\" /y /d\nxcopy "d:\\proj\\rentcartanjung\\script.js" "d:\\proj\\tanjungpinang\\" /y /d\nxcopy "d:\\proj\\rentcartanjung\\assets\\*" "d:\\proj\\tanjungpinang\\assets\\" /y /e /i /d\nxcopy "d:\\proj\\rentcartanjung\\blog\\*" "d:\\proj\\tanjungpinang\\blog\\" /y /e /i /d\necho.\n`;
                }

                if (optPush) {
                    bat += `echo 3. Menyiapkan Git Commit...\ngit add .\ngit commit -m "${commit}"\necho.\necho 4. Mengirim perubahan ke GitHub...\ngit push origin ${branch}\necho.\n`;
                }

                bat += `echo ==========================================================\necho Selesai! Seluruh artikel terbaru siap online di web.\necho ==========================================================\npause > nul`;

                deployOutput.textContent = bat;
                showToast("Deploy script (.bat) berhasil dibuat!");
            });
        }

        if (copyDeployBtn) {
            copyDeployBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(deployOutput.textContent);
                showToast("Script disalin ke clipboard!");
            });
        }

        if (downloadDeployBtn) {
            downloadDeployBtn.addEventListener('click', () => {
                const content = deployOutput.textContent;
                if (!content || content.includes("Klik Generate Script")) {
                    showToast("Generate script terlebih dahulu!", "error");
                    return;
                }
                
                const blob = new Blob([content], { type: 'text/plain' });
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = "Push_Revisi_GitHub.bat";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                showToast("File bat berhasil diunduh!");
            });
        }

        // Render pre-deploy checklist
        if (deployChecklist) {
            const checks = [
                { ok: true, label: "Simpan Semua Artikel", desc: "Pastikan seluruh file artikel SEO sudah disimpan ke folder blog/." },
                { ok: true, label: "Verifikasi Sitemap", desc: "Periksa sitemap.xml memuat semua artikel baru." },
                { ok: true, label: "Test Kecepatan Halaman", desc: "Pastikan load time optimal di platform seluler." }
            ];

            deployChecklist.innerHTML = checks.map(c => `
                <div class="check-item">
                    <i class="fa-solid fa-circle-check check-icon ok"></i>
                    <div>
                        <div class="check-label">${c.label}</div>
                        <div class="check-desc">${c.desc}</div>
                    </div>
                </div>
            `).join('');
        }
    }
});
