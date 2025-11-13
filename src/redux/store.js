


import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/EventSlices.js";
import userReducer from   "./slices/UserSlice.js";


const store = configureStore({
reducer: {
  event: eventReducer,
  user: userReducer,
}

})


export default store;
