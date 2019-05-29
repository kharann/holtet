import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import {
  faLinkedin,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  /* Mobile */
  padding: 0.2rem 2rem;
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

  /* Tablet */
  @media screen AND (min-width: 600px) AND (max-width: 900px) {
    padding: 0.3rem 3rem;
  }

  /* Desktop */
  @media screen AND (min-width: 901px) {
    padding: 0.3rem 3rem;
  }
`;

const SocialMedia = styled.section`
  padding: 1rem 0rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  flex: 1;
`;

const handleConnectClick = email => {
  return (window.location.href =
    'mailto:' + email + "?subject=Hello Magnus, let's get in touch!");
};

const handleSocialMediaClick = url => {
  window.open(url);
};

const Icon = styled(FontAwesomeIcon)`
  /* Desktop */
  @media screen AND (min-width: 901px) {
    &:hover {
      transition-duration: 0.4s;
      color: #f56d2a;
      cursor: pointer;
    }
  }
`;

const Connect = () => {
  return (
    <Container>
      <Title text='CONNECT' />
      <Button onClick={() => handleConnectClick('magnuslholtet@gmail.com')}>
        Get in touch!
      </Button>
      <SocialMedia>
        <Icon
          onClick={() =>
            handleSocialMediaClick('https://instagram.com/magnusandmyggen')
          }
          style={{ marginRight: '0.5rem' }}
          icon={faInstagram}
          size={window.innerWidth < 900 ? '2x' : '3x'}
        />
        <Icon
          onClick={() =>
            handleSocialMediaClick('https://github.com/Lekesoldat')
          }
          style={{ marginRight: '0.5rem' }}
          icon={faGithub}
          size={window.innerWidth < 900 ? '2x' : '3x'}
        />
        <Icon
          onClick={() =>
            handleSocialMediaClick(
              'https://www.linkedin.com/in/magnus-lauritzen-holtet-07398b177'
            )
          }
          style={{ marginRight: '0.5rem' }}
          icon={faLinkedin}
          size={window.innerWidth < 900 ? '2x' : '3x'}
        />
      </SocialMedia>
    </Container>
  );
};

export default Connect;
