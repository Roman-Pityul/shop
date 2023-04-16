import { RootState } from "..";

const getCategoryState = (state: RootState) => {
  return state.categories
}

export const selectCategories = (state: RootState) => {
  return getCategoryState(state).categories
}