import React, { useState, useRef, useEffect } from 'react';
import InputField from './InputField';

export default function AddTag ({ onAdd }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleRecieveInput = (text) => {
    onAdd(text);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <InputField handleAddItem={handleRecieveInput}/>
    );
  }

  return (
    <button onClick={handleButtonClick}>
      Add Tag
    </button>
  );
};