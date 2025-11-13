import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 events: JSON.parse(localStorage.getItem("events")) || [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);       //adding the value
      localStorage.setItem("events", JSON.stringify(state.events));
    },
    deleteEvent: (state, action) => {             //if we want to delete the delete
      state.events = state.events.filter((e) => e.id !== action.payload);
      localStorage.setItem("events", JSON.stringify(state.events));
    },
  },
});

export const { addEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
