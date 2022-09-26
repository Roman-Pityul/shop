import React from "react";
import { Link } from "react-router-dom";

import milk from "../../img/catalog/milk.png";
import bread from "../../img/catalog/bread.png";
import vegatables from "../../img/catalog/vegetables.png";
import iceProduct from "../../img/catalog/ice-product.png";
import drinks from "../../img/catalog/drinks.png";
import sweet from "../../img/catalog/sweet.png";
import tea from "../../img/catalog/tea.png";
import animals from "../../img/catalog/animals.png";
import healthy from "../../img/catalog/healthy.png";
import grocery from "../../img/catalog/grocery.png";
import babys from "../../img/catalog/babys.png";
import meat from "../../img/catalog/meat.png";
import others from "../../img/catalog/others.png";

import "./catalog.scss";

const Catalog: React.FC = () => {

  return (
    <>
      <h1 className="catalog__title">Каталог</h1>
      <div className="catalog__row">
        <Link to="/items/milk-cheese-egg">
          <div className="catalog__row-gradient">
            <div className="catalog__row-item">
              <img src={milk} alt="milk" className="catalog__row-gradient" />
              <span>Молоко, сыр, яйцо</span>
            </div>
          </div>
        </Link>
        <Link to="/items/bread">
          <div className="catalog__row-item">
            <img src={bread} alt="bread" />
            <span>Хлеб</span>
          </div>
        </Link>
        <Link to="/items/fruits-vegatables">
          <div className="catalog__row-item">
            <img src={vegatables} alt="vegatables" />
            <span>Фрукты и овощи</span>
          </div>
        </Link>
      </div>

      <div className="catalog__row">
        <Link to="/items/frozen-foods">
          <div className="catalog__row-item">
            <img src={iceProduct} alt="iceProduct" />
            <span>Замороженные продукты</span>
          </div>
        </Link>
        <Link to="/items/drinks">
          <div className="catalog__row-item">
            <img src={drinks} alt="drinks" />
            <span>Напитки</span>
          </div>
        </Link>
        <Link to="/items/confectionery-products">
          <div className="catalog__row-item">
            <img src={sweet} alt="sweet" />
            <span>Кондитерские изделия</span>
          </div>
        </Link>
        <Link to="/items/tea-coffee">
          <div className="catalog__row-item">
            <img src={tea} alt="tea" />
            <span>Чай, кофе</span>
          </div>
        </Link>
      </div>

      <div className="catalog__row">
        <Link to="/items/pet-supplies">
          <div className="catalog__row-item">
            <img src={animals} alt="animals" />
            <span>Зоотовары</span>
          </div>
        </Link>
        <Link to="/items/healthy-eating">
          <div className="catalog__row-item">
            <img src={healthy} alt="healthy" />
            <span>Здоровое питание</span>
          </div>
        </Link>
        <Link to="/items/grocery">
          <div className="catalog__row-item">
            <img src={grocery} alt="grocery" />
            <span>Бакалея</span>
          </div>
        </Link>
      </div>

      <div className="catalog__row">
        <Link to="/items/baby-food">
          <div className="catalog__row-item">
            <img src={babys} alt="babys" />
            <span>Детское питание</span>
          </div>
        </Link>
        <Link to="/items/meat-poultry-sausage">
          <div className="catalog__row-item">
            <img src={meat} alt="meat" />
            <span>Мясо, птица, колбаса</span>
          </div>
        </Link>
        <Link to="/items/non-food-products">
          <div className="catalog__row-item">
            <img src={others} alt="others" />
            <span>Непродовольственные товары</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Catalog;
