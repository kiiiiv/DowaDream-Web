import axios from "axios";
export const baseUrl = "https://api.dowadream.site/program/";
const accessToken = localStorage.getItem("accessToken");


//내가 한 봉사, 스크랩한봉사, 응원한봉사, 추가하기
export const upDateVolInfo = async(props) => {

    const [progrmRegistNo,participated="False"] = props;
    const token = accessToken;
    console.log(progrmRegistNo)
    console.log(participated)

    try{

      const response = await axios.put(baseUrl,
        {
          "progrmRegistNo" : `${progrmRegistNo}`,
          "participated" : `${participated}`,
        },
        {
        headers: {
          "Authorization": `Bearer ${token}` 
         }})
      return response;
    }catch(error){
        return error;
    }
  
  
  }
  //스크랩한 봉사정보
  export const upDateScrapInfo = async(props) => {

    const [progrmRegistNo,cheered=false,clipped=false] = props;
    const token = accessToken;
    try{

      const response = await axios.put(baseUrl,
        {
          "progrmRegistNo" : `${progrmRegistNo}`,
          "cheered" : `False`,
          "participated" : `True`,
          "clipped" : `False`,
        },
        {
        headers: {
            Authorization: `Bearer ${token}` 
         }
      })
      console.log(response);
      return response;
    }catch(error){
        console.log(error) ;
    }
  }
//마이페이지 내가 한 봉사
export const uploadUserVol = async() => {

  const token = accessToken;
  try{
    const response = await axios.get(`${baseUrl}participated/`,{
      headers : {
        authorization : `Bearer ${token}`
      }
    })
    console.log(response);
    return response.data.data;
  } catch(error){
    return error;
  }

}
//마이페이지 스크랩한 봉사
export const uploadUserClip = async() => {

  const token = accessToken;

  try{
    const resopnse = await axios.get(`${baseUrl}clipped/`,{
      headers :{
        authorization : `Bearer ${token}`
      }
    })
    console.log(resopnse.data.data)
    return resopnse.data.data
  }catch(error){
    return error;
  }

}
//마이페이지 응원봉사
export const uploadUserCheered = async () => {

  const token = accessToken;
  try{
    const resopnse = await axios.get(`${baseUrl}cheered/`,{
      headers : {
        authorization : `Bearer ${token}`
      }
    })
    console.log(resopnse.data.data)
    return resopnse.data.data
  }catch(error){
    return error;
  }

}

