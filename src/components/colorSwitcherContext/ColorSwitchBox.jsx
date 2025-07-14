import { useContext } from "react"
import { ColorSwitcherContext } from "../../context/colorSwitcherContext"

export const ColorSwitcherBox = () => {

    const { color } = useContext(ColorSwitcherContext)

    const styleCss = {
        width: "100px",
        height: "100px",
        backgroundColor: color
    }

    return (
        <div style={styleCss}>

        </div>
    )
}