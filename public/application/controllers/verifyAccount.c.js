// send verification code
window.sendVerificationCode = function(email) {
  // generate a random number for verification code
  window.verificationCode = getRandomIntInclusive(10000, 30000);
  var toEmailsArray = [email];
  var headLineTitle = "Verify your account";
  var htmlTemp = "Your verification code is " + verificationCode + ".<br/>" + "If you didn't request this code, you can simply ignore this email.";
  var subject = "Verify your account";
  if(!$("body").hasClass("verifyCodeProcess")) {
      $("body").addClass("verifyCodeProcess");
      sendHtmlEmail(toEmailsArray,headLineTitle,htmlTemp,subject).then(docRef => {
          // console.log("Document written with ID: ", docRef.id);
          showDialogBox("verifyAccountModal",false,false,false);
      })
      .catch(error => {
          console.error("Error adding document: ", error);
      });
  } else {
      // if verification code was sent already :: just show the dialog box
      showDialogBox("verifyAccountModal",false,false,false);
  }
};
// verify account process
window.verifyAccountProcess = function(email,password,firstName,lastName,birthMonth,birthDay,birthYear,gender,verificationCode) {
    $(".verifyAccount").click(function() {
        var inputCode = $(".verifyCode").val().trim();
        if (inputCode == verificationCode) {
            // verification code matches
            $("#verifyAccountBox").removeClass("error").removeClass("success").addClass("loading");
            /* try to sign up new user */
            signUpNewUserForAfricogram(email,password,firstName,lastName,birthMonth,birthDay,birthYear,gender);
        } else {
            // verification code incorrect
            $("#verifyAccountBox").removeClass("success").addClass("error");
        }
    });
    // re-send verification code
    $(".resendCode").click(function() {
        $("#verifyAccountBox").removeClass("error").addClass("success");
        $(".verifyAccountModal.modal").modal("hide");
        $("body").removeClass("verifyCodeProcess");
        sendVerificationCode(email);
    });
  };