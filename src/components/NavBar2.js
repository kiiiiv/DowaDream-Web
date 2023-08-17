import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import {GoogleLoginButton} from './Home/GoogleLoginButton';
import jwtDecode from "jwt-decode";
import pic from '../assets/로그인버튼2.png';
import axios from 'axios';
//버튼을 눌러서 url로 이동하게..!
// redirect url 을 프론트 url로 ,
// 그 url에서 code(인가코드)만 파싱해서 빼옴
// 그 code를 가지고 access token과 refresh token을 반환받는 우리 백엔드 api를 호출해서
// response.data 에 있는 두 토큰을 localstorage에 저장

function NavBar2() {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [isLogined, setIsLogined] = useState(true);
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
    
    postAccessToken(token);
    console.log(userEmail);

    doSignUp();
    sendUserData(userName, profile, userEmail);
    
  };
  const sendUserData = async (userName, profile, userEmail) =>{
    const name1 = String(userName);
    const profile1 = String(profile);
    const email1 = String(userEmail);
    const baseUrl = "https://api.dowadream.site/user/";
    try {    
        const response = await axios.post(`${baseUrl}get-token`, { // URL 수정
          "userName": name1,
          "email":profile1,
          "profilePhoto":email1
        });
    
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  }
  const postAccessToken = async (token) => {
    const url = "https://api.dowadream.site/user/get-token/";
    
    const requestBody = {
      "access_token": token // 액세스 토큰을 사용하여 요청 본문을 만듭니다.
    };
    console.log(token);

    try {
      const response = await axios.post(`${url}`, {
        "access_token" : token
      }); // 비동기 POST 요청을 보냅니다.
      console.log(response.data); // 서버에서 반환한 데이터를 출력합니다.
    } catch (error) {
      console.error(error); // 오류가 발생한 경우, 오류 메시지를 출력합니다.
    }
  };

  const doSignUp = () => {
    window.sessionStorage.setItem('profile', profile);
    window.sessionStorage.setItem('name', userName);
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
/*
  useEffect(() => {
    const name = window.sessionStorage.getItem('name');
    if(name) {
      LoginSuccess();
    }
    else {
      onLogout();
    }
  }, []);
  */

    
    

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "yellow" }} className="bg-ffe34f">
        <Container fluid>
          <Navbar.Brand style={{backgroundImage: `url('${pic}')`, width: "100px", height: "30px"}} onClick={() => { navigate('/') }}></Navbar.Brand>
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
              <Button onClick={sendUserData}></Button>
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
                  onClick={onLogout}
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