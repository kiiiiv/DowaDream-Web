import React, { useContext, useEffect, useState } from 'react'
import { Wrapper } from '../../styles/Common'
import styled from 'styled-components'
import DropDown from '../../components/DropDown';
import MainInfoVol from '../../components/MainInfoVol';
import InfoSelectionList from '../../components/Maininfo/InfoSelectionList';
import InfoSelectionTagList from '../../components/Maininfo/InfoSelectionTagList';
import Search from '../../assets/Search.svg';
import { getVolInfo } from '../../apis/VolInfo/VolInfo';
import { UserLocContext } from '../../contexts/UserInfo';
import { gugunCdMaker } from '../../assets/Sidogugun';

const StArray= [
    "신규순",
    "인기순",
    "없음",
]

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

const MainInfo = () => {

    
    
    const x = 1;
    
    const [name,setName] = useState("정렬순");
    const [isOpen, setIsOpen] = useState(false);
    const [isTag, setIsTag] = useState("Loc");

    const filteredData = useContext(UserLocContext);
    console.log(filteredData)

    //지역 및 세부 주소
    const [isSelectLoc,setIsSelectLoc] = useState("1");
    const [detailButtonStates, setDetailButtonStates] = useState(filteredData[1][1]);

    const [isSelectTag, setIsSelectTag] = useState(Array.from({ length: 22 }).fill(false));
    const [allInfo, setAllInfo] = useState(filteredData);
    const [totalNum, setTotalNum] = useState(1);


    const onToggle = () => setIsOpen(!isOpen);

    const [infoList, setInfoList] = useState([]); // 상태 변수로 InfoList 관리
    const [divList, setdivList] = useState([]); // 상태 변수로 divList 관리
    const [infoCount, setInfoCount] = useState();



    useEffect(() => {
        // 컴포넌트가 마운트되면 스크롤을 맨 위로 이동시킴
        window.scrollTo(0, 0);
        onTotalInfoClicked(allInfo);
    }, []); // 빈 배열을 전달하면 컴포넌트가 마운트될 때 한 번만 실행됨
    
    const onOptionClicked = (value, i) => () => {
      console.log(value);
      if(value==="없음"){
        setName("정렬순");
        
      }else{
      setName(value);
      }
      setIsOpen(false);
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

    const  InfoList= [];


    const onTotalInfoClicked = async () => {
        let i = 0;
        for (const info of allInfo) {
            console.log(info);
            i = i+1;
            if (info[1].length !== 1) {
                const secondArray = info[1];
                //index , indexof 함수 사용하기 
                const nonFalseValues = secondArray.filter(value => value !== false);
                if(nonFalseValues!==[]){
                    for (const item of nonFalseValues) {

                        const num = gugunCdMaker(i,item);
                        const volInfo = await getVolInfo(num);
                        InfoList.push(volInfo);
                    }
                }

            }
        
        }
        let newArray2 = [].concat(...InfoList);
        console.log(newArray2)

        setInfoList(newArray2);
        setInfoCount(newArray2.length);
        setTotalNum(1);
        const mainInfoVols = generateMainInfoVols(newArray2);
        setdivList(mainInfoVols);

    }

    const generateMainInfoVols = (infoList) => {
        const mainInfoVols = [];
      
        for (let i =0;i<20*totalNum;i++) {
            mainInfoVols.push(
              <MainInfoVol
                key={i}
                ac={infoList[i].place}
                title={infoList[i].title}
                pagenum={infoList[i].progrmRegistNo}
                time1={infoList[i].time1}
                time2={infoList[i].time2}
              />
            );
            if(mainInfoVols.length===infoList.length){
                break;
              }
          }
        console.log(mainInfoVols.length)
        return mainInfoVols;
    }

    const onLoadMoreClicked=()=>{

        setTotalNum(totalNum + 1);
        const mainInfoVols = generateMainInfoVols(infoList);
        setdivList(mainInfoVols);
        
    }
    
  return (
    <Wrapper>
        
        <Title>봉사정보</Title>
        
        <InfoSelection>
            <SeloectTag onClick={() => setIsTag("Loc")} color={("Loc" === isTag).toString()}>지역</SeloectTag>
            <SeloectTag onClick={() => setIsTag("Tag")} color={("Tag" === isTag).toString()}>태그</SeloectTag>
            {
               (isTag==="Loc") ? 
                <InfoSelectionList
                isSelectLoc={isSelectLoc}
                SetIsSelectLoc={onLocListClicked}
                detailButtonStates={detailButtonStates}
                setDetailButtonStates={setDetailButtonStates}
                allInfo ={allInfo}
                setAllInfo={setAllInfo}
                />
                : <InfoSelectionTagList isSelectTag={isSelectTag} setIsSelectTag={setIsSelectTag}></InfoSelectionTagList>
            }            
            <SearchInfo onClick={onTotalInfoClicked}> <img alt={name} src={Search}/><div>선택 조건으로 검색하기</div></SearchInfo>
        
        </InfoSelection>

        <InfoSummary>
            <SummaryText>
                총 <SummaryNum>{infoCount}</SummaryNum>건의 봉사 목록이 있습니다.
            </SummaryText>
            <CategoryMenuBox onClick={onToggle}>
                <>{`${name} ∨`}</>
                { isOpen && <DropDown width={100} array={StArray} onOptionClicked={onOptionClicked}></DropDown>}
            </CategoryMenuBox>
        </InfoSummary>
        

        <InfoAllWrapper>
            <InfoTypesWrapper>
                <InfoAcText>등록기관</InfoAcText>
                <InfoTitleText>제목</InfoTitleText>
                <InfoTimeText>봉사 기간</InfoTimeText>
                <InfoTimeText>모집기간</InfoTimeText>
            </InfoTypesWrapper>
            {
                divList
            }
        </InfoAllWrapper>

        {((infoCount) > 20 * totalNum) ? (
            <SearchMore onClick={onLoadMoreClicked}>더보기 ∨</SearchMore>
            ) : (
            <Margindiv></Margindiv>
        )}


    </Wrapper>
  )
}

export default MainInfo

const Title = styled.h3`

    margin-top : 1.67em;
    margin-bottom : 0.47em;
    display: flex;
    align-items: flex-start;

    color: var(--dark-color, #024959);
    font-size: 3.6em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

const InfoSummary = styled.div`
    
    width : 100%;
    height : auto;

    padding: 0.8em 1em;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top : 4em;
    margin-bottom : 2em;

    background-color : #FFFAC9;

`
const SummaryText = styled.p`

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

const SummaryNum = styled.span `
    color: red; /* 특정 텍스트의 글자색 */
`

const CategoryMenuBox = styled.button`

    border: 1px solid #000;
    background: #FFF;


    width: 7em;
    height: 2.1em;
    padding: 4px 10px 4px 10px;


  font-weight: 700;
  font-size:1.4em;

  display: flex;
  align-items: center;

  flex-direction : column;
  margin-top: 0.8em;

`;

const InfoAllWrapper = styled.div`

    width : 100%;
    height : auto;
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`;

const InfoTypesWrapper = styled.div`

    display: flex;
    padding: 10px;
    flex-direction: row;
    align-items: flex-start;

    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    

`
const InfoAcText = styled.span`

    width: 20%;
    height : auto;
    font-size: 18px;

    text-align : center;
    flex-shrink: 0;

`

const InfoTitleText = styled.span`

    width: 60%;
    height : auto;
    font-size: 18px;

    
    text-align : center;
    flex-shrink: 0;
    
`

const InfoTimeText = styled.span`

    width: 10%;
    height : auto;
    font-size: 18px;

    text-align : center;
    flex-shrink: 0;
    
`

const InfoSelection = styled.div`

    display: flex;
    flex-direction: row;
    align-items: flex-start;
   flex-wrap: wrap; 


`;


const SeloectTag = styled.div`

    border: 1px solid var(--dark-gray-color, #7E8181);

    display: flex;
    width: 50%;
    height: auto;
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    color: ${(props) => (props.color==="true") ? 'var(--dark-color, #024959)' : 'var(--light-gray-color, #D9D9D9)'};
    transition: 0.2s; 
    
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;



`;

const SearchInfo = styled.div`

    display: flex;
    padding: 0px 10px;
    align-items: center;
    gap: 10px;

    margin: 10px 0px;
    width : 13%;
    height : 37px;
    border-radius: 20px 20px 20px 20px;
    background: var(--yellow-color, #FFE34F);

    font-size: 1.2em;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
    color: #000;

    cursor: pointer;


`

const SearchMore = styled.div`

    width : 131px;
    height : 49px;    

    border-radius: 30px;
    background: var(--yellow-color, #FFE34F);


    margin: 16px auto;


    display: flex;
    padding: 14px 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    color: #000;
    text-align: center;
    font-size: 1.6em;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

`

const Margindiv = styled.div`

    margin-bottom : 100px;

`