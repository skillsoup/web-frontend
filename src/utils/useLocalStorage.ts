import { useEffect, useState } from "react";

export const useLocalStorage = <T = string>(key: string) => {
  const [value, setValue] = useState<T | null>(() => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data) as T;
    return null;
  });

  useEffect(() => {
    if (value) localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
