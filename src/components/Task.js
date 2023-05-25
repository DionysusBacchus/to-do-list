import React from 'react';
import EditableLabel from './EditableLabel';
import Dropdown from './Dropdown';
import { TagContext } from '../App';

export default function Task({ item, handles }) {
  const [isDone, setIsDone] =React.useState(item.done);
  const {tagsArray} = React.useContext(TagContext);

  const handleDeleteItem = () => {
    handles.deleteItem(item.id);
  }

  const handleCheckboxChange = () => {
    const newItem = { ...item, done: !isDone };
    handles.editItem(item.id, newItem);
    setIsDone(!isDone);
  };

  const handleTextChange = (newValue) => {
    const newItem = { ...item, text: newValue };
    handles.editItem(item.id, newItem);
  };

  const handleTagChange = (newValue) => {
    const newItem = { ...item, tag: newValue };
    handles.editItem(item.id, newItem);
  };

  const labelStyle = {
    textDecoration: isDone ? 'line-through' : 'none'
  };
  
  return (
    <div>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleCheckboxChange}
        name={item.id}
        key={item.id}
      />
      <EditableLabel style={labelStyle} initialValue={item.text} onSave={handleTextChange}/>
      <Dropdown list={tagsArray} initialValue={item.tag} handleChooseItem={handleTagChange}/>
      <button
        className="delete-icon"
        onClick={handleDeleteItem}
      >&#10006;</button>
    </div>
  );
}
