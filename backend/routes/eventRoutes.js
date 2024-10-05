// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const auth = require('../middleware/auth');

// Create or update event details (protected: only couple/admin)
router.post('/event', auth, eventController.createOrUpdateEvent);

// Get event details (public or protected based on your preference)
router.get('/event', eventController.getEvent);

module.exports = router;
