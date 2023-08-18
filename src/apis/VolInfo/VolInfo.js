import axios from "axios";

export const baseUrl = "https://api.dowadream.site/";

// CORS 관련 설정
axios.defaults.withCredentials = true;

export const getVolInfo = async (keyword) => {
    try {
        const response = await axios.get(`${baseUrl}program/search/area/?keyword=${keyword}`, {
            withCredentials: true, // 요청 헤더에 withCredentials:true 추가
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};


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

//봉사 세부사항 내부에 리뷰 받기
export const getVolReview = async (pageNum) =>{



    try{
        const response = await axios.get(`https://api.dowadream.site/review?progrmRegistNo=${pageNum}`);
        console.log(response.data.data);
        return response.data.data;
    } catch(error){
        return error;
    }

}

