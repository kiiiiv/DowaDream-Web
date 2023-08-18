import { styled } from "styled-components";
import { Wrapper } from "../../../styles/Common";
import { useEffect, useState } from "react";
import { ViewMyReview } from "../../../apis/Review/GetReview";
import ReviewItem from "../../Review/ReviewItem";
function MyReview(){

    const [writeReviewDiv,setWriteReviewDiv] = useState([]);

    
    const reviews = async()=>{
        const abc= await ViewMyReview();
        generateWriteDiv(abc);
        console.log(abc);
    } 
    
    const generateWriteDiv = (List)=>{
        const writeDiv = [ ];
        for(let i  =0; i<List.length; i++){
            writeDiv.push(
                <ReviewItem

                
                      key={i}
                    
                        rid={List[i].rid}
                        tag ={List[i].tag}
                        updated_at={List[i].updated_at}
                        progrmRegistNo={List[i].progrmRegistNo}
                    
                    title={List[i].title}
                    content={List[i].content}
                    images={List[i].images}

                    is_public={List[i].is_public}
                    is_customized={List[i].is_customized}

                    num_cheer={List[i].num_cheer}
                    num_comment={List[i].num_comment}
                    writer={List[i].writer}
                    writer_profile_img={List[i].writer_profile_img}
                    writer_username={List[i].writer_username}

                >

                </ReviewItem>           
            )
            
        }
        setWriteReviewDiv(writeDiv)
    }

    useEffect(()=>{
        reviews();
    },[])

    return (
      <>
        <ReviewInfoWrapper>

            <ReviewItemWrapper>
                {writeReviewDiv}
            </ReviewItemWrapper>

          </ReviewInfoWrapper>
      </> 
    );
  }

export default MyReview;
const ReviewInfoWrapper = styled.div`

    width : 100%
    height : auto;

    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
    gap: 64px;
    padding: 30px 0px 0px 0px;
`;
const ReviewItemWrapper = styled.div`



    display: flex;
    justify-content :flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 64px;


    width: 100%;
    height : auto;

`;