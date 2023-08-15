import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import {GoogleLoginButton} from './Home/GoogleLoginButton';
import jwtDecode from "jwt-decode";
import { onSuccess, token } from './Home/GoogleLoginButton';


function NavBar2() {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [isLogined, setIsLogined] = useState(false);

  // 구글 로그인 성공 시 이벤트 핸들러

    // 로그아웃
    const logout = () => {
      setUserInfo(null);
      setIsLogined(false);
    };
  
    const onSuccess = (credentialResponse: any) => {
      setIsLogined(true);
      const token = jwtDecode(credentialResponse.credential);
      setUserInfo(token);
    };
  
    useEffect(() => {
      setIsLogined(!!token);
      if (token) {
        setUserInfo(token);
      }
    }, []);

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
            {isLogined ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: `url('${userInfo.picture}')`,
                    backgroundSize: "cover",
                    marginRight: "8px",
                  }}
                ></div>
                <Button variant="info" onClick={logout}>
                  로그아웃
                </Button>
              </div>
            ) : (
              <GoogleLoginButton onSuccess={onSuccess} />
            )}



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