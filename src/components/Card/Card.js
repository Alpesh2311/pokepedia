import React, { useState, useEffect } from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa";
import { useFavorites } from "../../FavouriteContext";
import { useDetails } from "../../MoreDetailsContext";

function Card({ url, checkMoreClicked }) {
  const [name, setName] = useState(null);
  const [pokeData, setPokeData] = useState(null);
  const [image, setImage] = useState(null);

  const { favorites, toggleFavorite } = useFavorites();
  const { showDetails } = useDetails();

  const getData = async (url) => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setPokeData(data);
      setImage(data.sprites.front_default);
      setName(data.name);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  function titleCase(word) {
    if (!name) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function handleMoreDetailsClick() {
    showDetails(pokeData);
    checkMoreClicked(true);
  }

  const isStarred = favorites.some((fav) => fav.name === name);

  return (
    <>
      <div className="card">
        <img src={image} alt="pokemon" />
        <div className="info">
          <p>{titleCase(name)}</p>
          <button className="info-btn" onClick={handleMoreDetailsClick}>
            more..
          </button>
        </div>
        <FaStar
          size={25}
          className={isStarred ? "starred" : "star"}
          onClick={() => {
            toggleFavorite({ name, image });
          }}
        />
      </div>
    </>
  );
}

export default Card;
