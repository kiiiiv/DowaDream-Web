import axios from "axios";
export const baseUrl = "https://api.dowadream.site/program/";

//내가 한 봉사, 스크랩한봉사, 응원한봉사, 추가하기
export const upDateVolInfo = async(props) => {

    const [progrmRegistNo,cheered=false,participated=false,clipped=false] = props;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNTA0ODk1LCJpYXQiOjE2OTIyNDU2OTUsImp0aSI6IjljYzY1MTE0ZTQwMzQ3NmU5ZjUwZTkzOTc3MjU4NWQ5IiwidXNlcl9pZCI6MTV9.nyAMpdAN_llQZwWuKExZhN3stnXcPR1CE5KA_BHAjUY"

    

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
        return error;
    }
  
  
  }
//마이페이지 내가한봉사
export const uploadUserVol = async() => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNTA0ODk1LCJpYXQiOjE2OTIyNDU2OTUsImp0aSI6IjljYzY1MTE0ZTQwMzQ3NmU5ZjUwZTkzOTc3MjU4NWQ5IiwidXNlcl9pZCI6MTV9.nyAMpdAN_llQZwWuKExZhN3stnXcPR1CE5KA_BHAjUY"

  try{
    const resopnse = await axios.get(`${baseUrl}participated/`,{
      headers : {
        authorization : `Bearer ${token}`
      }
    })
    console.log(resopnse.data.data);
    return resopnse.data.data;
  }catch(error){
    return error;
  }

}
//마이페이지 클립봉사
export const uploadUserClip = async() => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNTA0ODk1LCJpYXQiOjE2OTIyNDU2OTUsImp0aSI6IjljYzY1MTE0ZTQwMzQ3NmU5ZjUwZTkzOTc3MjU4NWQ5IiwidXNlcl9pZCI6MTV9.nyAMpdAN_llQZwWuKExZhN3stnXcPR1CE5KA_BHAjUY"

  try{
    const resopnse = await axios.get(`${baseUrl}clipped/`,{
      headers :{
        authorization : `Bearer ${token}`
      }
    })
    console.log(resopnse.data.data)
    return resopnse.data.data
  }catch(error){

  }

}
//마이페이지 응원봉사
export const uploadUserCheered = async () => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNTA0ODk1LCJpYXQiOjE2OTIyNDU2OTUsImp0aSI6IjljYzY1MTE0ZTQwMzQ3NmU5ZjUwZTkzOTc3MjU4NWQ5IiwidXNlcl9pZCI6MTV9.nyAMpdAN_llQZwWuKExZhN3stnXcPR1CE5KA_BHAjUY"
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

