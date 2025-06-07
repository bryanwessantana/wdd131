document.addEventListener("DOMContentLoaded", () => {

    const yearSpan = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent = `Last Modification: ${document.lastModified}`;
    }

    const products = [
        { id: "fc-1888", name: "Flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp equalizer", averagerating: 5.0 }
    ];

    const select = document.getElementById("productName");
    if (select) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });
    }

    const reviewDisplay = document.getElementById("reviewCount");
    if (reviewDisplay) {
        let reviewCount = localStorage.getItem("reviewCount");
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem("reviewCount", reviewCount);
        reviewDisplay.textContent = reviewCount;
    }
});
