import { createContext } from "react";
import { gugunNameMaker } from "../assets/Sidogugun";

const Area = [
    ["전국"],
    ["서울", "종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구", "은평구", "서대문구", "마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구", "강남구", "송파구", "강동구"],
    ["경기", "수원시", "성남시", "고양시", "용인시", "부천시", "안산시", "안양시", "남양주시", "화성시", "평택시", "의정부시", "시흥시", "파주시", "광명시", "김포시", "군포시", "광주시", "이천시", "양주시", "오산시", "구리시", "안성시", "포천시", "의왕시", "하남시", "여주시", "양평군", "동두천시", "과천시", "가평군", "연천군"],
    ["인천", "중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"],
    ["부산", "중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "해운대구", "사하구", "금정구", "강서구", "연제구", "수영구", "사상구", "기장군"],
    ["대구", "중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군", "군위군"],
    ["광주", "동구", "서구", "남구", "북구", "광산구"],
    ["대전", "동구", "중구", "서구", "유성구", "대덕구"],
    ["울산", "중구", "남구", "동구", "북구", "울주군"],
    ["세종", "세종시"],
    ["강원", "춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시", "횡성군", "영월군", "평창군", "정선군", "철원군", "화천군", "양구군", "인제군", "고성군", "양양군"],
    ["경남", "창원시", "진주시", "통영시", "사천시", "김해시", "밀양시", "거제시", "양산시", "의령군", "함안군", "창녕군", "고성군", "남해군", "하동군", "산청군", "함양군", "거창군", "합천군"],
    ["경북", "포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "의성군", "청송군", "영양군", "영덕군", "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군", "울릉군"],
    ["전남", "목포시", "여수시", "순천시", "나주시", "광양시", "담양군", "곡성군", "구례군", "고흥군", "보성군", "화순군", "장흥군", "강진군", "해남군", "영암군", "무안군", "함평군", "영광군", "장성군", "완도군", "진도군", "신안군"],
    ["전북", "전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "완주군", "진안군", "무주군", "장수군", "임실군", "순창군", "고창군", "부안군"],
    ["충남", "천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "금산군", "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군"],
    ["충북", "청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"],
    ["제주", "제주시", "서귀포시"],
  ];
  

  export function prepareFilterData() {

    
    let Locs = localStorage.getItem("user_regions");
    if(Locs!==undefined){
      Locs= JSON.parse(Locs);

    }else{
      Locs="3000000";
    }
    console.log(Locs[0])
    let tags = localStorage.getItem("user_tags");

    if(tags!==undefined){
      tags= JSON.parse(tags);
    }else{
      tags="공익.인권";
    }


    const Loc = [];
    Locs.map((item)=>{
      const num = gugunNameMaker(item);
      if(num !== undefined){
        Loc.push(num);
      } 
    })

    let returnList = [];

    const filteredArea = Area.map((subArray) => {

      returnList.push([subArray[0],[...Array(34).fill(false)]]);
      // if (subArray[0] === "서울") {
      //     // 서울의 경우 나머지 값을 첫 번째 값으로 설정
      //     return [subArray[0],[ false,subArray[1],...subArray.slice(2).map(()=>false),...Array(34 - subArray.length).fill(false)]];
      //   } else {
      //     // 다른 지역의 경우 나머지 값을 모두 false로 설정
      //     return [subArray[0], [...subArray.slice(1).map(() => false),...Array(34 - subArray.length).fill(false)]];
      //   }
      });
      // console.log(filteredArea);
      console.log(returnList);

      Loc.map((item)=>{
        console.log(item[0].slice(0,2));
        for(let i=0; i<Area.length; i++){ 
          if(Area[i][0]==item[0].slice(0,2)){

            const num = Area[i].indexOf(item[1])
            console.log(num);
            returnList[i][1][num] = item[1];
          }
        }
      })



    return returnList;
}
  const filteredData = prepareFilterData();
    


export const UserLocContext = createContext(filteredData);
