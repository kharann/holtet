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
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-width: 0px 1px 1px 1px;
  border-color: black;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: space-between;
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
        <FontAwesomeIcon icon={faGithub} size='lg' />
        The Code
      </Code>
    </Container>
  );
};

export default Project;
