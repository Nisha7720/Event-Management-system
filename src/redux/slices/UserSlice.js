import { createSlice } from "@reduxjs/toolkit";

//const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  //user: savedUser || null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(action.payload);
      state.user = action.payload;
      localStorage.setItem("users", JSON.stringify(users));
    },

    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
