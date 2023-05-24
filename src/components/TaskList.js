import React from 'react';
import ListItem from './ListItem';
import InputField from './InputField';
import useFilter from '../useFiler';
import useList from '../useList';
import { randomTAGs, getRandomItem } from '../mock';

const uuid = require("uuid");

export default function TaskList() {
  const [tasksArray, List] = useList('myData');
  const [chooseTag, buttonStyle, filerByTag] = useFilter();

  const createTask = (text) => {
    const randomTag = getRandomItem(randomTAGs);
    return { id: uuid.v4(), text: text, done: false, tag: randomTag};
  }

  const addTask = (text) => {
    const newTask = createTask(text);
    List.add(newTask);
  }

  return (
    <div>
      <span><InputField handleAddItem={addTask} /></span>
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
          handles={{ deleteItem: List.delete, editItem: List.edit}} />
        </div>
      ))}
      
    </div>
  );
}