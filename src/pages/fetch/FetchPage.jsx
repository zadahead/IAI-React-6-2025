import axios from "axios";
import { useEffect, useState } from "react"

export const FetchPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data);
        setIsLoading(false);
    }

    return (
        <div>
            {
                isLoading ?
                    <h2>loading...</h2> :
                    <h2>fetch page</h2>
            }
        </div>
    )
}