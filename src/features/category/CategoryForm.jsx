import { useState } from "react";
import Input from "../../ui/Input";

function CategoryForm() {
  const [isShowForm, setIsShowForm] = useState(false);

  const handleCancelClick = (e) => {
    e.preventDefault();
    setIsShowForm(false);
  };

  return (
    <div>
      <div className={`mb-6 ${isShowForm ? "" : "hidden"}`}>
        <h2 className="text-xl text-secondary-900 font-bold mb-2">
          Add New category
        </h2>

        <div className="">
          <form className="bg-secondary-200 p-4 rounded-xl">
            <Input label="Title" name="title" />
            <div className="flex justify-between  gap-x-4">
              <button
                onClick={handleCancelClick}
                className="flex-auto btn btn--outline p-3"
              >
                Cancel
              </button>
              <button className="flex-auto p-3 btn btn--secondary">
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
