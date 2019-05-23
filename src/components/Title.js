import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h1`
  /* Mobile */
  font-size: 24px;

  /* Anything below desktop size*/
  @media screen AND (max-width: 900px) {
  }

  /* Tablet */
  @media screen AND (min-width: 600px) AND (max-width: 900px) {
    font-size: 38px;
  }

  /* Desktop */
  @media screen AND (min-width: 901px) {
    font-size: 38px;
  }
`;

const Title = ({ text, desc }) => {
  return (
    <Container>
      <Text>{text}</Text>
      {desc ? <p>{desc}</p> : null}
    </Container>
  );
};

export default Title;
