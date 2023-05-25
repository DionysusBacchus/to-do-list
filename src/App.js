import './App.css';
import TaskList from './components/TaskList';
import useFilter from './hooks/useFiler';
import React, { createContext, useState } from 'react';
import useList from './hooks/useList';
import AddTag from './components/AddTag';
import Tag from './components/Tag';

const uuid = require("uuid");

export const TagContext = createContext();

export const FilterContext = createContext();

function App() {
  const [chooseTag, buttonStyle, filerByTag] = useFilter();
  const [tagsArray, List] = useList('myTags');
  const [tasksArray, taskList] = useList('myData');
  const [noneTagId, setNone] = useState(uuid.v4());

  React.useEffect(() => {
    const defaultTag = tagsArray.find(item => item.text === 'None');
    if (!defaultTag) {
      List.add({ id: noneTagId, text: 'None' });
    }
    else {
      setNone(defaultTag.id);
    }

  }, []);

  const addTag = (text) => {
    const newTag = { id: uuid.v4(), text: text };
    List.add(newTag);
  };
  const handleTagDelete = (tagId) => {
    taskList.changeAll("tag", tagId, noneTagId )
  }

  return (
    <div className="App">
      <header className="App-header">
        <FilterContext.Provider value={[chooseTag, buttonStyle, handleTagDelete]}>
          <div>
            <AddTag onAdd={addTag} />
            {tagsArray.map((tag) => (
              <span key={tag.id}>
                <Tag
                  noneTagId={noneTagId}
                  item={tag}
                  handles={{ deleteTag: List.delete, editTag: List.edit }} />
              </span>
            ))}
          </div>
        </FilterContext.Provider>
        <TagContext.Provider value={{ tagsArray, noneTagId }}>
          <TaskList filerByTag={filerByTag} tasksArray={tasksArray} List={taskList}/>
        </TagContext.Provider>
      </header>
    </div>
  );
}

export default App;
