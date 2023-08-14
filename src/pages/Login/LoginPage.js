import { Link } from "react-router-dom";
import styled from 'styled-components';
import loginButton from '../../assets/로그인후버튼.png';
import Illust from '../../assets/일러스트.jpg';
import { Wrapper } from '../../styles/Common';
import Login from '../../components/Home/Login';
function LoginPage(){
    return(
    <Wrapper>      
      <LoginContainer>
        <Image1></Image1>
        <Greetings>
            <Greetings1>
                <GreetingsText>
                    <GreetingsText1>환영합니다!</GreetingsText1>
                    <GreetingsText1 fontSize="20px" fontWeight="400">로그인을 하고 나에게 맞는 봉사를 추천 받아보세요!</GreetingsText1>
                </GreetingsText>
                <Login></Login>             
            </Greetings1>
            <StyledLink to="/">
            <GreetingsText1 color="#7A7777" fontSize="16px" fontWeight="400">먼저 둘러보기</GreetingsText1>
            </StyledLink>
        </Greetings>
        
      </LoginContainer>  
    </Wrapper>
    );
}
export default LoginPage;


const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
gap: 50px;

position: absolute;
width: 498px;
height: 556px;
left: calc(50% - 498px/2);
top: calc(50% - 556px/2 + 30px);
`;
const Image1 = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;

width: 240px;
height: 174px;
background: url(${Illust});
background-size: cover;
background-position: center;
border: 1px solid #000000;
`;
const Greetings = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 20px;

width: 478px;
height: 282px;
`;
const Greetings1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 40px;

width: 478px;

`;
const GreetingsText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 12px;
width: 478px;
height: 113px;

`;
const GreetingsText1 = styled.div`

: ;
font-family: 'Pretendard Variable';
font-style: normal;
/* identical to box height */
text-align: center;
font-size: ${props => props.fontSize || '60px'};
font-weight: ${props => props.fontWeight || '700'};
color: ${props => props.color || '#000000'};



`;
const GreetingsText2 = styled.img`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 478px;
height: 29px;
font-family: 'Pretendard Variable';
font-style: normal;

line-height: 29px;
/* identical to box height */
text-align: center;

color: #000000;


`;
const Button = styled.button`
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 10px;


height: 68px;

background: #FFFFFF;
/* Dark Gray Color */
border: 1px solid #7E8181;
border-radius: 20px;
`;
/* Frame 50 */
const Image2 = styled.div`
width: 32px;
height: 32px;
background: url(${loginButton});
background-size: cover;
  background-position: center;
`;

const StyledLink = styled(Link)`
  width: 100%;
  &:hover {
    cursor: pointer;

}
`;