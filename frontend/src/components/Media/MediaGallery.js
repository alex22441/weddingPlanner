// src/components/Media/MediaGallery.js
import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  Alert,
} from '@mui/material';

const MediaGallery = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await API.get('/media');
        setMediaItems(response.data);
      } catch (err) {
        setError('Failed to fetch media.');
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Media Gallery
      </Typography>
      <Grid container spacing={2}>
        {mediaItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card>
              {item.type === 'photo' ? (
                <CardMedia
                  component="img"
                  height="200"
                  image={`http://localhost:5000/${item.url}`} // Adjust URL as per backend setup
                  alt="Guest Media"
                />
              ) : (
                <CardMedia
                  component="video"
                  height="200"
                  controls
                  src={`http://localhost:5000/${item.url}`} // Adjust URL as per backend setup
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MediaGallery;
