// src/components/Guests/Addguest.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import api from '../../services/api';

const Addguest = ({ editingGuest, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (editingGuest) {
      setFormData({
        name: editingGuest.name,
        email: editingGuest.email,
        phone: editingGuest.phone || '',
      });
    } else {
      setFormData({ name: '', email: '', phone: '' });
    }
  }, [editingGuest]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingGuest) {
        await api.put(`/guests/${editingGuest._id}`, formData);
        onUpdate();
      } else {
        await api.post('/guests', formData);
        setFormData({ name: '', email: '', phone: '' });
        onUpdate();
      }
    } catch (error) {
      console.error('Error adding/updating guest:', error);
    }
  };

  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          {editingGuest ? 'Update Guest' : 'Add Guest'}
        </Button>
      </form>
    </Box>
  );
};

export default Addguest;