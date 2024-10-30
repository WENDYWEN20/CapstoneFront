import React, { useContext, createContext } from "react";
import {CartContext} from "./CartContext.jsx";

export default function DeleteCart(product) {

    const { cart, removeFromCart } = useContext(CartContext); 
      // Function to remove an item from the cart by ID

return(
    <button  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all duration-300" onClick={() => removeFromCart(item._id)}>Delete</button>
)}