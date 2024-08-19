import { useEffect, useState } from "react";
import "./App.css";
import CategoryForm from "./features/category/CategoryForm";
import Navbar from "./ui/Navbar";
import Products from "./pages/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategorie] = useState([]);
  const [sort, setSort] = useState("LATEST");
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let result = products;
    result = filterSearch(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue]);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
    setFilteredProducts(filteredProducts);
  };
  const filterSearch = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    setFilteredProducts(filteredProducts);
  };

  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "LATEST") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "EARLIEST") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  return (
    <div className=" container bg-secondary-100">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm setCategorie={setCategorie} />
        <Products
          products={filteredProducts}
          setProducts={setProducts}
          categories={categories}
          sort={sort}
          searchValue={searchValue}
          onChangeSort={handleSort}
          onSearchValue={handleSearchValue}
        />
      </div>
    </div>
  );
}

export default App;
