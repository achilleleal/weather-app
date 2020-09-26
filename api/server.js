const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())

const API_KEY = process.env.API_KEY;


app.get('/', (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => res.send(data));
})


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})