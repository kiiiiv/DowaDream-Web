import React from 'react'
import styled from 'styled-components';

const MainInfoVol = (ac,title,time1,time2) => {
  return (
    <Wrapper>
        <Ac>광양시자원봉사센터</Ac>
        <Title>2023. 비대면 온라인교육 자원봉사 일일학당</Title>
        <Time>
            2023.05.06
            <br />
            -
            <br/>
            2023.05.06
     
        </Time>
        <Time>
            2023.05.06
            <br />
            -
            <br/>
            2023.05.06
        </Time>
    </Wrapper>
  )
}

export default MainInfoVol

const Wrapper = styled.div`

    display : flex;
    width : 100%;
    align-items : center;
    padding: 10px;

    border-bottom: 1px solid var(--light-gray-color, #D9D9D9);

`;

const Ac = styled.span`

    width: 20%;
    height : auto;
    
    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`;

const Title = styled.span`


    text-align : left;

    width: 60%;
    height : auto;
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #000;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`;
const Time = styled.span`

    width: 10%;
    height : auto;
    color: var(--dark-gray-color, #7E8181);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;