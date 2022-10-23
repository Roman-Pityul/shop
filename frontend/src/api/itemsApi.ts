import axios from "axios";

import { Items } from "../redux/items/types";
import { SERVER } from '../helpers/constants'

export const ItemsApi = {
  async fetchItems() {
    const data = await axios.get(`${SERVER}/items`);
    return data;
  },

  async fetchCategory(cat: string) {
    const data = await axios.get<Items[]>(
      `${SERVER}/products/findby/${cat}`
    );
    return data;
  },

  async fetchOneItem(id: string) {
    const data = await axios.get<Items>(`${SERVER}/products/${id}`);
    return data;
  },

  async searchItem(value: string) {
    const data = await axios.get<Items[]>(
      `${SERVER}/products/search?query=${value}`
    );
    return data;
  },
};
