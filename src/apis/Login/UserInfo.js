import axios from "axios";

const baseUrl = "https://api.dowadream.site/user/";
const accessToken = localStorage.getItem("accessToken");

export const getUserInfo = async () => {
    const token =accessToken;

    try{
        const resopnse = await axios.get(`${baseUrl}info/`, {headers: {
            // 'Authorization' 헤더에 'Bearer' 토큰 포함
            Authorization: `Bearer ${token}`
          },});
          console.log(resopnse.data.data.user_tags);
          console.log(resopnse.data.data.user_regions);
          const user_regions = JSON.stringify(resopnse.data.data.user_regions); 
          const user_tags = JSON.stringify(resopnse.data.data.user_tags);

          localStorage.setItem("user_regions", user_regions);
          localStorage.setItem("user_tags", user_tags);
          window.location.reload();

        return resopnse.data.data
    }catch(err){
        console.log(err);
        return err;
    }

}

