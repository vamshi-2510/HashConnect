import React from 'react'
import './Dashboard.css'
import BottomNavbar from '../Navbar/BottomNavbar'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className='DashBoardBody'>
            <BottomNavbar />
            <Outlet/>
        </div>
    )
}

export default Dashboard