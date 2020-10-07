import React from 'react';
import rain from '../svg/rain.svg'

const ErrorCard = ({ toMenu, error }) =>
    <div>
        <div className="card" style={{maxWidth: '500px'}}>
            <div className="card-item p-4">
                <h1 className="text-2xl">Oops, something went wrong.</h1>
                <p className="error">{error}</p>
                <img src={rain} alt="" className="w-8 sm:w-16 mx-auto" />
            </div>
        </div>
        <div className="flex">
            <button onClick={toMenu} className="button">Try again</button>
        </div>
    </div>

export default ErrorCard;