import axios from "axios";

export const baseUrl = "https://api.dowadream.site/program/";


export const updateProgram = async () => {

  try{
    const response = await axios.put(`${baseUrl}`, {
        progrmRegistNo: 'string_value',
        cheered: false,
        participated: false,
        clipped: false
      });
      console.log(response);
  }catch(error){
    return error;
  }

}
export const FourMostCheered = async () => {

    try{
      const response = await axios.get(`${baseUrl}recommend/cheer`);
    return response.data.data;
    }catch(error){
      return error;
    }
  
}
export const SearchArea = async () => {

    try{
      const response = await axios.get(`${baseUrl}search/area`,  {params: {
        keyword: keyword
    }});
    return response.data.data;
    }catch(error){
      return error;
    }
  
}
export const SearchAreaKeyword = async () => {
    const [info, setInfo] = useState(null);
    try{
      const response = await axios.get(`${baseUrl}search/keyword`,  {params: {
        keyword: keyword,
        actPlace: actPlace,
        tagCode: tagCode,
        areaCode: areaCode
    }});
    const {title, place, recruitInstitue, dday} = response.data;
    setInfo({
        title,
        place,
        recruitInstitue,
        dday
    });
    }catch(error){
        console.log(error);
    }
  
}
export const SearchId = async () => {
    const [info, setInfo] = useState(null);
    try{
      const response = await axios.get(`${baseUrl}search/registno`,  {params: {
        keyword: keyword,
    }});
    const {title, place, recruitInstitue, dday} = response.data;
    setInfo({
        title,
        place,
        recruitInstitue,
        dday
    });
    }catch(error){
        console.log(error);
    }
  
}

