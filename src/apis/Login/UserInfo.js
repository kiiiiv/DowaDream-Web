import React, { useState } from 'react';
import axios from 'axios';

function UserInfo() {
  const [user, setUser] = useState(null);

  function onGetUserInfo() {
    axios.get('dowadream.kro.kr:8000/user/info').then((response) => {
      const { name, email, profileImage } = response.data;

      // 유저 정보 업데이트
      setUser({
        name,
        email,
        profileImage
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <button onClick={onGetUserInfo}>사용자 정보 가져오기</button>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <img src={user.profileImage} alt="Profile" />
        </div>
      )}
    </div>
  );
}

export default UserInfo;