import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import SearchBar from "./components/Control/SearchBar/SearchBar.js";
import Filter from "./components/Control/Filter/Filter.js";
import PokeCard from "./components/PokeCard/PokeCard.js";
import { useState, useEffect } from "react";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});

  const axios = require("axios");

  async function getPokemon() {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/bulbasaur"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemon().then((response) => {
      setCurrentPokemon(response.data);
    });
  }, []);

  const {
    name,
    height,
    id,
    sprites: { front_default: image },
    types: [
      {
        type: { name: typeName },
      },
    ],
    weight,
  } = currentPokemon;

  const currentDexInfo = { name, height, id, image, typeName, weight };

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Filter />
      <PokeCard info={currentDexInfo} />
    </div>
  );
}

export default App;
