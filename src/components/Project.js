import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  overflow: hidden;
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
      cursor: pointer;
    }
  }
`;

const handleImageClick = url => {
  window.open(url, '_blank');
};

const Project = ({ src, url, code }) => {
  return (
    <Div>
      <Image src={src} onClick={() => handleImageClick(url)} />
    </Div>
  );
};

export default Project;
