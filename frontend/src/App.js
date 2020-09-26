import React, { Component } from 'react';
import Layout from './components/Layout';
import WeatherCard from './components/WeatherCard';
import sun from './svg/sun.svg';
import './styles/App.css';
import './styles/style.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false,
      city: '',
      weatherData: {}
    }
  }

  toMenu = () => {
    this.setState({loaded: false, city: ''})
  }

  getWeather = () => {
    fetch('http://localhost:3000/weather', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        city: this.state.city
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({weatherData: data, loaded: true})
    })
    .catch(err => console.log(err));
  }

  render() {
    const { loaded, unit, weatherData } = this.state;
    
    return (
      <Layout>
          {loaded ? 
              <WeatherCard data={weatherData} unit={unit} toMenu={this.toMenu} />
            :
              <div>
                <input type="text" onChange={(event) => this.setState({city: event.target.value})} placeholder="City name" className="p-2 rounded text-black text-center"></input>
                <img src={sun} className="loading my-6 mx-auto" alt="sun" />
                <button className="button" onClick={this.getWeather}>Get Weather</button>
              </div>
          }
      </Layout>
    );
  }
}



export default App;
