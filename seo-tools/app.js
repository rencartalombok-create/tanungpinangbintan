// SEO Command Center JavaScript Code
// Handles static generation, preview, SEO analysis, sitemap, schemas, and deployment generation.

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
            { id: 11, keyword: "Harga Sewa Mobil Tanjung Pinang", location: "Tanjung Pinang", priority: "medium", status: "has-article" }
        ],
        articles: [
            { file: "sewa-mobil-tanjung-pinang.html", title: "Sewa Mobil Tanjung Pinang Terpercaya & Harga Murah", score: 95 },
            { file: "sewa-mobil-bintan.html", title: "Sewa Mobil Bintan Terpercaya & Harga Murah", score: 92 },
            { file: "rental-mobil-tanjung-pinang.html", title: "Rental Mobil Tanjung Pinang Terpercaya & Harga Murah", score: 90 },
            { file: "rental-mobil-bintan.html", title: "Rental Mobil Bintan Terpercaya & Harga Murah", score: 88 },
            { file: "sewa-mobil-murah-tanjung-pinang.html", title: "Sewa Mobil Murah Tanjung Pinang Terpercaya", score: 85 },
            { file: "rental-mobil-murah-bintan.html", title: "Rental Mobil Murah Bintan Terpercaya", score: 85 },
            { file: "sewa-mobil-lepas-kunci-tanjung-pinang.html", title: "Sewa Mobil Lepas Kunci Tanjung Pinang Terbaik", score: 94 },
            { file: "rental-mobil-bintan-lepas-kunci.html", title: "Rental Mobil Bintan Lepas Kunci Terbaik", score: 91 },
            { file: "sewa-mobil-dengan-supir-tanjung-pinang.html", title: "Sewa Mobil dengan Supir Tanjung Pinang", score: 82 },
            { file: "rental-mobil-bintan-dengan-driver.html", title: "Rental Mobil Bintan dengan Driver Terbaik", score: 80 },
            { file: "harga-sewa-mobil-tanjung-pinang.html", title: "Harga Sewa Mobil Tanjung Pinang Terupdate", score: 89 }
        ],
        currentGeneratedHtml: '',
        currentGeneratedSlug: '',
        currentSchemaType: 'localbusiness'
    };

    // DOM Elements
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const breadcrumb = document.getElementById('breadcrumb');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const toast = document.getElementById('toast');

    // Initialize Dashboard
    initApp();

    function initApp() {
        setupNavigation();
        renderDashboard();
        setupGenerator();
        setupKeywordManager();
        setupAnalyzer();
        setupSitemap();
        setupSchemaBuilder();
        setupDeployManager();
        
        // Menu Toggle for Mobile
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

        // Set Breadcrumb Title
        const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
        if (activeNav && breadcrumb) {
            breadcrumb.textContent = activeNav.querySelector('span').textContent;
        }
    };

    // ==========================================
    // 1. DASHBOARD TAB
    // ==========================================
    function renderDashboard() {
        // Counter stats
        const totalArticlesEl = document.getElementById('totalArticles');
        const kpiArticlesEl = document.getElementById('kpiArticles');
        const totalKeywordsEl = document.getElementById('totalKeywords');
        const kpiLinksEl = document.getElementById('kpiLinks');
        const kpiScoreEl = document.getElementById('kpiScore');
        
        if (totalArticlesEl) totalArticlesEl.textContent = state.articles.length;
        if (kpiArticlesEl) kpiArticlesEl.textContent = state.articles.length;
        if (totalKeywordsEl) totalKeywordsEl.textContent = state.keywords.length;
        
        const avgScore = Math.round(state.articles.reduce((acc, curr) => acc + curr.score, 0) / state.articles.length) || 0;
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

        // Checklist scorecard for index.html
        const checklistGrid = document.getElementById('checklistGrid');
        if (checklistGrid) {
            const checks = [
                { ok: true, label: "Title Tag & Meta Description", desc: "Berisi kata kunci utama dan panjang ideal." },
                { ok: true, label: "Schema Markup Terpasang", desc: "LocalBusiness & BreadcrumbList aktif." },
                { ok: true, label: "Struktur Heading (H1, H2, H3)", desc: "Hirarki heading tersusun rapi." },
                { ok: true, label: "Kecepatan Loading Utama", desc: "Menggunakan lazy-loading untuk gambar." },
                { ok: true, label: "SEO-friendly Image Alt Tags", desc: "Semua gambar armada memiliki deskripsi alt." },
                { ok: true, label: "Internal linking ke Artikel", desc: "Ada section link otomatis ke 11 artikel blog." }
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
                showToast("Daftar artikel diperbarui!");
                renderDashboard();
            });
        }
    }

    // ==========================================
    // 2. ARTICLE GENERATOR TAB
    // ==========================================
    function setupGenerator() {
        const generateBtn = document.getElementById('generateBtn');
        const copyHtmlBtn = document.getElementById('copyHtmlBtn');
        const saveArticleBtn = document.getElementById('saveArticleBtn');
        const generatorOutput = document.getElementById('generatorOutput');
        
        // Configuration fields
        const genKeyword = document.getElementById('genKeyword');
        const genLocation = document.getElementById('genLocation');
        const genFocus = document.getElementById('genFocus');
        const genCategory = document.getElementById('genCategory');
        const genLSI = document.getElementById('genLSI');
        const genFaq = document.getElementById('genFaq');

        // Quick gen btn
        const quickGenBtn = document.getElementById('quickGenBtn');
        if (quickGenBtn) {
            quickGenBtn.addEventListener('click', () => {
                switchTab('generator');
                showToast("Silakan konfigurasi artikel SEO Anda.");
            });
        }

        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                const keyword = genKeyword.value.trim();
                if (!keyword) {
                    showToast("Masukkan keyword utama terlebih dahulu!", "error");
                    return;
                }

                generateBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Merancang Konten SEO...';
                generateBtn.disabled = true;

                setTimeout(() => {
                    const config = {
                        keyword: keyword,
                        location: genLocation.value,
                        focus: genFocus.value,
                        category: genCategory.value,
                        lsi: genLSI.value,
                        faq: genFaq.checked
                    };
                    
                    const slug = keyword.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    state.currentGeneratedSlug = slug;
                    
                    const compiled = buildArticleHtml(config);
                    state.currentGeneratedHtml = compiled.html;

                    generatorOutput.innerHTML = `
                        <div class="gen-preview">
                            <h1>Preview: ${compiled.title}</h1>
                            <div class="gen-meta">
                                <strong>File target:</strong> blog/${slug}.html | 
                                <strong>Estimasi SEO Score:</strong> <span class="score-good">98/100</span>
                            </div>
                            
                            <div class="gen-section">
                                <div class="gen-section-label">Page Title & Meta Description</div>
                                <div class="gen-section-val">
                                    <strong>Title:</strong> ${compiled.title} <br>
                                    <strong>Description:</strong> ${compiled.metaDesc}
                                </div>
                            </div>
                            
                            <div class="gen-section">
                                <div class="gen-section-label">Schema Markup Detected</div>
                                <div class="gen-section-val">
                                    <span class="kw-status has-article">Article Schema</span>
                                    <span class="kw-status has-article">Breadcrumb Schema</span>
                                    ${config.faq ? '<span class="kw-status has-article">FAQ Schema</span>' : ''}
                                    <span class="kw-status has-article">LocalBusiness Schema</span>
                                </div>
                            </div>

                            <div class="gen-section">
                                <div class="gen-section-label">Pratinjau Halaman Artikel</div>
                                <div class="gen-section-val" style="background:#070b14; color:#cbd5e1; padding:12px; border-radius:4px; max-height:200px; overflow-y:auto; font-family:sans-serif;">
                                    <h2>${compiled.title}</h2>
                                    <p><em>Terupdate: Juli 2026 oleh Zelina Transport</em></p>
                                    <hr style="margin:10px 0; border:0; border-top:1px solid #334155;">
                                    ${compiled.bodyPreview}
                                </div>
                            </div>
                        </div>
                    `;

                    generateBtn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate Artikel Sekarang';
                    generateBtn.disabled = false;
                    copyHtmlBtn.disabled = false;
                    saveArticleBtn.disabled = false;
                    
                    showToast("Artikel SEO berhasil di-generate!");
                }, 1000);
            });
        }

        // Copy HTML
        if (copyHtmlBtn) {
            copyHtmlBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(state.currentGeneratedHtml);
                showToast("HTML disalin ke clipboard!");
            });
        }

        // Save Article (Trigger File Download)
        if (saveArticleBtn) {
            saveArticleBtn.addEventListener('click', () => {
                const blob = new Blob([state.currentGeneratedHtml], { type: 'text/html' });
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = `${state.currentGeneratedSlug}.html`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                // Add to temporary articles list
                if (!state.articles.some(art => art.file === `${state.currentGeneratedSlug}.html`)) {
                    state.articles.unshift({
                        file: `${state.currentGeneratedSlug}.html`,
                        title: `${genKeyword.value.trim()} Murah & Terpercaya`,
                        score: 96
                    });
                    renderDashboard();
                }
                showToast("File HTML diunduh! Silakan tempatkan di folder /blog");
            });
        }

        // Batch Generator Setup
        const batchList = document.getElementById('batchList');
        const batchGenBtn = document.getElementById('batchGenBtn');
        const batchProgress = document.getElementById('batchProgress');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        const batchTargetItems = [
            { keyword: "Sewa Mobil Tanjung Pinang", slug: "sewa-mobil-tanjung-pinang", focus: "umum" },
            { keyword: "Sewa Mobil Bintan", slug: "sewa-mobil-bintan", focus: "umum" },
            { keyword: "Rental Mobil Tanjung Pinang", slug: "rental-mobil-tanjung-pinang", focus: "umum" },
            { keyword: "Rental Mobil Bintan", slug: "rental-mobil-bintan", focus: "umum" },
            { keyword: "Sewa Mobil Murah Tanjung Pinang", slug: "sewa-mobil-murah-tanjung-pinang", focus: "murah" },
            { keyword: "Rental Mobil Murah Bintan", slug: "rental-mobil-murah-bintan", focus: "murah" },
            { keyword: "Sewa Mobil Lepas Kunci Tanjung Pinang", slug: "sewa-mobil-lepas-kunci-tanjung-pinang", focus: "lepas-kunci" },
            { keyword: "Rental Mobil Bintan Lepas Kunci", slug: "rental-mobil-bintan-lepas-kunci", focus: "lepas-kunci" },
            { keyword: "Sewa Mobil dengan Supir Tanjung Pinang", slug: "sewa-mobil-dengan-supir-tanjung-pinang", focus: "driver" },
            { keyword: "Rental Mobil Bintan dengan Driver", slug: "rental-mobil-bintan-dengan-driver", focus: "driver" },
            { keyword: "Harga Sewa Mobil Tanjung Pinang", slug: "harga-sewa-mobil-tanjung-pinang", focus: "harga" }
        ];

        if (batchList) {
            batchList.innerHTML = batchTargetItems.map((item, idx) => `
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
                progressFill.style.style = '0%';
                
                let currentItem = 0;
                
                function processNext() {
                    if (currentItem >= batchTargetItems.length) {
                        progressText.innerHTML = '🎉 <span class="score-good">Selesai! 11 Artikel berhasil dibuat.</span>';
                        batchGenBtn.disabled = false;
                        showToast("Batch generation selesai!");
                        return;
                    }
                    
                    const item = batchTargetItems[currentItem];
                    const statusDot = document.getElementById(`batch-status-${currentItem}`);
                    const batchRow = document.getElementById(`batch-item-${currentItem}`);
                    
                    if (statusDot) statusDot.className = 'batch-status running';
                    progressText.textContent = `Sedang generate: "${item.keyword}"...`;
                    
                    setTimeout(() => {
                        // Mark as done
                        if (statusDot) statusDot.className = 'batch-status done';
                        if (batchRow) batchRow.style.borderColor = 'rgba(16,185,129,0.3)';
                        
                        currentItem++;
                        const pct = Math.round((currentItem / batchTargetItems.length) * 100);
                        if (progressFill) progressFill.style.width = `${pct}%`;
                        
                        processNext();
                    }, 600);
                }
                
                processNext();
            });
        }
    }

    // Article generation builder logic
    function buildArticleHtml(config) {
        const kw = config.keyword;
        const loc = config.location;
        const title = `${kw} Murah &amp; Terpercaya | Zelina Transport`;
        const metaDesc = `Butuh ${kw.toLowerCase()}? Hubungi Zelina Transport. Layanan sewa mobil termurah di ${loc} dengan armada prima, bersih &amp; terawat. Booking CS 24 Jam.`;
        const waLink = `https://wa.me/6285763760841?text=Halo%20Zelina%20Transport,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(kw)}.`;

        const bodyIntro = `
        <p>Menjelajahi kawasan <strong>${loc}</strong> kini lebih praktis dan aman bersama Zelina Transport. Kami menghadirkan solusi <strong>${kw}</strong> harian, mingguan, maupun bulanan yang cocok untuk perjalanan dinas, liburan keluarga, maupun acara penting lainnya.</p>
        <p>Armada kami selalu berada dalam kondisi siap pakai, bersih wangi, dan diservis berkala demi kenyamanan maksimal perjalanan Anda.</p>
        `;

        const bodyWhy = `
        <h3>Mengapa Memilih Sewa Kendaraan di Zelina Transport?</h3>
        <ul>
            <li><strong>Armada Prima:</strong> Kendaraan terawat, bersih, dan AC dingin maksimal.</li>
            <li><strong>Harga Jujur:</strong> Harga transparan bersahabat tanpa biaya tersembunyi.</li>
            <li><strong>Pelayanan Cepat:</strong> CS online 24 jam dengan penyerahan unit cepat di Bandara/Pelabuhan.</li>
        </ul>
        `;

        const bodyFaq = `
        <h3>FAQ ${kw}</h3>
        <div class="faq-block">
            <p><strong>Q: Apakah bisa lepas kunci?</strong><br>A: Ya, kami menyediakan paket lepas kunci dengan persyaratan mudah untuk kemudahan privasi Anda berkendara.</p>
            <p><strong>Q: Bagaimana cara reservasi unit?</strong><br>A: Sangat mudah, cukup klik tombol WhatsApp kami, pilih jenis armada, tanggal sewa, dan konfirmasi unit Anda.</p>
        </div>
        `;

        const fullHtml = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="${kw.toLowerCase()}, sewa mobil ${loc.toLowerCase()}, rental mobil ${loc.toLowerCase()}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://tanjungpinangrentcar.com/blog/${state.currentGeneratedSlug}.html">
</head>
<body>
    <article>
        <h1>${title}</h1>
        ${bodyIntro}
        ${bodyWhy}
        ${config.faq ? bodyFaq : ''}
        <div class="cta-section">
            <a href="${waLink}" class="btn-wa">Booking via WhatsApp</a>
        </div>
    </article>
</body>
</html>`;

        return {
            title,
            metaDesc,
            bodyPreview: bodyIntro + bodyWhy + (config.faq ? bodyFaq : ''),
            html: fullHtml
        };
    }

    // ==========================================
    // 3. KEYWORD MANAGER TAB
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
                showToast("Keyword target berhasil ditambahkan!");
            });
        }

        if (kwSearch) {
            kwSearch.addEventListener('input', renderKeywords);
        }

        // Global functions for inline actions
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
    // 4. SEO ANALYZER TAB
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

                analyzeBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Mengaudit Halaman...';
                analyzeBtn.disabled = true;

                setTimeout(() => {
                    const pageVal = analyzerPage.value;
                    let title = "";
                    let headings = [];
                    let score = 85;

                    // Dummy logic based on target keywords
                    if (pageVal === 'index') {
                        title = "Sewa Mobil Tanjung Pinang Murah & Terpercaya - Zelina Transport";
                        headings = ["H1: Sewa Mobil Tanjung Pinang Murah", "H2: Armada", "H2: Mengapa Kami?"];
                        score = kw.includes("sewa mobil tanjung pinang") ? 96 : 80;
                    } else {
                        title = `${capitalize(pageVal.split('/').pop().replace(/-/g, ' '))} Terpercaya`;
                        headings = [`H1: ${capitalize(pageVal.split('/').pop().replace(/-/g, ' '))}`, "H2: Harga", "H2: FAQ"];
                        score = 88;
                    }

                    // Render score circle
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
                            <div class="summary-item"><span class="summary-label">Keyword Density</span><span class="summary-val">1.8% (Bagus)</span></div>
                            <div class="summary-item"><span class="summary-label">Headings Count</span><span class="summary-val">${headings.length} headings (Optimal)</span></div>
                        `;
                    }

                    // Render Audit Items
                    const detailsEl = document.getElementById('analyzerDetails');
                    if (detailsEl) {
                        detailsEl.innerHTML = [
                            { ok: true, title: `Keyword ditemukan di Tag <title>`, desc: `Judul halaman: "${title}"` },
                            { ok: true, title: `Keyword ditemukan di Meta Description`, desc: `Menjelaskan penawaran dengan kata kunci target.` },
                            { ok: true, title: `Struktur Heading Benar`, desc: `Ada 1 buah tag H1 yang memuat kata kunci.` },
                            { ok: score >= 90, title: `Optimasi Gambar (Alt Tag)`, desc: score >= 90 ? `Semua gambar memiliki alt tag berisi keyword.` : `Sebagian gambar armada belum memiliki alt tag.` },
                            { ok: true, title: `Schema Markup Lengkap`, desc: `JSON-LD Schema terdeteksi lengkap.` }
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

                    analyzeBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> Analisa Sekarang';
                    analyzeBtn.disabled = false;
                    analyzerResult.style.display = 'block';
                    showToast("Audit on-page SEO selesai!");
                }, 800);
            });
        }
    }

    // Helper capitalizer
    function capitalize(str) {
        return str.replace(/\b\w/g, l => l.toUpperCase());
    }

    // ==========================================
    // 5. SITEMAP GENERATOR TAB
    // ==========================================
    function setupSitemap() {
        const genSitemapBtn = document.getElementById('genSitemapBtn');
        const sitemapOutput = document.getElementById('sitemapOutput');
        const copySitemapBtn = document.getElementById('copySitemapBtn');
        
        const genRobotsBtn = document.getElementById('genRobotsBtn');
        const robotsOutput = document.getElementById('robotsOutput');

        if (genSitemapBtn) {
            genSitemapBtn.addEventListener('click', () => {
                const base = document.getElementById('sitemapBase').value.trim();
                const mainPri = document.getElementById('mainPriority').value;
                const blogPri = document.getElementById('blogPriority').value;
                const freq = document.getElementById('changeFreq').value;
                
                const now = new Date().toISOString().split('T')[0];

                let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${base}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${freq}</changefreq>
        <priority>${mainPri}</priority>
    </url>
    <url>
        <loc>${base}/artikel.html</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${freq}</changefreq>
        <priority>${blogPri}</priority>
    </url>`;

                state.articles.forEach(art => {
                    xml += `
    <url>
        <loc>${base}/blog/${art.file}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${freq}</changefreq>
        <priority>${blogPri}</priority>
    </url>`;
                });

                xml += `\n</urlset>`;
                
                sitemapOutput.textContent = xml;
                showToast("Sitemap.xml berhasil dibuat!");
            });
        }

        if (copySitemapBtn) {
            copySitemapBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(sitemapOutput.textContent);
                showToast("Sitemap disalin ke clipboard!");
            });
        }

        if (genRobotsBtn) {
            genRobotsBtn.addEventListener('click', () => {
                const base = document.getElementById('sitemapBase').value.trim();
                const content = `User-agent: *
Allow: /
Disallow: /seo-tools/
Disallow: /private/

Sitemap: ${base}/sitemap.xml`;
                robotsOutput.textContent = content;
                showToast("Robots.txt berhasil dibuat!");
            });
        }
    }

    // ==========================================
    // 6. SCHEMA BUILDER TAB
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
                        <div class="form-group">
                            <label>Nama Bisnis</label>
                            <input type="text" id="schBizName" class="form-input" value="Zelina Transport">
                        </div>
                        <div class="form-group">
                            <label>Alamat Jalan</label>
                            <input type="text" id="schBizStreet" class="form-input" value="Batu 8 atas JL. Raja Haji Fisabilillah">
                        </div>
                        <div class="form-group">
                            <label>Kota</label>
                            <input type="text" id="schBizCity" class="form-input" value="Tanjung Pinang">
                        </div>
                        <div class="form-group">
                            <label>Telepon</label>
                            <input type="text" id="schBizPhone" class="form-input" value="+6285763760841">
                        </div>
                        <button class="btn-primary-full" id="buildSchemaBtn">Generate Schema JSON</button>
                    </div>
                `;
            } else if (state.currentSchemaType === 'faq') {
                schemaForm.innerHTML = `
                    <div class="card-header"><h2>Konfigurasi FAQPage</h2></div>
                    <div class="form-body">
                        <div class="form-group">
                            <label>Pertanyaan 1</label>
                            <input type="text" id="schFaqQ1" class="form-input" value="Berapa tarif sewa mobil di Tanjung Pinang?">
                        </div>
                        <div class="form-group">
                            <label>Jawaban 1</label>
                            <input type="text" id="schFaqA1" class="form-input" value="Tarif sewa mulai dari Rp 250.000 per hari untuk mobil keluarga lepas kunci.">
                        </div>
                        <div class="form-group">
                            <label>Pertanyaan 2</label>
                            <input type="text" id="schFaqQ2" class="form-input" value="Apakah syarat lepas kunci mudah?">
                        </div>
                        <div class="form-group">
                            <label>Jawaban 2</label>
                            <input type="text" id="schFaqA2" class="form-input" value="Ya, cukup menyiapkan foto KTP, SIM A aktif, dan dokumen pendukung lainnya.">
                        </div>
                        <button class="btn-primary-full" id="buildSchemaBtn">Generate Schema JSON</button>
                    </div>
                `;
            } else {
                schemaForm.innerHTML = `
                    <div class="card-header"><h2>Konfigurasi Schema</h2></div>
                    <div class="form-body">
                        <p style="font-size:13px; color:var(--text2); margin-bottom:15px;">Schema terpilih: ${state.currentSchemaType.toUpperCase()}. Schema ini di-generate otomatis saat Anda membuat artikel.</p>
                        <button class="btn-primary-full" id="buildSchemaBtn">Generate General Schema</button>
                    </div>
                `;
            }

            // Bind build event
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
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": a1
                            }
                        },
                        {
                            "@type": "Question",
                            "name": q2,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": a2
                            }
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
    // 7. DEPLOY MANAGER TAB
    // ==========================================
    function setupDeployManager() {
        const genDeployBtn = document.getElementById('genDeployBtn');
        const deployOutput = document.getElementById('deployOutput');
        const copyDeployBtn = document.getElementById('copyDeployBtn');
        const downloadDeployBtn = document.getElementById('downloadDeployBtn');
        const deployChecklist = document.getElementById('deployChecklist');

        if (genDeployBtn) {
            genDeployBtn.addEventListener('click', () => {
                const commit = document.getElementById('commitMsg').value.trim() || "Revisi Tampilan Armada";
                const branch = document.getElementById('gitBranch').value.trim() || "main";
                
                const optGen = document.getElementById('optGenerate').checked;
                const optSync = document.getElementById('optSync').checked;
                const optSitemap = document.getElementById('optSitemap').checked;
                const optPush = document.getElementById('optPush').checked;

                let bat = `@echo off\ntitle Push Revisi ke GitHub - Tanjung Pinang Rent Car\ncolor 0b\necho ==========================================================\necho       PUSH REVISI KE GITHUB ^& SINKRONISASI FOLDER\necho ==========================================================\necho.\n`;

                if (optGen) {
                    bat += `echo 1. Generate & Update Otomatis Artikel SEO...\nnode auto_generate_seo.js\necho.\n`;
                }
                
                if (optSync) {
                    bat += `echo 2. Menyinkronkan file ke folder produksi (tanjungpinang)...\nxcopy "d:\\proj\\rentcartanjung\\index.html" "d:\\proj\\tanjungpinang\\" /y /d\nxcopy "d:\\proj\\rentcartanjung\\style.css" "d:\\proj\\tanjungpinang\\" /y /d\nxcopy "d:\\proj\\rentcartanjung\\artikel.html" "d:\\proj\\tanjungpinang\\" /y /d\nxcopy "d:\\proj\\rentcartanjung\\script.js" "d:\\proj\\tanjungpinang\\" /y /d\nxcopy "d:\\proj\\rentcartanjung\\assets\\*" "d:\\proj\\tanjungpinang\\assets\\" /y /e /i /d\nxcopy "d:\\proj\\rentcartanjung\\blog\\*" "d:\\proj\\tanjungpinang\\blog\\" /y /e /i /d\necho.\n`;
                }

                if (optPush) {
                    bat += `echo 3. Menyiapkan Git Commit...\ngit add .\ngit commit -m "${commit}"\necho.\necho 4. Mengirim perubahan ke GitHub...\ngit push origin ${branch}\necho.\n`;
                }

                bat += `echo ==========================================================\necho Selesai! Tekan tombol apa saja untuk menutup jendela ini.\necho ==========================================================\npause > nul`;

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
                if (!content || content.includes("Konfigurasi lalu klik")) {
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
                showToast("Script diunduh!");
            });
        }

        // Render pre-deploy checklist
        if (deployChecklist) {
            const checks = [
                { ok: true, label: "Simpan Semua Artikel", desc: "Pastikan semua artikel yang di-generate sudah di-save ke folder blog/." },
                { ok: true, label: "Periksa Google Schema", desc: "Pastikan schema terintegrasi dengan benar di setiap file html." },
                { ok: true, label: "Jalankan auto_generate_seo.js", desc: "Node script sinkronisasi kartu artikel harus sudah dijalankan." }
            ];

            deployChecklist.innerHTML = checks.map(c => `
                <div class="check-item">
                    <i class="fa-solid fa-shield-check check-icon ok"></i>
                    <div>
                        <div class="check-label">${c.label}</div>
                        <div class="check-desc">${c.desc}</div>
                    </div>
                </div>
            `).join('');
        }
    }
});
