import axios from "axios";

const apiCaller = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export async function getPokemon(name = "", offset = 0, N = 5) {
  let response = await apiCaller.get(`${name}?offset=${offset}&limit=${N}`);
  return response.data;
}

export function formatPokemonObject(data) {
  let pokeArray = [];
  if (!data.hasOwnProperty("results")) {
    pokeArray.push(data);
  } else {
    data.results.forEach((entry) => {
      const pokeInfo = getPokemon(`${entry.name}`);
      pokeInfo.then((result) => {
        pokeArray.push(result);
      });
    });
  }
  return pokeArray;
}
