import React, { useState } from 'react';
import PropTypes from "prop-types";

function User({ product }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <form action="">
      <button onClick={handleAddToCart}>Add to Cart</button>
      </form>
    </div>
  );
}

export default User;