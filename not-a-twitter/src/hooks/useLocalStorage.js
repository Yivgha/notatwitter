import { useEffect, useState } from 'react';

const getStogareData = (keyName, defaultValue) => {
  const savedItem = localStorage.getItem(keyName);
  const parsedItem = JSON.parse(savedItem);
  return parsedItem || defaultValue;
};

export const useLocalStorage = (keyName, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStogareData(keyName, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [keyName, value]);

  const setNewValue = (newValue) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setValue(newValue);
  };

  return [value, setNewValue];
};
