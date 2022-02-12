import { useEffect, useState } from "react";

const getSavedValue = (key, initialValue) => {
    const savedValue = localStorage.getItem(key);
    if(savedValue) return savedValue;

    if(initialValue instanceof Function) return initialValue();
    return initialValue;
}

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue]
}

export default useLocalStorage;