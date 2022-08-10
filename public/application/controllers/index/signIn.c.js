// sign in process
window.signInProcess = function() {
  $("#signInButton").click(function() {
      showDialogBox("signInModal",true,false,false);
  });

  /* sign in button in dialog clicked */
  $("#signInButton2").click(function() {
      var emailLog = $(".emailLog").val().trim();
      var passwordLog = $(".passwordLog").val().trim();
      $("#signInForm").removeClass("error");
      $("#signInForm .field").removeClass("error");
      /* Check if email is empty */
      if (emailLog == "" || !validateEmail(emailLog)) {
          $("#signInForm").addClass("error");
          $("#signInForm").find(".emailLog").parent(".field").addClass("error");
          $("#signInForm").find(".emailLog").trigger("focus");
          $("#errorMessageLog").text("Enter a valid email.");
          return false;
      }
      /* Check for password */
      if (passwordLog == "") {
          $("#signInForm").addClass("error");
          $("#signInForm").find(".passwordLog").parent(".field").addClass("error");
          $("#signInForm").find(".passwordLog").trigger("focus");
          $("#errorMessageLog").text("Your password?");
          return false;
      }
      $("#signInForm").addClass("loading");
      signInUserToAfricogram(emailLog, passwordLog);
  });
  /* if user press enter instead of clicking sign in button to sign in */
  $("#signInForm input").keyup(function(e) {
      if (e.keyCode == 13) {
          $("#signInButton2").trigger("click");
      }
  });
  /* user clicked forgot password link */
  $("#forgotPass").click(function() {
      showDialogBox("recoverPasswordModal",true,true,false);
  });

  /* reset password button clicked */
  $("#resetPasswordButton").click(function(){
      var emailRecover = $(".emailRec").val().trim();
      $("#recoverForm").removeClass("error");
      $("#recoverForm .field").removeClass("error");
      /* Check for email entered */
      if(emailRecover == "" || !validateEmail(emailRecover)) {
          $("#recoverForm").addClass("error");
          $("#recoverForm").find(".emailRec").parent(".field").addClass("error");
          $("#recoverForm").find(".emailRec").trigger("focus");
          $("#recoverForm .errorMessage").text("Enter a valid email.");
          return false;
      }
      $("#recoverForm").addClass("loading");
      sendUserPasswordReset(emailRecover);
  });
};