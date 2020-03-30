import React, { useEffect ,useState} from 'react'
import Sidebar from './Sidebar'
import firebase from 'firebase/app'
import 'firebase/auth'

export default function AddUser() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const submitUser=(e)=>{
        e.preventDefault();
        console.log(username,password);
        if(password!==confirmPassword){
            alert("passwords dont match!");
            setpassword("");
            setconfirmPassword("");
            
        }else{
            firebase.auth().createUserWithEmailAndPassword(username,password)
            .then(()=>{
                alert("user created");
            })
            .catch(err=>{
                alert(err);
            })
        
        setusername("");
        setpassword("");
        setconfirmPassword("");

        }
        
    }

    return (
        
        <div className="dashboard">
            <Sidebar/>
            <div className="main row">
            <div className="container">
                <div className="col m12 l6">
                    <h1>Add user</h1>
                    <form onSubmit={submitUser}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={username} onChange={(e)=>setusername(e.target.value)}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={[password]} onChange={(e)=>setpassword(e.target.value)}/>
                    

                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password" value={[confirmPassword]} onChange={(e)=>setconfirmPassword(e.target.value)}/>
                
                    <button type="submit" className="btn-flat" id="button" >Submit</button>
                    
                    </form>
                </div>

            </div>
            
                
                
            </div>
        </div>
        
            
        
    )
}
