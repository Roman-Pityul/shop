import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./items/itemsReducer";
import cartReducer from "./cart/cartReducer";
import headReducer from "./head/headReducer"
import categoriesReducer from './category/categoryReducer'
import { useDispatch } from "react-redux";
import usersReducer from "./users/userReducer"

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  head: headReducer,
  user: usersReducer,
  categories: categoriesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
  reducer: rootReducer,
});
