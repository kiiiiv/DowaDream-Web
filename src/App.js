import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './apis/data.js';
import Table from './components/Table.js';
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import MyPage from './pages/Mypage/MyPage';
import axios from 'axios';
import ControlledCarousel from './components/Home/Carousel';
import NavBar2 from './components/NavBar2';
import MyPageDetail from './pages/Review/ReviewDetail';
import Main from './pages/Main';
import MainInfo from './pages/Info/MainInfo';
import MainReview from './pages/Review/MainReview';
import ReviewWrite2 from './pages/Mypage/ReviewWrite2';
import Save from './pages/Mypage/Save';


function App() {
  let [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      
      <NavBar2></NavBar2>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/mypage/write' element={<ReviewWrite2/>}></Route>
        <Route path='/mypage/save' element={<Save/>}></Route>
        <Route path="/info" element={<MainInfo></MainInfo>}></Route>
        <Route path="/mypage/detail" element={ <MyPageDetail shoes={shoes}/> }/>
        <Route path='/review' element={<MainReview/>}></Route>
      </Routes>

      
    </div>
  );
}


export default App;
