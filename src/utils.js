
export function getArrayFromStorage(variableName) {
  const savedData = localStorage.getItem(variableName);
  if (savedData) {
    return JSON.parse(savedData);
  }
  return [];
}

export function setArrayToStorage(variableName, newArray) {
  const string = JSON.stringify(newArray);
  localStorage.setItem(variableName, string);
}