import React, { useContext, useEffect } from 'react'
import HeroSection from './HeroSection';
import {  useGlobalContext } from '../context';
import Contact from './Contact';

const Home = () => {
  // const data={
  //   name:"Aftab Khan",
  //   image:"./images/hero.svg"
  // }

  const{updateHome}=useGlobalContext();
  useEffect(()=>{
    updateHome()
  },[])
  return (
    <>
     <HeroSection/>
     <Contact/>
    </>
  )
}

export default Home;
