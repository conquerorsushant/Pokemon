import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useTeams from '../hooks/useTeams'; 

const TeamManager = () => {
  const {
    teams,
    removePokemonFromTeam,
    deleteTeam,

  } = useTeams();

  useEffect(() => {
    // This effect will trigger every time teams change
    console.log('Teams updated:', teams);
  }, [teams]);

  return (
    <div>
      
      <h2 style={{ color: 'white', marginBottom: '20px', textDecoration: 'underline' }}>
        Teams Created
      </h2>
      {/* Check if there are no teams to display */}
      {teams.length === 0 ? (
        <Typography variant="body1" style={{ color: 'white' }}>
          No teams available
        </Typography>
      ) : (
        // Map over the teams array to display each team
        teams.map((team, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              {/* Static text to display team name */}
              <Typography
                variant="body1"
                style={{
                  width: '20%',
                  color: 'white',
                  border: '2px solid white',
                  padding: '10px',
                  marginRight: '10px'
                }}
              >
                {team.name}
              </Typography>
              {/* Button to remove team */}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteTeam(index)}
                style={{ marginLeft: 'auto' }}
              >
                Remove Team
              </Button>
            </div>
            {/* Grid container to display team's Pokémon */}
            <Grid container spacing={2}>
              {team.pokemons.map((pokemon) => (
                <Grid item xs={12} sm={6} md={4} lg={2.4} key={pokemon.id}>
                  <Card
                    sx={{
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                      },
                      width: '230px',
                      height: 'auto',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      sx={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'contain',
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {pokemon.name}
                      </Typography>
                      {/* Button to remove Pokémon from team */}
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => removePokemonFromTeam(pokemon.id, index)}
                        style={{ marginTop: '10px' }}
                      >
                        Remove
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        ))
      )}
    </div>
  );
};

export default TeamManager;
