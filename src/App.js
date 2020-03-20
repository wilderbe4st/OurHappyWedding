import React,{useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import SignUp from './Components/SignUp'
import Wedding from './Components/Wedding/Wedding';
import UserContextProvider,{UserContext} from './Contexts/UserContext'
import firebase from 'firebase/app'
import FirebaseConfig from './FirebaseConfig'
import LogIn from './Components/Login/LogIn';

function App() {
  //initialise firebase
  firebase.initializeApp(FirebaseConfig);


  return (
    <div className="App">
      <UserContextProvider>
      <BrowserRouter>
        <Route exact path="/" ><Home /> </Route>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/demo" component={Wedding}/>
        <Route exact path="/login" component={LogIn}/>
      </BrowserRouter>
      </UserContextProvider>

      

    </div>
  );
}

export default App;
