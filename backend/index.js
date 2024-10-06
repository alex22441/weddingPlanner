const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

// Import all routes
const userRoutes = require('./routes/userRoutes');
const guestRoutes = require('./routes/guestRoutes');
const eventRoutes = require('./routes/eventRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const guestbookRoutes = require('./routes/guestbookRoutes');

// Middleware to parse JSON
app.use(express.json());

// Use CORS middleware
app.use(cors());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/weddingApp';
mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process if connection fails
  });

// User Routes
app.use('/api/users', userRoutes);

// Guest Routes
app.use('/api/guests', guestRoutes);

// Event Routes (assuming eventRoutes exist)
app.use('/api/events', eventRoutes);

// Media Routes (assuming mediaRoutes exist)
app.use('/api', mediaRoutes);

// Guestbook Routes (assuming guestbookRoutes exist)
app.use('/api/guestbook', guestbookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
