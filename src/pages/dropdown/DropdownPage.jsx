import { useState } from "react"
import { Dropdown } from "../../UIKit/Elements/dropdown/Dropdown"

const list = [
    {
        key: 1,
        value: "Mosh"
    },
    {
        key: 2,
        value: "David"
    },
    {
        key: 3,
        value: "Baruch"
    },
    {
        key: 4,
        value: "Ruth"
    }
]
export const DropdownPage = () => {
    const [selected, setSelected] = useState(3);

    return (
        <div>
            <h2>Dropdown page</h2>
            <Dropdown list={list} selected={selected} onChange={setSelected} />
            <h2>iii</h2>
        </div>
    )
}