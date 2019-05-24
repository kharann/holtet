import React from 'react';
import styled from 'styled-components';
import Title from './Title.js';

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: auto;
  width: 150px;
  /* transition: 0.5s filter; */

  &:hover {
    /* filter: blur(0.2rem); */
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Bio = styled.div`
  /* Mobile */
  width: 20rem;
  padding: 2rem 0 2rem 0;
  text-align: center;

  /* Anything below desktop size*/
  @media screen AND (max-width: 900px) {
  }

  /* Tablet */
  @media screen AND (min-width: 600px) AND (max-width: 900px) {
    width: 43rem;
  }

  /* Desktop */
  @media screen AND (min-width: 901px) {
    width: 55rem;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title text='ABOUT' />
      <Avatar
        src='./img/me.png'
        onClick={() =>
          window.open('https://www.instagram.com/magnusandmyggen', '_blank')
        }
      />
      <Bio>
        Quarter warp lateen sail cackle fruit Pirate Round topmast spirits
        tackle skysail rutters. Ho reef sails black spot swab main sheet lanyard
        chase guns six pounders matey lugsail. Jack chase Admiral.
      </Bio>
    </AboutContainer>
  );
};

export default About;
