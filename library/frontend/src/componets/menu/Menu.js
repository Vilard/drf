import React from "react";
import "./menu.css"
// import ToDo from "../ToDo/ToDo";
import {
    // BrowserRouter, 
    NavLink
    // Route,
    // Switch, 
    // Redirect 
} from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu">
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>ToDo</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project'>Project</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users'>users</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu