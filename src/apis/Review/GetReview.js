import axios from "axios";

export const baseUrl = "https://api.dowadream.site/review/";


export const getAllReviewInfo = async () => {

  try{
      const response = await axios.get(`${baseUrl}`);
      return response.data.data;
  }catch(error){
    return error;
  }

}

export const getReviewDetail = async (reviewNum) =>{

  try{
    const response = await axios.get(`${baseUrl}${reviewNum}/`);
    return response.data.data;
  }catch(error){
    return error;
  }

}

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

export const upDateVolInfo = async(props) => {

  const [progrmRegistNo,cheered=false,participated=false,clipped=false] = props;


}