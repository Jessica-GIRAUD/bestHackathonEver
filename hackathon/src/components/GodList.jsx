import React from "react";
import PropTypes from "prop-types";
import GodCard from "./GodCard";
import FavoriteCard from "./FavoriteCard";
import Data from "../APIGods.json";

const GodList = ({ gods, add, remove, favorites }) => {
  return (
    <div>
      {gods.map((god) => (
        <GodCard
          key={god.Key}
          name={god.Name}
          photo={god.Photo}
          age={god.Age}
          gender={god.Gender}
          sport={god.OthersItems.Sports}
          passion={god.OthersItems.Passion}
          add={add}
        />
      ))}
      {favorites.map((favorite) => (
        <FavoriteCard
          key={favorite.Key}
          name={favorite.Name}
          photo={favorite.Photo}
          age={favorite.Age}
          astroSign={favorite.OthersItems.AstroSign}
          address={favorite.Contact.Address}
          phone={favorite.Contact.Phone}
          instagram={favorite.Contact.instafavorite}
          hobbies={favorite.othersItems.passion}
          gender={favorite.gender}
          sport={favorite.othersItems.sports}
          passion={favorite.othersItems.passion}
          favorites={favorites}
          remove={remove}
        />
      ))}
    </div>
  );
};

GodList.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.object).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GodList;
