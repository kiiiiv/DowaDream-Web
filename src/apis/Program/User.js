import axios from "axios";
export const baseUrl = "https://api.dowadream.site/user/";

export const userRegion = async (props) =>{
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNTA0ODk1LCJpYXQiOjE2OTIyNDU2OTUsImp0aSI6IjljYzY1MTE0ZTQwMzQ3NmU5ZjUwZTkzOTc3MjU4NWQ5IiwidXNlcl9pZCI6MTV9.nyAMpdAN_llQZwWuKExZhN3stnXcPR1CE5KA_BHAjUY"
  const regions = props;

    try {    
        const response = await axios.post(`${baseUrl}region/`, { // URL 수정
          "regions": regions
        }, {
          headers: {
            Authorization : `Bearer ${token}`
          }, data : {
            regions : regions
          }
        });
    
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
}

export const userTag = async (props) =>{

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNTA0ODk1LCJpYXQiOjE2OTIyNDU2OTUsImp0aSI6IjljYzY1MTE0ZTQwMzQ3NmU5ZjUwZTkzOTc3MjU4NWQ5IiwidXNlcl9pZCI6MTV9.nyAMpdAN_llQZwWuKExZhN3stnXcPR1CE5KA_BHAjUY"
  const tags = props;

  try{
    const response = await axios.post(`${baseUrl}tags/`,{
      headers : {
        Authorization : `Bearer ${token}`
      },data: {
        "tags" : tags
      }
    });
    } catch (error) {
      console.log(error);
    }
}
