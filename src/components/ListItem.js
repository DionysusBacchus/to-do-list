import React, { useEffect, useState } from 'react';


export default function ListItem({item, deleteItem}) {
    const [isDone, setIsDone] = useState(item.done);

    const handleDeleteItem = () => {
      deleteItem(item.id);
    }

    const handleCheckboxChange = () => {
      setIsDone(!isDone);
    };

    const labelStyle = {
      textDecoration: isDone ? 'line-through' : 'none'
    };
    

    return (
      <div key={item.id}>
        <input 
          type="checkbox"
          checked={isDone}
          onChange={handleCheckboxChange} 
          name={item.id}
          key={item.id}
        />
        <label style={labelStyle} htmlFor={item.id}>{item.text}</label>
        <span className="edit-icon">&#9998;</span>
        <button 
          className="delete-icon"
          onClick={handleDeleteItem}
          >&#10006;</button>
      </div>
    );
  }
  