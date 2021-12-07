import React from 'react';
import styled from 'styled-components';

import bgImage from '../../assets/images/tab-bar.png';

const StyledTabItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${bgImage});
  background-size: 100% 100%;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: normal;
  font-family: 'Permanent Marker', cursive;
  margin: 0 33px;
  text-transform: uppercase;
  background-color: white;
  z-index: ${(props) => props.active ? 22 : 21};
  &:first-child {
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 10px;
  }
  a {
    color: black; 
  }
  img {
    margin-right: 5px;
  }
`;

const TabItem = ({ children, image, active }) => {
  return (
    <StyledTabItem active={active}>
      {image && (
        <img src={image} alt="IC" />
      )}
      {children}
    </StyledTabItem>
  );
};

export default TabItem;
