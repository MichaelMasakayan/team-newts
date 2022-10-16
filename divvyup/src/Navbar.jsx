import * as React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DivvyUp
          </Typography>
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
          </Button>
          <Button color="inherit">
            <Link to="/contacts" style={{ textDecoration: 'none', color: 'white' }}>Contacts</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;