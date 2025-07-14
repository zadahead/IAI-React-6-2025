import { useCounter } from "../../hooks/useCounter";
import { Btn } from "../../UIKit/Elements/btn/Btn"

/*
    Custom hook: 

    1) separate logic from render
    2) create a hook function starting with "useXXX" and paste login there
    3) return the values needed for the rendering of the component
    4) call custom hook from component and get the values needed for it to run
    5) move new custom hook to it own
*/


export const CounterHook = () => {
    //logic
    const { count, handleAdd } = useCounter();

    //render
    return (
        <div>
            <h2>Counter Hook, {count}</h2>
            <Btn onClick={handleAdd}>Add</Btn>
        </div>
    )
}