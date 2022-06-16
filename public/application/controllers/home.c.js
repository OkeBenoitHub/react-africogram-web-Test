import React from "react";
import IndexHead from "../views/tpls/indexHead.tpl.js";
import IndexTemplate from "../views/tpls/index.tpl.js";
import HomeHead from "../views/tpls/homeHead.tpl.js";
import HomeTemplate from "../views/tpls/home.tpl.js";
import GetStartedTemplate from "../views/tpls/getStarted.tpl.js";
import SignInModalBox from "../views/tpls/modals/signIn.tpl.js";
import VerifyAccountModalBox from "../views/tpls/modals/verifyAccount.tpl.js";

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
                            // Change our States
                            var pathName = window.location.pathname.replace(/\//g, '');
                            if(pathName == "") {
                                pathName = "news_feed";
                            }
                            var pathTitle = $(".ui.left.menu .item[id="+pathName+"]").find("span").text();
	                        History.replaceState({state:1}, pathTitle, pathName);
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
                        $("#smallProfilePic").attr("src",window.profilePic);
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
                        signUserOut();
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

// sign up process
window.signUpProcess = function signUpProcess() {
    $(".ui.checkbox").checkbox();
    $(".dropdown").dropdown();
    /* if user press enter instead of clicking sign up button to sign up */
    $("#signUpBox input").keyup(function(e) {
        if (e.keyCode == 13) {
            $("#signUpButton").trigger("click");
        }
    });
    /*
    window.h.listen(({ location, action }) => {
        alert(location.pathname + location.state);
    });*/
    $("#signUpButton").click(function(e) {
        e.preventDefault();
        //window.h.push("about/privacy");
        
        var firstName = $("#signUpBox .firstName").val().trim();
        var lastName = $("#signUpBox .lastName").val().trim();
        var email = $("#signUpBox .email").val().trim();
        var password = $("#signUpBox .password").val().trim();
        var birthMonth = $("#signUpBox .birthMonth").val().trim();
        var birthDay = $("#signUpBox .birthDay").val().trim();
        var birthYear = $("#signUpBox .birthYear").val().trim();
        var gender = $('#signUpBox').find('[name="gender"]:checked').val();
        var captchaWord = $("#captcha").val().trim();
        var agreeTerms = $("#agreeTerms").is(":checked");
        $("#signUpBox").removeClass("error");
        $("#signUpBox .field,.dropdown").removeClass("error");
        /* check for fields */
        /* if first name is empty */
        if(firstName == "") {
            $("#signUpBox").addClass("error");
            $("#signUpBox").find(".firstName").parent(".field").addClass("error");
            $("#signUpBox").find(".firstName").trigger("focus");
            $("#signUpBox #errorMessage p").text("Please enter your first name.");
            return false;
        }
        /* if first name does not contain only letters */
        if (!allLetter(firstName)) {
            $("#signUpBox").addClass("error");
            $("#signUpBox").find(".firstName").parent(".field").addClass("error");
            $("#signUpBox").find(".firstName").trigger("focus");
            $("#signUpBox #errorMessage p").text("Please enter a real name.");
            return false;
        }
        firstName = capital_letter(firstName);
        /* if last name is empty */
        if(lastName == "") {
            $("#signUpBox").addClass("error");
            $("#signUpBox").find(".lastName").parent(".field").addClass("error");
            $("#signUpBox").find(".lastName").trigger("focus");
            $("#signUpBox #errorMessage p").text("Please enter your last name.");
            return false;
        }
        /* if last name does not contain only letters */
        if (!allLetter(lastName)) {
            $("#signUpBox").addClass("error");
            $("#signUpBox").find(".lastName").parent(".field").addClass("error");
            $("#signUpBox").find(".lastName").trigger("focus");
            $("#signUpBox #errorMessage p").text("Please enter a real name.");
            return false;
        }
        lastName = capital_letter(lastName);
        /* check for email */
        /* if email is empty */
        if(email == "") {
            $("#signUpBox").addClass("error");
            $("#signUpBox").find(".email").parent(".field").addClass("error");
            $("#signUpBox").find(".email").trigger("focus");
            $("#signUpBox #errorMessage p").text("Please enter your email.");
            return false;
        }
        /* check for valid email format */
        if (!validateEmail(email)) {
            $("#signUpBox").addClass("error");
            $("#signUpBox").find(".email").parent(".field").addClass("error");
            $("#signUpBox").find(".email").trigger("focus");
            $("#signUpBox #errorMessage p").text("Enter a valid email address.");
            return false;
        }
        /* check for password */
        /* if password is empty */
        if(password == "") {
            $("#signUpBox").addClass("error");
            $("#signUpBox").find(".password").parent(".field").addClass("error");
            $("#signUpBox").find(".password").trigger("focus");
            $("#signUpBox #errorMessage p").text("Enter your password.");
            return false;
        }
        /* check for password length */
        if(password.length < 6) {
            $("#signUpBox").addClass("error");
            $("#signUpBox").find(".password").parent(".field").addClass("error");
            $("#signUpBox").find(".password").trigger("focus");
            $("#signUpBox #errorMessage p").text("Enter at least 6 characters");
            return false;
        }
        /* check for full birthday :: if empty or not number */
        if(birthMonth == "" || birthDay == "" || birthYear == "" || isNaN(birthMonth) || isNaN(birthDay) || isNaN(birthYear)) {
            $("#signUpBox").addClass("error");
            if(birthMonth == "" || isNaN(birthMonth)){
                $("#signUpBox").find(".birthMonth").parent(".field").addClass("error");
                $("#signUpBox").find(".birthMonth").trigger("focus");
            } else if(birthDay == "" || isNaN(birthDay)) {
                $("#signUpBox").find(".birthDay").parent(".field").addClass("error");
                $("#signUpBox").find(".birthDay").trigger("focus");
            } else if(birthYear == "" || isNaN(birthYear)) {
                $("#signUpBox").find(".birthYear").parent(".field").addClass("error");
                $("#signUpBox").find(".birthYear").trigger("focus");
            }
            $("#signUpBox #errorMessage p").text("Enter a number");
            return false;
        }
        /* check for valid birthday and birthmonth */
        birthMonth = parseInt(birthMonth, 10);
        birthDay = parseInt(birthDay,10);
        if((birthMonth < 1 || birthMonth > 12) || (birthDay < 1 || birthDay > 31)) {
            $("#signUpBox").addClass("error");
            if(birthMonth < 1 || birthMonth > 12){
                $("#signUpBox").find(".birthMonth").parent(".field").addClass("error");
                $("#signUpBox").find(".birthMonth").trigger("focus");
                $("#signUpBox #errorMessage p").text("Enter a valid month");
            } else if(birthDay < 1 || birthDay > 31) {
                $("#signUpBox").find(".birthDay").parent(".field").addClass("error");
                $("#signUpBox").find(".birthDay").trigger("focus");
                $("#signUpBox #errorMessage p").text("Enter a valid day");
            }
            return false;
        }
        /* check for valid birth year */
        birthYear = parseInt(birthYear);
        var userAge = new Date().getFullYear() - birthYear;
        if(userAge < 13 || userAge > 100) {
           $("#signUpBox").addClass("error");
           $("#signUpBox").find(".birthYear").parent(".field").addClass("error");
           $("#signUpBox").find(".birthYear").trigger("focus");
           if(userAge < 13 && userAge > 1) {
              $("#signUpBox #errorMessage p").text("You must be at least 13");
           } else {
              $("#signUpBox #errorMessage p").text("Enter a valid year");
           }
           return false;
        }
        /* check for gender */
        if(gender === undefined) {
            $("#signUpBox").addClass("error");
            $("#signUpBox #errorMessage p").text("Your gender?");
            return false;
        }
        /* check for captcha words */
        if (captchaWord == "" || captchaWord != "africa connect") {
            $("#signUpBox").addClass("error");
            $("#signUpBox").find(".captcha").parent(".field").addClass("error");
            $("#signUpBox").find(".captcha").trigger("focus");
            if(captchaWord == "") {
                $("#signUpBox #errorMessage p").text("Enter the 2 words from the picture above!");
            } else {
                $("#signUpBox #errorMessage p").text("Incorrect words!");
            }
            return false;
        }
        /* Make sure agree terms and condition is checked */
        if(!agreeTerms) {
            $("#signUpBox").addClass("error");
            $("#signUpBox #errorMessage p").text("You must agree to terms and service");
            return false;
        }
        // send verification code
        sendVerificationCode(email);
        verifyAccountProcess(email,password,firstName,lastName,birthMonth,birthDay,birthYear,gender,verificationCode);
  });
};
