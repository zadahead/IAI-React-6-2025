import { useDispatch, useSelector } from "react-redux";
import { ColorSwitcher } from "../../components/colorSwitcher/ColorSwitcher";
import { ColorSwitcherBox } from "../../components/colorSwitcherContext/ColorSwitchBox";
import { ColorSwitcherHook } from "../../components/colorSwitcherHook.jsx/ColorSwitcherHook";
import { ColorSwitcherRedux } from "../../components/colorSwitchRedux/ColorSwitcherRedux";
import { Counter } from "../../components/counter/Counter";
import { CounterAdd } from "../../components/counterContext/CounterAdd";
import { CounterDisplay } from "../../components/counterContext/CounterDisplay";
import { CounterHook } from "../../components/counterHook/CounterHook";
import { CounterRedux } from "../../components/counterRedux/CounterRedux";
import { LanguagePicker } from "../../components/languagePicker/LanguagePicker";
import { WindowSize } from "../../components/windowSize/WindowSize";
import { useEffect } from "react";
import { fetchTodos } from "../../store/slices/todosSlice";


export const Home = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    console.log(todos)

    useEffect(() => {
        dispatch(fetchTodos());
    }, [])

    return (
        <div>
            <h2>This is our homepage</h2>
            <div className="p-4">
                {todos.list.map((item) => <h2 key={item.id}>{item.title}</h2>)}
            </div>
        </div>
    )
}