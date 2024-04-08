import React from 'react'
import Navbar from './Navbar'
import Members from "../miniComponents/Members";
import Qualities from "../miniComponents/Qualities";
import Hero from "../miniComponents/Hero";

const Home = () => {
  return (
    <>
      <Hero/>
      <Members/>
      <Qualities/>
    </>
  )
}

export default Home;

