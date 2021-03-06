import React, { Component } from 'react';
import ForecastCard from './ForecastCard';


class WeatherCard extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            futureForecast: []
        }
    }


    componentDidMount() {
        fetch(`${this.props.SERVER}/forecast`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              city: this.props.data.city
            })
          })
          .then(res => res.json())
          .then(data => this.setState({futureForecast: data, loaded: true}))
          .catch(err => console.log(err));
    }


    // The description is all in lower case. This function capitalizes only the first letter, for formatting
    capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);


    render() {
        
    const { city, weather, temp, feels_like, icon } = this.props.data;
    const { toMenu } = this.props;
    const { futureForecast, loaded } = this.state;

    return(
        <>
            <div className="card mt-4 sm:mt-0">

                {/* Top pane: Current Weather */}
                <div className="grid grid-cols-1 md:grid-cols-3 card-item mb-2 p-2">
                    <div className="flex-center">
                        <h1 className="md:ml-4 text-3xl sm:text-4xl lg:text-5xl">{city}</h1>
                    </div>
                    <div className="flex-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{temp}º</h1>
                            <h3 className="text-md sm:text-xl">Feels like {feels_like}º</h3>
                        </div>
                    </div>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                                                alt=''
                                                className="w-16 md:w-24 mx-auto"/> 
                        <h2 className="sm:text-2xl lg:text-3xl">{this.capitalizeFirstLetter(weather)}</h2>
                    </div>
                </div>

                {/* Bottom pane: 5 day forecast */}
                <div className="card-item p-4">
                    <h1 className="mb-2 text-xl md:text-3xl">5 day forecast</h1>
                    {loaded ?
                        <div className="grid gap-4 grid-cols-2 md:grid-cols-5">
                            {futureForecast.error ? 
                                <p className="error col-span-5">{futureForecast.error}</p>
                              :
                                futureForecast.map((day, index) => 
                                    <ForecastCard 
                                        forecast={day.forecast.toLowerCase()}
                                        temp={day.temp}
                                        icon={day.icon}
                                        className={index === 0 ? 'col-span-2 md:col-span-1' : ''}
                                    />   
                                )
                            }
                        </div>
                      :
                        <>
                            <p>Loading...</p>
                            <div class="loader mx-auto"></div> 
                        </>
                    }
                </div>
            </div>

            <button onClick={toMenu} className="button mb-4 sm:mb-0">To menu</button>
        </>
    );
}}
    

export default WeatherCard;
