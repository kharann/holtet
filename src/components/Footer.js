import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: #fff;
  margin-top: 1rem;
  background-color: #736f6f;
`;

const Footer = () => {
  return <FooterDiv>&copy; 2019 Magnus Lauritzen Holtet</FooterDiv>;
};

export default Footer;
