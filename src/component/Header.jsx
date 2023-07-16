import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { styled } from 'styled-components'

const Header = () => {
  const MainHeader=styled.header`
   padding: 0 4.8rem;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme})=>theme.colors.bg};

    .logo{
      height:auto;
      max-width:30%;
    }
  `

  return (
    <>
    <MainHeader>
      <NavLink to="/"><img src="./images/aftabLogo.png" alt="Logo"  className='logo'/></NavLink>
      <Navbar/>
      </MainHeader>
    </>
  )
}

export default Header
