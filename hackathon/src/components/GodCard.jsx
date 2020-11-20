import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import "../styled/Card.css";
import "../styled/Accordion.css";
import Like from "../img/Like.png";
import Dislike from "../img/Dislike.png";
import '../styled/Flip.css';
import '../styled/Accordion.css';

import Data from "../APIGods.json";

class GodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
      data: { Data },
    };
  }

  handleFavorite = () => {
    const { isFavorite } = this.state;
    this.setState({ isFavorite: !isFavorite });
  };

  render() {
    const { god, add, removeGod } = this.props;
    const { isFavorite } = this.state;
    return (
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img src={god.Photo} alt={god.Name} className='godImage' />
            <h1 className='name'>{god.Name}</h1>
          </div>
          <div className="flip-card-back">
            <div>
              <p>Age : {god.Age}</p>
              <p>Genres : {god.Gender}</p>
              <p>Sport : {god.OthersItems.Sports}</p>
              <p>Passions : {god.OthersItems.Passion}</p>
            </div>
            <div className='likeContainer'>
              <div onClick={this.handleFavorite}>
                <img className={isFavorite ? 'like' : 'dislike'} src={Like} alt="like" onClick={() => add(god.Key)} />
              </div>
              <div>
                <img className='dislike' src={Dislike} alt="dislike" onClick={() => removeGod(god.Key)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GodCard;
