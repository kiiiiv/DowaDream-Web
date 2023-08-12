import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonPic2 from '../../assets/로그인후버튼.png';

function LoginedButton(props) {
  const { backgroundImg, userName, onLogoutClick } = props;

  return (
    <Button
      variant="outline-light"
      style={{
        backgroundImage: `url(${ButtonPic2})`,
        backgroundRepeat: 'no-repeat',
        width: '320px',
        height: '40px',
        border: 'none',
      }}
    >
      <span style={{ paddingRight: '8px' }}>{userName}</span> {/* 사용자 이름을 표시함 */}
      <Button variant="secondary" onClick={onLogoutClick}>로그아웃</Button> {/* 로그아웃 버튼 */}
    </Button>
  );
}

export default LoginedButton;