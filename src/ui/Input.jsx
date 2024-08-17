import React from "react";

function Input({ name, value, label, type = "text" }) {
  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block mb-3 font-bold text-lg text-secondary-900"
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          className="p-3 bg-transparent rounded-xl border border-secondary-800 text-secondary-900 w-full md:w-auto hover:border-primary-900"
        />
      </div>
      <div></div>
    </div>
  );
}

export default Input;
