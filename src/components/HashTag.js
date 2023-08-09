import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../봉사.jpg';
import styled from 'styled-components';

function HashTag({text}) {
  return (
    <HashtagButton>{text}</HashtagButton>
  );
}

export default HashTag;

const HashtagButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    height: 50px;
    background: #FFFAC9;
    border-radius: 10px; 
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 29px;
`;
