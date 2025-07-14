import { createContext, useState } from "react";

export const ThemeContext = createContext();

const Provider = ThemeContext.Provider;

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    const handleChange = (mode) => {
        setMode(mode);
    }

    const value = {
        mode,
        handleChange
    }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}