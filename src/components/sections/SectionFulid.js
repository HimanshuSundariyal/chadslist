import React from 'react';
import styled from 'styled-components';

import outlineImage from '../../assets/images/outline.png';

const StyledSection = styled.div`
  padding: 50px 50px;
  margin: 50px 0;
  background-image: url(${outlineImage});
  background-size: 100% 100%;
  
  @media screen and (max-width: 760px) {
    padding: 20px;
    background-image: none;
    border: 4px solid black;
  }
`;

const SectionFulid = ({ children }) => {
  return (
    <StyledSection>{children}</StyledSection>
  );
};

export default SectionFulid;
