import React, { useEffect, useState } from 'react';
import { fetchPokemons } from './services/pokemonService';
import Layout from './components/Layout';
import useTeams from './hooks/useTeams';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]); 
  

  // Custom hook to manage teams
  const {
    teams,
    newTeamName,
    setNewTeamName,
    addPokemonToTeam,
    removePokemonFromTeam,
    createNewTeam,
    deleteTeam,
  } = useTeams();

  // Fetch Pokémon data when the component mounts
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
      setPokemons={setPokemons}
      teams={teams}
      addPokemonToTeam={addPokemonToTeam}
      removePokemonFromTeam={removePokemonFromTeam}
      deleteTeam={deleteTeam}
      newTeamName={newTeamName}
      setNewTeamName={setNewTeamName}
      createNewTeam={createNewTeam}
     
    />
  );
};

export default App;
