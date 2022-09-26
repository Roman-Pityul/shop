import classNames from "classnames";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CartItem, CartEmpty } from "../../components";
import { ItemTypeProps } from '../../components/cartItem/cartItem'
import { clearItems } from "../../redux/cart/cartReducer";
import { RootState } from '../../redux/index'
import { clearActiveIcon, setActiveIcon } from '../../redux/head/headReducer'

import "./cart.scss";

const Cart: React.FC = () => {

  //@ts-ignore
  React.useEffect(() => {
    dispatch(setActiveIcon('cart'))
    return () => dispatch(clearActiveIcon())
  }, [])

  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((store: RootState) => store.cart);

  const handleClick = () => {
    if (totalPrice < 1000) {
      return
    } else {
      alert('Ваш заказ оформлен! Ожидайте доставку!')
    }
  }

  if (items.length <= 0) {
    return <CartEmpty />
  }

  return (
    <div className="cart_wraper">
      <div className="cart_title">
        <h1>Корзина</h1>
        {items.length > 0 && <span className="cart_count">{items.length}</span>}
      </div>
      <div className="cart_content">
        <div className="cart_items-block">
          {items && items.map((item: ItemTypeProps) => <CartItem key={item.id} {...item} />)}
        </div>
        <div className="cart_items-info">
          <div className="cart_items-info-row"><span className="cart_text">Товаров в корзине: </span><b>{items.length}</b></div>
          <div className="cart_items-info-row"><span className="cart_text">Итого: </span> <b>{totalPrice.toFixed(2)} ₽</b></div>
          {totalPrice < 1000 && <div className="cart_items-info-danger">Минимальная сумма заказа 1000 рублей</div>}
          <div onClick={handleClick} className={classNames(
            { "cart_items-info-button-on": totalPrice >= 1000 },
            { "cart_items-info-button-off": totalPrice < 1000 })
          }>Оформить заказ</div>
          <div>
            <div className="cart_button-clear" onClick={() => dispatch(clearItems())}>
              <p>X</p> очистить корзину
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Cart;
