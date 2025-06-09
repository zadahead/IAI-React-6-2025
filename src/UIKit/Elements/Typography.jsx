export const Text = ({ children, size = 18 }) => {
    const styleCss = {
        fontSize: size + "px"
    }

    return <p style={styleCss}>{children}</p>
}

export const Header = ({ children }) => {
    return <h2>{children}</h2>
}