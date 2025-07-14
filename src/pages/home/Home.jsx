import { ColorSwitcher } from "../../components/colorSwitcher/ColorSwitcher";
import { ColorSwitcherBox } from "../../components/colorSwitcherContext/ColorSwitchBox";
import { ColorSwitcherHook } from "../../components/colorSwitcherHook.jsx/ColorSwitcherHook";
import { Counter } from "../../components/counter/Counter";
import { CounterAdd } from "../../components/counterContext/CounterAdd";
import { CounterDisplay } from "../../components/counterContext/CounterDisplay";
import { CounterHook } from "../../components/counterHook/CounterHook";
import { LanguagePicker } from "../../components/languagePicker/LanguagePicker";
import { WindowSize } from "../../components/windowSize/WindowSize";


export const Home = () => {


    return (
        <div>
            <h2>This is our homepage</h2>
            <div className="p-4">
                <ColorSwitcherBox />
            </div>
        </div>
    )
}