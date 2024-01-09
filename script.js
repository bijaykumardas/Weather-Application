
const searchInput = document.getElementById("searchcity");
const searchButton = document.getElementById("searchbtn");
let searchTerm = "";

searchButton.addEventListener("click", function () {
    searchTerm = searchInput.value;


    console.log(searchTerm);
    const apiKey = '221cbbe42221aa0a9c8c4199668ccb1f';
    const city = searchTerm;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {

            document.querySelector(".name").innerHTML = data.name;
            document.querySelector(".tem").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
            document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/h";
            document.querySelector(".Humi").innerHTML = data.main.humidity + "%";
            document.querySelector(".like").innerHTML = data.weather[0].description;

            document.querySelector(".details").style.display="block";
            document.querySelector(".moredetails").style.display="flex";

            console.log(data);

        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        })
});



