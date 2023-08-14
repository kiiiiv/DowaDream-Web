import axios from "axios";

export const baseUrl = "https://api.dowadream.site/";

export const getVolInfo = async (keyword)=>{
    try {
        const response = await axios.get(`${baseUrl}search/keyword/`, {
            params: {
                keyword: keyword
            }
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getVolDetail = async (pageNum) =>{

    try {
        const response = await axios.get(`${baseUrl}search/registno/?keyword=${pageNum}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
        return error;
    }

}