const loadFromLocalStorage = key => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

const writeToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export {loadFromLocalStorage, writeToLocalStorage};
