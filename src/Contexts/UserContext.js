import React,{ createContext,Component } from "react";
import firebase from 'firebase/app'
import 'firebase/auth'

export const defaultuser={loggedIn:false,email:"demo"};

export const UserContext= createContext();


export default class UserContextProvider extends Component {
    defaultuser={loggedIn:false,email:"demo"};
    state=defaultuser;

    componentDidMount(state){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                console.log('user logged in');
                this.setState({
                    loggedIn:true,
                    email:user.email,
                    uid:user.uid,
                    name:user.displayName,
            })
            }else{
                console.log('user not logged in');
                this.setState(this.defaultuser); 
            }
        })
    }

    requestLogin=(username,password)=>{
        // console.log(username,password);
        console.log('requestLogin');
        firebase.auth().signInWithEmailAndPassword(username,password)
            .catch(err=>{
                alert(err.message);
            })
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                console.log('userIN');
                this.setState({
                    loggedIn:true,
                    email:user.email,
                    username:user.uid,
                    name:user.displayName,
            })}
        })
        
    }
    requestLogout=()=>{
        firebase.auth().signOut();
        firebase.auth().onAuthStateChanged((user)=>{
           if(!user){
            console.log('user logged out');
            this.setState(this.defaultuser);
        }else{
            console.log('user not logged out');
        }})
    }
    render() {
        return (
            <UserContext.Provider value={{
                ...this.state,
                requestLogin:this.requestLogin,
                requestLogout:this.requestLogout
                }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
