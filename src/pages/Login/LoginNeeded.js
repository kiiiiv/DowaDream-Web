import styled from 'styled-components';
import { Link } from "react-router-dom";

import GoogleLoginButton from '../../components/Home/GoogleLoginButton';
function Save(){
    return (
        <Container20>
            <Header>로그인이 필요한 서비스입니다.</Header>
            <GoogleLoginButton></GoogleLoginButton>
            <Footer>닫기</Footer>
        </Container20>
    );
  }
  
  export default Save;

  const Container20 = styled.div`
  display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 60px;

position: absolute;
width: 320px;
height: 302px;
left: calc(50% - 320px/2);
top: calc(50% - 302px/2);

background: #FFFFFF;
border-radius: 20px;
  `;

  const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 10px;
  
  width: 320px;
  height: 64px;
  
  /* Yellow Color */
  background: #FFE34F;
  border-radius: 20px 20px 0px 0px;
  font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height */
text-align: center;

color: #000000;

  `;

  const Footer = styled.div`
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 176px;
height: 44px;
background: #FFFAC9;
border-radius: 0px 0px 20px 20px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

color: #000000;
  
  `;
