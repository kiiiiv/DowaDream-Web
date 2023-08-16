import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import {GoogleLoginButton} from './Home/GoogleLoginButton';
import jwtDecode from "jwt-decode";


function NavBar2() {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [isLogined, setIsLogined] = useState(false);
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');

  // 구글 로그인 성공 시 이벤트 핸들러
  const LoginSuccess = (credentialResponse) => {
    setIsLogined(true);
    const token = jwtDecode(credentialResponse.credential);
    setUserInfo(token);
    setName(token.name);
    setProfile(token.googleId);

    doSignUp();
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
    window.localStorage.clear();
  }

  useEffect(() => {
    const name = window.sessionStorage.getItem('name');
    if(name) {
      LoginSuccess();
    }
    else {
      onLogout();
    }
  }, []);

  
    
  /*
    useEffect(() => {
      setIsLogined(!!token);
      if (token) {
        setUserInfo(token);
      }
    }, []);
*/

    
    

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
                <Button variant="info" onClick={onLogout}>
                  로그아웃
                </Button>
              </div>
            ) : (
              <GoogleLoginButton onSuccess={LoginSuccess} />
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