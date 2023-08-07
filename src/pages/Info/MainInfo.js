import React, { useState } from 'react'
import { Wrapper } from '../../styles/Common'
import styled from 'styled-components'
import DropDown from '../../components/DropDown';

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

const Array= [
    "신규순",
    "인기순",
    "없음",
]

const MainInfo = () => {

    const [name,setName] = useState("정렬순");
    const [view, setView] = useState(false); 
    const [isOpen, setIsOpen] = useState(false);

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
        <div>봉사정보선택</div>
        <InfoSummary>
            <SummaryText>총 {<SummaryNum>35</SummaryNum>}건의 봉사 목록이 있습니다.</SummaryText>
            <CategoryMenuBox onClick={onToggle}>
                <>{`${name} ∨`}</>
                { isOpen && <DropDown name={name} array={Array} onOptionClicked={onOptionClicked}></DropDown>}
            </CategoryMenuBox>
        </InfoSummary>


    </Wrapper>
  )
}

export default MainInfo

const Title = styled.h3`

    margin-top : 1.67em;

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
