import React, { Component } from "react";
import PropTypes from "prop-types";
import '../styled/Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false
    }
  }

  handleChangeToFavorite = () => {
    const { isFavorite } = this.state;
    this.setState({ isFavorite: !isFavorite });
  };

  render() {
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
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;