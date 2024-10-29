import React, { useState, useEffect, createContext } from "react";
import {CartContext} from "./CartContext.jsx";

export default function ProductCart(product) {

  const { cart } = useContext(CartContext); // Access cart from contextProvider
  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch(`http://localhost:3000/carts`,{cart});
      const cartData = await res.json();
      setCart(cartData.carts);
      console.log(cartData);
      console.log(cartData.carts);
      console.log(cart);
    };
    if (cart.length > 0) {
      fetchCart()}// Save cart only if it has items
  }, [cart]);

 const addtoCart=(product)=>{ setCart((prevCart)=>[product,...prevCart]) }

  return (
    <div>
      <button onClick={()=>addtoCart(product)}>
        <strong>Add to Cart</strong>
      </button>
    </div>
  );
}
