document.querySelector(".submit").addEventListener("click" , function(){
    let cityName = document.querySelector(".Cityname").value.trim()

    const requestUrl = `http://api.weatherapi.com/v1/current.json?key=84a2b1c10d864133aa5161710251606&q=${cityName}&aqi=yes`

    if(!cityName){
        alert("please enter a city name");
        return;
    }

    fetch(requestUrl)
    .then((response) => {
        if(!response.ok){
            throw new Error("city not found");
        } 
        return response.json();
    })
    .then((data) => {
        const info = 
        `<h1>Weather in ${data.location.name}</h1>
        <p><strong>temperatur(in celsius):</strong>${data.current.temp_c} °C </p>
        <p><strong>feels like:</strong>${data.current.feelslike_c} °C </p>
        <p><strong>temperatur(in fahrenheit):</strong>${data.current.temp_f} °f </p>
        <p><strong>feels like:</strong>${data.current.feelslike_f} °f </p>
        <p><strong>Humidity:</strong>${data.current.humidity}</p>`

        document.querySelector(".details").innerHTML = info
    })
})


