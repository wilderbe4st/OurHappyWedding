import React,{useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import SignUp from './Components/SignUp'
import Wedding from './Components/Wedding/Wedding';
import UserContextProvider,{UserContext} from './Contexts/UserContext'
import firebase from 'firebase/app'
import FirebaseConfig from './FirebaseConfig'
import LogIn from './Components/Login/LogIn';
import Dashboard from './Components/Admin/Dashboard';
import AddUser from './Components/Admin/AddUser';
import './styles.css'
import ManageUsers from './Components/Admin/ManageUsers';
import Home1 from './Components/HomePage/Home1'

function App() {
  //initialise firebase
  // firebase.initializeApp(FirebaseConfig);


  return (
    <div className="App">
      <UserContextProvider>
      <BrowserRouter>
        <Route exact path="/"><Home1/></Route>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/demo" component={Wedding}/>
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/admin" component={Dashboard}/>
        <Route exact path="/admin/adduser" component={AddUser}/>
        <Route exact path="/admin/manageusers" component={ManageUsers}/>
        <Route exact path="/u/:wlink" component={Wedding}/>
      </BrowserRouter>
      </UserContextProvider>

      

    </div>
  );
}

export default App;
