import React, { useState, useEffect } from 'react'
import { Wrapper } from '../../styles/Common'
import { CategoryMenuBox, CheerButton, CheerText, Cheerdiv, Gaugediv, GradeImg, GradeText, Gradediv, NonReviewCard, ReviewBespokeButton, ReviewBespokeText, ReviewBespokediv, ReviewGagueTextdiv, ReviewGaugeText, ReviewGaugediv, ReviewInfoWrapper, ReviewItemWrapper, ReviewSortdiv, ReviewTitle, Reviewdiv } from '../../styles/Review/MainReview'
import Dropdown from '../../components/DropDown'
import ReviewItem from '../../components/Review/ReviewItem'
import { getAllReviewInfo } from '../../apis/Review/GetReview'
import CheerUp from '../../assets/CheerButton.svg'
import Grade1 from '../../assets/GradeImg1.svg'

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

        <ReviewGaugediv>
            <ReviewGagueTextdiv>
                <ReviewTitle>봉사 기여 게이지</ReviewTitle>
                <ReviewGaugeText>전국 봉사러들과 함께 긍정적인 영향을 확장해보세요 !</ReviewGaugeText>
            </ReviewGagueTextdiv>
            <Gaugediv>

                <Cheerdiv>
                    <CheerButton url={CheerUp}></CheerButton>
                    <CheerText>
                        *게이지 점수 안내<br></br>
                        -내가 한 봉사 점수: 100<br/>
                        -내가 응원한 봉사 점수: 30<br/>
                        -화이팅 버튼: 10 (하루에 5번 – 점수 반영 다음날)<br/>
                    </CheerText>
                </Cheerdiv>

                <Gradediv>
                    <GradeText>Total 123,456,789</GradeText>
                    <GradeImg url={Grade1}></GradeImg>
                    <GradeText>성민님은 현재 봉사스타터 입니다.</GradeText>
                </Gradediv>

            </Gaugediv>
        </ReviewGaugediv>
        
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

