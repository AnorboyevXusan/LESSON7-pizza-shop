import { NavLink } from "react-router-dom";
import { Fragment, useContext } from "react";

import location from "../../assets/images/location.svg";
import username from "../../assets/images/account.svg";
import logo from "../../assets/images/pizza-logo.svg";
import cartImage from "../../assets/images/cart.svg";

import "./Layout.css";
import { categories } from "../../data/categories";
import { ProductsContext } from "../../context/ProductsContext";

const Header = () => {
  const {cart} = useContext(ProductsContext);
  return (
    <Fragment>
      <div className="container-lg banner-container">
        <div className="banner-left">
          <div className="banner-logo">
            <img src={location} alt="Location icon" />
            <button className="banner-btn">Москва</button>
          </div>
          <p>Проверить адрес</p>
          <p>
            Среднее время доставки*:
            <span className="banner-time">00:24:19</span>
          </p>
        </div>
        <div className="banner-right">
          <p className="working-hours">Время работы: c 11:00 до 23:00</p>
          <button className="account-btn">
            <img src={username} alt="Username Account" />
            <p>Войти в аккаунт</p>
          </button>
        </div>
      </div>
      <div className="line"></div>
      <header>
        <nav className="navbar">
          <div className="container-lg nav-container">
            <NavLink to="/" className="nav-logo">
              <img src={logo} alt="Pizza-logo" />
              <p>Куда пицца</p>
            </NavLink>
            <ul className="nav-categories">
              {categories.map((category) => (
                <li key={category.category} className="nav-item">
                  <a href={`#${category.name}`} className="nav-link">{category.name}</a>
                </li>
              ))}
            </ul>
            <NavLink to="/cart" className="cart-btn">
              <img src={cartImage} alt="Cart" />
              <span className="cart-count">{cart.length}</span>
            </NavLink>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
