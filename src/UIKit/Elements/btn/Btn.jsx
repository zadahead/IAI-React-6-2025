import { Icon } from "../Icon";
import "./btn.css";

export const Btn = ({ onClick, children, i }) => {

    return (
        <button className="btn" onClick={onClick}>
            {children}
            {i && <Icon i={i} />}
        </button>
    )
}