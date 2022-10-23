export interface ItemsState {
  items: Items[];
  item: Items | null;
  isLoading: boolean;
  activeItem: number | null
}

export type Items = {
  category: string;
  description: string;
  _id: string;
  img: string;
  price: string;
  sale?: string;
  count?: string;
};
