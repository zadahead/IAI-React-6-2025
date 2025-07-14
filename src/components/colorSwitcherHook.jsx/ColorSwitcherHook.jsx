import { Btn } from "../../UIKit/Elements/btn/Btn";
import { useColorSwitch } from "../../hooks/useColorSwitch";

export const ColorSwitcherHook = () => {
    //logic
    const { color, handleSwitch } = useColorSwitch();

    const styleCss = {
        width: "100px",
        height: "100px",
        backgroundColor: color
    }

    return (
        <div>
            <div style={styleCss}>

            </div>
            <Btn onClick={handleSwitch}>Switch</Btn>
        </div>
    )
}