import React from 'react';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #444;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 14rem;
  width: 14rem;
`;

const Code = styled.div`
  margin-top: 0.1rem;
  padding: 0.5rem 0.5rem;

  /* color: #fff;
  background-color: #444444;
  transition: 0.08s ease-in; */

  background: linear-gradient(to right, #444 50%, whitesmoke 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    background-position: left bottom;
    color: whitesmoke;
    cursor: pointer;
  }
`;

const Image = styled.img`
  /* Mobile */
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;

  /* Anything below desktop size*/
  @media screen AND (max-width: 900px) {
  }

  /* Tablet */
  @media screen AND (min-width: 600px) AND (max-width: 900px) {
    width: 17rem;
  }

  /* Desktop */
  @media screen AND (min-width: 901px) {
    width: 17rem;
    transition: 0.5s filter;

    &:hover {
      filter: blur(0.5rem);
      transform: scale(0.95);
      cursor: pointer;
    }
  }
`;

const handleOnClick = url => {
  window.open(url, '_blank');
};

const Project = ({ image, site, code }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} onClick={() => handleOnClick(site)} />
      </ImageContainer>
      <Code onClick={() => handleOnClick(code)}>
        <FontAwesomeIcon
          style={{ marginRight: '0.5rem' }}
          icon={faGithub}
          size='lg'
        />
        The Code Behind
      </Code>
    </Container>
  );
};

export default Project;
