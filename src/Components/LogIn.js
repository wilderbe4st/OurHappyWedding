import React ,{useState, useEffect,useContext} from 'react';
import {UserContext} from '../Contexts/UserContext';

const LogIn= ({requestLogin})=> {
    const [username,setUsername] = useState('test@test.com');
    const [password,setPassword] = useState('password');
    const Login=(username,password)=>{
        requestLogin(username,password);
        setUsername('');
        setPassword('');
    }
    // const user = useContext(UserContext);
    // console.log('www',user);
    return (
        <UserContext.Consumer>{(context)=>{
            console.log(context);
            return(
                <div>
                    <h5> Log IN</h5>
                    <input type="text" onChange={e=>{setUsername(e.target.value)}} value={username}/>
                    <input type="password" onChange={e=>{setPassword(e.target.value)}} value={password} />
                    <button onClick={()=>{Login(username,password)}}>Log In</button>
                 </div>
            )
        }}

        </UserContext.Consumer>
        
    )
}
export default  LogIn;