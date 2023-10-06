import { createContext, useState } from "react";
import PropTypes from "prop-types";
import products from "../data/products";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const controlQuantity = (id, sign) => {
    let res = cart.map((pr) => {
      if (pr.id === id) {
        sign === "+" ? pr.quantity++ : pr.quantity--;
      }
      return pr;
    });
    return res;
  };

  const addToCart = (id) => {
    let product = products.find((pr) => pr.id === id);
    let productInCart = cart.find((pr) => pr.id === id);
    let newCart;
    if (productInCart) {
      newCart = controlQuantity(id, "+");
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };


  const increaseQuantity = (id) => {
    const newCart = controlQuantity(id, "+");
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const decreaseQuantity = (id) => {
    let newCart;
    let productInCart = products.find((pr) => pr.id === id);
    if (productInCart.quantity > 1) {
      newCart = controlQuantity(id, "-");
    } else {
      newCart = cart.filter((pr) => pr.id !== id);
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const state = { cart, addToCart, increaseQuantity, decreaseQuantity };

  return (
    <ProductsContext.Provider value={state}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductsContextProvider;
