// src/components/PokemonList.jsx

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PokemonCard from './PokemonCard';
import TeamCreationForm from './TeamCreationForm';
import { fetchPokemons } from '../services/pokemonService';
import useTeams from '../hooks/useTeams';

const PokemonList = ({
  pokemons,
  setPokemons,
}) => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [username, setUsername] = useState('');
  const {
    teams,
    newTeamName,
    setNewTeamName,
    addPokemonToTeam,
    removePokemonFromTeam,
    updateTeamName,
    createNewTeam,
    deleteTeam,
    dialogOpen,
    setDialogOpen,
    dialogMessage,
  } = useTeams();

  const handleAddToTeam = (pokemon) => {
    if (selectedTeam === '') {
      setDialogMessage('Please select a team.');
      setDialogOpen(true);
      return;
    }
    addPokemonToTeam(pokemon, selectedTeam);
  };

  const handleRemoveFromTeam = (pokemon) => {
    if (selectedTeam === '') {
      setDialogMessage('Please select a team.');
      setDialogOpen(true);
      return;
    }
    removePokemonFromTeam(pokemon.id, selectedTeam);
  };

  const isPokemonInTeam = (pokemon) => {
    if (selectedTeam === '') return false;
    return teams[selectedTeam].pokemons.some((p) => p.id === pokemon.id);
  };

  const handleChangePokemon = async () => {
    const newPokemons = await fetchPokemons();
    setPokemons(newPokemons);
  };

  return (
    <div>
      <h2>{username && <p>Player Name: {username}</p>}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          displayEmpty
          style={{ width: '200px', marginRight: '10px', color: 'white', border: '2px solid white' }}
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
          username={username}
          setUsername={setUsername}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button variant="contained" onClick={handleChangePokemon}>
          Change Pokémon
        </Button>
      </div>
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={pokemon.id}>
            <PokemonCard
              pokemon={pokemon}
              onAddToTeam={() => handleAddToTeam(pokemon)}
              onRemoveFromTeam={() => handleRemoveFromTeam(pokemon)}
              isInTeam={isPokemonInTeam(pokemon)}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PokemonList;
