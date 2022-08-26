import React from "react";
import "./App.css";

//Components and Hooks

import { PokeCard, NavBar, SearchBar, Filter } from "./components/";
import { useState, useEffect } from "react";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [pokeURL, setPokeURL] = useState("");
  const [filter, setFilter] = useState("");

  // -----------initial pokemon rendering------
  const getPokeData = async (name) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}?limit=100`
    );
    const data = await res.json();

    function createPokemonObject(results) {
      setPokeData([]);
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        if (filter === "" || filter === data.types[0].type.name) {
          setPokeData((currentList) => [...currentList, data]);
        }
      });
    }

    const requestedPokemon = name === "" ? data.results : [data];

    createPokemonObject(requestedPokemon);
  };

  useEffect(() => {
    getPokeData();
  }, []);
  //--------------------------------------------

  useEffect(() => {
    getPokeData(pokeURL);
  }, [pokeURL, filter]);

  return (
    <div className="App">
      <NavBar />
      <SearchBar onRequestChange={setPokeURL} removeFilter={setFilter} />
      <Filter onFilterClick={setFilter} />
      <div className="card-container">
        {pokeData.map((entry) => {
          return (
            <PokeCard
              key={entry.id}
              image={entry.sprites.front_default}
              name={entry.name}
              id={entry.id}
              type={entry.types[0].type.name}
              height={entry.height}
              weight={entry.weight}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
