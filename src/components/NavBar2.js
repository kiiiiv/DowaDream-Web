import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import {GoogleLoginButton} from './Home/GoogleLoginButton';
import jwtDecode from "jwt-decode";
//버튼을 눌러서 url로 이동하게..!
// redirect url 을 프론트 url로 ,
// 그 url에서 code(인가코드)만 파싱해서 빼옴
// 그 code를 가지고 access token과 refresh token을 반환받는 우리 백엔드 api를 호출해서
// response.data 에 있는 두 토큰을 localstorage에 저장

function NavBar2() {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [isLogined, setIsLogined] = useState(true);
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');

  const LoginSuccess = (credentialResponse) => {
    setIsLogined(true);
    const token = jwtDecode(credentialResponse.credential);


  };
  const doSignUp = () => {
    window.sessionStorage.setItem('profile', profile);
    window.sessionStorage.setItem('name', name);
  }
  
  const onLogout = () => {
    
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      if (auth2 !== null) {
        auth2
          .signOut()
          .then(auth2.disconnect())
          .catch(e => console.log(e));
      }
    }
    setIsLogined(false);
    
    //SessionStorage Clear
    window.sessionStorage.clear();
    window.sessionStorage.clear();
  }

  // useEffect(() => {
  //   const name = window.sessionStorage.getItem('name');
  //   if(name) {
  //     LoginSuccess();
  //   }
  //   else {
  //     onLogout();
  //   }
  // }, []);

  
    

      // useEffect(() => {
      //   setIsLogined(!!token);
      //   if (token) {
      //     setUserInfo(token);
      //   }
      // }, []);

    
    

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

              <GoogleLoginButton onSuccess={LoginSuccess} />



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