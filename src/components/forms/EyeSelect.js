import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import selectBg from '../../assets/images/input-select.png';
// import selectBorder from '../../assets/images/select-border.png';
import arrowImg from '../../assets/images/icons/arrow-down.png';

const demoOptions = [
  { label: 'angry_stare_500.PNG', value: '1' },
  { label: 'aviators_1000.PNG', value: '2' },
  { label: 'basketball_sunglasses_300.PNG', value: '3' },
  { label: 'btc_eyes_250.PNG', value: '4' },
  { label: 'cool_shades_350.PNG', value: '5' },
  { label: 'cyber_glasses_250.PNG', value: '6' },
  { label: 'cycling_glasses_350.PNG', value: '7' },
  { label: 'eth_eyes_250.PNG', value: '8' },
  { label: 'glamorous_sleep_mask_500.PNG', value: '9' },
  { label: 'green_eyes_1000.PNG', value: '10' },
  { label: 'optimistic_shades_250.PNG', value: '11' },
  { label: 'regular_eyes_2000.PNG', value: '12' },
  { label: 'suspicious_eyes_1000.PNG', value: '13' },
  { label: 'wayfarers_1500.PNG', value: '14' },
  { label: 'wink_500.PNG', value: '15' },
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
