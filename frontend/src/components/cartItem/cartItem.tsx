import React from 'react'
import classNames from "classnames";
import { useDispatch } from 'react-redux'

import { addItemsToCart, minusItem, deleteItem } from '../../redux/cart/cartReducer'
import { caclPriceWithSale } from '../../utils/calcPrice'
import { SERVER } from '../../helpers/constants';

import "./cartitem.scss";

export type ItemTypeProps = {
  img: string
  price: string
  sale?: string
  description: string
  _id?: string
  count?: number
}

const CartItem: React.FC<ItemTypeProps> = ({ img, price, sale, description, count, _id }) => {

  const dispatch = useDispatch()

  const handlePlus = () => {
    dispatch(addItemsToCart({ _id }))
  }

  const handleMinus = () => {
    dispatch(minusItem(_id))
  }

  const handleDelete = () => {
    dispatch(deleteItem(_id))
  }

  return (
    <div className="cartitem">
      <div className="cartitem_left">
        <img src={`${SERVER}/${img}`} />
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
              <p>{caclPriceWithSale(price, sale)}</p>
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
