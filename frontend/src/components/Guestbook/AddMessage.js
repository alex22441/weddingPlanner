// src/components/Guestbook/AddMessage.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import api from '../../services/api';

const AddMessage = () => {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleAddMessage = async (e) => {
    e.preventDefault();
    try {
      await api.post('/guestbook', { message });
      setSuccess('Message added successfully!');
      setMessage('');
    } catch (err) {
      setError('Failed to add message. Please try again.');
    }
  };

  return (
    <Box>
      <Typography variant="h6">Add a Message</Typography>
      {success && <Alert severity="success">{success}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleAddMessage}>
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddMessage;
