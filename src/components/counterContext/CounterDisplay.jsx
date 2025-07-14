import { useContext } from "react"
import { CounterContext } from "../../context/counterContext";

export const CounterDisplay = () => {
    const { count } = useContext(CounterContext);

    return (
        <div>
            <h2>Count, {count}</h2>
        </div>
    )
}