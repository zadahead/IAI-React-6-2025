import { ColorSwitcher } from "../../components/colorSwitcher/ColorSwitcher";
import { Counter } from "../../components/counter/Counter";
import { CounterHook } from "../../components/counterHook/CounterHook";
import { LanguagePicker } from "../../components/languagePicker/LanguagePicker";


export const Home = () => {

    return (
        <div>
            <h2>This is our homepage</h2>
            <CounterHook />
        </div>
    )
}