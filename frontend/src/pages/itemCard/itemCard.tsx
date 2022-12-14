import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import shoppingCart from "../../img/shopping-cart.svg";
import atom from "../../img/atom.svg";
import bell from "../../img/bell-off.svg";
import { fetchItem } from "../../redux/items/asyncActions";
import { addItemsToCart } from '../../redux/cart/cartReducer'
import { RootState } from "../../redux/index";
import { ItemTypeProps } from "../../components/cartItem/cartItem";
import { useAppDispatch } from "../../redux/index";

import "./itemCard.scss";

const ItemCard: React.FC = () => {
  const dispatch = useAppDispatch();

  const { isLoading, item } = useSelector((store: RootState) => store.items);

  const { id } = useParams<string>();

  React.useEffect(() => {
    // @ts-ignore
    dispatch(fetchItem(id));
  }, [dispatch, id]);

  const handleClickAdd = () => {
    // @ts-ignore
    dispatch(addItemsToCart(item))
  }

  return (
    <>
      {isLoading ? (
        <h1>Загрузка....</h1>
      ) : (
        <>
          {/* @ts-ignore */}
          {item &&
            <div key={item._id} className="itemcard">
              <h2 className="itemcard_title">{item.description}</h2>
              <div className="itemcard__content">
                <div className="itemcard__left">
                  <img src={item.img} alt="item_image" />
                </div>
                <div className="itemcard__right">
                  <div className="itemcard__price">
                    <div className="itemcard__price-nosale">
                      <p>
                        {item.price}
                        <span>₽</span>
                      </p>
                      <span>Обычная цена</span>
                    </div>
                    {/* @ts-ignore */}
                    {item.sale && (
                      <div className="itemcard__price-sale">
                        <p>
                          {(Number(item.price) / 100 * Number(item.sale)).toFixed(2)}
                          <span>₽</span>
                        </p>
                        <span>С картой Северяночки</span>
                      </div>
                    )}
                  </div>
                  <div onClick={handleClickAdd} className="itemcard__button">
                    <p>В корзину</p>
                    <img src={shoppingCart} alt="shopCart" />
                  </div>
                  <div className="itemcard__underbutton">
                    <p className="itemcard__bonus">
                      <img src={atom} alt="atom" />
                      Вы получаете{" "}
                      <span style={{ fontWeight: "bold" }}>10 бонусов</span>
                    </p>
                    <p className="itemcard__bell">
                      <img src={bell} alt="bell" />
                      Уведомить о снижении цены
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        </>
      )}
    </>
  );
};

export default ItemCard;
