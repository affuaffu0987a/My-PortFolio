import React from "react";
import { styled } from "styled-components";
import { Button } from "./component/styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.svg" alt="" />
      <Button className="btn">
        <NavLink to='/'>Go Back</NavLink>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding:9rem 0;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

.btn{
    font-size:1.9rem;
    margin-top:1rem;
}
`;

export default Error;
