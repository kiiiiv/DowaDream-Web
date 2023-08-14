import styled from 'styled-components';
import { Link } from "react-router-dom";
import MyPage from './MyPage';
function Save(){
    return (
        <Container20>
            <ButtonContainer>
                <TextContainer>관심 태그와 지역을 저장하시겠습니까?</TextContainer>
                <YesNo>
                <StyledLink to="/mypage">
                    <FirstButton>네</FirstButton>
                </StyledLink>
                <StyledLink to="/mypage">
                    <SecondButton>아니요</SecondButton>
                </StyledLink>
                </YesNo>
            </ButtonContainer>
        </Container20>
    );
  }
  
  export default Save;

  const Container20 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 40px 0px 64px;
  gap: 64px;
  height: 772px;
  width: 100%;
  background: #2A2A2A4D
  `;

/* Frame 54 */

/* Auto layout */
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


/* Frame 52 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 60px;

width: 320px;
height: 302px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Frame 51 */

/* Auto layout */
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

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 로그인이 필요한 서비스입니다. */

width: 240px;
height: 24px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height */
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 50 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 10px;

width: 248px;
height: 68px;

background: #FFFFFF;
/* Dark Gray Color */
border: 1px solid #7E8181;
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 49 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;

width: 52px;
height: 52px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* image 1 */

width: 32px;
height: 32px;

background: url(image.png);

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 48 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 176px;
height: 44px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Google로 시작하기 */

width: 156px;
height: 24px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height */
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 53 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 320px;
height: 50px;

/* Secondary Yellow  Color */
background: #FFFAC9;
border-radius: 0px 0px 20px 20px;

/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;


/* 닫기 */

width: 28px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
