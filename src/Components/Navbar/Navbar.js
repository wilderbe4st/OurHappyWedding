import React, { useContext } from 'react'
import './styles.css'

import LogIn from '../LogIn'
import LogOut from '../LogOut'
import {UserContext} from '../../Contexts/UserContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const user=useContext(UserContext);
    return (
        <div>
        <div className="navbar-fixed">
            <nav className=" z-depth-0 ">
                <div className="nav-wrapper  " id="navbar">
                <a href="#!" className="brand-logo center">Our Happy Wedding</a>
                <ul className="right hide-on-med-and-down">
                    <li> <Link to="/about">About Us</Link> </li>
                    <li onClick={user.requestLogout}>Log Out</li>
                    <li> <Link to="/contact">Contact Us</Link> </li>
                    
                    {!user.loggedIn? (
                            <li><Link to="/login">Log In</Link></li>
                        ):( 
                            <span className="setp">
                            <li> <span className="setp">Hi, {user.email} </span></li>
                            <li onClick={user.requestLogout} className="active"><span className="setp"> Log Out</span> </li>
                           </span>
                            
                            
                        ) } 
                    
                    
                </ul>
                </div>
            </nav>
            </div>
        </div>
    )
}
