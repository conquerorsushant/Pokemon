// src/components/Layout.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import TeamManager from './TeamManager';
import AllPokemonPage from './AllPokemonPage'; // Import the AllPokemonPage component

// Define a function to extract all Pokémon from all teams and return them as a single array
const getAllPokemonsFromTeams = (teams) => {
  return teams.reduce((allPokemons, team) => {
    return allPokemons.concat(team.pokemons);
  }, []);
};

const Layout = ({
  pokemons,
  setPokemons,
  teams,
  addPokemonToTeam,
  removePokemonFromTeam,
  updateTeamName,
  deleteTeam,
  newTeamName,
  setNewTeamName,
  createNewTeam,
  
}) => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Route for displaying the Pokémon list and managing teams */}
          <Route
            path="/"
            element={
              <PokemonList
                pokemons={pokemons}
                setPokemons={setPokemons}
                teams={teams}
                addPokemonToTeam={addPokemonToTeam}
                removePokemonFromTeam={removePokemonFromTeam}
                newTeamName={newTeamName}
                setNewTeamName={setNewTeamName}
                createNewTeam={createNewTeam}
               
              />
            }
          />
          {/* Route for managing teams */}
          <Route
            path="/teams"
            element={
              <TeamManager
                teams={teams}
                removePokemonFromTeam={removePokemonFromTeam}
                updateTeamName={updateTeamName}
                deleteTeam={deleteTeam}
              />
            }
          />
          {/* Route for displaying all Pokémon */}
          <Route path="/all-pokemon" element={<AllPokemonPage allPokemons={getAllPokemonsFromTeams(teams)} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
