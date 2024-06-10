import React from 'react';
import Grid from '@mui/material/Grid';
import PokemonCard from './PokemonCard';

const AllPokemonPage = ({ allPokemons }) => {
  // Extract unique Pokémon from all teams
  const uniquePokemons = Array.from(new Set(allPokemons.map(pokemon => pokemon.id)))
    .map(id => allPokemons.find(pokemon => pokemon.id === id));

  return (
    <div>
      <h2>All Pokémon</h2>
      <Grid container spacing={2}>
        {uniquePokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={pokemon.id}>
            {/* Render PokemonCard for each unique Pokémon */}
            <PokemonCard
              pokemon={pokemon}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllPokemonPage;
