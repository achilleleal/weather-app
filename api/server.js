const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// OpenWeatherMap API Key is set in the server's env
const API_KEY = process.env.API_KEY;

// Makes a request to OpenWeatherMap using the env's API_KEY and the city name provided by the frontend. Default unit is set to metric
app.post('/weather', (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => res.send(data));
    console.log("Served weather data")
})


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})