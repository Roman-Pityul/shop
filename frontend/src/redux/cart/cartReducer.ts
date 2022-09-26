import { createSlice } from "@reduxjs/toolkit";
import { totalSum } from "../../utils/totalSum";
import { ICartState } from "./types";

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
};

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemsToCart(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
        totalSum(state);
      } else {
        state.items.push({ ...action.payload, count: 1 });
        totalSum(state);
      }
    },

    addItemFromLS(state, action) {
      state.items = action.payload;
      totalSum(state);
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count === 1) {
        return;
      } else {
        findItem && findItem.count--;
        totalSum(state);
      }
    },

    deleteItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      totalSum(state);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemsToCart,
  minusItem,
  clearItems,
  deleteItem,
  addItemFromLS,
} = cart.actions;
export default cart.reducer;
