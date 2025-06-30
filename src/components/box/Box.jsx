import { useState } from "react";
import { Btn } from "../../UIKit/Elements/btn/Btn";
import "./box.css";

export const Box = ({ title, info, children, height = "100px" }) => {
    const [isShow, setIsShow] = useState(true);

    const handleToggle = () => {
        setIsShow(!isShow);
    }

    const styleCss = {
        height
    }

    return (
        <div className="box">
            <h1>{title}</h1>
            <h2>{info}</h2>
            <div className="content" style={styleCss}>
                {isShow && children}
            </div>
            <Btn onClick={handleToggle}>Hide/Show</Btn>
        </div>
    )
}