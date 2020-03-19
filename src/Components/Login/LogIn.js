import React ,{useState, useEffect,useContext} from 'react';
import {UserContext} from '../../Contexts/UserContext';
import { Redirect } from 'react-router';
import './styles.css'

const LogIn= (props)=> {
    const [username,setUsername] = useState('test@test.com');
    const [password,setPassword] = useState('password');
    const Login=(username,password)=>{
        user.requestLogin(username,password);
        setUsername('');
        setPassword('');
        console.log(props);
    }
    const user = useContext(UserContext);
    return (
            
            
                <div className="continer">
                <div class="background"></div>
                {user.loggedIn ? <Redirect to="/" /> :
                <div className="container ">

                    <div className="loginBox">
                    <h5 className="loginTitle">Login To Your Account</h5>
                    <label for="username">Email</label>
                    <input id="username" type="text" onChange={e=>{setUsername(e.target.value)}} value={username}/>
                    
                    <label for="password">Password</label>
                    <input id="password" type="password" onChange={e=>{setPassword(e.target.value)}} value={password} />
                    
                    <button onClick={()=>{Login(username,password)}} className="waves-effect waves-amber btn-flat" id="loginButton">Log In</button>
                    </div>
                </div>
                }
                
                 </div>
            


            
        
        
    )
}
export default  LogIn;