import React, { Component } from "react";
import '../styled/Card.css';

class FavoriteCard extends Component {
  render() {
    const { godsFav } = this.props;
    return (
      <div>
        <h2>Favorite</h2>
        {godsFav.map(god => (
        <div className="flip-card" >
          <div className='flip-card-inner'>
            <div className="flip-card-front">
              <img src={god.photo} alt='name' className='godImage' />
              <h1 className='name'>{god.name}</h1>
            </div>
            <div className="flip-card-back">
              <h2>{god.name}</h2>
              <p>Age : {god.age}</p>
              <p>Astro Sign : {god.stroSign} </p>
              <p>Address : {god.address}</p>
              <p>Phone : {god.phone}</p>
              <p>Instagram : {god.instaGod}</p>
              <p>Hobbies : {god.passion}</p>
              <button onClick={() => this.props.remove(god.id)}>
                Delete from Favorite
          </button>
            </div>
          </div>
        </div>
    ))};
      </div>
    )
  }
}

export default FavoriteCard;
