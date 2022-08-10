import React from "react";
import IndexHead from "index/indexHead.tpl.js";
import IndexTemplate from "tpls/index/index.tpl.js";
import HomeHead from "tpls/home/homeHead.tpl.js";
import HomeTemplate from "tpls/home/home.tpl.js";
import GetStartedTemplate from "/ui/pagelets/getstarted/getStarted.tpl.js";
import SignInModalBox from "ui/pagelets/signin/signIn.tpl.js";
import VerifyAccountModalBox from "ui/pagelets/verifyaccount/verifyAccount.tpl.js";

export default function HomePage() {
  if(window.controller == "home.c.js") {
  return (
    <div id="homeP">
      <div className="notLoggedIn" style={{ display: "none" }}>
            <IndexHead />
            <IndexTemplate />
      </div>
      <div className="loggedIn" style={{ display: "none" }}>
           <div className="getStarted" style={{ display: "none" }}>
                <IndexHead />
                <GetStartedTemplate />
           </div>
           <div className="mainHome" style={{ display: "none" }}>
                <HomeHead />
                <HomeTemplate />
           </div>
      </div>
      <SignInModalBox />
      <VerifyAccountModalBox />
    </div>
  );
  }
}

// set up page controller js
window.setUpHomePageControllerJs = function(isUserLoggedIn) {
    if(window.controller == "home.c.js") {
        window.tempId = "homeP";
        // load semantics ui js library
        if(typeof head !== "undefined") {
            head.js(semanticsUIjs, function() {
                $("#androidApp").click(function(){
                    window.open(androidAppLink);
                });
                $(".dropdown").dropdown();
                if(isUserLoggedIn) {
                    $("#appLogo").click(function(){
                        History.replaceState({state:1}, "Africogram", "news_feed");  
                   });
                    $('select.dropdown').dropdown();
                    $('.signOutButton').removeAttr("style");
                    $('.signOutButton').click(function(){
                        signUserOut();
                    });
                    if(window.isNewUser == undefined || window.isNewUser) {
                        $(".getStarted").removeAttr("style");
                        if(window.firstName != undefined){
                           var message = "Hi," + " " + window.firstName + "!";
                           $("#firstNameH").text(message);
                        }
                        getStartedProcess(); 
                    } else {
                        (function(window,undefined){
                            // Bind to StateChange Event
                            History.Adapter.bind(window,'statechange',function(){
                                 var pathName = window.location.pathname.replace(/\//g, '');
                                 $(".ui.left.menu .item").removeClass("active");
                                 $(".ui.left.menu .item[id="+pathName+"]").addClass("active");
                                 $("#MiddleContainer > div[data-box="+pathName+"]").removeAttr("style");
                                 $("#MiddleContainer > div[data-box!="+pathName+"]").css("display","none");
                            });
                            $(".ui.left.menu .item").click(function(){
                                var pathName = $(this).attr("id").replace(/\//g, '');
                                var pathTitle = $(this).find("span").text();
                                if(pathName == "news_feed") {
                                    pathTitle = "Africogram";
                                }
                                History.pushState({}, pathTitle,pathName);  
                            });
                        })(window);
                        $(".mainHome").removeAttr("style");
                        // set basic user info
                        $(".username").text(window.firstName + " " + window.lastName);
                        $(".countryBornInfo").text("Born in " + window.countriesAllJsonEn[window.countryBornCode]);
                        $(".countryLivesInfo").text("Lives in " + window.countriesAllJsonEn[window.countryLiveCode]);
                        $("#profilePicSmall").css("background-image","url("+window.profilePic+")");
                        $("body").scroll(function(){
                            var scroll = $("body").scrollTop();
                            if(scroll >= 685 && Modernizr.mq('(min-width: 930px)')) {
                                $("#LeftContainerCard .menu").addClass("left fixed").css("width",$("#LeftContainer").width());
                                $("#LeftContainerCard .menu").css("border","2px solid #ddd")
                            } else {
                                $("#LeftContainerCard .menu").removeClass("left fixed");
                                $("#LeftContainerCard .menu").removeAttr("style");
                                $("#LeftContainerCard .menu").css("width","100%");
                            }
                        });
                        $("#openNav").click(function(){
                            $("#smallNav").toggleClass("w3-hide w3-hide-large w3-hide-medium");
                        });
                        $(".feedback").click(function(){
                            showDialogBox("feedbackModal",true,true,false);
                        });
                        $(".reportIssue").click(function(){
                            showDialogBox("reportIssueModal",true,true,false);
                        });
                        feedbackProcess();
                        reportIssueProcess();
                    }
                    $(".signOut").click(function(){
                        $("body").addClass("signOut");
                        signUserOut();
                    });
                    $(".cancelSignInAgain").click(function() {
                        location.reload();
                    });
                    $("#signedInAgain").click(function() {
                        showDialogBox("signInModal",true,false,false);
                        signInProcess();
                    });
                } else {
                    $("#signInButton,#androidApp").removeAttr("style");
                    signInProcess();
                    signUpProcess();
                }
            });
        }
    }
}
