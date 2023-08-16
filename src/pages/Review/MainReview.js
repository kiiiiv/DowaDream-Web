import React, { useState, useEffect } from 'react'
import { Wrapper } from '../../styles/Common'
import { CategoryMenuBox, NonReviewCard, ReviewBespokeButton, ReviewBespokeText, ReviewBespokediv, ReviewInfoWrapper, ReviewItemWrapper, ReviewSortdiv, ReviewTitle, Reviewdiv } from '../../styles/Review/MainReview'
import Dropdown from '../../components/DropDown'
import ReviewItem from '../../components/Review/ReviewItem'
import { getAllReviewInfo } from '../../apis/Review/GetReview'

const StArray= [
    "응원하기순",
    "신규순",
]

const newReviewArr = [];
const likeReviewArr =[];

const MainReview = () => {

    const [name,setName] = useState("신규순");
    const [isOpen, setIsOpen] = useState(false);
    const [showBespoke, setShowBespoke] = useState(false);
    const [reviewList, setReviewList] = useState();

    useEffect(()=>{

        reviewSorting();

    },[])

    const reviewSorting = async () =>{

        const list = await getAllReviewInfo();
        const listdiv = generateMainReview(list);
        setReviewList(listdiv);


    }
    

    const onOptionClicked = (value, i) => () => {
        console.log(value);
        setName(value);
        setIsOpen(false);
      };

      const onToggle = () => setIsOpen(!isOpen);

      const generateMainReview = (reviewList) =>{
            const mainReviews = [];
            reviewList.map((item,index)=>{
                mainReviews.push(
                    <ReviewItem
                        key={index}
                        rid={item.rid}
                        updated_at={item.updated_at}
                        progrmRegistNo={item.progrmRegistNo}
                        title={item.title}
                        content={item.content}
                        is_public={item.is_public}
                        writer={item.writer}
                        images={item.images}
                    />

                )
            })

            return mainReviews;
      }




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
            {
                reviewList
            }
        </ReviewInfoWrapper>




    </Wrapper>
  )
}

export default MainReview

