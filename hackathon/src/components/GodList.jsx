import React from "react";
import PropTypes from "prop-types";
import GodCard from "./GodCard";
import FavoriteCard from "./FavoriteCard";

const GodList = ({ gods, add, remove, favorites }) => {
  return (
    <div>
      {gods.map((god) => (
        <GodCard
          key={god.id}
          name={god.name}
          photo={god.photo}
          age={god.age}
          gender={god.gender}
          sport={god.othersItems.sports}
          passion={god.othersItems.passion}
          add={add}
        />
      ))}
      {favorites.map((favorite) => (
        <FavoriteCard
          key={favorite.id}
          name={favorite.name}
          photo={favorite.photo}
          age={favorite.age}
          astroSign={favorite.othersItems.astroSign}
          address={favorite.contact.address}
          phone={favorite.contact.phone}
          instagram={favorite.contact.instafavorite}
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
  gods: PropTypes.arrayOf(PropTypes.object).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GodList;
