import React from 'react';
export default function _404Page() {
  return (
    <div id="_404P">
      <IndexHead />
      <div className="notLoggedIn" style={{ display: 'none' }}>
        <_404Main />
      </div>
      <div className="loggedIn" style={{ display: 'none' }}>
        <_404Main />
      </div>
      <SignInModalBox />
    </div>
  );
}