import { useState } from 'react';

export default function useFilter(initialValue = null) {
  const [selectedItem, setSelectedItem] = useState(initialValue);


  const buttonStyle = (item) => {
    const color = selectedItem && item === selectedItem ? '#ffffff' : '#000000';
    const backgroundColor = selectedItem && item === selectedItem ? '#000000' : '#ffffff';
    return {
    borderRadius: '4px',
    color: color, // Text color
    backgroundColor: backgroundColor // Background color
  }};

  const chooseItem = (item) => {
    if (item === selectedItem) {
      setSelectedItem(null);
    }
    else {
      setSelectedItem(item);
    }
  }

  const filterByItem = (item) => {
    const mode = selectedItem && item != selectedItem ? 'none' : 'block';
    return {display: mode};
  }
  return [chooseItem, buttonStyle, filterByItem];
}