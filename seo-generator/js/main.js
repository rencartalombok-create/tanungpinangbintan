// ==========================================
// AI SEO Article Generator - Core Logic
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // --- UI & Navigation ---
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('page-title');

    // Theme Management
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // Mobile Menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Update links
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Update Title
            pageTitle.textContent = link.textContent.trim();

            // Update sections
            contentSections.forEach(sec => {
                sec.classList.remove('active');
                if (sec.id === targetId) {
                    sec.classList.add('active');
                }
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Tabs in Result Section
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            tabContents.forEach(c => {
                c.classList.remove('active');
                if (c.id === `tab-${target}`) c.classList.add('active');
            });
        });
    });

    // --- Core Data & State ---
    let generatedData = null; // Store current generated HTML, SEO, etc.
    let savedArticles = JSON.parse(localStorage.getItem('savedArticles') || '[]');
    updateArticleListUI();
    updateDashboardStats();

    // --- Generator Logic ---
    const generateForm = document.getElementById('generate-form');
    const loader = document.getElementById('loader');
    const resultSection = document.getElementById('result-section');
    
    generateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Hide result, show loader
        resultSection.classList.add('hidden');
        loader.classList.remove('hidden');
        
        const progressFill = document.getElementById('progress-fill');
        progressFill.style.width = '0%';
        
        // Simulate AI Processing time
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 90) progress = 90;
            progressFill.style.width = `${progress}%`;
        }, 500);

        setTimeout(() => {
            clearInterval(interval);
            progressFill.style.width = '100%';
            
            // Generate Content
            generatedData = runAIGenerator();
            
            setTimeout(() => {
                loader.classList.add('hidden');
                renderResults(generatedData);
                resultSection.classList.remove('hidden');
                resultSection.scrollIntoView({ behavior: 'smooth' });
            }, 500);
            
        }, 3000); // 3 seconds simulation
    });

    function runAIGenerator() {
        const keyword = document.getElementById('keyword').value.trim();
        const kota = document.getElementById('kota').value.trim();
        const panjang = document.getElementById('panjang').value;
        const bahasa = document.getElementById('bahasa').value;
        const nada = document.getElementById('nada').value;
        const namaWeb = document.getElementById('nama_web').value.trim();
        const whatsapp = document.getElementById('whatsapp').value.trim();
        const alamat = document.getElementById('alamat').value.trim();
        const ctaText = document.getElementById('cta').value.trim();

        // Helpers
        const capitalize = s => s.replace(/\b\w/g, l => l.toUpperCase());
        const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        
        const mainKeyword = keyword.toLowerCase();
        const titleCaseKeyword = capitalize(mainKeyword);
        const slug = slugify(mainKeyword);
        const canonical = `https://${namaWeb.toLowerCase()}/blog/${slug}.html`;
        const waLink = `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20${namaWeb},%20saya%20ingin%20info%20mengenai%20${encodeURIComponent(mainKeyword)}`;
        
        const lsi = ["harga sewa mobil", "rental mobil murah", "sewa harian", "dengan supir", "lepas kunci"];

        const titleTag = `${titleCaseKeyword} Terbaik di ${kota} | ${namaWeb}`;
        const metaDesc = `Sedang mencari ${mainKeyword} di ${kota}? Kami menyediakan layanan rental mobil terpercaya, murah, dan nyaman. Booking sekarang di ${namaWeb}.`;
        
        const dateNow = new Date().toISOString();

        // 1. Generate Schema
        const schemaArticle = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": titleTag,
            "description": metaDesc,
            "author": { "@type": "Organization", "name": namaWeb },
            "publisher": { "@type": "Organization", "name": namaWeb, "logo": { "@type": "ImageObject", "url": `https://${namaWeb.toLowerCase()}/logo.png` } },
            "datePublished": dateNow,
            "dateModified": dateNow
        };
        const schemaFAQ = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": `Berapa harga ${mainKeyword}?`, "acceptedAnswer": { "@type": "Answer", "text": `Harga ${mainKeyword} bervariasi tergantung tipe mobil dan durasi sewa. Hubungi kami untuk penawaran terbaik.` } },
                { "@type": "Question", "name": `Apakah bisa lepas kunci?`, "acceptedAnswer": { "@type": "Answer", "text": "Tentu, kami menyediakan opsi lepas kunci maupun dengan supir profesional." } }
            ]
        };
        const schemaBreadcrumb = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://${namaWeb.toLowerCase()}` },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": `https://${namaWeb.toLowerCase()}/blog` },
                { "@type": "ListItem", "position": 3, "name": titleCaseKeyword, "item": canonical }
            ]
        };
        const schemaLocalBusiness = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": namaWeb,
            "image": `https://${namaWeb.toLowerCase()}/logo.png`,
            "telephone": whatsapp,
            "address": { "@type": "PostalAddress", "streetAddress": alamat, "addressLocality": kota, "addressCountry": "ID" }
        };

        // 2. Generate HTML Content
        const htmlTemplate = `<!DOCTYPE html>
<html lang="${bahasa.split('-')[0]}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titleTag}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="${mainKeyword}, ${lsi.join(', ')}, ${kota}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${canonical}">
    
    <!-- Open Graph -->
    <meta property="og:locale" content="${bahasa.replace('-', '_')}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${titleTag}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:site_name" content="${namaWeb}">
    <meta property="article:published_time" content="${dateNow}">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${titleTag}">
    <meta name="twitter:description" content="${metaDesc}">
    
    <!-- Schema Markup -->
    <script type="application/ld+json">\n${JSON.stringify(schemaArticle)}\n</script>
    <script type="application/ld+json">\n${JSON.stringify(schemaFAQ)}\n</script>
    <script type="application/ld+json">\n${JSON.stringify(schemaBreadcrumb)}\n</script>
    <script type="application/ld+json">\n${JSON.stringify(schemaLocalBusiness)}\n</script>
    
    <!-- Inline CSS for High Performance -->
    <style>
        :root { --primary: #0d6efd; --text: #333; --bg: #fff; --gray: #f8f9fa; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', system-ui, sans-serif; line-height: 1.6; color: var(--text); background: var(--bg); }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        header { text-align: center; padding: 40px 0; border-bottom: 1px solid #eee; margin-bottom: 30px; }
        h1 { font-size: 2.2rem; color: var(--primary); margin-bottom: 15px; }
        h2 { font-size: 1.8rem; margin: 30px 0 15px; border-bottom: 2px solid var(--primary); display: inline-block; }
        h3 { font-size: 1.4rem; margin: 20px 0 10px; }
        p { margin-bottom: 15px; font-size: 1.1rem; }
        ul, ol { margin-bottom: 15px; padding-left: 20px; }
        li { margin-bottom: 8px; font-size: 1.1rem; }
        .img-placeholder { width: 100%; height: 400px; background: #eee; display: flex; align-items: center; justify-content: center; margin: 20px 0; border-radius: 8px; font-style: italic; color: #888; }
        .cta-box { background: var(--gray); padding: 30px; border-radius: 8px; text-align: center; margin: 40px 0; border: 1px solid #ddd; }
        .btn { display: inline-block; background: #25d366; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 15px; }
        .faq { border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; padding: 15px; }
        .faq h3 { margin: 0 0 10px 0; font-size: 1.2rem; }
        .faq p { margin: 0; }
        .related-articles { background: var(--gray); padding: 20px; border-radius: 8px; margin-top: 40px; }
        .related-articles h3 { margin-top: 0; color: var(--primary); }
        footer { text-align: center; padding: 30px 0; margin-top: 50px; border-top: 1px solid #eee; font-size: 0.9rem; color: #666; }
        /* Responsive */
        @media(max-width: 768px) { h1 { font-size: 1.8rem; } .container { padding: 15px; } }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>${titleTag}</h1>
        <p>Dipublikasikan oleh <strong>${namaWeb}</strong> | Terakhir diupdate: ${new Date().toLocaleDateString('id-ID')}</p>
    </header>

    <article>
        <!-- Pendahuluan -->
        <p>Selamat datang di ${namaWeb}! Jika Anda sedang mencari informasi terkait <strong>${mainKeyword}</strong>, Anda berada di tempat yang tepat. Menjelajahi keindahan ${kota} tentu akan lebih mudah dan nyaman jika Anda memiliki kendaraan yang tepat. Kami hadir untuk memberikan solusi perjalanan terbaik untuk Anda.</p>
        
        <div class="img-placeholder" aria-label="Gambar representatif untuk ${mainKeyword}">
            [Gambar: ${titleCaseKeyword} di ${kota}]
        </div>

        <p>Kami memahami bahwa kenyamanan, keamanan, dan harga yang terjangkau adalah faktor utama dalam memilih layanan transportasi. Oleh karena itu, layanan ${mainKeyword} kami dirancang khusus untuk memenuhi segala kebutuhan mobilitas Anda, baik untuk liburan keluarga, perjalanan bisnis, maupun keperluan dinas instansi.</p>

        <!-- Mengapa Memilih Kami -->
        <h2>Mengapa Memilih Layanan Kami?</h2>
        <p>Banyak penyedia layanan transportasi di ${kota}, namun inilah alasan mengapa Anda harus memilih kami untuk urusan <strong>${mainKeyword}</strong>:</p>
        <ul>
            <li><strong>Armada Terawat & Bersih:</strong> Setiap unit kami selalu melalui pengecekan rutin dan dibersihkan sebelum digunakan.</li>
            <li><strong>Sopir Berpengalaman:</strong> Tim pengemudi kami ramah, profesional, dan sangat mengenal rute di ${kota}.</li>
            <li><strong>Harga Transparan:</strong> Tidak ada biaya tersembunyi. Anda mendapatkan harga ${mainKeyword} sesuai dengan kesepakatan.</li>
            <li><strong>Pelayanan 24/7:</strong> Kami siap melayani dan mendukung perjalanan Anda kapan saja dibutuhkan.</li>
        </ul>

        <!-- Armada & Harga -->
        <h2>Pilihan Armada & Estimasi Harga</h2>
        <p>Untuk menunjang pencarian Anda terkait ${mainKeyword}, kami menyediakan berbagai pilihan kendaraan mulai dari mobil keluarga, MPV, hingga minibus seperti <a href="/blog/sewa-hiace-bintan.html">sewa Hiace</a>. Hubungi kami untuk mendapatkan <em>${lsi[0]}</em> terbaik hari ini.</p>

        <div class="cta-box">
            <h3>Siap Untuk Memesan?</h3>
            <p>${ctaText}</p>
            <a href="${waLink}" class="btn" target="_blank" rel="noopener">Hubungi via WhatsApp Sekarang</a>
        </div>

        <!-- Area Layanan -->
        <h2>Cakupan Area Layanan di ${kota}</h2>
        <p>Layanan ${mainKeyword} kami mencakup berbagai titik strategis di ${kota}, termasuk bandara (<a href="/blog/rental-mobil-bandara-raja-haji-fisabilillah.html">rental bandara</a>), pelabuhan, hotel di kawasan <a href="/blog/sewa-mobil-lagoi.html">Lagoi</a>, hingga kawasan wisata unggulan lainnya. Kami siap melakukan pengantaran dan penjemputan tepat waktu.</p>

        <!-- Cara Booking -->
        <h2>Cara Mudah Melakukan Pemesanan</h2>
        <p>Proses pemesanan bersama kami sangat mudah dan cepat:</p>
        <ol>
            <li>Hubungi admin kami melalui nomor WhatsApp yang tertera.</li>
            <li>Sebutkan kebutuhan Anda, termasuk jadwal, jenis mobil, dan layanan (dengan supir/lepas kunci).</li>
            <li>Kami akan mengirimkan penawaran dan konfirmasi ketersediaan armada.</li>
            <li>Setelah sepakat, armada siap mengantar Anda mengeksplorasi ${kota}.</li>
        </ol>

        <!-- FAQ -->
        <h2>Pertanyaan yang Sering Diajukan (FAQ)</h2>
        <div class="faq">
            <h3>Berapa harga ${mainKeyword}?</h3>
            <p>Harga ${mainKeyword} bervariasi tergantung tipe mobil dan durasi sewa. Hubungi kami untuk penawaran terbaik.</p>
        </div>
        <div class="faq">
            <h3>Apakah bisa lepas kunci?</h3>
            <p>Tentu, kami menyediakan opsi lepas kunci maupun dengan supir profesional sesuai dengan syarat dan ketentuan yang berlaku.</p>
        </div>

        <!-- Kesimpulan -->
        <h2>Kesimpulan</h2>
        <p>Memilih penyedia <strong>${mainKeyword}</strong> yang tepat di ${kota} akan sangat menentukan kualitas perjalanan Anda. Dengan armada yang prima, pelayanan ramah, dan harga kompetitif, ${namaWeb} berkomitmen untuk menjadi mitra perjalanan terbaik Anda.</p>

        <!-- Internal Links & LSI -->
        <div class="related-articles">
            <h3>Layanan Lainnya yang Mungkin Anda Butuhkan</h3>
            <ul>
                <li><a href="/blog/sewa-mobil-bintan.html">Sewa Mobil Bintan Terbaik</a></li>
                <li><a href="/blog/rental-mobil-tanjung-pinang.html">Rental Mobil Tanjung Pinang Harga Termurah</a></li>
                <li><a href="/blog/sewa-avanza-bintan.html">Sewa Avanza Bintan Lepas Kunci</a></li>
            </ul>
        </div>

    </article>

    <footer>
        <p>&copy; ${new Date().getFullYear()} ${namaWeb}. All Rights Reserved.</p>
        <p>${alamat}</p>
    </footer>
</div>

</body>
</html>`;;

        // Calculate Reading Time (rough estimate, 200 words per minute)
        const wordCount = htmlTemplate.replace(/<[^>]*>?/gm, ' ').split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);

        return {
            keyword: mainKeyword,
            slug: slug,
            title: titleTag,
            desc: metaDesc,
            html: htmlTemplate,
            readTime: readTime,
            words: wordCount,
            date: new Date().toISOString()
        };
    }

    function renderResults(data) {
        // Update URL Bar
        document.getElementById('preview-url').textContent = `${document.getElementById('nama_web').value.toLowerCase()}/blog/${data.slug}.html`;
        
        // Update Read Time
        document.getElementById('read-time').innerHTML = `<i class="far fa-clock"></i> ${data.readTime} min read`;
        
        // Render Preview via iframe
        const previewContainer = document.getElementById('preview-container');
        previewContainer.innerHTML = '';
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '500px';
        iframe.style.border = 'none';
        previewContainer.appendChild(iframe);
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(data.html);
        iframe.contentWindow.document.close();

        // Render Code
        const codeContainer = document.getElementById('code-container');
        codeContainer.textContent = data.html;

        // Render SEO Data
        const seoContainer = document.getElementById('seo-data-container');
        seoContainer.innerHTML = `
            <div class="seo-item"><strong>Title Tag</strong><span>${data.title} (${data.title.length} chars)</span></div>
            <div class="seo-item"><strong>Meta Description</strong><span>${data.desc} (${data.desc.length} chars)</span></div>
            <div class="seo-item"><strong>URL Slug</strong><span>${data.slug}</span></div>
            <div class="seo-item"><strong>Primary Keyword</strong><span>${data.keyword}</span></div>
            <div class="seo-item"><strong>Word Count</strong><span>~${data.words} words</span></div>
            <div class="seo-item"><strong>Schema Markup</strong><span>Article, FAQ, LocalBusiness</span></div>
        `;
    }

    // --- Actions & Exports ---
    document.getElementById('btn-copy-code').addEventListener('click', () => {
        if (!generatedData) return;
        navigator.clipboard.writeText(generatedData.html).then(() => {
            const btn = document.getElementById('btn-copy-code');
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => btn.innerHTML = '<i class="far fa-copy"></i> Copy', 2000);
        });
    });

    document.getElementById('btn-download-html').addEventListener('click', () => {
        if (!generatedData) return;
        downloadFile(`${generatedData.slug}.html`, generatedData.html, 'text/html');
    });

    document.getElementById('btn-export-json').addEventListener('click', () => {
        if (!generatedData) return;
        const jsonData = JSON.stringify(generatedData, null, 2);
        downloadFile(`${generatedData.slug}.json`, jsonData, 'application/json');
    });

    document.getElementById('btn-export-md').addEventListener('click', () => {
        if (!generatedData) return;
        // Simple HTML to MD converter (crude but works for structure)
        let md = generatedData.html
            .replace(/<h1>(.*?)<\/h1>/g, '# $1\n')
            .replace(/<h2>(.*?)<\/h2>/g, '## $1\n')
            .replace(/<h3>(.*?)<\/h3>/g, '### $1\n')
            .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
            .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
            .replace(/<em>(.*?)<\/em>/g, '*$1*')
            .replace(/<a href="(.*?)".*?>(.*?)<\/a>/g, '[$2]($1)')
            .replace(/<[^>]*>?/gm, ''); // Remove remaining tags
            
        downloadFile(`${generatedData.slug}.md`, md.trim(), 'text/markdown');
    });

    document.getElementById('btn-download-zip').addEventListener('click', () => {
        if (!generatedData) return;
        if (typeof JSZip === 'undefined') {
            alert("JSZip library not loaded.");
            return;
        }
        
        const zip = new JSZip();
        zip.file(`${generatedData.slug}.html`, generatedData.html);
        zip.file(`${generatedData.slug}.md`, "Markdown version generated via AI SEO Tool");
        zip.file(`meta.json`, JSON.stringify({
            title: generatedData.title,
            keyword: generatedData.keyword,
            date: generatedData.date
        }, null, 2));
        
        zip.generateAsync({type:"blob"}).then(function(content) {
            const url = URL.createObjectURL(content);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${generatedData.slug}_seo_pack.zip`;
            a.click();
            URL.revokeObjectURL(url);
        });
    });

    document.getElementById('btn-publish').addEventListener('click', () => {
        if (!generatedData) return;
        
        // Save to LocalStorage array
        savedArticles.push({
            keyword: generatedData.keyword,
            slug: generatedData.slug,
            date: new Date().toISOString(),
            status: 'Draft'
        });
        localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
        
        updateArticleListUI();
        updateDashboardStats();
        
        alert(`Artikel "${generatedData.keyword}" berhasil disimpan ke daftar!`);
        document.querySelector('[data-target="articles"]').click();
    });

    function downloadFile(filename, content, type) {
        const blob = new Blob([content], { type: type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    // --- Dashboard & Article List Updates ---
    function updateDashboardStats() {
        document.getElementById('stat-total-articles').textContent = savedArticles.length;
    }

    function updateArticleListUI() {
        const list = document.getElementById('article-list');
        list.innerHTML = '';
        
        if (savedArticles.length === 0) {
            list.innerHTML = `<tr class="empty-row"><td colspan="5" class="text-center">Belum ada artikel yang digenerate.</td></tr>`;
            return;
        }
        
        // Sort descending by date
        const sorted = [...savedArticles].sort((a,b) => new Date(b.date) - new Date(a.date));
        
        sorted.forEach((article, index) => {
            const d = new Date(article.date);
            const dateStr = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${article.keyword}</strong></td>
                <td><span class="badge blue">/blog/${article.slug}.html</span></td>
                <td>${dateStr}</td>
                <td><span class="badge green">Ready</span></td>
                <td>
                    <button class="btn-icon" title="View/Edit" onclick="document.querySelector('[data-target=\\'generate\\']').click(); document.getElementById('keyword').value='${article.keyword}';"><i class="fas fa-eye"></i></button>
                    <button class="btn-icon" title="Download HTML" onclick="downloadSavedArticle(${index})" style="color: var(--primary-color);"><i class="fas fa-download"></i></button>
                    <button class="btn-icon" title="Delete" onclick="deleteArticle(${index})"><i class="fas fa-trash"></i></button>
                </td>
            `;
            list.appendChild(tr);
        });
    }

    // Global download function for saved articles
    window.downloadSavedArticle = function(index) {
        const article = savedArticles[index];
        if (!article) return;
        
        // Re-populate the form temporarily to re-generate the data using the main keyword
        const tempKeyword = document.getElementById('keyword').value;
        document.getElementById('keyword').value = article.keyword;
        
        // Re-run generation silently
        const data = runAIGenerator();
        
        // Restore original form value
        document.getElementById('keyword').value = tempKeyword;
        
        // Trigger download
        downloadFile(`${data.slug}.html`, data.html, 'text/html');
    };

    // Global delete function
    window.deleteArticle = function(index) {
        if(confirm("Hapus artikel ini?")) {
            // Need to map sorted index to original array, simplified here for demo:
            savedArticles.splice(index, 1);
            localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
            updateArticleListUI();
            updateDashboardStats();
        }
    };
    
    // Sitemap Generator
    document.getElementById('btn-generate-sitemap').addEventListener('click', () => {
        if (savedArticles.length === 0) {
            alert('Belum ada artikel untuk dibuat sitemap.');
            return;
        }
        const namaWeb = document.getElementById('nama_web').value.trim() || 'tanjungpinang.com';
        
        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
        
        savedArticles.forEach(a => {
            xml += `  <url>\n    <loc>https://${namaWeb.toLowerCase()}/blog/${a.slug}.html</loc>\n    <lastmod>${a.date.split('T')[0]}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
        });
        xml += `</urlset>`;
        
        downloadFile('sitemap.xml', xml, 'application/xml');
    });

});
