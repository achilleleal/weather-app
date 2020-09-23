import React, { Component } from 'react';
import logo from './sun.svg';
import './App.css';

const key = "";

class App extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false,
    }
  }

  getWeather = async () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`)
    .then(res => res.json())
    .then(console.log)
    .catch(console.log)
  }

  render() {
    const {loaded} = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          {loaded ? 
            <h1>Weather</h1>
            :
            <>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Loading...</h2>
            <button onClick={this.getWeather}>Get Weather</button>
            </>
            
          }
        </header>
      </div>
    );
  }
}

export default App;
