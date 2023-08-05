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


function App() {

  return (
    <div className="App">
      
      <NavBar2></NavBar2>
      <Main></Main>
      
    </div>
  );
}


export default App;
