import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import HashTag from '../../components/Review/HashTag';
import pic2 from '../../프로필.jpg';
import ScrollGallery from '../../components/Review/ScrollGallery';
import UserComments from '../../components/Review/UserComments';
import CommentsWrite from '../../components/Review/CommentsWrite';
import { Link, useParams } from "react-router-dom";
import { Wrapper } from '../../styles/Common';
import { getReviewDetail } from '../../apis/Review/GetReview';

function MyPageDetail(){

  const reviewId = useParams();

  
  const [numLikes, setNumLikes] = useState(0);
  const [numComments, setNumComments] = useState(0);

  const [review, setReview] = useState({
    rid: "",
    created_at: "",
    updated_at: "",
    progrmRegistNo: "",
    title: "",
    content: "",
    is_public: "",
    writer: "",
    images:"",
  });

   // 상단 이동 버튼 생성을 위한 useRef
  const topButtonRef = useRef(null);

   // 페이지 상단으로 이동시키는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const [userComments, setUserComments] = useState([]);

  const addComment = (comment) => {
    setUserComments([...userComments, comment]);
  }

  const fetchInfo = async () =>{
    const fetchedInfo = await getReviewDetail(reviewId.reviewId);
    setReview(fetchedInfo);
  }
  
  useEffect(() => {
    setNumComments(userComments.length);
    fetchInfo();

  }, [userComments,reviewId]);

  const handleLikeSubmit = (likes) => {
    setNumLikes(likes);
  }
    return (
      <Wrapper>
        
          <Container1>
            <HashTag text={'#해시태그'}></HashTag>
            <Link to="/info">
              <ViewInfoButton>봉사 정보 보러가기</ViewInfoButton>
            </Link>
          </Container1>
          <Container2>
              <h2>{review.title}</h2>
              <Date>2023-08-05 2:10:76</Date>
          </Container2>
          <Container3>
            <ProfilePic></ProfilePic>
            <ProfileInfo>
              <ProfileName>{review.writer}</ProfileName>
              <ProfileRegion>봉사지역:</ProfileRegion>
            </ProfileInfo>
          </Container3>
          <Container4>
            <CommentsLikes>
              <Comments>
                <CommentsInfo>전체 댓글</CommentsInfo>
                <CommentsInfoNum1>{numComments}</CommentsInfoNum1>                
              </Comments>
              <DivideBar></DivideBar>
              <Comments>
                <CommentsInfo>전체 응원수</CommentsInfo>
                <CommentsInfoNum2>{numLikes}</CommentsInfoNum2>
              </Comments>
            </CommentsLikes>
          </Container4>
          <Container5>
            <ScrollGallery></ScrollGallery>
          </Container5>
          <Container6>{review.content}</Container6> 
          <Container7>
            <CommentsHeader>
              <Comments>
                <CommentsInfo>전체 댓글</CommentsInfo>
                <CommentsInfoNum1>{numComments}</CommentsInfoNum1>
                <CommentsInfo2>개</CommentsInfo2>
              </Comments>
              <DivideBar></DivideBar>
              <Comments>
                <CommentsInfo>전체 응원수</CommentsInfo>
                <CommentsInfoNum2>{numLikes}</CommentsInfoNum2>
                <CommentsInfo2>회</CommentsInfo2>
              </Comments>
              <CommentLink onClick={scrollToTop} ref={topButtonRef}>본문보기</CommentLink>
            </CommentsHeader>
            <Container8>
            <CommentsWrite onCommentSubmit={addComment} onLikeSubmit={handleLikeSubmit} 
       numLikes={numLikes} numComments={numComments} ></CommentsWrite>
          </Container8>
          <Container9>
            {userComments.map((comment, index) => (
              <UserComments key={index} text={comment} to='./'></UserComments>
            ))}
          </Container9>
          </Container7>          
        
        </Wrapper>
    );
    
}
export default MyPageDetail;
let Container1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
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
  border: none;
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
  height: 85px;
`;
let ProfileName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 20px;
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
  justify-content: flex-start;
  align-items: center;
  padding: 8px 20px;
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
  border-bottom: 2px solid #000000;
  gap: 13px;
`;
let Comments = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  height: 37px;
`;
/*padding-top, padding-right, padding-bottom, padding-left*/ 
let CommentsInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 37px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #000000;
padding-right: 10px;
`;
let CommentsInfo2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 37px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #000000;
`;
let CommentsInfoNum1= styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 37px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 17px;
color: #F74E43;
`;
let CommentsInfoNum2= styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 37px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 17px;
color: #F74E43;
`;
let DivideBar= styled.div`
  width: 1px;
  height: 60%;
  background: black;
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
padding: 50px 0px 100px;
gap: 10px;
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
width: 100%
`;
let CommentsHeader= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 0px 0px;
gap: 10px;
height: 61px;
width: 100%;
`;
let CommentLink = styled.button`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
padding: 10px 0px 10px 10px;
gap: 10px;
margin-left: auto;
height: 41px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #000000;
&:hover {
  text-decoration: underline;
  cursor: pointer;
}
border: none;
background-color: white;
`;
let Container8 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 16px;
`;
/*padding-top, padding-right, padding-bottom, padding-left*/ 
let Container9 = styled.button`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 30px 0px 100px 0px;
background-color: transparent;
`;
