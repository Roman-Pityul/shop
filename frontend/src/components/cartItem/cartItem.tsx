import React from 'react'
import classNames from "classnames";
import { useDispatch } from 'react-redux'

import { addItemsToCart, minusItem, deleteItem } from '../../redux/cart/cartReducer'

import "./cartitem.scss";

export type ItemTypeProps = {
  img: string
  price: string
  sale: SaleType | null
  description: string
  id?: string
  count?: number
}

export type SaleType = {
  price: string
  percent: string
}

const CartItem: React.FC<ItemTypeProps> = ({ img, price, sale, description, count, id }) => {
  const dispatch = useDispatch()

  const handlePlus = () => {
    dispatch(addItemsToCart({ id }))
  }

  const handleMinus = () => {
    dispatch(minusItem(id))
  }

  const handleDelete = () => {
    dispatch(deleteItem(id))
  }

  return (
    <div className="cartitem">
      <div className="cartitem_left">
        <img src={img} />
        <div className="cartitem_info">
          <div className="cartitem_item-name">{description}</div>
          <div className="cartitem_item-price">
            <p>
              <b>{price}</b>
            </p>
            <p>
              <b>₽</b>
            </p>
            <p>за шт.</p>
          </div>
        </div>
      </div>
      <div className="cartitem_right">
        <div className="cartitem_buttons">
          <button onClick={handleMinus}>-</button>
          <p className="cartitem_count">{count}</p>
          <button onClick={handlePlus}>+</button>
        </div>
        <div className="cartitem_price">
          {sale && (
            <div className="cartitem_price-sale">
              <p>{sale.price}</p>
              <p>₽</p>
            </div>
          )}

          <div className="cartitem_price-nosale">
            <p
              className={classNames({
                "cartitem_price-nosale-through": sale,
              })}
            >
              {price}
            </p>
            <p>₽</p>
          </div>
        </div>
      </div>
      <div onClick={handleDelete} className='cartitem_delete'>x</div>
    </div>
  );
};

export default CartItem;
