import { useState, useEffect } from 'react';

const useTeams = () => {
  // Function to initialize teams from localStorage
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

  const [teams, setTeams] = useState(initializeTeams); // State to hold teams
  const [newTeamName, setNewTeamName] = useState(''); // State for new team name
  const [dialogOpen, setDialogOpen] = useState(false); // State for dialog visibility
  const [dialogMessage, setDialogMessage] = useState(''); // State for dialog message

  // Effect to store teams in localStorage whenever teams change
  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);

  // Function to add a Pokémon to a team
  const addPokemonToTeam = (pokemon, teamIndex) => {
    setTeams(prevTeams => {
      const updatedTeams = [...prevTeams];
      const team = updatedTeams[teamIndex].pokemons;
      if (team.length >= 6) {
        setDialogMessage('A team can only have up to 6 Pokémon.');
        setDialogOpen(true);
        return prevTeams;
      }
      if (!team.find(p => p.id === pokemon.id)) {
        updatedTeams[teamIndex] = { ...updatedTeams[teamIndex], pokemons: [...team, pokemon] };
      }
      return updatedTeams;
    });
  };

  // Function to remove a Pokémon from a team
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

  // Function to create a new team
  const createNewTeam = () => {
    if (newTeamName.trim() === '') {
      setDialogMessage('Team name cannot be empty.');
      setDialogOpen(true);
      return;
    }
    setTeams(prevTeams => [...prevTeams, { name: newTeamName, pokemons: [] }]);
    setNewTeamName('');
  };

  // Function to delete a team
  const deleteTeam = (teamIndex) => {
    setTeams(prevTeams => prevTeams.filter((_, index) => index !== teamIndex));
  };

  return {
    teams,
    newTeamName,
    setNewTeamName,
    addPokemonToTeam,
    removePokemonFromTeam,
    createNewTeam,
    deleteTeam,
    dialogOpen,
    setDialogOpen,
    dialogMessage,
  };
};

export default useTeams;
