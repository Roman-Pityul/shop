import { RootState } from "..";

const getUserState = (state: RootState) => {
  return state.user
}

export const getUser = (state: RootState) => {
  return getUserState(state).user
}

export const getShowUserMenu = (state: RootState) => {
  return getUserState(state).showUserMenu
}