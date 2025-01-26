// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Guestbook from './components/Guestbook/Guestbook';
import GuestList from './components/Guests/GuestList';
import GenerateInviteLink from './components/Guests/GenerateInviteLink';
import InviteForm from './components/Guests/InviteForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/guests" element={<GuestList />} />
        <Route path="/generate-invite" element={<GenerateInviteLink />} />
        <Route path="/invite/:inviteCode" element={<InviteForm />} />
      </Routes>
    </Router>
  );
};

export default App;
