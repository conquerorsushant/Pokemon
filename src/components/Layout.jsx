// src/components/Layout.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import TeamManager from './TeamManager';

const Layout = ({
  pokemons,
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
          <Route
            path="/"
            element={
              <PokemonList
                pokemons={pokemons}
                teams={teams}
                addPokemonToTeam={addPokemonToTeam}
                removePokemonFromTeam={removePokemonFromTeam} // Ensure this prop is passed
                newTeamName={newTeamName}
                setNewTeamName={setNewTeamName}
                createNewTeam={createNewTeam}
              />
            }
          />
          <Route
            path="/teams"
            element={
              <TeamManager
                teams={teams}
                removePokemonFromTeam={removePokemonFromTeam} // Ensure this prop is passed
                updateTeamName={updateTeamName}
                deleteTeam={deleteTeam}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
