// index.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Adjust based on frontend location
  credentials: true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const guestRoutes = require('./routes/guestRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const guestbookRoutes = require('./routes/guestbookRoutes');

app.use('/api/users', userRoutes);
app.use('/api', eventRoutes);
app.use('/api', guestRoutes);
app.use('/api', mediaRoutes);
app.use('/api', guestbookRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to the Wedding App Backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
