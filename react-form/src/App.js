import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import CustomRadioButton from './CustomRadioButton';
import CustomMultiSelect from './CustomMultiSelect';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleFruitSelect = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleFruitsSelect = (selectedOptions) => {
    setSelectedFruits(selectedOptions);
  };

  return (
    <div>
      <h1>Custom Select</h1>
      <CustomSelect options={options} onSelect={handleOptionSelect} />
      {selectedOption && (
        <p>You selected: {selectedOption.label}</p>
      )}

      <h1>Custom Radio Button</h1>
      <CustomRadioButton
        name="fruit"
        options={options}
        onChange={handleFruitSelect}
      />
      {selectedFruit && (
        <p>You selected: {selectedFruit}</p>
      )}

      <h1>Custom Multi-Select</h1>
      <CustomMultiSelect options={options} onSelect={handleFruitsSelect} />
      {selectedFruits.length > 0 && (
        <p>You selected: {selectedFruits.map((f) => f.label).join(', ')}</p>
      )}
    </div>
  );
};

export default App;
