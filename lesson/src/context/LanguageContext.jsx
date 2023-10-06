const CartPage = () => {
  const { cart } = useContext(ProductsContext);

  // Mahsulotlar soni
  const productCounts = {};

  cart.forEach((product) => {
    if (!productCounts[product.id]) {
      productCounts[product.id] = {
        ...product,
        quantity: 0,
      };
    }
    productCounts[product.id].quantity++;
  });

  const cartItems = Object.values(productCounts);

  // Umumiy narxi hisoblash
  let result = 0;
  cartItems.forEach((product) => {
    result += product.quantity * product.price;
  });

  return (
    <Fragment>
      <section>
        <div className="container-md">
          <h1 className="card-title">Ваш заказ</h1>
          <div className="cart-row">
            {cartItems.map((product) => (
              <CartCard key={product.id} {...product} />
            ))}
          </div>
          <div className="card-total">
            <p className="total-price">
              Итого: <span className="final-price">{result} ₽</span>
            </p>
            <button className="submit-btn">Оформить заказ</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
