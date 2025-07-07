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

        return () => { //unmount - cleanup
            document.body.removeEventListener("click", handleClick);
        }
    }, []) //trigger on component mount


    useEffect(() => {
        console.log("useEffect count", count);

        return () => { //before dependency change
            console.log("before count change", count);
        }
    }, [count]) //with a dependency


    useEffect(() => {
        console.log("every update");
    }) //on every update (use wisely)


    const handleAdd = () => {
        setCount(count + 1);
    }


    return (
        <div>
            <h2>Count, {count}</h2>
            <Btn onClick={handleAdd}>Add</Btn>
        </div>
    )
}