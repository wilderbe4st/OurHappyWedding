import React,{useEffect,useState} from 'react'
import Sidebar from './Sidebar'
import firebase from '../../FirebaseConfig'

export default function ManageUsers() {
    
    const [users,setUsers]=  useState([]);
    
    var userList =[];

    const db = firebase.firestore();
    let userdb=db.collection('users');

    useEffect(()=>{
        let query = userdb.get()
        .then((snapshot)=>{
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
                }  
            
                snapshot.forEach(doc => {
                    // console.log(doc.id, '=>', doc.data());
                    userList.push(doc.data());
                    // console.log(userList);
                });
        })
        setUsers(userList);
        console.log(users);
    },[])
    
    
    
    // setUsers(userList);
    

    return (
        <div className="dashboard">
            <Sidebar/>
            <div className="main">
            <div className="container">

                <h1>ManageUser</h1>
                {users.forEach((user)=>{
                console.log(user)
                    return(
                        <div>
                        <p>Usrs</p>
                        <p>{user.bride} </p>
                        </div>
                    )
                })}
            </div>
            </div>
            
            
        </div>
    )
}
