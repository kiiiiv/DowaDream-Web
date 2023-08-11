import React, { useState, useRef, useEffect, createRef } from 'react';
import styled from 'styled-components';

function ReviewWrite2(){
    const [title, setTitle] = useState('제목');
    const [titleFocus, setTitleFocus] = useState(false);
    const [content, setContent] = useState(
      '한전은 7일 본사 경영진을 비롯한 전국 15개 지역본부와 함께 긴급 화상회의를 열고 여름 전력 수급 피크와 태풍 카눈에 대비한 전력 공급 상황을 긴밀히 점검했다. 산업통상자원부와 한전은 오전 배포한 자료에서 이날부터 8일 오후까지 극한 무더위로 인한 냉방기 사용 급증 등으로 전력수요가 92.9GW까지 높아지면서 올여름 전력크를 기록할 것으로 전망했다. 그러나 찌는 듯한 폭염 속에 전력수요는 정부 예상치를 훌쩍 뛰어넘. 전력거래소에 따르면 이날 오후 4시 35분 전력수요는 올 여름 들어 최고치인 94.1GW를 찍었다. 이는 역대 최대였던 지난해 7월 7일 여름철 전력최고인 92.9GW를 경신한 수치다. 다만 지난달 사고로 가동이 중단된 1GW급 한빛 원전 2기가 전날부터 극적으로 가동에 들어가면서 전력 공급 능력은 104GW로 블랙아웃(대규모 정전)은 피했다. 신보령 2호기(1.02GW)도 적기에 힘을 보태면서 전력피크를 찍 당시 예비율은 10.4GW였다.아리가또고자이마스'
    );
    const [contentFocus, setContentFocus] = useState(false);
    const [imageFiles, setImageFiles] = useState(Array(5).fill(null));
    const fileInputRef = useRef(null);
      
      const handleImageClick = (index) => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };

      const handleImageUpload = (event) => {
        if (event.target.files) {
          const file = event.target.files[0];
          const fileURL = URL.createObjectURL(file);
  
          setImageFiles((prevArray) => {
            const newArray = [...prevArray];
            const emptyIndex = prevArray.findIndex((item) => item === null);
            newArray[emptyIndex] = fileURL;
            return newArray;
          });
  
          URL.revokeObjectURL(file);
        }
      };

  return (
    <Container80>
      <Container81>
        <RegisterContainer>
          <RegisterButton>등록하기</RegisterButton>
        </RegisterContainer>
        <MyReview>
          <MyReviewTitleContainer>
          <MyReviewTitle
            value={titleFocus ? title : "제목"}
            onFocus={() => {
                if (!titleFocus) {
                setTitle("");
                setTitleFocus(true);
                }
            }}
            onBlur={() => {
                if (title === "") {
                setTitle("제목");
                setTitleFocus(false);
                }
            }}
            onChange={(e) => setTitle(e.target.value)}
            style={{ color: titleFocus ? "black" : "#A0A0A0", overflow: 'hidden' }}
            />
            <MyReviewNum>
                <span style={{ color: titleFocus ? "#F74E43" : "inherit" }}>{title.length}</span>/100
            </MyReviewNum>
          </MyReviewTitleContainer>
          <WriteContainer>
          <WriteMain
            
            value={contentFocus && content === "한전은 7일 본사 경영진을 비롯한 전국 15개 지역본부와 함께 긴급 화상회의를 열고 여름철 전력 수급 피크와 태풍 카눈에 대비한 전력 공급 상황을 긴밀히 점검했다. 산업통상자원부와 한전은 오전 배포한 자료에서 이날부터 8일 오후까지 극한 무더위로 인한 냉방기 사용 급증 등으로 전력수요가 92.9GW까지 높아지면서 올여름 전력피크를 기록할 것으로 전망했다. 그러나 찌는 듯한 폭염 속에 전력수요는 정부 예상치를 훌쩍 뛰어넘었다. 전력거래소에 따르면 이날 오후 4시 35분 전력수요는 올 여름 들어 최고치인 94.1GW를 찍었다. 이는 역대 최대였던 지난해 7월 7일 여름철 전력최고치인 92.9GW를 경신한 수치다. 다만 지난달 사고로 가동이 중단된 1GW급 한빛 원전 2호기가 전날부터 극적으로 가동에 들어가면서 전력 공급 능력은 104GW로 블랙아웃(대규모 정전)은 피했다. 신보령 2호기(1.02GW)도 적기에 힘을 보태면서 전력피크를 찍을 당시 예비율은 10.4GW였다.아리가또고자이마스" ? "" : content}
            onFocus={() => !contentFocus && setContentFocus(true)}
            onBlur={() => contentFocus && setContent("")}
            onChange={(e) => setContent(e.target.value)}
            style={{ fontSize: "16px", color: contentFocus ? "black" : "#7E8181" }}
            />
            <MyReviewNum><span style={{ color: contentFocus ? "#F74E43" : "inherit" }}>{content.length}</span>/100</MyReviewNum>
          </WriteContainer>
        </MyReview>
      </Container81>
      <ImgContainer>
        <ImgInfo>
          <ImgInfo1>이미지 첨부</ImgInfo1>
          <ImgInfo2>최대 5장</ImgInfo2>
        </ImgInfo>
        <ImgContainer1>
            {imageFiles.map((image, index) => (
              <ImgMainWrapper key={index}>
                <ImgMain
                  src={image || ""}
                  alt="uploaded image"
                  onClick={() => handleImageClick(index)}
                  
                >이미지 업로드</ImgMain>
                
              </ImgMainWrapper>
            ))}
          </ImgContainer1>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
      </ImgContainer>
    </Container80>
  );
};

export default ReviewWrite2;

const Container80 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 0px;
  height: 955px;
  width: 1170px;
`;

const Container81 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 1018px;
  height: 672px;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px 0px 20px;
  gap: 10px;
  width: 1018px;
  height: 65px;
`;

const RegisterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  width: 103px;
  height: 45px;
  /* Yellow Color */
  background: #FFE34F;
  border-radius: 30px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const MyReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 1018px;
  height: 607px;
`;

const MyReviewTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px 0px 20px;
  width: 100%;
  height: 88px;
`;
const MyReviewTitle = styled.textarea`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 4px;
  gap: 10px;
  width: 1018px;
  height: 100%;
  /* Dark Gray Color */
  border-bottom: 2px solid #7E8181;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  /* Gray Color */
  color: #A0A0A0;
`;
const MyReviewNum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  height: 14px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`;

const WriteContainer = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px;
  gap: 10px;
  width: 1018px;
  height: 519px;
  /* Light Gray Color */
  border: 1px solid #D9D9D9;
`;
const WriteMain = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 1002px;
  height: 479px;
  align-self: stretch;
  flex-grow: 1;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* Dark Gray Color */
  color: #7E8181;
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 10px;
  width: 1060px;
  height: 243px;
`;
const ImgInfo1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px 8px 10px;
  gap: 10px;
  height: 33px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #000000;
`;
const ImgInfo2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 10px;
  height: 33px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #F74E43;
`;
const ImgInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  height: 33px;
`;
const ImgContainer1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 10px;
  gap: 10px;
  width: 100%;
  height: auto;
`;
const ImgMainWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 200px;
  height: 200px;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
`;
const ImgMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
  color: ${(props) => (props.src ? "transparent" : "#A0A0A0")};
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #D9D9D9;
  }
  background-size: cover;
  background-position: center;
`;
