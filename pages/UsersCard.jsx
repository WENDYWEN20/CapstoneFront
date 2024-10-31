import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext.jsx";


function UserCard() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Total Price {totalPrice}</h2>



    </div>
  );
}

export default UserCard;
