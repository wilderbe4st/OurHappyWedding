import React,{useEffect,useState} from 'react'
import Sidebar from './Sidebar'
import firebase from '../../FirebaseConfig'

export default function ManageUsers() {
    const initState={
        userList:[],
    }  
    const [users,setUsers]=  useState(initState);
    
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
        setUsers({
            ...users,
            userList:userList});
        console.log(users);
    },[])
    
    
    
    // setUsers(userList);
    

    return (
        <div className="dashboard">
            <Sidebar/>
            <div className="main">
            <div className="container">

                <h1>Registered Users</h1>
                {users.userList.map((user)=>(
                    <div>
                    <ul>
                        <li>email: {user.email}</li>
                        <li>Groom: {user.groom}</li>
                        <li>Bride: {user.bride}</li>
                        <li>number: {user.number}</li>
                        <li>link: {user.link}</li>
                    </ul>
                    <br/>
                    </div>

                ))}
            </div>
            </div>
            
            
        </div>
    )
}
