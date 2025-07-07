import axios from "axios";
import { useEffect } from "react"

export const FetchPage = () => {

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data);
    }

    return (
        <div>
            <h2>fetch page</h2>
        </div>
    )
}