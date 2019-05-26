import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 0.8rem 5rem;
  font-size: 18px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;

  background-color: white;
  color: black;
  border: 2px solid #4caf50;

  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

const handleConnectClick = email => {
  return (window.location.href =
    'mailto:' + email + "?subject=Hello Magnus, let's get in touch!");
};

const Connect = () => {
  return (
    <Container>
      <Title text='CONNECT' />
      <Button onClick={() => handleConnectClick('magnuslholtet@gmail.com')}>
        Get in touch!
      </Button>
    </Container>
  );
};

export default Connect;
