// src/hooks/useTeams.jsx

import { useState, useEffect } from 'react';

const useTeams = () => {
  const initializeTeams = () => {
    const storedTeams = localStorage.getItem('teams');
    if (storedTeams) {
      try {
        const parsedTeams = JSON.parse(storedTeams);
        if (Array.isArray(parsedTeams) && parsedTeams.every(team => team.name && Array.isArray(team.pokemons))) {
          return parsedTeams;
        }
      } catch (e) {
        console.error("Failed to parse teams from local storage", e);
      }
    }
    return [];
  };

  const [teams, setTeams] = useState(initializeTeams);
  const [newTeamName, setNewTeamName] = useState('');

  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);

  const addPokemonToTeam = (pokemon, teamIndex) => {
    setTeams(prevTeams => {
      const updatedTeams = [...prevTeams];
      const team = updatedTeams[teamIndex].pokemons;
      if (team.length >= 6) {
        alert('A team can only have up to 6 Pokémon.');
        return prevTeams;
      }
      if (team && !team.find(p => p.id === pokemon.id)) {
        updatedTeams[teamIndex] = { ...updatedTeams[teamIndex], pokemons: [...team, pokemon] };
      }
      return updatedTeams;
    });
  };

  const removePokemonFromTeam = (pokemonId, teamIndex) => {
    setTeams(prevTeams => {
      const updatedTeams = [...prevTeams];
      updatedTeams[teamIndex] = {
        ...updatedTeams[teamIndex],
        pokemons: updatedTeams[teamIndex].pokemons.filter(p => p.id !== pokemonId)
      };
      return updatedTeams;
    });
  };

  const updateTeamName = (teamIndex, newName) => {
    setTeams(prevTeams => {
      const updatedTeams = [...prevTeams];
      updatedTeams[teamIndex] = { ...updatedTeams[teamIndex], name: newName };
      return updatedTeams;
    });
  };

  const createNewTeam = () => {
    if (newTeamName.trim() === '') {
      alert('Team name cannot be empty.');
      return;
    }
    setTeams(prevTeams => [...prevTeams, { name: newTeamName, pokemons: [] }]);
    setNewTeamName('');
  };

  const deleteTeam = (teamIndex) => {
    setTeams(prevTeams => prevTeams.filter((_, index) => index !== teamIndex));
  };

  return {
    teams,
    newTeamName,
    setNewTeamName,
    addPokemonToTeam,
    removePokemonFromTeam,
    updateTeamName,
    createNewTeam,
    deleteTeam,
  };
};

export default useTeams;
