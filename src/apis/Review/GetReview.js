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
    console.log(reviewNum);
    const response = await axios.get(`${baseUrl}${reviewNum}/`);
    console.log(response.data.data);
    return response.data.data;
  }catch(error){
    return error;
  }

}