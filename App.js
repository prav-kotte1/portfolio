import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const NavBar = styled.nav`
  background: #f8f9fa;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
`;

const App = ({ children }) => (
  <Container>
    <NavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavBar>
    {children}
  </Container>
);

export default App;
