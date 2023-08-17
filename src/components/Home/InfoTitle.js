import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';


const text = [
  "관심태그를 선택지역과 함께 확인해보세요!",
  "모집 마감 임박 봉사 정보를 확인해보세요!",
  "가장 인기있는 봉사 정보를 확인해보세요!",
];

const InfoTitle = ({ num }) => {

  const navigate = useNavigate();

  return (
    <>
      {num === 1 ? (
        <TitleTextDiv>
          <TitleTextName>김성민님!</TitleTextName>
          <TitleTextDetail>{text[num - 1]}</TitleTextDetail>
        </TitleTextDiv>
      ) : (
        <TitleTextOthers>{text[num - 1]}</TitleTextOthers>
      )}
      
        <TiteViewAll onClick={()=>{navigate('/info')}}>전체보기</TiteViewAll>

    </>
  );
};

export default InfoTitle;


const TitleTextDiv= styled.div`

  display: flex;
  align-items: flex-start;

`

const TiteViewAll = styled.span`

    color: #000;
    font-size: 2.8em;

    display: inline-block;
    vertical-align: baseline; /* 수정된 부분 */

    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;

`;

const TitleTextName = styled.span`
  color: var(--dark-color, #024959);

  //font 스타일
  font-size: 2.8em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TitleTextDetail = styled.span`
  color: #000;

  //font스타일
  font-size: 2.4em;
  font-style: normal;
  font-weight: 400;
  margin-top: 3px;
  line-height: normal;
`;

const TitleTextOthers = styled.span`
  color: #000;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
