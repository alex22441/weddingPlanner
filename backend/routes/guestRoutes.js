// routes/guestRoutes.js
const express = require('express');
const { getAllGuests, updateGuest, createGuest, deleteGuest, generateInviteLink, submitInviteForm } = require('../controllers/guestController');
const { auth, roleCheck } = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, roleCheck(['couple', 'admin']), getAllGuests);
router.post('/', auth, roleCheck(['couple', 'admin']), createGuest);
router.put('/:id', auth, roleCheck(['couple', 'admin']), updateGuest);
router.delete('/:id', auth, roleCheck(['couple', 'admin']), deleteGuest);
router.post('/generate-invite', auth, roleCheck(['admin']), generateInviteLink); // New route for generating invite link
router.post('/submit-invite', submitInviteForm); // New route for submitting invite form

module.exports = router;

