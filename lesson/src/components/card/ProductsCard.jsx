import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

import "./Card.css";

const ProductsCard = ({ id, image, name, description, price}) => {
  const { addToCart, cart, increaseQuantity, decreaseQuantity } = useContext(ProductsContext);
  let productInCart = cart.find((pr) => pr.id === id);
  return (
    <div className="products-card">
      <div className="card-image">
        <div className="card-image">
          <img className="card-img" src={image} alt="Product" />
        </div>
        <div className="card-content">
          <Link to={`/products/${id}`} className="card-name">
            {name}
          </Link>
          <p className="card-desc">{description}</p>
          <div className="card-footer">
            {productInCart ? (
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  onClick={() => decreaseQuantity(id)}
                  className="btn btn-danger"
                >
                  -
                </button>
                <span className="btn btn-white">{productInCart.quantity}</span>
                <button
                  onClick={() => increaseQuantity(id)}
                  className="btn btn-success"
                >
                  +
                </button>
              </div>
            ) : (
              <Fragment>
                <button onClick={() => addToCart(id)} className="card-btn">
                  Выбрать
                </button>
              </Fragment>
            )}

            <p className="card-price">от {price} ₽</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  filter: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default ProductsCard;
