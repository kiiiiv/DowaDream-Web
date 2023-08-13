import { styled } from "styled-components";
import React, { useState } from 'react'

function VolunteerInfo() {
  const array = ["태그","모집기관","장소","모집기간", "봉사기간","봉사시간","등록기관","성인 신청가능여부","청소년 신청가능여부",  ];

  return (
    <>
    <InfoTitleContainer>
      <InfoTitleButtonBox>
        <InfoTitleButton>모집마감</InfoTitleButton>
      </InfoTitleButtonBox>
      <InfoTitle>드림 교육 봉사활동</InfoTitle>
    </InfoTitleContainer>
    <InfoBox>
    {array.map((item, i) => (
        <Container100 key={i}>
          <Main>{item}</Main>
          <Main2></Main2>
        </Container100>
      ))}
    </InfoBox>
    </>


  );
}

export default VolunteerInfo;

const InfoTitleContainer = styled.div`

box-sizing: border-box;
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
display: flex;
flex-direction: row;
align-content: flex-start;
padding: 0px;
width: 100%;
border-top: 2px solid #000000;
`
const Container100 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-contents: flex-start;
  padding: 0px;
  margin: 0 auto;
  height: 53px;
`;

const Main = styled.div`
  padding: 16px 10px;
  gap: 10px;
  width: 30%;
  /* Secondary Yellow  Color */
  background: #fffac9;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #000000;
`;

const Main2 = styled.div`
  padding: 16px 10px;
  gap: 10px;
  width: 70%;
  /* Secondary Yellow  Color */
  background: white;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  /* Dark Gray Color */
  color: #7e8181;
`;