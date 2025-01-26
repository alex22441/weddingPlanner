// routes/mediaRoutes.js
const express = require('express');
const { uploadMedia, getAllMedia } = require('../controllers/mediaController');
const { auth, roleCheck } = require('../middleware/auth');

const router = express.Router();

// Upload media (protected: only guests can upload)
router.post('/upload', auth, roleCheck(['couple', 'admin']), uploadMedia);

// Get all media (public or protected based on your preference)
router.get('/', auth, getAllMedia);

module.exports = router;
