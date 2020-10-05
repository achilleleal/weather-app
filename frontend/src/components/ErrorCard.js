import React from 'react';
import rain from '../svg/rain.svg'

const ErrorCard = ({ toMenu }) =>
    <div>
        <div className="card" style={{maxWidth: '500px'}}>
            <div className="card-item p-4">
                <h1 className="text-md sm:text-2xl">Oops, something went wrong</h1>
                <img src={rain} alt="" className="w-8 sm:w-16 mx-auto" />
            </div>
        </div>
        <button onClick={toMenu} className="button">Try again</button>
    </div>

export default ErrorCard;