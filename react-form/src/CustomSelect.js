import React, { useState } from 'react';

const CustomSelect = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div
        className="selected-option"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : 'Select an option'}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li
              key={option.value}
              className={option === selectedOption ? 'selected' : ''}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => onSelect(selectedOption)}>Submit</button>
    </div>
  );
};

export default CustomSelect;
