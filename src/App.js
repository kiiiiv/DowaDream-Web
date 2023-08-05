import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './apis/data.js';
import Table from './components/Table.js';
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import MyPage from './pages/MyPage';
import axios from 'axios';
import Info from './pages/Info'
import ControlledCarousel from './components/Carousel';
import NavBar2 from './components/NavBar2';
import Review from './pages/Review';
import MyPageDetail from './pages/후기세부';


function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10,11,12]);
  let navigate = useNavigate();
  return (
    <div className="App">
      
      <NavBar2></NavBar2>
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

        <Route path='/mypage/:id' element={<MyPage shoes={shoes}/>}></Route>
        <Route path="/info" element={<Info></Info>}></Route>
        <Route path="/mypage/detail" element={ <MyPageDetail shoes={shoes}/> }/>
        <Route path='/review' element={<Review/>}>
          <Route path='member' element={<div>멤버들</div>}></Route>
          <Route path='location' element={<div>회사위치</div>}></Route>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
      </div>
    </div>
  );
}
function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Event(){
  return(
    <>
    <h4>오늘의 이벤트</h4>
    <Outlet></Outlet>
    </>
  )
}
function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;
