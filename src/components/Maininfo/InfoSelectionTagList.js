import React from 'react'
import { styled } from 'styled-components'

const Tag = [
    "공익, 인권","교육","국제행사","국제협력, 해외봉사","농어촌 봉사", "문화행사", "멘토링", "보건의료","상담","생활편의지원","안전, 예방","자원봉사교육","재해, 재난","주거환경","행정보조","환경보호","기타"
  ];

  const InfoSelectionTagList = (props) => {
    const { isSelectTag, setIsSelectTag } = props;
    console.log(Tag);

    const x = (Tag.length % 4);
  
    const toggleDetailButtonState = (index) => {
      const updatedStates = [...isSelectTag]
      updatedStates[index] = !updatedStates[index];
      setIsSelectTag(updatedStates);

    };
  
    return (
      <Wrapper>
        <TagDetailWrapper>
          {Tag.map((tag, index) => (
            <TagDetailDiv onClick={() => toggleDetailButtonState(index)} key={tag}>
              <TagDetailButton states={isSelectTag[index].toString()} />
              <TagDetailText>{tag}</TagDetailText>
            </TagDetailDiv>
          ))}
          {x > 0 &&
            Array.from({ length: 4 - x }).map((_, index) => (
              <NonTagDetailDiv key={`nonTag_${index}`} />
            ))}
        </TagDetailWrapper>
      </Wrapper>
    );
  };

export default InfoSelectionTagList

const Wrapper = styled.div`

  width : 100%;
  height : 100%;

  display : flex;
  flex-direction : row;

  font-size: 10px;

  border-left: 1px solid var(--dark-color, #024959);
  border-right: 1px solid var(--dark-color, #024959);
  border-bottom: 1px solid var(--dark-color, #024959);

`

const TagDetailWrapper = styled.div`

  width: 100%;
  height: 317px;
  padding: 10px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 

`

const TagDetailDiv = styled.div`
  width: 22%;
  height: 14%;

  display: flex;
  padding: 10px 10px 10px 0px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  transition: 0.2s; 

  &:hover {
    background-color: var(--secondary-yellow-color, #FFFAC9);
    cursor: pointer;
  }
`;

const NonTagDetailDiv = styled.div`
  width: 22%;
  height: 14%;

  display: flex;
  padding: 10px 10px 10px 0px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;


`;

const TagDetailText = styled.div`

  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  
  &:hover {
    background-color : var(--secondary-yellow-color, ##FFFAC9);
  }

`

const TagDetailButton = styled.div`



  box-shadow:none;
  

  width: 24px;
  height: 24px;
  
  border: 2px solid var(--dark-gray-color, #7E8181);
  border-radius: 5px;
  
  background-color: ${(props) => (props.states==="false") ? 'white' : 'var(--yellow-color, #FFE34F)'};


`
