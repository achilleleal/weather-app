import React from 'react'

let degree = "ºC";

const WeatherCard = ({name, weather, main, unit}) => {

    if (unit === "imperial") degree = "ºF";

    const description = weather[0].description;

    // The description is all in lower case. This function capitalizes only the first letter, for formatting
    const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

    return(
        <div className="bg-blue-800 p-8 rounded">
            <div className="">
                <div className="flex justify-center">
                   <h1>{name}</h1>
                    <img src={`https://api.openweathermap.org/img/w/${weather[0].icon}`} 
                     alt={weather[0].main}
                     className=""/> 
                </div>
                
                <h2>{weather[0].main}</h2>
                <p>{capitalizeFirstLetter(description)}</p>
            </div>
            <div>
                <h3>{main.temp} {degree}, feels like {main.feels_like} {degree}</h3>
            </div>
        </div>
    );
}
    

export default WeatherCard;
