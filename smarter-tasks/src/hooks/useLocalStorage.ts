import { useEffect, useState } from "react";

const getStoredValue =<T>(key: string, defaultValue: T):T => {
  const savedItem = localStorage.getItem(key);
  if (savedItem) {
    return JSON.parse(savedItem);
  }
  return defaultValue;
};


export const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, defaultValue);
  });

  useEffect(() => {
    let temp = JSON.parse(JSON.stringify(value))
    console.log(temp.tasks)
    for(let i=0;i<temp.tasks.length;i++){
      temp.tasks[i].id = i;
    }
    
    localStorage.setItem(key, JSON.stringify(temp));
  }, [key, value]);

  return [value, setValue];
};