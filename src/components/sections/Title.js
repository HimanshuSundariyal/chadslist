import React from 'react';
import styled from 'styled-components';

const StyledSectionTitle = styled.h2`
  color: black;
  font-family: 'Permanent Marker', cursive;
  font-size: 50px;
  text-align: center;
  margin-bottom: 30px;
  word-break: break-word;

  @media screen and (max-width: 760px) {
    font-size: 35px;
  }
`;

const Title = ({ children, className }) => {
  return (
    <StyledSectionTitle className={className}>{children}</StyledSectionTitle>
  );
};

export default Title;
