import React from 'react'
import Navbar from '../Navbar/Navbar'
import BottomNavbar from '../Navbar/BottomNavbar'
import Posts from './Posts'
import { Outlet } from 'react-router-dom'
import './Home.css'
import { useSelector } from 'react-redux'
const Home = () => {
  
  return (
    <div className="HomeBody" >
      <Navbar/>
      <Posts/>
    </div>
   
  )
}

export default Home