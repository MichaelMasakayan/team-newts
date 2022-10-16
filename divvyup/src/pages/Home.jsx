import * as React from 'react';
import './Home.css'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
      </Box>
    </Box>
  );
}

function Home() {
  return(
    <div>
      <Container maxWidth='xl'>
        <Box sx={{ flexGrow: 1, }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                variant="h2"
                sx={{
                  mr: 2,
                  fontFamily: 'montserrat',
                  fontWeight: 300,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                }}
              >
                Splitting the Bill, Made Easy
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {/* PUT IMAGE HERE <Box component={img}></Box>*/}
            </Grid>
          </Grid>
        </Box>
        {/*<Box sx={{ display: 'flex', }} flex-wrap='wrap'>
          <Box maxWidth='60%' sx={{ display: 'flex', }} flex-wrap='wrap'>
            <Typography
              variant="h2"
              sx={{
                mr: 2,
                fontFamily: 'montserrat',
                fontWeight: 300,
                letterSpacing: '.2rem',
                color: 'inherit',
              }}
            >
              Splitting the Bill, Made Easy
            </Typography>
          </Box>
          <Box maxWidth='40%' sx={{ display: 'flex', }} flex-wrap='wrap'>
            <Typography
              variant="h2"
              sx={{
                mr: 2,
                fontFamily: 'montserrat',
                fontWeight: 300,
                letterSpacing: '.2rem',
                color: 'inherit',
              }}
            >
              Splitting the Bill, Made Easy
            </Typography>
          </Box>
        </Box>*/}
      </Container>
      <SimpleGrow/>
    </div>
  );
}


export default Home;
