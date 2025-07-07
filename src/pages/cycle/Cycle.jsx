import { useEffect, useState } from "react";

export const Cycle = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    console.log("Cycle");

    useEffect(() => {
        console.log("mounted");
        setTimeout(() => {
            setIsLoading(false);
            setCount(count + 1)
        }, 3000);
    }, []) //trigger on component mount

    console.log("before rendering");

    return (
        <div>
            <h2>Count, {count}</h2>
            {
                isLoading ?
                    <h2>loading...</h2> :
                    <h2>Cycle of a component</h2>
            }
        </div>
    )
}