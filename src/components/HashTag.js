import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../봉사.jpg';
import styled from 'styled-components';

function HashTag() {


  return (
    <HashtagButton></HashtagButton>
  );
}

export default HashTag;

const HashtagButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;

    width: 76px;
    height: 37px;
    background: #FFFAC9;
    border-radius: 10px;

 
`;
