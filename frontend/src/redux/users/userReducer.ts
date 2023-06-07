import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { getLocalStorage } from "../../helpers/localStorage";

const initialState: UserState = {
  user: getLocalStorage('user'),
  isLoading: false,
  showUserMenu: false
}

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setShowUserMenu (state, action) {
      state.showUserMenu = action.payload
    }
  },
  extraReducers: (builder) => {
    
  }
})

export const {setShowUserMenu} = user.actions

export default user.reducer


