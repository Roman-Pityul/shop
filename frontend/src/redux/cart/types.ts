import { SaleType } from "../../components/cartItem/cartItem";

export interface ICartState {
  items: ItemState[];
  totalPrice: number;
}

export type ItemState = {
  img: string;
  price: string;
  sale: SaleType;
  description: string;
  id?: string;
  count: number;
};
