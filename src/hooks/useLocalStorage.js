import {useState, useEffect} from 'react';

const useLocalStorage = (key, initialValue) => {

    const getStoredValue = () => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    };

    const [value, setValue] = useState(getStoredValue);


    const setStoredValue = (newValue) => {
        setValue(newValue);
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    };


    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === key) {
                setValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('storage', handleStorageChange);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('storage', handleStorageChange);
            }
        };
    }, [key, initialValue]);

    return [value, setStoredValue];
};

export default useLocalStorage;
