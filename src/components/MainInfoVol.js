import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const MainInfoVol = ({ac,title,pagenum,recruitStart,recruitEnd, actStart,actEnd}) => {


    const navigate =useNavigate();

    
  return (
    <Wrapper onClick={()=>{
        navigate(pagenum);
        console.log(pagenum);
    }}>
        <Ac>{ac}</Ac>
        <Title>{title}</Title>
        <Time>
            {actStart}
            <br />
            -
            <br/>
            {actEnd}
     
        </Time>
        <Time>
            {recruitStart}
            <br />
            -
            <br/>
            {recruitEnd}
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

    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;

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

    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;


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