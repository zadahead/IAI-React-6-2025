import { useState } from "react";
import { ColorSwitcher } from "../../components/colorSwitcher/ColorSwitcher";
import { Counter } from "../../components/counter/Counter";
import { LanguagePicker } from "../../components/languagePicker/LanguagePicker";

export const Home = () => {
    const [value, setValue] = useState(10);

    const counterProps = {
        value,
        setValue
    }
    return (
        <div>
            <h2>This is our homepage</h2>
            <Counter {...counterProps} />
            <Counter {...counterProps} />
            <Counter {...counterProps} />
        </div>
    )
}