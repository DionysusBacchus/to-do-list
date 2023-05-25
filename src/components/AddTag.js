import React from 'react';
import InputField from './InputField';

export default function AddTag({ onAdd }) {
  const [isEditing, setIsEditing] = React.useState(false);

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleRecieveInput = (text) => {
    onAdd(text);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <InputField onEnter={handleRecieveInput} />
    );
  }

  return (
    <button onClick={handleButtonClick}>
      Add Tag
    </button>
  );
}