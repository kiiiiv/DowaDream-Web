import { styled } from "styled-components";
import { Wrapper } from "../styles/Common";
import InfoSelectionList from "./Maininfo/InfoSelectionList";
import { useState } from "react";

const Tag = [
  "공익, 인권","교육","국제행사","국제협력, 해외봉사","농어촌 봉사", "문화행사", "멘토링", "보건의료","상담","생활편의지원","안전, 예방","자원봉사교육","재해, 재난","주거환경","행정보조","환경보호","기타"
];

function MyTags(){

  const [isSelectLoc,setIsSelectLoc] = useState("1");
  const [detailButtonStates, setDetailButtonStates] = useState(Array.from({ length: 33 }).fill(false));
  const [isTagDetailStates, setTagDetailState] = useState(Array.from({length : 20}).fill(false))

  const onLocListClicked = (name) =>{
    setIsSelectLoc(`${name}`);
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
                setDetailButtonStates={setDetailButtonStates} // 수정된 부분: setdetailButtonStates가 아니라 setDetailButtonStates
              ></InfoSelectionList>
              <LocDeletediv>
                <LocDeleteText>지역</LocDeleteText>
                <LocDeleteAll></LocDeleteAll>
              </LocDeletediv>
          </LocWrapper>



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

`
