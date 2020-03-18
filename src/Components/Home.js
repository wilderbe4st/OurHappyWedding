import React, { useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContextProvider, {UserContext} from '../Contexts/UserContext'

import firebase from 'firebase/app'
import 'firebase/auth'
import LogIn from './LogIn'
import LogOut from './LogOut'


const Home =()=> {
    // firebase.initializeApp(firebaseConfig);
    
    const user = useContext(UserContext);
    
    return (
        
             <div>
                <h2>Home</h2>
                {!user.loggedIn? (
                    <LogIn />
                 ):( 
                    <LogOut />
                ) 
                } 
             </div>
       
        
    )
    
}

export default Home;