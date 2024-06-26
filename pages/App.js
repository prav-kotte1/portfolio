import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const NavBar = styled.nav`
  background: #f8f9fa;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
`;

const Content = styled.div`
  padding-top: 4rem; /* To avoid content behind navbar */
`;

const Bubble = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3); /* Semi-transparent white */
  width: 50px;
  height: 50px;
  border-radius: 50%; /* Circular shape */
  pointer-events: none; /* Prevent bubble from intercepting mouse events */
  animation: floatBubble 15s infinite ease-in-out; /* Floating animation */
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);

  @keyframes floatBubble {
    0% {
      transform: translate(-50%, -50%) translateY(0);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-100px);
    }
    100% {
      transform: translate(-50%, -50%) translateY(0);
    }
  }
`;

const App = ({ children }) => {
  useEffect(() => {
    const createBubbles = () => {
      const container = document.querySelector('body');
      for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.top = `${Math.random() * 100}vh`;
        bubble.style.left = `${Math.random() * 100}vw`;
        container.appendChild(bubble);
      }
    };
    createBubbles();
  }, []);

  return (
    <Container>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavBar>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default App;
