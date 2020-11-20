import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import '../styled/Card.css';
import '../styled/Accordion.css';
import Like from "../img/Like.png";
import Dislike from "../img/Dislike.png";
import '../styled/Card.css';
import '../styled/Accordion.css';
import Data from "../APIGods.json";

class GodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
      data: { Data }
    }
  }

  handleFavorite = () => {
    const { isFavorite } = this.state;
    this.setState({ isFavorite: !isFavorite })
  }

  render() {
    const { god, add, removeGod } = this.props;
    const { isFavorite } = this.state;
    return (
      <div className='general'>
        <div className='godContainer'>
          <div className='container'>
            <img src={god.Photo} alt={god.Name} className='godImage' />
            <h1 className='name'>{god.Name}</h1>
          </div>
          <hr className='hr' />

          <div className='likeContainer'>
            <div onClick={this.handleFavorite}>
              <img className={isFavorite ? 'like' : 'dislike'} src={Like} alt="like" onClick={() => add(god.Key)} />
            </div>
            <div>
              <img className='dislike' src={Dislike} alt="dislike" onClick={() => removeGod(god.Key)} />
            </div>
          </div>

          <div className="accordion">
            <div>
              <input type="checkbox" id="god-options" className="toggle" />
              <label className="title" htmlFor="god-options">
                <span>&#9432;</span>
              </label>
            </div>
            <div className="content">
              <div>
                <p>Age : {god.Age}</p>
                <p>Genres : {god.Gender}</p>
                <p>Sport : {god.Sports}</p>
                <p>Passions : {god.Passion}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

/* GodCard.propTypes = {
     name: PropTypes.string.isRequired,
     photo: PropTypes.string.isRequired,
     id: PropTypes.number.isRequired,
     age: PropTypes.number.isRequired,
     gender: PropTypes.string.isRequired,
     sports: PropTypes.string.isRequired,
     passion: PropTypes.string.isRequired,
     add: PropTypes.func.isRequired,
   }; */

export default GodCard;
