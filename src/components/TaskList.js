import React from 'react';
import Task from './Task';
import InputField from './InputField';
import useFilter from '../hooks/useFiler';
import useList from '../hooks/useList';
import { randomTAGs, getRandomItem } from '../mock';

const uuid = require("uuid");

export default function TaskList() {
  const [tasksArray, List] = useList('myData');
  const [chooseTag, buttonStyle, filerByTag] = useFilter();

  const createTask = (text) => {
    const randomTag = getRandomItem(randomTAGs);
    return { id: uuid.v4(), text: text, done: false, tag: randomTag.id};
  }

  const addTask = (text) => {
    const newTask = createTask(text);
    List.add(newTask);
  }

  return (
    <div>
      <span><InputField handleAddItem={addTask} /></span>
      <span>
        {randomTAGs.map((item) => (
          <button
          onClick={() => chooseTag(item.id)}
          style={buttonStyle(item.id)}
          key={item.id}
        > {item.text}</button>
        ))}
      </span>

      {tasksArray.map((item) => (
        <div style = {filerByTag(item.tag)} key={item.id}>
        <Task 
          item={item} 
          key={item.id} 
          handles={{ deleteItem: List.delete, editItem: List.edit}} />
        </div>
      ))}
      
    </div>
  );
}