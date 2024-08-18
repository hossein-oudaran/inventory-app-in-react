import { useState } from "react";
import "./App.css";
import CategoryForm from "./features/category/CategoryForm";
import ProductsForm from "./features/products/ProductsForm";
import Navbar from "./ui/Navbar";
import ProductList from "./features/products/ProducList";
import Products from "./pages/Products";

function App() {
  const [categories, setCategorie] = useState([]);

  return (
    <div className=" container bg-secondary-100">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm setCategorie={setCategorie} />
        <Products categories={categories} />
      </div>
    </div>
  );
}

export default App;
