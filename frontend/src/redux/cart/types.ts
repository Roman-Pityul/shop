
export interface ICartState {
  items: ItemState[];
  totalPrice: number;
}

export type ItemState = {
  img: string;
  price: string;
  sale?: string;
  description: string;
  _id?: string;
  count: number;
};
