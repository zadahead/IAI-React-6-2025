import { useEffect, useRef, useState } from "react"
import { Btn } from "../../UIKit/Elements/btn/Btn";


export const RefExample = () => {
    const [count, setCount] = useState(0);
    const isMountedRef = useRef(false);

    const countRef = useRef();
    countRef.current = count;

    useEffect(() => {
        setTimeout(() => {
            setCount(countRef.current + 1);
        }, 5000);
    }, [])

    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }

        console.log("COUNT");
    }, [count])

    const handleAdd = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Ref example, count: {count}</h2>
            <Btn onClick={handleAdd}>Add</Btn>
        </div>
    )
}