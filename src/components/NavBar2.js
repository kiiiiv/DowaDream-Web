import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import LoginButtonPic from '../assets/로그인버튼2.png';
import { Profile } from './Home/Profile';
import {GoogleLoginButton} from './Home/GoogleLoginButton';
import jwtDecode from "jwt-decode";


function NavBar2() {

  const navigate = useNavigate();

  // 구글 로그인 성공 시 이벤트 핸들러
  const [userInfo, setUserInfo] = useState(null);
  const handleLoginSuccess = (credentialResponse) => {
    setUserInfo(jwtDecode(credentialResponse.credential));
    console.log("userInfo"+userInfo);
  };
  useEffect(() => {
    if (userInfo) {
      window.location.reload();
    }
  }, [userInfo]);

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "yellow" }} className="bg-ffe34f">
        <Container fluid>
          <Navbar.Brand onClick={() => { navigate('/') }}>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={() => { navigate('/info') }}>봉사정보</Nav.Link>
              <Nav.Link onClick={() => { navigate('/review') }}>봉사후기</Nav.Link>
              <Nav.Link onClick={() => { navigate('/mypage') }}>마이페이지</Nav.Link>
            </Nav>
             {/* onSuccess 핸들러를 props로 전달 */}
             <GoogleLoginButton onSuccess={handleLoginSuccess} />



            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar2;