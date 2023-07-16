import React, { useContext, useEffect } from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from '../context'


const About = () => {
  // const data={
  //   name:"Aftab khan Front-End Dev",
  //   image:"./images/about1.svg"
  // }
  const{updateAbout}=useGlobalContext();

  useEffect(()=>{
    updateAbout();
  },[])

  return (
    <div>
      <HeroSection/>
    </div>
  )
}

export default About
