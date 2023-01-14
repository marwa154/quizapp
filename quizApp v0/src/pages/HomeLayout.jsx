import React from 'react'
import Navbar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <Navbar/>
   <SideBar/>
   <Outlet/>
    </>
  )
}

export default HomeLayout
