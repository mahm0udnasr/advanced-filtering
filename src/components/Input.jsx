const Input = ({ name, label, value, handleChange, color, className }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" onChange={handleChange} value={value} name={name} />
      <span
        className={`checkmark ${className}`}
        style={{ backgroundColor: color, border: "1px solid black" }}
      ></span>
      {label}
    </label>
  );
};

export default Input;
