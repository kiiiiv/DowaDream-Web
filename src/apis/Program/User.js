import axios from "axios";
export const baseUrl = "https://api.dowadream.site/user/";
export const userRegion = async () =>{
    
    try {
        const accessToken = 'my_access_token';
        const regions = ['region1', 'region2'];
    
        if(regions.length < 1 || regions.length > 10) {
          throw new Error('The number of regions must be between 1 and 10.');
        }
    
        const response = await axios.post(`${baseUrl}/user/region`, { // URL 수정
          regions: regions
        }, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
    
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
}


  export const UserResol = async(props) => {
    const token = window.localStorage.getItem('access');
    const text = props;
    try{
      const response = await axios.put(`${baseUrl}/user/resol`,{

        headers: {
            authorization: `Bearer ${token}` 
         }
        ,data:{
            text
        }
        
      })
      console.log(response);
      return response;
    }catch(error){
        return error;
    }
  
  
  }
  export const userTag = async () =>{
    
    try {
        const accessToken = 'my_access_token';
        const tag = ['tag1', 'tag2', 'tag3'];
    
        if(regions.length < 1 || regions.length > 10) {
          throw new Error('The number of regions must be between 1 and 10.');
        }
    
        const response = await axios.post(`${baseUrl}/user/tag`, { // URL 수정
          regions: regions
        }, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
    
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
}
