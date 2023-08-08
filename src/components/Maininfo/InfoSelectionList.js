import React from 'react'
import { styled } from 'styled-components'

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



const InfoSelectionList = (props) => {

  

  const { isSelectLoc, SetIsSelectLoc,arr,onLocDetailClicked } = props;  // 수정된 부분

  return (
    <Wrapper>
      <LocWrapper>
        {Area.map((area) => {
          return (
            <LocText
              key={area[0]}
              onClick={() => SetIsSelectLoc(`${area[0]}`)}  // 수정된 부분
              states={(isSelectLoc === area[0]).toString()}
            >
              {`${area[0]}`}
            </LocText>
          );
        })}
      </LocWrapper>
      <LocDetailWrapper>
        {
          Array.from({ length: 28 }).map((_, index) => (
            <LocDetailDiv onClick={onLocDetailClicked(index)}>

              <LocDetailButton states={arr[index]==="false"}></LocDetailButton>
              <LocDetailText>강남구</LocDetailText>

            </LocDetailDiv>
          ))
        }
      </LocDetailWrapper>
    </Wrapper>
  );
};


export default InfoSelectionList


const Wrapper = styled.div`

  width : 100%;
  height : 100%;

  display : flex;
  flex-direction : row;

  font-size: 10px;

  border-left: 1px solid var(--dark-color, #024959);
  border-right: 1px solid var(--dark-color, #024959);
  border-bottom: 1px solid var(--dark-color, #024959);



`

const LocWrapper = styled.div`

  width : 23%;
  height : 317px;
  padding: 10px 0px;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap; 
  text-align : center;

  border-right: 1px solid var(--light-gray-color, #D9D9D9);

  
`

const LocText = styled.div`

  width: 50%;
  height : 11%;
  padding: 8px 10px;

  gap: 10px;

  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: 0.2s; 
  background-color: ${(props) => (props.states==="false") ? 'white' : 'var(--secondary-yellow-color, #FFFAC9)'};
  font-weight: ${(props) => (props.states==="false") ? '400' : '700'};


`

const LocDetailWrapper = styled.div`




  width: 77%;
  height: 317px;
  padding: 10px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 

`

const LocDetailDiv = styled.div`

  width : 22%;
  heigth : 14%;


  display: flex;
  padding: 10px 10px 10px 0px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;



`

const LocDetailText = styled.div`

  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

`

const LocDetailButton = styled.div`



  box-shadow:none;
  

  width: 24px;
  height: 24px;
  
  border: 2px solid var(--dark-gray-color, #7E8181);
  border-radius: 5px;
  
  background-color: ${(props) => (props.states==="false") ? 'white' : 'var(--yellow-color, #FFE34F)'};


`
