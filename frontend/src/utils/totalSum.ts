import { ICartState } from "../redux/cart/types";

export const totalSum = (state: ICartState) => {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return (sum += Number(obj.sale ? ((Number(obj.price) - (Number(obj.price) / 100 * Number(obj.sale))).toFixed(2)) : Number(obj.price)) * obj.count);
  }, 0);
};
