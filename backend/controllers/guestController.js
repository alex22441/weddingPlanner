// controllers/guestController.js
const Guest = require('../models/Guest');

// Get All Guests (Couple/Admin)
exports.getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find().select('-__v').lean();
    res.json(guests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update Guest Information (Couple/Admin)
exports.updateGuest = async (req, res) => {
  const { id } = req.params;
  const { name, email, rsvpStatus, mealPreference, seatingAssignment } = req.body;

  try {
    // Find guest by ID
    let guest = await Guest.findById(id);
    if (!guest) {
      return res.status(404).json({ msg: 'Guest not found' });
    }

    // Update fields
    guest.name = name || guest.name;
    guest.email = email || guest.email;
    guest.rsvpStatus = rsvpStatus || guest.rsvpStatus;
    guest.mealPreference = mealPreference || guest.mealPreference;
    guest.seatingAssignment = seatingAssignment || guest.seatingAssignment;

    await guest.save();
    res.json({ msg: 'Guest updated successfully', guest });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Guest not found' });
    }
    res.status(500).send('Server Error');
  }
};

// Create New Guest (Couple/Admin)
exports.createGuest = async (req, res) => {
  const { name, email, rsvpStatus, mealPreference, seatingAssignment } = req.body;

  try {
    // Check if guest already exists
    let guest = await Guest.findOne({ email });
    if (guest) {
      return res.status(400).json({ msg: 'Guest already exists' });
    }

    // Create new guest
    guest = new Guest({
      name,
      email,
      rsvpStatus,
      mealPreference,
      seatingAssignment,
      rsvpCode: uuidv4(), // Generate a unique RSVP code
    });

    await guest.save();
    res.status(201).json({ msg: 'Guest created successfully', guest });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
// In guestController.js

exports.deleteGuest = async (req, res) => {
  const { id } = req.params;

  try {
    const guest = await Guest.findById(id);
    if (!guest) {
      return res.status(404).json({ msg: 'Guest not found' });
    }

    await guest.deleteOne();  // Use deleteOne() instead of remove()
    res.json({ msg: 'Guest removed successfully' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Guest not found' });
    }
    res.status(500).send('Server Error');
  }
};