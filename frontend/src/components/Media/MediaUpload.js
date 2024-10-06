// src/components/Media/MediaUpload.js
import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, LinearProgress } from '@mui/material';
import api from '../../services/api';

const MediaUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploading(true);
      const response = await api.post('/media/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        },
      });
      alert('File uploaded successfully!');
      setFile(null);
      setProgress(0);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file. Please try again.');
      setProgress(0);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h5">Upload Media</Typography>
      <form onSubmit={handleUpload}>
        <input
          accept="image/*,video/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span" sx={{ mt: 2 }}>
            Choose File
          </Button>
        </label>
        {file && <Typography variant="body1" sx={{ mt: 1 }}>{file.name}</Typography>}
        {uploading && <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />}
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} disabled={!file || uploading}>
          Upload
        </Button>
      </form>
    </Box>
  );
};

export default MediaUpload;
