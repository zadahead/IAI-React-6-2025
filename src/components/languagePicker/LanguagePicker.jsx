import { useState } from "react"

export const LanguagePicker = () => {
    const [selected, setSelected] = useState("hebrew");

    const handleChange = (e) => {
        setSelected(e.target.value);
    }

    return (
        <div>
            <h3>{selected}</h3>
            <select value={selected} onChange={handleChange}>
                <option value="">--pick a language--</option>
                <option value="hebrew">Hebrew</option>
                <option value="english">English</option>
                <option value="french">French</option>
            </select>
        </div>
    )
}