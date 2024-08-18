import { useState } from "react";
import Input from "../../ui/Input";
import toLocalDateShort from "../../utils/toLocalDateShort";

function CategoryForm() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  const [categories, setCategorie] = useState([]);

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setIsShowForm(false);
  };

  const hanldeAddNewCategory = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryFormData,
      createdAt: toLocalDateShort(new Date()),
    };
    setCategorie((prevState) => [...prevState, newCategory]);
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <div>
      <div className={`mb-6 ${isShowForm ? "" : "hidden"}`}>
        <h2 className="text-xl text-secondary-900 font-bold mb-2">
          Add New category
        </h2>

        <div className="">
          <form className="bg-secondary-200 p-4 rounded-xl">
            <Input
              categoryFormData={categoryFormData}
              setCategoryFormData
              label="Title"
              name="title"
              onChange={handleChangeFormData}
            />
            <div className="flex justify-between  gap-x-4">
              <button
                onClick={handleCancelClick}
                className="flex-auto btn btn--outline p-3"
              >
                Cancel
              </button>
              <button
                onClick={hanldeAddNewCategory}
                className="flex-auto p-3 btn btn--secondary"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
      <button
        className={`btn btn--primary ${isShowForm && "hidden"}`}
        onClick={() => setIsShowForm((prevState) => !prevState)}
      >
        Add new Category ?
      </button>
    </div>
  );
}

export default CategoryForm;
