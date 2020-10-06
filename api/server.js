const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


// OpenWeatherMap API Key is set in the server's env
const API_KEY = process.env.API_KEY;



// Request to OWM's "Current Weather" API, using the env's API_KEY and the city name provided by the frontend. Default unit is set to metric
app.post('/weather', (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => { 
        // Instead of resending the entire OWM API resp, which contains unnecessary data for the frontend, 
        // we send an object that contains only the needed information.
        const currentWeather = {   
            status: "OK",
            city: data.name,
            weather: data.weather[0].description,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            icon: data.weather[0].icon,
        }
        res.status(200).send(currentWeather);
        console.log("Served current weather data");    
    })
    .catch(err => {
        res.status(400).send({ error: "There was an error" });
        console.log(err)
    });
})



// Request to OWM's "5 day / 3 hour Forecast" API. Similar to req above.
app.post('/forecast', (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${req.body.city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data =>{
        const forecast = [];
        for (let i = 1; i <= 5; i++) {
            // Since the API splits each day in eight 3 hour parts, every 8th item 24 hours pass.
            // So we only need every 8th item (minus 1 since it's an array) in the forecast list to get the 5 day forecast.
            let day = i * 8 - 1;
            forecast.push(
                {   
                    date: data.list[day].dt_txt.split(' ')[0],
                    weather: data.list[day].weather[0].main,
                    temp: data.list[day].main.temp,
                    feels_like: data.list[day].main.feels_like,
                }
            )
        }
        res.status(200).send(forecast)
        console.log("Served 5 day forecast data")
    })
    .catch(err => {
        res.status(400).send("There was an error");
        console.log(err)
    });
})



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})