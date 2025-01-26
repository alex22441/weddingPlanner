// backend/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, refreshToken } = require('../controllers/userController');
const { auth, roleCheck } = require('../middleware/auth');

const router = express.Router();

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Refresh Token Route
router.post('/refresh-token', refreshToken);

// Protect routes with auth middleware
router.get('/profile', auth, (req, res) => {
  res.json({ message: 'Profile data', user: req.user });
});

// Role-based access control
router.get('/admin', auth, roleCheck(['admin']), (req, res) => {
  res.json({ message: 'Admin data' });
});

module.exports = router;
