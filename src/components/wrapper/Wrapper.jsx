import { Btn } from "../../UIKit/Elements/btn/Btn";
import { Icon } from "../../UIKit/Elements/Icon";

export const Wrapper = () => {
    const handleClick = () => {
        console.log("clicked me!");
    }

    return (
        <div>
            <h2>My Wrapper</h2>
            <Btn onClick={handleClick} >Click ME!</Btn>
            <Icon i="home" />

            <Btn onClick={handleClick} i="home" >Click ME!</Btn>
        </div>
    )
}