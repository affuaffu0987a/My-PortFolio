import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import {FaArrowUp } from "react-icons/fa6";


const GotoTop = () => {
  const[showScroll,UpdateScroll]=useState(false)

    const MoveTop=()=>{
        window.scrollTo({top:0,left:0, behavior: "smooth"})
    }

    const CalculateScroll=()=>{
      let highScroll=200;
      let findScroll= document.body.scrollTop|| document.documentElement.scrollTop;
      if(findScroll>highScroll){
        UpdateScroll(true);
      }
      else{
        UpdateScroll(false)
      }

    }

    useEffect(()=>{
      window.addEventListener("scroll",CalculateScroll);
      return()=>window.removeEventListener("scroll",CalculateScroll)
    },[])

  return (
   <Wrapper>
    {showScroll?<div className="top-btn" onClick={MoveTop}>
       <FaArrowUp className='top-btn--icon'/>
    </div>:null}
   </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
    
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 0%;
      left: 40rem;
    }
  }
  `;

export default GotoTop
