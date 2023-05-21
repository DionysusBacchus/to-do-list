import React, { useEffect, useState } from 'react';
import EditableLabel from './EditableLabel';

export default function ListItem({ item, handles }) {
  const [isDone, setIsDone] = useState(item.done);

  const handleDeleteItem = () => {
    handles.deleteItem(item.id);
  }

  const handleCheckboxChange = () => {
    setIsDone(!isDone);
  };

  const handleEditItem = (newValue) => {
    handles.editItem(item.id, newValue);
  };

  const labelStyle = {
    textDecoration: isDone ? 'line-through' : 'none'
  };

  useEffect(() => {
    handles.doneItem(item.id, isDone);
  }, [isDone]);

  return (
    <div key={item.id}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleCheckboxChange}
        name={item.id}
        key={item.id}
      />
      <EditableLabel style={labelStyle} initialValue={item.text} onSave={handleEditItem}/>
      <button
        className="delete-icon"
        onClick={handleDeleteItem}
      >&#10006;</button>
    </div>
  );
}
