import React from 'react';

const ForecastCard = ({ forecast, date }) => {
    return (
        <div className="card">
            <div className="card-item p-2 text-xl">
                <h1>{forecast.toUpperCase()}</h1>
                <img src={require(`../svg/${forecast}.svg`)} className="mx-auto my-4" alt=""/>
                <h1>{date}</h1>
            </div>
        </div>
    );
};

export default ForecastCard;