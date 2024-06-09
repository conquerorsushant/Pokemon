// src/components/PokemonList.jsx

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import PokemonCard from './PokemonCard';
import TeamCreationForm from './TeamCreationForm';

const PokemonList = ({
  pokemons,
  teams,
  addPokemonToTeam,
  removePokemonFromTeam, // Ensure this prop is received
  newTeamName,
  setNewTeamName,
  createNewTeam,
}) => {
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleAddToTeam = (pokemon) => {
    if (selectedTeam === '') {
      alert('Please select a team.');
      return;
    }
    addPokemonToTeam(pokemon, selectedTeam);
  };

  const handleRemoveFromTeam = (pokemon) => {
    if (selectedTeam === '') {
      alert('Please select a team.');
      return;
    }
    removePokemonFromTeam(pokemon.id, selectedTeam);
  };

  const isPokemonInTeam = (pokemon) => {
    if (selectedTeam === '') return false;
    return teams[selectedTeam].pokemons.some((p) => p.id === pokemon.id);
  };

  return (
    <div>
      <h2>All Pokémon</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          displayEmpty
          style={{ width: '200px', marginRight: '10px' }}
        >
          <MenuItem value="" disabled>
            Select Team
          </MenuItem>
          {teams.map((team, index) => (
            <MenuItem key={index} value={index}>
              {team.name}
            </MenuItem>
          ))}
        </Select>
        <TeamCreationForm
          newTeamName={newTeamName}
          setNewTeamName={setNewTeamName}
          createNewTeam={createNewTeam}
        />
      </div>
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={pokemon.id}>
            <PokemonCard
              pokemon={pokemon}
              onAddToTeam={() => handleAddToTeam(pokemon)}
              onRemoveFromTeam={() => handleRemoveFromTeam(pokemon)} // Correctly call the handler
              isInTeam={isPokemonInTeam(pokemon)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PokemonList;
