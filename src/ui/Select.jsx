function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input py-2 text-xs bg-secondary-0 mb-4"
    >
      {options.map((item) => (
        <option
          key={item.value}
          value={item.value}
          className="textField__input border border-secondary-500"
        >
          {item.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
