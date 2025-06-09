import { Box } from "../box/Box";
import "./welcome.css";

export const Welcome = ({ children }) => {
    return (
        <div>
            <h1>Hello world</h1>
            {children}
            <Box title="MY title" info="my info">
                <h3>this is the html content</h3>
                <Box title="MY title2" info="my info2" height="500px">
                    <h3>this is the html content!!!</h3>
                </Box>
            </Box>

        </div>
    )
}