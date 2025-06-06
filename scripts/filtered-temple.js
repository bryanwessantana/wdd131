document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
    { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
    { templeName: "Curitiba Paraná", location: "Paraná, Brazil", dedicated: "2008, June, 1", area: 27850, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-60225.jpg" },
    { templeName: "Madrid Spain", location: "Madrid, Spain", dedicated: "1999, March, 19", area: 45800, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-54286.jpg" },
    { templeName: "Helsinki Finland", location: "Helsinki, Finland", dedicated: "2006, October 22", area: 16350, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-50743.jpg" }
];

const container = document.getElementById("temple-container");

function displayTemples(filteredTemples) {
    container.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}

function filterTemples(type) {
    let filtered;
    switch (type) {
        case "old":
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
            break;
        case "new":
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }
    displayTemples(filtered);
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        // Remove classe 'active' de todos
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));

        // Adiciona 'active' no atual
        link.classList.add("active");

        const filter = link.getAttribute("data-filter");
        filterTemples(filter);
    });
});

// Exibe todos inicialmente e marca 'Home' como ativo
displayTemples(temples);
document.querySelector("nav a[data-filter='home']").classList.add("active");
