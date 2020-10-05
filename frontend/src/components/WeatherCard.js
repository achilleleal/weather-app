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
        } else {
            degree = "ºC"
        }

        // The description is all in lower case. This function capitalizes only the first letter, for formatting
        const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

        // Rounds the temperature to have only 1 decimal place
        const roundTemp = temperature => Math.round(temperature * 10) / 10;


        return(
            <div>
                <div className="card">
                    <div className="grid grid-cols-1 md:grid-cols-2 card-item mb-2 p-2">
                        <div className="font-bold flex items-center justify-center">
                            <h1 className="ml-4 text-3xl sm:text-4xl lg:text-5xl">{name}</h1>
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{roundTemp(temp)} {degree}</h1>
                            <h3 className="text-md sm:text-xl">Feels like {roundTemp(feels_like)} {degree}</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4  gap-2">
                        <div className="card-item">
                            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
                                                    alt=''
                                                    className="w-24 mx-auto"/> 
                            <h2 className="sm:text-2xl lg:text-3xl">{capitalizeFirstLetter(weather[0].description)}</h2>
                        </div>
                        <div className="card-item md:col-span-3">
                            <p>5 day forecast</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <button onClick={toMenu} className="button">To menu</button>
                </div>
            </div>
        );

    } else {
        return(
            <div>
                <div className="card" style={{maxWidth: '500px'}}>
                    <div className="card-item p-4">
                        <h1 className="text-md sm:text-2xl">Oops, something went wrong</h1>
                        <img src={rain} alt="" className="w-8 sm:w-16 mx-auto" />
                    </div>
                </div>
                <button onClick={toMenu} className="button">Try again</button>
            </div>
            
        );
    }
}
    

export default WeatherCard;
