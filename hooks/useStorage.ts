 import { useCallback, useState, useEffect } from "react";

    export function useLocalStorage<T>(
      key: string,
      defaultValue: T | (() => T)
    ): [
      T | undefined,
      React.Dispatch<React.SetStateAction<T | undefined>>,
      () => void
    ] {
      return useStorage(key, defaultValue, window.localStorage);
    }
    
    export function useSessionStorage<T>(
      key: string,
      defaultValue: T | (() => T)
    ): [
      T | undefined,
      React.Dispatch<React.SetStateAction<T | undefined>>,
      () => void
    ] {
      return useStorage(key, defaultValue, window.sessionStorage);
    }
    
    function useStorage<T>(
      key: string,
      defaultValue: T | (() => T),
      storageObject: Storage
    ): [
      T | undefined,
      React.Dispatch<React.SetStateAction<T | undefined>>,
      () => void
    ] {
      const [value, setValue] = useState<T | undefined>(() => {
        const jsonValue = storageObject.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);
    
        if (typeof defaultValue === "function") {
          return (defaultValue as () => T)();
        } else {
          return defaultValue;
        }
      });
    
      useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key);
        storageObject.setItem(key, JSON.stringify(value));
      }, [key, value, storageObject]);
    
      const remove = useCallback(() => {
        setValue(undefined);
      }, []);
    
      return [value, setValue, remove];
    }
    