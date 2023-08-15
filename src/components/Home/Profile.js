import React from 'react';

function Profile(props) {
  const { userInfo } = props;

  return (
    <div>
      <h2>{userInfo.name}</h2>
      <img src={userInfo.picture} alt="Profile" />
    </div>
  );
}

export default Profile;
