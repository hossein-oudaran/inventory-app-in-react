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
        className=" p-2 rounded-xl border border-secondary-800 text-secondary-900"
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
