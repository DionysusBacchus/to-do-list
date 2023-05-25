import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import TagList from './components/TagList';
import useFilter from './hooks/useFiler';
import React, { createContext, useState } from 'react';
import useList from './hooks/useList';

export const TagContext = createContext();

export const FilterContext = createContext();

function App() {
  const [chooseTag, buttonStyle, filerByTag] = useFilter();
  const [tagsArray, List] = useList('myTags');

  return (
    <div className="App">
      <header className="App-header">
        <FilterContext.Provider value={[chooseTag, buttonStyle]}>
          <TagList tagsArray={tagsArray} List={List} />
        </FilterContext.Provider>
        <TagContext.Provider value={{ tagsArray }}>
          <TaskList filerByTag={filerByTag} />
        </TagContext.Provider>
      </header>
    </div>
  );
}

export default App;
