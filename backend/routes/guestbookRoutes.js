// routes/guestbookRoutes.js
const express = require('express');
const router = express.Router();
const guestbookController = require('../controllers/guestbookController');
const auth = require('../middleware/auth');

// Add a message to the guestbook (can be public or require authentication)
router.post('/message', auth, guestbookController.addMessage);

// Get all guestbook messages (public)
router.get('/messages', guestbookController.getAllMessages);

module.exports = router;
