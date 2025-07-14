import { createContext, useState } from "react";

export const ColorSwitcherContext = createContext();

const Provider = ColorSwitcherContext.Provider;

export const ColorSwitcherProvider = ({ children }) => {
    const [color, setColor] = useState("red");

    const handleSwitch = () => {
        setColor(color === "red" ? "green" : "red");
    }

    const value = {
        color,
        handleSwitch
    }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}
