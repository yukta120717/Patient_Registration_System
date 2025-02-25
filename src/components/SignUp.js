import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material/';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match. Please re-enter your password.");
      return;
    }

    try {
      await axios.post('http://localhost:5000/signup', {
        email: formData.email,
        password: formData.password,
      });
      alert('Sign up successful! Please log in.');
      navigate('/login');
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('Sign up failed. Please try again.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        sx={{ m: 1, width: '300px' }}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        sx={{ m: 1, width: '300px' }}
      />
      <TextField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        sx={{ m: 1, width: '300px' }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ m: 1 }}>
        Sign Up
      </Button>
      <Typography variant="body2">
        Already signed up? <Link to="/login">Log in here</Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
