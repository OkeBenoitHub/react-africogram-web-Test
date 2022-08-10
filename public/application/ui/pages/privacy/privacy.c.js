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