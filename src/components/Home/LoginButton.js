import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonPic from '../../assets/로그인버튼2.png';

function LoginButton(props) {
  const { backgroundImg, onClick } = props;

  return (
    <Button
      variant="outline-light"
      style={{
        backgroundImage: `url(${ButtonPic})`,
        backgroundRepeat: 'no-repeat',
        width: '189px',
        height: '40px',
        border: 'none',
      }}
      onClick={onClick} // onClick 이벤트 핸들러를 props로 받아옴
    ></Button>
  );
}

export default LoginButton;