// Funzione per aggiungere classi orientali agli elementi
function addOrientalClasses() {
    // Aggiungi classe rice-paper alle card
    document.querySelectorAll('.bg-white').forEach(el => {
        el.classList.add('rice-paper');
    });

    // Aggiungi classe section-header ai titoli delle sezioni
    document.querySelectorAll('h2').forEach(el => {
        el.classList.add('section-header');
    });
    
    // Sostituisci l'icona di YouTube con TikTok nel footer
    const youtubeIcon = document.querySelector('footer .fab.fa-youtube');
    if (youtubeIcon) {
        youtubeIcon.classList.remove('fa-youtube');
        youtubeIcon.classList.add('fa-tiktok');
        youtubeIcon.parentElement.setAttribute('title', 'TikTok');
    }
}

// Toggle menu mobile
document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi classi orientali
    addOrientalClasses();
    
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Navbar dinamica che cambia all'scroll
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-neutral-900');
                navbar.classList.add('py-2');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.remove('bg-neutral-900');
                navbar.classList.remove('py-2');
                navbar.classList.add('py-4');
            }
        });
    }
    
    // Chiudi menu mobile quando si clicca su un link
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // Animazione smooth scroll per i link interni
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Aggiungi classe attiva ai link della navbar in base alla sezione visibile
    const sections = document.querySelectorAll('section, header');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.md\\:flex a').forEach(link => {
            link.classList.remove('text-neutral-300');
            
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-neutral-300');
            }
        });
    });

    // Effetto calligrafia per i titoli
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
        heading.style.fontFamily = "'Noto Serif', serif";
        heading.style.fontWeight = "normal";
    });

    // Aggiungi decorazioni orientali
    const footerSocial = document.querySelector('footer .flex.space-x-4');
    if (footerSocial) {
        const bambooDecoration = document.createElement('div');
        bambooDecoration.innerHTML = '⟡ ⟡ ⟡';
        bambooDecoration.style.color = '#d4af37';
        bambooDecoration.style.margin = '10px 0';
        bambooDecoration.style.textAlign = 'center';
        footerSocial.parentNode.insertBefore(bambooDecoration, footerSocial);
    }
});

// Funzione per gestire il carosello
function setupCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (!slides.length || !indicators.length || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    
    // Funzione per mostrare uno slide specifico
    function showSlide(index) {
        // Nascondi tutti gli slide
        slides.forEach((slide, i) => {
            slide.style.opacity = '0';
            slide.style.transform = i < index ? 'translateX(-100%)' : 'translateX(100%)';
            slide.classList.add('hidden');
            indicators[i].classList.remove('bg-neutral-700');
            indicators[i].classList.add('bg-neutral-400');
        });
        
        // Mostra lo slide corrente
        slides[index].style.opacity = '1';
        slides[index].style.transform = 'translateX(0)';
        slides[index].classList.remove('hidden');
        indicators[index].classList.remove('bg-neutral-400');
        indicators[index].classList.add('bg-neutral-700');
        
        currentSlide = index;
    }
    
    // Event listener per i pulsanti prev/next
    prevBtn.addEventListener('click', () => {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) newIndex = slides.length - 1;
        showSlide(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    });
    
    // Event listener per gli indicatori
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Avvia il carosello automatico
    let interval = setInterval(() => {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    }, 5000);
    
    // Ferma il carosello automatico quando l'utente interagisce
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            let newIndex = currentSlide + 1;
            if (newIndex >= slides.length) newIndex = 0;
            showSlide(newIndex);
        }, 5000);
    });
}

// Aggiungi la funzione setupCarousel all'evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi classi orientali
    addOrientalClasses();
    
    // Setup del carosello
    setupCarousel();
    
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Navbar dinamica che cambia all'scroll
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-neutral-900');
                navbar.classList.add('py-2');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.remove('bg-neutral-900');
                navbar.classList.remove('py-2');
                navbar.classList.add('py-4');
            }
        });
    }
    
    // Chiudi menu mobile quando si clicca su un link
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // Animazione smooth scroll per i link interni
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Aggiungi classe attiva ai link della navbar in base alla sezione visibile
    const sections = document.querySelectorAll('section, header');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.md\\:flex a').forEach(link => {
            link.classList.remove('text-neutral-300');
            
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-neutral-300');
            }
        });
    });

    // Effetto calligrafia per i titoli
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
        heading.style.fontFamily = "'Noto Serif', serif";
        heading.style.fontWeight = "normal";
    });

    // Aggiungi decorazioni orientali
    const footerSocial = document.querySelector('footer .flex.space-x-4');
    if (footerSocial) {
        const bambooDecoration = document.createElement('div');
        bambooDecoration.innerHTML = '⟡ ⟡ ⟡';
        bambooDecoration.style.color = '#d4af37';
        bambooDecoration.style.margin = '10px 0';
        bambooDecoration.style.textAlign = 'center';
        footerSocial.parentNode.insertBefore(bambooDecoration, footerSocial);
    }
});