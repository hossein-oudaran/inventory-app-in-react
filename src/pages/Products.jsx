import ProductsForm from "../features/products/ProductsForm";
import ProducList from "../features/products/ProducList";
import Select from "../ui/Select";
import Search from "../ui/Search";

const sortOptions = [
  {
    label: "Latest",
    value: "LATEST",
  },
  {
    label: "Earliest",
    value: "EARLIEST",
  },
];

function Products({
  categories,
  onChangeSort,
  sort,
  searchValue,
  onSearchValue,
  setProducts,
  products,
}) {
  return (
    <div>
      <ProductsForm setProducts={setProducts} categories={categories} />
      <Search
        label="Search"
        name="search-input"
        value={searchValue}
        onChange={onSearchValue}
      />
      <Select onChange={onChangeSort} value={sort} options={sortOptions} />
      <ProducList
        products={products }
        setProducts={setProducts}
        categories={categories}
      />
    </div>
  );
}

export default Products;
