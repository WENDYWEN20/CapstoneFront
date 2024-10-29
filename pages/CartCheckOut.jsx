import React, { useState, useEffect,useContext } from "react";
import PropTypes from "prop-types";
import CheckOut from "../pages/Checkout.jsx";
import { CartContext } from '../pages/CartContext.jsx';
export default function ProductCart() {
  const { cart } = useContext(CartContext);// contextProvider can render what is needed to children, either a function or object
  console.log(cart)
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalItems =cart.reduce((count, item)=>count +item.quantity,0)
  return (
    <div>
      <h1>
        <strong> Welcome to our Checkout Page</strong>
      </h1>
      <h2>
        <strong> We store your information securely</strong>
      </h2>
      <p className="flex bg-red-400">Current Shopping Cart: </p>
      <hr />
      <div>
        {cart.map((item) => (
          <CheckOut key={cart._id} product={item} />
        ))}
      </div>
      <div className="flex bg-red-400">
        <p> <strong>Total Price: ${totalPrice.toFixed(2)}</strong></p>
        <button  type="submit" >CheckOut</button>
      </div>
    </div>
  );
}



