import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import { upDateVolInfo } from '../../apis/Program/ProgramInfo';
function Register(){
    const infoId = useParams();


    
    const onSaveInfo = async ()=>{  

        const response = await upDateVolInfo([infoId.infoId,"True"]);
        console.log(response);
    
    }
    
    return (
        <Container20>
            <ButtonContainer>
                <TextContainer>지금 본 봉사를 ‘내가 한 봉사'로 추가하시겠습니까?</TextContainer>
                <YesNo>
                <StyledLink to="/mypage">
                    <FirstButton onClick={onSaveInfo}>네! (마이페이지에서 확인가능해요)</FirstButton>
                </StyledLink>
                <StyledLink to="/mypage">
                    <SecondButton>아니요! 다른 봉사 더 볼래요</SecondButton>
                </StyledLink>
                </YesNo>
            </ButtonContainer>
        </Container20>
    );
  }
  
  export default Register;

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
    height: 70px;
    background: #FFFAC9;
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
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