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


  return (
    <div className="App">
      <header className="App-header">
        <FilterContext.Provider value={[chooseTag, buttonStyle]}>
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
          <TaskList filerByTag={filerByTag} />
        </TagContext.Provider>
      </header>
    </div>
  );
}

export default App;
