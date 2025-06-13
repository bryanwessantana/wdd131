document.addEventListener("DOMContentLoaded", () => {

    const isFormPage = !!document.querySelector("form");
    const isThankYouPage = !!document.getElementById("reviewCount") && !isFormPage;

    if (isFormPage) {

        const products = [
            { id: "prod1", name: "Smartphone X200" },
            { id: "prod2", name: "Noise-Canceling Headphones" },
            { id: "prod3", name: "4K Ultra HD Monitor" },
            { id: "prod4", name: "Wireless Keyboard" },
            { id: "prod5", name: "Ergonomic Office Chair" }
        ];

        const productSelect = document.getElementById("productName");
        const reviewCountDisplay = document.getElementById("reviewCount");
        const form = document.querySelector("form");

        if (productSelect) {
            products.forEach(product => {
                const option = document.createElement("option");
                option.value = product.id;
                option.textContent = product.name;
                productSelect.appendChild(option);
            });
        }

        let reviewCount = localStorage.getItem("reviewCount");
        reviewCount = reviewCount ? parseInt(reviewCount) : 0;

        if (reviewCountDisplay) {
            reviewCountDisplay.textContent = reviewCount;
        }

        if (form) {
            form.addEventListener("submit", () => {
                reviewCount++;
                localStorage.setItem("reviewCount", reviewCount);
                if (reviewCountDisplay) {
                    reviewCountDisplay.textContent = reviewCount;
                }
            });
        }

        const yearSpan = document.getElementById("currentyear");
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }

        const lastModified = document.getElementById("lastModified");
        if (lastModified) {
            lastModified.textContent = `Last Modification: ${document.lastModified}`;
        }

    } else if (isThankYouPage) {

        const reviewCount = localStorage.getItem("reviewCount") || 0;
        const reviewCountSpan = document.getElementById("reviewCount");
        if (reviewCountSpan) {
            reviewCountSpan.textContent = reviewCount;
        }

        const yearSpan = document.getElementById("currentyear");
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }

        const lastModified = document.getElementById("lastModified");
        if (lastModified) {
            lastModified.textContent = `Last Modification: ${document.lastModified}`;
        }
    }
});
