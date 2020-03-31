import React, { useEffect ,useState} from 'react'
import Sidebar from './Sidebar';
import firestore from 'firestore';
// import * as firebase from 'firebase';
import 'firebase/firestore';
import firebase from '../../FirebaseConfig';

export default function AddUser() {
    
    const initState={
        email:"",
        password:"",
        confirmPassword:"",
        bride:"",
        groom:"",
        number:"",
        link:""
    }

    
    const [user,setUser]=useState(initState)

    const db=firebase.firestore();
    

    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const submitUser=(e)=>{
        e.preventDefault();
        var link=user.groom+"and"+user.bride;
        setUser({
            ...user,
            link:link
        })
        console.log(user.email,user.password);
        if(user.password!==user.confirmPassword){
            alert("passwords dont match!");
            setUser({
                ...user,
                password:"",
                confirmPassword:""
            })
            
        }else{
            //adding user to authenticated users
            firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
            .then((u)=>{
                //if user created
                console.log(u);
                alert("user created");
                //Deleting value of passwords before upoad
                setUser({
                    ...user,
                    password:".",
                    confirmPassword:".",
                })
                //adding to database, key set to uid
                db.collection("users").doc(u.user.uid).set(user)
                    .then(()=>console.log("user added to users"))
                    .catch(err=>alert(err));
            })
            .catch(err=>{
                alert(err);
            })
        
        setUser(initState);

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
                    <input type="email" name="email" value={user.email} onChange={handleChange}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange}/>
                    

                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
                
                    <label htmlFor="groom">Name of Groom</label>
                    <input type="text" name="groom" value={user.groom} onChange={handleChange}/>

                    <label htmlFor="bride">Name of Bride</label>
                    <input type="text" name="bride" value={user.bride} onChange={handleChange}/>

                    <label htmlFor="number">Mobile Number</label>
                    <input type="text" name="number" value={user.number} onChange={handleChange}/>
                    <button type="submit" className="btn-flat" id="button" >Submit</button>
                    
                    </form>
                </div>

            </div>
            
                
                
            </div>
        </div>
        
            
        
    )
}
