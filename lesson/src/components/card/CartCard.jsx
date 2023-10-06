import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Card.css";

import { ProductsContext } from "../../context/ProductsContext";

const CartCard = ({ id, image, name, description, price }) => {
  const { cart, increaseQuantity, decreaseQuantity } =
    useContext(ProductsContext);
  let cartCheck = cart.find((pr) => pr.id === id);
  return (
    <div className="cart-card">
      <div className="cart-card-left">
        <img className="cart-product-img" src={image} alt="Product" />
        <div className="cart-content">
          <Link to={`/products/${id}`} className="cart-name">
            {name}
          </Link>
          <p className="cart-desc">{(description).slice(0, 40)}...</p>
        </div>
      </div>
      <div className="cart-card-right">
        <div className="btn-group">
          <button
            onClick={() => decreaseQuantity(id)}
            className="btn btn-danger"
          >
            -
          </button>
          <span className="btn btn-white">{cartCheck.quantity}</span>
          <button
            onClick={() => increaseQuantity(id)}
            className="btn btn-success"
          >
            +
          </button>
        </div>
        <p className="cart-price">{price * cartCheck.quantity} ₽</p>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default CartCard;
