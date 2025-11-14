


import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/EventSlices.js";
import userReducer from   "./slices/UserSlice.js";
import bookingReducer from "./slices/BookinSlice.js";


const store = configureStore({
reducer: {
  event: eventReducer,
  user: userReducer,
  booking: bookingReducer,
}

})


export default store;
