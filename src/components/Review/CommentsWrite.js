import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GoogleProfilePic from '../Mypage/GoogleProfilePic';

function CommentsWrite({ onCommentSubmit, onLikeSubmit, numLikes, numComments }){
  const [inputText, setInputText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }
  const handleLikeSubmit = (e) => {
    e.preventDefault();
    onLikeSubmit(numLikes + 1);
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    // 작성된 글 등록 처리
    setIsSubmitted(true);
    onCommentSubmit(inputText);
    setInputText('');
  }

    return (
      <Container70>
          <GoogleProfilePic size={60}></GoogleProfilePic>
          <form>
            <CommentsWriteContainer2>
              <CommentsInput value={inputText} onChange={handleInputChange} />
              <CommentsButtonContainer>
                <CommentsButton color="#F79999" onClick={handleLikeSubmit}>응원하기</CommentsButton>
                <CommentsButton color="#2A2A2A" type="submit" onClick={handleSubmit}>등록하기</CommentsButton>
              </CommentsButtonContainer>
            </CommentsWriteContainer2>
          </form>
      </Container70>
    );
}
export default CommentsWrite;
let Container70 = styled.div`
width: 1170px;
margin-left: auto;
margin-right: auto;
padding-left: 16px;
padding-right: 16px;
display: flex;
flex-direction: row;
padding: 30px;
height: 239px;
background: #FFFAC9;
border-top: 2px #024959;
border-bottom: 2px #024959;
gap: 20px;
`;
let CommentsWriteContainer2 = styled.div`
width: 1000px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
padding: 0px;
height: 203px;
gap: 20px;
`;
/*padding-top, padding-right, padding-bottom, padding-left*/
/* Rectangle 96 */
let CommentsInput = styled.input`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
height: 162px;
box-sizing: border-box;
background: #FCFCFC;
width: 100%;
border: 1px solid #D9D9D9;
border-radius: 10px;
padding: 0px 20px 20px 20px; 
autoFocus
`;
/* Frame 129 */
let CommentsButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
padding: 0px;
gap: 10px;
width: 228px;
height: 41px;
`;
let CommentsButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;
width: 109px;
height: 41px;
background-color: ${props => props.color};
border-radius: 10px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
color: #FCFCFC;
border: none;
`;

