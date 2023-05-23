import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import InputField from './InputField';
import { getArrayFromStorage, saveArrayToStorage } from '../utils';
import useFilter from '../useFiler';
import { randomTAGs, getRandomItem } from '../mock';

const uuid = require("uuid");


export default function List() {
  const [tasksArray, setTasksArray] = useState(getArrayFromStorage('myData'));
  const [chooseTag, buttonStyle, filerByTag] = useFilter();

  useEffect(() => {
    saveArrayToStorage('myData', tasksArray);
  }, [tasksArray]);


  const handleAddItem = (inputValue) => {
    const randomTag = getRandomItem(randomTAGs);
    setTasksArray([...tasksArray, { id: uuid.v4(), text: inputValue, done: false, tag: randomTag}]);
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
      <span><InputField handleAddItem={handleAddItem} /></span>
      <span>
        {randomTAGs.map((item, index) => (
          <button
          onClick={() => chooseTag(item)}
          style={buttonStyle(item)}
          key={item}
        > {index}</button>
        ))}
      </span>

      {tasksArray.map((item) => (
        <div style = {filerByTag(item.tag)} key={item.id}>
        <ListItem 
          item={item} 
          key={item.id} 
          handles={{ deleteItem: handleDeleteItem, doneItem: handleDoneItem, editItem: handleEditItem}} />
        </div>
      ))}
      
    </div>
  );
}