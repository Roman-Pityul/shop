import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCategory, fetchItem, searchItems } from "./asyncActions";
import { Items, ItemsState } from "./types";

const initialState: ItemsState = {
  items: [],
  item: null,
  isLoading: false,
  activeItem: 1,
};

const items = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    addItemsToState(state, action: PayloadAction<Items[]>) {
      state.items = action.payload;
      state.isLoading = false;
    },
    addItemToState(state, action) {
      state.item = action.payload;
      state.isLoading = false;
    },
    deleteItemsFromState(state) {
      state.items = [];
    },
    setActiveItem(state, action) {
      state.activeItem = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchItem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });

    builder.addCase(searchItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addItemsToState, addItemToState, deleteItemsFromState, setActiveItem } =
  items.actions;

export default items.reducer;
