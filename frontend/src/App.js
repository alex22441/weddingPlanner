// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EventDetails from './components/Event/EventDetails';
import GuestList from './components/Guests/GuestList';
import MediaGallery from './components/Media/MediaGallery';
import Guestbook from './components/Guestbook/Guestbook';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<EventDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/guests"
            element={
              <PrivateRoute>
                <GuestList />
              </PrivateRoute>
            }
          />
          <Route
            path="/media"
            element={
              <PrivateRoute>
                <MediaGallery />
              </PrivateRoute>
            }
          />
          <Route
            path="/guestbook"
            element={
              <PrivateRoute>
                <Guestbook />
              </PrivateRoute>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
