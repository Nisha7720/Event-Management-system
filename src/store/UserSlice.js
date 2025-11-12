import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    registeredUsers: [],     // store all registered users
              // store logged-in user
    bookings: [],            // user’s booked events
  },
  reducers: {
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload);
    },

    bookEvent: (state, action) => {
      state.bookings.push(action.payload);
    },
  },
});

export const { registerUser, bookEvent } = userSlice.actions;
export default userSlice.reducer;
