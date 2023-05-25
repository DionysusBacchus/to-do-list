import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import TagList from './components/TagList';
import useFilter from './hooks/useFiler';
import React, { createContext, useState } from 'react';
import useList from './hooks/useList';

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

  return (
    <div className="App">
      <header className="App-header">
        <FilterContext.Provider value={[chooseTag, buttonStyle]}>
          <TagList tagsArray={tagsArray} List={List} />
        </FilterContext.Provider>
        <TagContext.Provider value={{ tagsArray, noneTagId }}>
          <TaskList filerByTag={filerByTag} />
        </TagContext.Provider>
      </header>
    </div>
  );
}

export default App;
