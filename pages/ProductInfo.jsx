import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { CartContext } from "../pages/CartContext.jsx";
function Info() {
  const { addToCart, cart } = useContext(CartContext);
  const params = useParams();
  const [element, setElement] = useState([]);
  //fetch each single product element when components first render
  useEffect(() => {
    console.log(params);
    const fetchElement = async () => {
      const res = await fetch(`http://localhost:3000/products/${params.id}`);
      const elementData = await res.json();
      console.log(elementData);
      setElement(elementData.product);
      console.log(elementData.product);
    };
    fetchElement();
  }, [params.id]);

  return (
    <div>
      <img src={element.images} />
      <h1>{element.name}</h1>
      <p>Price: ${element.price}</p>
      <button onClick={() => addToCart(element)}>
         <strong>Add to Cart</strong>
      </button>
    </div>
  );
}

export default Info;
