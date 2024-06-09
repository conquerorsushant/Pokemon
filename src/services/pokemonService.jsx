import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 30) => {
  // Determine the total number of Pokémon available in the API
  const totalResponse = await axios.get(`${API_URL}/pokemon`);
  const totalPokemons = totalResponse.data.count;

  // Calculate a random offset based on the total number of Pokémon
  const maxOffset = totalPokemons - limit;
  const randomOffset = Math.floor(Math.random() * maxOffset);

  // Fetch Pokémon data with the random offset
  const response = await axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${randomOffset}`);
  const pokemonDetails = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const pokemonData = await axios.get(pokemon.url);
      return pokemonData.data;
    })
  );

  return pokemonDetails;
};
