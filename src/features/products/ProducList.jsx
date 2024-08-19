import React from "react";

function ProducList({ products, categories, setProducts }) {
  const categoryLabel = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).title;
  };

  const handleDelete = (productId) => {
    const filteredProducts = products.filter(
      (p) => p.id !== parseInt(productId)
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h2 className="text-xl text-secondary-900 font-bold mb-2">
        Product list
      </h2>
      <div className="overflow-x-auto">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center justify-between mb-2 w-full min-w-[400px]"
            >
              <span className="text-secondary-800 text-lg font-semibold">
                {product.title}
              </span>
              <div className="flex items-center gap-x-3">
                <span className="text-secondary-800">{product.createdAt}</span>
                <span className="flex items-center justify-center px-3 py-0.5 text-secondary-800 border border-secondary-800 text-sm rounded-2xl">
                  {categoryLabel(product.categoryId)}
                </span>
                <div className="badge badge--secondary">
                  <span className="p-2">{product.quantity}</span>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="btn btn--danger"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProducList;
