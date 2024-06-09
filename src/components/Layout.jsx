// src/components/Layout.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import TeamList from './TeamList';

const Layout = ({
  pokemons,
  teams,
  addPokemonToTeam,
  removePokemonFromTeam,
  updateTeamName,
  deleteTeam,
  newTeamName,
  setNewTeamName,
  createNewTeam
}) => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route 
            path="/" 
            element={
              <PokemonList 
                pokemons={pokemons} 
                teams={teams} 
                addPokemonToTeam={addPokemonToTeam} 
                newTeamName={newTeamName}
                setNewTeamName={setNewTeamName}
                createNewTeam={createNewTeam}
              />
            } 
          />
          <Route 
            path="/teams" 
            element={
              <TeamList 
                teams={teams}
                removePokemonFromTeam={removePokemonFromTeam}
                updateTeamName={updateTeamName}
                deleteTeam={deleteTeam}
                newTeamName={newTeamName}
                setNewTeamName={setNewTeamName}
                createNewTeam={createNewTeam}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
