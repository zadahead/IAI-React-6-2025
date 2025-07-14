import { useEffect, useState } from "react";
import { getWindowDimensions } from "./utils/dimensions";

export const useWindowDimensions = () => {
    const [dimensions, setDimensions] = useState(getWindowDimensions())

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleResize = () => {
        setDimensions(getWindowDimensions())
    }

    return dimensions;
}