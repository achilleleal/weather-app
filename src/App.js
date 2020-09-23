import React, { Component } from 'react';
import WeatherCard from './WeatherCard';
import logo from './sun.svg';
import './App.css';
import 'tachyons';

const key = "";

class App extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false,
      unit: "metric", //Tells the API to fetch in this measurement system
      weatherData: {}
    }
  }

  getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Caracas&appid=${key}&units=${this.state.unit}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({weatherData: data, loaded: true})
    })
    .catch(console.log);
  }

  render() {
    const { loaded, unit } = this.state;
    const { name, weather, main } = this.state.weatherData;
    
    return (
      <div className="App">
        <header className="App-header">
          {loaded ? 
              <WeatherCard name={name} weather={weather} main={main} unit={unit} />
            :
              <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Loading...</h2>
                <button onClick={this.getWeather}>Get Weather</button>
              </div>
          }
        </header>
      </div>
    );
  }
}



export default App;
