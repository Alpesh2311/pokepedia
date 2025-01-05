// FavoritesContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favourites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (pokemon) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.name === pokemon.name)) {
        return prevFavorites.filter((fav) => fav.name !== pokemon.name);
      } else {
        return [...prevFavorites, pokemon];
      }
    });
  };

  return <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => useContext(FavoritesContext);
