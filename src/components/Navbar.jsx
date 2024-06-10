import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  // Styles for the navigation links and buttons
  const navLinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  const navButtonStyle = {
    marginRight: '10px',
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Pokemon Game
        </Typography>
        {/* Navigation links */}
        <Button color="inherit" style={navButtonStyle}>
          <Link to="/" style={navLinkStyle}>Create Team</Link>
        </Button>
        <Button color="inherit" style={navButtonStyle}>
          <Link to="/teams" style={navLinkStyle}>Teams</Link>
        </Button>
        <Button color="inherit" style={navButtonStyle}>
          <Link to="/all-pokemon" style={navLinkStyle}>All Pokemon</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
