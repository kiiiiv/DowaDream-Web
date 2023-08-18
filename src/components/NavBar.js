import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import {GoogleLoginButton} from './Home/GoogleLoginButton';
import jwtDecode from "jwt-decode";
import logo from '../assets/로고/도와드림로고.png';
import axios from 'axios';
const accessToken = localStorage.getItem("accessToken");
//버튼을 눌러서 url로 이동하게..!
// redirect url 을 프론트 url로 ,
// 그 url에서 code(인가코드)만 파싱해서 빼옴
// 그 code를 가지고 access token과 refresh token을 반환받는 우리 백엔드 api를 호출해서
// response.data 에 있는 두 토큰을 localstorage에 저장

function NavBar2() {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [isLogined, setIsLogined] = useState(false);
  const [userName, setUserName] = useState('');
  const [profile, setProfile] = useState('');
  const [userEmail, setUserEmail] = useState('');

  

  const LoginSuccess = (credentialResponse) => {
    setIsLogined(true);
    console.log(credentialResponse);
    const token = credentialResponse.credential;
    const token2 = jwtDecode(credentialResponse.credential);

    console.log(token);
    setUserInfo(token2);
    setUserName(token2.name);
    setProfile(token2.picture);
    setUserEmail(token2.email);
    
    console.log(userEmail);
    console.log(profile);
    console.log(userName);

    doSignUp();
    sendUserData(userEmail, profile, userEmail);
    
  };
  
  

  const doSignUp = () => {
    window.sessionStorage.setItem('profile', profile);
    window.sessionStorage.setItem('name', userName);
  }
  const sendUserData = async (userName, profile, userEmail) =>{
    const name1 = String(userName);
    const profile1 = String(profile);
    const email1 = String(userEmail);
    const baseUrl = "https://api.dowadream.site/user/";
    try {    
        const response = await axios.post(`${baseUrl}get-token/`, { // URL 수정
          "userName": name1,
          "email":email1,
          "profilePhoto":profile1
        });
    
        const accessToken = response.data.data.access_token;
        localStorage.setItem("accessToken", accessToken);
        console.log(accessToken);
      } catch (error) {
        console.error(error);
      }
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
    const accessToken = window.sessionStorage.getItem('accessToken');
    if(accessToken) {
      LoginSuccess();
    }
    else {
      onLogout();
    }
  }, []);
  

    
    

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "yellow" }} className="bg-ffe34f">
        <Container fluid>
          <Navbar.Brand style={{backgroundImage: `url('${logo}')`, backgroundSize: "cover",
    backgroundPosition: "center", width: "40px", height: "40px", padding: "0px"}} onClick={() => { navigate('/') }}></Navbar.Brand>
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
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: `url('${profile}')`,
                    backgroundSize: "cover",
                    marginRight: "8px",
                  }}
                  //onClick={onLogout}
                ></div>
              </div>
            ) : (
              <GoogleLoginButton onSuccess={LoginSuccess} />
            )}



            
          
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </>
  );
}

export default NavBar2;