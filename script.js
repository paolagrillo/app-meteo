let btn = document.getElementById("btn");
let citta = document.getElementById("citta");
let temperatura = document.getElementById("temperatura");
let descrizione = document.getElementById("descrizione");
let umidita = document.getElementById("umidita");

async function cercaMeteo() {
    let nomeCitta = citta.value;
    if (nomeCitta === "") {
        alert("Bro scrivi una città!");
        return;
    }
    try {
        let risposta = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + nomeCitta + "&appid=3d5a71db6d0fa704548af6edcac82cc7&units=metric&lang=it");
        let dati = await risposta.json();
        
       if (dati.cod === "404" || dati.cod === 404) {
    alert("Scrivi una città esistente amico!");
    return;
}
        
        temperatura.textContent = "Temperatura: " + dati.main.temp + "°C";
        descrizione.textContent = "Meteo: " + dati.weather[0].description;
        umidita.textContent = "Umidità: " + dati.main.humidity + "%";
    } catch (errore) {
        alert("Bro qualcosa è crashato: " + errore.message);
    }
}
btn.addEventListener("click", cercaMeteo);