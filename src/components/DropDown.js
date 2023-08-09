import React, { useState } from 'react';
import styled from 'styled-components';

const Dropdown = ({ name, array, onOptionClicked}) => {


  return (
    <DropdownContainer>
      
        <DropdownMenu>
          {array.map((option, index) => (
            <DropdownItem key={index} onClick={onOptionClicked(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;



const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;

  margin-top : 0.4em;

  left: 50%; /* Dropdown 메뉴를 수평 중앙으로 이동합니다. */
  transform: translateX(-50%); /* Dropdown 메뉴를 가로 방향으로 50%만큼 이동시킵니다. */

  z-index: 1;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.5rem 0;
  width: 100px; /* Dropdown 메뉴의 가로 크기를 200px로 설정합니다. */
`;

const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  color: var(--dark-gray-color, #7E8181);
  text-align: center;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;



  &:hover {
    background-color: #f0f0f0;
  }
`;
