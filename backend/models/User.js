// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: function() { return this.role !== 'guest'; } },
  role: { type: String, enum: ['couple', 'admin', 'guest'], required: true },
  rsvpCode: { type: String, unique: true, sparse: true }, // Only for guests
  rsvpStatus: { type: String, enum: ['Pending', 'Accepted', 'Declined'], default: 'Pending' }, // For guests
  mealPreference: { type: String, enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Other'] }, // For guests
  seatingAssignment: { type: String }, // For guests
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
