/**
 * Tanjung Pinang Rent Car - Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Mobile Menu Drawer Functionality
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.querySelector('.main-header');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. Sticky Navbar & Active Nav Indicator
    // ==========================================
    const handleScroll = () => {
        // Sticky Header Class
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to Top Button Visibility
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        }

        // Active Navigation Link based on Scroll Section
        const sections = document.querySelectorAll('section[id], header[id]');
        const scrollPosition = window.scrollY + 120; // offset

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (correspondingLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                correspondingLink.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on load
    handleScroll();

    // ==========================================
    // 3. Form Booking to WhatsApp Automation
    // ==========================================
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        // Set minimum pickup date to today
        const todayStr = new Date().toISOString().split('T')[0];
        const pickupDateInput = document.getElementById('pickupDate');
        const returnDateInput = document.getElementById('returnDate');
        
        if (pickupDateInput) {
            pickupDateInput.min = todayStr;
            pickupDateInput.addEventListener('change', () => {
                if (returnDateInput) {
                    returnDateInput.min = pickupDateInput.value;
                }
            });
        }

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const location = document.getElementById('pickupLocation').value;
            const pickupDate = document.getElementById('pickupDate').value;
            const returnDate = document.getElementById('returnDate').value;
            const carType = document.getElementById('carType').value;
            
            // Format WhatsApp Message
            const waNumber = '6285763760841'; // Replace with company phone number
            const message = `Halo Zelina Transport, saya ingin menanyakan ketersediaan mobil:
- *Jenis Mobil*: ${carType}
- *Lokasi Jemput*: ${location}
- *Tanggal Jemput*: ${pickupDate}
- *Tanggal Kembali*: ${returnDate}

Apakah unit tersedia pada tanggal tersebut?`;

            const encodedMessage = encodeURIComponent(message);
            const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp in a new tab
            window.open(waUrl, '_blank');
        });
    }

    // ==========================================
    // 4. Scroll Animations (Fade-in-up effect)
    // ==========================================
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => animationObserver.observe(element));
    } else {
        // Fallback for older browsers
        animatedElements.forEach(element => element.classList.add('appear'));
    }

    // ==========================================
    // 5. Statistics Counter Animation
    // ==========================================
    const statsSection = document.querySelector('.stats-section');
    const counters = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            let count = 0;
            const duration = 2000; // Total count duration in ms
            const stepTime = Math.max(Math.floor(duration / target), 15);
            
            const timer = setInterval(() => {
                count += Math.ceil(target / (duration / stepTime));
                if (count >= target) {
                    counter.innerText = target + (target === 24 ? '/7' : '+');
                    clearInterval(timer);
                } else {
                    counter.innerText = count + (target === 24 ? '/7' : '');
                }
            }, stepTime);
        });
    };

    if (statsSection && counters.length > 0) {
        if ('IntersectionObserver' in window) {
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !countersStarted) {
                        countersStarted = true;
                        startCounters();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            statsObserver.observe(statsSection);
        } else {
            // Fallback
            startCounters();
        }
    }
});
