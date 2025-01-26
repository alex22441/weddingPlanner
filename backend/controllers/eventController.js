const Event = require('../models/Event');

// Create or Update Event Details
exports.createOrUpdateEvent = async (req, res) => {
  const { venue, date, timeline, details } = req.body;

  // Validate required fields
  if (!venue || !date || !timeline || !details) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    // Check if an event already exists
    let event = await Event.findOne();

    if (event) {
      // Update existing event
      event.venue = venue || event.venue;
      event.date = date || event.date;
      event.timeline = timeline || event.timeline;
      event.details = details || event.details;

      await event.save();
      return res.json({ msg: 'Event updated successfully', event });
    } else {
      // Create new event
      event = new Event({
        venue,
        date,
        timeline,
        details,
      });

      await event.save();
      return res.status(201).json({ msg: 'Event created successfully', event });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get Event Details
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findOne();

    if (!event) {
      return res.status(404).json({ msg: 'No event found' });
    }

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};