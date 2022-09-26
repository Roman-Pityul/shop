export interface ItemsState {
  items: Items[];
  item: Items | null;
  isLoading: boolean;
  activeItem: number | null
}

export type Items = {
  category: string;
  description: string;
  id: string;
  img: string;
  price: string;
  sale?: Sale;
  count?: string;
};

type Sale = {
  percent: string;
  price: string;
};
