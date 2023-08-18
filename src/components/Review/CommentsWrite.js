import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GoogleProfilePic from '../Mypage/GoogleProfilePic';
import { cheerClick } from '../../apis/Review/GetReview';
import { cheerCancel} from '../../apis/Review/GetReview';

function CommentsWrite({ onCommentSubmit, onLikeSubmit, numLikes, numComments }){
  const [inputText, setInputText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);//true:응원하기 버튼이 눌러짐
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }
  const reviewIdObj = useParams();
  const handleLikeSubmit = (e) => {
    e.preventDefault();
    const rid = reviewIdObj.reviewId;
    if (!isLiked) {
      onLikeSubmit(numLikes + 1);
      console.log(numLikes);
      console.log(isLiked);
      cheerClick(rid); // 이미 async 함수로 선언되어 있기 때문에 별도 처리가 필요 없습니다.
    } else {
      const code = cheerCancel(rid);      
      if (code === 400){
        onLikeSubmit(numLikes + 1);  
        console.log(numLikes);     
      } else {
        onLikeSubmit(numLikes - 1);
        console.log(numLikes);
        console.log(isLiked);       
      } 
    }
    setIsLiked(!isLiked);
  }; 
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
          <CommentsWriteContainer2>
            <CommentsInput value={inputText} onChange={handleInputChange} />
              <CommentsButtonContainer>
                <CommentsButton color="#F79999" onClick={handleLikeSubmit}>응원하기</CommentsButton>
                <CommentsButton color="#2A2A2A" type="submit" onClick={handleSubmit}>등록하기</CommentsButton>
              </CommentsButtonContainer>
          </CommentsWriteContainer2>
      </Container70>
    );
}
export default CommentsWrite;

let Container70 = styled.div`
margin-left: auto;
margin-right: auto;
padding-left: 16px;
padding-right: 16px;
display: flex;
flex-direction: row;
padding: 30px;
background: #FFFAC9;
border-top: 2px #024959;
border-bottom: 2px #024959;
border-radius: 10px;
gap: 20px;
@media only screen and (min-width: 768px) {
  width: 720px;
}

@media only screen and (min-width: 1000px) {
  width: 1000px;
}
@media only screen and (min-width: 1100px) {
  width: 1100px;
}

@media only screen and (min-width: 1200px) {
  width: 100%;
}


`;
let CommentsWriteContainer2 = styled.div`
width: 100%;
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

