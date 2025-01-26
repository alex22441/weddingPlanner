import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Wedding App
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1">
          This is the home page. You can navigate to different sections using the menu.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;