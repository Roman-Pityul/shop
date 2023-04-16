import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { addItemsToCart } from "../../redux/cart/cartReducer"
import { caclPriceWithSale } from "../../utils/calcPrice"

import "./item.scss"

type ItemProps = {
  img: string
  price: string
  sale?: string
  description: string
  _id: string
}

const Item: React.FC<ItemProps> = ({ img, price, sale, description, _id }) => {
  const dispatch = useDispatch();

  const item = {
    img,
    price,
    sale,
    description,
    _id,
    count: 0
  };

  const addItem = () => {
    dispatch(addItemsToCart(item));
  };

  return (
    <div className="item_wraper">
      <div className="item">
        <div className="item__image-block">
          <Link to={`/item/${_id}`}>
            <img alt="img" src={img} />
          </Link>
          {sale && <div className="item__sale">-{sale}%</div>}
        </div>
        <div className="item__price-block">
          {sale && (
            <div className="item__price-sale">
              <p>
                {caclPriceWithSale(item.price, item.sale)}
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
          <Link to={`/item/${_id}`}>
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
