import React, { useState } from 'react'
import { Wrapper } from '../../styles/Common'
import styled from 'styled-components'
import DropDown from '../../components/DropDown';
import MainInfoVol from '../../components/MainInfoVol';
import InfoSelectionList from '../../components/Maininfo/InfoSelectionList';
import InfoSelectionTagList from '../../components/Maininfo/InfoSelectionTagList';

function InfoDetail(){


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
const InfoTitle = styled.div`

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









/* Frame 225 */

/* Auto layout */



/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 1;


/*  */

width: 1266px;
height: 38px;



/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 259 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 1536px;
height: 180px;

border-top: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 257 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px;

width: 1536px;
height: 53px;

/* Light Gray Color */
border-bottom: 1px solid #D9D9D9;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 248 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;
height: 53px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 237 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 53px;

/* Secondary Yellow  Color */
background: #FFFAC9;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 태그 */

width: 94px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 238 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* #교육 */

width: 358px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 249 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;
height: 53px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 237 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 53px;

/* Secondary Yellow  Color */
background: #FFFAC9;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 모집기관 */

width: 94px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 238 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 새빛바울의집 */

width: 94px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 250 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;
height: 53px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Frame 237 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 53px;

/* Secondary Yellow  Color */
background: #FFFAC9;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 장소 */

width: 94px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 238 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 새빛바울의집 */

width: 94px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 258 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px;

width: 1536px;
height: 53px;

/* Light Gray Color */
border-bottom: 1px solid #D9D9D9;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 248 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;
height: 53px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 237 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 53px;

/* Secondary Yellow  Color */
background: #FFFAC9;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 모집기간 */

width: 94px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 238 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 2023.05.06 ~ 2023.08.06 */

width: 222px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 249 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;
height: 53px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 237 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 53px;

/* Secondary Yellow  Color */
background: #FFFAC9;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 봉사기간 */

width: 94px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 238 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 2023.05.06 ~ 2023.08.06 */

width: 222px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 250 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;
height: 53px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Frame 237 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 53px;

/* Secondary Yellow  Color */
background: #FFFAC9;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 봉사시간 */

width: 94px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 238 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 10시 0분 ~ 17시 0분 */

width: 154px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 259 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px;

width: 1536px;
height: 74px;

/* Light Gray Color */
border-bottom: 1px solid #D9D9D9;

/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 1;


/* Frame 248 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;
height: 74px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Frame 237 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 74px;

/* Secondary Yellow  Color */
background: #FFFAC9;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* 등록기관 */

width: 94px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 238 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 서울특별시 서초구 */

width: 129px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 249 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;
height: 74px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* Frame 237 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 74px;

/* Secondary Yellow  Color */
background: #FFFAC9;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* 성인 신청가능여부 */

width: 94px;
height: 42px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 238 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* O */

width: 14px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 250 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;
height: 74px;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;


/* Frame 237 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 74px;

/* Secondary Yellow  Color */
background: #FFFAC9;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* 청소년 신청가능여부 */

width: 94px;
height: 42px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 238 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* X */

width: 13px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 277 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 1536px;
height: 131px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Frame 275 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 238px;
height: 131px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 274 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 20px 0px 0px;

width: 238px;
height: 72px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 272 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;

width: 124px;
height: 52px;

/* Light Gray Color */
background: #D9D9D9;
border-radius: 20px 0px 0px 20px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 4 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 0px 10px 10px;
gap: 10px;

width: 34px;
height: 44.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

width: 24px;
height: 24.39px;

background: #FFFFFF;
border: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 271 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 12px 10px 10px;
gap: 10px;

width: 78px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 응원하기 */

width: 56px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 273 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

width: 114px;
height: 52px;

/* Light Gray Color */
background: #D9D9D9;
border-radius: 0px 20px 20px 0px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 2 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 0px 10px 12px;
gap: 10px;

width: 30.58px;
height: 44px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Group 1 */

width: 18.58px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 39.24%;
right: 0%;
top: 22.73%;
bottom: 22.73%;

background: #FFFFFF;
border: 2px solid #000000;


/* Frame 270 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 62px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 스크랩 */

width: 42px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 269 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px 0px 20px;

width: 238px;
height: 59px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 267 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 124px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 265 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 12px 10px 0px;
gap: 10px;

width: 54px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 응원수 */

width: 42px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 264 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 0px;
gap: 10px;

width: 9px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 7 */

width: 9px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #F74E43;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 263 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 10px 10px 0px;
gap: 10px;

width: 24px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 회 */

width: 14px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 266 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 114px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 260 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 12px 10px 0px;
gap: 10px;

width: 54px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 스크랩 */

width: 42px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 261 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 0px;
gap: 10px;

width: 19px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 25 */

width: 19px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #F74E43;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 262 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 10px 10px 0px;
gap: 10px;

width: 24px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 개 */

width: 14px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 297 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 40px;

width: 1536px;
height: 479px;


/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;


/* Frame 276 */

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

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 활동 내용 (데이터 가져와서 들어갈 곳) Pretendard Regular 16 안녕하세요. 새빛바울의집입니다.저희 기관에서는 시각장애인들에게 드럼 교육 봉사 해주실 자원봉사자를 모집합니다.많은 관심과 참여 부탁드립니다.** 자원봉사 활동 실제시간에 따라 자원봉사 시간이 부여됨.1. 일시 : 2023.2.6 ~ 5.5 (평일 활동)2. 장소 : 새빛바울의집3. 시간 : 10:00 ~ 17:00 (시간대 안에서 조정, 1일 최대 2시간)4. 모집인원 : 1명 <<일회성 아닌 중장기 봉사 희망합니다.>>**** 참여 하시기 전에 당사의 담당자와 꼭 상의 하셔서 일정 조율 하시기바랍니다.담당자 : 최훈 010-4352-0355 담당자명 : 서지혜 전화번호 : 02-532-9023 FAX : 02-532-9025 주소 : 서울특별시 서초구 방배중앙로 97-1 */

width: 1496px;
height: 399px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 305 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 1536px;
height: 1334.39px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Frame 35 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 40px;

width: 1536px;
height: 783.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 23 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 0px;
gap: 925px;

width: 1536px;
height: 73px;

background: #FFFFFF;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Frame 15 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 10px;

width: 62px;
height: 49px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 후기 */

width: 42px;
height: 29px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 31 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 20px;

width: 1536px;
height: 670.39px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* Frame 295 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 670.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 296 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px 12px;
gap: 10px;

width: 475px;
height: 501px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Rectangle 127 */

width: 475px;
height: 489px;

background: url(Checker.png);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;


/* Frame 294 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 12px 0px;

width: 475px;
height: 169.39px;

/* Secondary Yellow  Color */
background: #FFFAC9;
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 293 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;

width: 475px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 283 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 20px 0px 0px;

margin: 0 auto;
width: 367px;
height: 60px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 278 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;

width: 60px;
height: 60px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Rectangle 126 */

width: 40px;
height: 40px;

background: url(Checker.png);
border-radius: 50px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 279 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;

width: 287px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 나상현 */

width: 47px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 292 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 108px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 291 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 10px;

width: 44px;
height: 65px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 4 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

width: 24px;
height: 24px;

/* White Color */
background: #FCFCFC;
border: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 287 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 0px 0px;

width: 8px;
height: 25px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 7 */

width: 8px;
height: 17px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 290 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 20px;

width: 64px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 4 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 24px;
height: 24.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

width: 24px;
height: 24.39px;

background: #FFFFFF;
border: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 288 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 0px 0px;

width: 15px;
height: 25px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 15 */

width: 15px;
height: 17px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 286 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 80px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 284 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 80px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 285 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px 10px;

width: 475px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Frame 280 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px 10px 0px;
gap: 10px;

margin: 0 auto;
width: 299px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* 우당탕당 나의 봉사 후기 아러미아러 아ㅓㄹ ㅣㅁ얼 ㅣ아ㅓ ㅁ */

width: 279px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 281 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

margin: 0 auto;
width: 156px;
height: 41px;

/* Dark Color */
background: #024959;
border-radius: 30px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* #하나둘셋넷다섯섯 */

width: 136px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* White Color */
color: #FCFCFC;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 282 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 475px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* 오늘 간 봉사 어쩌구 저쩌구는 매우매우 아주 재미있고 뿌듯하고 보람 찼다 어쩌구 저쩌구 */

width: 455px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 296 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 670.39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 296 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px 12px;
gap: 10px;

width: 475px;
height: 501px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Rectangle 127 */

width: 475px;
height: 489px;

background: url(Checker.png);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;


/* Frame 294 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 12px 0px;

width: 475px;
height: 169.39px;

/* Secondary Yellow  Color */
background: #FFFAC9;
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 293 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;

width: 475px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 283 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 20px 0px 0px;

margin: 0 auto;
width: 367px;
height: 60px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 278 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;

width: 60px;
height: 60px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Rectangle 126 */

width: 40px;
height: 40px;

background: url(Checker.png);
border-radius: 50px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 279 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;

width: 287px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 나상현 */

width: 47px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 292 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 108px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 291 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 10px;

width: 44px;
height: 65px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 4 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

width: 24px;
height: 24px;

/* White Color */
background: #FCFCFC;
border: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 287 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 0px 0px;

width: 8px;
height: 25px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 7 */

width: 8px;
height: 17px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 290 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 20px;

width: 64px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 4 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 24px;
height: 24.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

width: 24px;
height: 24.39px;

background: #FFFFFF;
border: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 288 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 0px 0px;

width: 15px;
height: 25px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 15 */

width: 15px;
height: 17px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 286 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 80px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 284 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 80px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 285 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px 10px;

width: 475px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Frame 280 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px 10px 0px;
gap: 10px;

margin: 0 auto;
width: 299px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* 우당탕당 나의 봉사 후기 아러미아러 아ㅓㄹ ㅣㅁ얼 ㅣ아ㅓ ㅁ */

width: 279px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 281 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

margin: 0 auto;
width: 156px;
height: 41px;

/* Dark Color */
background: #024959;
border-radius: 30px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* #하나둘셋넷다섯섯 */

width: 136px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* White Color */
color: #FCFCFC;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 282 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 475px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* 오늘 간 봉사 어쩌구 저쩌구는 매우매우 아주 재미있고 뿌듯하고 보람 찼다 어쩌구 저쩌구 */

width: 455px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 297 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 670.39px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Frame 296 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px 12px;
gap: 10px;

width: 475px;
height: 501px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Rectangle 127 */

width: 475px;
height: 489px;

background: url(Checker.png);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;


/* Frame 294 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 12px 0px;

width: 475px;
height: 169.39px;

/* Secondary Yellow  Color */
background: #FFFAC9;
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 293 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;

width: 475px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 283 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 20px 0px 0px;

margin: 0 auto;
width: 367px;
height: 60px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 278 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;

width: 60px;
height: 60px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Rectangle 126 */

width: 40px;
height: 40px;

background: url(Checker.png);
border-radius: 50px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 279 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;

width: 287px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 나상현 */

width: 47px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 292 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 108px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 291 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 10px;

width: 44px;
height: 65px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 4 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

width: 24px;
height: 24px;

/* White Color */
background: #FCFCFC;
border: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 287 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 0px 0px;

width: 8px;
height: 25px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 7 */

width: 8px;
height: 17px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 290 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 20px;

width: 64px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 4 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 24px;
height: 24.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

width: 24px;
height: 24.39px;

background: #FFFFFF;
border: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 288 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 0px 0px;

width: 15px;
height: 25px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 15 */

width: 15px;
height: 17px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 286 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 80px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 284 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 80px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 285 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px 10px;

width: 475px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Frame 280 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px 10px 0px;
gap: 10px;

margin: 0 auto;
width: 299px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* 우당탕당 나의 봉사 후기 아러미아러 아ㅓㄹ ㅣㅁ얼 ㅣ아ㅓ ㅁ */

width: 279px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 281 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

margin: 0 auto;
width: 156px;
height: 41px;

/* Dark Color */
background: #024959;
border-radius: 30px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* #하나둘셋넷다섯섯 */

width: 136px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* White Color */
color: #FCFCFC;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 282 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 475px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* 오늘 간 봉사 어쩌구 저쩌구는 매우매우 아주 재미있고 뿌듯하고 보람 찼다 어쩌구 저쩌구 */

width: 455px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 298 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 670.39px;


/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;


/* Frame 296 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px 12px;
gap: 10px;

width: 475px;
height: 501px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Rectangle 127 */

width: 475px;
height: 489px;

background: url(Checker.png);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;


/* Frame 294 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 12px 0px;

width: 475px;
height: 169.39px;

/* Secondary Yellow  Color */
background: #FFFAC9;
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 293 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;

width: 475px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 283 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 20px 0px 0px;

margin: 0 auto;
width: 367px;
height: 60px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 278 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;

width: 60px;
height: 60px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Rectangle 126 */

width: 40px;
height: 40px;

background: url(Checker.png);
border-radius: 50px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 279 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;

width: 287px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* 나상현 */

width: 47px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 292 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 108px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 291 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 10px;

width: 44px;
height: 65px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 4 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

width: 24px;
height: 24px;

/* White Color */
background: #FCFCFC;
border: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 287 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 0px 0px;

width: 8px;
height: 25px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 7 */

width: 8px;
height: 17px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 290 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 20px;

width: 64px;
height: 65.39px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 4 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 24px;
height: 24.39px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

width: 24px;
height: 24.39px;

background: #FFFFFF;
border: 2px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 288 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 0px 0px;

width: 15px;
height: 25px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 15 */

width: 15px;
height: 17px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 286 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 80px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 284 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 475px;
height: 80px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 285 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px 10px;

width: 475px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Frame 280 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px 10px 0px;
gap: 10px;

margin: 0 auto;
width: 299px;
height: 41px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* 우당탕당 나의 봉사 후기 아러미아러 아ㅓㄹ ㅣㅁ얼 ㅣ아ㅓ ㅁ */

width: 279px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 281 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

margin: 0 auto;
width: 156px;
height: 41px;

/* Dark Color */
background: #024959;
border-radius: 30px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* #하나둘셋넷다섯섯 */

width: 136px;
height: 21px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

/* White Color */
color: #FCFCFC;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 282 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 475px;
height: 39px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* 오늘 간 봉사 어쩌구 저쩌구는 매우매우 아주 재미있고 뿌듯하고 보람 찼다 어쩌구 저쩌구 */

width: 455px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Frame 301 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 20px;

width: 1536px;
height: 551px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 23 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 925px;

width: 1536px;
height: 53px;

background: #FFFFFF;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Frame 15 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 10px 0px;
gap: 10px;

width: 300px;
height: 49px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 현재 보고 있는 봉사와 유사해요! */

width: 300px;
height: 29px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 31 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 20px;

width: 1536px;
height: 478px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 30 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 369px;
height: 478px;

border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;


/* Rectangle 54 */

width: 369px;
height: 277px;

background: url(Checker.png);
border-radius: 20px 20px 0px 0px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 24 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 8px 12px;

width: 369px;
height: 191px;

border-radius: 0px 0px 20px 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 25 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 0px 8px;

width: 48px;
height: 32px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* #교육 */

width: 48px;
height: 24px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height */
text-decoration-line: underline;

/* Dark Color */
color: #024959;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 창녕군 영산도서관 '책 읽어주세요~' 청소년 자원봉사자 모집 */

width: 345px;
height: 58px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* Frame 29 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 0px 0px;

width: 272px;
height: 85px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 64px;
height: 73px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 26 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 등록기관 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 모집기간 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 봉사기간 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 208px;
height: 73px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 26 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 125px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 경상남도 창녕군 */

width: 101px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 158px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 10시 0분 ~ 16시 0분 */

width: 134px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 208px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 2023.05.02 ~ 2023.08.02 */

width: 184px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 31 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 369px;
height: 478px;

border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 1;


/* Rectangle 54 */

width: 369px;
height: 277px;

background: url(Checker.png);
border-radius: 20px 20px 0px 0px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 24 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 8px 12px;

width: 369px;
height: 191px;

border-radius: 0px 0px 20px 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 25 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 0px 8px;

width: 48px;
height: 32px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* #교육 */

width: 48px;
height: 24px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height */
text-decoration-line: underline;

/* Dark Color */
color: #024959;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 창녕군 영산도서관 '책 읽어주세요~' 청소년 자원봉사자 모집 */

width: 345px;
height: 58px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* Frame 29 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 0px 0px;

width: 272px;
height: 85px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 64px;
height: 73px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 26 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 등록기관 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 모집기간 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 봉사기간 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 208px;
height: 73px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 26 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 125px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 경상남도 창녕군 */

width: 101px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 158px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 10시 0분 ~ 16시 0분 */

width: 134px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 208px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 2023.05.02 ~ 2023.08.02 */

width: 184px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 32 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 369px;
height: 478px;

border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 1;


/* Rectangle 54 */

width: 369px;
height: 277px;

background: url(Checker.png);
border-radius: 20px 20px 0px 0px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 24 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 8px 12px;

width: 369px;
height: 191px;

border-radius: 0px 0px 20px 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 25 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 0px 8px;

width: 48px;
height: 32px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* #교육 */

width: 48px;
height: 24px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height */
text-decoration-line: underline;

/* Dark Color */
color: #024959;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 창녕군 영산도서관 '책 읽어주세요~' 청소년 자원봉사자 모집 */

width: 345px;
height: 58px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* Frame 29 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 0px 0px;

width: 272px;
height: 85px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 64px;
height: 73px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 26 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 등록기관 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 모집기간 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 봉사기간 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 208px;
height: 73px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 26 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 125px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 경상남도 창녕군 */

width: 101px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 158px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 10시 0분 ~ 16시 0분 */

width: 134px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 208px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 2023.05.02 ~ 2023.08.02 */

width: 184px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 33 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 369px;
height: 478px;

border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 3;
align-self: stretch;
flex-grow: 1;


/* Rectangle 54 */

width: 369px;
height: 277px;

background: url(Checker.png);
border-radius: 20px 20px 0px 0px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 24 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 8px 12px;

width: 369px;
height: 191px;

border-radius: 0px 0px 20px 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 25 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 0px 8px;

width: 48px;
height: 32px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* #교육 */

width: 48px;
height: 24px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height */
text-decoration-line: underline;

/* Dark Color */
color: #024959;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 창녕군 영산도서관 '책 읽어주세요~' 청소년 자원봉사자 모집 */

width: 345px;
height: 58px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;

color: #000000;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* Frame 29 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 0px 0px;

width: 272px;
height: 85px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 64px;
height: 73px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 26 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 등록기관 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 모집기간 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 64px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 봉사기간 : */

width: 64px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */
text-align: center;

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 208px;
height: 73px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 26 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 125px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 경상남도 창녕군 */

width: 101px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 27 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 158px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* 10시 0분 ~ 16시 0분 */

width: 134px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Frame 28 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;

width: 208px;
height: 19px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* 2023.05.02 ~ 2023.08.02 */

width: 184px;
height: 19px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Dark Gray Color */
color: #7E8181;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
