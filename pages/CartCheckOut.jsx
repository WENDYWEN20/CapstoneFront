import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";

export default function ProductCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`http://localhost:3000/carts`);
        const cartData=await response.json()
      } catch (error) {
        console.error("No products in cart:", error);
      }
      console.log(cartData);
      setCart(cartData)
    };
    fetchCart();
  }, []);

  return (
    <div>
      <button>Add to Cart</button>
      </div>
  );
}
