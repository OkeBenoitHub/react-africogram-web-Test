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
