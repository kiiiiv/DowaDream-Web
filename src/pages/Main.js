import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from '../apis/data.js';
import Table from '../components/Table.js';
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import MyPage from './MyPage';
import axios from 'axios';
import Info from './Info'
import ControlledCarousel from '../components/Carousel';
import NavBar2 from '../components/NavBar2';
import Review from './Review';
import MyPageDetail from './ReviewDetail';
import TagButton from '../components/TagButton.js';
import styled from 'styled-components';
import { Wrapper } from '../styles/Common.js';
function Main(){
    let [shoes, setShoes] = useState(data);
    let [재고] = useState([10,11,12]);
    let navigate = useNavigate();
    return(
    <div className='Wrapper'>
        <Wrapper>
          <ControlledCarousel/>
              <HeaderWrapper>
                <h3>  님! 어떤 봉사정보 추천을 원하시나요?{'\n'}</h3>
              </HeaderWrapper>
          <ButtonWrapper>
              <TagButton text="관심 태그 & 지역" to="/tagregionAll"></TagButton>
              <TagButton text="신규" to="/new"></TagButton>
              <TagButton text="인기" to="/famousAll"></TagButton>
          </ButtonWrapper>
        </Wrapper>
      

    </div>
    );
  }
  export default Main;


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 20px 0px 16px;
  gap: 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;


