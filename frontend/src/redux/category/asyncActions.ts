import { createAsyncThunk } from "@reduxjs/toolkit"
import { categoryApi } from "../../api/categoryApi"
import { Category } from "./types";

export const fetchCategories = createAsyncThunk<Category[]>(
  "category/fetchCategories",
  async () => {
    const response = await categoryApi.getCategories();
    return response.data;
  }
);