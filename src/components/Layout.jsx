// src/components/Layout.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import TeamManager from './TeamManager';
import AllPokemonPage from './AllPokemonPage'; // Import the new component

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
  username,
  setUsername,
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
                setPokemons={setPokemons}
                teams={teams}
                addPokemonToTeam={addPokemonToTeam}
                removePokemonFromTeam={removePokemonFromTeam}
                newTeamName={newTeamName}
                setNewTeamName={setNewTeamName}
                createNewTeam={createNewTeam}
                username={username}
                setUsername={setUsername}
              />
            }
          />
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
          <Route path="/all-pokemon" element={<AllPokemonPage />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
