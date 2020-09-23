import React from 'react'

let degree = "ºC";

const WeatherCard = ({name, weather, main, unit}) => {

    if (unit === "imperial") degree = "ºF";

    return(
        <div className="bg-dark-blue br4 pa4">
            <div>
                <h1>{name}</h1>
                <img src={`https://api.openweathermap.org/img/w/${weather[0].icon}`} 
                     alt={weather[0].main}
                     className="w2"/>
                <h2>{weather[0].main}</h2>
                <p>{weather[0].description}</p>
            </div>
            <div>
                <h3>{main.temp} {degree}, feels like {main.feels_like} {degree}</h3>
            </div>
        </div>
    );
}
    

export default WeatherCard;
