import { Link } from "react-router-dom";
import { categories } from "../data/categories";

import offer1 from "../assets/images/offer-1.png";
import frame1 from "../assets/images/frame-1.png";
import offer2 from "../assets/images/offer-2.png";
import frame2 from "../assets/images/frame-2.png";

import "./Pages.css";
import ProductsCard from "../components/card/ProductsCard";
import products from "../data/products";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <section id="home">
      <div className="container-lg home">
        <div className="home-categories">
          {categories.map((pr) => {
            return (
              <div key={pr.name} className="category-card">
                <img src={pr.image} alt="Product" />
                <Link to={`#${pr.name}`} className="category-link">{pr.name}</Link>
              </div>
            );
          })}
        </div>
        <div className="home-offers">
          <div className="offers-card">
            <img className="img-frame w-100 frame1" src={frame1} alt="" />
            <img className="img-main w-100" src={offer1} alt="Pizza discount" />
            <p className="offer-desc">3 средние пиццы от 999 рублей</p>
          </div>
          <div className="offers-card card2">
            <img className="img-frame w-100" src={frame2} alt="" />
            <img
              className="img-main w-100 offer2"
              src={offer2}
              alt="Pizza discount"
            />
            <p className="offer-desc">Кэшбек 10% на самовывоз (доставка)</p>
          </div>
          <div className="offers-card">
            <img className="img-frame w-100 frame1" src={frame1} alt="" />
            <img className="img-main w-100" src={offer1} alt="Pizza discount" />
            <p className="offer-desc">3 средние пиццы от 999 рублей</p>
          </div>
          <div className="offers-card card2">
            <img className="img-frame w-100" src={frame2} alt="" />
            <img
              className="img-main w-100 offer2"
              src={offer2}
              alt="Pizza discount"
            />
            <p className="offer-desc">Кэшбек 10% на самовывоз (доставка)</p>
          </div>
        </div>
        <div className="home-search">
          <p className="search-desc">Проверить адрес доставки</p>
          <input placeholder="Адрес" className="products-search" type="text" />
          <button className="search-btn">Проверить</button>
        </div>
        <div className="home-products">
          {categories.map((el) => (
            <Fragment key={el.name}>
              <h3 id={el.name} className="products-category">{el.name}</h3>
              <div className="products-row">
                {products.map((pr) => <ProductsCard key={pr.id} {...pr} />)}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;

// {
//   products.map((product) => <ProductsCard key={product.id} {...product} />);
// }
