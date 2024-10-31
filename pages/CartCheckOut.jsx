import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CheckOut from "../pages/Checkout.jsx";
import { CartContext } from "../pages/CartContext.jsx";
import StripeButton from "../pages/Stripe.jsx";

export default function ProductCart() {
  const { cart, removeFromCart } = useContext(CartContext); // contextProvider can render what is needed to children, either a function or object
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>
        <strong> Welcome to our Checkout Page</strong>
      </h1>
      <h2>
        <strong> We store your information securely</strong>
      </h2>
      <p className="flex bg-red-400">Current Shopping Cart: </p>
      <StripeButton />
      <hr />
      <div>
        {cart.map((item) => (
          <div key={item._id}>
            <CheckOut key={item._id} product={item} />
            <button
              className="flex hover:bg-blue-600 transition-all duration-300 shadow-lg"
              onClick={() => removeFromCart(item._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="flex bg-red-400">
        <p>
          {" "}
          <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
        </p>
        <form action="/create-checkout-session" method="POST">
          <button type="submit">Regular Checkout</button>
        </form>
        <Link to="/products"> Show All Products</Link>
      </div>
    </div>
  );
}
