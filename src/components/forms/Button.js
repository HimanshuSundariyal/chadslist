import React from 'react';
import styled from 'styled-components';

import activeBg from '../../assets/images/button-active-bg.png';
import largeActiveBg from '../../assets/images/large-button-active-bg.png';
import arrowRight from '../../assets/images/icons/arrow-right.png';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.size === 'large' ? largeActiveBg : activeBg});
  font-family: 'Permanent Marker', cursive;
  font-size: ${(props) => props.size === 'large' ? '25px' : '20px'};
  background-size: 100% 100%;
  border: 0;
  outline: 0;
  box-shadow: none;
  padding: ${(props) => props.size === 'large' ? '15px 30px' : '5px 10px'};
  background-color: white;
  &:focus {
    outline: 0;
  }
  img {
    margin-left: 5px;
  }
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
      {props.arrow && props.arrow === 'right' && (
        <img src={arrowRight} alt="arrow" />
      )}
    </StyledButton>
  );
};

export default Button;
