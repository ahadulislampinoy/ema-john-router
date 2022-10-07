import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clerCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div>
      {/* these css are from Shop.css, this support in here without import cause- in google doc */}
      <div className="shop">
        <div className="orders-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
          {cart.length === 0 && (
            <h2 style={{ textAlign: "center" }}>
              No items avaiable, <Link to="/shop">Shop here!</Link>
            </h2>
          )}
        </div>
        <div className="cart-container">
          <Cart cart={cart} clerCart={clerCart} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
