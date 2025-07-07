import axios from "axios";
import { useEffect, useState } from "react"

export const FetchPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data);
        setIsLoading(false);
    }

    if (isLoading) {
        return <h2>loading...</h2>
    }

    return (
        <ul>
            {users.map(({ id, name, email }) => (
                <li key={id}>{`#${id}) ${name} - ${email}`}</li>
            ))}
        </ul>
    )
}