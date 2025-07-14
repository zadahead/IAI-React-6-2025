import { useWindowDimensions } from "../../hooks/windowDimensions/useWindowDimension";
import { Btn } from "../../UIKit/Elements/btn/Btn";


export const WindowSize = () => {
    //logic
    const dimensions = useWindowDimensions();

    //render
    return (
        <div>
            <h2>width: {dimensions.innerWidth}px</h2>
            <h2>height: {dimensions.innerHeight}px</h2>
            {dimensions.innerWidth > 600 && <Btn>Click</Btn>}
        </div>
    )
}