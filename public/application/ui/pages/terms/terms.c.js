import React from "react";
import IndexHead from "pages/home/index/indexHead.tpl.js";
import TermsTemplate from "pages/terms/terms.tpl.js";
import SignInModalBox from "pagelets/signin/signIn.tpl.js";

export default function TermsOfServicePage() {
  return (
    <div id="termsP">
      <IndexHead />
      <div className="notLoggedIn" style={{ display: "none" }}>
          <TermsTemplate />
      </div>
      <div className="loggedIn" style={{ display: "none" }}>
          <TermsTemplate />
      </div>
      <SignInModalBox />
    </div>
  );
}

// set up page controller js
window.setUpTermsPageControllerJs = function(isUserLoggedIn) {
    if(window.controller == "terms.c.js") {
        window.tempId = "termsP";
        // load semantics ui js library
        if(typeof head !== "undefined") {
            head.js(semanticsUIjs, function() {
                $(".ui.checkbox").checkbox();
                $(".dropdown").dropdown();
                $("#logoSite").click(function(){
                    location.href = "/";
                });
                $("#androidApp").click(function(){
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
