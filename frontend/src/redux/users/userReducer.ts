import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
  user: null,
  userId: null,
}

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login() {
      
    }
  },
  extraReducers: (builder) => {

  }
})

export default user.reducer