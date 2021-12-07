import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 100px;
  font-family: 'Permanent Marker', cursive;
  font-weight: bold;
  color: black;
  font-size: 25px;
  margin-top: 20px;
`;

const CardBottom = ({ children }) => {
  return (
    <StyledCard>{children}</StyledCard>
  );
};

export default CardBottom;
