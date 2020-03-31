import React, { useContext } from 'react'
import './styles.css'
import {UserContext} from '../../Contexts/UserContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const navIcon=()=>{
        const  navLinks=document.querySelector(".nav-links");
        navLinks.classList.toggle("open");

    }
    const user=useContext(UserContext);
    return (
        <div className="nav-bar">
           <ul className="nav-links">
               <l1 className="nav-link"><Link href="#">HOME</Link> </l1>
               <l1 className="nav-link"><Link href="#">DEMO</Link> </l1>
               <l1 className="nav-link"><Link href="#">BUY</Link> </l1>
               <l1 className="nav-link"><Link href="#">CONTACT</Link> </l1>
               {!user.loggedIn? (
                <li className="nav-link" style={{width:'unset'}}><Link to="/login">LOG IN</Link></li>
                ):(
                <li onClick={user.requestLogout} className="nav-link"><Link to="/#">LOG OUT</Link></li>
                    
                    
                 ) } 
           </ul>
           <div className="nav-icon" onClick={navIcon}><img src={require('../../resources/icons/nav.png')}alt="-"/> </div>
            
        </div>
    )
}



// {!user.loggedIn? (
//     <li><Link to="/login">Log In</Link></li>
// ):( 
//     <span className="">
//     <li> <span className="">Hi, {user.email} </span></li>
//     <li onClick={user.requestLogout} className="active"><span className="setp"> Log Out</span> </li>
//    </span>
    
    
// ) } 