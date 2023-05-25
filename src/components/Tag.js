import React, { useContext } from 'react';
import { FilterContext } from '../App';
import InputField from './InputField';

export default function Tag({ item, handles, noneTagId }) {

  const [editing, setEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(item.text);

  const [chooseTag, buttonStyle, handleTagDelete] = useContext(FilterContext);

  const handleDeleteTag = () => {
    handleTagDelete(item.id);
    handles.deleteTag(item.id);
  }

  const handleInputChange = (text) => {
    setNewText(text);
  }

  const handleEditTag = () => {
    if (newText.trim() === '') return;
    handles.editTag(item.id, { ...item, text: newText });
    setEditing(false);
  }

  if (item.id === noneTagId) return (
    <button
      onClick={() => chooseTag(item.id)}
      style={buttonStyle(item.id)}>
      {item.text}
    </button>
  );


  return (
    <div key={item.id}>
      {!editing ? (
        <span>
          <button
            onClick={() => chooseTag(item.id)}
            style={buttonStyle(item.id)}>
            {item.text}
          </button>

          <button
            onClick={() => setEditing(true)}
            className='edit-tag-button'>
            &#9998;
          </button>
        </span>
      )
        : (
          <span>
            <InputField initialValue={item.text} onChange={handleInputChange} onEnter={handleEditTag} />
            <button
              onClick={handleEditTag}
              className='save-tag-button'>
              &#x2713;
            </button>
          </span>
        )}
      <button
        className='delete-tag-button'
        onClick={handleDeleteTag}>
        &#10006;
      </button>
    </div>
  )
}