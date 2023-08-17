import React,{ useRef, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from '../components/Home/Carousel';
import TagButton from '../components/TagButton.js';
import styled from 'styled-components';
import InfoTitle from '../components/Home/InfoTitle';
import InfoItem from '../components/Home/InfoItem';
import { Wrapper } from '../styles/Common';
import { SearchArea, SearchAreaKeyword } from '../apis/Review/ScrapCheerSave';
import { gugunCdMaker } from '../assets/Sidogugun';
import { TagCodeMaker } from '../assets/TagCode';
function Main(){

  
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);

  const onContent1Click = () => {
    content1Ref.current?.scrollIntoView({ behavior: 'smooth', block :'center' });
  }
  const onContent2Click = () => {
    content2Ref.current?.scrollIntoView({ behavior: 'smooth',block :'center' });
  }
  const onContent3Click = () => {
    content3Ref.current?.scrollIntoView({ behavior: 'smooth' ,block :'center'});
  }

  const callInfo = async() =>{
    const gugunCd = gugunCdMaker("2","종로구");
    const TagCd = TagCodeMaker("온라인자원봉사");
    console.log(TagCd);
    const arr1 = [];
    const arr2 = [];
    arr1.push(gugunCd);
    arr2.push(TagCd);

    const resopnse = SearchAreaKeyword(arr2,arr1);
    console.log(resopnse);    

  }
  
  useEffect(() => {
    // accessToken 가져오기
    callInfo();  
  }, []);





    return(
    <Wrapper>
      
      <ControlledCarousel/>


      <Infowrapper>

        <div>
          <HeaderWrapper>
              <h3>김성민님! 어떤 봉사정보 추천을 원하시나요?{'\n'}</h3>
          </HeaderWrapper>
          <ButtonWrapper>
            <TagButton text="관심 태그 & 지역" onClick={onContent1Click}></TagButton>
            <TagButton text="신규" onClick={onContent2Click} ></TagButton>
            <TagButton text="인기" onClick={onContent3Click}></TagButton>
          </ButtonWrapper>
        </div>

          <Infoitem ref={content1Ref}>
            <Itemtitle>
              <InfoTitle num={1}></InfoTitle>
            </Itemtitle>
            <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
            </Iteminfo>
          </Infoitem>

          <Infoitem ref={content2Ref} >
            <Itemtitle>
              <InfoTitle num={2}></InfoTitle>
            </Itemtitle>
              <Iteminfo>
                <InfoItem></InfoItem>
                <InfoItem></InfoItem>
                <InfoItem></InfoItem>
                <InfoItem></InfoItem>
              </Iteminfo>
          </Infoitem>

          <Infoitem ref={content3Ref}>
            <Itemtitle>
              <InfoTitle num={3}></InfoTitle>
            </Itemtitle>    
            <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
            </Iteminfo>
          </Infoitem>

      </Infowrapper>

  
    </Wrapper>
    );
  }
  export default Main;


const HeaderWrapper = styled.div`

  margin-top : 40px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 20px 0px 16px;
  gap: 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;


const Infoitem = styled.div`


  display : flex;

  flex-direction: column;
  justify-content : space-between;
  align-items : flex-start;

  width : 100%;
  height : 59.5em;

`

const Itemtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* 수정 */
  
  width: 100%;
  height: 5.3em;
  margin: 10px 0px;
`;

const Iteminfo = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 2em;
`;

const Infowrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  /* height: 270.2em; */ /* 이 부분은 필요 없어 보입니다 */
  gap: 8em;
`;
