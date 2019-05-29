import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Project from './Project';

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 1rem 2rem;
`;

const MyGrid = styled.section`
  /* Mobile */
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  flex: 1;

  /* Anything below desktop size*/
  @media screen AND (max-width: 900px) {
  }

  /* Tablet */
  @media screen AND (min-width: 600px) AND (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  /* Desktop */
  @media screen AND (min-width: 901px) {
    grid-template-columns: auto auto auto;
  }
`;

const ProjectGrid = () => {
  return (
    <Container>
      <Title
        text='PROJECTS'
        desc='Click images to view result.'
        sizeSensitive='true'
      />
      <MyGrid>
        <Project
          title='Documents from NTNU'
          image='./img/projects/ntnu.png'
          site='https://github.com/Lekesoldat/NTNU'
          code='https://github.com/Lekesoldat/NTNU'
        />
        <Project
          title='Sewer - a nagging tracker.'
          image='./img/projects/sewer.png'
          site='https://sewer.netlify.com'
          code='https://github.com/lekesoldat/sewer'
        />
        <Project
          title='DroneLOAN'
          image='./img/projects/droneloan.png'
          site='http://folk.ntnu.no/magnulho/Courses/IT2085/Project/Final_Delivery/'
          code='https://github.com/Lekesoldat/DroneLOAN'
        />
      </MyGrid>
    </Container>
  );
};

export default ProjectGrid;
