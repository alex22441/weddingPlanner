const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  venue: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    mapUrl: { type: String },
  },
  date: { type: Date, required: true },
  timeline: [
    {
      event: { type: String, required: true },
      time: { type: String, required: true },
    },
  ],
  details: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
