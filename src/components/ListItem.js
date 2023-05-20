import React, { useState } from 'react';


export default function ListItem({text, done}) {
    const [isDone, setIsDone] = useState(done);

    const handleCheckboxChange = () => {
      setIsDone(!isDone);
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
          name="check"
        />
        <label style={labelStyle} for="check">{text}</label>
        <span class="edit-icon">&#9998;</span>
        <span class="delete-icon">&#10006;</span>
        
      </div>
    );
  }
  