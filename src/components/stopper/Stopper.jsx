import { useEffect, useState } from "react"
import { Btn } from "../../UIKit/Elements/btn/Btn";

export const Stopper = () => {
    const [seconds, setSeconds] = useState(0);
    const [isStopped, setIsStopped] = useState(false);
    console.log("state:", seconds, isStopped);

    useEffect(() => {
        if (isStopped) return;

        const timer = setTimeout(() => {
            setSeconds(seconds + 1);
        }, 1000)

        return () => {
            clearTimeout(timer);
        }
    }, [seconds, isStopped])

    const handleStart = () => setIsStopped(false);
    const handleStop = () => setIsStopped(true);
    const handleReset = () => {
        setSeconds(0);
        handleStop();
    }

    return (
        <div>
            <h2>Stopper: {seconds} seconds</h2>
            <div className="flex gap-1 mt-2">
                <Btn onClick={handleReset}>Reset</Btn>
                <Btn onClick={handleStop}>Stop</Btn>
                <Btn onClick={handleStart}>Start</Btn>
            </div>
        </div>
    )
}