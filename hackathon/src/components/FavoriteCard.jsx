import React from "react";
import '../styled/Card.css';

function FavoriteCard () {
    return (
      <div class="flip-card">
        <div className='flip-card-inner'>
          <div class="flip-card-front">
            <img src='https://www.flaticon.com/svg/static/icons/svg/739/739249.svg' alt='name' className='godImage' />
            <h1 className='name'>Name</h1>
          </div>
          <div class="flip-card-back">
            <h1>Name : </h1>
            <p>Age :</p>
            <p>Poids :</p>
            <p>Taille :</p>
            <p>Hobbies :</p>
            <p>Signe Astro :</p>
          </div>
        </div>
      </div>
    )
}

export default FavoriteCard;