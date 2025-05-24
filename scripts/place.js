function calculateWindChill(tempC, speedKmh) {
    const tempF = (tempC * 9 / 5) + 32;
    const speedMph = speedKmh / 1.609;

    if (tempF <= 50 && speedMph > 3) {
        const chillF = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);
        const chillC = ((chillF - 32) * 5) / 9;
        return chillC.toFixed(1);
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.getElementById("temperature");
    const windElement = document.getElementById("windSpeed");
    const chillElement = document.getElementById("windChill");
    const yearElement = document.getElementById("year");
    const modifiedElement = document.getElementById("lastModified");

    const tempC = parseFloat(tempElement.textContent);
    const speedKmh = parseFloat(windElement.textContent);

    const windChill = calculateWindChill(tempC, speedKmh);
    chillElement.textContent = windChill !== "N/A" ? `${windChill} °C` : "N/A";

    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    const lastModified = document.lastModified;
    modifiedElement.textContent = lastModified;
});
