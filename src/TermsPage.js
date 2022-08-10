import React from 'react';
export default function TermsPage() {
  return (
    <div id="termsP">
      <div className="notLoggedIn" style={{ display: 'none' }}>
        <IndexHead />
        <TermsMain />
      </div>
      <div className="loggedIn" style={{ display: 'none' }}>
        <TermsMain />
      </div>
      <SignInModalBox />
    </div>
  );
}