import { useState } from "react"

const options = {
    "": "--pick a language--",
    hebrew: "Hebrew",
    english: "English",
    french: "French"
}

export const LanguagePicker = () => {
    const [selected, setSelected] = useState("hebrew");

    const handleChange = (e) => {
        setSelected(e.target.value);
    }


    const value = selected ? options[selected] : "Pick a lang";

    return (
        <div>
            <h3>{value}</h3>
            <select value={selected} onChange={handleChange}>
                {
                    Object.entries(options).map(([key, value], index) => (
                        <option key={index} value={key}>{value}</option>
                    ))
                }
            </select>
        </div>
    )
}