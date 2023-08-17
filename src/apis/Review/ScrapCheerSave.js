import axios from "axios";

export const baseUrl = "https://api.dowadream.site/program/";


export const FourMostCheered = async () => {

    try{
      const response = await axios.get(`${baseUrl}recommend/cheer`);
    return response.data.data;
    }catch(error){
      return error;
    }
  
}

export const SearchAreaKeyword = async (tagCode, areaCode) => { 
  try{
      const response = await axios.get(`${baseUrl}search/keyword/`,  {
        params: {
        tagCode: `${tagCode}`,
        areaCode: `${areaCode}`
  }});
    return response.data.data;
  }catch(error){
        console.log(error);
        return error;
  }  
}

