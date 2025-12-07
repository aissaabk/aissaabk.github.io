window.addEventListener('DOMContentLoaded', () => {

    // ===== Language Switcher =====
    function setLanguage(lang){
        const elements = document.querySelectorAll('[data-ar]');
        elements.forEach(el => {
            if(lang==='ar') el.textContent = el.getAttribute('data-ar');
            if(lang==='en') el.textContent = el.getAttribute('data-en');
            if(lang==='fr') el.textContent = el.getAttribute('data-fr');
        });

        if(lang==='ar') document.documentElement.dir='rtl';
        else document.documentElement.dir='ltr';
    }

    // افتراضي العربية
    setLanguage('ar');

    window.setLanguage = setLanguage; // لزر اللغة

    // ===== Scroll Animations =====
    const sections = document.querySelectorAll('section');
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');

    window.addEventListener('load', () => {
        heroTitle.style.opacity=1;
        heroTitle.style.transform="translateY(0)";
        heroText.style.opacity=1;
        heroText.style.transform="translateY(0)";
    });

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('section-visible');
            }
        });
    },{threshold:0.1});

    sections.forEach(section => observer.observe(section));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        });
    });

});
