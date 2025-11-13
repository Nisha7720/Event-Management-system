import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users));
    },
    login: (state, action) => {
      state.user = action.payload;
    },

  },
});

export const { register, login} = userSlice.actions;
export default userSlice.reducer;
