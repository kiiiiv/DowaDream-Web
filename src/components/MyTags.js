import { styled } from "styled-components";
import InfoSelectionList from "../components/Maininfo/InfoSelectionList"
import { useContext, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { UserLocContext } from "../contexts/UserInfo";
import Xurl from "../../src/assets/x.svg";

const Tag = [
  "공익, 인권","교육","국제행사","국제협력, 해외봉사","농어촌 봉사", "문화행사", "멘토링", "보건의료","상담","생활편의지원","안전, 예방","자원봉사교육","재해, 재난","주거환경","행정보조","환경보호","기타"
];

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


function MyTags(){


  const filteredData = useContext(UserLocContext);


  const [isSelectLoc,setIsSelectLoc] = useState("1");
  const [detailButtonStates, setDetailButtonStates] = useState(filteredData[1][1]);
  const [isTagDetailStates, setTagDetailState] = useState(Array.from({length : 20}).fill(false))
  const [allInfo, setAllInfo] = useState(filteredData);
  const [siInfo, setSiInfo] = useState(filteredData);


  const [deleteDiv,setDeleteDiv] = useState([]);





  useEffect(() => {
    const [index,result] = findChangedData(siInfo);
    generateDeleteDiv(index, result);
  }, [allInfo]);

  useEffect(()=>{
    generateDeleteDiv("1", "종로구");
  },[])

  

  const onDeleteDivClicked = (loc,index)=>{
    let updatedAllInfo = [...allInfo];
    updatedAllInfo[loc][1][index] = false;
    // setAllInfo(updatedAllInfo);

  }

  const generateDeleteDiv = (index, result) =>{
    console.log(result);
    let  DeleteDivLists =[ ...deleteDiv];
    if(result !== false){
      DeleteDivLists.push(
          <LocDeleteButton
          key={`${isSelectLoc},${index}`} // 고유한 key 값 생성
          onClick={()=>onDeleteDivClicked(isSelectLoc,index)}
          >
            <LocDeleteItemText>
              {Area[isSelectLoc][0]} {Area[isSelectLoc][index]}
            </LocDeleteItemText>
            <LocDeleteItemX url={Xurl}></LocDeleteItemX>
        </LocDeleteButton>
      )
    }else{
      DeleteDivLists = DeleteDivLists.filter(key => key.key !== `${isSelectLoc},${index}`);
    }
    console.log(DeleteDivLists);
    setDeleteDiv(DeleteDivLists);
  }

  

  const findChangedData = (newData) => {
    let changedIndex = -1;
    let changedResult = false;
  
    newData.forEach((row, rowIndex) => {
      for (let i = 0; i < row[1].length; i++) {
        if (row[1][i] !== allInfo[rowIndex][1][i]) {
          changedIndex = i;
          changedResult = allInfo[rowIndex][1][i];
          break; // 루프 종료
        }
      }
    });
  
    setSiInfo(allInfo);
    return [changedIndex, changedResult];
  };


  const onLocListClicked = (name) => {
    const updatedAllInfo = [...allInfo];
    updatedAllInfo[isSelectLoc] = [Area[isSelectLoc][0], detailButtonStates];
    if (allInfo[name][1].length !== 1) {
        setDetailButtonStates(updatedAllInfo[name][1]);
    } else if (name !== isSelectLoc) {
        setDetailButtonStates(Array.from({ length: 33 }).fill(false));
    } else if (name === isSelectLoc) {
        setDetailButtonStates(updatedAllInfo[name][1]);
    }

    setIsSelectLoc(`${name}`);
    setAllInfo(updatedAllInfo);   
}
  const onTotalInfoClicked = () =>{

    allInfo.forEach((info, index) => {
        const firstElement = info[0];
        if(info[1].length!==1){
          const secondArray = info[1];

          const nonFalseValues = secondArray.filter(value => value !== false);

          console.log(`First Element: ${firstElement}`);
          console.log(`Non-False Values: ${nonFalseValues}`);
        }
    });

  }

  const toggleTagDetailButtonState = (index) => {
    const updatedStates = [...isTagDetailStates];
    updatedStates[index] = !updatedStates[index];
    setTagDetailState(updatedStates);
  };




    return (
      <>
        <TagWrapper>
          <Tagdiv>
            <TagTitle>관심 태그</TagTitle>
            <TagAlldiv>
            {Tag.map((tag, index) => (
            <TagDetail 
              key= {index}
              onClick={()=>toggleTagDetailButtonState(index)}
              states={isTagDetailStates[index].toString()}
              >
              #{tag}
            </TagDetail>
          ))}

            </TagAlldiv>
          </Tagdiv>
          
          <LocWrapper>
              <TagTitle>관심지역</TagTitle>
              <InfoSelectionList
                isSelectLoc={isSelectLoc}
                SetIsSelectLoc={onLocListClicked}
                detailButtonStates={detailButtonStates}
                setDetailButtonStates={setDetailButtonStates}
                allInfo={allInfo}
                setAllInfo={setAllInfo} // 수정된 부분: setdetailButtonStates가 아니라 setDetailButtonStates
              ></InfoSelectionList>
              <LocDeletediv>
                <LocDeleteText>지역</LocDeleteText>
                <LocDeleteAll>
                  {deleteDiv}
                </LocDeleteAll>
              </LocDeletediv>
          </LocWrapper>
          <Link to="/mypage/save">
            <SaveButton onClick={onTotalInfoClicked}>모두 저장하기</SaveButton>
          </Link>


        </TagWrapper>
      </>
    );
  }
  export default MyTags;

  const TagWrapper = styled.div`
  
  width : 100%;
  height : auto;

  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-items: center;
  
  `;

  const Tagdiv = styled.div`
  
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: flex-start;
  
  `;

  const TagTitle = styled.span`
  
    padding: 12px 0px;

    color: var(--dark-color, #024959);
    font-size: 2.4em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
  `;

  const TagAlldiv = styled.div`
  
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  gap: 20px;
  flex-wrap: wrap;
  
  `;

  const TagDetail = styled.div`
  
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    background: ${props => props.states === 'false' ? 'var(--light-gray-color, #D9D9D9)' : 'var(--yellow-color, #FFE34F)'};

    &:hover {
      background-color : var(--secondary-yellow-color, #FFFAC9);
    }

    color: #000;
    font-size: 1.4em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;



`;

const LocWrapper = styled.div`

  display: flex;
  width: 100%;
  flex-direction: column;  
  align-items: flex-start;
  align-self: stretch;

`

const LocDeletediv = styled.div`

  display: flex;
  width: 100%;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;

  background: var(--secondary-yellow-color, #FFFAC9);
`

const LocDeleteText = styled.span`

  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  align-self: stretch;

  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

`

const LocDeleteAll = styled.div`

  display: flex;
  padding: 10px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;

`;

const LocDeleteButton = styled.div`

  width : auto;
  height : 33px;
  padding: 8px 12px 8px 12px;

  display: flex;
  justify-content : space-evenly;
  align-items: center;
  border-radius: 20px;
  background: var(--light-gray-color, #D9D9D9);

`

const LocDeleteItemText = styled.span`

  align-items: center;

  color: #000;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`

const LocDeleteItemX = styled.div`
  
  background: url(${props=>props.url});
  padding: 0px 0px 0px 8px;

  width : 24px;
  height :24px;
  align-items: center;

`


const Link = styled(RouterLink)`
  text-decoration: none;
`;
const SaveButton = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 10px;
height: 48px;
text-decoration: none;
/* Dark Color */
background: #024959;
border-radius: 20px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height */

/* White Color */
color: #FCFCFC;


`

