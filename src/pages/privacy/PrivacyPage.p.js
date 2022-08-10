import React from 'react';
export default function PrivacyPage() {
  return (
    <div id="privacyP">
      <IndexHead />
      <div className="notLoggedIn" style={{ display: 'none' }}>
        <PrivacyMain />
      </div>
      <div className="loggedIn" style={{ display: 'none' }}>
        <PrivacyMain />
      </div>
      <SignInModalBox />
    </div>
  );
}