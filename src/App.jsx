import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"
import './app.css';
import { ListPage } from "./pages/list/List";
import { Todos } from "./pages/todos/Todos";
import { Cycle } from "./pages/cycle/Cycle";
import { FetchPage } from "./pages/fetch/FetchPage";
import { LoginPage, LoginPageUncontrolled } from "./pages/login/LoginPage";
import { DropdownPage } from "./pages/dropdown/DropdownPage";

export const App = () => {
    return (
        <div className="app">
            <div className="header">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/list">List</NavLink>
                <NavLink to="/todos">Todos</NavLink>
                <NavLink to="/cycle">Cycle</NavLink>
                <NavLink to="/fetch">Fetch</NavLink>
                <NavLink to="/dropdown">Dropdown</NavLink>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/login" element={<LoginPageUncontrolled />}></Route>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/list" element={<ListPage />}></Route>
                    <Route path="/todos" element={<Todos />}></Route>
                    <Route path="/cycle" element={<Cycle />}></Route>
                    <Route path="/fetch" element={<FetchPage />}></Route>
                    <Route path="/dropdown" element={<DropdownPage />}></Route>
                    <Route path="*" element={<Navigate to="/" />}></Route>
                </Routes>
            </div>
        </div>
    )
}
