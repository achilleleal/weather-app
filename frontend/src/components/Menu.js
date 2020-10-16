import React from 'react';
import sun from '../svg/sun.svg';

export default function Menu({ city, setCity, getWeather }) {
    return (
        <>
            <input type="text" 
              value={city} 
              onChange={setCity} 
              placeholder="Enter a city name" 
              className="py-2 px-4 mx-auto rounded text-black text-center" 
            />
            <img src={sun} className="spinning-sun my-6 mx-auto" alt="" />
            <button className="button mx-auto" 
              onClick={getWeather}
            >
                  Get Weather
            </button>
        </>
    )
}
