import { useEffect, useState } from "react"


const useLocalStoage = (storageKey, defaultValue) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue);


        useEffect(() => {
            localStorage.setItem(storageKey, JSON.stringify(value));
        }, [ value, storageKey]);

        return [value, setValue];
}

export default useLocalStoage;