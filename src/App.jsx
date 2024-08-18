import { useState } from "react";
import "./App.css";
import CategoryForm from "./features/category/CategoryForm";
import ProductsForm from "./features/products/ProductsForm";
import Navbar from "./ui/Navbar";

function App() {
  const [categories, setCategorie] = useState([]);

  return (
    <div className=" container bg-secondary-100">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm setCategorie={setCategorie} />
        <ProductsForm categories={categories} />
     
      </div>
    </div>
  );
}

export default App;
