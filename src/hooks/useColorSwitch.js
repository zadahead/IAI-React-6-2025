import { useState } from "react";

export const useColorSwitch = () => {
    const [color, setColor] = useState("green");

    const handleSwitch = () => {
        setColor(color == "red" ? "green" : "red")
    }

    return {
        color,
        handleSwitch
    }
}