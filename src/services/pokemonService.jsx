import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 30) => {
  const response = await axios.get(`${API_URL}/pokemon?limit=${limit}`);
  const pokemonDetails = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const pokemonData = await axios.get(pokemon.url);
      return pokemonData.data;
    })
  );
  return pokemonDetails;
};
