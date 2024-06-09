// src/App.jsx

import React, { useEffect, useState } from 'react';
import { fetchPokemons } from './services/pokemonService';
import Layout from './components/Layout';
import useTeams from './hooks/useTeams';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const {
    teams,
    newTeamName,
    setNewTeamName,
    addPokemonToTeam,
    removePokemonFromTeam,
    updateTeamName,
    createNewTeam,
    deleteTeam,
  } = useTeams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
    };
    fetchData();
  }, []);

  return (
    <Layout 
      pokemons={pokemons}
      teams={teams}
      addPokemonToTeam={addPokemonToTeam}
      removePokemonFromTeam={removePokemonFromTeam}
      updateTeamName={updateTeamName}
      deleteTeam={deleteTeam}
      newTeamName={newTeamName}
      setNewTeamName={setNewTeamName}
      createNewTeam={createNewTeam}
    />
  );
};

export default App;
