import React from 'react'

let degree = "ºC";

const WeatherCard = ({ data, unit }) => {

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
    
        return(
            <div className="bg-blue-800 p-8 rounded">
                <div className="font-bold">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl border-b-4 border-solid border-blue-400" >{name}</h1>
                    <img src={`https://api.openweathermap.org/img/w/${weather[0].icon}`} 
                        alt={weather[0].main}
                        className="w-16 mx-auto"/> 
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl">{weather[0].main}</h2>
                </div>
                <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl">{capitalizeFirstLetter(weather[0].description)}</h3>
                    <h3 className="text-md sm:text-xl">{temp} {degree}, feels like {feels_like} {degree}</h3>
                </div>
            </div>
        );
    } else {
        return(
            <div className="text-center">
                <h1>Oops, something went wrong</h1>
                <button className="bg-white text-black p-2 rounded-lg mt-6">Try again</button>
            </div>
        );
    }
    
}
    

export default WeatherCard;
