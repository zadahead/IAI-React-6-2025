import { createContext, useState } from "react";

export const CounterContext = createContext();

const Provider = CounterContext.Provider;

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const value = {
        count,
        handleAdd,
    }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}