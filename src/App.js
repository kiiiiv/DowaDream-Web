import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './apis/data.js';
import Table from './components/Table.js';
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import MyPage from './pages/Mypage/MyPage';
import ControlledCarousel from './components/Home/Carousel';
import NavBar2 from './components/NavBar2';
import MyPageDetail from './pages/Review/ReviewDetail';
import Main from './pages/Main';
import MainInfo from './pages/Info/MainInfo';
import MainReview from './pages/Review/MainReview';
import ReviewWrite2 from './pages/Mypage/ReviewWrite2';
import Save from './pages/Mypage/Save';
import InfoDetail from './pages/Info/InfoDetail';
import Register from './pages/Info/Register';

function App() {
  return (
    <div className="App">      
      <NavBar2></NavBar2>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        
        <Route path='/mypage/:mypageLoc?' element={<MyPage/>}></Route>
        <Route path='/mypage/write' element={<ReviewWrite2/>}></Route>
        <Route path='/mypage/save' element={<Save/>}></Route>
        
        <Route path="/info" element={<MainInfo></MainInfo>}></Route>
        <Route path="/info/:infoId" element={<MainInfo></MainInfo>}></Route>
        <Route path='/infodetail' element={<InfoDetail/>}></Route>
        <Route path='/infodetail/save' element={<Register/>}></Route>
        
        <Route path='/review' element={<MainReview/>}></Route>
        <Route path='/review/:reviewId' element={<MyPageDetail/>}></Route>

      </Routes>

      
    </div>
  );
}


export default App;
