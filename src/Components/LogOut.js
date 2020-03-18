import React  from 'react';
import { UserContext } from '../Contexts/UserContext';

const LogIn= ()=> {
    
    return (
        <UserContext.Consumer>{(context)=>{
            return(
                <div>
                    <button onClick={context.requestLogout}>Log Out</button>

                </div> 
            )
        }}
        
        </UserContext.Consumer>
    )
}
export default  LogIn;