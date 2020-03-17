import React from "react";

import "../Product/Product.css";

function Product() {
  return (
    <div className="product-img">
      <img
        src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="product"
      />

      <h1>CoCo Oil</h1>
      <h2>Works for everything!</h2>
    </div>
  );
}

export default Product;
