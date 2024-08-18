import React, { useState } from "react";
import ProductsForm from "../features/products/ProductsForm";
import ProducList from "../features/products/ProducList";

function Products({ categories }) {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <ProductsForm setProducts={setProducts} categories={categories} />
      <ProducList
        products={products}
        setProducts={setProducts}
        categories={categories}
      />
    </div>
  );
}

export default Products;
