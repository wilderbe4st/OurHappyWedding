import React from 'react'
import Sidebar from './Sidebar'
import './styles.css'
import { BrowserRouter, Route } from 'react-router-dom'
import AddUser from './AddUser'


export default function Dashboard() {
    return (
        
        <div className="dashboard">
            <Sidebar/>
            <div className="main">
            
            </div>
            
            {/* <BrowserRouter>
                <Route exact path="/admin/adduser" component={AddUser}/>
            </BrowserRouter> */}
        </div>
    )
}
