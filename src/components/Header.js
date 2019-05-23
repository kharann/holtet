import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.section`
  /* Mobile */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Anything below desktop size*/
  @media screen AND (max-width: 900px) {
  }

  /* Tablet */
  @media screen AND (min-width: 600px) AND (max-width: 900px) {
  }

  /* Desktop */
  @media screen AND (min-width: 901px) {
    justify-content: center;
  }

  background-image: url('./img/headerBG.png');
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  /* Mobile */
  margin: 1rem 0 0.7rem 0;
  width: 13.5rem;

  /* Tablet */
  @media screen AND (min-width: 600px) AND (max-width: 900px) {
    width: 21rem;
    margin: 2rem 0 1rem 0;
  }

  /* Desktop */
  @media screen AND (min-width: 901px) {
    margin: 2rem 0 0.7rem 0;
    width: 33rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src='./img/logoTransparrent.png' />
    </HeaderContainer>
  );
};

export default Header;
