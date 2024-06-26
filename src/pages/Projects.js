import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
`;

const Projects = () => (
  <ProjectsContainer>
    <h1>Projects</h1>
    <ul>
      <li>Project 1</li>
      <li>Project 2</li>
      <li>Project 3</li>
    </ul>
  </ProjectsContainer>
);

export default Projects;
