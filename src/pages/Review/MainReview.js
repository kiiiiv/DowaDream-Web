import React, { useState, useEffect } from 'react'
import { Wrapper } from '../../styles/Common'
import { CategoryMenuBox, ReviewBespokeButton, ReviewBespokeText, ReviewBespokediv, ReviewInfoWrapper, ReviewItemWrapper, ReviewSortdiv, ReviewTitle, Reviewdiv } from '../../styles/Review/MainReview'
import Dropdown from '../../components/DropDown'
import ReviewItem from '../../components/Review/ReviewItem'

const StArray= [
    "응원하기순",
    "없음",
]

const dummyArr = Array.from({length : 18}).fill(false);

const MainReview = () => {

    const [name,setName] = useState("정렬순");
    const [isOpen, setIsOpen] = useState(false);
    const [showBespoke, setShowBespoke] = useState(false);
    

    const onOptionClicked = (value, i) => () => {
        console.log(value);
        if(value==="없음"){
          setName("정렬순");
          
        }else{
        setName("응원순");
        }
        setIsOpen(false);
      };

      const onToggle = () => setIsOpen(!isOpen);


  return (
    <Wrapper>
        
        <Reviewdiv>
            <ReviewTitle>봉사후기</ReviewTitle>
        </Reviewdiv>

        <ReviewSortdiv>
            <ReviewBespokediv onClick={()=>setShowBespoke(!showBespoke)}>
                <ReviewBespokeButton states={showBespoke.toString()} ></ReviewBespokeButton>
                <ReviewBespokeText>나의 맞춤 후기만</ReviewBespokeText>
            </ReviewBespokediv>
            <CategoryMenuBox onClick={onToggle}> 
            <>{`${name} ∨`}</>
                { isOpen && <Dropdown width = {133} array={StArray} onOptionClicked={onOptionClicked}></Dropdown>}
            </CategoryMenuBox>
        </ReviewSortdiv>

        <ReviewInfoWrapper>
        
            <ReviewItemWrapper>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
            </ReviewItemWrapper>

            
            <ReviewItemWrapper>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
            </ReviewItemWrapper>

            
            <ReviewItemWrapper>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
            </ReviewItemWrapper>

            
            <ReviewItemWrapper>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
            </ReviewItemWrapper>

            
            <ReviewItemWrapper>
                <ReviewItem></ReviewItem>

            </ReviewItemWrapper>

        </ReviewInfoWrapper>




    </Wrapper>
  )
}

export default MainReview