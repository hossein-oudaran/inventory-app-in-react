import React from "react";

function Search({ type = "text", name, label, value, onChange }) {
  return (
    <div className=" flex items-center gap-x-4 mb-6">
      <label id={value} htmlFor={value} className=" text-secondary-900 text-lg">
        {label}
      </label>
      <input
        value={value}
        type={type}
        name={name}
        className="bg-secondary-100 p-1 rounded-xl border border-secondary-500 text-secondary-900"
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
