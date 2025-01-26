// routes/guestbookRoutes.js
const express = require('express');
const { addMessage, getAllMessages } = require('../controllers/guestbookController');
const { auth, roleCheck } = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, roleCheck(['guest']), addMessage);
router.get('/', auth, getAllMessages);

module.exports = router;
