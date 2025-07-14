import { useCallback, useMemo, useState } from "react"
import { NameDisplay } from "./NameDisplay"
import { Btn } from "../../UIKit/Elements/btn/Btn";

export const Parent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Mosh");

    const handleChange = useCallback((newName) => {
        setName(newName);
    }, [])

    const calcResults = () => {
        for (let i = 0; i < 10000; i++) {
            console.log("aa");
        }
        return 1;
    }
    const results = useMemo(() => calcResults(), [name]);
    console.log(results);

    return (
        <div>
            <h2>Parent, {count}</h2>
            <Btn onClick={() => setCount(count + 1)}>All</Btn>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <NameDisplay name={name} onChange={handleChange} />
        </div>
    )
}