import axios from "axios";

export const baseUrl = "https://api.dowadream.site/program/";


export const upDateVolInfo = async(props) => {

    const [progrmRegistNo,cheered=false,participated=false,clipped=false] = props;
    const token = window.localStorage.getItem('access');

    try{
      const response = await axios.put(baseUrl,{

        headers: {
            authorization: `Bearer ${token}` 
         }
        ,data:{
            "progrmRegistNo" : progrmRegistNo,
            "cheered" : cheered,
            "participated" : participated,
            "clipped" : clipped,
          }
        
      })
      console.log(response);
      return response;
    }catch(error){
        return error;
    }
  
  
  }