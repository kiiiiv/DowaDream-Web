import React,{ useRef, useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from '../components/Home/Carousel';
import TagButton from '../components/TagButton.js';
import styled from 'styled-components';
import InfoTitle from '../components/Home/InfoTitle';
import InfoItem from '../components/Home/InfoItem';
import { Wrapper } from '../styles/Common';
import { SearchArea, SearchAreaKeyword, SearchCheer, SearchDday } from '../apis/Review/ScrapCheerSave';
import { gugunCdMaker } from '../assets/Sidogugun';
import { TagCodeMaker, TagNameMaker } from '../assets/TagCode';
import { getVolDetail } from '../apis/VolInfo/VolInfo';
function Main(){

  
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);

  const [Area,SetArea] = useState();
  const [Dday,SetDday] = useState();
  const [Cheer,SetCheer] = useState();

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
    const arr1 = [];
    const arr2 = [];
    arr1.push(gugunCd);
    arr2.push(TagCd);


    let resopnse = await SearchAreaKeyword(null,arr1);
    let resopnse2 = await SearchDday();
    let resopnse3 = await SearchCheer();

    resopnse = resopnse.slice(0,4);
    resopnse2 = resopnse2.slice(0,4);
    resopnse3 = resopnse3.slice(0,4);

    const real1 = []
    const real2 = []
    const real3 = []
    await Promise.all(
      resopnse.map(async (item) => {
          let fetchedInfo = await getVolDetail(item.progrmRegistNo);
          real1.push(fetchedInfo);
      })
  );
  await SetArea(real1);

  await Promise.all(

    resopnse2.map(async (item)=>{
      let fetchedInfo = await getVolDetail(item.progrmRegistNo);
      real2.push(fetchedInfo);
    })
  );
  await SetDday(real2);

  await Promise.all(

    resopnse3.map(async (item)=>{
      let fetchedInfo = item;
      fetchedInfo.tag = TagCodeMaker(item.tag);
      real3.push(fetchedInfo);
    })
  );
  await SetCheer(real3);



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
              {
                Area && Area.map((item,index)=>{
                    return(<InfoItem
                    onClick={()=>{
                      window.location.href=`/info/${item.progrmRegistNo}`}} 
                      key={index} 
                      style={{ width:'25%'}}
                      // rid={item.title}
                      tag={item.tagCode}
                      progrmRegistNo={item.progrmRegistNo}
                      title={item.title}
                      institute={item.recruitInstitute}
                      recruitStart={item.recruitStart}
                      recruitEnd={item.recruitEnd}
                      actStart={item.actStart}
                      actEnd={item.actSEnd}
                      dday ={item.dday}
                      place={item.place}
                      // num_cheer={item.num_cheer}
                      // num_comment={item.num_comment}
                      // writer={item.writer}
                      // writer_profile_img={item.writer_profile_img}
                      // writer_username={item.writer_username}
                    >
                    </InfoItem>)
                })                
              }
            </Iteminfo>
          </Infoitem>

          <Infoitem ref={content2Ref} >
            <Itemtitle>
              <InfoTitle num={2}></InfoTitle>
            </Itemtitle>
              <Iteminfo>
                {
                  
                Dday && Dday.map((item,index)=>{
                    return(<InfoItem
                    onClick={()=>{
                      window.location.href=`/info/${item.progrmRegistNo}`}} 
                      key={index} 
                      style={{ width:'25%'}}
                      // rid={item.title}
                      tag={item.tagCode}
                      progrmRegistNo={item.progrmRegistNo}
                      title={item.title}
                      institute={item.recruitInstitute}
                      recruitStart={item.recruitStart}
                      recruitEnd={item.recruitEnd}
                      actStart={item.actStart}
                      actEnd={item.actSEnd}
                      dday ={item.dday}
                      place={item.place}
                      // num_cheer={item.num_cheer}
                      // num_comment={item.num_comment}
                      // writer={item.writer}
                      // writer_profile_img={item.writer_profile_img}
                      // writer_username={item.writer_username}
                    >
                    </InfoItem>)
                })   
                }
              </Iteminfo>
          </Infoitem>

          <Infoitem ref={content3Ref}>
            <Itemtitle>
              <InfoTitle num={3}></InfoTitle>
            </Itemtitle>    
            <Iteminfo>
                {
                Cheer && Cheer.map((item,index)=>{
                  return(<InfoItem
                  onClick={()=>{
                    window.location.href=`/info/${item.progrmRegistNo}`}} 
                    key={index} 
                    style={{ width:'25%'}}
                    // rid={item.title}
                    tag={item.tag}
                    progrmRegistNo={item.progrmRegistNo}
                    title={item.title}
                    institute={item.registerInstitute}
                    recruitStart={item.recruitStart}
                    recruitEnd={item.recruitEnd}
                    actStart={item.actStart}
                    actEnd={item.actSEnd}
                    dday ={item.dday}
                    place={item.place}
                    // num_cheer={item.num_cheer}
                    // num_comment={item.num_comment}
                    // writer={item.writer}
                    // writer_profile_img={item.writer_profile_img}
                    // writer_username={item.writer_username}
                  >
                  </InfoItem>)
              })   
                }
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
