import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { CartContext } from '../pages/CartContext.jsx';

function Detail({ product}) {
  const { addToCart} = useContext(CartContext);

  return (
    <div key={product._id}>
      <img src={product.images} />
      <Link key={product._id} to={`/products/${product._id}`}> {product.name}</Link>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}> <strong>Add to Cart</strong></button>
       </div>

  );
}

export default Detail;
