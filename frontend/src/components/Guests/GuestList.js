// src/components/Guests/GuestList.js
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import api from '../../services/api';
import Addguest from './Addguest';

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [editingGuest, setEditingGuest] = useState(null);

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      const response = await api.get('/guests');
      setGuests(response.data);
    } catch (error) {
      console.error('Error fetching guests:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this guest?')) {
      try {
        await api.delete(`/guests/${id}`);
        fetchGuests();
      } catch (error) {
        console.error('Error deleting guest:', error);
      }
    }
  };

  const handleEdit = (guest) => {
    setEditingGuest(guest);
  };

  const handleUpdate = () => {
    setEditingGuest(null);
    fetchGuests();
  };

  return (
    <Box>
      <Typography variant="h5">Guest List</Typography>
      <List>
        {guests.map((guest) => (
          <ListItem key={guest._id} secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(guest)}>
                <Edit />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(guest._id)}>
                <Delete />
              </IconButton>
            </>
          }>
            <ListItemText primary={guest.name} secondary={guest.email} />
          </ListItem>
        ))}
      </List>
      <Addguest editingGuest={editingGuest} onUpdate={handleUpdate} />
    </Box>
  );
};

export default GuestList;
