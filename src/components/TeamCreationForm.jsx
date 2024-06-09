// src/components/TeamCreationForm.jsx

import React from 'react';
import Button from '@mui/material/Button';

const TeamCreationForm = ({ newTeamName, setNewTeamName, createNewTeam, username, setUsername }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
        
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        style={{ marginRight: '10px',height:"30px" }}
      />
      <input
        type="text"
        value={newTeamName}
        onChange={(e) => setNewTeamName(e.target.value)}
        placeholder="Enter team name"
        style={{ marginRight: '10px',height:"30px" }}
      />
      
      <Button variant='contained' onClick={createNewTeam}>Create Team</Button>
    </div>
  );
};

export default TeamCreationForm;
