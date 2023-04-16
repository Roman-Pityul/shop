import { createSlice } from "@reduxjs/toolkit";

import { HeadState } from "./types"

const initialState: HeadState = {
  activeIcon: '',
  menuVisible: false
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
    },
    setMenuVisible(state, action) {
      state.menuVisible = action.payload
    }
  }
})

export const { setActiveIcon, clearActiveIcon, setMenuVisible } = head.actions

export default head.reducer