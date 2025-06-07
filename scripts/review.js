document.addEventListener("DOMContentLoaded", () => {

    let reviewCount = localStorage.getItem("reviewCount");

    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;

    localStorage.setItem("reviewCount", reviewCount);

    const display = document.getElementById("reviewCount");
    if (display) {
        display.textContent = reviewCount;
    }

    const yearSpan = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent = `Last Modification: ${document.lastModified}`;
    }
});
  