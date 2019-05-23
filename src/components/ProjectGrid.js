import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Project from './Project';

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
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
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProjectGrid = () => {
  return (
    <Container>
      <Title text='PROJECTS' desc='Click images to view result.' />
      <MyGrid>
        <Project src='https://unsplash.it/270' url='https://unsplash.it/270' />
        <Project src='https://unsplash.it/270' />
        <Project src='https://unsplash.it/270' />
        <Project src='https://unsplash.it/270' />
        <Project src='https://unsplash.it/270' />
        <Project src='https://unsplash.it/270' />
      </MyGrid>
    </Container>
  );
};

export default ProjectGrid;
