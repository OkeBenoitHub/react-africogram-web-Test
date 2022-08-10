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

import HomePage from "./HomePage.js"
import TermsPage from "./TermsPage.js"
import PrivacyPage from "./PrivacyPage.js"
import _404Page from "./404Page.js"

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
