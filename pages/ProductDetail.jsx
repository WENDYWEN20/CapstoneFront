import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Cart from "../pages/CartCheckOut"
function Detail({ product}) {


  return (
    <div>
      <img src={product.images} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button className="bg-amber-300">Add to Cart</button>
       </div>

  );
}

export default Detail;
