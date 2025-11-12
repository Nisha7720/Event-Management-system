import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './EventSlice.js';
import userReducer from './UserSlice.js';

 const store = configureStore({
  reducer: {
    events: eventReducer,
    user: userReducer,
  },
});
export default store;
