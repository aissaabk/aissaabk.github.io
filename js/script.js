// Smooth animations عند التمرير
const sections = document.querySelectorAll("section");
const heroTitle = document.querySelector(".hero h1");
const heroText = document.querySelector(".hero p");

// إظهار Hero عند تحميل الصفحة
window.addEventListener("load", () => {
    heroTitle.style.opacity = 1;
    heroTitle.style.transform = "translateY(0)";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
});

// Intersection Observer لإظهار الأقسام عند التمرير
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("section-visible");
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
