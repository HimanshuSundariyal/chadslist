import React from 'react';
import styled from 'styled-components';

import progressBorder from '../../assets/images/progress-border.png';

const StyledProgressBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background-image: url(${progressBorder});
  background-size: 100% 100%;
  height: 80px;
  padding: 0 10px;
  .active-progress {
    width: ${(props) => props.percent};
    height: 72px;
    border-radius: 23px;
    background-color: #BBC2CF;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  span {
    position: absolute;
    left: calc(50% - 75px);
  }
  
  @media screen and (max-width: 760px) {
    background-image: none;
    border: 2px solid black;
    border-radius: 23px;
    padding: 0;
  }
`;

const Progressbar = ({ children, percent }) => {
  return (
    <StyledProgressBar percent={percent}>
      <span>{children}</span>
      <div className="active-progress">
      </div>
    </StyledProgressBar>
  );
};

export default Progressbar;
