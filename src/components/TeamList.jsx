// src/components/TeamList.jsx

import React from 'react';
import TeamManager from './TeamManager';
import TeamCreationForm from './TeamCreationForm';

const TeamList = ({
  teams,
  removePokemonFromTeam,
  updateTeamName,
  deleteTeam,
  newTeamName,
  setNewTeamName,
  createNewTeam
}) => {
  return (
    <div>
      <TeamCreationForm 
        newTeamName={newTeamName} 
        setNewTeamName={setNewTeamName} 
        createNewTeam={createNewTeam} 
      />
      <TeamManager
        teams={teams}
        removePokemonFromTeam={removePokemonFromTeam}
        updateTeamName={updateTeamName}
        deleteTeam={deleteTeam}
      />
    </div>
  );
};

export default TeamList;
