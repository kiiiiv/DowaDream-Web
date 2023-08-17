import axios from "axios";

export const baseUrl = "https://api.dowadream.site/";


//봉사 정보 받아오기 ( 리스트, 검색시 정보 받아오기)
export const getVolInfo = async (keyword)=>{
    try {
        const response = await axios.get(`${baseUrl}program/search/area/?keyword=${keyword}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

//봉사 세부 정보 받아오기 
export const getVolDetail = async (pageNum) =>{

    try {
        const response = await axios.get(`${baseUrl}program/search/registno/?keyword=${pageNum}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const getVolReview = async (pageNum) =>{

    try{
        const response = await axios.get(`https://api.dowadream.site/review?progrmRegistNo=12345`);
        return response.data.data;
    } catch(error){
        return error;
    }

}