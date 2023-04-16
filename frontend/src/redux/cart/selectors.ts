import { RootState } from "..";

const getCartState = (state: RootState) => {
  return state.cart
}

export const selectItems = (state: RootState) => {
  return getCartState(state).items
}