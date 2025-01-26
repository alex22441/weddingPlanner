const express = require('express');
const { createOrUpdateEvent, getEvent } = require('../controllers/eventController');
const { auth, roleCheck } = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, roleCheck(['couple', 'admin']), createOrUpdateEvent);
router.get('/', auth, getEvent);

module.exports = router;