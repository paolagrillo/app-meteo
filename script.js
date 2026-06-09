let btn = document.getElementById("btn");
let citta = document.getElementById("citta");
let temperatura = document.getElementById("temperatura");
let descrizione = document.getElementById("descrizione");
let umidita = document.getElementById("umidita");

btn.addEventListener("click", function() {
    let nomeCitta = citta.value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + nomeCitta + "&appid=3d5a71db6d0fa704548af6edcac82cc7&units=metric&lang=it")
    .then(function(risposta) { return risposta.json(); })
    .then(function(dati) {
        temperatura.textContent = "Temperatura: " + dati.main.temp + "°C";
        descrizione.textContent = "Meteo: " + dati.weather[0].description;
        umidita.textContent = "Umidità: " + dati.main.humidity + "%";

    document.querySelector(".gabbia").style.display = "block";


        let meteo = dati.weather[0].main;

        if (meteo === "Rain" || meteo === "Drizzle" || meteo === "Thunderstorm") {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        } else if (meteo === "Clear") {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        } else if (meteo === "Clouds") {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        } else if (meteo === "Snow") {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        } else if (meteo === "Fog" || meteo === "Mist") {
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }

        document.body.style.backgroundSize = "cover";
    });
});