import { useContext } from "react"
import { Dropdown } from "../../UIKit/Elements/dropdown/Dropdown"
import { ThemeContext } from "../../context/themeContext";

const options = [
    {
        key: "light",
        value: "Light Mode"
    },
    {
        key: "dark",
        value: "Dark Mode"
    },

]
export const ThemSwitcher = () => {
    const { mode, handleChange } = useContext(ThemeContext);



    return (
        <div>
            <Dropdown list={options} selected={mode} onChange={handleChange}></Dropdown>
        </div>
    )
}