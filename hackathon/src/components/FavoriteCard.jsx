import React, { Component } from "react";
import '../styled/Card.css';
import Dislike from "../img/Dislike.png";

class FavoriteCard extends Component {
  render() {
    const { godsFav, remove } = this.props;
    return (
      <div>
        <h2>Favorite</h2>
        {godsFav.map(god => (
        <div className='flip-card' >
          <div className='flip-card-inner'>
            <div className="flip-card-front">
              <img src={god.Photo} alt='name' className='godImage' />
              <h1 className='name'>{god.Name}</h1>
            </div>
            <div className="flip-card-back">
              <h2>{god.Name}</h2>
              <p>Age : {god.Age} <br/>
              Astro Sign : {god.OthersItems.AstroSign} <br/>
              Address : {god.Contact.Address} <br/>
              Phone : {god.Contact.Phone} <br/>
              Instagram : {god.Contact.InstaGod} <br/>
              Hobbies : {god.OthersItems.Passion}
              </p>
              <div id={god.Key}>
                <img className='dislike' src={Dislike} alt="dislike" onClick={() => remove(god.Key)}/>
              </div>
            </div>
          </div>
        </div>
    ))}
      </div>
    )
  }
}

export default FavoriteCard;
