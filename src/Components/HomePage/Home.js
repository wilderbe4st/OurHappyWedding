import React, { useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContextProvider, {UserContext} from '../../Contexts/UserContext'

import firebase from 'firebase/app'
import 'firebase/auth'

import LogIn from '../Login/LogIn'
import LogOut from '../LogOut'
import NavbarTop from '../Navbar/Navbar'
//css
import './styles.css'
import Carousel from './Carousel2'

const Home =()=> {
    // firebase.initializeApp(firebaseConfig);
    
    const user = useContext(UserContext);
    
    return (
            
             <div>
             <NavbarTop/>
             <Carousel/> 
             </div>
       
        
    )
    
}

export default Home;