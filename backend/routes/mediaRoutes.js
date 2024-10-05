// routes/mediaRoutes.js
const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');
const auth = require('../middleware/auth');

// Upload media (protected: only guests can upload)
router.post('/upload', auth, mediaController.uploadMedia);

// Get all media (public or protected based on your preference)
router.get('/media', mediaController.getAllMedia);

module.exports = router;
