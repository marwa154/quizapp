import React from 'react'
import SideBar from "../components/SideBar";
import Categories from "../components/Categories";
import Navbar from '../components/NavBar';
import Quiz from '../components/Quiz';
const Home = () => {
  return (
    <div>
        <Navbar/>
      <SideBar/>
      <Categories/>
    </div>
  )
}

export default Home