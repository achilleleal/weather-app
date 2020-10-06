import React from 'react';

const ForecastCard = ({ forecast, temp, icon, className }) => {
    return (
        <div className={`mx-auto rounded p-2 bg-purple-900 text-md w-full  ${className}`}>
            <h1>{forecast.toUpperCase()}</h1>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className="mx-auto w-12 md:w-24" alt=""/>
            <h1>{temp}º</h1>
        </div>
    );
};

export default ForecastCard;