import React, { useState } from 'react';
import ListItem from './ListItem';

const uuid = require("uuid");

export default function List() {

    const [inputValue, setInputValue] = useState('');
    const [arrayValues, setArrayValues] = useState(data);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleAddItem = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          if (inputValue.trim() !== '') {
            setArrayValues([...arrayValues, {id: uuid.v4(), text: inputValue, done: false}]);
            setInputValue('');
          }
        }
      };
    
      const handleDeleteItem = (id) => {
        setArrayValues(arrayValues.filter(item => item.id !== id));
      };
    const handleDoneItem = (id, isDone) => {
        setArrayValues(arrayValues.map(item => {
            if (item.id === id) {
                item.done = isDone;
            }
            return item;
        }))
    };

    return (
      <div>
      {arrayValues.map((item) => (
        <ListItem item={item} key={item.id} handles={{deleteItem: handleDeleteItem, doneItem: handleDoneItem}}/>
      ))}
      <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleAddItem}
          />
      </div>
    );
  }
  
  let data = [
    {id: uuid.v4(), text:"HHHH", done: true}, 
    {id: uuid.v4(), text:"hohoho", done: false}, 
    {id: uuid.v4(), text:"hihihi", done: true}, 
    {id: uuid.v4(), text:"heheh", done: false}, 
    {id: uuid.v4(), text:"huhuhu", done: false}
  ];