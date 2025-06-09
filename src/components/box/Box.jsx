import "./box.css";

export const Box = ({ title, info, children, height = "auto" }) => {

    const styleCss = {
        height
    }

    return (
        <div className="">
            <h1>{title}</h1>
            <h2>{info}</h2>
            <div className="content" style={styleCss}>
                {children}
            </div>
        </div>
    )
}