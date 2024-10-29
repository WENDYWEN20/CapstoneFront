import React, { useState } from 'react';
import PropTypes from "prop-types";
import ProductDetails from '../pages/ProductDetail.jsx'


function ProductsPage({ prod }) {

    return (

      <div className="flex bg-red-400">
        {prod.map((p) => (
          <ProductDetails key={p._id} product={p} />
        ))}

      </div>

  );
}

export default ProductsPage;