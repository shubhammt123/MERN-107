
async function fetchWeatherData(city){
    try {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2076e838395669d33165034c2b348643&units=metric`);
       const data = await response.json();
       return data;
    } catch (error) {
        console.log(error);
    }
}
async function fetchWeatherForcastData(city){
    try {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2076e838395669d33165034c2b348643&units=metric`);
       const data = await response.json();
       return data;
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("search-button").addEventListener("click",function(){
    let cityName = document.getElementById("input").value;
    let weatherData = fetchWeatherData(cityName);
    weatherData
    .then((data)=>{
        console.log(data)
        document.getElementById("city-name").innerText = data.name;
        document.getElementById("current-temp").innerHTML = `${data.main.temp}<sup style="font-size: 40px; position: relative; bottom: 20px;">o</sup>C`;
        document.getElementById("min-max-temp").innerHTML = `${data.main.temp_max}<sup style="font-size: 10px; position: relative; bottom: 10px;">o</sup>C/${data.main.temp_min}<sup style="font-size: 10px; position: relative; bottom: 10px;">o</sup>C`;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    })
    .catch((error)=>{
        console.log(error)
    })
    fetchWeatherForcastData(cityName)
    .then((data)=>{
        console.log(data);
        let parentDiv = document.getElementById("inner");
        data.list.forEach((element) => {
            let newDiv = document.createElement("div");
        let date = Date(element.dt).slice(4,10);
        console.log(Date(element.dt));
        let time = element.dt_txt.slice(11,13);
        if(time < 12){
            time += "AM"
        }else if(time == 12){
            time += "PM"
        }
        else{
            time -= 12;
            time += "PM";
        }
        newDiv.innerHTML = `<p>${date}<p><p>${time}</p><p>${element.main.temp}</p>`;
        parentDiv.appendChild(newDiv)
        });
        
    })
})

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=2076e838395669d33165034c2b348643
