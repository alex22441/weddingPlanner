// src/components/Media/MediaUpload.js
import React, { useState } from 'react';
import API from '../../services/api';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from '@mui/material';

const MediaUpload = () => {
  const [file, setFile] = useState(null);
  const [guestId, setGuestId] = useState('');
  const [type, setType] = useState('photo');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!file || !guestId) {
      setError('Please provide all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('media', file);
    formData.append('guestId', guestId);
    formData.append('type', type);

    try {
      const response = await API.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Media uploaded successfully!');
    } catch (err) {
      if (err.response && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError('Failed to upload media.');
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Upload Media
      </Typography>
      {success && <Alert severity="success">{success}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Guest ID"
          value={guestId}
          onChange={(e) => setGuestId(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          type="file"
          onChange={handleFileChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Type"
          name="type"
          select
          SelectProps={{
            native: true,
          }}
          value={type}
          onChange={(e) => setType(e.target.value)}
          margin="normal"
          required
        >
          <option value="photo">Photo</option>
          <option value="video">Video</option>
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Upload
        </Button>
      </Box>
    </Container>
  );
};

export default MediaUpload;
