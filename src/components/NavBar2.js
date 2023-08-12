import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from './Home/LoginButton';
import LoginedButton from './Home/LoginedButton';
import { useNavigate } from 'react-router-dom';
import LoginButtonPic from '../assets/로그인버튼2.png';


function NavBar2() {
  const [loggedIn, setLoggedIn] = useState(false); // 로그인 상태를 저장할 상태(state)를 추가
  const [userName, setUserName] = useState(''); // 사용자 이름을 저장할 상태(state)를 추가
  const navigate = useNavigate();

  // 로그인 버튼 클릭 시 이벤트 핸들러
  const handleLoginClick = () => {
    // 로그인 페이지로 이동
    navigate('/login');
  };

  // 로그아웃 버튼 클릭 시 이벤트 핸들러
  const handleLogoutClick = () => {
    // 로그아웃 상태로 변경되고, 사용자 이름도 초기화됨
    setLoggedIn(false);
    setUserName('');
  };

  // LoginButton 또는 LoginedButton 컴포넌트를 렌더링하는 함수
  const renderLoginButton = () => {
    if (loggedIn) {
      // 로그인한 상태라면, LoginedButton 컴포넌트를 렌더링하고,
      // 사용자 이름과 함께 전달함
      return <LoginedButton backgroundImg={LoginedButton} userName={userName} onLogoutClick={handleLogoutClick} />;
    } else {
      // 로그인하지 않은 상태라면, LoginButton 컴포넌트를 렌더링하고,
      // onClick 이벤트 핸들러를 설정하여 로그인 페이지로 이동함
      return <LoginButton backgroundImg={LoginButton} onClick={handleLoginClick} />;
    }
  };

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
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {renderLoginButton()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar2;