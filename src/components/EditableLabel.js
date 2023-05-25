import React from "react";
import InputField from "./InputField";

export default function EditableLabel({ initialValue, onSave, style }) {
  const [editing, setEditing] = React.useState(false);

  const handleSave = (value) => {
    onSave(value);
    setEditing(false);
  };

  if (editing) {
    return (
      <InputField initialValue={initialValue} onBlur={handleSave} onEnter={handleSave} />
    );
  }

  return <span style={style} onClick={() => setEditing(true)}>{initialValue}</span>;
}