// routes/guestRoutes.js
const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');
const auth = require('../middleware/auth');

// Get all guests (protected: only couple/admin)
router.get('/', auth, guestController.getAllGuests);

// Add a new guest (protected: only couple/admin)
router.post('/', auth, guestController.createGuest);

// Update guest information (protected: only couple/admin)
router.put('/:id', auth, guestController.updateGuest);

// Delete a guest (protected: only couple/admin)
router.delete('/:id', auth, guestController.deleteGuest);

module.exports = router;

