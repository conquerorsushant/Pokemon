// src/components/AllPokemonPage.jsx

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import PokemonCard from './PokemonCard';
import { fetchPokemons } from '../services/pokemonService';

const AllPokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons(100); // Fetch 30 Pokémon by default
      setPokemons(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Pokémon</h2>
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={pokemon.id}>
            <PokemonCard
              pokemon={pokemon}
              // Assuming PokemonCard component shows the extra data by default
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllPokemonPage;
