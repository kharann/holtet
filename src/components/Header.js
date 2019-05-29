import React from 'react';
import styled from 'styled-components';
import { whileStatement } from '@babel/types';

const HeaderContainer = styled.section`
  /* Mobile */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  /* Anything below desktop size*/
  @media screen AND (max-width: 900px) {
  }

  /* Tablet */
  @media screen AND (min-width: 600px) AND (max-width: 900px) {
    font-size: 14px;
  }

  /* Desktop */
  @media screen AND (min-width: 901px) {
    font-size: 18px;
    height: 7rem;
  }

  background-image: url('./img/headerBG.png');
  background-size: cover;
  background-position: center;
`;

// const Logo = styled.img`
//   /* Mobile */
//   margin: 1rem 0 0.7rem 0;
//   width: 13.5rem;

//   /* Tablet */
//   @media screen AND (min-width: 600px) AND (max-width: 900px) {
//     width: 21rem;
//     margin: 2rem 0 1rem 0;
//   }

//   /* Desktop */
//   @media screen AND (min-width: 901px) {
//     margin: 2rem 0 0.7rem 0;
//     width: 33rem;
//   }
// `;

const Name = styled.h1`
  color: whitesmoke;
  font-family: 'Shadows Into Light';
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* <Logo src='./img/logoTransparrent.png' /> */}
      <Name>
        Magnus{' '}
        <span style={{ color: '#F56D29', fontFamily: 'Shadows Into Light' }}>
          L. Holtet
        </span>
      </Name>
    </HeaderContainer>
  );
};

export default Header;
