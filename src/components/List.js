import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

const uuid = require("uuid");

function getTasksFromStorage() {
    const savedData = localStorage.getItem('myData');
    if (savedData) {
        return JSON.parse(savedData);
    }
    return [];
}

export default function List() {
    const [tasksArray, setTasksArray] = useState(getTasksFromStorage());

    useEffect(() => {
        const string = JSON.stringify(tasksArray);

        localStorage.setItem('myData', string);
    }, [tasksArray]);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleAddItem = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          if (inputValue.trim() !== '') {
            setTasksArray([...tasksArray, {id: uuid.v4(), text: inputValue, done: false}]);
            setInputValue('');
          }
        }
      };
    
      const handleDeleteItem = (id) => {
        setTasksArray(tasksArray.filter(item => item.id !== id));
      };

    const handleDoneItem = (id, isDone) => {
        setTasksArray(tasksArray.map(item => {
            if (item.id === id) {
                item.done = isDone;
            }
            return item;
        }))
    };

    return (
      <div>
      {tasksArray.map((item) => (
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