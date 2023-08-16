import styled from "styled-components";


export const Wrapper = styled.div`


//초기 화면 크기
height: fit-content;

// 화면 중앙 정렬
margin: 0 auto;
padding-bottom: 0px;

@media all and (min-width:1024px) {
  font-size : 10px;
  width : 80%;

} 

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/ 
@media all and (min-width:768px) and (max-width:1023px) {
  font-size : 6px;
  width : 90%;

} 

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/ 
@media all and (max-width:767px) {
  font-size : 6px;
  width : 98%;

}

//해당 폰트사이즈 수정시, 나머지 높이도 함께 수정

//내부 object의 정렬 방식
display : flex;
flex-direction: column;



`