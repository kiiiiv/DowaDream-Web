import axios from "axios";
const accessToken = localStorage.getItem("accessToken");
export const baseUrl = "https://api.dowadream.site/user/";

export const userRegion = async (props) =>{
  const token = accessToken;
  const regions = props;

    try {    
        const response = await axios.post(`${baseUrl}region/`, { // URL 수정
          "regions": regions
        }, {
          headers: {
            Authorization : `Bearer ${token}`
          }
        });
    
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
}

export const userTag = async (props) =>{

  const token = accessToken;
  const tags = props;

  try{
    const response = await axios.post(`${baseUrl}tag/`,{
        "tags" : tags
    },{ headers : {
        Authorization : `Bearer ${token}`
      }
    })
    console.log(response.data);
  }catch(error){
    console.log(error);
  }

}