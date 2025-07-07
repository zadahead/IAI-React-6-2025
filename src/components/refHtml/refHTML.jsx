import { useEffect, useRef } from "react"

export const RefHTML = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.style.backgroundColor = "red";
    }, [])

    return (
        <div>
            <h2>Ref HTML</h2>
            <input ref={inputRef} />
        </div>
    )
}

//controlled
//un-controlled



