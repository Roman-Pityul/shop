import { RootState } from "..";

const getUserState = (state: RootState) => {
  return state.user
}

export const getUserId = (state: RootState) => {
  return getUserState(state).userId
}