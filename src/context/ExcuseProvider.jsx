import { useState } from "react";
import { ExcuseContext } from "./ExcuseContext";
import getRandomExcuse from "../utils/getRandomExcuse";

export const ExcuseProvider = ({ children }) => {
    const [lastExcuse, setLastExcuse] = useState([]);

    const generateExcuses = () => {
        const currentExcuse = getRandomExcuse();
        setLastExcuse(prev => [...prev, currentExcuse]);
    }

    return (
        <ExcuseContext.Provider value={{ lastExcuse, generateExcuses }}>
            {children}
        </ExcuseContext.Provider>
    )
}
