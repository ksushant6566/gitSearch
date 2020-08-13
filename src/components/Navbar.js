import React from 'react';
import styled from 'styled-components';
import loginImg from '../images/login-img.jpeg';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
 
 const { 
   logout,
   user,
 } = useAuth0();
  
 

  return <section className="section">
  <div className="brandBanner-container">
    <img className="brandBanner" src={loginImg} alt="GitSearch"/>
  </div>  
    <Wrapper className = "section-center">
      <img src={user.picture} alt={user.name} />
      <h4>Welcome <strong>{user.nickname.toUpperCase()}</strong></h4> 
      <button className="btn" onClick={() => logout({redirectTo:window.location.origin})}>Logout</button>
    </Wrapper>
  </section>
  
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
