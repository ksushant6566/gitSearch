import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>sorry, the page does not exist</h3>
      <Link to="/" className="btn">back home</Link>
    </Wrapper>
  )
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-9);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5 rem;
  }
`;
export default Error;
