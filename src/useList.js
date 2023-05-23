import { useState, useEffect} from "react";
import { getArrayFromStorage, setArrayToStorage } from "./utils";

export default function useList(dataName) {
  const [dataArray, setDataArray] = useState(getArrayFromStorage(dataName));

  useEffect(() => {
    setArrayToStorage(dataName, dataArray);
  }, [dataArray, dataName]);

  const handleAddItem = (newItem) => {
    setDataArray([...dataArray, newItem]);
  };

  const handleDeleteItem = (id) => {
    setDataArray(dataArray.filter(item => item.id !== id));
  };

  const handleEditItem = (id, newItem) => {
    setDataArray(dataArray.map(item => {
      if (item.id === id) {
        item = newItem;
      }
      return item;
    }))
  };

  return [dataArray, {add: handleAddItem, delete: handleDeleteItem, edit: handleEditItem}]
}