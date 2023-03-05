const CustomRadioButton = ({ name, options, onChange, onSubmit }) => {
  const handleChange = (event) => {
    onChange(event);
    onSubmit(); // call onSubmit function passed down from parent component
  };

  return (
    <form>
      {options.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="radio"
              name={name}
              value={option.value}
              onChange={handleChange}
            />
            {option.label}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CustomRadioButton;