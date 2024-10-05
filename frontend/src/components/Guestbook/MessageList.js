// src/components/Guestbook/MessageList.js
import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import {
  Typography,
  Box,
  CircularProgress,
  Card,
  CardContent,
  Grid,
  Alert,
} from '@mui/material';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await API.get('/messages');
        setMessages(response.data);
      } catch (err) {
        setError('Failed to fetch messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 4 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Messages
      </Typography>
      <Grid container spacing={2}>
        {messages.map((msg) => (
          <Grid item xs={12} key={msg._id}>
            <Card>
              <CardContent>
                <Typography variant="body1">{msg.message}</Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                  - {msg.guestId.name} on {new Date(msg.timestamp).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MessageList;
