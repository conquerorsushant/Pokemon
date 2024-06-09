// src/components/TeamManager.jsx

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const TeamManager = ({ teams, removePokemonFromTeam, updateTeamName, deleteTeam }) => {
  return (
    <div>
      <h2>Teams</h2>
      {teams.map((team, index) => (
        <div key={index}>
          <TextField
            label={`Team ${index + 1} Name`}
            value={team.name}
            onChange={(e) => updateTeamName(index, e.target.value)}
            style={{ marginTop: '20px', width: '100%' }}
          />
          <Button variant="contained" color="secondary" onClick={() => deleteTeam(index)}>Delete Team</Button>
          <Grid container spacing={2}>
            {team.pokemons.map(pokemon => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={pokemon.id}>
                <Card
                  sx={{
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100"
                    image={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {pokemon.name}
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={() => removePokemonFromTeam(pokemon.id, index)}>Remove</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default TeamManager;
