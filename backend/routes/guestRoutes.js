// routes/guestRoutes.js
const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');
const auth = require('../middleware/auth');
const { v4: uuidv4 } = require('uuid');

// Get all guests (protected: only couple/admin)
router.get('/guests', auth, guestController.getAllGuests);

// Add a new guest (protected: only couple/admin)
router.post('/guests', auth, guestController.createGuest);

// Update guest information (protected: only couple/admin)
router.put('/guests/:id', auth, guestController.updateGuest);

// Delete a guest (protected: only couple/admin)
router.delete('/guests/:id', auth, guestController.deleteGuest);

module.exports = router;
