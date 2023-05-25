import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import TagList from './components/TagList';
import useFilter from './hooks/useFiler';
import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

function App() {
  const [chooseTag, buttonStyle, filerByTag] = useFilter();

  return (
    <div className="App">
      <header className="App-header">
        <FilterContext.Provider value={[chooseTag, buttonStyle]}>
            <TagList/>
            <TaskList filerByTag={filerByTag}/>
        </FilterContext.Provider>
      </header>
    </div>
  );
}

export default App;
