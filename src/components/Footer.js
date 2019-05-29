import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  height: 5rem;
  color: #fff;
  margin-top: 1rem;
  background-color: #736f6f;

  & p {
    padding: 0 0 0.5rem 0;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <p>&copy; 2019 Magnus Lauritzen Holtet </p>
      <img src='https://api.netlify.com/api/v1/badges/925db648-520d-4c1d-bebb-a001aeb802e9/deploy-status' />
    </FooterDiv>
  );
};

export default Footer;
