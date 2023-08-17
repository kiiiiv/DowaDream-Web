import React, { useEffect, useState } from 'react'
import { Wrapper } from '../../styles/Common'
import { styled } from 'styled-components'
import InfoItem from '../Home/InfoItem'
import { useNavigate } from 'react-router-dom'
import { ViewMyReview } from '../../apis/Review/GetReview'

const ReviewWriteModal = () => {

  const [writeReviewDiv,setWriteReviewDiv] = useState([]);

    
  const reviews = async()=>{
      const abc= await ViewMyReview();
      generateWriteDiv(abc);
      console.log(abc);
  } 
  
  const generateWriteDiv = (List)=>{
      console.log(List);
      const writeDiv = [];

      for(let i  =0; i<List.length; i++){
          writeDiv.push(
              <InfoItem
               width={30} 
               height={80} 
               onClick={()=>{
                window.location.href=`/review/write/${List[i].rid}`}} 
                  key={i}
                  rid={List[i].rid}
                  tag = {List[i].tag}
                  updated_at={List[i].updated_at}
                  progrmRegistNo={List[i].progrmRegistNo}
                  title={List[i].title}
                  is_public={List[i].is_public}
                  is_customized={List[i].is_customized}
                  writer={List[i].writer}
                  images={List[i].images}
                  writer_profile_img={List[i].writer_profile_img}
                  writer_username={List[i].writer_username}
               >
              </InfoItem>           
          )
          
      }
      const x = List.length % 3;
      if(x!==0){
        for(let i =0; i< (3-x); i++){
          writeDiv.push(<NonReview></NonReview>)
        }
      }
      setWriteReviewDiv(writeDiv)
  }

  useEffect(()=>{
      reviews();
  },[])

  return (
    <Wrapper>
      <ReviewWrapper>
        <ReviewTitlediv>
          <ReviewTitieText>내가 한 봉사</ReviewTitieText>
        </ReviewTitlediv>
        <InfoWrapper>
        {writeReviewDiv}

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

const NonReview = styled.div`

  width : 30%;
  height: 80%;

`

const ReviewTitieText = styled.span`

    color: #000;
    font-size: 2.4em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

const InfoWrapper = styled.div`
  width: 100%;
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
