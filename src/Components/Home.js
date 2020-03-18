import React, { useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContextProvider, {UserContext} from '../Contexts/UserContext'

import firebase from 'firebase/app'
import 'firebase/auth'
import LogIn from './LogIn'
import LogOut from './LogOut'


const Home =()=> {
    // firebase.initializeApp(firebaseConfig);
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                // console.log(user);
                // userLoggedIn();
                console.log('user signed in');
            }else {
                // toggleLogin();
                console.log('user signed out');
            }
         })
    })
    const user = useContext(UserContext);
    console.log('www',user);

    const requestLogin=(username,password)=>{
        // console.log(username,password);
        console.log('requestLogin');
        firebase.auth().signInWithEmailAndPassword(username,password)
            .catch(err=>{
                alert(err.message);
            })
    }
    const requestLogout=()=>{
        firebase.auth().signOut();
    }
    return (
        
             <div>
                <h2>Home</h2>
                {!user.loggedIn? (
                    <LogIn requestLogin={requestLogin}/>
                 ):( 
                    <LogOut requestLogout={requestLogout}/>
                ) 
                } 
            
                    <LogOut requestLogout={requestLogout}/>
             </div>
       
        
    )
    
}

export default Home;