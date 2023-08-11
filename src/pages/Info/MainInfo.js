import React, { useState } from 'react'
import { Wrapper } from '../../styles/Common'
import styled from 'styled-components'
import DropDown from '../../components/DropDown';
import MainInfoVol from '../../components/MainInfoVol';
import InfoSelectionList from '../../components/Maininfo/InfoSelectionList';

import Search from '../../assets/Search.svg';

const StArray= [
    "신규순",
    "인기순",
    "없음",
]

const arr =[];



const MainInfo = () => {

    
    const [name,setName] = useState("정렬순");
    const [isOpen, setIsOpen] = useState(false);
    const [isTag, setIsTag] = useState("Loc");
    //지역 및 세부 주소
    const [isSelectLoc,setIsSelectLoc] = useState("서울");
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


    const onLocListClicked = (name) =>{
        console.log(name);
        setIsSelectLoc(name);
    }

  return (
    <Wrapper>
        
        <Title>봉사정보</Title>
        
        <InfoSelection>
            <SeloectTag onClick={() => setIsTag("Loc")} color={("Loc" === isTag).toString()}>지역</SeloectTag>
            <SeloectTag onClick={() => setIsTag("Tag")} color={("Tag" === isTag).toString()}>태그</SeloectTag>
            <InfoSelectionList  isSelectLoc={isSelectLoc} SetIsSelectLoc={onLocListClicked} arr={arr}></InfoSelectionList>
            <SearchInfo> <img alt={name} src={Search}/><div>선택 조건으로 검색하기</div></SearchInfo>
        
        </InfoSelection>

        <InfoSummary>
            <SummaryText>총 {<SummaryNum>35</SummaryNum>}건의 봉사 목록이 있습니다.</SummaryText>
            <CategoryMenuBox onClick={onToggle}>
                <>{`${name} ∨`}</>
                { isOpen && <DropDown width={100} array={StArray} onOptionClicked={onOptionClicked}></DropDown>}
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
                // 배열 크기에 따른 변환 필요
                Array.from({ length: 20 }).map((_, index) => (
                    <MainInfoVol key={index} ac={1} title={1} time1={1} time2={1} ></MainInfoVol>
                ))
            }


            
        </InfoAllWrapper>

        {/*배열 크기에 따른 생성 여부 결정 필요*/}
        <SearchMore>더보기 ∨</SearchMore>


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

const SearchInfo = styled.div`

    display: flex;
    padding: 0px 10px;
    align-items: center;
    gap: 10px;

    margin: 10px 0px;
    width : 13%;
    height : 37px;
    border-radius: 20px 20px 20px 20px;
    background: var(--yellow-color, #FFE34F);

    font-size: 1.2em;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
    color: #000;



`

const SearchMore = styled.div`

    width : 131px;
    height : 49px;    

    border-radius: 30px;
    background: var(--yellow-color, #FFE34F);


    margin: 16px auto;


    display: flex;
    padding: 14px 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    color: #000;
    text-align: center;
    font-size: 1.6em;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

`