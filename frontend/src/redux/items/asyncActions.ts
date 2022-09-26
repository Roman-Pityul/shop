import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsApi } from "../../api/itemsApi";
import { Items } from "./types";

export const fetchCategory = createAsyncThunk<Items[], string>(
  "items/fetchCategory",
  async (cat) => {
    const response = await ItemsApi.fetchCategory(cat);
    return response.data;
  }
);

export const fetchItem = createAsyncThunk<Items, string>(
  "items/fetchItem",
  async (id) => {
    const response = await ItemsApi.fetchOneItem(id);
    return response.data;
  }
);

export const searchItems = createAsyncThunk<Items[], string>(
  "items/searchItems",
  async (value) => {
    const response = await ItemsApi.searchItem(value);
    return response.data;
  }
);
