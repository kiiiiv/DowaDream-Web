import React, { useState, useRef, useEffect, createRef } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/Common';
import Dropdown from '../../components/DropDown';
import { useParams } from 'react-router-dom';
import { writeReview } from '../../apis/Review/GetReview';

const closing = [
  "전체 공개",
  "나만 보기"
]


function ReviewWrite2(){

    const infoId = useParams();
    const [name,setName] = useState("전체 보기");
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => setIsOpen(!isOpen);

    const [titleFocus, setTitleFocus] = useState(false);
    const [contentFocus, setContentFocus] = useState(false);
    const fileInputRef = useRef(null);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState(
        ''
      );
    const [imageFiles, setImageFiles] = useState(Array(5).fill(null));


      
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
          console.log(imageFiles);
          URL.revokeObjectURL(file);
        }
      };

      const onOptionClicked = (value, i) => () => {
        console.log(value);
          setName(value);
          setIsOpen(false);
      };

      const SaveInfo = async () =>{

        if(title!==""){
          if(content!==""){
            const pageNum = infoId.infoId;
            const response = await writeReview([pageNum,title,content,"True",imageFiles]);
            console.log(response)
          }
        }

      }

  return (
    <Wrapper>
      <WriteWrapper>
      <Container81>
        <RegisterContainer>
          <CategoryMenuBox onClick={onToggle}>
              <>{`${name} ∨`}</>
              {
                isOpen && <Dropdown width={100} array={closing} onOptionClicked={onOptionClicked}></Dropdown>
              }
          </CategoryMenuBox>
          <RegisterButton onClick={SaveInfo}>등록하기</RegisterButton>
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
            value={contentFocus ? content : "본문을 작성해주세요"}
            onFocus={() => {
              if (!contentFocus) {
                setContent("");
                setContentFocus(true);
                }
            }
            }
            onBlur={() =>{
              if (content === "") {
                setContent("본문을 작성해주세요");
                setContentFocus(false);
                }
            } 
            }
            onChange={(e) => setContent(e.target.value)}
            style={{ fontSize: "16px", color: contentFocus ? "black" : "#7E8181" }}
            >
              {content}
            </WriteMain>
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
      </WriteWrapper>
    </Wrapper>
  );
};

export default ReviewWrite2;

const WriteWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 추가 */
  width: 73 %;
  height: auto;
  min-height: 100vh; /* 화면 높이에 따라 최소 높이 조정 */
  margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
`;

const Container81 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 672px;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 20px;
  width: 100%;
  height: 65px;
`;

const RegisterButton = styled.button`

  justify-content: center;

  padding: 12px 20px;

  width: 120px;
  height: 45px;
  
  /* Yellow Color */
  background: #FFE34F;
  border-radius: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  border: none; /* 테두리 없애기 */


`;

const CategoryMenuBox = styled.button`
  border: 1px solid #000;
  background: var(--secondary-yellow-color, #FFFAC9);


    width: 7em;
    height: 2.1em;
    padding: 4px 10px 4px 10px;
    margin-top: 0; /* Object1 위쪽 여백을 없애서 상단으로 붙임 */



    font-weight: 400;
    font-size:1.4em;

    display: flex;
    align-items: center;

    flex-direction : column;

`;

const MyReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
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
  width: 100%;
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
  width: 100%;
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
  width: 100%;
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
  width: 100%;
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
  align-items: center;
  justify-content: center;
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
