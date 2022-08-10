import React from "react";
import IndexHead from "tpls/indexHead.tpl.js";
import PrivacyTemplate from "../views/tpls/privacy.tpl.js";
import SignInModalBox from "../views/tpls/modals/signIn.tpl.js";

export default function PrivacyPolicyPage() {
  return (
    <div id="privacyP">
      <IndexHead />
      <div className="notLoggedIn" style={{ display: "none" }}>
          <PrivacyTemplate />
      </div>
      <div className="loggedIn" style={{ display: "none" }}>
          <PrivacyTemplate />
      </div>
      <SignInModalBox />
    </div>
  );
}

// set up page controller js
window.setUpPrivacyPageControllerJs = function(isUserLoggedIn) {
    if(window.controller == "privacy.c.js") {
        window.tempId = "privacyP";
        // load semantics ui js library
        if(typeof head !== "undefined") {
            head.js(semanticsUIjs, function() {
                $(".ui.checkbox").checkbox();
                $(".dropdown").dropdown();
                $("#logoSite").click(function() {
                     location.href = "/";
                });
                $("#androidApp").click(function() {
                    window.open(androidAppLink);
                });
                if(isUserLoggedIn) {
                  $(".signOutButton").removeAttr("style");
                  $('.signOutButton').click(function(){
                      signUserOut();
                  });
                } else {
                  $("#signInButton,#androidApp").removeAttr("style");
                  signInProcess();
                }
            });
        }
    }
}