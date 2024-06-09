// src/components/TeamCreationForm.jsx

import React from 'react';

const TeamCreationForm = ({ newTeamName, setNewTeamName, createNewTeam }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={newTeamName}
        onChange={(e) => setNewTeamName(e.target.value)}
        placeholder="Enter team name"
        style={{ marginRight: '10px' }}
      />
      <button onClick={createNewTeam}>Create Team</button>
    </div>
  );
};

export default TeamCreationForm;
