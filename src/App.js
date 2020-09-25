import React, { Component } from 'react';
import Layout from './components/Layout';
import WeatherCard from './components/WeatherCard';
import sun from './svg/sun.svg';
import './styles/App.css';
import './styles/style.css';

const key = "";

class App extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false,
      city: 'Houston',
      unit: "metric", //Tells the API to fetch in this measurement system
      weatherData: {}
    }
  }

  toMenu = () => {
    this.setState({loaded: false})
  }

  getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${key}&units=${this.state.unit}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({weatherData: data, loaded: true})
    })
    .catch(console.log);
  }

  render() {
    const { loaded, unit, weatherData } = this.state;
    
    return (
      <Layout>
          {loaded ? 
              <WeatherCard data={weatherData} unit={unit} toMenu={this.toMenu} />
            :
              <div>
                <input type="text" placeholder="City name" className="p-2 rounded text-black text-center"></input>
                <img src={sun} className="loading my-6 mx-auto" alt="sun" />
                <button className="button" onClick={this.getWeather}>Get Weather</button>
              </div>
          }
      </Layout>
    );
  }
}



export default App;
