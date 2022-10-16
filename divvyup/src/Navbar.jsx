import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from './/assets/divvyuplogo.png';
import { ThemeProvider , createTheme } from '@mui/material/styles';
import "@fontsource/montserrat";


const theme = createTheme({
  typography: {
    button: {
      fontFamily: 'montserrat',
      fontSize: 16,
      fontWeight: 300,
    },
  }
});

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component="img" sx={{ height:48, mr:1, display:{xs: 'none', md: 'flex'} }} alt="logo" src={Logo} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'montserrat',
                fontWeight: 300,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DivvyUp
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu} component={Link} to='/'>
                  <Typography textAlign="center" fontFamily="montserrat" sx={{ fontWeight: 300 }}>Home</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to='/about-us'>
                  <Typography textAlign="center" fontFamily="montserrat" sx={{ fontWeight: 300 }}>About Us</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to='/sample'>
                  <Typography textAlign="center" fontFamily="montserrat" sx={{ fontWeight: 300 }}>Sample</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box component="img" sx={{ height:48, display:{xs: 'flex', md: 'none'}, mr:1 }} alt="logo" src={Logo} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'montserrat',
                fontWeight: 300,
                letterSpacing: '.25rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DivvyUp
            </Typography>
            <Box justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button color="inherit">
                 <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
              </Button>
              <Button color="inherit">
                <Link to="/about-us" style={{ textDecoration: 'none', color: 'white' }}>About Us</Link>
              </Button>
              <Button color="inherit">
                <Link to="/sample" style={{ textDecoration: 'none', color: 'white' }}>Sample</Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
