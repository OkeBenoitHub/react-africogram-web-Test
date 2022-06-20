import "../public/utils/globals.js"; // globals
import "../public/utils/urlProcessing.js"; // url proceessing
import "../public/utils/emailTpl.js"; // email
import "../public/utils/firebase/firebaseInit.js"; // firebase init config
import "../public/utils/firebase/firestoreDb.js" // firestore DB util
import "../public/utils/firebase/firebaseStorage.js" // firebase Storage util
import "../public/utils/firebase/firebaseAuth.js"; // firebase auth util
import "../public/application/models/userData.js"; // user data
import "./app.css";
/**
 * import controllers
 */
import HomePage from "../public/application/controllers/home.c.js";
import TermsOfServicePage from "../public/application/controllers/terms.c.js";
import PrivacyPolicyPage from "../public/application/controllers/privacy.c.js";
import _404Page from "../public/application/controllers/404.c.js";
import "../public/application/controllers/feedback.c.js";
import "../public/application/controllers/reportIssue.c.js";
import "../public/application/controllers/getStarted.c.js";
import "../public/application/controllers/signIn.c.js";
import "../public/application/controllers/signUp.c.js";
import "../public/application/controllers/email.c.js";

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
      return HomePage();
    case "terms.c.js":
      // terms of service
      return TermsOfServicePage();
    case "privacy.c.js":
      // privacy policy
      return PrivacyPolicyPage();
    default:
      // 404 page
      return _404Page();
  }
}
