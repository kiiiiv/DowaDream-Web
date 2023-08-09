import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoogleProfilePic from './GoogleProfilePic';


function UserComments({text, to}) {
  return (
    <div className='Wrapper'>
      <Container60>  
          <GoogleProfilePic size={45}></GoogleProfilePic>
          <Container62>
              <CommentsName>이름</CommentsName>
              <CommentsText>{text}</CommentsText>
          </Container62>
      </Container60>
    </div>
  );
}

export default UserComments;

const Container60 = styled.div`
max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-stretch;
    padding: 20px 20px 10px;
    width: 1170px;
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    gap: 20px
`;
/* Frame 109 */
const Container62 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 3px 0px 0px 16px;
width: 90%;
`;
const CommentsName = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 0px;
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
justify-content: flex-start;
align-items: center;
padding: 0px;

height: 34px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #000000;
`;


