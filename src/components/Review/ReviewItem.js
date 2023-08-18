import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { styled } from 'styled-components'
import TextBol from '../../../src/assets/말풍선.svg'
import Like from '../../../src/assets/좋아요.svg'
import Like2 from '../../assets/좋아요색변화.svg'
import { TagNameMaker } from '../../assets/TagCode'



const ReviewItem = ({width='30%' ,height=670,url='../../1ogo192.png',rid,num_cheer,num_comment,tag,updated_at,progrmRegistNo,title,content,is_public=true,is_customized=true,writer,images,writer_profile_img=null,writer_username="OO"}) => {
    
    const navigate = useNavigate();

    const [likeClicked, setLikeClicked] = useState(false); // State to track like button click
    const tagTitle = TagNameMaker(tag);

    const handleLikeClick = () => {
        setLikeClicked(!likeClicked);
    };


    return (


    <ReviewCardWrapper width={width} height={height} 
        onClick={()=>{
            const targetPath = rid
            ? `/review/${rid}`
            : '/review/default';
        window.location.href = targetPath;        
    }}
    >
        <ReviewCardImg url={images}></ReviewCardImg>
        <ReviewCardInfodiv>
            <ReviewNameWrapper>
                <ReviewNamediv>
                    <ReviewNameImg url={writer_profile_img}>
                        
                    </ReviewNameImg>
                    <ReviewNameText>{writer}</ReviewNameText>
                    <ReviewEmotediv>
                        <ReviewEmoteImg>
                            <img 
                                src={likeClicked ? Like2 : Like} // Toggle between Like and TextBol based on likeClicked state
                                onClick={()=>handleLikeClick()} // Attach click event handler
                                alt="Text"
                            ></img>
                        </ReviewEmoteImg>
                        <ReviewEmoteText>{num_cheer}</ReviewEmoteText>
                    </ReviewEmotediv>

                    <ReviewEmotediv>
                        <ReviewEmoteImg>
                            <img 
                                src={TextBol} // Toggle between Like and TextBol based on likeClicked state
                                alt="Like"
                            ></img>
                        </ReviewEmoteImg>                        
                        <ReviewEmoteText>{num_comment}</ReviewEmoteText>
                    </ReviewEmotediv>
                    
                </ReviewNamediv>

            </ReviewNameWrapper>
            <ReviewTextdiv>
                    <ReviewTextTitle>{title}</ReviewTextTitle>
                    <ReviewTextTag>{tagTitle}</ReviewTextTag>
            </ReviewTextdiv>
            <ReviewDetaildiv>
                <ReviewDetailText>{content}</ReviewDetailText>
            </ReviewDetaildiv>
        </ReviewCardInfodiv>

    </ReviewCardWrapper>
    


    )
}

export default ReviewItem


const ReviewCardWrapper = styled.div`

    

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: ${props => props.width || '33%'}; /* width 프롭이 주어지면 해당 값으로, 아니면 기본값으로 설정합니다. */
    height: ${props => props.height+'px' || '670px'}; 


`

const ReviewCardImg = styled.div`

    display: flex;
    justify-content : space-between;
    
    width : 100%;
    height: 73%;

    margin-bottom : 12px;
    
    padding-bottom: 0px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    border-radius: 20px;
    background: url(${props=>props.url || '../../1ogo192.png'}) , lightgray 50% / cover no-repeat;

    background-size: cover; /* 이미지를 컨테이너에 맞게 늘립니다 */
    background-position: center; /* 이미지를 중앙으로 정렬합니다 */ 
`

const ReviewCardInfodiv = styled.div`

    width : 100%;
    height: 27%;
    display: flex;
    padding: 12px 0px;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;
    background: var(--secondary-yellow-color, #FFFAC9);

`

const ReviewNameWrapper = styled.div`

    display: flex;
    width: 100%;
    height : 40%;
    align-items: center;



`
const ReviewNamediv = styled.div`

    display: flex;
    padding-right: 0px;
    align-items: center;
    flex: 1 0 0;
    margin-left: 1em;
    margin-right: 1em;

`

const ReviewNameImg = styled.div`

    width: 40px;
    height: 40px;
    display: flex;
    padding: 10px;
    align-items: flex-start;
    border-radius: 50px;
    background: url(${props=>props.url}), lightgray 50% / cover no-repeat;
    background-size: cover; /* 이미지를 컨테이너에 맞게 늘립니다 */
    background-position: center; /* 이미지를 중앙으로 정렬합니다 */ 
`

const ReviewNameText = styled.span`

    display: flex;
    padding: 10px;
    align-items: center;
    flex: 1 0 0;
    color: #000;
    font-size: 1.8em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

const ReviewEmotediv = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left : 1em;

`

const ReviewEmoteImg = styled.div`

    width: 24px;
    height : 50%;
    

`

const ReviewEmoteText = styled.div`

    width: 24px;
    height : 50%;

    color: #000;
    font-size: 1.4em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

const ReviewTextdiv = styled.div`


    width : 100%;
    height : 30%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content : space-between;
    padding : 1em;

`

const ReviewTextTitle = styled.span`

    overflow: hidden;
    white-space: nowrap; /* Prevent line breaks */
    text-overflow: ellipsis;


    text-align : left;
    color: #000;
    font-size: 1.8em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    width: 60%;
    height: 100%; 



`;


const ReviewTextTag = styled.span`

    overflow: hidden;
    white-space: nowrap; /* Prevent line breaks */
    text-overflow: ellipsis;

    width : 40%;
    height : 100%;



    border-radius: 30px;
    background: var(--dark-color, #024959);

    color: var(--white-color, #FCFCFC);
    font-size: 1.8em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

const ReviewDetaildiv = styled.div`

    width : 100%;   
    height : 30%;
    display: flex;
    padding: 1em;
    justify-content: center;
    align-items: center;
    gap: 1em;
    align-self: stretch;

`
const ReviewDetailText = styled.span`

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0;

    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    font-size: 1.6em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align : left;

`