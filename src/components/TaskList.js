import React from 'react';
import Task from './Task';
import InputField from './InputField';
import Dropdown from './Dropdown';
import { TagContext } from '../App';


const uuid = require("uuid");

export default function TaskList({ tasksArray, List, filerByTag }) {
  const { tagsArray, noneTagId } = React.useContext(TagContext);
  const [newTask, setNewTask] = React.useState({ id: uuid.v4(), text: '', done: false, tag: noneTagId });

  const handleAddTask = (text) => {
    handleNewTaskText(text);
    handleSaveNewTask();
  }

  const handleNewTaskText = (text) => {
    setNewTask({ ...newTask, text: text })
  }

  const handleNewTaskTag = (tag) => {
    setNewTask({ ...newTask, tag: tag })
  }

  const handleSaveNewTask = () => {
    if (newTask.text.trim() === '') return;
    List.add(newTask)
    setNewTask({ ...newTask, text: "", id: uuid.v4() })
  }

  return (
    <div>
      <span>
        <Dropdown
          list={tagsArray}
          handleChooseItem={handleNewTaskTag}
          initialValue={noneTagId}
        />
      </span>
      <span>
        <InputField
          onEnter={handleAddTask}
          onChange={handleNewTaskText} />
      </span>
      <button onClick={handleSaveNewTask}>Add New Task</button>
      {tasksArray.map((item) => (
        <div style={filerByTag(item.tag)} key={item.id}>
          <Task
            item={item}
            key={item.id}
            handles={{ deleteItem: List.delete, editItem: List.edit }} />
        </div>
      ))}
    </div>
  );
}