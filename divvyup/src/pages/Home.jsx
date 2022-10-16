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
import Slide from '@mui/material/Slide';
import { motion } from "framer-motion";
import MyImage from './iphone.png';
import './upload.css'
//import IPhone from './iphone.png';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  return(
    <div class="mainContainer">
      <Container maxWidth='xl' height='75%'>
        <Box sx={{ flexGrow: 1, }}>
          <Grid container spacing={2}>
            <Grid item md={7} xs={12}>
              <Typography
                variant="h2"
                sx={{
                  mr: 2,
                  mt: 10,
                  fontFamily: 'montserrat',
                  fontWeight: 300,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                }}
              >
                Splitting the Bill, Made Easy
              </Typography>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    mr: 2,
                    fontFamily: 'montserrat',
                    fontWeight: 300,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                  }}
                >
                  Going out to eat with friends is always a great time, but having to figure out at the end who will pay and how much each person owes for what always kills the mood. We wanted to figure out a way to make this process easier, so we came up with the idea of DivvyUp.
                </Typography>
              </Box>
            </Grid>
             <Grid item md={5} xs={12}>
               <motion.div
                  className="intro-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.2 }}
                  height="100%"
               >
                 <Box>
                   <img class="upload" src={MyImage} alt="upload"/>
                 </Box>
                </motion.div>
             </Grid>
           </Grid>
         </Box>
      </Container>
    </div>
  );
}

export default Home;
