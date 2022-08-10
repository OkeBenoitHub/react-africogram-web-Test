import '../public/application/components/AppConsts.c.js'; // constants component
import '../public/utils/MainUtil.js'; // main util
import '../public/utils/UrlProcessingUtil.js'; // url proceessing util
import '../public/utils/EmailUtil.js'; // email util
import '../public/application/components/Email.c.js'; // email component
import '../public/utils/firebase/FirebaseInitUtil.js'; // firebase init config
import '../public/utils/firebase/FirestoreDbUtil.js'; // firestore DB util
import '../public/utils/firebase/FirebaseStorageUtil.js'; // firebase Storage util
import '../public/utils/firebase/FirebaseAuthUtil.js'; // firebase auth util
import '../public/application/models/userData.js'; // user data
import './app.css';

/**
 * import ui page controllers
 *
 import '../public/application/ui/pages/home/home.c.js';
 import '../public/application/ui/pages/terms/terms.c.js';
 import '../public/application/ui/pages/privacy/privacy.c.js';
 import '../public/application/ui/pages/404/404.c.js';

 import '../public/application/ui/pagelets/feedback/feedback.c.js';
 import '../public/application/ui/pagelets/reports/reportIssue.c.js';
 import '../public/application/ui/pagelets/verifyaccount/verifyAccount.c.js';
 import '../public/application/ui/pagelets/getstarted/getStarted.c.js';
 import '../public/application/ui/pagelets/signup/signUp.c.js';
 import '../public/application/ui/pagelets/signin/signIn.c.js';

import '../public/application/ui/pages/home/css/indexHead.css';
import '../public/application/ui/pages/home/css/index.tpl.css';
import '../public/application/ui/pages/home/css/homeHead.css';
import '../public/application/ui/pages/home/css/home.tpl.css';

import TermsMain from '../public/application/ui/pages/terms/terms.tpl.js';
import PrivacyMain from '../public/application/ui/pages/privacy/privacy.tpl.js';
import _404Main from '../public/application/ui/pages/404/404.tpl.js'; */

import HomePage from "./pages/home/HomePage.p.js"
import TermsPage from "./pages/terms/TermsPage.p.js"
import PrivacyPage from "./pages/privacy/PrivacyPage.p.js"
import _404Page from "./pages/404/404Page.p.js"

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
      return HomePage();
    case 'terms.c.js':
      // terms of service
      return TermsPage();
    case 'privacy.c.js':
      // privacy policy
      return PrivacyPage();
    default:
      // 404 page
      return _404Page();
  }
}
