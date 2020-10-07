import React, { Component } from 'react';
import Footer from './components/Footer';
import WeatherCard from './components/WeatherCard';
import ErrorCard from './components/ErrorCard';
import sun from './svg/sun.svg';
import './styles/App.css';
import './styles/styles.css';

// Link where the server is running.
const SERVER = "http://localhost:3000"


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
      fetch(`${SERVER}/weather`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          city: this.state.city
        })
      })
      .then(res => res.json())
      .then(data => {
        this.setState({weatherData: data, loaded: true});
      })
      .catch(err => console.log(err));
    }
  }



  render() {

    const { loaded, weatherData } = this.state;
    
    return (
      <>
        <main className="flex justify-center items-center">
          <div>
            {loaded ? 

                (weatherData.status ? 
                  <WeatherCard data={weatherData} toMenu={this.toMenu} SERVER={SERVER} />
                    :
                  <ErrorCard toMenu={this.toMenu} error={weatherData.error} />
                )

              :

                <div>
                  <div className="flex">
                    <input type="text" value={this.state.city} onChange={(event) => this.setState({city: event.target.value})} placeholder="Enter a city name" className="py-2 px-4 mx-auto rounded text-black text-center" />
                  </div>
                  <img src={sun} className="spinning-sun my-6 mx-auto" alt="" />
                  <div className="flex">
                    <button className="button mx-auto" onClick={this.getWeather}>Get Weather</button>
                  </div>
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
