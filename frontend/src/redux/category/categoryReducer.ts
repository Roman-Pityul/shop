import { createSlice } from "@reduxjs/toolkit"
import { fetchCategories } from "./asyncActions"
import { ICategoryState } from "./types"

const initialState: ICategoryState = {
  categories: []
}

const category = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    getCategories(state, action) {
      state.categories = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    })
  }
})

export const { getCategories } = category.actions

export default category.reducer