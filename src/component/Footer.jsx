import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import { styled } from "styled-components";
import { FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Wrapper>
      <div className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to="/contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <footer>
        <div className="container grid grid-three-column2">
          <div className="footer-about">
            <h3>Aftab Khan</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore!
            </p>
          </div>
          <div className="footer-socialicon">
            <h3>Follow Me</h3>
            <div className="icons">
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="Mobile-No">
          <div className="call-icon">
          <FaPhone className="mobile-icon"/>
          <span >Call Me</span>
          </div>
          <h3>9076488289</h3>
          </div>
        </div>
        <hr />
        <div className=" container grid grid-two-column">
        <div className="copyright">
        <p>
        @{new Date().getFullYear()} Aftab Khan All Rights Reserved
        </p>
        </div>
        <div className="security">
          <p>PRIVACY POLICY</p>
          <p>TERM & CONDITION</p>
        </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-redius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3,
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-socialicon {
      display: flex;
      flex-direction: column;

      .icons{
        display:flex;
        gap:2rem;
        margin-top:2rem;

        .icon{
          color:${({theme})=>theme.colors.white};
          font-size: 2.5rem;
          cursor:pointer;
        }
      }
    }
    
    .call-icon{
      font-size: 1.8rem;
      font-weight: 400;
      color:${({theme})=>theme.colors.white};
      margin-bottom:1.5rem;
    }

    hr{
      height: .3rem;
      color:${({theme})=>theme.colors.white};
      width:100%;
      margin:auto;
      margin:3rem 0 3rem 0;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;
export default Footer;
