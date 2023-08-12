import { Wrapper } from "../styles/Common";
import styled from 'styled-components';
import MypageHashtag from "./MypageHashtag";


function MyTags(){
  
    return (
      <Container30>
        <TagTitle>관심 태그</TagTitle>
        <HashtagContainer>
          <MypageHashtag></MypageHashtag>

        </HashtagContainer>

      </Container30>
    );
  }
  
  export default MyTags;


const Container30 = styled.div`
display : flex;
flex-direction: column;
justify-content : space-between;
align-items : flex-start;
  width : 100%;
  height: 147px;
`
  /* Frame 408 */
const TagTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 0px;

width : 100%;
height: 53px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */

/* Dark Color */
color: #024959;

`
const HashtagContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
align-content: flex-start;
padding: 0px;
gap: 20px;
width : 100%;
height: 94px;

`




