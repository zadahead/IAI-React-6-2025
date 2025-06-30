import { ColorSwitcher } from "../../components/colorSwitcher/ColorSwitcher";
import { Counter } from "../../components/counter/Counter";
import { LanguagePicker } from "../../components/languagePicker/LanguagePicker";
import { Box } from "../../components/box/Box";
import { useState } from "react";

export const Home = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <h2>This is our homepage</h2>
            <Box>
                <Counter value={value} setValue={setValue} />
            </Box>
        </div>
    )
}