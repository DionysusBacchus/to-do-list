import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import React, { createContext, useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TaskList/>
        </div>
      </header>
    </div>
  );
}

export default App;
