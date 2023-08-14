import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './Home/LoginButton';
import LoginedButton from './Home/LoginedButton';
import { useNavigate } from 'react-router-dom';
import LoginButtonPic from '../assets/로그인버튼2.png';
import GoogleLoginButton2 from './Home/GoogleLoginButton2';

import { Profile } from './Home/Profile';
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {useCallback} from "react";


function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  // 구글 로그인 성공 시 이벤트 핸들러
  const handleGoogleLoginSuccess = useCallback((response) => {
    console.log(response);
    if (!response.profileObj) {
      console.error('Failed to log into img');
      return;
    }
    const { profileObj } = response;
    const { imageUrl, email, name } = profileObj;

    console.log(imageUrl, email, name);
    const userInfo = {
      profileImg: profileObj.imageUrl || '',
      email: profileObj.email || '',
      name: profileObj.name || '',
    };
    console.log(profileObj);
    setUserInfo(userInfo);
    setLoggedIn(true);
  }, []);

  // 로그아웃 버튼 클릭 시 이벤트 핸들러
  const handleLogoutClick = useCallback(() => {
    // 로그아웃 상태로 변경되고, 사용자 정보도 초기화됨
    setLoggedIn(false);
    setUserInfo({});
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
            <GoogleLoginButton2></GoogleLoginButton2>
            
            {loggedIn ? (
              <Profile userInfo={userInfo} onLogoutClick={handleLogoutClick} />
            ) : (
              <GoogleOAuthProvider clientId="263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com">
                <GoogleLogin
                  buttonText="Login"
                  onSuccess={handleGoogleLoginSuccess}
                  onFailure={() => console.log('Failed to log in')}
                  cookiePolicy={'single_host_origin'}
                />
              </GoogleOAuthProvider>
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

export default NavBar;