import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
      //  localStorage.setItem("Bookings", JSON.stringify(state.bookings));
    },

    chancelBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload.id
      );
      //  localStorage.setItem("Bookings", JSON.stringify(state.bookings));
    },
  },
});

export const { addBooking, chancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
