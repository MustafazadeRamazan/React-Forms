import React, { useState } from 'react';

const CustomMultiSelect = ({ options, onSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    const index = selectedOptions.findIndex((o) => o.value === option.value);
    if (index !== -1) {
      // option is already selected, so unselect it
      setSelectedOptions([
        ...selectedOptions.slice(0, index),
        ...selectedOptions.slice(index + 1),
      ]);
    } else {
      // option is not selected, so select it
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <ul>
        {options.map((option) => (
          <li key={option.value}>
            <label>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.some(
                  (o) => o.value === option.value
                )}
                onChange={() => handleOptionSelect(option)}
              />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={() => onSelect(selectedOptions)}>Submit</button>
    </div>
  );
};

export default CustomMultiSelect;
