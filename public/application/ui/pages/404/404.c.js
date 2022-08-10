import React from "react";
import IndexHead from "";
import _404Template from "404.tpl.js";
import SignInModalBox from "../views/tpls/modals/signIn.tpl.js";

export default function _404Page() {
  return (
    <div id="_404P">
      <IndexHead />
      <div className="notLoggedIn" style={{ display: "none" }}>
          <_404Template />
      </div>
      <div className="loggedIn" style={{ display: "none" }}>
          <_404Template />
      </div>
      <SignInModalBox />
    </div>
  );
}

// set up page controller js
window.setUp404ControllerJs = function(isUserLoggedIn) {
    if(window.controller == "404.c.js") {
        window.tempId = "_404P";
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
