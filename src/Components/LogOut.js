import React  from 'react';

const LogIn= ({requestLogout})=> {
    return (
        <div>
                <button onClick={requestLogout}>Log Out</button>

        </div>
    )
}
export default  LogIn;