import React,{ createContext,Component } from "react";

export const defaultuser={loggedIn:false,email:"demo"};

export const UserContext= createContext();


export default class UserContextProvider extends Component {
    state={
        loggedIn:false,email:"demo2" 
    }
    render() {
        return (
            <UserContext.Provider value={{...this.state}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
