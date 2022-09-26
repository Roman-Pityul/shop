import React from 'react';

import cartEmptyImg from '../../img/empty-cart.png';

import './cartEmpry.scss'

const CartEmpty: React.FC = () => (
  <div className="cartempty_container">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вероятней всего, вы не заказывали ещё продукты.
      <br />
      Для того, чтобы заказать продукты, перейди на главную страницу.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
  </div>
);

export default CartEmpty