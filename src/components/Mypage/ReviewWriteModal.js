import React from 'react'
import { Wrapper } from '../../styles/Common'
import { styled } from 'styled-components'
import InfoItem from '../Home/InfoItem'
import { useNavigate } from 'react-router-dom'

const ReviewWriteModal = () => {
  return (
    <Wrapper>
      <ReviewWrapper>
        <ReviewTitlediv>
          <ReviewTitieText>내가 한 봉사</ReviewTitieText>
        </ReviewTitlediv>
        <InfoWrapper>
         
            <InfoItem width={30} height={80} onClick={()=>{
              window.location.href='/review/write/1';
            }
            } />
            <InfoItem width={30} height={80} />
            <InfoItem width={30} height={80} />
            <InfoItem width={30} height={80} />
            <InfoItem width={30} height={80} />
            <InfoItem width={30} height={80} />
         
        </InfoWrapper>
      </ReviewWrapper>
    </Wrapper>
  )
}

export default ReviewWriteModal


const ReviewWrapper =styled.div`

    display: flex;
    width: 100%;
    height: 800px;
    padding-bottom: 0px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;

    border-radius: 30px;
    background: var(--yellow-color, #FFE34F);

`



const ReviewTitlediv = styled.div`

    display: flex;
    padding: 20px 10px;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    border-radius: 30px;
    background: var(--secondary-yellow-color, #FFFAC9);

`

const ReviewTitieText = styled.span`

    color: #000;
    font-size: 2.4em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

const InfoWrapper = styled.div`
  height: 85%;
  min-height: 0;
  display: flex;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
  overflow: auto;

  /* 안보이게 해두긴 했는데, 일단 보삼*/
  &::-webkit-scrollbar {
    display: none;
  }

`;
