import React, { useContext} from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../pages/CartContext.jsx";

function CheckOut({product}) {
  const { cart } = useContext(CartContext);
  
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  

  return (
    <main>
    <div key={product._id}>
      <Link key={product._id} to={`/products/${product._id}`}> {product.name}</Link>
      <p>Price: ${product.price}</p>
       </div>
    </main>
  );
}

export default CheckOut;
