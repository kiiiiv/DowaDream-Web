import { Wrapper } from "../../../styles/Common";
import ReviewItem from '../../Review/ReviewItem';
import { ReviewInfoWrapper, ReviewItemWrapper} from '../../../styles/Review/MainReview';
function MyReview(){
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