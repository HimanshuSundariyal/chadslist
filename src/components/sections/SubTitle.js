import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p`
  color: black;
  font-family: 'IBM Plex Mono', monospace;
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
`;

const SubTitle = ({ children, className }) => {
  return (
    <StyledTitle className={className}>{children}</StyledTitle>
  );
};

export default SubTitle;
