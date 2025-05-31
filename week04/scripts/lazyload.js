document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        const actualSrc = img.getAttribute("src");
        if (actualSrc) {
            img.setAttribute("data-src", actualSrc);
            img.removeAttribute("src");
        }
    });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const img = entry.target;
            img.src = img.dataset.src;

            img.onload = () => {
                img.classList.add("loaded");
            };

            obs.unobserve(img);
        });
    }, {
        rootMargin: "100px",
        threshold: 0.1
    });

    images.forEach(img => observer.observe(img));
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.textContent = nav.classList.contains('open') ? '✖' : '☰';
});
