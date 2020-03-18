import React,{useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp'
import Wedding from './Components/Wedding/Wedding';
import UserContextProvider,{UserContext} from './Contexts/UserContext'
import firebase from 'firebase/app'
import FirebaseConfig from './FirebaseConfig'

function App() {
  //initialise firebase
  firebase.initializeApp(FirebaseConfig);


  return (
    <div className="App">
      <h1>Hope it works </h1>
      <UserContextProvider>
      <BrowserRouter>
        <Route exact path="/" ><Home /> </Route>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/demo" component={Wedding}/>
      </BrowserRouter>
      </UserContextProvider>
      
    </div>
  );
}

export default App;
