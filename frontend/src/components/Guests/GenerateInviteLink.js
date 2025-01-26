import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Alert } from '@mui/material';
import api from '../../services/api';

const GenerateInviteLink = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');

  const handleGenerateInvite = async () => {
    try {
      const response = await api.post('/guests/generate-invite');
      setInviteCode(response.data.inviteCode);
    } catch (err) {
      setError('Failed to generate invite link.');
    }
  };

  return (
    <Box>
      <Typography variant="h6">Generate Invite Link</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Button variant="contained" color="primary" onClick={handleGenerateInvite}>
        Generate Invite Link
      </Button>
      {inviteCode && (
        <Box mt={2}>
          <Typography variant="body1">Invite Link:</Typography>
          <TextField
            fullWidth
            value={`${window.location.origin}/invite/${inviteCode}`}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default GenerateInviteLink;