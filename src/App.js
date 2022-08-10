import React from "react";
import "../public/application/components/AppConsts.c.js"; // constants component
import "../public/utils/MainUtil.js"; // main util
import "../public/utils/UrlProcessingUtil.js"; // url proceessing util
import "../public/utils/EmailUtil.js"; // email util
import "../public/application/components/Email.c.js"; // email component
import "../public/utils/firebase/FirebaseInitUtil.js"; // firebase init config
import "../public/utils/firebase/FirestoreDbUtil.js" // firestore DB util
import "../public/utils/firebase/FirebaseStorageUtil.js" // firebase Storage util
import "../public/utils/firebase/FirebaseAuthUtil.js"; // firebase auth util
import "../public/application/models/userData.js"; // user data
import "./app.css";

/**
 * import ui styles
 */
 import "../public/application/ui/pages/home/css/indexHead.css"
 import "../public/application/ui/pages/home/css/index.tpl.css";
 import "../public/application/ui/pages/home/css/homeHead.css";
 import "../public/application/ui/pages/home/css/home.tpl.css";

/**
 * import ui templates
 */
import IndexHead from "../public/application/ui/pages/home/tpls/index/indexHead.tpl.js";
import IndexMain from "../public/application/ui/pages/home/tpls/index/index.tpl.js";
import HomeHead from "../public/application/ui/pages/home/tpls/home/homeHead.tpl.js";
import HomeMain from "../public/application/ui/pages/home/tpls/home/home.tpl.js";
import GetStartedMain from "../public/application/ui/pagelets/getstarted/getStarted.tpl.js";
import SignInModalBox from "../public/application/ui/pagelets/signin/signIn.tpl.js";
import VerifyAccountModalBox from "../public/application/ui/pagelets/verifyaccount/verifyAccount.tpl.js";

import TermsMain from "../public/application/ui/pages/terms/terms.tpl.js";
import PrivacyMain from "../public/application/ui/pages/privacy/privacy.tpl.js";
import _404Main from "../public/application/ui/pages/404/404.tpl.js";

import FeedbackModal from "../public/application/ui/pagelets/feedback/feedback.tpl.js";
import ReportIssueModal from "../public/application/ui/pagelets/reports/reportIssue.tpl.js";


/**
 * import ui pagelets
 */
import "../public/application/ui/pagelets/feedback/feedback.c.js";
import "../public/application/ui/pagelets/reports/reportIssue.c.js";
import "../public/application/ui/pagelets/verifyaccount/verifyAccount.c.js";
import "../public/application/ui/pagelets/getstarted/getStarted.c.js";
import "../public/application/ui/pagelets/signup/signUp.c.js";
import "../public/application/ui/pagelets/signin/signIn.c.js";

window.setUpPageControllerJs = function(isUserLoggedIn) {
    if(window.controller == "home.c.js") {
       setUpHomePageControllerJs(isUserLoggedIn);
    } else if(window.controller == "terms.c.js") {
       setUpTermsPageControllerJs(isUserLoggedIn);
    } else if(window.controller == "privacy.c.js") {
       setUpPrivacyPageControllerJs(isUserLoggedIn);
    } else {
       setUp404ControllerJs(isUserLoggedIn);
    }
}

export default function App() {
  /**
   * Check for appropriate js controller
   */
  switch (window.controller) {
    case "home.c.js":
      // home page
      return (
        <div id="homeP">
          <div className="notLoggedIn" style={{ display: "none" }}>
                <IndexHead />
                <IndexMain />
          </div>
          <div className="loggedIn" style={{ display: "none" }}>
               <div className="getStarted" style={{ display: "none" }}>
                    <IndexHead />
                    <GetStartedMain />
               </div>
               <div className="mainHome" style={{ display: "none" }}>
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
    case "terms.c.js":
      // terms of service
      return (
        <div id="termsP">
          <IndexHead />
          <div className="notLoggedIn" style={{ display: "none" }}>
              <TermsMain />
          </div>
          <div className="loggedIn" style={{ display: "none" }}>
              <TermsMain />
          </div>
          <SignInModalBox />
        </div>
      );
    case "privacy.c.js":
      // privacy policy
      return (
        <div id="privacyP">
          <IndexHead />
          <div className="notLoggedIn" style={{ display: "none" }}>
              <PrivacyMain />
          </div>
          <div className="loggedIn" style={{ display: "none" }}>
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
          <div className="notLoggedIn" style={{ display: "none" }}>
              <_404Main />
          </div>
          <div className="loggedIn" style={{ display: "none" }}>
              <_404Main />
          </div>
          <SignInModalBox />
        </div>
      );
  }
}
