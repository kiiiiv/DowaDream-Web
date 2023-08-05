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
function Main(props){
    let [shoes, setShoes] = useState(data);
    let [재고] = useState([10,11,12]);
    let navigate = useNavigate();
    return(
    <div className='Wrapper'>
    <Routes>
      <Route path='/' element={
      <div>
          <div className="container">
            <ControlledCarousel></ControlledCarousel>
            </div>
        </div>
        }>
      </Route>

      <Route path='/mypage' element={<MyPage shoes={shoes}/>}></Route>
      <Route path="/info" element={<Info></Info>}></Route>
      <Route path="/mypage/detail" element={ <MyPageDetail shoes={shoes}/> }/>
      <Route path='/review' element={<Review/>}>
        <Route path='member' element={<div>멤버들</div>}></Route>
        <Route path='location' element={<div>회사위치</div>}></Route>
      </Route>


    </Routes>
    </div>
    );
  }
  export default Main;