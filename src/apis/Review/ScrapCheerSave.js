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
  try {
    const areaCodeArray = Array.isArray(areaCode) ? areaCode.filter(code => code !== null) : [];
    const tagCodeArray = Array.isArray(tagCode) ? tagCode.filter(code => code !== null) : [];

    const areaCodeQuery = areaCodeArray.map(code => `areaCode=${code}`).join('&');
    const tagCodeQuery = tagCodeArray.map(code => `tagCode=${code}`).join('&');

    console.log(`${baseUrl}search/keyword/?${areaCodeQuery}&${tagCodeQuery}`);

    const response = await axios.get(`${baseUrl}search/keyword/?${areaCodeQuery}${tagCodeQuery}`);
    
    return response.data.data;
    
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const SearchDday = async () =>{

  try{
    
    const resopnse = await axios.get(`${baseUrl}search/dday/`)
    return resopnse.data.data

  }catch(err){
    return err;
  }

}

export const SearchCheer = async () =>{

  try{
    const resopnse = await axios.get(`${baseUrl}recommend/cheer/`)
    return resopnse.data.data;
  }catch(err){
    return err;
  }

}