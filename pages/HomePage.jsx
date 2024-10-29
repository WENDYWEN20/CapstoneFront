import React from 'react';
import PropTypes from "prop-types";


function ProductsPage({ prod }) {
  const textStyle = {
    fontSize: "56px", // '16px' is a string value assigned to fontSize
  };
    return (

      <div className="flex bg-red-400">
        <h1 style={textStyle}> E commerce website</h1>
        <h2>Products Page shows all products together</h2>
        <h3>Click <strong> Product name</strong> will lead to Products/:id page with  <strong>Add to Cart </strong> function </h3>
        <h3><strong>Products/:id</strong> shows each single product where backend product is rendered </h3>

      </div>

  );
}

export default ProductsPage;