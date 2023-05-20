import logo from './logo.svg';
import './App.css';
import List from './components/List';
import React, { createContext, useState } from 'react';


let data = [
  {text:"HHHH", done: true}, 
  {text:"hohoho", done: false}, 
  {text:"hihihi", done: false}, 
  {text:"heheh", done: false}, 
  {text:"huhuhu", done: false}
];
function App() {
  const [inputValue, setInputValue] = useState('');
  const [arrayValues, setArrayValues] = useState(data);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        setArrayValues([...arrayValues, {text: inputValue, done: false}]);
        setInputValue('');
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <List data={arrayValues} />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleAddItem}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
