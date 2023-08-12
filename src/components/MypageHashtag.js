import { Wrapper } from "../styles/Common";
import styled from 'styled-components';
import { useState } from "react";

function MypageHashtag(){
    const hashtags = [
        "#공익_인권","#교육","#국제행사", "#국제협력_해외봉사", "#농어촌봉사",
        "#문화행사", "#멘토링", "#보건의료", "#상담", "#생활편의지원",
        "#안전_예방", "#자원봉사교육", "#재해_재난", "#주거환경",
        "#행정보조", "#환경보호", "#기타"
      ];
    const [selectedHash, setSelectedHash] = useState(null);

    const handleButtonClick = (hash) => {
        setSelectedHash(hash);
    };
    return (
        <>
        {hashtags.map((hash) => (
            <Button
              key={hash}
              style={
                selectedHash === hash
                  ? { backgroundColor: '#FFE34F', fontWeight: 700 }
                  : {}
              }
              onClick={() => handleButtonClick(hash)}
            >
              {hash}
            </Button>
          ))}
        </>
    );
  }
  
  export default MypageHashtag;
  const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  height: 37px;
  
  /* Light Gray Color */
  background: #D9D9D9;
  border-radius: 20px;
  font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #000000;
&:hover {
    cursor: pointer;
    background-color: #FFE34F;
    fontWeight: 700;
  }
  `
