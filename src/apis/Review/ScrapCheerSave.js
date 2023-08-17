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
  if(tagCode==null){
    console.log(tagCode)
    tagCode=undefined;
    
  }
  try{
    console.log(areaCode)
    const areaCodeArray = Array.isArray(areaCode) ? areaCode : [areaCode];
    const areaCodeQuery = areaCodeArray.map(code => `areaCode=${code}`).join('&');

    const tagCodeArray = Array.isArray(tagCode) ? tagCode : [tagCode];
    const tagCodeQuery = tagCodeArray.map(code => `tagCodeQuery=${code}`).join('&');



    const response = await axios.get(`${baseUrl}search/keyword/?${areaCodeQuery}?${tagCodeQuery}`);
    
    return response.data.data;
    
  }catch(error){
        console.log(error);
        return error;
  }  
}

