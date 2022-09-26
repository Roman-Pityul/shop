import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import logo from "../../img/head/logo.png";
import menu from "../../img/head/menu.png";
import avatar from "../../img/head/avatar.png";
import button from "../../img/head/button.png";
import { Search } from "..";
import { Menu } from "..";
import { RootState } from '../../redux/index'
import { addItemFromLS } from "../../redux/cart/cartReducer";
import { setActiveIcon } from '../../redux/head/headReducer'
import { Orders } from '../../img/head/orders'
import { Favourites } from '../../img/head/favourites'
import { Cart } from '../../img/head/cart'
import { clearActiveIcon } from '../../redux/head/headReducer'

import "./head.scss";

const Head = () => {
  const isMount = React.useRef(false);
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const { activeIcon } = useSelector((state: RootState) => state.head)
  const [visible, setVisible] = React.useState(false);

  const menuItems = [
    { name: "Молоко, сыр, яйцо", path: "/items/milk-cheese-egg" },
    { name: "Хлеб", path: "/items/bread" },
    { name: "Фрукты и овощи", path: "/items/fruits-vegatables" },
    { name: "Замороженные продукты", path: "/items/frozen-foods" },
    { name: "Напитки", path: "/items/drinks" },
    { name: "Кондитерские изделия", path: "/items/confectionery-products" },
    { name: "Чай, кофе", path: "/items/tea-coffee" },
    { name: "Бакалея", path: "/items/grocery" },
    { name: "Здоровое питание", path: "/items/healthy-eating" },
    { name: "Зоотовары", path: "/items/pet-supplies" },
    { name: "Непродовольственные товары", path: "/items/non-food-products" },
    { name: "Детское питание", path: "/items/baby-food" },
    { name: "Мясо, птица, колбаса", path: "/items/meat-poultry-sausage" },
  ];

  React.useEffect(() => {
    if (isMount.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("items", json);
    } else {
      const data = localStorage.getItem('items')
      if (data) {
        dispatch(addItemFromLS(JSON.parse(data)));
      }
    }
    isMount.current = true;
  }, [items])

  return (
    <>
      <div className="head">
        <div className="head__container">
          <Link to="/">
            <img src={logo} alt="Северяночка" className="head__logo" />
          </Link>
          <div className="head__catalog" onClick={() => setVisible(!visible)}>
            <img
              className={classNames({ head_reverse: visible })}
              src={menu}
              alt="menu"
            />
            <span>Каталог</span>
          </div>

          <Search />

          <Link to='favourites' className="head_link">
            <div className="head__buttons">
              <Favourites bg={activeIcon == 'favourites' ? '#FF6633' : '#414141'} />
              <span className={activeIcon == 'favourites' ? 'active' : 'noactive'}>Избранное</span>
            </div>
          </Link>
          <Link to='orders' className="head_link">
            <div className="head__buttons">
              <Orders bg={activeIcon == 'odrers' ? '#FF6633' : '#414141'} />
              <span className={activeIcon == 'odrers' ? 'active' : 'noactive'}>Заказы</span>
            </div>
          </Link>
          <Link to="/cart" className="head_link">
            <div className="head__buttons">
              <Cart bg={activeIcon == 'cart' ? '#FF6633' : '#414141'} />
              <span className={activeIcon == 'cart' ? 'active' : 'noactive'}>Корзина</span>
              {items.length > 0 && (
                <div className="head__count">
                  <span>{items.length}</span>
                </div>
              )}
            </div>
          </Link>
          <div className="head__user">
            <img src={avatar} alt="User" />
            <span>Роман</span>
            <img className="head__user-input" src={button} alt="Button" />
          </div>
        </div>
      </div>
      {visible && <Menu items={menuItems} setVisible={setVisible} />}
    </>
  );
};

export default Head;
