import React from 'react'
import { Dropdown } from 'react-bootstrap'
import styled from 'styled-components';

const DropDown = (props) => {

    const { name, array, onClickOptionalClicked } = props; // props에서 name, array, onClickOptionalClicked를 추출합니다.

    return (
    <DropDownBoxWrap>
        <DropDownContainer>
            {array.map((e,i) => ( 
            <ListItem key={i}>{e}</ListItem>
            ))}
        </DropDownContainer>
    </DropDownBoxWrap>
  )
}

export default DropDown


const DropDownBoxWrap = styled.div`
  height: auto;
  display: inline-block;
  width: auto;
`;

const DropDownContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  overflow-y: scroll;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  list-style: none;
  padding: 1rem;
  z-index: 1;
  margin-top: 0.2rem;
  `;
