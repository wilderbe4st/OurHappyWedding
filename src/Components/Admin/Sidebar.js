import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h3><Link to="/admin"> ADMIN PANEL</Link> </h3>
            <ul>
                <Link to="/admin/manageusers"><li className="btn-flat " id="button">Manage Users  </li></Link>
                <Link to="/admin/adduser"><li className="btn-flat " id="button">Add Users </li></Link>
                <Link to="/admin/manageweddings"><li className="btn-flat " id="button">Manage Wedding </li></Link>
                <Link to="/admin/addweddings"><li className="btn-flat " id="button">Add Wedding </li></Link>
            </ul>
        </div>
    )
}
