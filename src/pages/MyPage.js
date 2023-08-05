import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
let YellowBtn = styled.button`
  backgroung: yellow;
  color: black;
  padding: 10px;
`
let Box = styled.div`
  padding: 20px;
  background: grey;
`
function MyPage(){
  useEffect(()=>{

  })
  let [count, setCount] = useState(0)

    return (
      <div className="container">
        <Box></Box>
        <YellowBtn></YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div> 
    );
}
export default MyPage;