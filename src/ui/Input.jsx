import React, { useState } from "react";

function Input({ name, label, type = "text" }) {
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-3 font-bold text-lg text-secondary-900">
          {label}
        </label>
        <input
          value={categoryFormData.title}
          type={type}
          name={name}
          className="p-3 bg-transparent rounded-xl border border-secondary-800 text-secondary-900 w-full  hover:border-primary-900"
          onChange={handleChangeFormData}
        />
      </div>
      <div>
        <TextAreaDesc
          label="Description"
          name="description"
          onChange={handleChangeFormData}
          categoryFormData={categoryFormData}
        />
      </div>
    </div>
  );
}

export default Input;

function TextAreaDesc({ name, label, value, categoryFormData, onChange }) {
  return (
    <div>
      <label className="mb-3 font-bold text-lg text-secondary-900">
        {label}
      </label>
      <textarea
        onChange={onChange}
        value={categoryFormData.description}
        name={name}
        typeof="text"
        className="bg-transparent p-3 mb-5 rounded-xl border border-secondary-800 text-secondary-900 w-full hover:border-primary-900"
      ></textarea>
    </div>
  );
}
