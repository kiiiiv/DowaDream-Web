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
import MyPageDetail from './pages/ReviewDetail';
import Main from './pages/Main';
import AllFamous from './pages/AllFamous';
import AllNew from './pages/AllNew';
import AllTagRegion from './pages/AllTagRegion';
import MainInfo from './pages/Info/MainInfo';
import ReviewDetail from './pages/ReviewDetail';
import ReviewWrite2 from './pages/ReviewWrite2';


function App() {
  let [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      
      <NavBar2></NavBar2>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/mypage' element={<ReviewWrite2 shoes={shoes}/>}></Route>
        <Route path="/info" element={<MainInfo></MainInfo>}></Route>
        <Route path="/mypage/detail" element={ <MyPageDetail shoes={shoes}/> }/>
        <Route path='/review' element={<ReviewDetail/>}></Route>
        <Route path="/newAll" exact component={<AllNew></AllNew>} />
        <Route path="/famousAll" component={<AllFamous></AllFamous>} />
        <Route path="/tagregionAll" component={<AllTagRegion></AllTagRegion>} />
      </Routes>

      
    </div>
  );
}


export default App;
