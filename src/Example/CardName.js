import React from 'react';
import '../Style/Example.css';

const CardName = ({name, age}) => {
    return (
        <div className="cardname">
            <h1>Perkenalan :</h1>
            <div>{name +' Usia, '+ age}</div>
        </div>
    );
}

export default CardName