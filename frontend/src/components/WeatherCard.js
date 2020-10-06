import React, { Component } from 'react'


class WeatherCard extends Component {
    constructor() {
        super();
        this.state = {
            futureForecast: []
        }
    }


    // The description is all in lower case. This function capitalizes only the first letter, for formatting
    capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

    render() {
        
    const { city, weather, temp, feels_like, icon } = this.props.data;
    const { toMenu } = this.props;

    return(
        <div>
            <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 card-item mb-2 p-2">
                    <div className="font-bold flex items-center justify-center">
                        <h1 className="ml-4 text-3xl sm:text-4xl lg:text-5xl">{city}</h1>
                    </div>
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{temp}º</h1>
                        <h3 className="text-md sm:text-xl">Feels like {feels_like}º</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4  gap-2">
                    <div className="card-item">
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                                                alt=''
                                                className="w-24 mx-auto"/> 
                        <h2 className="sm:text-2xl lg:text-3xl">{this.capitalizeFirstLetter(weather)}</h2>
                    </div>
                    <div className="card-item md:col-span-3">
                        <p>5 day forecast</p>
                        {}
                    </div>
                </div>
            </div>
            
            <div>
                <button onClick={toMenu} className="button">To menu</button>
            </div>
        </div>
    );
}}
    

export default WeatherCard;
