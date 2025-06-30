import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"
import './app.css';

export const App = () => {
    return (
        <div className="app">
            <div className="header">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="*" element={<Navigate to="/" />}></Route>
                </Routes>
            </div>
        </div>
    )
}
