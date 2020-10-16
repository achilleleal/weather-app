import React, { Component } from 'react';
import Footer from './components/Footer';
import WeatherCard from './components/WeatherCard';
import ErrorCard from './components/ErrorCard';
import Menu from './components/Menu';
import './styles/App.css';
import './styles/styles.css';

// Link where the server is running.
const SERVER = "http://localhost:4000"


class App extends Component {

  constructor() {
    super();
    this.state = {
      loaded: false,
      city: '',
      weatherData: {},
    }
  }


  toMenu = () => this.setState({loaded: false})


  setCity = (event) => this.setState({city: event.target.value})


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

    const { loaded, weatherData, city } = this.state;
    
    return (
      <>
        <main className="flex-center flex-col">
            {loaded ? 
                (weatherData.status ? 
                    <WeatherCard 
                      data={weatherData} 
                      toMenu={this.toMenu} 
                      SERVER={SERVER} 
                    />
                  :
                    <ErrorCard 
                      toMenu={this.toMenu} 
                      error={weatherData.error} 
                    />
                )
              :
                <Menu 
                  city={city} 
                  getWeather={this.getWeather} 
                  setCity={this.setCity}
                />
            }
        </main>
        <Footer />
      </>
    );
  }
}



export default App;
