import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import selectBg from '../../assets/images/input-select.png';
// import selectBorder from '../../assets/images/select-border.png';
import arrowImg from '../../assets/images/icons/arrow-down.png';

const demoOptions = [
  { label: 'bath_robe_350.PNG', value: '1' },
  { label: 'checked_shirt_850.PNG', value: '2' },
  { label: 'curve_100.PNG', value: '3' },
  { label: 'denim_vest_750.PNG', value: '4' },
  { label: 'empty_1000.png', value: '5' },
  { label: 'farmer_outfit_500.PNG', value: '6' },
  { label: 'hairy_chest_500.PNG', value: '7' },
  { label: 'link_marine_longsleeve_500.PNG', value: '8' },
  { label: 'playboy_tee_800.PNG', value: '9' },
  { label: 'ripped_tee_1000.PNG', value: '10' },
  { label: 'suit_750.PNG', value: '11' },
  { label: 'sushiswap_belt_150.PNG', value: '12' },
  { label: 'tank_top_1000.PNG', value: '13' },
  { label: 'tiebow_1000.png', value: '14' },
  { label: 'white_shirt_750.PNG', value: '15' }
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
