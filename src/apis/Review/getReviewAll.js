import axios from "axios";
async function getData() {
    try {
      //응답 성공
      const response = await axios.get('http://dowadream.kro.kr:8000/review/');
      console.log(response);
      return response.data;
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
export default getData;