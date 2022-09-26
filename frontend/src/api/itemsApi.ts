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
      `${SERVER}/items?category=${cat}`
    );
    return data;
  },

  async fetchOneItem(id: string) {
    const data = await axios.get<Items>(`${SERVER}/items?id=${id}`);
    return data;
  },

  async searchItem(value: string) {
    const data = await axios.get<Items[]>(
      `${SERVER}/items?q=${value}`
    );
    return data;
  },
};
