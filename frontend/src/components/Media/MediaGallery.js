// src/components/Media/MediaGallery.js
import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import api from '../../services/api';

const MediaGallery = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await api.get('/media');
      setMedia(response.data);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this media?')) {
      try {
        await api.delete(`/media/${id}`);
        fetchMedia();
      } catch (error) {
        console.error('Error deleting media:', error);
      }
    }
  };

  return (
    <Box>
      <Typography variant="h5">Media Gallery</Typography>
      <Grid container spacing={2} mt={2}>
        {media.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
            <Card>
              {item.type.startsWith('image') ? (
                <CardMedia
                  component="img"
                  height="140"
                  image={item.url}
                  alt={item.name}
                />
              ) : (
                <CardMedia
                  component="video"
                  height="140"
                  controls
                >
                  <source src={item.url} type={item.type} />
                  Your browser does not support the video tag.
                </CardMedia>
              )}
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.name}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="delete" onClick={() => handleDelete(item._id)}>
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MediaGallery;
