// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to the Patient Registration System
      </Typography>
      <Typography variant="h6" gutterBottom>
        Please sign up or log in to register as a patient.
      </Typography>
      <Box>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="primary"
          sx={{ m: 1 }}
        >
          Sign Up
        </Button>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="secondary"
          sx={{ m: 1 }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
