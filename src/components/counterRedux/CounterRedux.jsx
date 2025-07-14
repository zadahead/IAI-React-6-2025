import { useDispatch, useSelector } from "react-redux"
import { Btn } from "../../UIKit/Elements/btn/Btn"
import { handleAdd } from "../../store/slices/counterSlice";

export const CounterRedux = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    const handleCounterAdd = () => {
        dispatch(handleAdd())
    }

    return (
        <div>
            <h2>count, {count}</h2>
            <Btn onClick={handleCounterAdd}>Add</Btn>
        </div>
    )
}