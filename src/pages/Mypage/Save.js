import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import MyPage from './MyPage';
import { upDateVolInfo } from '../../apis/Program/ProgramInfo';
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


  /* Frame 52 */
const ButtonContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

`;
/* Auto layout */
const TextContainer= styled.div`
display: flex;
flex-direction: row;

align-items: center;
padding: 20px 40px;
gap: 10px;

width: 350px;


/* Yellow Color */
background: #FFE34F;
border-radius: 20px 20px 0px 0px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-align: center;

color: #000000;

`;
const YesNo= styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

width: 350px;



`;
const Button = styled.button`
    padding: 10px 20px;
    height: 50px;
    background: #FFFAC9;
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #000000;
    width: 100%;
    &:hover {
        cursor: pointer;
        background-color: #FFE34F;
        font-weight: 700;
    }
    border: none;
`;

const FirstButton = styled(Button)`
    border-radius: 0px 0px 0px 20px;
    width: 100%;
`;

const SecondButton = styled(Button)`
    border-radius: 0px 0px 20px 0px;
    width: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

