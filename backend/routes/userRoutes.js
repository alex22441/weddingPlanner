// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Register a new user (couple or admin)
router.post('/register', userController.registerUser);

// Login user
router.post('/login', userController.loginUser);

// Guest RSVP via code (no authentication required)
router.post('/rsvp', userController.rsvpGuest);

module.exports = router;
