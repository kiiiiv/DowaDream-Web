import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GoogleProfilePic from '../../components/Mypage/GoogleProfilePic';
import EmojiPic from '../../assets/Emoji.png';
import { Wrapper } from '../../styles/Common';
import MyVolunteerNavbar from '../../components/Mypage/MyVolunteerNavbar';
import MyReview from '../../components/Mypage/MyReview/MyReview';
import MyTags from '../../components/MyTags';
import ReviewWriteModal from '../../components/Mypage/ReviewWriteModal';
import { upDateVolInfo } from '../../apis/Program/ProgramInfo';

function MyPage() {

  const { mypageLoc } = useParams();

  const [showReview, setShowReview] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(mypageLoc);
  const [showVolunteerNavbar, setShowVolunteerNavbar] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [memoText, setMemoText] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleModalClick = (e) => {
    // 모달 배경을 클릭하면 모달을 닫도록 처리
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  

  const handleCategoryClick = (category) => { 

    setSelectedCategory(category);
    window.history.pushState({}, null, `/mypage/${category}`);

    setShowVolunteerNavbar(category === 'volunteer');
    setShowReview(category === 'review');
    setShowTags(category === 'tags');
  };

  const handleMemoClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setMemoText(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <Wrapper>
      <Profile>
        <GoogleProfilePic size={142}></GoogleProfilePic>
        <ProfilePrivate>
          <ProfileName>성민</ProfileName>
          <ProfileEmail>sungin633236@gmail.com</ProfileEmail>
          <Container91>
            <ProfileMemo1>
              {isEditing ? (
                <MemoInput
                  value={memoText}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
              ) : (
                memoText || '봉사 다짐을 입력해보세요!'
              )}
            </ProfileMemo1>
            <Emoji onClick={handleMemoClick}></Emoji>
          </Container91>
        </ProfilePrivate>
      </Profile>
      <Container90>
        <MypageCategory
          style={selectedCategory === 'volunteer' ? { backgroundColor: '#FFE34F' } : {}}
          onClick={() => handleCategoryClick('volunteer')}
        >
          나의 봉사
        </MypageCategory>
        <MypageCategory
          style={selectedCategory === 'review' ? { backgroundColor: '#FFE34F' } : {}}
          onClick={() => handleCategoryClick('review')}
        >
          나의 후기
        </MypageCategory>
        <MypageCategory
          style={selectedCategory === 'tags' ? { backgroundColor: '#FFE34F' } : {}}
          onClick={() => handleCategoryClick('tags')}
        >
          관심 태그 및 지역
        </MypageCategory>
      </Container90>
      {showVolunteerNavbar && <MyVolunteerNavbar />}
      {showReview &&
      <div>
        <ReviewWritediv>
          <ReviewWriteText onClick={()=>setIsOpenModal(!isOpenModal)}>
            후기 작성하러 가기 →  
          </ReviewWriteText>
        </ReviewWritediv>
        {
          isOpenModal &&
          
          <ModalOverlay onClick={(e)=>handleModalClick(e)}>
            <ReviewWriteModal></ReviewWriteModal>
          </ModalOverlay>
        }
        <MyReview />
      </div>
      }
      {showTags && <MyTags />}
    </Wrapper>
  );
}

export default MyPage;

const Profile = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 40px 0px 64px;
gap: 64px;
height: 246px;
`;
const ProfilePrivate = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
height: 142px;
`;
const ProfileName = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 0px;

width: 103px;
height: 55px;
justify-content: center;

padding: 8px 8px 4px 0px;
gap: 10px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 43px;
/* identical to box height */

color: #000000;

`;
const ProfileEmail = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px 8px 0px;

width: 300px;
height: 41px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;
`;


const Container90 = styled.div`
display: flex;
flex-direction: row ;
align-items: flex-start;
justify-content: center;
padding: 0px;
width: 100%;
`;
const Container91 = styled.div`
display: flex;
flex-direction: row ;
justify-content: flex-start;
gap: 10px;
height: 40px;
width: 100%;
`;
const MypageCategory = styled.button`
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;
height: 69px;
flex-grow: 1;
/* Gray Color */
border-width: 2px 0px;
border-style: solid;
border-color: #A0A0A0;
background-color: white;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;

color: black;
&:hover {
  cursor: pointer;
  background-color: #FFE34F;
}

`;
const ProfileMemo1 = styled.div`
align-items: center;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;

color: #000000;


`;
const Emoji = styled.div`

width: 32px;
height: 32px;
background-image: url(${EmojiPic});
background-size: cover;
background-position: center;
`;
const MemoInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 10px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #000000;

  border: none;
  border-bottom: 2px solid #7e8181;
`;

const ReviewWritediv = styled.div`


  margin-top : 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;

`

const ReviewWriteText = styled.span`

color: #000;
font-size: 2em;
font-style: normal;
font-weight: 700;
line-height: normal;
&:hover {
  text-decoration: underline;
  cursor: pointer; // 마우스 올리면 밑줄이 생기도록 추가
}
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 배경 블러처리 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
`;
