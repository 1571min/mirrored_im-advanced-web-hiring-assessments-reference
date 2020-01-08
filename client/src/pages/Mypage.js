import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export function Mypage(props) {
  const { isLogin, userinfo } = props;

  if (isLogin) {
    return (
      <div>
        <h1>Mypage</h1>
        <div className="username">{userinfo.username}</div>
        <div className="email">{userinfo.email}</div>
        <div className="mobile">{userinfo.mobile}</div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>NOT FOUND</h1>
      </div>
    );
  }
}
