import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PokemonCard = ({ pokemon, onAddToTeam, onRemoveFromTeam, isInTeam }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Toggles the display of Pokémon details
  const handleToggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <Card
      sx={{
        backgroundColor: isInTeam ? 'lightgreen' : 'white',
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
        {showDetails && (
          <>
            <Typography variant="body2" color="textSecondary">
              Height: {pokemon.height}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Weight: {pokemon.weight}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Base Experience: {pokemon.base_experience}
            </Typography>
          </>
        )}
      </CardContent>
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        {/* Conditionally render Add/Remove buttons if `isInTeam` prop is defined */}
        {isInTeam !== undefined && (
          isInTeam ? (
            <Button variant="contained" color="secondary" onClick={onRemoveFromTeam} style={{ marginTop: '10px' }}>
              Remove
            </Button>
          ) : (
            <Button variant="contained" onClick={onAddToTeam} style={{ marginTop: '10px' }}>
              Add
            </Button>
          )
        )}
        {/* Button to show/hide Pokémon details */}
        <Button variant="contained" onClick={handleToggleDetails} style={{ marginLeft: '10px', marginTop: '8px' }}>
          {showDetails ? 'Hide' : 'Info'}
        </Button>
      </div>
    </Card>
  );
};

export default PokemonCard;
