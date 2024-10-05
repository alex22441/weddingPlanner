// src/components/Guestbook/AddMessage.js
import React, { useState, useContext } from 'react';
import API from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
import {
  TextField,
  Button,
  Alert,
  Box,
  Typography,
} from '@mui/material';

const AddMessage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!message) {
      setError('Please enter a message.');
      return;
    }

    try {
      // Assuming you have user information, else require guestId
      // For simplicity, we'll use a guestId input
      const guestId = prompt('Enter your Guest ID:');
      if (!guestId) {
        setError('Guest ID is required.');
        return;
      }

      const response = await API.post('/message', { guestId, message });
      setSuccess('Message added successfully!');
      setMessage('');
    } catch (err) {
      if (err.response && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError('Failed to add message.');
      }
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Add a Message
      </Typography>
      {success && <Alert severity="success">{success}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddMessage;
