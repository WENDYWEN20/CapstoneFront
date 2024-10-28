import React, { useState } from 'react';
import PropTypes from "prop-types";
import ProductDetails from '../pages/ProductDetail.jsx'

function HomePage({ prod }) {
    return (


      <div className="flex bg-red-400">
        {prod.map((product) => (
          <ProductDetails key={product._id} product={product} />
        ))}
      </div>

  );
}

export default HomePage;