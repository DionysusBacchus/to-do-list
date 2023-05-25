import React, { useState } from 'react';

export default function InputField({ onChange, onEnter, onBlur, initialValue }) {

  const [inputValue, setInputValue] = useState(initialValue || '');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  const handleInputConfirm = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        onEnter(inputValue);
        setInputValue('');
      }
    }
  };

  const handleInputBlur = () => {
    onBlur && onBlur(inputValue);
  }

  return (
    <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputConfirm}
        onBlur={handleInputBlur}
        autoFocus
    />
  )

}