// src/components/Event/EventDetails.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import api from '../../services/api';

const EventDetails = () => {
  const [event, setEvent] = useState({
    venue: '',
    date: '',
    time: '',
    description: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchEventDetails();
  }, []);

  const fetchEventDetails = async () => {
    try {
      const response = await api.get('/event');
      setEvent(response.data);
    } catch (error) {
      console.error('Error fetching event details:', error);
    }
  };

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put('/event', event);
      alert('Event details updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating event details:', error);
      alert('Failed to update event details. Please try again.');
    }
  };

  return (
    <Box>
      <Typography variant="h5">Event Details</Typography>
      {!isEditing ? (
        <Box>
          <Typography variant="body1"><strong>Venue:</strong> {event.venue}</Typography>
          <Typography variant="body1"><strong>Date:</strong> {event.date}</Typography>
          <Typography variant="body1"><strong>Time:</strong> {event.time}</Typography>
          <Typography variant="body1"><strong>Description:</strong> {event.description}</Typography>
          <Button variant="contained" color="primary" onClick={() => setIsEditing(true)} sx={{ mt: 2 }}>
            Edit Event Details
          </Button>
        </Box>
      ) : (
        <form onSubmit={handleUpdate}>
          <TextField
            label="Venue"
            name="venue"
            value={event.venue}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            name="date"
            type="date"
            value={event.date}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Time"
            name="time"
            type="time"
            value={event.time}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Description"
            name="description"
            value={event.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Save Changes
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => setIsEditing(false)} sx={{ mt: 2, ml: 2 }}>
            Cancel
          </Button>
        </form>
      )}
    </Box>
  );
};

export default EventDetails;
