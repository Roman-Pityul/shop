import { RootState } from "..";

const getHeadState = (state: RootState) => {
  return state.head
}

export const selectActiveIcon = (state: RootState) => {
  return getHeadState(state).activeIcon
}

export const selectMenuVisible = (state: RootState) => {
  return getHeadState(state).menuVisible
}