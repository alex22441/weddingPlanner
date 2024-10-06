// src/store/index.js
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import authReducer from './authSlice'; // Adjusted path for authReducer
import guestReducer from './guestSlice'; // Adjusted path for guestReducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    guests: guestReducer, // Add guestReducer
    // Add other reducers here
  },
});

export default store;
