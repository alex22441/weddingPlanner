// models/Guest.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // For generating RSVP codes

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  rsvpStatus: { type: String, enum: ['Pending', 'Accepted', 'Declined'], default: 'Pending' },
  mealPreference: { type: String, enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Other'] },
  seatingAssignment: { type: String }, // Could be a table number or seat number
  rsvpCode: { type: String, unique: true, default: uuidv4 }, // For guests to RSVP via code
}, { timestamps: true });

module.exports = mongoose.model('Guest', guestSchema);
