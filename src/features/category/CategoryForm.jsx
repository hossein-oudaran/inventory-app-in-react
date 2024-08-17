import Input from "../../ui/Input";

function CategoryForm() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl text-secondary-900 font-bold mb-2">
          Add New category
        </h2>
        <form className="bg-secondary-200 p-4 rounded-xl flex flex-col">
          <Input label="Title" name="category-title" />
          <label
            htmlFor="category-descripttion"
            className="mb-3 font-bold text-lg text-secondary-900"
          >
            Description
          </label>
          <textarea
            name="category-description"
            typeof="text"
            className="bg-transparent p-3 mb-5 rounded-xl border border-secondary-800 text-secondary-900 w-full hover:border-primary-900"
          ></textarea>
          <div className="flex items-center justify-between gap-x-4">
            <button className="btn btn--outline p-3 w-1/2">Cancel</button>
            <button className="w-1/2 p-3 btn btn--secondary">
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button className="btn btn--primary">Add new Category ?</button>
    </div>
  );
}

export default CategoryForm;
