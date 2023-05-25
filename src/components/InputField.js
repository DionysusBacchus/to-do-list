import React, { useState } from 'react';

export default function InputField({ handleAddItem }) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputConfirm = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        handleAddItem(inputValue);
        setInputValue('');
      }
    }
  };

  return (
    <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputConfirm}
        autoFocus
    />
  )

}