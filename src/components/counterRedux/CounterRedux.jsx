import { useDispatch } from "react-redux"
import { Btn } from "../../UIKit/Elements/btn/Btn"
import { handleAdd } from "../../store/slices/counterSlice";

export const CounterRedux = () => {
    const dispatch = useDispatch();

    const handleCounterAdd = () => {
        dispatch(handleAdd())
    }

    return (
        <div>
            <Btn onClick={handleCounterAdd}>Add</Btn>
        </div>
    )
}