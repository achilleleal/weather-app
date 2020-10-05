import React, { Component } from 'react';
import Footer from './components/Footer';
import WeatherCard from './components/WeatherCard';
import ErrorCard from './components/ErrorCard';
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
      <>
        <main className="text-center text-white">
          <div>
            {loaded ? 
                      (weatherData.id ? 
                        <WeatherCard data={weatherData} toMenu={this.toMenu} />
                          :
                        <ErrorCard toMenu={this.toMenu} />
                        )
                    :
                      <div>
                        <input type="text" value={this.state.city} onChange={(event) => this.setState({city: event.target.value})} placeholder="Enter a city name" className="py-2 px-4 rounded text-black text-center" />
                        <img src={sun} className="loading my-6 mx-auto" alt="" />
                        <button className="button" onClick={this.getWeather}>Get Weather</button>
                      </div>
            }
          </div>
        </main>
        <Footer />
      </>
    );
  }
}



export default App;
