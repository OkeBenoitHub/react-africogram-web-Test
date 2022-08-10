import React from 'react';


/**
 * import ui page controllers
 */
 import '../public/application/ui/pages/home/home.c.js';
 import '../public/application/ui/pages/terms/terms.c.js';
 import '../public/application/ui/pages/privacy/privacy.c.js';
 import '../public/application/ui/pages/404/404.c.js';

/**
 * import ui pagelets controllers
 */
 import '../public/application/ui/pagelets/feedback/feedback.c.js';
 import '../public/application/ui/pagelets/reports/reportIssue.c.js';
 import '../public/application/ui/pagelets/verifyaccount/verifyAccount.c.js';
 import '../public/application/ui/pagelets/getstarted/getStarted.c.js';
 import '../public/application/ui/pagelets/signup/signUp.c.js';
 import '../public/application/ui/pagelets/signin/signIn.c.js';

/**
 * import ui styles
 */
import '../public/application/ui/pages/home/css/indexHead.css';
import '../public/application/ui/pages/home/css/index.tpl.css';
import '../public/application/ui/pages/home/css/homeHead.css';
import '../public/application/ui/pages/home/css/home.tpl.css';

/**
 * import ui page templates
 */
import TermsMain from '../public/application/ui/pages/terms/terms.tpl.js';
import PrivacyMain from '../public/application/ui/pages/privacy/privacy.tpl.js';
import _404Main from '../public/application/ui/pages/404/404.tpl.js';



import IndexHead from '../public/application/ui/pages/home/tpls/index/indexHead.tpl.js';
import IndexMain from '../public/application/ui/pages/home/tpls/index/index.tpl.js';
import HomeMain from '../public/application/ui/pages/home/tpls/home/home.tpl.js';
import HomeHead from '../public/application/ui/pages/home/tpls/home/homeHead.tpl.js';
import GetStartedMain from '../public/application/ui/pagelets/getstarted/getStarted.tpl.js';
import SignInModalBox from '../public/application/ui/pagelets/signin/signIn.tpl.js';
import VerifyAccountModalBox from '../public/application/ui/pagelets/verifyaccount/verifyAccount.tpl.js';
import FeedbackModal from '../public/application/ui/pagelets/feedback/feedback.tpl.js';
import ReportIssueModal from '../public/application/ui/pagelets/reports/reportIssue.tpl.js';

export default function HomePage() {
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
 }