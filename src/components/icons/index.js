import React from 'react';
import styled from 'styled-components';

import twitterImage from '../../assets/images/icons/bird.png';
import handRightImage from '../../assets/images/icons/hand-right.png';
import handLeftImage from '../../assets/images/icons/hand-left.png';
import earImage from '../../assets/images/icons/ear.png';
import noseImage from '../../assets/images/icons/nose.png';
import ballImage from '../../assets/images/icons/ball.png';
import browImage from '../../assets/images/icons/brow.png';

const StyledIcon = styled.i`
  display: block;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: ${(props) => props.size || 39}px;
  height: ${(props) => props.size || 28}px;
`;

const TwitterIcon = ({ children, size, className }) => {
  return (
    <StyledIcon className={className} image={twitterImage} size={size}>{children}</StyledIcon>
  );
};

const HandRightIcon = ({ children, size, className }) => {
  return (
    <StyledIcon className={className} image={handRightImage} size={size}>{children}</StyledIcon>
  );
};

const HandLeftIcon = ({ children, size, className }) => {
  return (
    <StyledIcon className={className} image={handLeftImage} size={size}>{children}</StyledIcon>
  );
};

const NoseIcon = ({ children, size, className }) => {
  return (
    <StyledIcon className={className} image={noseImage} size={size}>{children}</StyledIcon>
  );
};

const EarIcon = ({ children, size, className }) => {
  return (
    <StyledIcon className={className} image={earImage} size={size}>{children}</StyledIcon>
  );
};

const BallIcon = ({ children, size, className }) => {
  return (
    <StyledIcon className={className} image={ballImage} size={size}>{children}</StyledIcon>
  );
};

const BrowIcon = ({ children, size, className }) => {
  return (
    <StyledIcon className={className} image={browImage} size={size}>{children}</StyledIcon>
  );
};
export {
  TwitterIcon,
  HandLeftIcon,
  HandRightIcon,
  BrowIcon,
  BallIcon,
  NoseIcon,
  EarIcon
};
