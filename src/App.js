import logo from './logo.svg';
import './App.css';
import List from './components/List';
import React, { createContext, useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <List/>
        </div>
      </header>
    </div>
  );
}

export default App;
