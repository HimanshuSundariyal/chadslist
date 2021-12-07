import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.h4`
  font-family: 'Permanent Marker', cursive;
  font-size: 25px;
  font-weight: bold;
`;

const CardTitle = ({ children }) => {
  return (
    <StyledCardTitle>{children}</StyledCardTitle>
  );
};

export default CardTitle;
