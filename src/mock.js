import { getArrayFromStorage, setArrayToStorage } from './utils';
const uuid = require("uuid");

const generateRandomTAG = () => {
  const newValues = [ {id: uuid.v4(), text: "one"}, {id: uuid.v4(), text: "two"}, {id: uuid.v4(), text: "three"} ];
  setArrayToStorage('myTags', newValues);
  return newValues;
}

const getTAGS = () => {
  const savedTAGs = getArrayFromStorage('myTags');
  if (savedTAGs.length === 0) {
    return generateRandomTAG();
  }
  return savedTAGs;
}

export const randomTAGs = getTAGS();

export const getRandomItem = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};