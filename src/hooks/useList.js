import { useState, useEffect} from "react";
import { getArrayFromStorage, setArrayToStorage } from "../utils";

export default function useList(dataName) {
  const [dataArray, setDataArray] = useState(getArrayFromStorage(dataName));

  useEffect(() => {
    setArrayToStorage(dataName, dataArray);
  }, [dataArray, dataName]);

  const handleAddItem = (newItem) => {
    setDataArray([newItem, ...dataArray]);
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

  const changeKeyValue = (key, oldValue, newValue) => {
    setDataArray(dataArray.map(item => {
      if (item[key] === oldValue) {
        item[key] = newValue;
      }
      return item;
    }))
  };

  return [dataArray, {add: handleAddItem, delete: handleDeleteItem, edit: handleEditItem, changeAll: changeKeyValue}]
}