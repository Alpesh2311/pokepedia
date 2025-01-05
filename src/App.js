import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import Loader from "./components/Loader/Loader";
import Card from "./components/Card/Card";
import Favourites from "./components/Favourites/Favourites";
import { FavoritesProvider } from "./FavouriteContext";
import Navbar from "./components/Navbar/Navbar";
import MoreDetails from "./components/MoreDetails/MoreDetails";
import { DetailsProvider } from "./MoreDetailsContext";

function App() {
  const defaultURL = `https://pokeapi.co/api/v2/pokemon/`;
  const [URL, setURL] = useState(defaultURL);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [previousPageURL, setPreviousPageURL] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searched, setSearched] = useState(false);
  const [MoreDetailsClicked, setMoreDetailsClicked] = useState(false);

  const getPokemonsData = async (url) => {
    try {
      setLoading(true);
      const result = await fetch(url);
      const data = await result.json();
      setPokemonData(data);
      setNextPageURL(data.next);
      setPreviousPageURL(data.previous);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPokemonsData(URL);
  }, [URL, searched]);

  function handleSearch() {
    setURL(`${defaultURL}${searchName}/`);
    setSearched(true);
  }

  function handleClear() {
    setURL(defaultURL);
    setSearched(false);
    setSearchName("");
  }

  return (
    <FavoritesProvider>
      <DetailsProvider>
        <div className="App">
          <Navbar more={MoreDetailsClicked} />
          <Filter
            name={searchName}
            setName={(value) => {
              setSearchName(value);
            }}
            onSearch={handleSearch}
            clear={handleClear}
            more={MoreDetailsClicked}
          />

          {/* render only one pokemon if searched or else render entire page  */}

          <MoreDetails
            closeMoreDetails={(value) => {
              setMoreDetailsClicked(value);
            }}
          />

          <div className={`wrapper ${MoreDetailsClicked ? "blur" : ""}`}>
            {loading ? (
              <Loader />
            ) : !searched ? (
              <Dashboard
                data={pokemonData.results}
                checkMoreClicked={(value) => {
                  setMoreDetailsClicked(value);
                }}
              />
            ) : (
              <Card
                url={URL}
                checkMoreClicked={(value) => {
                  setMoreDetailsClicked(value);
                }}
              />
            )}
            <Favourites />
          </div>

          {/* hide pagination if  pokemon is searched  */}
          {!searched ? (
            <Pagination
              nextPage={() => setURL(nextPageURL)}
              previousPage={() => setURL(previousPageURL)}
              disableNextPage={nextPageURL}
              disablePreviousPage={previousPageURL}
              more={MoreDetailsClicked}
            />
          ) : null}
        </div>
      </DetailsProvider>
    </FavoritesProvider>
  );
}

export default App;
