import { getArrayFromStorage, setArrayToStorage } from './utils';
const uuid = require("uuid");

const generateRandomTAG = () => {
  const newValues = [ uuid.v4(), uuid.v4(), uuid.v4() ];
  setArrayToStorage('myTAGs', newValues);
  return newValues;
}

const getTAGS = () => {
  const savedTAGs = getArrayFromStorage('myTAGs');
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