import React  from 'react';
import { UserContext } from '../Contexts/UserContext';

const LogIn= ()=> {
    
    return (
        <UserContext.Consumer>{(context)=>{
            return(
                <div>
                    <span onClick={context.requestLogout}>Log Out</span>

                </div> 
            )
        }}
        
        </UserContext.Consumer>
    )
}
export default  LogIn;