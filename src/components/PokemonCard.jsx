// src/components/PokemonCard.jsx

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PokemonCard = ({ pokemon, onAddToTeam, isInTeam }) => {
  return (
    <Card
      sx={{
        backgroundColor: isInTeam ? 'lightgreen' : 'white', // Change color if in team
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        },
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
        <Button variant="contained" onClick={onAddToTeam}>
          {isInTeam ? 'In Team' : 'Add to Team'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
