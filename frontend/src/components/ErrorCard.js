import React from 'react';
import rain from '../svg/rain.svg'

const ErrorCard = ({ toMenu, error }) =>
    <>
        <div className="card" style={{maxWidth: '500px'}}>
            <div className="card-item p-4">
                <h1 className="text-2xl">Oops, something went wrong.</h1>
                <img src={rain} alt="" className="w-16 mx-auto my-4" />
                <p className="error">{error}</p>
            </div>
        </div>
        <button onClick={toMenu} className="button">Try again</button>
    </>

export default ErrorCard;