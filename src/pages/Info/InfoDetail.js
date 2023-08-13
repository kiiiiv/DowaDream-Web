import React, { useState } from 'react'
import { Wrapper } from '../../styles/Common'
import styled from 'styled-components'
import Like from '../../../src/assets/좋아요.svg'
import Like2 from '../../assets/좋아요색변화.svg'
import Scrap from '../../../src/assets/스크랩.svg'
import Scrap2 from '../../assets/스크랩색변화.svg'
import DropDown from '../../components/DropDown';
import MainInfoVol from '../../components/MainInfoVol';
import InfoSelectionList from '../../components/Maininfo/InfoSelectionList';
import InfoSelectionTagList from '../../components/Maininfo/InfoSelectionTagList';
import ReviewItem from '../../Review/ReviewItem';
function InfoDetail(){
    const [likeClicked, setLikeClicked] = useState(false); // State to track like button click
    const [scrapClicked, setScrapClicked] = useState(false); // State to track like button click


    const handleLikeClick = () => {
        setLikeClicked(!likeClicked);
    };

    
    const handleScrapClick = () => {
        setScrapClicked(!textBolClicked);
    };


  return (
    <Wrapper>
        <Image></Image>
        <InfoContainer>
            <InfoTitleContainer>
                <InfoTitleButtonBox>
                    <InfoTitleButton>모집마감</InfoTitleButton>
                </InfoTitleButtonBox>
                <InfoTitle>드럼 교육 봉사활동</InfoTitle>
            </InfoTitleContainer>
            <InfoBox>
                <Table></Table>
                <Table></Table>
                <Table></Table>
            </InfoBox>
        </InfoContainer>
        <LikesScrapContainer>
            <LikesScrapContainer2>
                <LikesContainer isFirst>
                    <img 
                        src={textBolClicked ? Like2 : Like} // Toggle between Like and TextBol based on likeClicked state
                        onClick={()=>handleBolClick()} // Attach click event handler
                        alt="Like"
                    ></img>
                    응원하기
                </LikesContainer>
                <LikesContainer>
                    <img 
                        src={textBolClicked ? Scrap2 : Scrap} // Toggle between Like and TextBol based on likeClicked state
                        onClick={()=>handleScrapClick()} // Attach click event handler
                        alt="Scrap"
                    ></img>
                    스크랩
                </LikesContainer>
                <LikesScrapText>
                    <TextContainer>
                        응원수 n회
                    </TextContainer>
                    <TextContainer>
                        스크랩 n개
                    </TextContainer>
                </LikesScrapText>

            </LikesScrapContainer2>
        </LikesScrapContainer>
        <MainTextContainer>
            활동 내용 (데이터 가져와서 들어갈 곳)
        </MainTextContainer>
        <ReviewContainer>
            <ReviewTitle>후기</ReviewTitle>
            <ReviewInfoWrapper>
                <ReviewItemWrapper>
                    <ReviewItem></ReviewItem>
                    <ReviewItem></ReviewItem>
                    <ReviewItem></ReviewItem>
                </ReviewItemWrapper>
          </ReviewInfoWrapper>
        </ReviewContainer>



    </Wrapper>

  );
};

export default InfoDetail;

const Container15 = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 40px;

position: absolute;
width: 1536px;
height: 2773.39px;
left: calc(50% - 1536px/2);
top: 80px;

`
const Image = styled.div`

width: 100%;
height: 500px;

background: url(Checker.png);

`
const InfoContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
width: 100%;
height: 899px;

`
const InfoTitleContainer = styled.div`

box-sizing: border-box;
/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 20px 0px;
width: 100%;
height: 89px;
border-width: 4px 0px 1px 0px;
border-style: solid;
border-color: #000000;

`
const InfoTitleButtonBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 30px;
gap: 10px;

width: 220px;
height: 49px;

`
const InfoTitleButton = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 30px;

width: 160px;
height: 49px;

/* Light Gray Color */
background: #D9D9D9;
border-radius: 30px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
/* identical to box height */

color: #000000;

`
const InfoTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 30px 0px 20px;
gap: 10px;

width: 1316px;
height: 49px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;

color: #000000;


`
const InfoBox = styled.div`
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 1536px;
height: 180px;

border-top: 2px solid #000000;



`
const LikesScrapContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 1536px;
height: 131px;
`
const LikesScrapContainer2 = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 20px 0px 0px;

width: 238px;
height: 72px;

`
const LikesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;

width: 124px;
height: 52px;
border-radius: ${({ isFirst }) => isFirst ? '20px 0px 0px 20px' : '0px 20px 20px 0px'};
/* Light Gray Color */
background: #D9D9D9;

`
const LikesScrapText = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px 0px 20px;

width: 238px;
height: 59px;

`
const TextContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 124px;
height: 39px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;
/* color: #F74E43; */


`
const MainTextContainer = styled.div`
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 20px;

width: 1536px;
height: 439px;

/* Dark Gray Color */
border-width: 1px 0px;
border-style: solid;
border-color: #7E8181;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #000000;


`
const ReviewContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 40px;

width: 1536px;
height: 783.39px;


`
const ReviewTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 0px;
gap: 925px;

width: 1536px;
height: 73px;

background: #FFFFFF;
padding: 10px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */

color: #000000;


`
const Review = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 20px;

width: 1536px;
height: 670.39px;

`
const ReviewInfoWrapper = styled.div`

    width : 100%
    height : auto;

    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
    gap: 64px;
    padding: 30px 0px 0px 0px;
`;
const ReviewItemWrapper = styled.div`

    display: flex;
    justify-content : space-between;

    width: 100%;
    height : auto;
    align-items: center;

`;


