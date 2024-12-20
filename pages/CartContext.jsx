import React, { useState, createContext , useContext} from "react";

//create a Context
export const CartContext=createContext();
//CartProvider component to wrap the app
export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{
        setCart((prevCart) => [product, ...prevCart])
    }
    const removeFromCart = (id) => {
      setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    };

//CartContext: A context to manage cart state.
//CartProvider: A wrapper component that holds the cart state and provides the addToCart function to the whole app.
return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};