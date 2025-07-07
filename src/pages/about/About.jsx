import { RefExample } from "../../components/refExample/RefExample"
import { RefHTML } from "../../components/refHtml/refHTML"

export const About = () => {
    return (
        <div>
            <h2>This is our about page</h2>
            <input />
            <div className="mt-2">
                <RefHTML />
                <RefHTML />
                <RefHTML />
            </div>
        </div>
    )
}