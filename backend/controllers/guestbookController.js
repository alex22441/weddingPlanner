// controllers/guestbookController.js
const Guestbook = require('../models/Guestbook');
const Guest = require('../models/Guest');

// Add a Message to the Guestbook
exports.addMessage = async (req, res) => {
  const { guestId, message } = req.body;

  try {
    // Validate guestId and message
    if (!guestId || !message) {
      return res.status(400).json({ msg: 'Guest ID and message are required' });
    }

    // Check if guest exists
    const guest = await Guest.findById(guestId);
    if (!guest) {
      return res.status(404).json({ msg: 'Guest not found' });
    }

    // Create new guestbook entry
    const entry = new Guestbook({
      guestId,
      message,
    });

    await entry.save();
    res.status(201).json({ msg: 'Message added successfully', entry });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get All Guestbook Messages
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Guestbook.find().populate('guestId', 'name').select('-__v').lean();
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
