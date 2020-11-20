import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import '../styled/Card.css';
import '../styled/Accordion.css';
import Like from "../img/Like.png";
import Dislike from "../img/Dislike.png";
import '../styled/Card.css';
import '../styled/Accordion.css';
import styled from "styled-components";

const ImgLike = styled.img`
  width: 3em;
`;

const ImgDislike = styled.img`
  width: 3em;
`;

class GodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false
    }
  }

  handleFavorite = () => {
    const { isFavorite } = this.state;
    this.setState({ isFavorite: !isFavorite })
  }

  render() {
    const { god, add } = this.props;
    return (
      <div>
          <div className='godContainer'>
            <div className='container'>
              <img src={god.Photo} alt={god.Name} className='godImage' />
              <h1 className='name'>{god.Name}</h1>
            </div>
            <hr className='hr' />
            <div className='likeContainer'>
              <div className={this.state.isFavorite ? 'favorite' : 'notFavorite'} onClick={this.handleFavorite}>            <ImgLike src={Like} alt="like"/></div>
              <button onClick={() => add(god.Key)}>Add to Fav</button>
              <div className='dislike'>
                <ImgDislike src={Dislike} alt="dislike"/></div>
            </div>
            <div className="accordion">
              <input type="checkbox" id="god-options" className="toggle" />
              <label className="title" htmlFor="god-options">

              </label>
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

export default GodCard ;
