import React from 'react';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  }
`;

const Image = styled.img`
  /* Mobile */
  width: 14rem;
  height: auto;

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
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

const handleImageClick = url => {
  window.open(url, '_blank');
};

const Project = ({ src, url, code }) => {
  return (
    <Container>
      <Image src={src} onClick={() => handleImageClick(url)} />
      <Code>
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
