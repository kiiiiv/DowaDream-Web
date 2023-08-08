import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HashTag from '../components/HashTag';
import pic2 from '../프로필.jpg';
import ScrollGallery from '../components/ScrollGallery';
import GoogleProfilePic from '../components/GoogleProfilePic';
import UserComments from '../components/UserComments';

function MyPageDetail(){
    return (
        <div className='Wrapper'>
          <Container1>
            <HashTag></HashTag>
            <ViewInfoButton>봉사 정보 보러가기</ViewInfoButton>
          </Container1>
          <Container2>
              <h2>어쩌구 저쩌구 우당탕탕 봉사 후기</h2>
              <Date>2023-08-05 2:10:76</Date>
          </Container2>
          <Container3>
            <ProfilePic></ProfilePic>
            <ProfileInfo>
              <ProfileName>이름</ProfileName>
              <ProfileRegion>봉사지역:</ProfileRegion>
            </ProfileInfo>
          </Container3>
          <Container4>
            <CommentsLikes>
              <Comments>
                <CommentsInfo>댓글</CommentsInfo>
                <CommentsInfoNum>15</CommentsInfoNum>                
              </Comments>
              <DivideBar></DivideBar>
              <Comments>
                <CommentsInfo>응원 수</CommentsInfo>
                <CommentsInfoNum>5</CommentsInfoNum>
              </Comments>

            </CommentsLikes>
          </Container4>
          <Container5>
            <ScrollGallery></ScrollGallery>
          </Container5>
          <Container6>ㅇㄹㅇㅁㄹ ㅁ ㅇㅁㄹㅇㄹㅁ ㅁㅇㄹㅁㅇㄹ ㅁㅇㄹㄹㅇㅁㄹㅇㅁㄹㅁ ㅇㅁㄹㅁ ㅇㅇㄴㅁㅌㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ ㅇㄹㅇㅁ ㅇ ㅇ ㅇ ㅇ ㅇ ㅇ ㅇ ㅇ 텍스트 이러쿵 저러쿵 뭐시기 저시기 어쩔 저쩔</Container6> 
          <Container7>
            <CommentsHeader>
            <Comments>
                <CommentsInfo>댓글</CommentsInfo>
                <CommentsInfoNum>15</CommentsInfoNum>
                <CommentsInfo>개</CommentsInfo>
              </Comments>
              <DivideBar></DivideBar>
              <Comments>
                <CommentsInfo>응원 수</CommentsInfo>
                <CommentsInfoNum>5</CommentsInfoNum>
                <CommentsInfo>회</CommentsInfo>
              </Comments>
              <CommentLink></CommentLink>
            </CommentsHeader>
          </Container7>
          <Container8>
            <CommentsWrite>
              <CommentsWriteContainer>
                <GoogleProfilePic size={48}></GoogleProfilePic>
              </CommentsWriteContainer>
              <CommentsWriteContainer2>
                <CommentsWriteContainer3>
                  <CommentsInput></CommentsInput>
                </CommentsWriteContainer3>
                <CommentsButton>
                  <CommentsButton color="#F79999"></CommentsButton>
                  <CommentsButton color="#2A2A2A"></CommentsButton>
                </CommentsButton>
              </CommentsWriteContainer2>
            </CommentsWrite>
          </Container8>
          <Container9>
            <UserComments></UserComments>
          </Container9>
        </div>
    );
}
export default MyPageDetail;
let Container1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 40px;
`;
let ViewInfoButton = styled.button`  
  justify-content: center;
  padding: 10px 20px;
  gap: 10px;
  width: 218px;
  height: 49px;
  background: #FFE34F;
  border-radius: 10px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 29px;


`;
let Box = styled.div`
  padding: 20px;
  background: grey;
`
let Container2 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px 0px 0px;
  gap: 10px;
  height: 81px;
  border-bottom: 4px solid #000000;
`;
let Date = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px 10px 8px;
  width: 209px;
  height: 44px;
`;
let Container3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;

  width: 343px;
  height: 140px;
`;
let ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(${pic2});
`;
let ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 223px;
  height: 85px;
`;
let ProfileName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  gap: 10px;
  width: 100px;
  height: 45px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;
let ProfileRegion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 8px 0px;
  gap: 4px;
  width: 223px;
  height: 40px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  font-color: #7E8181;
  line-height: 24px;

`;
let Container4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 40px;
  height: 77px;
`;
let CommentsLikes = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 37px;
  border-bottom: 1px solid #000000;
`;
let Comments = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 72px;
  height: 37px;
`;
let CommentsInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
width: 45px;
height: 37px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #000000;
`;
let CommentsInfoNum= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 12px 10px 0px;
gap: 10px;

width: 27px;
height: 37px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #F74E43;
`;
let DivideBar= styled.div`
  width: 1px;
  height: 11px;
  background: #A0A0A0;
`;
let Likes= styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 69px;
  height: 37px;
`;
let LikesText= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 60px;
  height: 37px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
let LikesTextNum= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  width: 9px;
  height: 37px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #F74E43;

`;
/* Frame 87 */
let Container5= styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 0px 20px;
height: 420px;
background-color: #f1f1f1;
`;
let Container6= styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px 20px;
gap: 10px;
height: 452px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #000000;

`;
/* 댓글 container */
let Container7= styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
height: 1561px;
`;
let CommentsHeader= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 20px 0px 0px;
gap: 10px;
height: 61px;
`;
let CommentLink = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 0px 10px 10px;
gap: 10px;
margin: 0 auto;
width: 73px;
height: 41px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #000000;
`;
let Container8 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 16px;
height: 255px;
`;
/* Frame 126 */
let CommentsWrite = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
height: 239px;
background: #FFFAC9;
border-top: 2px #024959;
border-bottom: 2px #024959;
`;
let CommentsWriteContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 16px 0px 16px 20px;
width: 95%;
height: 235px;
`;
let CommentsWriteContainer2 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
padding: 0px;
height: 203px;
`;
/* Frame 127 */
let CommentsWriteContainer3 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
padding: 0px 0px 12px 20px;
height: 162px;
`;
/* Rectangle 96 */
let CommentsInput = styled.div`
box-sizing: border-box;
width: 1372px;
height: 150px;
background: #FCFCFC;
/* Light Gray Color */
border: 1px solid #D9D9D9;
border-radius: 10px;
`
/* Frame 129 */
let CommentsButton = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
padding: 0px;
gap: 10px;
width: 228px;
height: 41px;
`
/* Frame 91 */
let CommentsButton1 = styled.button`
background-color: ${props => props.color || '#ffffff'};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 23px;
gap: 10px;
width: 109px;
height: 41px;
border-radius: 10px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
font-color: #FCFCFC;
line-height: 21px;
`
/* Frame 110 */
let Container9 = styled.button`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 1536px;
height: 1245px;
`
