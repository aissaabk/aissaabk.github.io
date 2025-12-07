// Change Language
document.getElementById("lang-switch").addEventListener("change", function () {
    const lang = this.value;

    document.querySelectorAll("[data-ar]").forEach(el => {
        el.textContent = el.getAttribute("data-" + lang);
    });

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
});

// Scroll Reveal Animations
const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(sec => revealObserver.observe(sec));

// Hide / Show Navbar on Scroll
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    let current = window.scrollY;

    if (current > lastScroll && current > 80) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }

    lastScroll = current;
});

// Back to top button
const backTop = document.createElement("div");
backTop.id = "backTop";
backTop.textContent = "↑";
document.body.appendChild(backTop);

window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Parallax Hero
document.addEventListener("mousemove", (e) => {
    const hero = document.querySelector(".hero");
    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;
    hero.style.transform = `translate(${x}px, ${y}px)`;
});
