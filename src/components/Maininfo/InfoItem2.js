import React from 'react'
import { styled } from 'styled-components'

const InfoItem2 = ({width=25, height=90}) => {
  return (
    <Infodiv width={width} height={height}>
                <InfoImg>
                    <Ddaydiv><div>D-7</div></Ddaydiv>
                </InfoImg>
                <InfoTextDiv>
                  <InfoTextTag>#교육</InfoTextTag>
                  <InfoTextTitle>창녕군 영산도서관 '책 읽어주세요~' 청소년 자원봉사자 모집</InfoTextTitle>
                  <InfoTextDetail>등록기관: 경상남도 창녕군</InfoTextDetail>
                  <InfoTextDetail>모집기간: 10시 0분 ~ 16시 0분</InfoTextDetail>
                  <InfoTextDetail>봉사기간 : 2023.05.02 ~ 2023.08.02</InfoTextDetail>
                </InfoTextDiv>

    </Infodiv>
  )
}

export default InfoItem2



const Infodiv = styled.div`
  width: ${props => props.width}%;
  height: ${props => props.height}%;
`;


const Ddaydiv = styled.div`

    

    position: relative;
    top: 3.2em;
    left: 0;

    opacity: 0.7;
    
    width: 4.4em;
    height: 3.7em;

    display: flex;
    padding: 0px 12px;
    align-items: center;
    background: var(--yellow-color, #FFE34F);
    z-index: 10;
`



const InfoImg = styled.div`

  background-color : purple;
  width : 100%;
  height : 55%;
  border-radius: 2em 2em 0 0;

`

const InfoTextDiv = styled.div`


  width: 100%;
  height : 45%;
  box-sizing: border-box;
  padding: 0.8em 1.2em;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;  
  border-radius: 0 0 2em 2em;



`


//폰트 사이즈 2 4 2 축소 

const InfoTextTag = styled.span`

  height : 17%;

  color: var(--dark-color, #024959);
  font-size: 1.8em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;

  `

const InfoTextTitle = styled.span`

  height : 34%;

  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

`

const InfoTextDetail = styled.span`

  height : 17%;

  color: var(--dark-gray-color, #7E8181);
  text-align: center;
  font-size: 1.6em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
`