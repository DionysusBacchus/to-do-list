import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import InputField from './InputField';
import { getArrayFromStorage, saveArrayToStorage } from '../utils';

const uuid = require("uuid");

export default function List() {
  const [tasksArray, setTasksArray] = useState(getArrayFromStorage('myData'));

  useEffect(() => {
    saveArrayToStorage('myData', tasksArray);
  }, [tasksArray]);


  const handleAddItem = (inputValue) => {
    setTasksArray([...tasksArray, { id: uuid.v4(), text: inputValue, done: false }]);
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

  const handleEditItem = (id, text) => {
    setTasksArray(tasksArray.map(item => {
      if (item.id === id) {
        item.text = text;
      }
      return item;
    }))
  };

  return (
    <div>
      {tasksArray.map((item) => (
        <ListItem item={item} key={item.id} handles={{ deleteItem: handleDeleteItem, doneItem: handleDoneItem, editItem: handleEditItem}} />
      ))}
      <InputField handleAddItem={handleAddItem} />
    </div>
  );
}