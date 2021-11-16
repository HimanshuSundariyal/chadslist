import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  font-family: 'Permanent Marker', cursive;
  padding: 25px;
  img.card-image {
    width: 100%;
    margin-bottom: 15px;
  }
  p {
    text-align: center;
  }
  span {
    font-size: 20px;
  }
`;

const Card = ({ children }) => {
  return (
    <StyledCard>{children}</StyledCard>
  );
};

export default Card;
