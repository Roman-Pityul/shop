import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import classNames from "classnames"

import logo from "../../img/head/logo.png"
import menu from "../../img/head/menu.png"
import avatar from "../../img/head/avatar.png"
import button from "../../img/head/button.png"
import { Search } from ".."
import { Menu } from ".."
import { RootState } from '../../redux/index'
import { addItemFromLS } from "../../redux/cart/cartReducer"
import { Orders } from '../../img/head/orders'
import { Favourites } from '../../img/head/favourites'
import { Cart } from '../../img/head/cart'

import "./head.scss";

const Head = () => {
  const isMount = React.useRef(false)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)
  const { activeIcon } = useSelector((state: RootState) => state.head)
  const [visible, setVisible] = React.useState(false)
  const { categories } = useSelector((state: RootState) => state.categories)

  React.useEffect(() => {
    if (isMount.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("items", json);
    } else {
      const data = localStorage.getItem('items')
      if (data) {
        dispatch(addItemFromLS(JSON.parse(data)))
      }
    }
    isMount.current = true
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
      {visible && <Menu items={categories} setVisible={setVisible} />}
    </>
  );
};

export default Head
