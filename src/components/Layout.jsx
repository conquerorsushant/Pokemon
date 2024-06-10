// src/components/Layout.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import TeamManager from './TeamManager';
import AllPokemonPage from './AllPokemonPage';



const Layout = ({
  pokemons,
  setPokemons,

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
              />
            }
          />
          {/* Route for managing teams */}
          <Route
            path="/teams"
            element={
              <TeamManager />
            }
          />
          {/* Route for displaying all Pokémon */}
          <Route path="/all-pokemon" element={<AllPokemonPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
