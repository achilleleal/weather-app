import React, { Component } from 'react';
import Layout from './components/Layout';
import WeatherCard from './components/WeatherCard';
import sun from './svg/sun.svg';
import './styles/App.css';
import './styles/styles.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false,
      city: '',
      weatherData: {},
    }
  }

  toMenu = () => {
    this.setState({loaded: false})
  }

  getWeather = () => {
    if (this.state.city.trim()) {
      fetch('https://weather-apiserver.herokuapp.com/weather', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          city: this.state.city
        })
      })
      .then(res => res.json())
      .then(data => {
        this.setState({weatherData: data, loaded: true})
      })
      .catch(err => console.log(err));
    }
  }

  render() {
    const { loaded, weatherData } = this.state;
    
    return (
      <Layout>
          {loaded ? 
              <WeatherCard data={weatherData} toMenu={this.toMenu} />
            :
              <div>
                {this.state.city ? '' :
                  <p className="text-blue-700 mb-1">Please enter a city</p>
                }
                <input type="text" value={this.state.city} onChange={(event) => this.setState({city: event.target.value})} placeholder="City name" className="p-2 rounded text-black text-center" />
                <img src={sun} className="loading my-6 mx-auto" alt="sun" />
                <button className="button" onClick={this.getWeather}>Get Weather</button>
              </div>
          }
      </Layout>
    );
  }
}



export default App;
