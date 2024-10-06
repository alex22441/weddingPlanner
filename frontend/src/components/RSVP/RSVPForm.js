// src/components/RSVP/RSVPForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import api from '../../services/api';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    guestId: '',
    attending: true,
    message: '',
  });

  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      const response = await api.get('/guests');
      setGuests(response.data);
    } catch (error) {
      console.error('Error fetching guests:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRSVP = async (e) => {
    e.preventDefault();
    try {
      await api.post('/rsvp', formData);
      alert('RSVP successful!');
      setFormData({ guestId: '', attending: true, message: '' });
    } catch (error) {
      console.error('RSVP failed:', error.response.data);
      alert('RSVP failed. Please try again.');
    }
  };

  return (
    <Box>
      <Typography variant="h5">RSVP</Typography>
      <form onSubmit={handleRSVP}>
        <TextField
          select
          label="Guest"
          name="guestId"
          value={formData.guestId}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          required
          fullWidth
          margin="normal"
        >
          <option value="" disabled>Select Guest</option>
          {guests.map((guest) => (
            <option key={guest._id} value={guest._id}>
              {guest.name} ({guest.email})
            </option>
          ))}
        </TextField>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.attending}
              onChange={handleChange}
              name="attending"
              color="primary"
            />
          }
          label="Attending"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit RSVP
        </Button>
      </form>
    </Box>
  );
};

export default RSVPForm;
