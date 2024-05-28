import React from "react";

import './Card.css';

const Card = ({name, status, species, image, location, gender}) => {
    return (
        <div className='personagem'>
          <img className='img-card'src={image} alt='Rick and Morty'/>

          <div className='info-textual'>
              <h2>{name}</h2>
              <p>{status} - {species}</p>
              <span>Character gender:</span>
              <p>{gender}</p>
              <span>Last known location:</span>
              <p>{location}</p>
          </div>
        </div>
    );
};

export { Card };