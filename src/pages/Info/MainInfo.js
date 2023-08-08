import React, { useState } from 'react'
import { Wrapper } from '../../styles/Common'
import styled from 'styled-components'
import DropDown from '../../components/DropDown';
import MainInfoVol from '../../components/MainInfoVol';

const Area = [
    ["전국",],
    ["서울",],
    ["경기",],
    ["인천",],
    ["부산",],
    ["대구",],
    ["광주",],
    ["대전",],
    ["울산",],
    ["세종",],
    ["강원",],
    ["경남",],
    ["경북",],
    ["전남",],
    ["전북",],
    ["충남",],
    ["충북",],
    ["제주",],
];

const StArray= [
    "신규순",
    "인기순",
    "없음",
]

const InfoArray = [
    {},
    {},

]

const MainInfo = () => {

    const [name,setName] = useState("정렬순");
    const [isOpen, setIsOpen] = useState(false);
    const [isTag, setIsTag] = useState("Loc");

    const onToggle = () => setIsOpen(!isOpen);
    
    const onOptionClicked = (value, i) => () => {
      console.log(value);
      if(value==="없음"){
        setName("정렬순");
        
      }else{
      setName(value);
      }
      setIsOpen(false);
    };

  return (
    <Wrapper>
        
        <Title>봉사정보</Title>
        
        <InfoSelection>
        <SeloectTag onClick={() => setIsTag("Loc")} color={("Loc" === isTag).toString()}>지역</SeloectTag>
        <SeloectTag onClick={() => setIsTag("Tag")} color={Boolean("Tag" === isTag).toString()}>태그</SeloectTag>
        <div>안녕하세요</div>
        </InfoSelection>

        <InfoSummary>
            <SummaryText>총 {<SummaryNum>35</SummaryNum>}건의 봉사 목록이 있습니다.</SummaryText>
            <CategoryMenuBox onClick={onToggle}>
                <>{`${name} ∨`}</>
                { isOpen && <DropDown name={name} array={StArray} onOptionClicked={onOptionClicked}></DropDown>}
            </CategoryMenuBox>
        </InfoSummary>

        <InfoAllWrapper>
            <InfoTypesWrapper>
                <InfoAcText>등록기관</InfoAcText>
                <InfoTitleText>제목</InfoTitleText>
                <InfoTimeText>봉사 기간</InfoTimeText>
                <InfoTimeText>모집기간</InfoTimeText>
            </InfoTypesWrapper>
            <MainInfoVol ac={1} title={1} time1={1} time2={1} ></MainInfoVol>

            {
                Array.from({ length: 20 }).map((_, index) => (
                    <MainInfoVol key={index} ac={1} title={1} time1={1} time2={1} ></MainInfoVol>
                ))
            }

            
        </InfoAllWrapper>


    </Wrapper>
  )
}

export default MainInfo

const Title = styled.h3`

    margin-top : 1.67em;
    margin-bottom : 0.47em;
    display: flex;
    align-items: flex-start;

    color: var(--dark-color, #024959);
    font-size: 3.6em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

const InfoSummary = styled.div`
    
    width : 100%;
    height : auto;

    padding: 0.8em 1em;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top : 4em;
    margin-bottom : 2em;

    background-color : #FFFAC9;

`
const SummaryText = styled.p`

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

const SummaryNum = styled.span `
    color: red; /* 특정 텍스트의 글자색 */
`

const CategoryMenuBox = styled.button`

    border: 1px solid #000;
    background: #FFF;


    width: 7em;
    height: 2.1em;
    padding: 4px 10px 4px 10px;


  font-weight: 700;
  font-size:1.4em;

  display: flex;
  align-items: center;

  flex-direction : column;
  margin-top: 0.8em;

`;

const InfoAllWrapper = styled.div`

    width : 100%;
    height : auto;
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`;

const InfoTypesWrapper = styled.div`

    display: flex;
    padding: 10px;
    flex-direction: row;
    align-items: flex-start;

    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    

`
const InfoAcText = styled.span`

    width: 20%;
    height : auto;
    font-size: 18px;

    text-align : center;
    flex-shrink: 0;

`

const InfoTitleText = styled.span`

    width: 60%;
    height : auto;
    font-size: 18px;

    
    text-align : center;
    flex-shrink: 0;
    
`

const InfoTimeText = styled.span`

    width: 10%;
    height : auto;
    font-size: 18px;

    text-align : center;
    flex-shrink: 0;
    
`

const InfoSelection = styled.div`

    display: flex;
    flex-direction: row;
    align-items: flex-start;
	flex-wrap: wrap; 


`;


const SeloectTag = styled.div`

    border: 1px solid var(--dark-gray-color, #7E8181);

    display: flex;
    width: 50%;
    height: auto;
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    color: ${(props) => (props.color==="true") ? 'var(--dark-color, #024959)' : 'var(--light-gray-color, #D9D9D9)'};
    transition: 0.2s; 
    
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;



`;

