import React, { useState } from 'react'
import styled from 'styled-components'
import Like from '../../assets/좋아요.svg'
import Like2 from '../../assets/좋아요색변화.svg'
import Scrap from '../../assets/스크랩.svg'
import Scrap2 from '../../assets/스크랩색변화.svg'
import { upDateScrapInfo } from '../../apis/Program/ProgramInfo'

const LikesandScrap = ({num_cheer=0,num_clipped=0}) => {
    const [likeClicked, setLikeClicked] = useState(false); // State to track like button click
    const [scrapClicked, setScrapClicked] = useState(false); // State to track like button click
    async function updateScrap() {
        try {
          const response = await upDateScrapInfo("123445");
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    const handleLikeClick = () => {
        setLikeClicked(!likeClicked);
    };
    const handleScrapClick = () => {
        setScrapClicked(!scrapClicked);
    };
  return (
    <>
        <LikesScrapContainer2>
                <LikesContainer>
                    <img 
                        src={likeClicked ? Like2 : Like} // Toggle between Like and TextBol based on likeClicked state
                        onClick={()=>handleLikeClick()} // Attach click event handler
                        alt="Like"
                    ></img>
                    응원하기
                </LikesContainer>
                <button onClick={updateScrap}></button>
    
                <LikesContainer>
                    <img 
                        src={scrapClicked ? Scrap2 : Scrap} // Toggle between Like and TextBol based on likeClicked state
                        onClick={()=>handleScrapClick()} // Attach click event handler
                        alt="Scrap"
                    ></img>
                    스크랩
                </LikesContainer>
        </LikesScrapContainer2>
                <LikesScrapText>
                    <TextContainer>
                        응원수 <span style={{color: "#F74E43"}}>{num_cheer}</span>회
                    </TextContainer>
                    <TextContainer>
                        스크랩 <span style={{color: "#F74E43"}}>{num_clipped}</span>개
                    </TextContainer>
                </LikesScrapText>
                </>

            
  )
}

export default LikesandScrap;
const LikesScrapContainer2 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 20px 0px 0px;
height: 72px;

`
const LikesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
width: 124px;
height: 52px;
background: #D9D9D9;
gap: 10px;
font-family: Pretendard Variable;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;


`
const LikesScrapText = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 20px 0px 20px;

width: 238px;
height: 59px;

`
const TextContainer = styled.div`
width: 124px;
height: 39px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #000000;
/* color: #F74E43; */


`