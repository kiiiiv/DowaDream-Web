import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoogleProfilePic from './GoogleProfilePic';

function UserComments({text, to}) {
  return (
    <Container60>
        <Container61>
            <GoogleProfilePic size={30}></GoogleProfilePic>
        </Container61>
        <Container62>
            <CommentsName>신채현</CommentsName>
            <CommentsText>좋은 후기 감사해요~ 복 받으세요~</CommentsText>
        </Container62>
    </Container60>
  );
}

export default UserComments;

const Container60 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 20px 24px;
    width: 1536px;
    height: 83px;
    background-color:light-pink;
`;
/* Frame 109 */

const Container61 = styled.div`
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px;

width: 38px;
height: 38px;

/* Secondary Yellow  Color */
border: 4px solid #FFFAC9;
border-radius: 30px;
`;
const Container62 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 0px 16px;
width: 1448px;
height: 59px;
`;
const CommentsName = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 0px;

width: 37px;
height: 25px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #000000;
`;
const CommentsText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

width: 1432px;
height: 34px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #000000;

`;


