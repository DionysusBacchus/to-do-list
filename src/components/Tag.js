import React, { useContext } from 'react';
import { FilterContext } from '../App';

export default function Tag({ item, handles, noneTagId }) {
  const [chooseTag, buttonStyle, handleTagDelete] = useContext(FilterContext);

  const handleDeleteTag = () => {
    handleTagDelete(item.id);
    handles.deleteTag(item.id);
  }

  return (
    <div key={item.id}>
      <button
        onClick={() => chooseTag(item.id)}
        style={buttonStyle(item.id)}>
        {item.text}
      </button>
      {item.id !== noneTagId && (
        <span>
          <button
            className='edit-tag-button'>
            &#9998;
          </button>
          <button
            className='delete-tag-button'
            onClick={handleDeleteTag}>
            &#10006;
          </button>
        </span>
      )}
    </div>
  )
}