import { useEffect, useState } from "react";
import { Btn } from "../../UIKit/Elements/btn/Btn";

export const Cycle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("component mounted");
        const handleClick = () => {
            //console.log("click")
        }

        document.body.addEventListener("click", handleClick);

        return () => {
            document.body.removeEventListener("click", handleClick);
        }
    }, []) //trigger on component mount


    useEffect(() => {
        console.log("count has changed");
    }, [count])


    return (
        <div>
            <h2>Count, {count}</h2>
            <Btn onClick={() => setCount(count + 1)}>Add</Btn>
        </div>
    )
}