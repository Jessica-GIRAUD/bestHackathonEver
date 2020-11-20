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
              <img src={god.Photo} alt='name' className='godImage' />
              <h1 className='name'>{god.Name}</h1>
            </div>
            <div className="flip-card-back">
              <h2>{god.Name}</h2>
              <p>Age : {god.Age}</p>
              <p>Astro Sign : {god.AstroSign} </p>
              <p>Address : {god.Address}</p>
              <p>Phone : {god.Phone}</p>
              <p>Instagram : {god.InstaGod}</p>
              <p>Hobbies : {god.Passion}</p>
              <button onClick={() => this.props.remove(god.id)}>
                Delete from Favorite
          </button>
            </div>
          </div>
        </div>
    ))}
      </div>
    )
  }
}

export default FavoriteCard;
