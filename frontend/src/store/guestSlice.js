// src/guestSlice.js
import { createSlice } from '@reduxjs/toolkit';

const guestSlice = createSlice({
  name: 'guests',
  initialState: [],
  reducers: {
    addGuest(state, action) {
      state.push(action.payload);
    },
    removeGuest(state, action) {
      return state.filter(guest => guest.id !== action.payload.id);
    },
  },
});

export const { addGuest, removeGuest } = guestSlice.actions;
export default guestSlice.reducer;
