import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import api from '../../services/api';

const InviteForm = () => {
  const { inviteCode } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rsvpStatus: 'Pending',
    mealPreference: '',
    seatingAssignment: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/guests/submit-invite', { ...formData, inviteCode });
      setSuccess('Details submitted successfully!');
      setFormData({
        name: '',
        email: '',
        rsvpStatus: 'Pending',
        mealPreference: '',
        seatingAssignment: '',
      });
    } catch (err) {
      setError('Failed to submit details. Please try again.');
    }
  };

  return (
    <Box>
      <Typography variant="h6">Complete Your Details</Typography>
      {success && <Alert severity="success">{success}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Meal Preference"
          name="mealPreference"
          value={formData.mealPreference}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Seating Assignment"
          name="seatingAssignment"
          value={formData.seatingAssignment}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default InviteForm;