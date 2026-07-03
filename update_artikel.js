const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'blog');
const indexFile = path.join(__dirname, 'index.html');
const artikelFile = path.join(__dirname, 'artikel.html');

// Read all HTML files in blog/ directory
const generatedCards = [];
const excludeFiles = ['sewa-mobil-bintan.html']; // Already manually added

if (fs.existsSync(blogDir)) {
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
        
        // Count words for read time (roughly)
        const textContent = content.replace(/<[^>]*>?/gm, ' ');
        const words = textContent.trim().split(/\s+/).length;
        const readTime = Math.ceil(words / 200) || 3;
        
        // We can pick a random Unsplash image based on the file name length to make it deterministic but varied
        const images = [
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80'
        ];
        const imgIndex = file.length % images.length;
        
        const cardHtml = `
                <!-- Auto-Generated Card: ${file} -->
                <div class="blog-card animate-on-scroll">
                    <div class="blog-image-container">
                        <span class="blog-category">INFORMASI TERBARU</span>
                        <img src="${images[imgIndex]}" alt="${title}" class="blog-image" loading="lazy">
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
}

const updateHtmlFile = (filePath) => {
    if (!fs.existsSync(filePath)) return;
    
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
        console.log(`✅ Berhasil mengupdate ${path.basename(filePath)}`);
    } else {
        console.log(`⚠️ Marker tidak ditemukan di ${path.basename(filePath)}`);
    }
};

updateHtmlFile(indexFile);
updateHtmlFile(artikelFile);
console.log(`\nBerhasil memproses ${generatedCards.length} artikel otomatis.`);
