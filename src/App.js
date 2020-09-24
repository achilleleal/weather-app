import React, { Component } from 'react';
import Layout from './components/Layout';
import WeatherCard from './components/WeatherCard';
import sun from './svg/sun.svg';
import './App.css';
import './styles/style.css';

const key = "139c4bc5795ad3c59ec5c56668405534";

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
      <Layout className="App text-white">
        <main className="App-header">
          {loaded ? 
              <WeatherCard name={name} weather={weather} main={main} unit={unit} />
            :
              <div>
                <img src={sun} className="App-logo" alt="sun" />
                <h2 className="">Loading...</h2>
                <button onClick={this.getWeather}>Get Weather</button>
              </div>
          }
        </main>
      </Layout>
    );
  }
}



export default App;
