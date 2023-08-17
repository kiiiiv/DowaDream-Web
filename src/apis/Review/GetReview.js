import axios from "axios";

export const baseUrl = "https://api.dowadream.site/review/";

//리뷰 전체 정보 받기
export const getAllReviewInfo = async () => {

  try{
      const response = await axios.get(`${baseUrl}`);
      return response.data.data;
  }catch(error){
    return error;
  }

}


//리뷰 디테일 가져오기
export const getReviewDetail = async (reviewNum) =>{

  try{
    const response = await axios.get(`${baseUrl}${reviewNum}/`);
    return response.data.data;
  }catch(error){
    return error;
  }

}

//리뷰 작성
export const writeReview = async (props) =>{
  const [pageNum,title,content,is_public=true,tag="1",region="종로구"] = props;
  
  try{
    const response = await axios.post(`${baseUrl}`,
    {
      data:{
        "progrmRegistNo" : pageNum,
        "title" : title,
        "content" : content,
        "is_public" : is_public,
        "tag" : tag,
        "region" : region,
      }
    })
    console.log(response)
    return response;
  }catch(error){
    console.log(error);
    return error;
  }
}
//나의 후기
export const ViewMyReview = async () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNTA0ODk1LCJpYXQiOjE2OTIyNDU2OTUsImp0aSI6IjljYzY1MTE0ZTQwMzQ3NmU5ZjUwZTkzOTc3MjU4NWQ5IiwidXNlcl9pZCI6MTV9.nyAMpdAN_llQZwWuKExZhN3stnXcPR1CE5KA_BHAjUY"
  try {
    const response = await axios.get(`${baseUrl}user/`, {
      headers: {
        // 'Authorization' 헤더에 'Bearer' 토큰 포함
        Authorization: `Bearer ${token}`
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};