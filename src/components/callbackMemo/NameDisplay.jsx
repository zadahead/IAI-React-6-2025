import { memo } from "react";
import { Btn } from "../../UIKit/Elements/btn/Btn";

export const NameDisplay = memo(({ name, onChange }) => {
    console.log("NameDisplay")
    return <div>
        <h2>Name: {name}</h2>
        <Btn onClick={() => onChange("David")}>Change Name</Btn>
    </div>
})