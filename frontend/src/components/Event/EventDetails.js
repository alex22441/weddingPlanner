// src/components/Event/EventDetails.js
import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Grid,
  Paper,
} from '@mui/material';

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await API.get('/event');
        setEvent(response.data);
      } catch (err) {
        setError('Failed to fetch event details.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        {event.venue.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {event.venue.address}
      </Typography>
      {event.venue.mapUrl && (
        <Box sx={{ my: 2 }}>
          <iframe
            src={event.venue.mapUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Venue Map"
          ></iframe>
        </Box>
      )}
      <Typography variant="h5" gutterBottom>
        Event Date: {new Date(event.date).toLocaleString()}
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Timeline
        </Typography>
        <Grid container spacing={2}>
          {event.timeline.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">{item.event}</Typography>
                <Typography variant="body1">{item.time}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      {event.details && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Details
          </Typography>
          <Typography variant="body1">{event.details}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default EventDetails;
