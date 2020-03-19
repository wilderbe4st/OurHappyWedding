import React ,{useState, useEffect,useContext} from 'react';
import {UserContext} from '../Contexts/UserContext';
import { Redirect } from 'react-router';

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
                {user.loggedIn ? <Redirect to="/" /> :
                <div>
                    <h5> Log IN</h5>
                    <input type="text" onChange={e=>{setUsername(e.target.value)}} value={username}/>
                    <input type="password" onChange={e=>{setPassword(e.target.value)}} value={password} />
                    <button onClick={()=>{Login(username,password)}}>Log In</button>
                </div>
                }
                 </div>


            
        
        
    )
}
export default  LogIn;