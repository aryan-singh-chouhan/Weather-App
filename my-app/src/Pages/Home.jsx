import React from 'react';
import Navbar from '../Components/NavBar'
import MainInfo from '../Components/MainInfo';

const Home = () => {

  return (
    <div className="min-h-screen bg-[#0A0F2D] min-h-screen">
      <Navbar/>
      <MainInfo/>
    </div>
  )
}

export default Home