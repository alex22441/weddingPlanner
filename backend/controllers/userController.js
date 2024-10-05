// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid'); // For generating RSVP codes

// Register User (Couple/Admin)
exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Validate role
    if (!['couple', 'admin'].includes(role)) {
      return res.status(400).json({ msg: 'Invalid role specified' });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Generate unique RSVP code for guests (if role is guest in future)
    const rsvpCode = role === 'guest' ? uuidv4() : undefined;

    // Create new user
    user = new User({
      name,
      email,
      passwordHash,
      role,
      rsvpCode,
    });

    await user.save();

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    // Sign JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    // Sign JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// RSVP Guest
exports.rsvpGuest = async (req, res) => {
  const { rsvpCode, rsvpStatus, mealPreference, seatingAssignment } = req.body;

  try {
    // Find guest by rsvpCode
    const guest = await User.findOne({ rsvpCode, role: 'guest' });
    if (!guest) {
      return res.status(400).json({ msg: 'Invalid RSVP Code' });
    }

    // Update RSVP status and preferences
    guest.rsvpStatus = rsvpStatus || guest.rsvpStatus;
    guest.mealPreference = mealPreference || guest.mealPreference;
    guest.seatingAssignment = seatingAssignment || guest.seatingAssignment;

    await guest.save();

    res.json({ msg: 'RSVP updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
