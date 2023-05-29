import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { getLocalStorage } from "../../helpers/localStorage";

const initialState: UserState = {
  user: getLocalStorage('user'),
  isLoading: false
}

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login() {}
  },
  extraReducers: (builder) => {
    
  }
})

export default user.reducer


