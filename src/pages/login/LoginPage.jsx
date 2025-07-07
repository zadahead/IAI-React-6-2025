import { useRef, useState } from "react"
import { Btn } from "../../UIKit/Elements/btn/Btn"

export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        console.log(username, password);
    }

    return (
        <div>
            <h2>Login</h2>
            <input value={username} onChange={handleChangeUsername} placeholder="username" />
            <input value={password} onChange={handleChangePassword} placeholder="password" />
            <Btn onClick={handleLogin}>Login</Btn>
        </div>
    )
}

export const LoginPageUncontrolled = () => {
    const [error, setError] = useState("");

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = () => {
        if (!usernameRef.current.value || !passwordRef.current.value) {
            setError("value cannot be empty")
            return;
        }
        setError("")
        console.log(usernameRef.current.value, passwordRef.current.value);
    }

    return (
        <div>
            <h2>Login page uncontrolled</h2>
            <input ref={usernameRef} placeholder="username" />
            <input ref={passwordRef} placeholder="password" />
            <Btn onClick={handleLogin}>Login</Btn>
            {error && <h2 className="text-[red]">{error}</h2>}
        </div>
    )
}