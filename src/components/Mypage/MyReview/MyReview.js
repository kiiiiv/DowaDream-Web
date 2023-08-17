import { Wrapper } from "../../../styles/Common";
import ReviewItem from '../../Review/ReviewItem';
import { styled } from "styled-components";
import { ViewMyReview } from "../../../apis/Review/GetReview";
function MyReview(){
    const reviews = ViewMyReview();
    return (
      <>
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
              <ReviewItem></ReviewItem>
              <ReviewItem></ReviewItem>
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
    justify-content : space-between;

    width: 100%;
    height : auto;
    align-items: center;

`;