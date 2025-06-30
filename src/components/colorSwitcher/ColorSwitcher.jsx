import { useState } from "react"
import { Btn } from "../../UIKit/Elements/btn/Btn"
import "./colorSwitcher.css"

export const ColorSwitcher = () => {
    const [isGreen, setIsGreen] = useState(true);

    const handleSwitch = () => {
        setIsGreen(!isGreen);
    }

    const color = isGreen ? "green" : "";

    return (
        <div>
            <div className={`cube ${color}`}>

            </div>
            <Btn onClick={handleSwitch}>Switch color</Btn>
        </div>
    )
}