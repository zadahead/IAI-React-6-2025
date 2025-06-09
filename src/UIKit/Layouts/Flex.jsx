export const Flex = ({ children }) => {
    return (
        <div className="flex gap-2 items-center">
            {children}
        </div>
    )
}

export const FlexCol = ({ children }) => {
    return (
        <div className="flex gap-2 justify-between">
            {children}
        </div>
    )
}