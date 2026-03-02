import { createContext, useState } from "react";
import getRandomExcuse from "../utils/getRandomExcuse";

export const ExcuseContext = createContext();

export const ExcuseProvider = ({ children }) => {
    const [lastExcuse, setLastExcuse] = useState([]);

    const generateExcuses = () => {
        console.log('Generating excuse...')
        const currentExcuse = getRandomExcuse();
        setLastExcuse(prev => [...prev, currentExcuse]);
    }

    return (
        <ExcuseContext.Provider value={{ lastExcuse, generateExcuses }}>
            {children}
        </ExcuseContext.Provider>
    )
}