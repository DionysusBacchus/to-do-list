import React, { useState } from "react";

export default function EditableLabel({ initialValue, onSave, style }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    onSave(value);
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  if (editing) {
    return (
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  }

  return <span style={style} onClick={() => setEditing(true)}>{value}</span>;
}