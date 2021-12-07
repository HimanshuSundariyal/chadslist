import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import selectBg from '../../assets/images/input-select.png';
// import selectBorder from '../../assets/images/select-border.png';
import arrowImg from '../../assets/images/icons/arrow-down.png';

const demoOptions = [
  { label: 'diamond_chain_750.PNG', value: '1' },
  { label: 'dumbbell_necklace_2500.PNG', value: '2' },
  { label: 'empty_4000.png', value: '3' },
  { label: 'golden_chain_1000.PNG', value: '4' },
  { label: 'uniswap_necklace_1750.PNG', value: '5' }
];

const StyledSelect = styled.div`
  width: 230px;
  font-family: 'Permanent Marker', cursive;
  font-weight: bolder;
  label {
    font-size: 15px;
    margin: 0 0 0 10px;
  }
  .css-yk16xz-control, .css-1pahdxg-control {
    outline: none;
    box-shadow: none;
    background-image: url(${selectBg});
    background-size: 100% 100%;
    border: 0;
    .css-1wa3eu0-placeholder {
      color: black;
    }
    .css-1okebmr-indicatorSeparator {
      display: none;
    }
    .css-tlfecz-indicatorContainer {
      background-image: url(${arrowImg});
      background-size: 100% 100%;
      width: 13px;
      height: 7px;
      margin-right: 15px;
      svg {
        display: none;
      }
    }
  }
  .css-2613qy-menu {
    border: 2px solid black;
    background-color: red;
  }
`;

const CustomSelect = ({ className, label }) => {
  return (
    <StyledSelect className={className}>
      <label>{label}</label>
      <Select
        options={demoOptions}
      />
    </StyledSelect>
  );
};

export default CustomSelect;
