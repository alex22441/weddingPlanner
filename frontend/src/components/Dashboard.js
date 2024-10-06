// src/components/Dashboard.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material'; // Removed Button import
// ... other imports

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Typography variant="h4">Wedding Dashboard</Typography>
        {/* Removed unused Button */}
      </Box>
      {/* Rest of the component */}
    </Container>
  );
};

export default Dashboard;
