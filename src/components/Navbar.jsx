import { NavLink } from "react-router-dom";
import './Navbar.css';
import {useAuth} from "../store/auth";

export const Navbar = () =>{
    const {isLoggedIn} = useAuth();
    return (
        <>
            <div className="container">
                <div className="brand-logo">
                    <a href="/">VIP Technologies</a>
                </div>
                <ul>
                   <li><NavLink to="/">Home</NavLink></li> 
                   <li><NavLink to="/about">About</NavLink></li>
                   <li><NavLink to="/contact">Contact</NavLink></li>
                   <li><NavLink to="/service">Service</NavLink></li>
                   {isLoggedIn ? (
                        <li><NavLink to="/Logout">Logout</NavLink></li>
                    ) : (
                        <>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        </>
                  )}
                   
                </ul>
            </div>
        </>
    );
};


