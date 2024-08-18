import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/Text_Field";
import RHFSelect from "../../ui/RHFSelect";
import toLocalDateShort from "../../utils/toLocalDateShort";

function ProductsForm({ categories }) {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: "",
    category: "",
  });
  const [products, setProducts] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (product) => {
    const newProduct = {
      ...productsFormData,
      title: product.title,
      quantity: product.quantity,
      categoryId: product.categoryId,
      createdAt: toLocalDateShort(new Date()),
      id: new Date().getTime(),
    };
    reset();
    setProducts((prevState) => [...prevState, newProduct]);
    setProductsFormData({ title: "", quantity: "", category: "" });
  };
  return (
    <div className="mb-6">
      <h2 className="text-xl text-secondary-900 font-bold mb-2">
        Add New Product
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary-200 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <div>
          <TextField
            label="Title"
            register={register}
            name="title"
            type="text"
            required
          />
        </div>
        <div>
          <TextField
            label="Quantity"
            register={register}
            name="quantity"
            type="number"
            required
          />
        </div>
        <div>
          <RHFSelect
            label="Category"
            name="categoryId"
            register={register}
            options={categories}
            required
            key={categories.id}
          />
        </div>
        <button type="submit" className="btn btn--primary mt-8">
          Add new Product
        </button>
      </form>
    </div>
  );
}

export default ProductsForm;
