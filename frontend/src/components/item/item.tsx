import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addItemsToCart } from "../../redux/cart/cartReducer";
import { ItemTypeProps } from '../cartItem/cartItem';
import { } from '../../redux/items/itemsReducer'

import "./item.scss";

const Item: React.FC<ItemTypeProps> = ({ img, price, sale, description, id }) => {
  const dispatch = useDispatch();

  const item = {
    img,
    price,
    sale,
    description,
    id,
    count: 0
  };

  const addItem = () => {
    dispatch(addItemsToCart(item));
  };

  return (
    <div className="item_wraper">
      <div className="item">
        <div className="item__image-block">
          <Link to={`/item/${id}`}>
            <img alt="img" src={img} />
          </Link>
          {sale && <div className="item__sale">-{sale.percent}%</div>}
        </div>
        <div className="item__price-block">
          {sale && (
            <div className="item__price-sale">
              <p>
                {sale.price}
                <span> ₽</span>
              </p>
              <span>С картой</span>
            </div>
          )}
          <div className="item__price-nosale">
            <p>
              {price}
              <span> ₽</span>
            </p>
            <span>Обычная</span>
          </div>
        </div>
        <div className="item__text-block">
          <Link to={`/item/${id}`}>
            <p>{description}</p>
          </Link>
        </div>
        <button className="item__button" onClick={addItem}>
          В корзину
        </button>
      </div>
    </div>
  );
};

export default Item;
