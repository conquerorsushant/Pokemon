import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PokemonCard from './PokemonCard';
import useTeams from '../hooks/useTeams';

const AllPokemonPage = () => {
  const { teams } = useTeams();

  useEffect(() => {
    // This effect will trigger every time teams change
    console.log('Teams updated:', teams);
  }, [teams]);

  // Function to extract all Pokémon from all teams and return them as a single array
  const getAllPokemonsFromTeams = () => {
    let allPokemons = [];
    teams.forEach((team) => {
      allPokemons = allPokemons.concat(team.pokemons);
    });
    return allPokemons;
  };

  const allPokemons = getAllPokemonsFromTeams();

  return (
    <div>
      <h2 style={{ color: 'white', marginBottom: '20px', textDecoration: 'underline' }}>
        My Pokemons
      </h2>
      {allPokemons.length === 0 ? (
        <Typography variant="body1" style={{ color: 'white' }}>
          No Pokémon available
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {allPokemons.map((pokemon) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={pokemon.id}>
              
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default AllPokemonPage;
