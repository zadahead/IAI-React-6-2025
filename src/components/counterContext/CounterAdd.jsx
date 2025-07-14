import { useContext } from "react"
import { Btn } from "../../UIKit/Elements/btn/Btn"
import { CounterContext } from "../../context/counterContext"

export const CounterAdd = () => {
    const { handleAdd } = useContext(CounterContext);

    return (
        <div>
            <Btn onClick={handleAdd}>Add</Btn>
        </div>
    )
}