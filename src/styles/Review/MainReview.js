import { styled } from "styled-components";

export const Reviewdiv = styled.div`

    display: inline-flex;
    padding: 6.4em 0 0 0;
    flex-direction: column;
    align-items: flex-start;

`

export const ReviewTitle = styled.span`

    color: var(--dark-color, #024959);
    font-size: 3.6em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

export const ReviewSortdiv = styled.div`

    display: flex;

    width: 100%;
    height : auto;
    
    padding: 4px 20px;
    justify-content: space-between;
    align-items: center;

`

export const ReviewBespokediv = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 10px 10px 0px;


`

export const ReviewBespokeButton = styled.div`



  box-shadow:none;
  margin: 10px;

  

  width: 24px;
  height: 24px;
  
  border: 2px solid var(--dark-gray-color, #7E8181);
  border-radius: 5px;
  
  background-color: ${(props) => (props.states==="false") ? 'white' : 'var(--yellow-color, #FFE34F)'};


`

export const ReviewBespokeText = styled.div`

  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  
  &:hover {
    background-color : var(--secondary-yellow-color, ##FFFAC9);
  }

`


export const CategoryMenuBox = styled.button`

    border: 1px solid #000;
    background: #FFF;

    width: 133px;
    height: auto;
    padding : 4px 0px;


    font-weight: 500;
    font-size:1.4em;

    display: flex;
    align-items: center;

    flex-direction : column;
    margin-top: 0.8em;

`;

export const ReviewInfoWrapper = styled.div`

    width : 100%
    height : auto;

    display: flex;
    justify-content :flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 64px;

`

export const ReviewItemWrapper = styled.div`

    display: flex;
    justify-content : space-between;

    width: 100%;
    height : auto;
    align-items: flex-start;

`

export const ReviewGaugediv = styled.div`

    display: flex;
    padding: 64px 0px 40px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

`

export const ReviewGagueTextdiv = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

export const ReviewGaugeText = styled.span`

    color: #000;
    font-size: 2em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

export const Gaugediv = styled.div`

    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content : center;
    align-items: end;
    gap : 120px;

`

export const Cheerdiv = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;

`

export const CheerButton = styled.button`

    background-image: url(${props => props.url});
    background-size: cover; /* 이미지를 컨테이너에 맞게 늘립니다 */
    background-position: center; /* 이미지를 중앙으로 정렬합니다 */ 
    width : 67px;
    height : 67px;
    display: flex;
    padding: 4px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

`

export const CheerText = styled.span`
    text-align : left;
    color: var(--dark-gray-color, #7E8181);
    font-family: Pretendard Variable;
    font-size: 1.2em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

export const Gradediv = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

`

export const GradeText =styled.span`

    color: #000;
    font-family: Pretendard Variable;
    font-size: 1.4em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

export const GradeImg = styled.div`

    background-image: url(${props => props.url});
    background-size: cover; /* 이미지를 컨테이너에 맞게 늘립니다 */
    background-position: center; /* 이미지를 중앙으로 정렬합니다 */ 
    display: flex;
    width: 200px;
    height: 200px;
    flex-direction: column;
    align-items: center;

`