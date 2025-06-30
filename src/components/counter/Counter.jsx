import { useState } from "react"
import { Btn } from "../../UIKit/Elements/btn/Btn"

export const Counter = () => {
    const [value, setValue] = useState(10);

    const handleAdd = () => {
        setValue(value + 1);
    }

    return (
        <div>
            <h2>count: {value}</h2>
            <Btn onClick={handleAdd}>Add</Btn>
        </div>
    )
}