import { useSelector } from "react-redux"

export const ColorSwitcherRedux = () => {
    const color = useSelector((state) => state.colorSwitcher.value);

    const styleCss = {
        width: "100px",
        height: "100px",
        backgroundColor: color
    }

    return (
        <div style={styleCss}></div>
    )
}