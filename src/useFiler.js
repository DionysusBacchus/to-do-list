import { useState } from 'react';

export default function useFilter(initialValue = null) {
  const [selectedItem, setSelectedItem] = useState(initialValue);

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
  return [chooseItem, filterByItem];
}