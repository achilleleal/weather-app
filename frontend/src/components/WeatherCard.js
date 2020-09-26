import React from 'react'
import rain from '../svg/rain.svg'

let degree = "ºC";

const WeatherCard = ({ data, toMenu }) => {

    if (data.id) {

        const { name, weather, main } = data;
        let { temp, feels_like } = main;

        const toFahrenheit = celsius => (celsius * 9/5) + 32;

        if (data.sys.country === 'US') {
            degree = "ºF";
            temp = toFahrenheit(temp);
            feels_like = toFahrenheit(feels_like);
        }

        // The description is all in lower case. This function capitalizes only the first letter, for formatting
        const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

        // Rounds the temperature to have only 1 decimal place
        const roundTemp = temperature => Math.round(temperature * 10) / 10;
    
        return(
            <div>
                <div className="card duration-500 transform hover:scale-105">
                    <div className="font-bold">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl border-b-4 border-solid border-blue-400" >{name}</h1>
                        <img src={`https://api.openweathermap.org/img/w/${weather[0].icon}`} 
                            alt={weather[0].main}
                            className="w-16 mx-auto"/> 
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl">{weather[0].main}</h2>
                    </div>
                    <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl">{capitalizeFirstLetter(weather[0].description)}</h3>
                        <h3 className="text-md sm:text-xl">{roundTemp(temp)} {degree}, feels like {roundTemp(feels_like)} {degree}</h3>
                    </div>
                </div>
                <button onClick={toMenu} className="button">To menu</button>
            </div>
        );

    } else {
        return(
            <div className="card">
                <h1 className="text-md sm:text-2xl">Oops, something went wrong</h1>
                <img src={rain} alt="" className="w-8 sm:w-16 mx-auto" />
                <button onClick={toMenu} className="button">Try again</button>
            </div>
        );
    }
}
    

export default WeatherCard;
