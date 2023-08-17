import React from 'react'
import { styled } from 'styled-components'


// '구'를 파라미터로 넘겨서 검색

const InfoItem = (props) => {
  const {width=25, height=90, onClick=null,tag,institute,place,actStart,progrmRegistNo,title,actEnd,recruitStart,recruitEnd,dday,writer,writer_profile_img,writer_username} = props;
  return (
    <Infodiv width={width} height={height} onClick={onClick}>
                <InfoImg>
                    <Ddaydiv><div>D-{dday}</div></Ddaydiv>
                </InfoImg>
                <InfoTextDiv>
                  <InfoTextTag>{tag}</InfoTextTag>
                  <InfoTextTitle>{title}</InfoTextTitle>
                  <InfoTextDetail>등록기관: {institute}</InfoTextDetail>
                  <InfoTextDetail>모집기간: {actStart}-{actEnd}</InfoTextDetail>
                  <InfoTextDetail>봉사기간 : {actStart}-{actEnd}</InfoTextDetail>
                </InfoTextDiv>

    </Infodiv>
  )
}

export default InfoItem



const Infodiv = styled.div`
  width: ${props => props.width}%;
  height: ${props => props.height}%;
`;


const Ddaydiv = styled.div`

    

    position: relative;
    top: 3.2em;
    left: 0;

    opacity: 0.7;
    
    width: 5em;
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

  background: var(--secondary-yellow-color, #FFFAC9);
  box-sizing: border-box;
  padding: 0 1.2em;

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
  font-size: 1.8em;
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