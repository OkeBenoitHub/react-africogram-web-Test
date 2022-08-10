import React from 'react';
import '../public/components/AppConsts.c.js'; // constants component
import '../public/utils/MainUtil.js'; // main util
import '../public/utils/UrlProcessingUtil.js'; // url proceessing util
import '../public/utils/EmailUtil.js'; // email util
import '../public/application/controllers/Email.c.js'; // email component
import '../public/utils/firebase/FirebaseInitUtil.js'; // firebase init config
import '../public/utils/firebase/FirestoreDbUtil.js'; // firestore DB util
import '../public/utils/firebase/FirebaseStorageUtil.js'; // firebase Storage util
import '../public/utils/firebase/FirebaseAuthUtil.js'; // firebase auth util
import '../public/application/models/userData.js'; // user data
import './app.css';

/******************************
 * import ui controllers
 */
// home
import '../public/application/controllers/home/home.c.js';
import '../public/application/controllers/home/feedback.c.js';
import '../public/application/controllers/home/reportIssue.c.js';
import '../public/application/controllers/home/getStarted.c.js';

// index
import '../public/application/controllers/index/signUp.c.js';
import '../public/application/controllers/index/signIn.c.js';
import '../public/application/controllers/index/verifyAccount.c.js';

// terms and privacy
import '../public/application/controllers/terms/terms.c.js';
import '../public/application/controllers/privacy/privacy.c.js';

// 404
import '../public/application/controllers/404/404.c.js';


/*******************************
 * import ui styles
 */
// home
import '../public/application/ui/templates/home/css/homeHead.css';
import '../public/application/ui/templates/home/css/home.tpl.css';

// index
import '../public/application/ui/templates/index/css/indexHead.css';
import '../public/application/ui/templates/index/css/index.tpl.css';


/******************************
 * import ui templates
 */
// home
import HomeMain from '../public/application/ui/templates/home/tpls/home.tpl.js';
import HomeHead from '../public/application/ui/templates/home/tpls/homeHead.tpl.js';
import GetStartedMain from '../public/application/ui/templates/home/tpls/getStarted.tpl.js';

// index
import IndexHead from '../public/application/ui/templates/index/tpls/indexHead.tpl.js';
import IndexMain from '../public/application/ui/templates/index/tpls/index.tpl.js';

// terms and privacy
import TermsMain from '../public/application/ui/templates/terms/terms.tpl.js';
import PrivacyMain from '../public/application/ui/templates/privacy/privacy.tpl.js';

// 404
import _404Main from '../public/application/ui/templates/404/404.tpl.js';

/*****************************
 * import ui modals
 */
import SignInModalBox from '../public/application/ui/modals/signin/signIn.tpl.js';
import VerifyAccountModalBox from '../public/application/ui/modals/verifyaccount/verifyAccount.tpl.js';
import FeedbackModal from '../public/application/ui/modals/feedback/feedback.tpl.js';
import ReportIssueModal from '../public/application/ui/modals/reports/reportIssue.tpl.js';

window.setUpPageControllerJs = function (isUserLoggedIn) {
  if (window.controller == 'home.c.js') {
    setUpHomePageControllerJs(isUserLoggedIn);
  } else if (window.controller == 'terms.c.js') {
    setUpTermsPageControllerJs(isUserLoggedIn);
  } else if (window.controller == 'privacy.c.js') {
    setUpPrivacyPageControllerJs(isUserLoggedIn);
  } else {
    setUp404ControllerJs(isUserLoggedIn);
  }
};

export default function App() {
  /**
   * Check for appropriate js controller
   */
  switch (window.controller) {
    case 'home.c.js':
      // home page
      return (
        <div id="homeP">
          <div className="notLoggedIn" style={{ display: 'none' }}>
            <IndexHead />
            <IndexMain />
          </div>
          <div className="loggedIn" style={{ display: 'none' }}>
            <div className="getStarted" style={{ display: 'none' }}>
              <IndexHead />
              <GetStartedMain />
            </div>
            <div className="mainHome" style={{ display: 'none' }}>
              <HomeHead />
              <HomeMain />
              <FeedbackModal />
              <ReportIssueModal />
            </div>
          </div>
          <SignInModalBox />
          <VerifyAccountModalBox />
        </div>
      );
    case 'terms.c.js':
      // terms of service
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
    case 'privacy.c.js':
      // privacy policy
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
    default:
      // 404 page
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
}
