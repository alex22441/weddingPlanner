// src/components/Guestbook/Guestbook.js
import React from 'react';
import AddMessage from './AddMessage';
import MessageList from './MessageList';
import { Container, Typography, Box } from '@mui/material';

const Guestbook = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Guestbook
      </Typography>
      <Box sx={{ mt: 4 }}>
        <AddMessage />
      </Box>
      <Box sx={{ mt: 4 }}>
        <MessageList />
      </Box>
    </Container>
  );
};

export default Guestbook;
