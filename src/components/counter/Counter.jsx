import { useState } from "react"
import { Btn } from "../../UIKit/Elements/btn/Btn"

export const Counter = () => {
    const [value, setValue] = useState(10);

    const handleAdd = () => {
        setValue(value + 1);
    }

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (isNaN(inputValue)) return;

        setValue(+inputValue);
    }

    return (
        <div className="p-2">
            <h3>count: {value}</h3>
            <input value={value} onChange={handleChange} />
            <Btn onClick={handleAdd}>Add</Btn>
        </div>
    )
}