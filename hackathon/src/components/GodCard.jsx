import React, { Component } from "react";
import PropTypes from "prop-types";
import '../styled/Card.css';
import '../styled/Accordion.css';

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
    const { godsFav } = this.props;
    return (
      <div>
        <h2>Gods</h2>
        {godsFav.map((god) =>
          <div className='godContainer'>
            <div className='container'>
              <img src={god.photo} alt={god.name} className='godImage' />
              <h1 className='name'>{god.name}</h1>
            </div>
            <hr className='hr' />
            <div className='likeContainer'>
              <div className={this.state.isFavorite ? 'favorite' : 'notFavorite'} onClick={this.handleFavorite}></div>
              <button onClick={() => this.props.add(god.id)}>Add to Fav</button>
              <div className='dislike'>&#10008;</div>
            </div>
            <div className="accordion">
              <input type="checkbox" id="god-options" className="toggle" />
              <label className="title" htmlFor="god-options">
                <span>&#9432;</span>
              </label>
              <div className="content">
                <div>
                  <p>Age : {god.age}</p>
                  <p>Genres : {god.gender}</p>
                  <p>Sport : {god.sports}</p>
                  <p>Passions : {god.passion}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

GodCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  sports: PropTypes.string.isRequired,
  passion: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
};

export default GodCard;