import React, { useEffect, useState } from "react";
import "./Favourites.css";
import { FaXmark, FaAngleLeft } from "react-icons/fa6";
import { useFavorites } from "../../FavouriteContext";

function Favourites() {
  const { favorites, toggleFavorite } = useFavorites();

  const [toggleFav, setToggleFav] = useState(true);

  return (
    <div className={`fav-wrapper ${toggleFav ? "hide-fav" : ""}`}>
      <div
        className="toggle-fav "
        onClick={() => {
          setToggleFav(!toggleFav);
        }}
      >
        <FaAngleLeft className="favorite-arrow" />
      </div>
      <section className={`favourites `}>
        <h2>Favourite Pokemons</h2>
        <div className="list">
          {favorites.length !== 0 ? (
            favorites.map((item, index) => (
              <div className="favourite-card" key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
                <FaXmark size={25} className="cancel" onClick={() => toggleFavorite(item)} />
              </div>
            ))
          ) : (
            <p>No favourite Pokemon added</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Favourites;
