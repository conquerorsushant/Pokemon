import React from 'react';
import TeamManager from './TeamManager';
import TeamCreationForm from './TeamCreationForm';

const TeamList = ({
  teams,
  removePokemonFromTeam,
  deleteTeam,
  newTeamName,
  setNewTeamName,
  createNewTeam
}) => {
  
  return (
    <div>
      {/* Component for creating a new team */}
      <TeamCreationForm 
        newTeamName={newTeamName} 
        setNewTeamName={setNewTeamName} 
        createNewTeam={createNewTeam} 
      />
      {/* Component for managing existing teams */}
      <TeamManager
        teams={teams}
        removePokemonFromTeam={removePokemonFromTeam}
        deleteTeam={deleteTeam}
      />
    </div>
  );
};

export default TeamList;
