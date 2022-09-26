import { createSlice } from "@reduxjs/toolkit";

import { HeadState } from "./types"

const initialState: HeadState = {
  activeIcon: ''
}

const head = createSlice({
  name: 'head',
  initialState: initialState,
  reducers: {
    setActiveIcon(state, action) {
      state.activeIcon = action.payload
    },
    clearActiveIcon(state) {
      state.activeIcon = ''
    }
  }
})

export const { setActiveIcon, clearActiveIcon } = head.actions

export default head.reducer