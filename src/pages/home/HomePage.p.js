import React from 'react';

/**
 * import ui templates
 */
 import IndexHead from '../public/application/ui/templates/home/tpls/index/indexHead.tpl.js';
 import IndexMain from '../public/application/ui/templates/home/tpls/index/index.tpl.js';
 import HomeMain from '../public/application/ui/templates/home/tpls/home/home.tpl.js';
 import HomeHead from '../public/application/ui/templates/home/tpls/home/homeHead.tpl.js';
 import GetStartedMain from '../public/application/ui/templates/getstarted/getStarted.tpl.js';

/**
 * import ui modals
 */
import SignInModalBox from '../public/application/ui/modals/signin/signIn.tpl.js';
import VerifyAccountModalBox from '../public/application/ui/modals/verifyaccount/verifyAccount.tpl.js';
import FeedbackModal from '../public/application/ui/modals/feedback/feedback.tpl.js';
import ReportIssueModal from '../public/application/ui/modals/reports/reportIssue.tpl.js';

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