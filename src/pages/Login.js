import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.jpeg';
const Login = () => {
  
  const { loginWithRedirect } = useAuth0();
  
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user"/>
        <h1>GitSearch</h1>
        <button className='btn' onClick={loginWithRedirect}>LOGIN / Sign Up</button>
      </div>
    </Wrapper>
  )
};



const Wrapper = styled.section`
  min-height: 100vh;
  place-items: center;
  background: var(--clr-primary-9);
  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 90vw;
    max-width: 600px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  img {
    width:55%;
    margin:2rem 0px;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
