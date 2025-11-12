import { createSlice } from '@reduxjs/toolkit';

const EventSlice = createSlice({
  name: 'user',
  initialState: {
    registeredUsers: [],     // store all registered users
    currentUser: null,       // store logged-in user
    bookings: [],            // user’s booked events
  },
  reducers: {
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload);
    },
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      state.bookings = [];
    },
    bookEvent: (state, action) => {
      state.bookings.push(action.payload);
    },
  },
});

export const { registerUser, login, logout, bookEvent } = EventSlice.actions;
export default EventSlice.reducer;
